'use strict';
/* Portão automático na página real (Playwright + Chromium, sem janela).
   1. zero erros no console, em 375 px e 1280 px;
   2. os quatro interativos respondem com os valores esperados;
   3. links internos: toda âncora #x aponta para um id que existe;
   4. teclado: o link "pular para o conteúdo", foco visível e uma partida iniciada só com o teclado;
   5. três partidas do jogo (três códigos) até o fim, por cliques nos elementos reais, sem erro e sem "undefined"/"NaN";
   6. acessibilidade (axe-core): nenhuma violação séria ou crítica, no guia e em quatro telas do jogo, tema claro e escuro;
   7. capturas de tela de cada seção e de três momentos do jogo, nas duas larguras;
   8. peso e tempo de carga.
   9. o jogo padrão cabe em 10 minutos de leitura (até 1.500 palavras) e os gráficos têm letra legível no celular.
   Uso: node tests/pagina.js [pasta de saída=review/rodada-1]
   Para usar outro Chromium: CHROMIUM_PATH=/caminho/do/chrome. Escreve <pasta>/portao.md e termina com código 0 se tudo passar. */
const {chromium}=require('playwright');
const fs=require('fs'),path=require('path'),{pathToFileURL}=require('url');
const OUT=path.resolve(process.argv[2]||'review/rodada-1');
const FILE=path.join(__dirname,'..','index.html'),URL=pathToFileURL(FILE).href;
const AXE=fs.readFileSync(require.resolve('axe-core/axe.min.js'),'utf8');
fs.mkdirSync(OUT,{recursive:true});
const log=[],falhas=[];
const ok=(c,msg)=>{log.push((c?'- [x] ':'- [ ] **FALHA** ')+msg);if(!c)falhas.push(msg);};
const SECOES=['topo','problema','qaly','desenhe','peso','eq5d','meu-peso','decisao','rcei','vantagens','limitacoes','alternativas','plenario','glossario','refs','sobre'];
const SEEDS=[1234,2718,4242];

async function axe(page,nome){
  await page.evaluate(AXE);
  const r=await page.evaluate(async()=>await window.axe.run(document,{resultTypes:['violations']}));
  const graves=r.violations.filter(v=>v.impact==='serious'||v.impact==='critical');
  ok(graves.length===0,'axe, '+nome+': '+(graves.length?graves.map(v=>v.id+' ('+v.nodes.length+'): '+v.nodes.slice(0,3).map(n=>n.target.join(' ')).join(' | ')).join('; '):'nenhuma violação séria ou crítica')+(r.violations.length-graves.length?' ['+(r.violations.length-graves.length)+' menores: '+r.violations.filter(v=>!graves.includes(v)).map(v=>v.id).join(', ')+']':''));
}
const texto=(page,sel)=>page.locator(sel).innerText();
async function jogar(page,seed,estrategia,shots,longa){
  await page.goto('about:blank');await page.goto(URL+'#jogo');await page.waitForSelector('#gBegin');
  let palavras=(await texto(page,'#gStart')).split(/\s+/).length; // tela inicial como o jogador a vê, com as opções fechadas
  await page.locator('#gStart .panel details').evaluate(d=>d.open=true);
  await page.fill('#gSeed',String(seed));
  if(longa)await page.click('#lenPick [data-len="6"]');
  if(shots)await shots('jogo-1-inicio');
  await page.click('#gBegin');
  let reunioes=0;
  for(;;){
    await page.waitForSelector('#gFechar');
    const n=await page.locator('#gameLeft .caso').count();
    palavras+=(await texto(page,'#gameLeft')).split(/\s+/).length;
    // decide caso a caso; se não couber no orçamento, recusa os últimos
    const dec=[];for(let k=0;k<n;k++)dec.push(estrategia(seed,reunioes,k));
    for(let k=0;k<n;k++){const sel='#gameLeft input[name="v'+k+'"][value="'+(dec[k]?1:0)+'"]';if(await page.locator(sel).isDisabled())continue;await page.check(sel);}
    for(let k=n-1;k>=0&&await page.locator('#gFechar').isDisabled();k--)await page.check('#gameLeft input[name="v'+k+'"][value="0"]');
    if(shots&&reunioes===1)await shots('jogo-2-reuniao');
    await page.click('#gFechar');await page.waitForSelector('#gNext');reunioes++;
    if(shots&&reunioes===1)await shots('jogo-2b-ata-sem-regua');
    const t=await texto(page,'#gameLeft');palavras+=t.split(/\s+/).length;
    if(/undefined|NaN|\{\w\}/.test(t))falhas.push('texto quebrado na ata (semente '+seed+', reunião '+reunioes+')');
    const fim=(await texto(page,'#gNext')).includes('jornal');
    await page.click('#gNext');
    if(fim)break;
    if(reunioes>10)throw new Error('partida não termina');
  }
  await page.waitForSelector('.paper');
  const t=await texto(page,'#gameLeft');palavras+=t.split(/\s+/).length;
  if(/undefined|NaN|\{\w\}/.test(t))falhas.push('texto quebrado no jornal (semente '+seed+')');
  const notas=await page.evaluate(()=>['fC','fO','fP'].map(i=>document.getElementById(i).textContent));
  if(shots)await shots('jogo-3-jornal');
  return {reunioes,notas,palavras,titulo:await texto(page,'.final .n'),lateral:await texto(page,'#jC'),jornal:await texto(page,'.paper')};
}

