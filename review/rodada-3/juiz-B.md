# Parecer do Juiz B — Banca da disciplina (rodada 3)

```
VEREDITO: REPROVA
```

Há um item IMPORTANTE, e só um: no interativo "Quanto custa um QALY?", quando o leitor escolhe o limiar de R$ 120 mil, a "saúde que sai de outro lugar" passa a ser calculada com R$ 120 mil por QALY, o que contradiz a hipótese escrita na própria tela (R$ 40 mil = 1 QALY) e inverte a conclusão do veredito. O defeito existe desde a rodada 1 e eu não o vi nas duas rodadas anteriores; o erro de revisão é meu, mas o defeito é do produto e está ao alcance do construtor (correção de poucas linhas). Todo o resto é polimento. Os polimentos da rodada 2 foram, na maioria, resolvidos, e as correções recentes (Singer, STF, consulta pública, regra de coerência, exemplos à brasileira) não criaram erro.

## NOTAS (0–10 por critério)

| Critério | Rodada 1 | Rodada 2 | Rodada 3 |
|---|---:|---:|---:|
| Precisão conceitual | 8,5 | 9,0 | 9,0 |
| Coerência com MS/Conitec | 7,5 | 9,0 | 9,0 |
| Correção dos cálculos | 7,5 | 8,5 | 8,0 |
| Separação entre fato, valor e ilustração | 7,0 | 8,5 | 8,0 |
| Qualidade como produto técnico | 7,0 | 7,5 | 8,0 |

As notas de cálculo e de separação fato/valor caem meio ponto pelo item IMPORTANTE (que já existia; a nota anterior estava alta demais). A de produto técnico sobe pela seção de aplicabilidade no memorial; continua limitada pela autoria incompleta e pela falta de teste com leitores reais, ambas declaradas.

## O que foi conferido

- `npm test`: `calc.js` 119 verificações, `dados.js` 10 pautas e 21 casos, `equilibrio.js` 32.400 partidas, tudo verde. `review/rodada-3/portao.md` lido (verde, 13 nov. 2026, 22:18 UTC).
- Lido por inteiro: texto do guia (linhas 460-977), bloco `CALC` (1068-1359), código dos interativos e das telas do jogo (1360-1782), `MODELO.md`, `JOGO.md`, `MEMORIAL.md`, `README.md`, `CHANGELOG.md`; em `FONTES.md`, os fatos F74, F104, F118, F120 e F121.
- Capturas vistas: `1280-rcei.png`, `1280-jogo-2b-ata-sem-regua.png`, `375-jogo-3-jornal.png`.
- Refeito por script próprio (fora do repositório):
  - **`limites` contra o jogo jogado de verdade:** 1.080 partidas (60 códigos × 3 durações × 3 dificuldades × com/sem tutorial), enumerando todas as combinações e passando cada uma por `cabe` e `fecharReuniao`. Zero diferenças em `minC`, `maxC` e `maxO`.
  - `avaliar(80000, 1, 120000)` → `deslocada` 0,667, `ok true`; `avaliar(2400000, 8, 120000).deslocada` = 20, contra 60 com 40 mil (ver IMPORTANTE 1).
  - Saúde plena, 4 contra 8 anos, 5%: ganho de 3,06 QALYs e 4 anos (ver POLIMENTO 2).
  - 7.000 ÷ 1,05³⁰ = 1.619,6; 70 milhões ÷ 1.620 = R$ 43,2 mil. Custos por QALY de `t1` a `t3`, `p3a/b`, `p6a`, `p7a` conferem com os textos ("cinco", "dez" e "seis vezes a referência"; R$ 30 mil por ano de vida).
  - Regra de coerência: com a recusa de `t1` e `t2` e a aprovação de `t3` no tutorial, nenhuma penalidade na reunião 1 e nenhuma recusa do tutorial usada como comparação depois.
  - Leitura de números: "6.000", "2.600.000", "26.000,50" no custo; "1.050" → 1,05 e "1,05" → 1,05 no campo de QALYs.
- Não reabri as fontes primárias nesta rodada (o relatório da Conitec foi lido na rodada 2; a diretriz de 2026 continua conferida só pelas transcrições de `FONTES.md`). A resposta de Singer e colaboradores foi conferida contra F74 e contra o que conheço do resumo do artigo.

## CONFERÊNCIA DA RODADA 2

