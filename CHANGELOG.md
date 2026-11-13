# Registro de mudanças

## Rodada 3 (13 nov. 2026)

Vereditos: C e D aprovaram; A e B reprovaram por um item importante cada. Triagem em `review/rodada-3/TRIAGEM.md`.

- **Custo por QALY:** a saúde deslocada usa sempre a referência de R$ 40 mil, também com o limiar de R$ 120 mil; entre os dois valores, a tela diz que aceitar é escolha de prioridade. Testes novos (149 verificações).
- "Equidade" explicada no cartão e no glossário; aviso quando nenhum pedido da reunião cabe no orçamento.
- Limitação 3: argumento de imparcialidade descrito e réplica de Harris (1995) citada. Limitação 8: frase sobre o Supremo colada à página da Conitec, com referência.
- "Dominante" definido de forma completa; fala do Contador com "hipótese do jogo"; `MODELO.md` §4 reescrito; fatos F122 a F124.

## Rodada 2 (13 nov. 2026)

Vereditos: B e D aprovaram; A e C reprovaram por um item importante cada. Triagem em `review/rodada-2/TRIAGEM.md`.

- Defesa da limitação 3 sem argumento de autoridade; "consulta pública" e "deslocar" explicados; glossário ampliado.
- Jogo: a reunião sem a régua não conta para a regra de coerência; limites das notas calculados reunião a reunião; rótulos e textos da ata corrigidos.
- Interativos: veredito "dominante" correto quando a saúde é igual; campo de QALYs lê o ponto como decimal; exemplos escritos à brasileira; margem do gráfico no celular.
- Documentação: aplicabilidade no memorial; fontes de F116, F119 e F121 corrigidas; teste que confere os orçamentos do jogo contra `JOGO.md`.

## Rodada 1, correções após a bancada (13 nov. 2026)

Vereditos da rodada 1: A, B, C e D reprovaram (1 bloqueante, 28 importantes no total). Triagem em `review/rodada-1/TRIAGEM.md`.

- **Jogo:** partida padrão de 3 reuniões (cerca de 10 minutos; o portão conta as palavras); teto de gasto por reunião; pedido que não cabe aparece marcado; painel final coerente com o jornal; termos explicados; "hipótese do jogo" no texto visível; penalidade da fila retirada da Praça; depoimentos reescritos para dar argumento aos dois lados.
- **Cálculo:** mesma saúde e mais barato é dominante; com desconto, os anos vividos não são mais descontados na frase; vacina do jogo com 1.620 QALYs.
- **Guia:** ressalva em cada vantagem; limitações 2, 3, 6 e 8 reescritas com a crítica na versão forte; fecho e perguntas finais neutros; orçamento como decisão política; qualificadores das situações do limiar de 3 vezes; perspectiva do SUS, incerteza e impacto orçamentário; termos explicados; "sugere" em vez de "pede".
- **Celular:** gráficos com letra legível; instrução junto do gráfico; campos que aceitam "26.000".
- **Fontes e testes:** fatos F115 a F121; referências de Raymakers (2025) e Frijters (2020); os números escritos no texto são conferidos contra o código; capturas conferem a posição da seção; fontes externas não bloqueiam a página.
- **Em aberto:** autoria completa (depende do autor).

## Rodada 1 (13 nov. 2026)

Construção do site conforme `docs/PLANO.md`.

- `index.html`: guia em onze seções, quatro interativos (Desenhe uma vida, Um estado de saúde um número, Qual é o seu peso?, Quanto custa um QALY?) e o jogo Plenário (10 pautas, 21 casos, três jurados, jornal).
- Reaproveitado do site original: estilo, rotas, barra de navegação, gerador com semente, jornal, rostos dos jurados, tutorial.
- `docs/FONTES.md`: 114 fatos e 119 referências com status de verificação; `docs/pesquisa/`: notas brutas.
- `docs/MODELO.md`, `docs/JOGO.md`.
- Testes: `tests/calc.js` (98 verificações), `tests/dados.js`, `tests/equilibrio.js` (21.600 partidas), `tests/pagina.js` (portão na página real, com axe-core e capturas).
- Desvio do plano: a Ouvidora conta pedidos atendidos, não QALYs ponderados (DECISOES D14).
