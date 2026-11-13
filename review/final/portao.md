# Portão automático

Gerado por `node tests/pagina.js` em 2026-11-13 22:49 UTC (21 s). Antes dele rodam `tests/calc.js`, `tests/dados.js` e `tests/equilibrio.js` (`npm test`).

**Resultado: tudo verde**

- [x] carga da página em 356 ms (arquivo de 186 kB, sem imagens nem bibliotecas)
- [x] 375 px: sem rolagem horizontal no guia (sobra 0 px)
- [x] 375 px: cada captura mostra a seção do nome
- [x] 375 px: texto dos gráficos com 13.0 px de altura (mínimo 11)
- [x] Desenhe uma vida: "Só mais tempo" dá +2,00 QALYs e +4 anos
- [x] Desenhe uma vida: prótese 5,50 → 8,25 (+2,75)
- [x] Desenhe uma vida: com desconto o ganho diminui (+2,18)
- [x] Desenhe uma vida: com desconto, os anos vividos continuam 4
- [x] Desenhe uma vida: tocar no gráfico altera a curva
- [x] Desenhe uma vida: controles ano a ano acessíveis por teclado
- [x] EQ-5D: estado 21232 = 0,416
- [x] EQ-5D: pior estado = −0,177
- [x] EQ-5D: melhor estado = 1,000
- [x] Qual é o seu peso?: 3 degraus aceitos → 0,65; tabela 0,520
- [x] Qual é o seu peso?: escada até o fim → ≤ 0,10; tabela 0,111
- [x] Custo por QALY: prótese = R$ 20.000, abaixo da referência
- [x] Custo por QALY: remédio de câncer = R$ 240.000, acima
- [x] Custo por QALY: doença rara = R$ 300.000, acima mesmo com 3 vezes
- [x] Custo por QALY: com o limite de R$ 120 mil, a saúde deslocada continua pela referência de R$ 40 mil (60,00 QALYs)
- [x] Custo por QALY: entre R$ 40 mil e R$ 120 mil, a tela diz que aceitar é escolha de prioridade
- [x] Custo por QALY: o selo não diz "abaixo da referência" para R$ 80 mil com o limite de 3 vezes ("acima da referência, dentro do limite de 3 vezes")
- [x] Custo por QALY: o texto nunca chama os R$ 120 mil de valor de referência
- [x] Custo por QALY: economia de R$ 80 mil por QALY perdido com o limite de 3 vezes é tratada como escolha de prioridade
- [x] Custo por QALY: caso dominante
- [x] Custo por QALY: caso dominado
- [x] Custo por QALY: mais barato e pior = R$ 800.000 por QALY perdido
- [x] Custo por QALY: campo vazio mostra aviso, sem NaN nem ∞
- [x] Custo por QALY: "26.000" é lido como vinte e seis mil
- [x] Custo por QALY: mesma saúde e mais barato é dominante
- [x] Custo por QALY: texto inválido mostra aviso
- [x] links internos: 81 âncoras, todas com destino
- [x] axe, guia, tema claro: nenhuma violação séria ou crítica
- [x] axe, guia, tema escuro: nenhuma violação séria ou crítica
- [x] 375 px, partida 1234: 3 reuniões até o jornal (Plenário equilibrista; Contador 4,5, Ouvidora 3,3, Praça 3,1; 2966 ms de máquina)
- [x] jogo, partida padrão 1234: 1443 palavras na tela do começo ao fim (limite 1.500, cerca de 10 minutos a 150 palavras por minuto)
- [x] 375 px: sem rolagem horizontal no jogo (sobra 0 px)
- [x] axe, jogo, jornal final: nenhuma violação séria ou crítica
- [x] jogo: painel lateral do fim mostra o resultado real do Contador (−472), o mesmo usado no jornal
- [x] axe, jogo, jornal final, tema escuro: nenhuma violação séria ou crítica
- [x] axe, jogo, reunião sem a régua: nenhuma violação séria ou crítica
- [x] jogo: a primeira reunião não mostra os QALYs
- [x] jogo: mesmo código e mesmas escolhas dão as mesmas notas (4,5 3,3 3,1)
- [x] 375 px, partida 2718: 3 reuniões até o jornal (Plenário equilibrista; Contador 4,3, Ouvidora 2,5, Praça 3,1; 697 ms de máquina)
- [x] jogo, partida padrão 2718: 1433 palavras na tela do começo ao fim (limite 1.500, cerca de 10 minutos a 150 palavras por minuto)
- [x] 375 px, partida 4242: 6 reuniões até o jornal (Plenário da conta; Contador 7,2, Ouvidora 6,3, Praça 4,4; 1186 ms de máquina)
- [x] axe, jogo, tela inicial: nenhuma violação séria ou crítica
- [x] axe, jogo, ata: nenhuma violação séria ou crítica
- [x] axe, jogo, reunião com a régua: nenhuma violação séria ou crítica
- [x] rotas: #lim-3 mostra o guia na limitação 3
- [x] 375 px: zero erros no console
- [x] 1280 px: sem rolagem horizontal no guia (sobra 0 px)
- [x] 1280 px: cada captura mostra a seção do nome
- [x] 1280 px: texto dos gráficos com 13.0 px de altura (mínimo 11)
- [x] teclado: o primeiro Tab cai em "Pular para o conteúdo"
- [x] teclado: foco visível (contorno de 2 px) nos links
- [x] teclado: votar com espaço e setas habilita "Encerrar a reunião"
- [x] teclado: ao trocar de tela, o foco vai para o título da nova tela
- [x] 1280 px, partida 1234: 3 reuniões até o jornal (Plenário equilibrista; Contador 4,5, Ouvidora 3,3, Praça 3,1; 2815 ms de máquina)
- [x] 1280 px: zero erros no console

Capturas nesta pasta: `<largura>-<seção>.png` e `<largura>-jogo-*.png`.