| # | Item da rodada 2 | Situação | Evidência |
|---|---|---|---|
| 1 | Veredito "dominante" com ΔE = 0 | **RESOLVIDO** (resíduo) | Linha 1549: três frases conforme o caso ("Mais saúde por menos dinheiro" / "Mais saúde pelo mesmo dinheiro" / "A mesma saúde por menos dinheiro") e "não perde em nada e ganha em pelo menos uma coisa". O dominado (1550) ganhou o simétrico. A Parte 4 (653) e o glossário (884) continuam só "melhor e mais barato": POLIMENTO 5. |
| 2 | `limites` reunião a reunião | **RESOLVIDO** | Linhas 1325-1326: o gasto é acumulado na ordem das pautas, com `min(resta, teto)`. Minha enumeração independente bate em 1.080 partidas. Falta o teste no repositório: POLIMENTO 8. |
| 3 | "Três detalhes" com cinco itens | **RESOLVIDO** | Linha 666: "Alguns detalhes que costumam se perder:". |
| 4 | "Desenhe uma vida": "porque não é de saúde plena" quando o motivo é o desconto | **NÃO RESOLVIDO** | Linha 1415: a escolha da frase continua usando `g` com desconto. POLIMENTO 2. |
| 5 | "1.050" no campo de QALYs | **RESOLVIDO** | Linha 1520: `num(t, dec)`; nos campos de QALYs o ponto é sempre decimal. A mensagem de erro dá exemplos dos dois campos. |
| 6 | `MODELO.md` §4 | **EM PARTE** | Entrou o parágrafo certo ("calculado a partir de um estudo de custo de oportunidade… perto de 1 PIB per capita; outra estimativa… é mais baixa"). O parágrafo antigo ficou logo abaixo ("O valor da Conitec é uma referência de política; estimativas pelo lado da oferta para o Brasil são mais baixas"). Os dois se contradizem. POLIMENTO 7. |
| 7 | `JOGO.md`: "44 mil", "no máximo dois", "aos 45" | **RESOLVIDO** | "43 mil com desconto; 10 mil sem"; "na maioria das configurações"; caso `p9a`: "um câncer que viria depois dos 40". |
| 8 | `MEMORIAL.md` §5: contagem de fatos; `CHANGELOG` | **RESOLVIDO** | "121 fatos e 119 referências"; o `CHANGELOG` tem a rodada 2. |
| 9 | Fala do Contador na ata sem a ressalva | **NÃO RESOLVIDO** | Linha 1708 e captura `1280-jogo-2b`: "+2.750 QALYs em relação a deixar o dinheiro na rede de saúde." O painel ao lado tem "pela hipótese do jogo". POLIMENTO 4. |
| 10 | "É a objeção mais antiga" | **RESOLVIDO** | Linha 816: "É uma objeção antiga…". |
| 11 | "quase duas vezes pior"; "meio-termo entre os dois anteriores" | **EM PARTE** | Limitação 3 (777): "rende bem menos na conta do segundo grupo". Na Parte 7 (836) continua "os dois anteriores" com um item só antes. POLIMENTO 6. |
| 12 | Aplicabilidade e impacto no memorial | **RESOLVIDO** | Seção 4a: onde usar, o que se espera, como medir (com a ressalva de que não foi medido) e manutenção. |
| 13 | Citação: versão e "Acesso em" | **NÃO RESOLVIDO** | Linha 971 e README, sem mudança. POLIMENTO 9. |
| 14 | Glossário: "Ano de vida ganho" e "Perspectiva" | **EM PARTE** | Entraram "Ano de vida ganho" e "Consulta pública". "Perspectiva" não entrou (a explicação está na linha 671; aceitável). |
| 15 | −0,177 contra −0,176 no memorial §7 | **NÃO RESOLVIDO** | Está em `MODELO.md` §2 e em `DECISOES` D17; o memorial não menciona. Menor. |
| 16 | Atualização anual pelo PIB per capita | **NÃO RESOLVIDO** | Linha 670 igual. Era sugestão; continua valendo. |

Resumo: 8 resolvidos, 3 em parte, 5 não resolvidos; nenhum dos pendentes passa de polimento.

## PENDÊNCIA DO AUTOR

