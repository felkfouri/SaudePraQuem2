# Parecer do Juiz D — Checador de fatos e técnico · Rodada 2

```
VEREDITO: APROVA
```

Motivo em uma frase: os cinco IMPORTANTES da rodada 1 estão resolvidos (um deles em parte, com resto de polimento), tudo o que o texto novo afirma com número, data, citação ou resultado de estudo bateu com a fonte que eu mesmo abri, o portão está verde e reproduzível, e não achei quebra no celular; sobram só itens de POLIMENTO, a maior parte no catálogo FONTES.md e nos dentes do portão.

**Aviso de método.** O `index.html` foi alterado enquanto eu trabalhava (correções pedidas por outros juízes; `git status` mostrava o arquivo modificado às 22:11 UTC). Reli a diferença inteira, refiz o portão e as medições de celular na versão final e é ela que este parecer julga: md5 `51446604931305cb4c2073fbda73b350`, 185.620 bytes. Um defeito que eu tinha achado na versão anterior (rótulos "0,75" e "0,25" do eixo do gráfico "Desenhe uma vida" cortados em 2,7 px à esquerda em 375 e 320 px) já não existe nessa versão (margem `L` passou de 34 para 42; medi de novo: nenhum `<text>` fora do SVG).

## NOTAS (0–10 por critério)

| Critério | Nota | Por quê |
|---|---|---|
| Cobertura de fontes | 8 | Todas as afirmações com número, data, aspas ou resultado de estudo têm fato e fonte aberta. Sobram frases qualitativas sem fato próprio e um catálogo com contradições internas (Mapa antigo mantido, Parte C desatualizada, F116 atribuída à fonte errada) |
| Verificação das referências (amostra reconferida) | 9,5 | 22 itens novos reconferidos por mim em fonte primária ou PubMed/Crossref; zero erro de número, autor, ano, DOI ou PMID. Duas definições (aposta padrão, WELLBY) estavam apoiadas em fonte que não as contém; confirmei as duas em artigos abertos |
| Portão automático | 8 | Verde, reproduzível, 54 itens; captura com posição conferida, letra dos gráficos medida, números do texto presos ao código. Faltam: teste da fonte pendurada, dois `ok(true)` sem verificação, orçamento do jogo e alguns literais sem teste |
| Funcionamento no celular | 9 | Sem rolagem horizontal em 375 e 320 px no guia e em cinco telas do jogo, nada cortado, zero erros de console, aviso sem JavaScript. Restam deslizantes de 16 px de altura e letra de 8,8 px na ilustração do topo em 320 px |
| Desempenho | 9,5 | Primeira pintura em 100 ms com a folha de fontes pendurada para sempre (era 8.060 ms); 59 kB com gzip; carga em 397 ms e clique em 100 ms com CPU 4× mais lenta |

## CONFERÊNCIA DA RODADA 1

### Importantes

