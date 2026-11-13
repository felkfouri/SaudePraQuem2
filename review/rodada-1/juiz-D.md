# Parecer do Juiz D — Checador de fatos e técnico · Rodada 1

```
VEREDITO: REPROVA
```

Motivo em uma frase: os números e as referências do site bateram com as fontes primárias em tudo o que reconferi, mas há cinco itens IMPORTANTES — o catálogo de fontes não cobre (ou marca como "não verificada"/"parcial") afirmações que o site faz como fato, uma divergência de redação com a diretriz, as capturas do portão não mostram as seções que o nome do arquivo diz, o texto dos gráficos fica com 5,6 px no celular e a folha de fontes de terceiros bloqueia a primeira pintura.

## NOTAS (0–10 por critério)

| Critério | Nota | Por quê |
|---|---|---|
| Cobertura de fontes | 6 | Quase tudo tem fato F…; mas o "Mapa" do FONTES.md está defasado em relação ao site e ainda sobram afirmações sem fato ou apoiadas só em fato "não verificada"/"parcial" |
| Verificação das referências (amostra reconferida) | 9,5 | 31 PMIDs, 29 DOIs e 14 documentos primários reconferidos; nenhum erro de autor, ano, periódico, volume, página, DOI ou PMID; nenhum número errado |
| Portão automático | 6 | Verde e reproduzível (rodei); os testes de cálculo têm dentes (mutações morrem); mas as capturas "por seção" estão erradas e os números do texto não têm teste |
| Funcionamento no celular | 6,5 | Sem rolagem horizontal em 375 e 320 px, zero erros de console, axe limpo mesmo com tudo aberto; mas rótulos dos gráficos ilegíveis (5,6 px) e sem aviso quando não há JavaScript |
| Desempenho | 7 | 175 kB (56 kB com gzip), carga local em ~0,8 s, interação em ~0,1 s com CPU 4× mais lenta; mas a folha de estilo do Google Fonts bloqueia a renderização (8 s de tela em branco quando o pedido pendura) |

## PROBLEMAS

### IMPORTANTES

- **[IMPORTANTE] Cobertura: afirmações factuais do site sem fato em FONTES.md, ou apoiadas só em fato "não verificada"/"parcial"; e o Mapa não corresponde mais ao site.**
  Onde e evidência:
  1. `#peso`, index.html:569, "Aposta padrão (standard gamble). 'Você prefere ficar como está, com certeza, ou tentar um tratamento que pode curar ou matar?'" e o verbete do glossário. FONTES F12: "a descrição operacional clássica […] é **não verificada**"; Parte C, item 4, manda o site não afirmar. O site afirma.
     Correção: a fonte existe e está aberta. Diretriz de Qualidade de Vida (R3), glossário, p. PDF ~17: "Standard gamble: método de elicitação de preferências baseado em escolha […] Baseia-se na disposição do respondente em aceitar o risco de morte para evitar um estado de saúde." Criar o fato, marcar verificada, e manter a frase do site (ela é compatível).
  2. `#lim-4`, index.html:781, "O questionário mais usado tem cinco perguntas." Superlativo sem fato (o próprio Mapa marca "mais usado no mundo" como "sem fato"; em `#peso` foi suavizado para "um dos mais usados", aqui não).
     Correção: ou suavizar como em `#peso`, ou criar fato com R3, p. PDF 12: "São os instrumentos mais utilizados no mundo, tendo sido traduzidos e validados para 200 idiomas" (a frase é da diretriz do Ministério, citando a EuroQol).
  3. `#lim-4`, index.html:784, "A Conitec pede que as análises descrevam também outros resultados que os pacientes consideram importantes." Mapa: "sem fato com esse teor".
     Correção: a frase é verdadeira e está em R1, Quadro 1 (p. PDF 52): "Outros desfechos relevantes, preferencialmente desfechos relatados como importantes pelo paciente, devem ser descritos na análise das evidências". Criar o fato (verificada) e citar `r-conitec` no parágrafo.
  4. `#alternativas`, index.html:835, WELLBY: "um ponto a mais na satisfação com a vida, numa escala de 0 a 10, por um ano". F101 é "parcial" e o site não traz referência alguma para a definição (R99/R100 não estão em `#refs`).
     Correção: abrir uma fonte primária (o artigo de Frijters et al. 2020 ou o guia do Tesouro britânico) e incluir a referência; ou tirar os números ("escala de 0 a 10") e marcar a frase como descrição geral.
  5. `#alternativas`, index.html:838, "as recomendações da Conitec vão a consulta pública". F104 marca essa parte como "parcial".
     Correção: está em fonte primária já usada pelo site. Relatório 793 (R11), p. PDF 4: "Todas as recomendações emitidas pelo Plenário são submetidas à Consulta Pública (CP) pelo prazo de 20 (vinte) dias". Promover a verificada.
  6. `#lim-3`, index.html:775, "nas análises de remédios de câncer que já foram revistas, é raro separar os pacientes por deficiência": é resultado de estudo (R54, Raymakers 2025, que bate com o PubMed), mas o site não cita a referência nem a lista em `#refs`. Incluir `r-raymakers`.
  7. O Mapa (FONTES.md, linhas 22–108) descreve um texto que não é mais o do site. Exemplos: linha 24 diz que `#problema` afirma "mais usada no mundo" (o site diz "Uma das mais usadas"); linha 31 aponta divergência "sem problemas/alguns problemas" (o site já usa "nenhum problema, algum problema, problema grave"); linha 55 cita "envolvidos na discussão" (o site já corta em "demais fatores"); linhas 67, 84, 85 e 103 (Harris, Menzel, Suécia, nota das referências) também já foram corrigidas no site. Um catálogo que acusa divergências inexistentes e deixa passar as dos itens 1–6 não serve de prova de cobertura.
     Correção: refazer o Mapa sobre o index.html atual, depois de resolver 1–6; idealmente gerar a lista de âncoras por script para não defasar de novo.