Sem mudança desde a rodada 2, e fora do veredito. O site (`#sobre`, linhas 961 e 971), o `README.md` e o cabeçalho do `MEMORIAL.md` trazem apenas "Felipe, cirurgião e doutorando na FMUSP". Só o autor pode fornecer:

1. **Nome completo**, na forma de citação (SOBRENOME, Nome).
2. **Programa de pós-graduação** (hoje: "programa de pós-graduação da Faculdade de Medicina da USP").
3. **Docente responsável pela disciplina e/ou orientador.**
4. **Contato:** e-mail institucional ou ORCID.
5. **Endereço público definitivo:** o memorial dá o GitHub Pages como "endereço previsto"; publicar, confirmar e, se possível, depositar uma versão com DOI (Zenodo).
6. Com isso, a citação: "SOBRENOME, Nome. *A régua da saúde: o que é o QALY, suas vantagens e limitações* [recurso eletrônico]. Versão 1.0. São Paulo: Faculdade de Medicina da USP, 2026. Disponível em: <endereço>. Acesso em: <data>."

Sem esses dados, a banca real não tem como registrar o produto.

## PROBLEMAS

Nenhum BLOQUEANTE. Um IMPORTANTE.

### IMPORTANTE

1. **[IMPORTANTE] Interativo 4, `#rcei` · `avaliar` (linha 1112: `deslocada: dC/lim`), bloco "Saúde que sai de outro lugar" (1546-1547), veredito (1552-1553), nota (730) e `MODELO.md` §4 · com o limiar de R$ 120 mil, o custo de oportunidade é dividido por 120 mil, e a conclusão sai invertida.**

   *Evidência.* A nota fixa sob o resultado diz: "É uma hipótese didática: supõe que cada **R$ 40 mil** gastos aqui deixam de produzir 1 QALY em outro lugar do sistema." Mas o número é `ΔC ÷ limiar escolhido`. Dois casos:
   - "Doença rara" com "R$ 120 mil (3 vezes)": o bloco mostra **20,00** "QALYs que o mesmo dinheiro renderia em outro lugar (hipótese)". Pela hipótese escrita logo abaixo, são 2.400.000 ÷ 40.000 = **60**. Trocar o limiar no seletor faz a rede "render" três vezes menos.
   - Custo a mais de R$ 80 mil, 1 QALY a mais, limiar de R$ 120 mil: "Fica **abaixo** do valor de referência de R$ 120 mil: pela regra, **o gasto rende mais saúde (1,00 QALYs) do que o mesmo dinheiro renderia em outro lugar (0,67)**." Pela hipótese da própria tela, o mesmo dinheiro renderia 2,00 QALYs em outro lugar: o gasto rende *menos* saúde, e a regra o admite assim mesmo.

   *Por que é importante.* (a) É um número na tela que contradiz a hipótese declarada ao lado dele: erro de cálculo em relação ao modelo que o site diz usar. (b) É erro de conceito sobre o limiar: o "até 3 vezes" da Conitec não é outra estimativa do custo de oportunidade; é uma decisão de dar prioridade a certas situações (gravidade, raridade, crianças, doença endêmica em população de baixa renda), aceitando deslocar mais saúde do que se ganha. O próprio site diz isso na limitação 6 ("ajustam a régua") e em `JOGO.md` ("a versão de jogo da ideia de modificador"). (c) Mistura valor com ilustração: um juízo de prioridade aparece como se fosse um fato sobre quanto a rede rende. É justamente a troca que as limitações 6 e 8 pedem ao leitor para enxergar, e o interativo a esconde no único cenário em que ela aparece.

   *Por que não vi antes.* O portão e `tests/calc.js` só conferem `deslocada` com 40 mil (o caso de 120 mil testa apenas `ok`), e nas rodadas 1 e 2 eu conferi o bloco só com o limiar padrão. O defeito não foi criado pelas últimas correções.

   *Correção sugerida.*
   - Em `avaliar`, separar as duas coisas: `deslocada = dC / K` com `K = 40.000` fixo (a hipótese didática), e o veredito `ok` continua comparando a RCEI com `lim`. Acrescentar o parâmetro (`avaliar(dC, dE, lim, k)`) ou usar `K_JOGO`. O `bls` deve seguir a mesma base (`dE − dC/K`) ou deixar de ser exposto com 120 mil; o teste "BLS e RCEI concordam" passa a valer só para `lim = K`.
   - No veredito, quando `lim > K` e a RCEI fica entre `K` e `lim`: "Fica **acima** da referência de R$ 40 mil e **abaixo** do limite de 3 vezes (R$ 120 mil), que a Conitec admite em algumas situações. Pela hipótese desta página, o mesmo dinheiro renderia mais saúde em outro lugar (2,00 QALYs) do que rende aqui (1,00). Aceitar, aqui, é uma escolha de prioridade para casos graves ou raros, não um resultado da conta." Acima de `lim`: "acima até do limite de 3 vezes". Vale o simétrico no quadrante "mais barato e pior".
   - Ajustar a legenda do gráfico se a área verde continuar sendo a do limiar escolhido ("o que a regra aceita com este limite").
   - `MODELO.md` §4: `D = ΔC / 40.000`, e uma linha dizendo que o limite de 3 vezes é um modificador de prioridade, não outro custo de oportunidade.
   - Testes: `avaliar(2400000, 8, 120000).deslocada === 60`; `avaliar(80000, 1, 120000)` → `ok true` e `deslocada 2`; no portão, conferir o texto do bloco com "Doença rara" e 120 mil.

