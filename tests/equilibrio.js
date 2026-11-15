'use strict';
/* Equilíbrio do jogo: nenhuma estratégia simples pode agradar aos três jurados, e as partidas sempre terminam.
   Joga, sem navegador, N sementes por configuração com seis estratégias fixas.
   Uso: node tests/equilibrio.js [sementes=300] */
const {Calc:C}=require('./carregar.js');
const N=+process.argv[2]||300;
function greedy(G,P,f,ord){let s=C.teto(G);const dec=P.casos.map(()=>false),idx=P.casos.map((_,i)=>i);if(ord)idx.sort((a,b)=>ord(P.casos[a],P.casos[b]));
  for(const i of idx){const c=P.casos[i];if(f(c)&&c.cost<=s+1e-9){dec[i]=true;s-=c.cost;}}return dec;}
const rc=c=>C.rceiCaso(c);
const E={
  regua:(G,P)=>greedy(G,P,c=>rc(c)===null||rc(c)<=C.K_JOGO),
  depoimento:(G,P)=>greedy(G,P,c=>c.com>=2,(a,b)=>b.com-a.com),
  tudo:(G,P)=>greedy(G,P,()=>true),
  nada:(G,P)=>P.casos.map(()=>false),
  graves:(G,P)=>greedy(G,P,c=>c.w>=1.2&&(rc(c)===null||rc(c)<=3*C.K_JOGO)),
  acaso:(G,P,r)=>greedy(G,P,()=>r()<.5)
};
const falhas=[];let partidas=0;
for(const dif of ['facil','normal','dificil'])for(const reunioes of [6,4,3])for(const tutorial of [true,false]){
  const med={};
  for(const k in E){const a=[0,0,0];
    for(let s=1;s<=N;s++){
      const G=C.novaPartida({seed:s,reunioes,dif,tutorial}),r=C.rng(s*31+7);let passos=0;
      while(!G.fim){C.fecharReuniao(G,E[k](G,C.pautaAtual(G),r));if(++passos>20)throw new Error('partida não termina');}
      if(G.hist.length<reunioes*2)falhas.push('partida curta demais');
      if(new Set(G.pautas.flatMap(p=>p.casos.map(c=>c.lim)).filter(Boolean)).size<2)falhas.push('partida com menos de duas limitações diferentes (semente '+s+', '+reunioes+(tutorial?'':', sem tutorial')+')');
      if(G.orc<-1e-9)falhas.push('orçamento negativo');
      const R=C.resultado(G);partidas++;
      for(const x of [R.gC,R.gO,R.gP])if(!(x>=0&&x<=10))falhas.push('nota fora de 0 a 10: '+x);
      if(k!=='acaso'&&Math.min(R.gC,R.gO,R.gP)>=9)falhas.push(k+' tirou 9 ou mais nos três jurados (semente '+s+', '+dif+', '+reunioes+')');
      a[0]+=R.gC;a[1]+=R.gO;a[2]+=R.gP;
    }
    med[k]=a.map(x=>x/N);
  }
  const tag=dif+'/'+reunioes+(tutorial?'':'/sem tutorial');
  const quer=(ok,msg)=>{if(!ok)falhas.push(tag+': '+msg+' '+JSON.stringify(Object.fromEntries(Object.entries(med).map(([k,v])=>[k,v.map(x=>+x.toFixed(1))]))));};
  quer(med.regua[0]>med.depoimento[0]+3,'a régua deveria vencer o depoimento no Contador');
  quer(med.depoimento[2]>med.regua[2]+1,'o depoimento deveria vencer a régua na Praça');
  quer(med.graves[1]>med.regua[1]+2,'priorizar os graves deveria vencer a régua na Ouvidora');
  quer(med.regua[0]>=9,'a régua deveria ficar perto do máximo do Contador');
  quer(med.nada[1]<1&&med.nada[2]<3,'não fazer nada não pode agradar à Ouvidora nem à Praça');
  for(const k in med)quer(Math.min(...med[k])<7.5,'a estratégia "'+k+'" agrada demais aos três jurados');
  console.log(tag.padEnd(26)+Object.entries(med).map(([k,v])=>k+' '+v.map(x=>x.toFixed(1)).join('/')).join('  '));
}
if(falhas.length){console.error('\nFALHAS:\n'+[...new Set(falhas)].slice(0,30).join('\n'));process.exit(1);}
console.log('equilibrio.js: '+partidas+' partidas, sem falhas. (notas médias: Contador/Ouvidora/Praça)');
