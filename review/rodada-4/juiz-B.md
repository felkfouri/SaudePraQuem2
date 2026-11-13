# Parecer do Juiz B — Banca da disciplina (rodada 4)

```
VEREDITO: REPROVA
```

Há um item IMPORTANTE, e é o resto do item da rodada 3. A correção foi feita no quadrante "mais caro e melhor" e ficou certa: a saúde deslocada usa sempre R$ 40 mil, e entre R$ 40 mil e R$ 120 mil a tela diz que aceitar é escolha de prioridade. No quadrante "mais barato e pior", que eu tinha pedido junto ("vale o simétrico"), o texto não mudou: com o limite de R$ 120 mil, a tela afirma que R$ 80 mil economizados por QALY perdido são "menos que o valor de referência" e que "a economia não compensa a saúde perdida", ao lado de um bloco que mostra 2,00 QALYs rendidos pelo dinheiro poupado contra 1,00 perdido. O defeito é estreito (só aparece com números digitados pelo leitor e o limite de R$ 120 mil) e a correção é de poucas linhas. Todo o resto é polimento.

## NOTAS (0–10 por critério)

| Critério | Rodada 1 | Rodada 2 | Rodada 3 | Rodada 4 |
|---|---:|---:|---:|---:|
| Precisão conceitual | 8,5 | 9,0 | 9,0 | 9,0 |
| Coerência com MS/Conitec | 7,5 | 9,0 | 9,0 | 9,0 |
| Correção dos cálculos | 7,5 | 8,5 | 8,0 | 9,0 |
| Separação entre fato, valor e ilustração | 7,0 | 8,5 | 8,0 | 8,5 |
| Qualidade como produto técnico | 7,0 | 7,5 | 8,0 | 8,0 |

A nota de cálculo sobe porque todos os números da tela agora obedecem à hipótese declarada. A de separação entre fato e valor não chega a 9 por causa do item IMPORTANTE. A de produto técnico continua limitada pela autoria incompleta e pela falta de teste com leitores reais, ambas declaradas.

## O que foi conferido

- `npm test`: `calc.js` 149 verificações, `dados.js` 10 pautas e 21 casos, `equilibrio.js` 32.400 partidas, tudo verde. `review/rodada-4/portao.md` lido (verde, 13 nov. 2026, 22:27 UTC), com as duas verificações novas do custo por QALY.
- Lido: a diferença completa entre a rodada 3 e a rodada 4 em `index.html`, `MODELO.md`, `FONTES.md`, `MEMORIAL.md`, `DECISOES.md`, `CHANGELOG.md` e `tests/calc.js`; o texto das Partes 3 a 7, glossário e "Sobre"; `avaliar` (linhas 1108-1125), `rcPlane` e `rcRender` (1529-1567), a regra de coerência (1299-1303 e 1349); `JOGO.md` nas linhas da coerência; F121 a F124 em `FONTES.md`.
- Capturas vistas: `1280-rcei.png`, `1280-jogo-2b-ata-sem-regua.png`.
- Refeito à mão e depois na página real (Chromium, script próprio fora do repositório; 13 combinações):

| Caso | À mão | Tela |
|---|---|---|
| ΔC = 80.000, ΔE = 1, limite 120 mil | RCEI 80.000; D = 80.000 ÷ 40.000 = 2; BLS = 1 − 2 = −1; aceita pela regra, prioridade | "R$ 80.000 por QALY ganho"; bloco 2,00; "abaixo do limite de R$ 120 mil… mas acima da referência de R$ 40 mil… (2,00 QALYs) do que rende aqui (1,00). Aceitar, neste caso, é uma escolha de prioridade…". Confere. Selo: "abaixo da referência" (ver item 1b). |
| O mesmo, limite 40 mil | recusa; D = 2 | "acima do valor de referência de R$ 40 mil… (2,00)… (1,00)". Confere. |
| Doença rara, limite 120 mil | 2.400.000 ÷ 8 = 300.000; D = 60 | "R$ 300.000"; bloco 60,00; "acima até do limite de R$ 120 mil admitido em situações específicas". Confere. |
| Prótese, limite 120 mil | 20.000; D = 0,5; sem prioridade | "abaixo do valor de referência de R$ 120 mil… (1,00)… (0,50)". Números certos; rótulo no polimento 3. |
| Economia do exemplo (ΔC = −40.000, ΔE = −0,05), limite 120 mil | 800.000 por QALY perdido ≥ 120.000: aceita; poupado rende 1,00 contra 0,05 perdido | Confere. |
| Economia, ΔC = −80.000, ΔE = −1, limite 120 mil | 80.000 por QALY perdido; 80.000 < 120.000: a regra recusa; pela hipótese, o poupado rende 2,00 contra 1,00 perdido (BLS = +1) | Bloco 2,00, e o veredito diz "menos que o valor de referência, a economia não compensa a saúde perdida". **Não confere** (item 1a). |
| Economia, ΔC = −20.000, ΔE = −1, limite 120 mil | 20.000 < 40.000: não compensa (0,50 contra 1,00) | Confere. |
| Dominante, dominada, igual, com 120 mil | sem razão | Conferem; o limite não interfere. |

