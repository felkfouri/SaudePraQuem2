# Parecer do Juiz B — Banca da disciplina (rodada 5, última)

```
VEREDITO: APROVA
```

O item IMPORTANTE da rodada 4 está resolvido, no código, no texto da tela, nos testes e no `MODELO.md`. Não encontrei erro conceitual, de cálculo, de coerência com a Conitec ou com a diretriz, nem mistura de fato com valor ou ilustração. A lista de PROBLEMAS só tem itens de POLIMENTO. A autoria e a citação continuam incompletas, mas isso depende do autor e fica fora do veredito, como pedido.

## NOTAS (0–10 por critério)

| Critério | Rodada 1 | Rodada 2 | Rodada 3 | Rodada 4 | Rodada 5 |
|---|---:|---:|---:|---:|---:|
| Precisão conceitual | 8,5 | 9,0 | 9,0 | 9,0 | 9,0 |
| Coerência com MS/Conitec | 7,5 | 9,0 | 9,0 | 9,0 | 9,5 |
| Correção dos cálculos | 7,5 | 8,5 | 8,0 | 9,0 | 9,5 |
| Separação entre fato, valor e ilustração | 7,0 | 8,5 | 8,0 | 8,5 | 9,0 |
| Qualidade como produto técnico | 7,0 | 7,5 | 8,0 | 8,0 | 8,0 |

A nota de produto técnico não sobe porque o que a limita (autoria incompleta, endereço público não confirmado, falta de teste com leitores reais) não mudou. As duas primeiras estão na PENDÊNCIA DO AUTOR; a terceira está declarada no memorial.

## O que foi conferido

- `npm test`: `calc.js` 166 verificações (eram 149), `dados.js` 10 pautas e 21 casos, `equilibrio.js` 32.400 partidas, tudo verde. `review/rodada-5/portao.md` lido: verde, gerado em 13 nov. 2026, 22:37 UTC, com três verificações novas do custo por QALY (selo, "nunca chama os R$ 120 mil de valor de referência", economia de R$ 80 mil como escolha de prioridade).
- Lido: a diferença completa entre as capturas da rodada 4 e o estado atual em `index.html`, `tests/calc.js`, `tests/pagina.js`, `MODELO.md`, `JOGO.md`, `MEMORIAL.md` e `FONTES.md` (F123); `avaliar` (linhas 1118-1126), `rcPlane` e `rcRender` (1529-1575); a regra de coerência (1300-1303 e 1349-1350); as Partes 4 e 5, as limitações 3 e 8, o cartão de equidade e o glossário; `README.md` e `MEMORIAL.md` inteiros.
- Capturas vistas: `1280-rcei.png`, `375-rcei.png`. Capturas próprias, fora do repositório: os dois casos de prioridade com o limite de R$ 120 mil em 1280 px e o selo longo em 375 px (não transborda; rolagem horizontal 0 px).
- Não reabri as fontes primárias. A condição do Supremo foi conferida contra F123 e contra o que conheço da tese (ilegalidade do ato de não incorporação, ausência de pedido ou mora na apreciação).

### Contas refeitas à mão e na página real

Chromium, script próprio fora do repositório, 14 combinações de valores com cada limite. Em todas, `D = |ΔC| ÷ 40.000` e `BLS = ΔE − ΔC ÷ 40.000`. O ponto do gráfico fica verde quando a regra aceita e vermelho quando recusa; a área verde segue o limite escolhido.

**Limite de R$ 120 mil**

