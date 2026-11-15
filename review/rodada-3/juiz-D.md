# Parecer do Juiz D — Checador de fatos e técnico · Rodada 3

```
VEREDITO: APROVA
```

Motivo em uma frase: nada do que mudou desde a rodada 2 traz número, data, aspas ou resultado de estudo sem fonte que eu mesmo tenha aberto; o portão está verde e idêntico ao que rodei; a mutação do orçamento do jogo agora é pega; e o celular não quebra em 375 nem em 320 px. Sobram só itens de POLIMENTO, quase todos repetidos da rodada 2.

Versão julgada: `index.html` com md5 `61e9ffbcc3aabb1671ed778e48632fda`, 185.714 bytes (commit `f310e7c`). `git status` limpo antes e depois da revisão; não toquei em nenhum arquivo além deste parecer.

## CONFERÊNCIA DA RODADA 2

| # | Polimento pedido na rodada 2 | Situação | Evidência |
|---|---|---|---|
| 1 | F116 atribuía a regra da aposta padrão ao glossário da diretriz | RESOLVIDO | F116 agora: "artigo aberto indicado pelo Juiz D na rodada 2 (PMID 20920309); a diretriz R3 define o método no glossário, sem a fórmula" |
| 2 | F119 (WELLBY): definição "parcial", artigo não lido | RESOLVIDO | F119 registra os PMID 40566377 e 39352886 e declara "o artigo de Frijters não foi lido na íntegra"; status "definição verificada em fontes secundárias indexadas" |
| 3a | Tabela do Mapa de FONTES.md mantida com linhas vencidas | NÃO RESOLVIDO | A tabela é a mesma (7 ocorrências de "sem fato"). Piorou num ponto: a nota do topo (linha 20) ainda diz "→ F121, parcial", e F121 agora diz "verificada em páginas oficiais do governo" |
| 3b | Parte C contradizia F116, F121 e F84 | EM PARTE | Ganhou uma nota no topo ("os itens 4, 7 e 15 foram superados pelos fatos F116, F121 e F84"), mas os três itens continuam na lista "O site não deve afirmar como fato", e F84 continua com status "parcial (conclusões por condição não lidas)" |
| 4 | Frases qualitativas sem fato próprio | EM PARTE | A nota da Parte C as declara como "aceitas como conhecimento geral e sem número"; nenhum fato novo foi criado. "A objeção mais antiga" virou "uma objeção antiga" (RESOLVIDO) |
| 5a | Portão sem teste da folha de fontes pendurada | NÃO RESOLVIDO | Não há essa rota em `tests/`; trocar `media="print"` por `media="all"` numa cópia não derruba `npm test` |
| 5b | Dois `ok(true, …)` em `tests/pagina.js` | NÃO RESOLVIDO | Linhas 108 e 162 continuam `ok(true, …)`. A segunda é verdadeira na partida 1234 (conferi à mão: jornal 10.028 QALYs − 10.500 da rede = −472, igual ao painel), mas o portão não compara |
| 5c | Mutação do orçamento do jogo sobrevivia | RESOLVIDO | Ver "Mutações": 420 → 520 agora falha em `tests/dados.js` |
| 5d | Literais "R$ 120 mil por QALY" e "9.148" sem teste | NÃO RESOLVIDO | As duas mutações sobreviveram de novo a `npm test` |
| 6 | F121 e a frase de `#lim-8` sobre a Justiça | RESOLVIDO | F121 cita as duas páginas oficiais; `#lim-8` trocou "decididos… sem a conta" por texto que menciona o Supremo e a Conitec. Resto no polimento 1 |
| 7 | 320 px: letra de 8,8 px na ilustração do topo; tabela de `#peso` com rolagem interna | NÃO RESOLVIDO | Medi de novo: 8,8 px em `.hero-art`; tabela de 262 px em 244 px (rolagem interna, não vaza) |
| 8 | Deslizantes com 16 px de altura | NÃO RESOLVIDO | `#dvViveSem`, `#dvViveCom`, `#dvS1`…`#dvS10`: 16 px |
| 9 | Restos da rodada 1 | NÃO RESOLVIDO | "medida complementar" (`#lim-3`); quatro cidades atribuídas a Santos 2016 (`#peso`); "167 p." e "47 p." (`#refs`); DOI longo de Nord 1999 e Williams 1997 como texto do link; FONTES linha 402 ("não foram testados em doi.org"); fontes em servidor de terceiros |
| 10 | `portao.md`: "sem imagens nem bibliotecas"; folga de palavras do jogo | NÃO RESOLVIDO | Mesma frase; 1.445 e 1.436 palavras para limite de 1.500 |