- Não reabri as fontes primárias. A referência de Harris (1995) foi conferida contra F122 e contra o que conheço: J Med Ethics 21(3):151-7, logo depois do artigo de Singer e colaboradores (páginas 144-50) no mesmo número.

## CONFERÊNCIA DA RODADA 3

| # | Item da rodada 3 | Situação | Evidência |
|---|---|---|---|
| 1 | **IMPORTANTE:** saúde deslocada dividida pelo limiar escolhido | **EM PARTE** | Resolvido: `REF=40000` fixo; `deslocada: dC/REF`, `bls: dE−dC/REF` (linha 1119); campo `prioridade` (1123); veredito novo no quadrante "troca" (1559-1561); nota sob o gráfico ("dividido por R$ 40 mil, sempre, mesmo quando você escolhe o limite de R$ 120 mil"); `MODELO.md` §4 reescrito, com os esperados D = 60 e "D = 2, BLS = −1, prioridade"; testes em `calc.js` (60, 2, −1, laço de prioridade) e dois no portão. Não resolvido: o quadrante "economia" (1562) e o selo (1552). Ver item 1. |
| 2 | "Desenhe uma vida": "porque não é de saúde plena" com desconto | **RESOLVIDO** | Linha 1422: a frase é decidida por `o0.ganhoQaly`, sem desconto. |
| 3 | Bônus de coerência: "nunca aprovou…" | **RESOLVIDO** (resíduo) | Linha 1349: "Desde que a régua apareceu, o comitê foi coerente nas suas escolhas." A frase deixou de ser falsa, mas perdeu a definição, e `JOGO.md` não registra a exclusão. Polimento 5. |
| 4 | Fala do Contador sem a ressalva | **RESOLVIDO** | Linha 1717 e captura `1280-jogo-2b`: "+2.750 QALYs em relação à rede de saúde (hipótese do jogo)." Portão: 1.443 palavras. |
| 5 | "Dominante" na Parte 4 e no glossário | **RESOLVIDO** (resíduo) | "melhor e mais barato (ou igual numa coisa e melhor na outra)". O dominado ficou sem o simétrico. Polimento 6. |
| 6 | evLY, "os dois anteriores" | **RESOLVIDO** | "meio-termo entre o QALY e os anos de vida ganhos". |
| 7 | `MODELO.md` §4 contraditório; enumeração | **EM PARTE** | O parágrafo antigo saiu. A §5 e `JOGO.md` continuam dizendo "combinações que cabem no orçamento", sem o teto e a ordem das reuniões. Polimento 9. |
| 8 | Teste que prende `limites` | **NÃO RESOLVIDO** | `tests/equilibrio.js` não compara `limites` com partidas jogadas. Polimento 9. |
| 9 | Citação: versão e "Acesso em" | Passa para a PENDÊNCIA DO AUTOR | — |
| 10 | Limitação 8: frase do STF sem referência | **RESOLVIDO** | Frase reescrita e ligada a `#r-jud`; F123 "verificada"; a linha 20 de `FONTES.md` acertada. Resíduo no polimento 7. |
| 11 | Limitação 3: "autores favoráveis"; última frase solta | **EM PARTE** | Entraram o argumento de imparcialidade e a réplica de Harris (1995), o que melhora o bloco. Os dois reparos de redação que pedi não foram feitos. Polimento 8. |
| 12 | Atualização anual pelo PIB per capita | **NÃO RESOLVIDO** | Era sugestão. Polimento 10. |
| 13 | Memorial §7: −0,177 contra −0,176 | **NÃO RESOLVIDO** | Está em `MODELO.md` §2; o memorial não menciona. Polimento 10. |