| # | Item da rodada 1 | Situação | Evidência |
|---|---|---|---|
| 1.1 | Aposta padrão afirmada com fato "não verificada" | RESOLVIDO | F116 criado; texto em `#peso` compatível. Ressalva (polimento 1): F116 atribui a regra "peso = p" ao glossário da diretriz, que só traz a definição qualitativa; confirmei a regra em artigo aberto (linha 12 da tabela) |
| 1.2 | "O questionário mais usado" em `#lim-4` | RESOLVIDO | Agora "O questionário que a diretriz brasileira indica, o EQ-5D, tem cinco perguntas"; em `#peso`, "Um dos mais usados" (F117; diretriz de Qualidade de Vida: "São os instrumentos mais utilizados no mundo") |
| 1.3 | "A Conitec pede… outros resultados" sem fato | RESOLVIDO | F115; texto novo segue o Quadro 1 ("Outros desfechos relevantes, preferencialmente desfechos relatados como importantes pelo paciente, devem ser descritos na análise das evidências") |
| 1.4 | WELLBY sem referência | RESOLVIDO EM PARTE | Referência incluída (`r-frijters`, Crossref confere), mas ninguém leu o artigo e o resumo não traz a definição; F119 declara "definição parcial". Confirmei a definição em fonte aberta (linha 14). Resto é polimento 2 |
| 1.5 | Consulta pública com fato "parcial" | RESOLVIDO | F118; Relatório 793: "Todas as recomendações emitidas pelo Plenário são submetidas à Consulta Pública (CP) pelo prazo de 20 (vinte) dias" |
| 1.6 | Raymakers 2025 usado sem citação | RESOLVIDO | `#lim-3` cita `r-raymakers`; referência em `#refs` bate com o PubMed |
| 1.7 | Mapa de FONTES.md defasado | RESOLVIDO EM PARTE | Ganhou uma nota no topo que liga cada afirmação nova a um fato; a tabela antiga foi mantida "como registro" e ainda acusa "sem fato" e divergências que não existem mais (linhas 24, 29, 31, 55, 61, 67, 72, 85, 96, 98, 103). Resto é polimento 3 |
| 2 | `#lim-7` "pede" × diretriz "sugere" | RESOLVIDO | "A diretriz brasileira sugere um cenário sem desconto ao lado do principal"; `#decisao` igual |
| 3 | Capturas não mostravam a seção do nome | RESOLVIDO | `tests/pagina.js` usa `reducedMotion:'reduce'`, rola sem animação e confere `getBoundingClientRect().top` entre −5 e 200 px antes de fotografar. Abri `375-desenhe.png`, `375-rcei.png` e `375-limitacoes.png`: mostram a seção certa |
| 4 | Texto dos gráficos com 5,6 px em 375 px | RESOLVIDO | viewBox estreito (360) no celular; medi `font-size` efetivo mínimo de 10,5 px em `#dvSvg` e `#rcPlane` (375 e 320 px); o portão mede 13,0 px de altura e reprova abaixo de 11 |
| 5 | Folha do Google Fonts bloqueava a pintura | RESOLVIDO | `media="print" onload="this.media='all'"`. Com `fonts.googleapis.com` e `gstatic.com` sem nunca responder: primeira pintura em 100 ms, interativo funcionando, texto em Georgia. Falta o teste no portão (polimento 5) |

### Polimentos

| Item da rodada 1 | Situação | Evidência |
|---|---|---|
| `#lim-6`: "acima de R$ 880 mil" com dois comparadores | RESOLVIDO EM PARTE | Agora "na comparação com um dos tratamentos que já existiam"; não diz que o número é do modelo da empresa |
| Jogo: "evLYG" × "evLY" | RESOLVIDO | Textos do jogo usam "evLY"; glossário: "antes chamado evLYG" |
| evLY "medida complementar" × ICER "alternative" | NÃO RESOLVIDO | `#lim-3` mantém "criou uma medida complementar" |
| Quatro cidades atribuídas a Santos 2016 | NÃO RESOLVIDO | `#peso` mantém "nas regiões de Belo Horizonte, Rio de Janeiro, Porto Alegre e Recife" com a citação de 2016 |
| "conferidas no texto oficial" (leis americanas) | RESOLVIDO | "conferidas no texto do código federal, na página do Legal Information Institute" |
| Número de páginas (167/47 × 164/45) | NÃO RESOLVIDO | `#refs` mantém "167 p." e "47 p." |
| DOI longo com `<` e `>` | NÃO RESOLVIDO | Texto visível ainda é o DOI inteiro (Nord 1999, Williams 1997); não causa rolagem horizontal |
| FONTES Parte B: "DOIs não foram testados em doi.org" | NÃO RESOLVIDO | Frase continua na linha 402; testei de novo os 31, todos resolvem |
| F84 (Longworth) pode passar a verificada | NÃO RESOLVIDO | Continua "parcial" |
| Sem aviso quando não há JavaScript | RESOLVIDO | `<noscript>`: "Os interativos e o jogo desta página precisam de JavaScript. O texto do guia pode ser lido sem ele." |
| Alvos de toque pequenos | RESOLVIDO EM PARTE | `summary` e links do rodapé cresceram; os 12 deslizantes continuam com 16 px de altura |
| Números do texto sem teste | RESOLVIDO EM PARTE | `tests/calc.js` confere a tabela HTML contra `Calc.TARIFA` e nove literais. Ainda sem teste: "R$ 120 mil" e "9.148" (mutações sobreviveram) |
| Reprodutibilidade (`npm ci`, Playwright) | RESOLVIDO | README, linhas 71–75; `playwright` em `devDependencies` |
| Privacidade (Google Fonts recebe o IP) | NÃO RESOLVIDO | Fontes continuam em servidor de terceiros, agora sem bloquear |
| "Toque no gráfico" longe do gráfico | RESOLVIDO | Título "Para desenhar: escolha a vida e toque no gráfico" e os dois botões ficam logo acima do gráfico |