- **[IMPORTANTE] `#lim-7`, index.html:808 · "A diretriz brasileira pede um cenário sem desconto ao lado do principal."** A fonte não pede: Diretriz de Avaliação Econômica, 3ª ed., recomendação LVI, consideração a): "**Sugere-se** análise de cenário sem uso de taxa de desconto, de forma a apresentar desfechos […] em termos absolutos" (p. PDF 101–102; reconferido no PDF). O próprio site diz "sugere" em `#decisao` (linha 677), então há contradição interna. Correção: trocar "pede" por "sugere" na linha 808.

- **[IMPORTANTE] Portão: as capturas "por seção" não mostram a seção do nome do arquivo.** `tests/pagina.js:77` faz `scrollIntoView()` e fotografa 80 ms depois, mas a página tem `html{scroll-behavior:smooth}` (index.html:259): a foto sai no meio da rolagem. Evidência, em `review/rodada-1/`: `375-desenhe.png` mostra o topo e o início de "O problema"; `375-eq5d.png` e `375-rcei.png` mostram "O problema"; `375-limitacoes.png` mostra o fim da Parte 1 e o título da Parte 2; `1280-rcei.png` mostra "O que é o QALY". Nenhuma captura de 375 px que abri mostra um interativo ou uma limitação. O portão.md afirma "Capturas nesta pasta: `<largura>-<seção>.png`", e os juízes A, B e C julgam o celular por essas imagens.
  Correção: no teste, criar o contexto com `reducedMotion:'reduce'` (ou `scrollIntoView({behavior:'instant'})`), esperar a rolagem assentar e conferir no próprio teste que `getBoundingClientRect().top` da seção ficou dentro da janela antes de fotografar. Regerar as capturas.

- **[IMPORTANTE] Celular: texto dos gráficos interativos fica com 5,6 px em 375 px.** Seletores `#dvSvg text` (Desenhe uma vida) e `#rcPlane text` (plano de custo-efetividade): `font-size` 11–12 em viewBox de 640 unidades, renderizado em 299 px de largura → 5,6 px efetivos (medido com `getScreenCTM`). Ficam ilegíveis os anos e a escala 0–1 do primeiro gráfico e os quatro rótulos de quadrante ("mais caro e melhor" etc.) e os eixos do segundo, que são justamente o que explica o plano. O axe não mede isso, e o portão não tem verificação de tamanho de texto em SVG.
  Correção: no celular, desenhar com viewBox menor (ex.: 340 de largura) ou aumentar o `font-size` por media query para dar ≥ 11 px efetivos; pôr os rótulos de quadrante também em HTML abaixo do gráfico. Acrescentar ao portão um teste "nenhum `<text>` visível com menos de 10 px efetivos em 375 px".