## PENDÊNCIA DO AUTOR

Sem mudança, e fora do veredito. O site (`#sobre`), o `README.md` e o `MEMORIAL.md` trazem apenas "Felipe, cirurgião e doutorando na FMUSP". Só o autor pode fornecer:

1. **Nome completo**, na forma de citação (SOBRENOME, Nome).
2. **Programa de pós-graduação.**
3. **Docente responsável pela disciplina e/ou orientador.**
4. **Contato:** e-mail institucional ou ORCID.
5. **Endereço público definitivo:** hoje a citação aponta para o repositório, e o memorial dá o GitHub Pages como "endereço previsto". Publicar, confirmar e, se possível, depositar uma versão com DOI (Zenodo).
6. **Versão e data de acesso** na citação: "SOBRENOME, Nome. *A régua da saúde: o que é o QALY, suas vantagens e limitações* [recurso eletrônico]. Versão 1.0. São Paulo: Faculdade de Medicina da USP, 2026. Disponível em: <endereço>. Acesso em: <data>."

Sem esses dados, a banca real não tem como registrar o produto.

## PROBLEMAS

Nenhum BLOQUEANTE. Um IMPORTANTE.

### IMPORTANTE

1. **[IMPORTANTE] Interativo 4, `#rcei` · veredito do quadrante "mais barato e pior" (linha 1562) e selo (linha 1552) · com o limite de R$ 120 mil, a tela ainda trata o limite como se fosse a referência, e uma recusa por prioridade aparece como resultado da conta.**

   **(a) Quadrante de economia.** Tratamento atual R$ 100.000 e 3 QALYs; novo R$ 20.000 e 2 QALYs; limite "R$ 120 mil (3 vezes)". A tela mostra:
   - bloco: "Saúde que o dinheiro poupado pode render: **2,00** QALYs";
   - selo vermelho: "economia abaixo da referência";
   - veredito: "R$ 80.000 economizados para cada QALY perdido. Como isso é **menos que o valor de referência**, **a economia não compensa a saúde perdida**."

   As duas afirmações são falsas pelo modelo da própria página. R$ 80 mil é mais que a referência de R$ 40 mil (a dica do seletor diz "R$ 40 mil é a referência da Conitec"); é menos que o limite de R$ 120 mil. E, pela hipótese escrita logo abaixo do gráfico, a economia compensa: o dinheiro poupado rende 2,00 QALYs e a perda é de 1,00 (`bls = +1`). Com o limite de R$ 40 mil, os mesmos números dão "a regra diz que o dinheiro poupado pode render mais saúde em outro lugar do que a perdida aqui". O leitor troca o seletor e a página passa a dizer o contrário, com o mesmo 2,00 no bloco.

   O que a regra faz ali é defensável: com o limite de 3 vezes, exige-se mais economia para aceitar a perda de saúde de um grupo prioritário. Mas isso é a mesma escolha de prioridade que o quadrante de cima agora declara, e aqui ela aparece como fato da conta. `avaliar` também não a marca: `prioridade` só é verdadeiro quando `ok === true`, e neste caso `ok` é falso com `bls` positivo.

   **(b) Selo.** No caso que o próprio portão testa (ΔC = 80.000, ΔE = 1, limite de R$ 120 mil), o selo verde diz "abaixo da referência" e o veredito, logo abaixo, diz "acima da referência de R$ 40 mil". Sozinho seria polimento; tem a mesma causa de (a): os rótulos não distinguem "referência" de "limite".

   *Por que é importante.* É o que restou do item da rodada 3, em que pedi "o simétrico no quadrante mais barato e pior": uma frase na tela que contradiz o número ao lado e a hipótese declarada, e um juízo de prioridade apresentado como resultado da conta. O alcance é pequeno: nenhum dos seis exemplos prontos cai nesse caso; é preciso digitar valores com economia entre R$ 40 mil e R$ 120 mil por QALY perdido e escolher o limite maior. Os números da tela estão todos certos; o erro é do texto.

   *Correção sugerida.*
   - Em `avaliar`, marcar a discordância nos dois sentidos, por exemplo `prioridade = (ok === true && bls < 0) || (ok === false && bls > 0)` (só ocorre com `lim > REF`), ou um campo separado para o caso da recusa.
   - No veredito da economia, quando `lim > REF` e a razão fica entre `REF` e `lim`: "É mais que a referência de R$ 40 mil e menos que o limite de R$ 120 mil. Pela hipótese desta página, o dinheiro poupado renderia mais saúde em outro lugar (2,00 QALYs) do que a perdida aqui (1,00). Recusar, neste caso, é uma escolha de prioridade: proteger a saúde de um grupo que a regra põe à frente. Não é um resultado da conta." Nos outros ramos, dizer "limite de R$ 120 mil" quando for esse o valor comparado, e incluir os dois números (rendido e perdido), como no quadrante de cima.
   - Selo: com `lim > REF`, "abaixo do limite de 3 vezes" / "acima do limite de 3 vezes" / "economia abaixo do limite" / "economia acima do limite".
   - Testes: `avaliar(-80000, -1, 120000)` → `ok false`, `bls 1`, marca de prioridade; `avaliar(-80000, -1, 40000)` → `ok true`; no portão, o texto do veredito e do selo nesse caso. Uma linha em `MODELO.md` §4.

