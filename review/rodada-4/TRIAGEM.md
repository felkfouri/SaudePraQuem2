# Triagem da rodada 4

Vereditos: **A APROVA** · **B REPROVA** (1 importante) · **C APROVA** · **D REPROVA** (1 importante, o mesmo de B). Nenhum bloqueante. Compreensão da Juíza A: 5 de 5, mais a pergunta de controle. O site ficou congelado durante a leitura; as correções abaixo aparecem em `review/rodada-5/`.

## O item importante (B e D, de forma independente)

No interativo "Quanto custa um QALY?", com o limite de R$ 120 mil, o texto e o selo ainda chamavam o limite de "referência":

- selo verde "abaixo da referência" para R$ 80 mil por QALY, ao lado de um parágrafo que dizia "acima da referência de R$ 40 mil" (D, e polimento de A);
- no caso "mais barato e pior", poupar R$ 80 mil por QALY perdido era descrito como "menos que o valor de referência", com a conclusão "a economia não compensa", contra os números da própria tela (B).

**Aceito.** Conferido nos dois casos. O que foi feito:

- `avaliar` marca a escolha de prioridade nos dois sentidos: `prioridade = (ok ≠ (BLS ≥ 0))`;
- "referência" é sempre R$ 40 mil; R$ 120 mil é "limite de 3 vezes", no selo, no veredito e na legenda do gráfico;
- selo neutro "acima da referência, dentro do limite de 3 vezes" (e o equivalente na economia);
- texto próprio para a economia entre 40 mil e 120 mil: recusar é escolha de prioridade;
- empate exato: "exatamente no valor de referência… rende a mesma saúde";
- testes: seis casos novos em `calc.js` (166 verificações) e três no portão (selo, nome do limite, economia com prioridade); `MODELO.md` §4 atualizado.

## Polimentos

| Juiz | Item | Decisão |
|---|---|---|
| B, C, D | Condição do Supremo resumida demais na limitação 8 | Aceito. Conferido na página da Conitec: "é ilegal, que não houve pedido de inclusão ou houve demora excessiva na sua análise". Texto e F123 corrigidos. |
| C | "a lógica da conta para todos" dá o "para todos" a um lado | Aceito: "a lógica da comparação entre todos os pedidos". |
| A, B, C | Limitação 3: parágrafo denso; "para ela"; o levantamento parecia resposta a Harris | Aceito: bloco em dois parágrafos, o levantamento antes de Singer, "A réplica… sustenta". |
| C | Cartão de equidade sem "em troca"; glossário com uma só concepção | Aceito. |
| C, D | "(doença rara, grave, de crianças)" cita três das quatro situações | Aceito: "por exemplo, por ser uma doença rara ou grave". |
| B, C | Frase do bônus de coerência vaga | Aceito: frase completa, "nas reuniões com a régua". `JOGO.md` registra a exclusão do tutorial. |
| A | Aviso "O orçamento acabou" com R$ 50 milhões no painel | Aceito: "O que resta do orçamento não paga nenhum pedido desta reunião." |
| B | "Dominado" sem definição simétrica; legenda do plano; "a tecnologia nova" | Aceitos. |
| D | Literais novos sem teste; linha "DOIs não testados" em `FONTES.md` | Aceitos. |
| A | Última reunião travada para quem aprova tudo; Praça desconta na recusa forçada | Rejeitado: é a consequência da escolha do jogador, o desconto já é metade, e mudar o orçamento desequilibra os jurados. |
| A | "26,000" vira 26 reais; jargões leves; botões | Rejeitados (ver rodada 3). |
| C | Vantagens 1 e 3, caixa do limiar, linguagem de dois depoimentos | Rejeitados (ver rodadas 2 e 3). |
| D | Teste da folha de fontes pendurada; `ok(true)` | Rejeitados; em `IDEIAS.md`. |

## Conflitos entre juízes

Nenhum.

## Em aberto

- Autoria completa, versão e data de acesso na citação (pendência do autor).
