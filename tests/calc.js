'use strict';
/* Testes dos cálculos dos quatro interativos. Valores esperados calculados à mão (ver docs/MODELO.md).
   Uso: node tests/calc.js   (termina com código 0 se tudo passar) */
const assert=require('assert'),{Calc:C}=require('./carregar.js');
let n=0;const perto=(a,b,tol,msg)=>{n++;assert.ok(Math.abs(a-b)<=(tol||1e-9),(msg||'')+' esperado '+b+', obtido '+a);};
const igual=(a,b,msg)=>{n++;assert.strictEqual(a,b,msg);};

// ---- Desenhe uma vida
perto(C.qalyPerfil([.5,.5],2,0),1,0,'2 anos a 0,5');
perto(C.qalyPerfil(Array(10).fill(1),10,0),10,0,'10 anos a 1');
perto(C.qalyPerfil([.7,.7,.7,.7,.7,.7,.7,.7,.7,.7],10,0),7,1e-12,'10 anos a 0,7');
perto(C.qalyPerfil([.6,.5,.4,.9],3,0),1.5,1e-12,'só conta os anos vividos');
// desconto de 5%: 1 + 1/1,05 + 1/1,05² = 1 + 0,952381 + 0,907029 = 2,859410
perto(C.qalyPerfil([1,1,1],3,0.05),2.859410,1e-6,'3 anos a 1, desconto 5%');
// 0,8 + 0,6/1,05 = 0,8 + 0,571429 = 1,371429
perto(C.qalyPerfil([.8,.6],2,0.05),1.371429,1e-6,'perfil misto com desconto');
perto(C.fatorDesconto(1,0.05),1,0,'primeiro ano sem desconto');
perto(C.fatorDesconto(11,0.05),0.613913,1e-6,'1 QALY daqui a 10 anos');
perto(C.fatorDesconto(31,0.05),0.231377,1e-6,'1 QALY daqui a 30 anos');
perto(C.anosVida(4,0),4,0,'anos de vida');
{ // "Só mais tempo": 4 anos a 0,5 contra 8 anos a 0,5 → +2 QALYs, +4 anos
  const o=C.compararVidas({q:Array(10).fill(.5),vive:4},{q:Array(10).fill(.5),vive:8},0);
  perto(o.qalySem,2);perto(o.qalyCom,4);perto(o.ganhoQaly,2);perto(o.ganhoAnos,4);
  // prótese: 10 × 0,55 = 5,5; 0,6 + 9 × 0,85 = 8,25; ganho 2,75; anos 0
  const p=C.compararVidas({q:Array(10).fill(.55),vive:10},{q:[.6].concat(Array(9).fill(.85)),vive:10},0);
  perto(p.qalySem,5.5,1e-12);perto(p.qalyCom,8.25,1e-12);perto(p.ganhoQaly,2.75,1e-12);perto(p.ganhoAnos,0);
  // ganho negativo
  const q=C.compararVidas({q:[.9,.9],vive:2},{q:[.5,.5],vive:2},0);perto(q.ganhoQaly,-0.8,1e-12);
}

// ---- EQ-5D-3L, tarifa brasileira (Santos et al., 2016). Valores conferidos nos arquivos da EuroQol (docs/FONTES.md)
const T={'11111':1,'21111':0.731,'11211':0.754,'11121':0.787,'11113':0.756,'11112':0.801,'22222':0.408,'21232':0.416,'33333':-0.177};
for(const k in T)perto(C.eq5dIndice(k.split('').map(Number)),T[k],1e-9,'estado '+k);
{ const todos=C.eq5dTodos();igual(todos.length,243,'243 estados');
  igual(todos.filter(x=>x.v<0).length,10,'10 estados abaixo de zero');
  perto(Math.min(...todos.map(x=>x.v)),-0.177,1e-9,'menor valor');perto(Math.max(...todos.map(x=>x.v)),1,0,'maior valor');
  igual(todos.filter(x=>x.v===1).length,1,'só 11111 vale 1');
  perto(Math.max(...todos.filter(x=>x.v<1).map(x=>x.v)),0.801,1e-9,'segundo melhor estado');
  n++;assert.ok(Number.isNaN(C.eq5dIndice([1,1,1,1])),'estado inválido');n++;assert.ok(Number.isNaN(C.eq5dIndice([1,1,1,1,4])));
  // os três estados do "Qual é o seu peso?": 11121, 21222 e 23332
  perto(C.eq5dIndice([2,1,2,2,2]),0.520,1e-9);perto(C.eq5dIndice([2,3,3,3,2]),0.111,1e-9);
}

// ---- Qual é o seu peso? escada 9, 8, 7, 6, 5, 3, 1 (T = 10)
igual(C.TTO_T,10);assert.deepStrictEqual(C.TTO_ESCADA,[9,8,7,6,5,3,1]);n++;
const U=[0.95,0.85,0.75,0.65,0.55,0.4,0.2,0.05];
U.forEach((u,k)=>perto(C.ttoPeso(k).u,u,1e-12,'aceitos = '+k));
igual(C.ttoPeso(7).fim,true);igual(C.ttoPeso(3).fim,false);perto(C.ttoPeso(7).cima,0.1,1e-12);