| Caso | À mão | Selo | Caixa | Veredito | Ponto | Confere? |
|---|---|---|---|---|---|---|
| Atual 100.000/3, novo 20.000/2 | ΔC −80.000, ΔE −1; 80.000 por QALY perdido; regra recusa (80 < 120); D = 2; BLS = +1; prioridade | cinza: "economia acima da referência, abaixo do limite de 3 vezes" | "Saúde que o dinheiro poupado pode render: 2,00" | "mais que a referência de R$ 40 mil e menos que o limite de R$ 120 mil… renderia mais saúde em outro lugar (2,00 QALYs) do que a perdida aqui (1,00). Recusar a troca, neste caso, é uma escolha de prioridade…, não um resultado da conta." | vermelho, fora da área | Sim |
| Atual 0/0, novo 80.000/1 | RCEI 80.000; aceita; D = 2; BLS = −1; prioridade | cinza: "acima da referência, dentro do limite de 3 vezes" | "Saúde que sai de outro lugar: 2,00" | "abaixo do limite de R$ 120 mil…, mas acima da referência de R$ 40 mil… (2,00)… (1,00). Aceitar, neste caso, é uma escolha de prioridade…" | verde, dentro | Sim |
| Novo 20.000/1 | 20.000; aceita; D = 0,5; BLS = +0,5 | verde: "abaixo da referência e do limite" | 0,50 | "abaixo do valor de referência de R$ 40 mil: … rende mais saúde (1,00 QALYs) do que… (0,50)" | verde | Sim |
| Novo 40.000/1 | 40.000; aceita; D = 1; BLS = 0; sem prioridade | verde: "abaixo da referência e do limite" | 1,00 | "exatamente no valor de referência de R$ 40 mil: … rende a mesma saúde (1,00 QALYs) que… (1,00)" | verde | Sim (o selo diz "abaixo" no empate; polimento 2) |
| Novo 130.000/1 | 130.000; recusa; D = 3,25; BLS = −2,25 | vermelho: "acima do limite de 3 vezes" | 3,25 | "acima até do limite de R$ 120 mil admitido em situações específicas… (3,25 QALYs)… (1,00)" | vermelho | Sim |
| Economia de 200.000 por QALY perdido | aceita (200 ≥ 120); D = 5; BLS = +4 | verde: "economia acima do limite de 3 vezes" | "pode render: 5,00" | "mais que o limite de R$ 120 mil, a regra diz que o dinheiro poupado pode render mais saúde em outro lugar…" | verde | Sim |
| Economia de 20.000 por QALY perdido | recusa; D = 0,5; BLS = −0,5; sem prioridade | vermelho: "economia abaixo do limite de 3 vezes" | "pode render: 0,50" | "menos que o valor de referência de R$ 40 mil, a economia não compensa a saúde perdida" | vermelho | Sim (selo e veredito citam marcos diferentes, os dois verdadeiros; polimento 3) |

**Limite de R$ 40 mil**

| Caso | À mão | Selo | Veredito | Ponto | Confere? |
|---|---|---|---|---|---|
| Atual 100.000/3, novo 20.000/2 | 80.000 por QALY perdido; aceita; BLS = +1 | verde: "economia acima da referência" | "mais que o valor de referência de R$ 40 mil, a regra diz que o dinheiro poupado pode render mais saúde…" | verde | Sim |
| Novo 80.000/1 | recusa; D = 2; BLS = −1 | vermelho: "acima do valor de referência" | "acima do valor de referência de R$ 40 mil… (2,00)… (1,00)" | vermelho | Sim |
| Novo 20.000/1 | aceita; D = 0,5 | verde: "abaixo da referência" | "abaixo do valor de referência… (1,00)… (0,50)" | verde | Sim |
| Novo 40.000/1 | aceita; BLS = 0 | verde: "abaixo da referência" | "exatamente no valor de referência… a mesma saúde (1,00)… (1,00)" | verde | Sim |
| Novo 130.000/1 | recusa; D = 3,25 | vermelho: "acima do valor de referência" | "acima do valor de referência de R$ 40 mil… (3,25)… (1,00)" | vermelho | Sim |
| Economia de 200.000 | aceita; D = 5 | verde: "economia acima da referência" | "mais que o valor de referência de R$ 40 mil…" | verde | Sim |
| Economia de 20.000 | recusa; D = 0,5 | vermelho: "economia abaixo da referência" | "menos que o valor de referência de R$ 40 mil, a economia não compensa…" | vermelho | Sim |

Em nenhum caso com o limite de R$ 40 mil aparece "escolha de prioridade", como o modelo declara (`prioridade` só é verdadeiro com `lim ≠ REF`). Dominante, dominada e "sem diferença" não mudam com o limite. Valor negativo digitado gera o aviso e esconde o resultado.

Empates que testei por conta própria (RCEI de exatamente 120.000 com o limite de 3 vezes; economia de exatamente 40.000 por QALY perdido, com os dois limites): os números estão certos, mas o texto diz "abaixo" ou "mais que" onde há igualdade. Polimento 2.

## CONFERÊNCIA DA RODADA 4