### POLIMENTO

2. **[POLIMENTO] `#rcei`, legenda do plano (linha 727).** A área sombreada e a linha tracejada seguem o limite escolhido, o que está certo. A legenda fixa diz "A linha tracejada é o valor de referência". Com R$ 120 mil, é o limite de 3 vezes. Sugestão: "A linha tracejada é o limite escolhido; a área verde é o que a regra aceita com ele." No caso de prioridade, o ponto fica verde dentro da área aceita; coerente com a regra, e o veredito explica.

3. **[POLIMENTO] `#rcei`, veredito sem prioridade com R$ 120 mil (linha 1560) e empates.** "Fica abaixo do valor de referência de R$ 120 mil" (prótese com o limite maior): os números estão certos, o rótulo chama o limite de referência. Sugestão: quando `lim > REF` e a RCEI não passa de R$ 40 mil, "Fica abaixo da referência de R$ 40 mil". Nos empates exatos (RCEI = 40.000 ou 120.000), a tela diz "abaixo" e "rende mais saúde (1,00) do que… (1,00)"; trocar por "no limite" ou "rende tanto quanto".

4. **[POLIMENTO] `#rcei`, bloco que muda de título (linha 1553) e nota (730).** "Saúde que o dinheiro poupado pode render" está certo e o número deixou de ter o sinal "+" solto. A nota embaixo continua explicando só "Saúde que sai de outro lugar", título que não está na tela quando se poupa. Sugestão: acrescentar "Quando o tratamento novo poupa dinheiro, a conta é a mesma ao contrário: o que se poupa dividido por R$ 40 mil." No parêntese do veredito de prioridade, "(doença rara, grave, de crianças)" deixa fora a quarta situação; "por exemplo, doença rara ou grave" resolve.

5. **[POLIMENTO] Jogo, bônus de coerência (linha 1349) e `JOGO.md` (linhas 95-100).** "Desde que a régua apareceu, o comitê foi coerente nas suas escolhas" não diz o que é ser coerente, e "coerente" sem definição soa como elogio geral. Nas partidas sem tutorial a régua esteve sempre lá. Sugestão: "O comitê não aprovou nenhum pedido mais caro por QALY depois de recusar um mais barato de mesma prioridade" e, só com tutorial, "desde que a régua apareceu". Registrar em `JOGO.md` que a reunião sem a régua não conta para a regra.

6. **[POLIMENTO] Parte 4 (linha 654) e glossário · "dominado".** O dominante ganhou a definição completa; o dominado ficou só "pior e mais caro", e o interativo classifica como dominada também a opção igual numa coisa e pior na outra. Sugestão: "Dominado é o contrário: pior e mais caro (ou igual numa coisa e pior na outra)."