### POLIMENTO

2. **[POLIMENTO] "Desenhe uma vida", frase (linha 1415) · pendente da rodada 2.** Com desconto ligado e saúde plena nos dois cenários (4 contra 8 anos, qualidade 1), a tela diz "vive 4 anos a mais, mas cada um conta menos que 1 QALY, **porque não é de saúde plena**"; o ganho é 3,06 por causa do desconto. Correção: decidir a frase com o ganho sem desconto (`compararVidas(sem, com, 0).ganhoQaly < a − 0,005`). A frase seguinte já explica o desconto.

3. **[POLIMENTO] Jogo, bônus de coerência (linha 1342) · efeito colateral da correção da rodada 2.** A reunião sem a régua deixou de contar para a regra (certo: o jogador não via o custo por QALY). Mas quem recusa a bronquiolite (R$ 20 mil por QALY) no tutorial e depois aprova o Glicemax Plus (R$ 400 mil, mesma prioridade) recebe, no fim, "+8: O comitê foi coerente: **nunca** aprovou um pedido mais caro por QALY depois de recusar um mais barato". A frase fica falsa para essa partida. Correção: "Desde que a régua apareceu, o comitê nunca aprovou…" (só nas partidas com tutorial). Registrar a exclusão em `JOGO.md`, na linha da incoerência (hoje só fala do pedido que não cabe no teto).

4. **[POLIMENTO] Jogo, fala do Contador na ata (linha 1708) · pendente da rodada 2.** "+2.750 QALYs em relação a deixar o dinheiro na rede de saúde" sem a ressalva. Sugestão: "…na rede de saúde (hipótese do jogo)". São três palavras; o limite de 1.500 do portão tem folga (1.445).

5. **[POLIMENTO] Parte 4 (linha 653) e glossário (884) · "dominante" só como "melhor e mais barato".** O interativo agora classifica "mesma saúde, mais barato" como dominante e explica bem. Alinhar o glossário: "Dominante é o tratamento melhor e mais barato que o outro (ou igual numa coisa e melhor na outra)."

6. **[POLIMENTO] Parte 7, evLY (linha 836) · "meio-termo entre os dois anteriores", com um item só antes.** Trocar por "entre o QALY e os anos de vida ganhos".

7. **[POLIMENTO] `MODELO.md` §4 · dois parágrafos que se contradizem.** Apagar a segunda frase da "Hipótese didática" ("O valor da Conitec é uma referência de política; estimativas pelo lado da oferta para o Brasil são mais baixas"); o parágrafo de cima já diz o certo. Fazer junto com a correção do item 1. Na §5 e em `JOGO.md` ("por enumeração", "máximo possível no orçamento"), dizer que a enumeração respeita o teto e a ordem das reuniões.

8. **[POLIMENTO] `tests/equilibrio.js` · falta o teste que prende a correção de `limites`.** Nenhum teste compara `limites` com partidas jogadas. Sugestão: para umas 50 partidas, enumerar as combinações por `cabe`/`fecharReuniao` e exigir os mesmos `minC`, `maxC` e `maxO` (minha versão roda em poucos segundos).

9. **[POLIMENTO] Citação (linha 971 e README) · pendente da rodada 2.** O construtor pode acrescentar "Versão 1.0, nov. 2026" e "Acesso em:" sem depender do autor.

