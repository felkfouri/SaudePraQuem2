'use strict';
/* Lê do index.html o bloco de cálculo (entre os marcadores CALC:INICIO e CALC:FIM) e devolve o objeto Calc.
   Assim os testes rodam o mesmo código que roda na página, sem cópia. */
const fs=require('fs'),path=require('path');
const html=fs.readFileSync(path.join(__dirname,'..','index.html'),'utf8');
const m=html.match(/\/\* CALC:INICIO \*\/([\s\S]*?)\/\* CALC:FIM \*\//);
if(!m)throw new Error('bloco CALC não encontrado no index.html');
module.exports={Calc:new Function(m[1]+';return Calc;')(),html};