- **[IMPORTANTE] Desempenho: a folha de estilo do Google Fonts bloqueia a primeira pintura.** index.html:8–10 tem `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?...">` no `<head>`, sem carregamento assíncrono. Teste meu: com os pedidos a `fonts.googleapis.com`/`gstatic.com` pendurados por 8 s (rede ruim, bloqueio corporativo), `first-contentful-paint` = 8.060 ms; a tela fica em branco até o pedido desistir. Quando o pedido falha rápido (sem rede), a página aparece normal com Georgia. O portão mede "carga em 782 ms" a partir de `file://`, o que não diz nada sobre a rede do leitor; e a frase "sem imagens nem bibliotecas" omite essa dependência externa.
  Correção: carregar as fontes sem bloquear (`media="print" onload="this.media='all'"` com `<noscript>`), ou embutir/hospedar os WOFF2, ou usar só a pilha de fontes do sistema. Acrescentar ao portão um teste com a rota das fontes pendurada, exigindo pintura em menos de 2 s.

### POLIMENTO

- [POLIMENTO] `#lim-6`, index.html:798 · "custo por QALY acima de R$ 880 mil, na comparação com o tratamento que já existia": bate (R$ 883.587 contra nusinersena, Relatório 793, Tabela p. PDF ~50), mas havia dois comparadores já incorporados; contra risdiplam o mesmo relatório dá R$ 766.549, e os números são do modelo do demandante. Sugestão: "entre R$ 767 mil e R$ 884 mil, conforme o tratamento de comparação, no modelo apresentado pela empresa".
- [POLIMENTO] jogo, index.html:1160 e 1165 · "a métrica evLYG": o guia usa evLY e o glossário do ICER diz "previously referred to this measure as the evLYG but it is now the evLY". Uniformizar.
- [POLIMENTO] `#lim-3` · o site chama o evLY de "medida complementar"; o glossário do ICER diz "ICER developed the evLY as an alternative to the QALY" (nos relatórios os dois aparecem lado a lado). Vale ajustar F78 e o texto para "criada como alternativa e publicada ao lado do QALY".
- [POLIMENTO] `#peso`, index.html:575 · "nas regiões de Belo Horizonte, Rio de Janeiro, Porto Alegre e Recife" vem com a citação de Santos 2016, mas o resumo no PubMed só diz "4 Brazilian areas" (as cidades aparecem nas afiliações); F17 registra que a fonte é secundária. Dizer "em quatro áreas do país" ou citar a fonte que nomeia as cidades.
- [POLIMENTO] `#sobre`, index.html:954 · "leis americanas citadas (conferidas no texto oficial)": o link e a conferência são no Legal Information Institute de Cornell, que reproduz o U.S. Code; não é o repositório oficial. Trocar por "conferidas no texto do U.S. Code".
- [POLIMENTO] `#refs` · número de páginas: o site dá "167 p." (Diretriz de Avaliação Econômica) e "47 p." (Qualidade de Vida), que é a contagem do PDF; as fichas catalográficas dos próprios documentos dizem "164 p. : il." e "45 p. : il.". Escolher um critério.
- [POLIMENTO] `#refs` · links de DOI com `<` e `>` (Nord 1999, Williams 1997) funcionam (resolvem em doi.org), mas o texto visível é longo e quebra feio em 375 px; mostrar "doi" curto.
- [POLIMENTO] FONTES.md, Parte B: diz "Os DOIs […] não foram testados em doi.org". Testei os 29 do site: todos resolvem; atualizar a nota. As referências R107–R114 seguem "incompletas" (não aparecem no site; completar ou tirar).
- [POLIMENTO] FONTES.md, F84 (Longworth) está "parcial", mas o resumo do PubMed sustenta exatamente o que o site diz ("'bolt-on' items relating to hearing, tiredness and vision"); pode passar a verificada.
- [POLIMENTO] Sem JavaScript: o guia continua legível (bom), mas os quatro interativos aparecem com resultados vazios e `#jogo` fica oculto, sem nenhum aviso (não há `<noscript>`). Acrescentar uma linha "Os interativos e o jogo precisam de JavaScript".
- [POLIMENTO] Alvos de toque: os controles deslizantes (`#dvViveSem`, `#dvViveCom`, `#dvS1`…`#dvS10`) têm 16 px de altura; `summary` "De onde vem este caso" no jogo tem 21 px; links do rodapé, 23 px. Há espaço em volta, mas vale dar `min-height:24px` (ou 44 px nos deslizantes).
- [POLIMENTO] Testes: os números do texto não têm teste. Mutações que sobreviveram a `npm test`: trocar 0,363 por 0,336 na tabela HTML de coeficientes (index.html:605, cópia manual de `TARIFA`), trocar "0,61" por "0,71" no parágrafo do desconto e trocar "R$ 40 mil" por "R$ 50 mil" na lista da Conitec. Sugestão: um `tests/fatos.js` que confira a tabela HTML contra `Calc.TARIFA` e uma lista curta de literais (9.148; −0,177; 10 de 243; R$ 40 mil; R$ 35 mil; R$ 120 mil; 5%; 3,5%; 0,61; 0,23; 1,2; 1,7; 25 mil a 35 mil libras).
- [POLIMENTO] Reprodutibilidade do portão: `node_modules/` do projeto só tem `axe-core`; `require('playwright')` funciona nesta máquina porque resolve em `/opt/node-tools/node_modules` (via instalação global). Num clone limpo é preciso `npm ci` e `npx playwright install chromium`; dizer isso no README.
- [POLIMENTO] Privacidade: o Google Fonts recebe o IP de cada leitor; mais um motivo para hospedar as fontes junto.
- [POLIMENTO] "Desenhe uma vida" em 375 px: a instrução "Toque no gráfico" fica uma tela e meia acima do gráfico (os controles vêm antes). Considerar pôr o gráfico logo abaixo dos botões de exemplo.

