# Registro de mudanças

## Rodada 1 (13 nov. 2026)

Construção do site conforme `docs/PLANO.md`.

- `index.html`: guia em onze seções, quatro interativos (Desenhe uma vida, Um estado de saúde um número, Qual é o seu peso?, Quanto custa um QALY?) e o jogo Plenário (10 pautas, 21 casos, três jurados, jornal).
- Reaproveitado do site original: estilo, rotas, barra de navegação, gerador com semente, jornal, rostos dos jurados, tutorial.
- `docs/FONTES.md`: 114 fatos e 119 referências com status de verificação; `docs/pesquisa/`: notas brutas.
- `docs/MODELO.md`, `docs/JOGO.md`.
- Testes: `tests/calc.js` (98 verificações), `tests/dados.js`, `tests/equilibrio.js` (21.600 partidas), `tests/pagina.js` (portão na página real, com axe-core e capturas).
- Desvio do plano: a Ouvidora conta pedidos atendidos, não QALYs ponderados (DECISOES D14).