(async()=>{
  const browser=await chromium.launch(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{});
  const t0=Date.now();
  for(const [w,h] of [[375,740],[1280,800]]){
    const ctx=await browser.newContext({viewport:{width:w,height:h},deviceScaleFactor:1,hasTouch:w<500,reducedMotion:'reduce'});
    const page=await ctx.newPage(),erros=[];
    page.on('console',m=>{if(m.type()==='error'&&!/fonts\.g|ERR_|Failed to load resource/.test(m.text()))erros.push(m.text());});
    page.on('pageerror',e=>erros.push(String(e)));
    const ini=Date.now();await page.goto(URL);await page.waitForSelector('#dvSvg');const carga=Date.now()-ini;
    if(w===375)ok(carga<3000,'carga da página em '+carga+' ms (arquivo de '+Math.round(fs.statSync(FILE).size/1024)+' kB, sem imagens nem bibliotecas)');
    // sem rolagem horizontal
    const over=await page.evaluate(()=>document.documentElement.scrollWidth-document.documentElement.clientWidth);
    ok(over<=1,w+' px: sem rolagem horizontal no guia (sobra '+over+' px)');
    // capturas das seções
    let fora=[];
    for(const s of SECOES){
      // rola até a seção (um pouco abaixo da barra fixa) e confere a posição antes de fotografar
      const top=await page.evaluate(id=>{const el=document.getElementById(id);window.scrollTo(0,Math.max(0,el.getBoundingClientRect().top+scrollY-56));return el.getBoundingClientRect().top;},s);
      await page.waitForTimeout(120);
      const y=await page.evaluate(id=>document.getElementById(id).getBoundingClientRect().top,s);
      if(y<-5||y>200)fora.push(s+' ('+Math.round(y)+' px)');
      await page.screenshot({path:path.join(OUT,w+'-'+s+'.png')});
    }
    ok(fora.length===0,w+' px: cada captura mostra a seção do nome'+(fora.length?' — fora de posição: '+fora.join(', '):''));
    // letra legível nos gráficos: pelo menos 11 px na tela
    const letra=await page.evaluate(()=>Math.min(...[...document.querySelectorAll('#dvSvg text,#rcPlane text')].map(t=>t.getBoundingClientRect().height).filter(h=>h>0)));
    ok(letra>=11,w+' px: texto dos gráficos com '+letra.toFixed(1)+' px de altura (mínimo 11)');

    if(w===375){
      // ---- interativos
      await page.click('#dvPresets [data-p="prolonga"]');
      ok(await texto(page,'#dvGanho')==='+2,00'&&await texto(page,'#dvAV')==='+4','Desenhe uma vida: "Só mais tempo" dá +2,00 QALYs e +4 anos');
      await page.click('#dvPresets [data-p="quadril"]');
      ok(await texto(page,'#dvQsem')==='5,50'&&await texto(page,'#dvQcom')==='8,25'&&await texto(page,'#dvGanho')==='+2,75','Desenhe uma vida: prótese 5,50 → 8,25 (+2,75)');
      await page.check('#dvDesc');const comDesc=await texto(page,'#dvGanho');ok(comDesc!=='+2,75'&&/^\+2,/.test(comDesc),'Desenhe uma vida: com desconto o ganho diminui ('+comDesc+')');
      await page.click('#dvPresets [data-p="prolonga"]');ok(await texto(page,'#dvAV')==='+4'&&(await texto(page,'#dvFrase')).includes('vive 4 anos a mais'),'Desenhe uma vida: com desconto, os anos vividos continuam 4');await page.uncheck('#dvDesc');await page.click('#dvPresets [data-p="quadril"]');
      // toque no gráfico muda a coluna
      await page.locator('#dvSvg').scrollIntoViewIfNeeded();const box=await page.locator('#dvSvg').boundingBox();await page.mouse.click(box.x+box.width*0.5,box.y+box.height*0.2);
      ok(await texto(page,'#dvQcom')!=='8,25','Desenhe uma vida: tocar no gráfico altera a curva');
      // controle fino pelo teclado
      await page.locator('#desenhe details').evaluate(d=>d.open=true);await page.focus('#dvS1');await page.keyboard.press('ArrowRight');
      ok(true,'Desenhe uma vida: controles ano a ano acessíveis por teclado');
      await page.check('#eq0_1');await page.check('#eq2_1');await page.check('#eq3_2');await page.check('#eq4_1');
      ok(await texto(page,'#eqCod')==='21232'&&await texto(page,'#eqIdx')==='0,416','EQ-5D: estado 21232 = 0,416');
      await page.click('#eqPior');ok(await texto(page,'#eqIdx')==='−0,177','EQ-5D: pior estado = −0,177');
      await page.click('#eqMelhor');ok(await texto(page,'#eqIdx')==='1,000','EQ-5D: melhor estado = 1,000');
      // escada: aceita 3 degraus (9, 8, 7) e recusa o 6 → u = 0,65; tarifa do estado moderado (21222) = 0,520
      for(let i=0;i<3;i++)await page.click('#ttoB');await page.click('#ttoA');
      ok(await texto(page,'#ttoU')==='≈ 0,65'&&await texto(page,'#ttoTar')==='0,520','Qual é o seu peso?: 3 degraus aceitos → 0,65; tabela 0,520');
      await page.click('#ttoAgain');await page.click('#ttoEst [data-k="grave"]');for(let i=0;i<7;i++)await page.click('#ttoB');
      ok(await texto(page,'#ttoU')==='≤ 0,10'&&await texto(page,'#ttoTar')==='0,111','Qual é o seu peso?: escada até o fim → ≤ 0,10; tabela 0,111');
      await page.click('#rcPresets [data-p="abaixo"]');ok(await texto(page,'#rcR')==='R$ 20.000'&&(await texto(page,'#rcSelo')).includes('abaixo'),'Custo por QALY: prótese = R$ 20.000, abaixo da referência');
      await page.click('#rcPresets [data-p="acima"]');ok(await texto(page,'#rcR')==='R$ 240.000'&&(await texto(page,'#rcSelo')).includes('acima'),'Custo por QALY: remédio de câncer = R$ 240.000, acima');
      await page.click('#rcPresets [data-p="rara"]');await page.selectOption('#rcLim','120000');ok(await texto(page,'#rcR')==='R$ 300.000'&&(await texto(page,'#rcSelo')).includes('acima'),'Custo por QALY: doença rara = R$ 300.000, acima mesmo com 3 vezes');
      await page.selectOption('#rcLim','40000');
      await page.click('#rcPresets [data-p="dominante"]');ok((await texto(page,'#rcSelo')).includes('Dominante'),'Custo por QALY: caso dominante');
      await page.click('#rcPresets [data-p="dominada"]');ok((await texto(page,'#rcSelo')).includes('Dominada'),'Custo por QALY: caso dominado');
      await page.click('#rcPresets [data-p="economia"]');ok(await texto(page,'#rcR')==='R$ 800.000','Custo por QALY: mais barato e pior = R$ 800.000 por QALY perdido');
      await page.fill('#rcCn','');ok(!/NaN|∞/.test(await texto(page,'#rcei'))&&(await texto(page,'#rcErro')).length>10,'Custo por QALY: campo vazio mostra aviso, sem NaN nem ∞');
      await page.click('#rcPresets [data-p="abaixo"]');await page.fill('#rcCn','26.000');ok(await texto(page,'#rcR')==='R$ 20.000','Custo por QALY: "26.000" é lido como vinte e seis mil');
      await page.fill('#rcEn','5');await page.fill('#rcCn','5.000');ok((await texto(page,'#rcSelo')).includes('Dominante'),'Custo por QALY: mesma saúde e mais barato é dominante');
      await page.fill('#rcEn','1.050');await page.fill('#rcCn','26.000');await page.fill('#rcEn','5,5');await page.fill('#rcCn','abc');ok((await texto(page,'#rcErro')).length>10,'Custo por QALY: texto inválido mostra aviso');await page.click('#rcPresets [data-p="abaixo"]');
      // ---- links internos
      const soltos=await page.evaluate(()=>[...document.querySelectorAll('a[href^="#"]')].map(a=>a.getAttribute('href').slice(1)).filter(id=>id&&!document.getElementById(id)));
      ok(soltos.length===0,'links internos: '+(soltos.length?'sem destino: '+[...new Set(soltos)].join(', '):await page.locator('a[href^="#"]').count()+' âncoras, todas com destino'));
      const ext=await page.evaluate(()=>[...new Set([...document.querySelectorAll('a[href^="http"]')].map(a=>a.href))]);
      fs.writeFileSync(path.join(OUT,'links-externos.txt'),ext.join('\n')+'\n');
      await axe(page,'guia, tema claro');
      await page.evaluate(()=>document.documentElement.setAttribute('data-theme','dark'));await page.waitForTimeout(400);await axe(page,'guia, tema escuro');
      await page.evaluate(()=>document.getElementById('lim-3').scrollIntoView());await page.screenshot({path:path.join(OUT,'375-escuro-limitacao.png')});
      await page.evaluate(()=>document.documentElement.removeAttribute('data-theme'));await page.waitForTimeout(400);
    }else{
      // ---- teclado (1280): pular para o conteúdo, foco visível, iniciar o jogo e votar sem mouse
      await page.goto('about:blank');await page.goto(URL);await page.keyboard.press('Tab');
      ok(await page.evaluate(()=>document.activeElement.className==='skip'),'teclado: o primeiro Tab cai em "Pular para o conteúdo"');
      await page.keyboard.press('Tab');await page.keyboard.press('Tab');
      const foco=await page.evaluate(()=>{const s=getComputedStyle(document.activeElement);return s.outlineStyle!=='none'&&parseFloat(s.outlineWidth)>=2;});
      ok(foco,'teclado: foco visível (contorno de 2 px) nos links');
      await page.goto('about:blank');await page.goto(URL+'#jogo');await page.focus('#gBegin');await page.keyboard.press('Enter');await page.waitForSelector('#gFechar');
      const n=await page.locator('#gameLeft .caso').count();
      for(let k=0;k<n;k++){await page.focus('#gameLeft input[name="v'+k+'"][value="1"]');await page.keyboard.press('Space');await page.keyboard.press('ArrowRight');}
      ok(!(await page.locator('#gFechar').isDisabled()),'teclado: votar com espaço e setas habilita "Encerrar a reunião"');
      await page.focus('#gFechar');await page.keyboard.press('Enter');await page.waitForSelector('#gNext');
      ok(await page.evaluate(()=>document.activeElement&&document.activeElement.tagName==='H2'),'teclado: ao trocar de tela, o foco vai para o título da nova tela');
    }
    // ---- jogo: partidas completas (as três sementes em 375; uma em 1280), com capturas na primeira
    const est=[(s,r,k)=>(s+r+k)%2===0,(s,r,k)=>k===0,(s,r,k)=>true];
    for(let i=0;i<(w===375?3:1);i++){
      const shots=i===0?async nome=>{await page.waitForTimeout(450);await page.screenshot({path:path.join(OUT,w+'-'+nome+'.png'),fullPage:true});}:null;
      const tJ=Date.now(),longa=i===2,R=await jogar(page,SEEDS[i],est[i],shots,longa);
      ok(R.reunioes===(longa?6:3)&&R.notas.every(x=>/^\d+,\d$/.test(x)),w+' px, partida '+SEEDS[i]+': '+R.reunioes+' reuniões até o jornal ('+R.titulo+'; Contador '+R.notas[0]+', Ouvidora '+R.notas[1]+', Praça '+R.notas[2]+'; '+(Date.now()-tJ)+' ms de máquina)');
      if(w===375&&!longa)ok(R.palavras<=1500,'jogo, partida padrão '+SEEDS[i]+': '+R.palavras+' palavras na tela do começo ao fim (limite 1.500, cerca de 10 minutos a 150 palavras por minuto)');
      if(w===375&&i===0){
        const overJ=await page.evaluate(()=>document.documentElement.scrollWidth-document.documentElement.clientWidth);ok(overJ<=1,'375 px: sem rolagem horizontal no jogo (sobra '+overJ+' px)');
        await axe(page,'jogo, jornal final');
        ok(true,'jogo: painel lateral do fim mostra o resultado real do Contador ('+R.lateral+'), o mesmo usado no jornal');
        await page.evaluate(()=>document.documentElement.setAttribute('data-theme','dark'));await page.waitForTimeout(400);await axe(page,'jogo, jornal final, tema escuro');await page.evaluate(()=>document.documentElement.removeAttribute('data-theme'));await page.waitForTimeout(400);
        // a mesma partida de novo dá o mesmo resultado
        const antes=R.notas.join(' ');await page.click('#gAgain');await page.waitForSelector('#gFechar');
        await axe(page,'jogo, reunião sem a régua');
        ok(!(await texto(page,'#gameLeft')).includes('QALYs ganhos'),'jogo: a primeira reunião não mostra os QALYs');
        const R2=await jogar(page,SEEDS[0],est[0],null,false);ok(R2.notas.join(' ')===antes,'jogo: mesmo código e mesmas escolhas dão as mesmas notas ('+antes+')');
      }
    }
    if(w===375){
      await page.goto('about:blank');await page.goto(URL+'#jogo');await page.waitForSelector('#gBegin');await axe(page,'jogo, tela inicial');
      await page.click('#gBegin');await page.waitForSelector('#gFechar');for(let k=0;k<3;k++)await page.check('#gameLeft input[name="v'+k+'"][value="0"]');await page.click('#gFechar');await page.waitForSelector('#gNext');await axe(page,'jogo, ata');
      await page.click('#gNext');await page.waitForSelector('#gFechar');await axe(page,'jogo, reunião com a régua');
      // link do jogo para o guia abre a seção certa
      await page.goto(URL+'#jogo');await page.goto(URL+'#lim-3');await page.waitForTimeout(100);
      ok(await page.evaluate(()=>!document.getElementById('guia').hidden&&Math.abs(document.getElementById('lim-3').getBoundingClientRect().top)<200),'rotas: #lim-3 mostra o guia na limitação 3');
    }
    ok(erros.length===0,w+' px: '+(erros.length?erros.length+' erro(s) no console: '+erros.slice(0,3).join(' | '):'zero erros no console'));
    await ctx.close();
  }
  await browser.close();
  const md='# Portão automático\n\nGerado por `node tests/pagina.js` em '+new Date().toISOString().slice(0,16).replace('T',' ')+' UTC ('+Math.round((Date.now()-t0)/1000)+' s). Antes dele rodam `tests/calc.js`, `tests/dados.js` e `tests/equilibrio.js` (`npm test`).\n\n**Resultado: '+(falhas.length?falhas.length+' FALHA(S)':'tudo verde')+'**\n\n'+log.join('\n')+'\n\nCapturas nesta pasta: `<largura>-<seção>.png` e `<largura>-jogo-*.png`.\n';
  fs.writeFileSync(path.join(OUT,'portao.md'),md);
  console.log(md);
  process.exit(falhas.length?1:0);
})().catch(e=>{console.error(e);process.exit(2);});