## AMOSTRA RECONFERIDA

Fontes primárias baixadas com `curl -L` e lidas com `pdftotext` em 13 nov. 2026; artigos conferidos no PubMed (ferramenta MCP) e no Crossref.

| # | Afirmação do site | Onde conferi | Bateu? |
|---|---|---|---|
| 1 | R$ 40 mil por QALY e R$ 35 mil por ano de vida ganho (2022) | Conitec, relatório de limiares, Quadro 1: "R$ 40.000,00 por QALY e R$ 35.000,00 por 'anos de vida ganhos' para o ano de 2022" | Sim |
| 2 | Até 3 vezes o valor de referência; R$ 120 mil | idem: "é aceitável um limiar de até 3 vezes o valor de referência"; "R$ 120.000,00/QALY" no corpo do relatório | Sim |
| 3 | Quatro situações (raras, crianças, grave, endêmica em baixa renda) | idem, Quadro 1, alíneas a) a d), texto literal | Sim |
| 4 | Ano de vida ganho só em situações excepcionais | idem: "Em situações excepcionais em que o QALY for considerado indisponível ou inadequado" | Sim |
| 5 | Citação "não deve ser um parâmetro isolado dos demais fatores" | idem, Quadro 1: "…isolado dos demais fatores envolvidos na discussão" | Sim |
| 6 | Ultrarraras e terapias gênicas fora da regra | idem: "Não estão incluídas nesta regulamentação tecnologias gênicas, curativas e tecnologias para doenças ultrarraras" | Sim |
| 7 | Woods: 20% a 63% do PIB per capita, citado pela Conitec | idem, p. 14: "$ 3.210 a $ 10.122 por QALY, equivalente a 0,20 a 0,63 PIB per capita, para o Brasil" | Sim |
| 8 | Estudo de partida perto de 1 PIB per capita | idem: "calculado com base do documento do Banco Interamericano de Desenvolvimento"; "ficaria perto de 1 PIB per capita" | Sim |
| 9 | Desconto de 5% ao ano para custos e saúde | Diretriz de Avaliação Econômica, 3ª ed., rec. LV: "taxa de desconto de 5% ao ano para custos e efetividade" | Sim |
| 10 | Cenário sem desconto | idem, rec. LVI, a): "Sugere-se análise de cenário sem uso de taxa de desconto" | Sim em `#decisao` ("sugere"); **não** em `#lim-7` ("pede") |
| 11 | Diretriz de 2026 repete R$ 40 mil e R$ 35 mil | idem: "R$ 40.000,00 (quarenta mil reais) por QALY/DALY e R$ 35.000,00 (trinta e cinco mil) por AVG" | Sim |
| 12 | Coeficientes da tarifa (0,149; 0,120/0,363; 0,112/0,218; 0,097/0,184; 0,064/0,168; 0,050/0,095) | Arquivo SAS da EuroQol "Brazil-3L-Santos-TTO-2016.txt" | Sim, todos |
| 13 | 243 estados; pior = −0,177; 10 abaixo de zero | Recalculei os 243 estados a partir do arquivo da EuroQol e comparei com `Calc.eq5dIndice` | Sim: 0 divergências, 10 negativos, mínimo −0,177 |
| 14 | Níveis "nenhum problema, algum problema, problema grave"; 5L "em fase de valoração" | Diretriz de Qualidade de Vida (2026), p. PDF 12 e 30 | Sim |
| 15 | Sem tarifa brasileira do 5L | Página "Value sets" da EuroQol: entradas do Brasil só 3L (Andrade 2013, Santos 2016) e Y-3L | Sim |
| 16 | NICE: faixa de 25 mil a 35 mil libras desde abril de 2026 | Notícia do NICE de 1º dez. 2025 ("£25,000 to £35,000/QALY"; "from April 2026") e manual PMG36, 6.3.4–6.3.8 (atualizado em 13 out. 2026) | Sim |
| 17 | NICE: multiplicadores 1,2 e 1,7 | PMG36, Tabela 6.1: "x1.2 0.85 to 0.95 12 to 18; x1.7 At least 0.95 At least 18" | Sim |
| 18 | NICE: desconto de 3,5% | PMG36, 4.5.1: "discounted at the same rate of 3.5% per year" | Sim |
| 19 | Lei americana de 2010 veda o custo por QALY como limiar no programa para idosos | 42 U.S.C. 1320e-1(e): "shall not utilize such an adjusted life year […] as a threshold to determine coverage, reimbursement, or incentive programs under subchapter XVIII" | Sim |
| 20 | Lei de 2022: não tratar prolongar a vida de idoso como de menor valor | 42 U.S.C. 1320f-3(e)(2): "…treats extending the life of an elderly, disabled, or terminally ill individual as of lower value…" | Sim |
| 21 | evLY: mesmo valor para cada ano de vida acrescentado | Glossário do ICER: "gives the same value to each year of life a treatment adds, regardless of a patient's age, disability, or how severe their illness is" | Sim (ver polimento sobre "alternative") |
| 22 | Relatório 793: acima de R$ 880 mil por QALY; sem limiar para ultrarraras | Relatório 793: "R$883.586/QALY" (texto) e 883.587 (tabela) contra nusinersena; "no Brasil não há definido um limiar de disposição a pagar para doenças ultrarraras" | Sim (contra risdiplam: R$ 766.549) |
| 23 | Perspectiva do Paciente | Página da Conitec: "espaço para a apresentação de um relato de experiência […] usuários do SUS e seus cuidadores e/ou familiares" | Sim |
| 24 | Santos 2016: 9.148 pessoas, 18 a 64 anos, em casa, troca de tempo | PubMed PMID 26492896, [doi:10.1177/0272989X15613521](https://doi.org/10.1177/0272989X15613521) | Sim |
| 25 | Peeters e Stiggelbout 2010: pacientes dão valores mais altos | PubMed PMID 19744288, [doi:10.1111/j.1524-4733.2009.00610.x](https://doi.org/10.1111/j.1524-4733.2009.00610.x) | Sim |
| 26 | Pennington 2020: só 3% incluíram o cuidador | PubMed PMID 33032779, [doi:10.1016/j.jval.2020.05.017](https://doi.org/10.1016/j.jval.2020.05.017): "Twelve of 414 TAs (3%)" | Sim |
| 27 | Linley e Hughes 2013: mais de 4 mil; apoio a doenças graves, não a fim de vida nem a raras | PubMed PMID 22961976, [doi:10.1002/hec.2872](https://doi.org/10.1002/hec.2872): "4118 UK adults" | Sim |
| 28 | Harris 1987: "fatalmente falho" | PubMed PMID 3669036, [doi:10.1136/jme.13.3.117](https://doi.org/10.1136/jme.13.3.117): "fatally flawed as a way of priority setting" | Sim |
| 29 | Singer 1995: o defensor do QALY tem resposta | PubMed PMID 7674278, [doi:10.1136/jme.21.3.144](https://doi.org/10.1136/jme.21.3.144) | Sim |
| 30 | Nord 1999: um ano ganho deve contar como um | PubMed PMID 10082141, [doi:10.1002/(sici)1099-1050(199902)8:1<25::aid-hec398>3.0.co;2-h](https://doi.org/10.1002/(sici)1099-1050(199902)8:1%3C25::aid-hec398%3E3.0.co;2-h) | Sim |
| 31 | Normand 2009: "parece não funcionar bem" | PubMed PMID 19615624, [doi:10.1016/j.jpainsymman.2009.04.005](https://doi.org/10.1016/j.jpainsymman.2009.04.005): "appears not to work well in complex interventions, such as palliative care" | Sim |
| 32 | Mulhern 2014: razoável em ansiedade e depressão, pior na esquizofrenia | PubMed PMID 24855127, [doi:10.1192/bjp.bp.112.122283](https://doi.org/10.1192/bjp.bp.112.122283) | Sim |
| 33 | McKie e Richardson 2003 / Jonsen 1986: regra do resgate | PubMed PMID 12742604, [doi:10.1016/s0277-9536(02)00244-7](https://doi.org/10.1016/s0277-9536(02)00244-7): "Jonsen coined the term 'Rule of Rescue'" | Sim |
| 34 | Menzel 2002: nem só pacientes nem só público | PubMed PMID 12409128, [doi:10.1016/s0277-9536(01)00358-6](https://doi.org/10.1016/s0277-9536(01)00358-6) | Sim |
| 35 | Tsuchiya e Dolan 2005: agregadas, as premissas se sustentam melhor | PubMed PMID 16061898, [doi:10.1177/0272989X05276854](https://doi.org/10.1177/0272989X05276854) | Sim |
| 36 | Ryen e Svensson 2015: valores muito diferentes | PubMed PMID 25070495, [doi:10.1002/hec.3085](https://doi.org/10.1002/hec.3085): média aparada 74.159 e mediana 24.226 euros | Sim |
| 37 | Williams 1997, fair innings | PubMed PMID 9158965, [doi:10.1002/(sici)1099-1050(199703)6:2<117::aid-hec256>3.0.co;2-b](https://doi.org/10.1002/(sici)1099-1050(199703)6:2%3C117::aid-hec256%3E3.0.co;2-b) | Sim |
| 38 | Rand e Kesselheim 2021; Rand et al. 2023 | PubMed PMID 34495724, [doi:10.1377/hlthaff.2021.00343](https://doi.org/10.1377/hlthaff.2021.00343); PMID 36537647, [doi:10.1111/1475-6773.14116](https://doi.org/10.1111/1475-6773.14116) | Sim |
| 39 | Longworth 2014: perguntas extras de audição, visão e cansaço | PubMed PMID 24524660, [doi:10.3310/hta18090](https://doi.org/10.3310/hta18090) | Sim |
| 40 | Espirito Santo 2024: tarifa brasileira para crianças e adolescentes | PubMed PMID 38954389, [doi:10.1007/s40273-024-01404-9](https://doi.org/10.1007/s40273-024-01404-9) | Sim |

Dados bibliográficos: segundo o PubMed, os 31 PMIDs listados em `#refs` existem e batem com o site em autores, periódico, ano, volume, fascículo e páginas. Além dos já ligados na tabela, conferi: Asaria 2016 ([doi](https://doi.org/10.1177/0272989X15583266)), Brazier 2022 ([doi](https://doi.org/10.1016/j.jval.2022.01.009)), Brazier 2018 ([doi](https://doi.org/10.1007/s10198-017-0931-5)), Claxton 2011 ([doi](https://doi.org/10.1002/hec.1612)), Cookson 2017 ([doi](https://doi.org/10.1016/j.jval.2016.11.027)), Jonsen 1986 ([doi](https://doi.org/10.1111/j.1748-720x.1986.tb00974.x)), Murray 1994 (PMID 8062401, sem DOI), Rowen 2020 ([doi](https://doi.org/10.1007/s40273-019-00873-7)), Thokala 2016 ([doi](https://doi.org/10.1016/j.jval.2015.12.003)), Ubel 2003 ([doi](https://doi.org/10.1023/a:1025119931010)), Weinstein e Stason 1977 ([doi](https://doi.org/10.1056/NEJM197703312961304)), Woods 2016 ([doi](https://doi.org/10.1016/j.jval.2016.02.017)) e Raymakers 2025 ([doi](https://doi.org/10.1016/j.jcpo.2025.100562), usado no texto sem referência). O Crossref confirma os 29 DOIs.

Contas do texto: 1/1,05^10 = 0,6139 e 1/1,05^30 = 0,2314 (o site diz 0,61 e 0,23: certo); 20 ÷ 5 = 4 vezes (`#lim-2`); 6 ÷ 1,7 = 3,5 > 1 (`#lim-6`).

## PORTÃO, LINKS E MEDIDAS (o que rodei)

- `npm test`: passou (calc.js 98 verificações; dados.js 10 pautas e 21 casos; equilibrio.js 21.600 partidas), 8,5 s.
- `node tests/pagina.js <minha pasta>`: saiu com código 0, "tudo verde", 43 itens, 29 s; mesmas notas das partidas do relatório da rodada (1234 → 4,4 / 5,6 / 3,3).
- Os testes testam o que dizem? Cálculo: sim. Os valores esperados estão escritos à mão no teste, e três mutações no bloco de cálculo (coeficiente 0,363 → 0,353; 0,095 → 0,096; constante 0,149 → 0,148) foram pegas. O teste lê o mesmo código da página, sem cópia. Falta: números do texto (ver polimento), tamanho de texto em SVG, rede lenta, capturas corretas.
- Acessibilidade: o axe do portão só reprova "serious/critical". Rodei o axe em 375 px com todos os `<details>` abertos: zero violações de qualquer nível. Cobertura suficiente para o que o axe mede.
- 375 × 740 e 320 × 740: `scrollWidth` igual à largura, nenhum elemento vazando, zero erros de console. Barra fixa de 51 px com `scroll-padding-top` de 64 px: as âncoras (`#lim-3`, `#r-santos`, `#eq5d`) param abaixo da barra, sem cobrir título.
- Peso: 178.716 bytes (56.369 com gzip), 1.064 nós. Carga local ~0,8 s (inclui as fontes); com CPU 4× mais lenta, `load` em 349 ms e clique num exemplo em 111 ms.
- Links externos (46): os 12 em hosts liberados respondem 200 (gov.br ×5, euroqol.org ×2, icer.org ×2, nice.org.uk ×2, law.cornell.edu ×2, contando as páginas). Os 29 DOIs resolvem em doi.org para a editora certa (a página da editora em si fica fora dos hosts liberados). `planalto.gov.br` não respondeu daqui (o site já avisa que a lei foi conferida por fonte secundária). Não testei github.com, creativecommons.org nem felkfouri.github.io.

## O QUE ESTÁ BOM (para não ser desfeito)

- Todos os números "de dado real" batem com a fonte primária: os valores e as quatro situações da Conitec, os 5% da diretriz, os 12 coeficientes da tarifa, os 243 estados, a faixa e os multiplicadores do NICE, os dois artigos do U.S. Code, o Relatório 793.
- Nenhuma referência inventada ou trocada: 31 de 31 PMIDs e 29 de 29 DOIs corretos.
- O site corrige mitos em vez de repeti-los: "a lei não proíbe o QALY", "o limiar não é o preço de uma vida", "1 PIB per capita" tratado como ponto de partida e não como regra.
- A honestidade sobre o que não foi conferido: a nota de `#refs` e o `#sobre` dizem que a Lei 14.313 só foi vista em fonte secundária; o FONTES.md tem status por fato e uma Parte C com o que não usar.
- A separação visível entre "dado real", "números ilustrativos" e "tarifa real" nos interativos, e o aviso de que o jogo é fictício.
- O bloco de cálculo único, lido pelos testes direto do index.html; os testes de equilíbrio do jogo; a partida reproduzível por código.
- Arquivo único e leve, sem biblioteca, sem rolagem horizontal em 320 px, sem erro de console, axe limpo nos dois temas, foco e teclado testados.