// ---- Quanto custa um QALY?
{ let o=C.avaliar(60000,2,40000);igual(o.tipo,'troca');perto(o.rcei,30000);igual(o.ok,true);perto(o.deslocada,1.5);perto(o.bls,0.5);
  o=C.avaliar(20000,1,40000);perto(o.rcei,20000);igual(o.ok,true);            // prótese do texto
  o=C.avaliar(60000,0.25,40000);perto(o.rcei,240000);igual(o.ok,false);perto(o.bls,-1.25); // remédio de câncer
  o=C.avaliar(2400000,8,40000);perto(o.rcei,300000);igual(o.ok,false);
  o=C.avaliar(2400000,8,120000);igual(o.ok,false);perto(o.deslocada,60);     // mesmo com 3 vezes; a saúde deslocada usa sempre R$ 40 mil
  igual(C.REF,40000);
  // entre a referência e o limite de 3 vezes: a regra aceita, mas o saldo pela hipótese é negativo (escolha de prioridade)
  o=C.avaliar(80000,1,120000);igual(o.ok,true);igual(o.prioridade,true);perto(o.deslocada,2);perto(o.bls,-1);
  o=C.avaliar(80000,1,40000);igual(o.ok,false);igual(o.prioridade,false);perto(o.deslocada,2);
  o=C.avaliar(20000,1,120000);igual(o.ok,true);igual(o.prioridade,false);perto(o.deslocada,0.5);
  // quadrante de economia com o limite de 3 vezes: poupar R$ 80 mil por QALY perdido é recusado pela regra,
  // embora o saldo pela hipótese seja positivo (2 QALYs rendidos contra 1 perdido): escolha de prioridade
  o=C.avaliar(-80000,-1,120000);igual(o.tipo,'economia');igual(o.ok,false);igual(o.prioridade,true);perto(o.bls,1);perto(o.deslocada,-2);
  o=C.avaliar(-80000,-1,40000);igual(o.ok,true);igual(o.prioridade,false);
  o=C.avaliar(-20000,-1,120000);igual(o.ok,false);igual(o.prioridade,false);
  o=C.avaliar(-200000,-1,120000);igual(o.ok,true);igual(o.prioridade,false);
  o=C.avaliar(40000,1,40000);igual(o.ok,true);perto(o.bls,0);                // exatamente no limiar
  o=C.avaliar(-600,0.2,40000);igual(o.tipo,'dominante');igual(o.ok,true);igual(o.rcei,null);
  o=C.avaliar(0,0.2,40000);igual(o.tipo,'dominante');
  o=C.avaliar(-1000,0,40000);igual(o.tipo,'dominante');igual(o.ok,true);igual(o.rcei,null);perto(o.bls,0.025,1e-12); // mesma saúde, mais barato
  o=C.avaliar(3000,-0.1,40000);igual(o.tipo,'dominada');igual(o.ok,false);igual(o.rcei,null);
  o=C.avaliar(3000,0,40000);igual(o.tipo,'dominada');
  o=C.avaliar(-40000,-0.05,40000);igual(o.tipo,'economia');perto(o.rcei,800000,1e-6);igual(o.ok,true);
  o=C.avaliar(-1000,-0.05,40000);igual(o.tipo,'economia');perto(o.rcei,20000,1e-6);igual(o.ok,false);
  o=C.avaliar(0,0,40000);igual(o.tipo,'igual');igual(o.ok,null);
  // o benefício líquido em saúde e a RCEI concordam no veredito, nos dois quadrantes em que há troca
  for(const dC of [-90000,-5000,5000,39000,41000,500000])for(const dE of [-2,-0.1,0.1,1,3]){const x=C.avaliar(dC,dE,40000);if(x.rcei!==null){n++;assert.strictEqual(x.ok,x.bls>=-1e-12,'BLS e RCEI discordam em '+dC+', '+dE);}}
  // com o limite de 3 vezes, ok e BLS só podem discordar quando há escolha de prioridade
  for(const dC of [5000,39000,41000,100000,130000])for(const dE of [0.5,1,3]){const x=C.avaliar(dC,dE,120000);n++;assert.strictEqual(x.prioridade,x.ok!==(x.bls>=-1e-12),'prioridade mal marcada em '+dC+', '+dE);}
  for(const lim of [40000])for(const dC of [-90000,5000,41000])for(const dE of [-2,1]){const x=C.avaliar(dC,dE,lim);if(x.rcei!==null){n++;assert.strictEqual(x.prioridade,false,'com a referência de base não há escolha de prioridade');}}
}
// ---- os números escritos no texto do site batem com o código
{ const {html}=require('./carregar.js');const tem=(t,msg)=>{n++;assert.ok(html.includes(t),'o texto do site deveria conter: '+(msg||t));};
  const br=x=>x.toFixed(3).replace('.',',');
  for(const d of C.TARIFA.d)tem('<td class="num">'+br(d[1])+'</td><td class="num">'+br(d[2])+'</td>','linha da tabela de coeficientes '+br(d[1])+' / '+br(d[2]));
  tem('perde 0,149 de saída');tem('vale −0,177');tem('10 ficaram abaixo de zero');tem('conta como 0,61 hoje');tem('como 0,23');
  tem('26.000 − 6.000 = <b>R$ 20.000</b>');tem('<strong>R$ 40 mil por QALY</strong>');tem('<strong>R$ 35 mil por ano de vida ganho</strong>');tem('5% ao ano');tem('(R$ 120 mil por QALY)');tem('dividido por R$ 40 mil, sempre');tem('por exemplo, por ser uma doença rara ou grave');tem('media="print" onload=');tem('quatro situações');tem('que não houve pedido de inclusão ou que a análise demorou demais');tem('9.148 pessoas');tem('No caso brasileiro, 9.148');
  igual(C.K_JOGO,40000);
  // caso da vacina no jogo: 7.000 QALYs em 30 anos, com 5% ao ano = 1.620
  perto(Math.round(7000*C.fatorDesconto(31,0.05)/10)*10,1620,0,'7.000 × 1,05^-30');
  const p9a=C.PAUTAS.find(p=>p.id==='p9').casos[0];igual(p9a.q,1620);
}
console.log('calc.js: '+n+' verificações, todas certas.');