7. **[POLIMENTO] Limitação 8, frase do Supremo (linha 819).** Agora tem referência e não afirma data. Um reparo de precisão: a condição fixada pelo Supremo, pelo que conheço da tese, admite alternativas (ilegalidade da decisão de não incorporar, falta de pedido de incorporação ou demora na análise) e vem junto com outras, como a prova de eficácia com base em evidências. Conferir na página citada e, se for o caso: "uma delas é mostrar que a decisão da Conitec de não incluir o medicamento é ilegal, que não houve pedido de inclusão ou que a análise atrasou". Não conferi a página nesta rodada.

8. **[POLIMENTO] Limitação 3, defesa (linha 778) · pendente da rodada 3.** O argumento de imparcialidade está bem descrito e a réplica de Harris está certa (mesmo número da revista). Restam: (a) "Um artigo de autores favoráveis à medida" rotula os autores sem fonte; "Um artigo que examinou a objeção…" basta; (b) a última frase, "E um levantamento…", chega depois da réplica do crítico e sem dizer por que importa. Sugestão: "Na prática, a situação do exemplo é rara: um levantamento…". Como a réplica de Harris é fala do crítico dentro do bloco da defesa, convém que a frase final volte claramente à defesa.

9. **[POLIMENTO] `tests/equilibrio.js`, `MODELO.md` §5 e `JOGO.md` · pendente da rodada 3.** Falta o teste que compara `limites` com partidas enumeradas por `cabe` e `fecharReuniao`, e os dois documentos ainda dizem "combinações que cabem no orçamento" sem o teto e a ordem das reuniões.

10. **[POLIMENTO] `#decisao` (linha 670) e `MEMORIAL.md` §7 · pendentes.** "O relatório previa atualização anual pelo PIB per capita; a diretriz de 2026 manteve os mesmos valores", se a fonte sustentar. No memorial, uma linha sobre −0,177 contra −0,176 (já em `MODELO.md` §2) e, na limitação da "saúde deslocada", trocar "tratam o valor de referência como custo de oportunidade" por "tratam R$ 40 mil como custo de oportunidade, também quando o limite escolhido é R$ 120 mil".

## O QUE ESTÁ BOM (para não ser desfeito)

- **A correção do quadrante "mais caro e melhor".** `REF` fixo, separado do limite da decisão; o texto "Aceitar, neste caso, é uma escolha de prioridade…, não um resultado da conta" diz exatamente o que o limite de 3 vezes é. Poucos materiais didáticos fazem essa distinção. O item 1 pede só que o outro quadrante siga o mesmo modelo.
- **"Doença rara" com R$ 120 mil:** 60,00 QALYs deslocados e "acima até do limite de R$ 120 mil". O número não muda mais com o seletor.
- **Nota sob o gráfico:** "dividido por R$ 40 mil, sempre, mesmo quando você escolhe o limite de R$ 120 mil. É uma hipótese didática". Fato, hipótese e escolha ficam separados.
- **`MODELO.md` §4:** fórmulas, hipótese e esperados batem com o código e com os testes; a contradição entre parágrafos sumiu.
- **Testes novos:** `deslocada` com R$ 120 mil, `prioridade` nos três casos e o laço que proíbe `ok` e BLS discordarem sem a marca. O portão confere o texto na página real.
- **Plano de custo-efetividade:** a área aceita segue o limite escolhido e passa pela origem nos dois quadrantes.
- **Bloco que muda de título** quando se poupa dinheiro: resolve a ambiguidade de sinal.
- **"Desenhe uma vida":** a frase sobre saúde plena não culpa mais a qualidade pelo efeito do desconto.
- **Limitação 3:** o argumento de imparcialidade em uma frase que o leigo entende, e a réplica com fonte. O leitor vê que o debate tem dois textos, e nenhum é declarado vencedor.
- **Limitação 8:** a frase do Supremo com referência, sem cronologia não verificada, e o fecho "convivem, em tensão permanente".
- **Fala do Contador** com "hipótese do jogo", igual ao painel e ao jornal.
- **Tudo o que elogiei antes continua de pé:** definições de utilidade, TTO, aposta padrão, tarifa, RCEI e desconto; a cadeia questionário → valoração → tarifa → paciente; os qualificadores das quatro situações do limite de 3 vezes; ultrarraras e terapias gênicas fora da regra; "sugere" para o cenário sem desconto; a ressalva em cada vantagem; `limites` sequencial; a seção de aplicabilidade do memorial.