10. **[POLIMENTO] Limitação 8, "O que se faz na prática" (linha 819) · a frase sobre o STF não tem referência no site.** "As decisões mais recentes do Supremo Tribunal Federal passaram a levar em conta a avaliação da Conitec" é fato, está redigida com prudência e tem lastro em F121 (página da Conitec sobre judicialização). Mas é a única afirmação factual da limitação sem ligação para a lista de referências, e F121 ainda aparece como "parcial" na linha 20 de `FONTES.md` e como "verificada" no corpo. Correção: incluir a página da Conitec nas referências, ligar a frase a ela e acertar o status. Se quiser precisão, "desde 2024".

11. **[POLIMENTO] Limitação 3, defesa (linha 778) · encadeamento.** A reescrita ficou fiel ao artigo de Singer e colaboradores e sem argumento de autoridade. Dois reparos de redação: (a) "Um artigo de autores favoráveis à medida" rotula os autores sem fonte; "Um artigo que examinou a objeção…" basta, já que o bloco se chama "O que responde quem defende"; (b) a frase final, "E um levantamento… encontrou poucos casos…", chega sem dizer por que importa. Sugestão: "Na prática, a situação do exemplo é rara: um levantamento de análises de remédios de câncer encontrou poucos casos…".

12. **[POLIMENTO] `#decisao`, linha 670 · pendente da rodada 2.** "O relatório previa atualização anual pelo PIB per capita; a diretriz de 2026 manteve os mesmos valores."

13. **[POLIMENTO] `MEMORIAL.md` §7 · pendente da rodada 2.** Uma linha sobre −0,177 contra −0,176 (já em `MODELO.md` §2 e D17). No §6, registrar que a rodada 3 teve um item importante da banca simulada, quando a triagem fechar.

## O QUE ESTÁ BOM (para não ser desfeito)

- **Tudo o que elogiei nas rodadas 1 e 2 continua de pé:** definições de utilidade, TTO, aposta padrão, tarifa, RCEI, dominância e desconto; a cadeia questionário → valoração → tarifa → paciente; o quadrante "mais barato e pior"; os qualificadores das quatro situações do limiar de 3 vezes; ultrarraras e terapias gênicas ou curativas fora da regra; "sugere" para o cenário sem desconto; a ressalva em cada vantagem; a estrutura fixa das limitações.
- **Veredito "dominante" em três versões**, conforme o que de fato melhora, e o dominado simétrico. É mais preciso que muito material técnico.
- **`limites` sequencial:** confere com o jogo jogado em 1.080 partidas. As notas dos jurados agora têm denominador certo em todas as configurações.
- **Campo de QALYs com ponto decimal** e exemplos preenchidos à brasileira ("6.000", "0,8"): o que aparece no campo é lido de volta com o mesmo valor, nos seis exemplos.
- **Limitação 3, defesa:** descreve o que o artigo faz (examina a objeção, reconhece o que ela tem de certo, sustenta que há resposta) e acrescenta "Os críticos não aceitam essa resposta, e o debate continua". Não decide pelo leitor.
- **Limitação 8:** "É uma objeção antiga", sem superlativo; a menção à Justiça e ao STF é sóbria ("as duas lógicas convivem, em tensão permanente") e não toma partido.
- **"Consulta pública" explicada** na primeira ocorrência (vantagem 3) e no glossário, sem afirmar o prazo, que não foi verificado.
- **Regra de coerência sem a reunião sem a régua:** não se cobra do jogador um número que ele não via. Recusa por falta de dinheiro continua fora da regra.
- **Memorial, seção 4a:** aplicabilidade, resultado esperado, forma de medir e manutenção, com a admissão de que a medição não foi feita. É o que uma banca de produto técnico procura.
- **Documentação e testes:** `MODELO.md` §1 a §3 e §5 acompanham o código; `JOGO.md` corrigido nos pontos apontados; o teste que confere os números do texto contra o código; o portão com 1.445 palavras por partida e o painel final igual ao jornal.
- **Transparência:** "hipótese do jogo" no painel e no jornal, "hipótese didática" na nota do interativo 4 e na seção "Sobre". A correção do item IMPORTANTE consiste em fazer o número obedecer a essa hipótese, que já está bem escrita.