| # | Item da rodada 4 | Situação | Evidência |
|---|---|---|---|
| 1a | **IMPORTANTE:** quadrante "mais barato e pior" com o limite de R$ 120 mil tratava o limite como referência e dizia "a economia não compensa" ao lado de 2,00 contra 1,00 | **RESOLVIDO** | `avaliar`, linha 1124: `o.prioridade=o.ok!==(o.bls>=-1e-12)`, simétrico. `rcRender`, ramo `economia`: três textos (prioridade; aceita, com "limite de R$ 120 mil" ou "valor de referência de R$ 40 mil" conforme o caso; recusa abaixo de R$ 40 mil). Tela conferida na tabela acima. `tests/calc.js`: `avaliar(-80000,-1,120000)` → `ok false`, `prioridade true`, `bls 1`, `deslocada −2`; mais três casos de economia; o laço compara `prioridade` com `ok ≠ (BLS ≥ 0)`; laço novo com `lim = 40.000` exige `prioridade false`. `tests/pagina.js`: o veredito precisa conter "Recusar a troca" e "escolha de prioridade" e não conter "menos que o valor de referência". `MODELO.md` §4: parágrafo e esperado novos ("ΔC −80.000 e ΔE −1 com limiar de 120.000: recusada, BLS = +1, prioridade"). |
| 1b | Selo "abaixo da referência" junto de veredito "acima da referência" | **RESOLVIDO** | Selo próprio, em cor neutra, para os dois casos de prioridade; "limite de 3 vezes" quando é esse o valor comparado. O portão confere o texto do selo. |
| 2 | Legenda do plano chamava a linha tracejada de "valor de referência" | **RESOLVIDO** | "A linha tracejada é o limiar escolhido (a referência ou o limite de 3 vezes); a área verde é o que a regra aceita." |
| 3 | Veredito "abaixo do valor de referência de R$ 120 mil"; empates | **EM PARTE** | O rótulo foi corrigido (prótese com R$ 120 mil: "abaixo do valor de referência de R$ 40 mil") e o portão proíbe "referência de R$ 120 mil". O empate em R$ 40 mil no quadrante de cima ganhou texto próprio. Os outros empates continuam (polimento 2). |
| 4 | Nota sob o gráfico só explica "Saúde que sai de outro lugar"; parêntese "(doença rara, grave, de crianças)" | **EM PARTE** | O parêntese virou "por exemplo, por ser uma doença rara ou grave". A nota não ganhou a frase sobre o dinheiro poupado (polimento 4). |
| 5 | Bônus de coerência sem definição; `JOGO.md` sem a exclusão da reunião sem régua | **RESOLVIDO** (resíduo) | Linha 1350: "Nas reuniões com a régua, o comitê não aprovou um pedido mais caro por QALY depois de recusar outro mais barato e de igual prioridade." `JOGO.md`, linha 100: "A reunião jogada sem a régua (tutorial) fica fora da regra de coerência, nos dois sentidos". Resíduo no polimento 5. |
| 6 | "Dominado" sem o simétrico | **RESOLVIDO** | Parte 4 e glossário: "(ou igual numa coisa e pior na outra)". Bate com `avaliar` (`ΔE ≤ 0` e `ΔC ≥ 0`, não ambos zero). |
| 7 | Condição do Supremo incompleta | **RESOLVIDO** | "…é ilegal, que não houve pedido de inclusão ou que a análise demorou demais". F123 reescrita com a citação literal da segunda condição e a data da reconferência. `tests/calc.js` prende a frase no texto. |
| 8 | Limitação 3: "autores favoráveis"; frase final solta | **EM PARTE** | O levantamento de Raymakers passou para o primeiro parágrafo, junto dos argumentos da defesa, e deixou de vir depois da réplica do crítico. "Autores favoráveis à medida" continua (polimento 6). |
| 9 | Teste que compara `limites` com partidas enumeradas; "combinações que cabem no orçamento" | **NÃO RESOLVIDO** | `tests/equilibrio.js` sem mudança; `MODELO.md` §5 e `JOGO.md` linha 84 com a mesma frase. Polimento 7. |
| 10 | Atualização pelo PIB per capita; memorial (−0,177 contra −0,176; "tratam o valor de referência como custo de oportunidade") | **NÃO RESOLVIDO** | `MEMORIAL.md` §7 sem mudança nesses pontos. Eram sugestões. Polimento 8. |

## PENDÊNCIA DO AUTOR

Sem mudança, e fora do veredito. O site (`#sobre`), o `README.md` e o `MEMORIAL.md` trazem apenas "Felipe, cirurgião e doutorando na FMUSP". Só o autor pode fornecer:

1. **Nome completo**, na forma de citação (SOBRENOME, Nome).
2. **Programa de pós-graduação** (o README diz só "programa de pós-graduação da Faculdade de Medicina da USP").
3. **Docente responsável pela disciplina e/ou orientador.**
4. **Contato:** e-mail institucional ou ORCID.
5. **Endereço público definitivo:** a citação aponta para o repositório, e o memorial dá o GitHub Pages como "endereço previsto". Publicar, confirmar e, se possível, depositar uma versão com DOI (Zenodo).
6. **Versão e data de acesso** na citação: "SOBRENOME, Nome. *A régua da saúde: o que é o QALY, suas vantagens e limitações* [recurso eletrônico]. Versão 1.0. São Paulo: Faculdade de Medicina da USP, 2026. Disponível em: <endereço>. Acesso em: <data>."

Sem esses dados, a banca real não tem como registrar o produto. Recomendo também, antes da entrega, aplicar as cinco perguntas de `COMPREENSAO.md` a algumas pessoas do público-alvo; o memorial já declara que isso não foi feito.

## PROBLEMAS

Nenhum BLOQUEANTE. Nenhum IMPORTANTE. Oito de POLIMENTO; os cinco primeiros nasceram das últimas correções ou ficam no interativo 4.

1. **[POLIMENTO] `#rcei`, veredito "Dominada" (linha 1564) · concordância.** A troca de "a tecnologia nova é dominada pela atual" por "o tratamento novo é dominado pela atual" deixou o gênero pela metade. Correção: "o tratamento novo é dominado pelo atual".

2. **[POLIMENTO] `#rcei`, empates exatos (linhas 1556-1570).** Os números estão certos; o texto afirma desigualdade onde há igualdade:
   - economia de exatamente R$ 40.000 por QALY perdido, limite de R$ 120 mil: selo "economia acima da referência…" e veredito "mais que a referência de R$ 40 mil… renderia mais saúde em outro lugar (1,00 QALYs) do que a perdida aqui (1,00)". Com `BLS = 0`, `prioridade` sai verdadeiro porque o teste é `bls ≥ 0`;
   - a mesma economia com o limite de R$ 40 mil: "mais que o valor de referência… pode render mais saúde";
   - RCEI de exatamente R$ 120.000 com o limite de 3 vezes: "Fica abaixo do limite de R$ 120 mil";
   - RCEI de exatamente R$ 40.000: o veredito já diz "exatamente no valor de referência", mas o selo diz "abaixo da referência".

   Correção: repetir nos outros ramos o que foi feito no ramo de cima ("exatamente", "a mesma saúde", "no limite"); no selo, "até a referência" ou "na referência". Só aparece com números redondos digitados pelo leitor.

3. **[POLIMENTO] `#rcei`, selo da economia recusada com o limite de R$ 120 mil (linha 1558).** Economia de R$ 20 mil por QALY perdido: o selo diz "economia abaixo do limite de 3 vezes" e o veredito, "menos que o valor de referência de R$ 40 mil". As duas frases são verdadeiras, mas citam marcos diferentes, e no quadrante de cima o caso simétrico diz "abaixo da referência e do limite". Correção: "economia abaixo da referência e do limite".

4. **[POLIMENTO] `#rcei`, rótulo do seletor (linha 709) e nota sob o gráfico (linha 730) · pendente em parte da rodada 4.** O `MODELO.md` agora declara: "Na tela, 'referência' é sempre R$ 40 mil". O rótulo do seletor continua "Valor de referência (limiar)", com a opção de R$ 120 mil dentro. Correção: "Limiar usado na decisão". A nota ainda explica só o título "Saúde que sai de outro lugar", que não está na tela quando o tratamento poupa dinheiro. Acrescentar: "Quando o tratamento novo poupa dinheiro, a conta é a mesma ao contrário: o que se poupa dividido por R$ 40 mil."

5. **[POLIMENTO] Jogo, bônus de coerência (linha 1350) contra a regra (linhas 1300-1302) e `JOGO.md` (linha 95).** A regra pune aprovar um pedido *acima da referência* depois de recusar outro mais barato por QALY e de prioridade *igual ou maior*. O texto do bônus diz "de igual prioridade" e omite "acima da referência". Além disso, `nOk` e `nNao` contam a reunião sem a régua: quem aprova no tutorial e recusa tudo depois recebe o bônus com uma frase que é verdadeira só por não ter havido aprovação com a régua. Correção: "…depois de recusar outro mais barato e de prioridade igual ou maior"; contar aprovações e recusas só nas reuniões com a régua (`!h.sr`).

