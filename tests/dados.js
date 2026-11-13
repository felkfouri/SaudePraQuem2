'use strict';
/* Consistência dos dados do jogo Plenário: campos obrigatórios, valores conhecidos, nomes únicos, pares "irmãos".
   Uso: node tests/dados.js */
const {Calc:C,html}=require('./carregar.js');
const P=[],bad=(o,m)=>P.push(o+': '+m);
const ids=new Set(),nomes=new Set();
const todas=[C.TUTORIAL].concat(C.PAUTAS);
for(const p of todas){
  if(!p.id||!p.tema||!p.intro)bad(p.id,'pauta sem id, tema ou intro');
  if(!Array.isArray(p.casos)||p.casos.length<2||p.casos.length>3)bad(p.id,'cada pauta tem 2 ou 3 casos');
  for(const c of p.casos){
    const o=p.id+'/'+c.id;
    for(const k of ['id','nm','oq','insp','viu'])if(!c[k])bad(o,'falta '+k);
    if(typeof c.nao!=='string')bad(o,'nao deve ser texto (pode ser vazio)');
    if(ids.has(c.id))bad(o,'id repetido');ids.add(c.id);
    if(nomes.has(c.nm))bad(o,'nome repetido');nomes.add(c.nm);
    if(!(Number.isFinite(c.cost)&&c.cost!==0))bad(o,'cost inválido');
    if(!(c.q>0))bad(o,'q deve ser positivo');
    if(!C.SPREAD[c.ev])bad(o,'ev desconhecida: '+c.ev);
    if(![1,1.2,1.7].includes(c.w))bad(o,'w deve ser 1, 1.2 ou 1.7');
    if(![0,1,2,3].includes(c.com))bad(o,'com deve ser 0 a 3');
    if(!c.dep||!c.dep.t||!c.dep.q)bad(o,'depoimento incompleto');
    if(!(Number.isInteger(c.lim)&&c.lim>=0&&c.lim<=8))bad(o,'lim deve ser 0 a 8');
    if(c.lim&&!html.includes('id="lim-'+c.lim+'"'))bad(o,'limitação '+c.lim+' não existe no guia');
    if(c.nao&&!c.lim)bad(o,'tem "nao" mas não aponta a limitação');
    if(c.virada&&!(c.virada.t&&Number.isFinite(c.virada.sim)&&Number.isFinite(c.virada.nao)))bad(o,'virada incompleta');
    if(c.irma&&!p.casos.some(x=>x.id===c.irma))bad(o,'irma fora da mesma pauta: '+c.irma);
  }
}
if(C.TUTORIAL.casos.length!==3)bad('tut','o tutorial tem 3 casos');
if(C.PAUTAS.length<5)bad('PAUTAS','são precisas ao menos 5 pautas para uma partida de 6 reuniões');
// todas as oito limitações do guia... as que o jogo cobre: ao menos 1, 2, 3, 4, 6 e 7
for(const l of [1,2,3,4,6,7])if(!todas.some(p=>p.casos.some(c=>c.lim===l)))bad('PAUTAS','nenhum caso ilustra a limitação '+l);
// há casos em que a régua acerta contra a pressão: comoção alta com custo por QALY muito acima, e um dominante
if(!todas.some(p=>p.casos.some(c=>C.rceiCaso(c)===null)))bad('PAUTAS','falta um caso dominante');
if(!todas.some(p=>p.casos.some(c=>c.virada)))bad('PAUTAS','falta o caso com virada');
// os números citados nos textos dos casos batem com cost e q
const chk=(id,esperado)=>{const c=todas.flatMap(p=>p.casos).find(x=>x.id===id),r=C.rceiCaso(c);if(Math.abs(r-esperado)>1)bad(id,'custo por QALY '+r+', o texto diz '+esperado);};
chk('t3',200000);chk('p6a',400000);chk('p7a',250000);
if(P.length){console.error(P.join('\n'));process.exit(1);}
console.log('dados.js: '+todas.length+' pautas, '+ids.size+' casos, tudo consistente.');