## PROBLEMAS

Nenhum BLOQUEANTE. Nenhum IMPORTANTE.

### POLIMENTO

1. **[POLIMENTO] FONTES.md, F116 · fonte errada para a regra da aposta padrão.** F116 diz que a definição "chance p de saúde plena e 1 − p de morte; o peso é o p em que ela fica indiferente" vem do glossário da diretriz de Qualidade de Vida. O glossário só diz: "Baseia-se na disposição do respondente em aceitar o risco de morte para evitar um estado de saúde." O "20% de risco → peso 0,8" de `#peso` está certo, mas a regra que o sustenta não está na fonte indicada. Correção: citar em F116 uma fonte que traga a fórmula. Segundo o PubMed, Khanna et al. 2010 (PMID 20920309, [doi:10.1186/1477-7525-8-112](https://doi.org/10.1186/1477-7525-8-112)), texto aberto: "The SG score was calculated by the following formula: 1 - the maximum acceptable probability of death."
2. **[POLIMENTO] `#alternativas` e glossário, WELLBY · a referência citada não foi lida.** O site dá "um ponto a mais na satisfação com a vida, numa escala de 0 a 10, por um ano (Frijters e colaboradores, 2020)". O resumo no Crossref não traz a definição e a página da editora fica fora do alcance. A definição está certa: segundo o PubMed, artigo aberto de 2025 (PMID 40566377, [doi:10.3390/ijerph22060951](https://doi.org/10.3390/ijerph22060951)) diz que a pergunta é "rated on a Likert scale ranging from 0 (not at all) to 10 (completely)" e que "A WELLBY (or Wellbeing-Year) is defined as one point on our life satisfaction item for one individual for one year"; Haake et al. 2024 (PMID 39352886, [doi:10.1371/journal.pgph.0003580](https://doi.org/10.1371/journal.pgph.0003580)) define igual e cita Frijters 2020. Correção: registrar essas fontes em F119 e passar a definição a "verificada em fonte secundária aberta"; manter Frijters como origem da proposta.
3. **[POLIMENTO] FONTES.md · o catálogo se contradiz.** (a) A tabela do Mapa foi mantida com linhas que acusam "sem fato" ou divergência já corrigida; quem lê só a tabela conclui que o site tem onze falhas que não tem. (b) A Parte C, item 4, ainda manda não afirmar "a descrição operacional do standard gamble", que o site afirma com base em F116; o item 7 ainda lista a Constituição, que o site cita com base em F121; o item 15 lista "as conclusões de Longworth 2014", que sustentam `#lim-4`. Correção: refazer a tabela sobre o texto atual (de preferência por script que liste as âncoras) e limpar a Parte C.
4. **[POLIMENTO] Frases qualitativas sem fato próprio em FONTES.md.** Nenhuma tem número; todas são verdadeiras ou defensáveis, mas o catálogo promete listar "cada afirmação deste site":
   - `#decisao`: "Gastos da família, como transporte ou dias de trabalho perdidos, em geral ficam de fora." F55 só registra "perspectiva do SUS". Conferi na Diretriz de Avaliação Econômica: "Na perspectiva do SUS, custos indiretos (como o tempo de cuidadores ou dos próprios pacientes), assim como custos pagos pelos pacientes (como transporte), não são incluídos." Acrescentar a frase a F55.
   - `#decisao`: "a Conitec olha também o impacto orçamentário". A nota do Mapa aponta a Portaria 8.817/2025, sem número de fato. Conferi: a portaria lista "estimativa de impacto orçamentário da tecnologia em saúde no SUS" entre as exigências, e o relatório de 2022 traz "Aspectos econômicos: custos, custo-efetividade e impacto orçamentário". Criar o fato.
   - `#vantagens` e glossário (texto acrescentado nesta rodada): consulta pública como "período em que qualquer pessoa pode opinar, pela internet, antes da decisão final". F118 só cobre a existência da consulta. Acrescentar a fonte de "qualquer pessoa" e "pela internet", ou tirar "pela internet".
   - `#lim-3`: "Movimentos de pessoas com deficiência fazem a crítica em primeira pessoa". O apoio é F81/R26 (National Council on Disability, 2019), "parcial"; ncd.gov não abriu daqui. Declarar no Mapa.
   - `#lim-8`: "É a objeção mais antiga a toda a ideia de maximizar a saúde total." Superlativo sem fato. Trocar por "uma das mais antigas".
   - `#alternativas`: "Hoje, os órgãos de avaliação mais usam essas medidas ao lado do QALY do que no lugar dele." Generalização apoiada em F6 e F78; declarar no Mapa.
5. **[POLIMENTO] Portão · quatro pontos sem dentes.**
   - Não há teste com a folha de fontes pendurada; se alguém tirar o `media="print"`, o portão continua verde. Acrescentar a rota que nunca responde e exigir primeira pintura abaixo de 2 s.
   - Duas linhas do relatório são `ok(true, …)`: "controles ano a ano acessíveis por teclado" e "painel lateral do fim mostra o resultado real do Contador, o mesmo usado no jornal". Conferi a segunda à mão em duas partidas (lateral +546 = 11.046 − 10.500; lateral +2.729 = 13.229 − 10.500): é verdadeira, mas o portão não a verifica. Trocar por comparações reais.
   - Mutação "orçamento do jogo de R$ 420 para R$ 520 milhões" sobreviveu a `npm test` e a `tests/pagina.js`, embora as notas da partida 1234 mudem de 4,5/3,3/3,1 para 2,2/7,5/6,1. Fixar `ORC` e as notas das três partidas de referência.
   - Literais "R$ 120 mil por QALY" e "9.148" sem teste (mutações sobreviveram).
6. **[POLIMENTO] `#problema` e `#lim-8` · Constituição e Justiça.** Ver o julgamento na seção seguinte. Sugestões: registrar em F121 a página do Ministério da Saúde que cita o texto; e considerar, em `#lim-8`, que "sem a conta" já não descreve bem a regra atual, pois a página "Judicialização" da Conitec informa que, segundo o Supremo Tribunal Federal, a Justiça pode mandar fornecer remédio fora da lista "desde que se comprove", entre outros pontos, "que a decisão da Conitec de não incluir o medicamento nas listas do SUS é ilegal" e "que há evidências científicas de que o medicamento é eficaz e seguro".
7. **[POLIMENTO] Celular, 320 px.** Ilustração do topo (`.hero-art`) com letra de 8,8 px; tabela de coeficientes de `#eq5d` com 262 px num espaço de 244 px, com rolagem interna de 18 px (não vaza para a página).
8. **[POLIMENTO] Deslizantes** `#dvViveSem`, `#dvViveCom`, `#dvS1`…`#dvS10` com 16 px de altura; dar pelo menos 24 px de área de toque.
9. **[POLIMENTO] Itens da rodada 1 ainda abertos**, listados na conferência acima: "medida complementar"; cidades de Santos 2016; número de páginas; DOI longo; nota dos DOIs em FONTES.md; F84; fontes de terceiros.
10. **[POLIMENTO] `portao.md`** ainda diz "sem imagens nem bibliotecas" sem mencionar as fontes externas; e a contagem de palavras do jogo (1.445 e 1.436, limite 1.500) deixa 4% de folga: qualquer frase nova estoura.

## A FRASE SOBRE A CONSTITUIÇÃO E A JUDICIALIZAÇÃO

O site diz, em `#problema`: "A Constituição diz que a saúde é direito de todos e dever do Estado, e há quem consiga tratamentos na Justiça com base nisso"; e em `#lim-8`: "Na Justiça, muitos pedidos de tratamento são decididos pelo direito de cada pessoa à saúde, sem a conta." F121 está "parcial" porque planalto.gov.br não abre (confirmei: sem resposta).

Julgo a apresentação **aceitável**, como POLIMENTO. São afirmações qualitativas, sem número, sem aspas, e a razão do "parcial" está declarada. Além disso, consegui conferi-las em páginas oficiais em host liberado:
- `www.gov.br/saude/pt-br/sus`: "Conforme a Constituição Federal de 1988 (CF-88), a 'Saúde é direito de todos e dever do Estado'."
- `www.gov.br/conitec/pt-br/judicializacao`: "De acordo com o Supremo Tribunal Federal (STF), a Justiça pode determinar o fornecimento de medicamentos que não estão na lista do SUS, desde que se comprove: […]".
- O próprio relatório da Conitec de 2022 registra falas da audiência pública sobre o tema ("quando a Conitec recomenda a não incorporação de uma tecnologia o resultado é a judicialização para o Estado").

Com essas duas páginas, F121 pode passar a "verificada em fonte oficial secundária".

## AMOSTRA RECONFERIDA NESTA RODADA

Documentos do gov.br baixados com `curl -L` e `/@@download/file`, lidos com `pdftotext`, em 13 nov. 2026. Artigos conferidos no PubMed (ferramenta MCP) e no Crossref.

| # | Afirmação do site (texto atual) | Onde conferi | Bateu? |
|---|---|---|---|
| 1 | Ultrarrara: "até 1 pessoa em 50 mil" | Relatório de limiares (2022), Quadro 1: "doença que afeta até 1 pessoa em cada 50.000 indivíduos"; seção 6: "até 1 caso em cada 50.000 pessoas" | Sim |
| 2 | Tratamentos gênicos "ou que prometem cura" fora da regra, "para discussão à parte" | idem: "Não estão incluídas nesta regulamentação tecnologias gênicas, curativas e tecnologias para doenças ultrarraras"; "serão pautadas em critérios específicos, a serem definidos posteriormente" | Sim |
| 3 | Situação 1: "doença rara que reduz muito o tempo de vida com qualidade" | idem: "a) Doenças raras (afeta até 65 pessoas em cada 100.000 indivíduos) redução importante de sobrevida ajustada pela qualidade" | Sim |
| 4 | Situação 2: "doença de crianças que faz o mesmo" | idem: "b) Doença acometendo crianças (menores de 18 anos) e implicando redução importante de sobrevida ajustada pela qualidade" | Sim |
| 5 | Situações 3 e 4: "doença grave"; "doença endêmica em populações de baixa renda com poucas alternativas de tratamento" | idem: "c) Doença grave; d) Doença endêmica em populações de baixa renda com poucas alternativas terapêuticas disponíveis" | Sim |
| 6 | "a critério da comissão" | idem: "A critério do julgamento da Conitec, nas seguintes situações (modificadores positivos) poderá se utilizar limiar alternativo" | Sim |
| 7 | "não deve ser um parâmetro isolado dos demais fatores" | idem, Quadro 1, texto literal | Sim |
| 8 | Perspectiva do SUS; gastos da família em geral de fora | Diretriz de Avaliação Econômica, 3ª ed.: "deve-se adotar a perspectiva do SUS"; "custos pagos pelos pacientes (como transporte), não são incluídos" | Sim (falta em F55) |
| 9 | "a Conitec olha também o impacto orçamentário" | Portaria GM/MS 8.817/2025: "estimativa de impacto orçamentário da tecnologia em saúde no SUS"; relatório de 2022: "custos, custo-efetividade e impacto orçamentário" | Sim (falta fato) |
| 10 | "outros resultados, de preferência os que os pacientes relatam como importantes, devem ser descritos na análise" | Relatório de 2022, Quadro 1 (frase citada no item 1.3) | Sim |
| 11 | Recomendações vão a consulta pública | Relatório 793: "Todas as recomendações emitidas pelo Plenário são submetidas à Consulta Pública (CP) pelo prazo de 20 (vinte) dias" | Sim |
| 12 | Aposta padrão: "até 20% de risco de morte, o peso é 0,8" | PubMed PMID 20920309, [doi:10.1186/1477-7525-8-112](https://doi.org/10.1186/1477-7525-8-112): "1 - the maximum acceptable probability of death" | Sim (fonte de F116 a corrigir) |
| 13 | EQ-5D "um dos mais usados" | Diretriz de Qualidade de Vida: "São os instrumentos mais utilizados no mundo" | Sim |
| 14 | WELLBY: um ponto de satisfação com a vida, de 0 a 10, por um ano | PubMed PMID 40566377, [doi:10.3390/ijerph22060951](https://doi.org/10.3390/ijerph22060951); PMID 39352886, [doi:10.1371/journal.pgph.0003580](https://doi.org/10.1371/journal.pgph.0003580) | Sim (fonte secundária) |
| 15 | Frijters P, Clark AE, Krekel C, Layard R. Behav Public Policy. 2020;4(2):126-65 | Crossref, [doi:10.1017/bpp.2019.39](https://doi.org/10.1017/bpp.2019.39): título, quatro autores, volume 4, número 2, páginas 126-165, publicado em 28 jan. 2020 | Sim |
| 16 | Raymakers 2025: "poucos casos em que os pacientes eram separados por idade ou deficiência" | PubMed PMID 39894216, [doi:10.1016/j.jcpo.2025.100562](https://doi.org/10.1016/j.jcpo.2025.100562): 322 estudos; "31 studies (9.6 %) included some form of subgroup analysis, all of which were age-related"; "do not often include subgroups based on age, disease severity, chronic disease, or disability" | Sim |
| 17 | Raymakers AJN, Rand LZ, Feldman WB, Kesselheim AS. J Cancer Policy. 2025;43:100562 | PubMed, mesmo registro | Sim |
| 18 | Singer 1995 (redação nova): autores "reconheceram o que ela tem de certo e sustentaram que o defensor do QALY tem resposta adequada" | PubMed PMID 7674278, [doi:10.1136/jme.21.3.144](https://doi.org/10.1136/jme.21.3.144): "seeks to determine what is sound in the double jeopardy objection, and then to show that the defender of QALYs has an adequate response to it" | Sim |
| 19 | Relatório 793: "acima de R$ 880 mil… um dos tratamentos que já existiam" | Relatório 793: tabelas contra nusinersena e contra risdiplam | Sim |
| 20 | "A Constituição diz que a saúde é direito de todos e dever do Estado" | Página do Ministério da Saúde sobre o SUS (citada acima); planalto.gov.br não abre | Sim, em fonte oficial secundária |
| 21 | "há quem consiga tratamentos na Justiça" | Página "Judicialização" da Conitec (citada acima) | Sim |
| 22 | "Com 5% ao ano… 0,61… 0,23" | 1/1,05^10 = 0,6139; 1/1,05^30 = 0,2314; o teste novo confere contra `Calc.fatorDesconto` | Sim |

Textos factuais do jogo (`insp` dos 21 casos, TUTORIAL, BREVES): foram reduzidos a descrições de tipo de decisão ("Artroplastia total de quadril.", "Terapias gênicas para atrofia muscular espinhal, avaliadas pela Conitec."). Sumiram o superlativo da artroplastia e a "substituição" do critério de fim de vida que o Mapa marcava como parciais. Não achei número real apresentado como fato no jogo; o "R$ 40 mil" vem identificado como hipótese.

Nenhuma afirmação do site se apoia hoje em fato marcado "não verificada".

## PORTÃO, MUTAÇÕES, CELULAR E LINKS (o que rodei)

- `npm test`: passou em 13,5 s (calc.js 119 verificações; dados.js 10 pautas e 21 casos; equilibrio.js 32.400 partidas).
- `node tests/pagina.js <minha pasta>`: código 0, "tudo verde", 54 itens, 22 s. O relatório que gerei é idêntico ao `review/rodada-2/portao.md` atual, fora os tempos.
- Testes novos, avaliação:
  - números do texto contra o código: bom; a tabela HTML é gerada a partir de `Calc.TARIFA` no teste, não copiada;
  - posição das capturas: bom, verifica antes de fotografar;
  - altura da letra: mede a caixa do `<text>` (13,0 px), o que equivale a cerca de 11 px de fonte; coerente com os 10,5 px que medi por outro método;
  - contagem de palavras: conta o que o jogador vê na coluna principal, com as opções fechadas; razoável, com folga curta;
  - "26.000" lido como vinte e seis mil: testado na página; na versão final o campo de QALYs trata o ponto como decimal, o que evita a ambiguidade;
  - dominância com ΔE = 0: testada no cálculo (`avaliar(-1000,0,…)` → dominante; `avaliar(3000,0,…)` → dominada) e na página.
- Mutações numa cópia no meu scratchpad (o arquivo real não foi tocado):

| Mutação | `npm test` | `pagina.js` |
|---|---|---|
| Coeficiente 0,363 → 0,336 na tabela HTML | pegou (calc.js) | — |
| "conta como 0,61 hoje" → 0,71 | pegou (calc.js) | — |
| "como 0,23" → 0,32 | pegou (calc.js) | — |
| Orçamento do jogo, normal/3 reuniões: 420 → 520 | **sobreviveu** | **sobreviveu** |
| "R$ 120 mil por QALY" → R$ 160 mil | **sobreviveu** | não rodei |
| "9.148" → "9.418" | **sobreviveu** | não rodei |

- Celular, 375 × 740 e 320 × 640, com todos os `<details>` abertos, no guia e em cinco telas do jogo (início, reunião 1, ata 1, reunião 2, jornal): `scrollWidth` igual à largura, nenhum elemento vazando, zero erros de console.
  - Tabela da ata da primeira reunião: 263 px num espaço de 295 px (375) e 208 em 240 (320); as três colunas ("Pedido", "QALYs", "R$ por QALY") aparecem inteiras, com quebra de linha e sem corte.
  - Seletor do limiar (`#rcLim`): 299 px (375) e 244 px (320) para uma opção mais longa de 217 px; "R$ 120 mil por QALY (3 vezes)" aparece inteiro.
- Fontes penduradas: primeira pintura em 100 ms; `DOMContentLoaded` em 85 ms; interativo responde.
- Sem JavaScript: guia legível, aviso presente.
- Peso: 185.620 bytes (58.943 com gzip), 1.090 nós.
- Links externos (49 em `links-externos.txt`): os 13 em hosts liberados respondem 200 (gov.br ×5, euroqol.org ×2, icer.org ×2, nice.org.uk ×2, law.cornell.edu ×2). Os 31 DOIs respondem 302 em doi.org, incluídos os dois novos (Frijters → cambridge.org; Raymakers → linkinghub.elsevier.com). `planalto.gov.br` não respondeu, e o site avisa. Não testei github.com, creativecommons.org nem felkfouri.github.io.

## O QUE ESTÁ BOM (para não ser desfeito)

- As correções da rodada 1 foram feitas na fonte, não maquiadas: "sugere" nos dois lugares, citação de Raymakers, texto da Conitec seguindo o Quadro 1.
- Os qualificadores das quatro situações do limiar de 3 vezes e a exclusão de ultrarraras, gênicas e curativas reproduzem o relatório com fidelidade, em linguagem simples.
- A honestidade sobre o que não foi conferido continua: a nota de `#refs` e o `#sobre` dizem que a lei brasileira foi vista por fonte secundária, e as leis americanas, na página do Legal Information Institute.
- O carregamento das fontes sem bloqueio: a página aparece em 0,1 s mesmo com o servidor de fontes mudo.
- O teste que amarra a tabela de coeficientes e os números do desconto ao código de cálculo, lido direto do `index.html`.
- As capturas agora conferem a posição antes de fotografar; servem de prova para os outros juízes.
- Os textos de inspiração do jogo, enxutos e sem números reais; a separação entre "dado real", "ilustrativo" e "hipótese do jogo".
- Sem rolagem horizontal e sem corte em 320 px, inclusive na ata e no seletor do limiar; `<noscript>` presente; zero erros de console.
- Nenhuma referência inventada: 32 de 32 entradas com DOI ou PMID conferem.