6. **[POLIMENTO] Limitação 3, defesa (linha 778) · pendente da rodada 3.** A divisão em dois parágrafos ficou melhor. Restam: "Um artigo de autores favoráveis à medida" rotula os autores sem fonte ("Um artigo que examinou a objeção…" basta); e o bloco "O que responde quem defende" termina com a réplica do crítico. É honesto com o debate, e não peço que saia. Uma frase final ("O debate continua aberto") deixaria claro que nenhum dos dois textos encerra a questão.

7. **[POLIMENTO] `tests/equilibrio.js`, `MODELO.md` §5 e `JOGO.md` linha 84 · pendente da rodada 3.** Falta o teste que compara `limites` com partidas enumeradas por `cabe` e `fecharReuniao`. Os dois documentos dizem "combinações que cabem no orçamento", sem o teto por reunião e a ordem das reuniões.

8. **[POLIMENTO] `MEMORIAL.md` §7 e `#decisao` · pendentes.** No memorial: uma linha sobre −0,177 contra −0,176 (já está em `MODELO.md` §2) e, na limitação da saúde deslocada, "tratam R$ 40 mil como custo de oportunidade, também quando o limite escolhido é R$ 120 mil", para acompanhar o modelo atual. Na Parte 4, se a fonte sustentar, a frase sobre a atualização dos valores prevista no relatório de 2022.

## O QUE ESTÁ BOM (para não ser desfeito)

- **O interativo 4 obedece a um único modelo, nos quatro quadrantes e com os dois limites.** `REF = 40.000` fixo para o custo de oportunidade; `lim` só para a regra; `prioridade = ok ≠ (BLS ≥ 0)`. Selo, caixa, veredito e gráfico dizem a mesma coisa em todos os casos que refiz.
- **O texto dos dois casos de prioridade.** "Aceitar, neste caso, é uma escolha de prioridade…, não um resultado da conta" e "Recusar a troca, neste caso, é uma escolha de prioridade (proteger mais a saúde de quem tem uma doença rara ou grave, por exemplo)". É a separação entre fato, hipótese e juízo de valor que o tema pede, e poucos materiais didáticos a fazem para o limite de 3 vezes.
- **O selo em cor neutra nos casos de prioridade**, em vez de verde ou vermelho: a página não toma partido onde a regra e a hipótese discordam. O ponto do gráfico segue a regra, e a legenda diz que a área verde é "o que a regra aceita".
- **Testes que prendem o modelo, e não só exemplos:** o laço de `prioridade` nos dois limites, e o portão conferindo selo e veredito na página real.
- **`MODELO.md` §4:** fórmulas, hipótese, esperados e o vocabulário da tela ("referência" contra "limite de 3 vezes") batem com o código.
- **Limitação 8:** a segunda condição do Supremo completa, com fonte, sem cronologia não verificada, e o fecho "a lógica do direito de cada pessoa e a lógica da comparação entre todos os pedidos convivem, em tensão permanente".
- **Limitação 3:** a defesa ordenada (argumentos e dado empírico primeiro; depois o artigo de Singer e a réplica de Harris, cada um com sua referência). Nenhum lado é declarado vencedor.
- **Dominância simétrica** na Parte 4 e no glossário, igual ao que o código classifica.
- **Cartão e glossário de equidade:** "olhar quem ganha e quem perde", com "para muita gente, quer dizer dar mais atenção a quem tem menos" marcado como posição, e o custo dos pesos de equidade dito no cartão ("alguém precisa escolher quais grupos pesam mais e quanto, e essa escolha é política").
- **Bônus de coerência** com a regra escrita, em vez do elogio genérico "foi coerente".
- **Tudo o que elogiei antes continua de pé:** definições de utilidade, TTO, aposta padrão, tarifa, RCEI, limiar e desconto; a cadeia questionário → valoração → tarifa → paciente; os valores da Conitec com os qualificadores das quatro situações; ultrarraras e terapias gênicas fora da regra; R$ 35 mil por ano de vida ganho; 5% para custos e saúde; "sugere" para o cenário sem desconto; a ressalva em cada vantagem; a nota "dividido por R$ 40 mil, sempre"; a seção de aplicabilidade e a de limitações do memorial; o README com os passos para replicar.