Nenhum desses restos envolve número ou fato sem fonte; todos continuam POLIMENTO.

## NOTAS (0–10 por critério)

| Critério | Nota | Por quê |
|---|---|---|
| Cobertura de fontes | 8,5 | Tudo o que mudou tem apoio que abri hoje. O catálogo ainda se contradiz em três lugares e não registra a página da Conitec sobre consulta pública nem a réplica de Harris |
| Verificação das referências (amostra reconferida) | 9,5 | 6 itens reconferidos nesta rodada em PubMed e gov.br; zero erro |
| Portão automático | 8,5 | Verde, 54 itens, relatório idêntico ao meu; orçamento e teto do jogo agora presos. Faltam os mesmos quatro dentes da rodada 2 |
| Funcionamento no celular | 9 | Sem rolagem horizontal, sem texto cortado, zero erros de console, partida completa em 375 e 320 px |
| Desempenho | 9,5 | Carga em 359 ms (375) e 333 ms (320); 58.986 bytes com gzip |

## PROBLEMAS

Nenhum BLOQUEANTE. Nenhum IMPORTANTE.

### POLIMENTO

1. **[POLIMENTO] `#lim-8` · "as decisões mais recentes do Supremo Tribunal Federal passaram a levar em conta a avaliação da Conitec".** A substância confere: a página "Judicialização" da Conitec (HTTP 200 hoje; "Publicado em 03/02/2025", "Modificado em 17/03/2026") diz que, "De acordo com o Supremo Tribunal Federal (STF), a Justiça pode determinar o fornecimento de medicamentos que não estão na lista do SUS, desde que se comprove", entre seis pontos, "que a decisão da Conitec de não incluir o medicamento nas listas do SUS é ilegal, que não houve pedido de inclusão ou houve demora excessiva na sua análise". O que a página não diz é quando: "mais recentes" e "passaram a" são do site. A página também só fala de medicamentos, e o site diz "pedidos de tratamento". Correção: "segundo o Supremo Tribunal Federal, a Justiça só manda fornecer um remédio fora da lista do SUS se, entre outras condições, ficar provado que a decisão da Conitec foi ilegal ou demorou demais"; e pôr a página em `#refs`, já que hoje ela só aparece em FONTES.md.
2. **[POLIMENTO] `#lim-3` · "Os críticos não aceitam essa resposta, e o debate continua" sem fonte.** A frase é verdadeira e tem fonte fácil: segundo o PubMed, Harris respondeu no mesmo número da revista (PMID 7674279, [doi:10.1136/jme.21.3.151](https://doi.org/10.1136/jme.21.3.151)), sustentando que o QALY e medidas parecidas "remain vulnerable to the charge of double jeopardy". Correção: citar Harris 1995 na frase e criar a referência e o fato.
3. **[POLIMENTO] `#vantagens`, glossário e FONTES.md · consulta pública.** "Qualquer pessoa pode opinar, pela internet, antes da decisão final" está certo, mas F118 só cobre a existência da consulta, e a nota da Parte C a dá como "conhecimento geral". Conferi na página "Consultas públicas" da Conitec (`/assuntos/participacao-social/consultas-publicas/vigentes`, HTTP 200): "Todos os temas avaliados pela Conitec são submetidos à consulta pública, permitindo que qualquer cidadão compartilhe opiniões, experiências e informações técnico-científicas sobre os assuntos em análise por meio de formulário eletrônico." Correção: acrescentar essa página a F118.
4. **[POLIMENTO] FONTES.md · três contradições internas.** (a) Nota do Mapa, linha 20: "F121, parcial" × F121 "verificada em páginas oficiais". (b) Parte C: a nota diz que os itens 4, 7 e 15 foram superados, e eles continuam na lista do que "o site não deve afirmar"; riscar ou reescrever os três. (c) A mesma nota apoia Longworth em F84, que segue "parcial". Além disso a tabela do Mapa continua a da rodada 1, e a linha 402 ainda diz que os DOIs "não foram testados em doi.org" (testei os 31 na rodada 2).
5. **[POLIMENTO] Portão · dentes que faltam.** (a) Sem teste da folha de fontes pendurada: `media="print"` → `media="all"` passa em `npm test`. (b) `tests/pagina.js`, linhas 108 e 162: `ok(true, …)`; trocar por `#dvS1` mudou de valor depois da seta e por `R.lateral` igual ao número que sai no jornal. (c) "R$ 120 mil por QALY" → "R$ 160 mil" e "9.148" → "9.418" passam em `npm test`. (d) O teste novo do orçamento compara o código com `docs/JOGO.md`; quem mudar os dois juntos passa. Fixar também as notas das partidas de referência (hoje 4,5/3,3/3,1 para 1234) fecha essa porta.
6. **[POLIMENTO] `#lim-3` · "autores favoráveis à medida".** É leitura razoável do resumo (o artigo se propõe a mostrar que "the defender of QALYs has an adequate response"; Harris o descreve como tentativa "to defend QALYs"), mas é caracterização do site, não frase da fonte. Aceitável; se quiser ficar colado à fonte, "um artigo que saiu em defesa da medida".
7. **[POLIMENTO] Celular, 320 px.** Letra de 8,8 px em `.hero-art` (10,5 px em 375); tabela de coeficientes em `#peso` com 18 px de rolagem interna; 12 deslizantes com 16 px de altura.
8. **[POLIMENTO] Restos da rodada 1** (linha 9 da conferência): "medida complementar"; cidades de Santos 2016; número de páginas das diretrizes; DOI longo como texto do link; fontes de terceiros.
9. **[POLIMENTO] `portao.md`** diz "sem imagens nem bibliotecas" sem mencionar as fontes externas; folga de 4% na contagem de palavras do jogo.

## COBERTURA DE FONTES DO QUE MUDOU

| # | Texto do site | Onde conferi hoje | Bateu? |
|---|---|---|---|
| 1 | `#lim-3`: artigo que "examinou a objeção da dupla penalização, reconheceu o que ela tem de certo e sustentou que o defensor do QALY tem resposta adequada para ela (Singer e colaboradores, 1995)" | PubMed, PMID 7674278, [doi:10.1136/jme.21.3.144](https://doi.org/10.1136/jme.21.3.144): "It seeks to determine what is sound in the double jeopardy objection, and then to show that the defender of QALYs has an adequate response to it." | Sim. A frase do site é quase tradução do resumo e não vai além dele |
| 2 | `#refs`: Singer P, McKie J, Kuhse H, Richardson J. J Med Ethics. 1995;21(3):144-50 | PubMed, mesmo registro: quatro autores, volume 21, número 3, páginas 144-50 | Sim |
| 3 | `#lim-3`: "Os críticos não aceitam essa resposta, e o debate continua" | PubMed, PMID 7674279, [doi:10.1136/jme.21.3.151](https://doi.org/10.1136/jme.21.3.151) (Harris, réplica no mesmo número) | Sim, mas a fonte não está no site nem no catálogo (polimento 2) |
| 4 | `#lim-8`: Justiça discute a partir do direito à saúde; decisões do Supremo "passaram a levar em conta a avaliação da Conitec" | `www.gov.br/conitec/pt-br/judicializacao`, com `curl -L -A 'Mozilla/5.0'`, HTTP 200 | Sim na substância; "mais recentes" não está na página (polimento 1) |
| 5 | `#vantagens` e glossário: consulta pública, "qualquer pessoa pode opinar, pela internet, antes da decisão final" | Página "Consultas públicas" da Conitec: "qualquer cidadão… por meio de formulário eletrônico"; Relatório 793 (rodada 2): recomendações preliminares vão a consulta | Sim; falta registrar em F118 (polimento 3) |
| 6 | Glossário, entradas novas ou alteradas: "Consulta pública"; "Ano de vida ganho" ("um ano a mais de vida, contado sem peso de qualidade"); "Regra do resgate" ("o dever de socorrer uma pessoa identificada e em perigo imediato…") | Item 5; F37 e F38 (limiar por ano de vida ganho); F89 ("imperativo de resgatar indivíduos identificáveis diante de morte evitável", via McKie e Richardson) | Sim. São definições, sem número novo; "dever" fica mais perto de "imperativo" do que o "impulso" de antes |

As demais entradas do glossário com número ("R$ 40 mil por QALY, com até 3 vezes"; "5% ao ano"; "0 a 10") repetem fatos já conferidos nas rodadas 1 e 2. Nenhuma afirmação do site se apoia em fato marcado "não verificada".

## PORTÃO, MUTAÇÕES E CELULAR (o que rodei)

- `npm test`: código 0. calc.js 119 verificações; dados.js 10 pautas e 21 casos; equilibrio.js 32.400 partidas, sem falhas.
- `node tests/pagina.js <meu scratchpad>/saida`: código 0, 54 itens marcados, nenhuma FALHA. Fora os tempos, o relatório é idêntico byte a byte ao `review/rodada-3/portao.md`.
- Capturas: abri `375-desenhe.png`; mostra a seção certa, sem corte.

Mutações, numa cópia no scratchpad (arquivos reais intactos):

| Mutação | `npm test` |
|---|---|
| `ORC`, 3 reuniões, normal: 420 → 520 | **pegou**: "JOGO.md: orçamento de 3 reuniões no código (480/520/400) não está na documentação" |
| `ORC`, 6 reuniões, normal: 600 → 650 | **pegou** |
| `TETO` 0,5 → 0,6 | **pegou**: "a documentação e o texto do jogo dizem 'metade do orçamento'" |
| "R$ 120 mil por QALY" → "R$ 160 mil" | sobreviveu |
| "entrevistaram 9.148" → "9.418" | sobreviveu |
| `media="print"` → `media="all"` na folha de fontes | sobreviveu |

Celular, script próprio em Playwright (`isMobile`, toque, 375 × 740 e 320 × 640, todos os `<details>` abertos):

| Verificação | 375 px | 320 px |
|---|---|---|
| `scrollWidth` do guia | 375 | 320 |
| Elementos vazando para fora da página | nenhum (só o link "pular", fora da tela de propósito) | nenhum |
| `<text>` de SVG fora da caixa do gráfico, em todos os exemplos de "Desenhe uma vida" | nenhum | nenhum |
| Rótulos do eixo de `#dvSvg`: folga à esquerda de "0,25" e "0,75" | 4,0 px | 3,3 px |
| Rótulo "10" do eixo dos anos: folga à direita | 11,2 px | 8,9 px |
| Texto cortado por `overflow` (fora os rótulos só para leitor de tela) | nenhum | nenhum |
| Menor letra em gráfico | 10,5 px | 8,8 px (ilustração do topo) |
| Jogo, partida 1234 completa: início, 3 reuniões, 3 atas, jornal | sem rolagem, sem corte, sem "undefined" ou "NaN"; notas 4,5 / 3,3 / 3,1; painel −472 | idem |
| Erros de console | 0 | 0 |
| Carga | 359 ms | 333 ms |

O defeito do eixo que achei no meio da rodada 2 (rótulos "0,75" e "0,25" cortados em 2,7 px) continua corrigido nas duas larguras.

## O QUE ESTÁ BOM (para não ser desfeito)

- A frase sobre Singer 1995 agora diz o que o resumo diz, sem argumento de autoridade e com a ressalva de que os críticos não aceitam a resposta.
- `#lim-8` deixou de afirmar que a Justiça decide "sem a conta", o que a página da própria Conitec desmentia.
- "Uma objeção antiga" no lugar do superlativo.
- F116, F119 e F121 corrigidos na fonte, com a limitação declarada (Frijters não lido; Constituição vista em página do ministério).
- O teste que amarra `ORC` e `TETO` à documentação do jogo: três mutações pegas.
- Margem do gráfico "Desenhe uma vida" no celular; nenhuma letra cortada em 320 px.
- Portão reproduzível: rodei e saiu o mesmo relatório.
- Zero erros de console e partida padrão completa nas duas larguras; página abaixo de 60 kB com gzip.
- Nenhuma referência inventada e nenhum número novo sem fonte.
