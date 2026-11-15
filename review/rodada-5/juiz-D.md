# Parecer do Juiz D — Checador de fatos e técnico · Rodada 5

```
VEREDITO: APROVA
```

Motivo em uma frase: o item importante da rodada 4 (selo "abaixo da referência" para R$ 80.000 com o limite de R$ 120 mil) foi corrigido na tela e ganhou teste que pega a regressão; as fontes do que mudou conferem com o original aberto hoje; o portão está verde e reproduzível; sobraram só polimentos, a maioria no catálogo `docs/FONTES.md`, que não foi arrumado.

Versão julgada: `index.html` com md5 `a01a2767f29f8b561c16a59d4ee3500f`, 189.955 bytes (commit `48c056b`). Não editei nada além deste parecer; o md5 do `index.html` era o mesmo antes e depois, e `git status` estava limpo antes de eu gravar este arquivo. Scripts e saídas ficaram em `/tmp/claude-0/-home-user-SaudePraQuem2/5d4dd7db-ca0e-5c47-9b10-f70b859cb0a6/scratchpad/juizD5/`.

## CONFERÊNCIA DA RODADA 4

| # | Pedido na rodada 4 | Situação | Evidência |
|---|---|---|---|
| I-1 | **IMPORTANTE**: `#rcSelo` dizia "abaixo da referência" para R$ 80.000 com o limite de R$ 120 mil | **RESOLVIDO** | Na página real (375 e 320 px), limite 120 mil, atual 0/0, novo 80.000/1: selo "acima da referência, dentro do limite de 3 vezes", classe `badge eq` (cinza, não o verde de "ok"). Veredito ao lado: "abaixo do limite de R$ 120 mil… mas acima da referência de R$ 40 mil". `index.html`, linha 1557. Teste novo em `tests/pagina.js`, linha 123, que derruba o portão quando troco o selo de volta (mutação 2, abaixo) |
| I-1b | Veredito dizia "abaixo do valor de referência de R$ 120 mil" (20.000/1 com limite de 120 mil) | **RESOLVIDO** | Agora: "Fica abaixo do valor de referência de R$ 40 mil"; selo "abaixo da referência e do limite". Li o código: `rmil(lim)` só aparece junto de "valor de referência" nos ramos em que `lim` é R$ 40 mil (linhas 1568 e 1570). Em nove casos testados, nenhuma saída contém "referência de R$ 120". Teste na linha 124 de `tests/pagina.js` |
| I-1c | Rótulo do seletor "Valor de referência (limiar)" com a opção de R$ 120 mil | NÃO RESOLVIDO (polimento 2) | `index.html`, linha 709, igual |
| P-1 | Parêntese "(doença rara, grave, de crianças)" parecia lista fechada | **RESOLVIDO** | "(por exemplo, por ser uma doença rara ou grave)"; no quadrante de economia, "(proteger mais a saúde de quem tem uma doença rara ou grave, por exemplo)". Lista aberta, coerente com F40 |
| P-2 | Literais novos do interativo sem teste | **EM PARTE** | `tests/calc.js` ganhou `tem('dividido por R$ 40 mil, sempre')`, `tem('quatro situações')` e a frase do Supremo. O parêntese novo não tem teste: trocar por "(por ser uma doença ultrarrara)" passa em `npm test` e em `tests/pagina.js` |
| P-3 | `#lim-8`: condição do Supremo resumida a um dos três casos | **RESOLVIDO** | "é ilegal, que não houve pedido de inclusão ou que a análise demorou demais (Conitec, Judicialização)". Confere com a página aberta hoje (tabela de fontes, linha 1). Com teste em `tests/calc.js` (mutação 4 pega) |
| P-4 | Incoerências de `docs/FONTES.md` | **EM PARTE** (só F123) | F123 agora traz a citação inteira da segunda condição. Não mudou: F84 "parcial" (linhas 81 e 310) × nota da Parte C; itens 4, 7 e 15 ainda sob "O site não deve afirmar como fato"; Mapa, linha 104, consulta pública "parcial" × F124 "verificada"; linha 408, "Os DOIs… não foram testados em doi.org". O `git diff` de `FONTES.md` desde a rodada 4 tem uma linha só (F123) |
| P-5 | Portão: folha de fontes sem teste; dois `ok(true, …)` | NÃO RESOLVIDO | `media="print"` → `"all"` passa nos dois portões; `tests/pagina.js`, linhas 108 e 168 |
| P-6 | `#lim-3`: "O artigo usa um argumento de imparcialidade" | NÃO RESOLVIDO (aceitável) | Mesma redação |
| P-7 | Veredito do caso novo muito alto no celular | NÃO RESOLVIDO | 462 px em 375 px e 516 px em 320 px; o quadrante de economia chega a 677 px em 320 px (a tela tem 640) |
| P-8 | 320 px: letra de 8,8 px no topo; tabela com rolagem interna | NÃO RESOLVIDO | 8,8 px; `.tablewrap` 262 em 244 px |

## NOTAS (0–10 por critério)

| Critério | Nota | Por quê |
|---|---|---|
| Cobertura de fontes | 9 | Tudo o que mudou tem fato e fonte aberta hoje. O catálogo continua com quatro incoerências internas que apontei em três rodadas |
| Verificação das referências (amostra reconferida) | 9,5 | Página da Conitec reaberta (HTTP 200); os 32 DOIs de `#refs` resolvem em doi.org (302 para a editora) |
| Portão automático | 9 | Verde, 59 itens, reproduzível linha a linha; as duas mutações pedidas são pegas. Ainda passam: literal do parêntese, folha de fontes, dois `ok(true)` |
| Funcionamento no celular | 9 | Sem rolagem horizontal, sem corte (o selo longo quebra em duas linhas dentro do quadro), zero erros de console, partida completa em 375 e 320 px |
| Desempenho | 9,5 | Carga em 356 ms (375) e 187 ms (320) na minha máquina; 60.230 bytes com gzip |

## PROBLEMAS

Nenhum BLOQUEANTE. Nenhum IMPORTANTE.

### POLIMENTO

1. **[POLIMENTO] `docs/FONTES.md` · incoerências antigas, sem mudança desde a rodada 3.** (a) Linha 408: "Os DOIs vêm do PubMed e não foram testados em doi.org". Testei hoje os 32 DOIs de `#refs`: todos respondem 302 em doi.org para a editora. Correção: "Os 32 DOIs da lista do site resolvem em doi.org (302 para a editora; conferido pelo Juiz D na rodada 5); a página da editora nem sempre abre daqui". (b) F84 e linha 81 do Mapa: "parcial" × nota da Parte C que diz que o item 15 foi superado por F84; dizer em F84 "verificada quanto ao desenvolvimento dos itens extras; conclusões por condição não lidas". (c) Mapa, linha 104: trocar F104 "parcial" por F118 e F124 "verificada". (d) Parte C: tirar os itens 4, 7 e 15 de baixo de "O site não deve afirmar como fato" ou riscá-los. (e) F123: "conferida pelo Juiz D nas rodadas 2 e 3" → "2 a 5". Nada disso sustenta número errado no site; é o catálogo que se contradiz.
2. **[POLIMENTO] `#rcei`, rótulo do seletor (`label[for="rcLim"]`, linha 709) · "Valor de referência (limiar)" com a opção "R$ 120 mil por QALY (3 vezes)".** É o único lugar da tela em que "referência" ainda cobre os R$ 120 mil; a dica logo abaixo e o comentário do código dizem que a Conitec só chama de referência os R$ 40 mil. Correção: "Limite para comparar" ou "Régua usada (limiar)".
3. **[POLIMENTO] `#rcVerd` · exatamente no limite, o texto diz "abaixo".** Limite 120 mil, 0/0 e 120.000/1: "Cada QALY a mais custa R$ 120.000. Fica **abaixo** do limite de R$ 120 mil". O selo ("dentro do limite de 3 vezes") está certo. O ramo da referência já trata o empate ("exatamente no"); falta o mesmo aqui. Correção: `Math.abs(o.rcei-lim)<1e-9?'exatamente no':'abaixo do'`.
4. **[POLIMENTO] `#rcPlane` · cor do ponto no caso de prioridade.** Com 80.000/1 e limite de 120 mil, o selo é cinza e o texto diz que a conta não decide, mas o ponto do gráfico é verde (`var(--good)`); no quadrante de economia (100.000/3 → 20.000/2) o selo é cinza e o ponto é vermelho. Não contradiz a regra (o ponto está do lado que a regra aceita ou recusa, e a legenda diz "a área verde é o que a regra aceita"), mas a cor neutra do selo não chega ao gráfico. Correção: `o.prioridade?'var(--muted)':…`.
5. **[POLIMENTO] Portão · dentes que faltam.** (a) Parêntese "(por exemplo, por ser uma doença rara ou grave)" → "ultrarrara" passa (um `tem(…)` em `tests/calc.js` resolve). (b) `media="print"` → `"all"` passa. (c) `ok(true, …)` nas linhas 108 e 168 de `tests/pagina.js`. (d) O teste "o texto nunca chama os R$ 120 mil de valor de referência" olha um caso só (20.000/1); vale repetir em 130.000/1 e no quadrante de economia. (e) Trocar `nome` para sempre "referência" (selo "economia acima da referência" com o limite de 120 mil) passa.
6. **[POLIMENTO] `#rcSelo`, economia abaixo dos dois valores · selo e texto usam réguas diferentes.** Limite 120 mil, 100.000/3 → 80.000/2 (R$ 20.000 por QALY perdido): selo "economia abaixo do limite de 3 vezes"; texto "menos que o valor de referência de R$ 40 mil". Os dois são verdadeiros e apontam para o mesmo lado. Para falar a mesma língua: "economia abaixo da referência e do limite", como já se faz no outro quadrante.
7. **[POLIMENTO] `#rcei` no celular · altura do veredito.** 677 px em 320 px no quadrante de economia com prioridade (mais que uma tela de 640). Cabe, sem corte nem rolagem lateral. Se quiser encurtar: tirar "que a Conitec admite em situações específicas" (está na dica do seletor).
8. **[POLIMENTO] Restos antigos:** 320 px com letra de 8,8 px na ilustração do topo e tabela de `#peso` com rolagem interna (262 em 244 px); `#lim-3` "O artigo usa um argumento de imparcialidade" (a fonte é o resumo da réplica; F122 declara); `portao.md` diz "arquivo de 186 kB, sem imagens nem bibliotecas".

## TAREFA 1 — O INTERATIVO NA PÁGINA REAL (Playwright, `isMobile`, 375 × 740; mesmos textos em 320 × 640)

| Caso (limite R$ 120 mil) | Custo por QALY | Selo (`#rcSelo`) | Veredito (`#rcVerd`), trecho | Caixa de saúde deslocada | Compatíveis? |
|---|---|---|---|---|---|
| atual 0/0, novo 80.000/1 | R$ 80.000 por QALY ganho | "acima da referência, dentro do limite de 3 vezes" (cinza) | "abaixo do limite de R$ 120 mil que a Conitec admite em situações específicas, mas acima da referência de R$ 40 mil… renderia mais saúde em outro lugar (2,00 QALYs) do que rende aqui (1,00). Aceitar, neste caso, é uma escolha de prioridade (por exemplo, por ser uma doença rara ou grave)" | "Saúde que sai de outro lugar · 2,00 · (hipótese)" | Sim |
| novo 20.000/1 | R$ 20.000 | "abaixo da referência e do limite" (verde) | "abaixo do valor de referência de R$ 40 mil: pela regra, o gasto rende mais saúde (1,00 QALYs) do que o mesmo dinheiro renderia em outro lugar (0,50)" | 0,50 | Sim |
| novo 130.000/1 | R$ 130.000 | "acima do limite de 3 vezes" (vermelho) | "acima até do limite de R$ 120 mil admitido em situações específicas… (3,25 QALYs) do que rende aqui (1,00)" | 3,25 | Sim |
| atual 100.000/3, novo 20.000/2 | R$ 80.000 economizados por QALY perdido | "economia acima da referência, abaixo do limite de 3 vezes" (cinza) | "mais que a referência de R$ 40 mil e menos que o limite de R$ 120 mil… o dinheiro poupado renderia mais saúde em outro lugar (2,00 QALYs) do que a perdida aqui (1,00). Recusar a troca, neste caso, é uma escolha de prioridade" | "Saúde que o dinheiro poupado pode render · 2,00" | Sim |

Casos extras que rodei: 80.000/1 com limite de 40 mil ("acima do valor de referência"; "acima do valor de referência de R$ 40 mil"); economia de R$ 200.000 ("economia acima do limite de 3 vezes"; "mais que o limite de R$ 120 mil"); 40.000/1 com limite de 120 mil ("exatamente no valor de referência de R$ 40 mil"); 120.000/1 (polimento 3); economia de R$ 20.000 (polimento 6).

"Referência" só para R$ 40 mil? Nas saídas (selo, veredito, caixas, nota do gráfico): sim, em todos os nove casos; os R$ 120 mil são sempre "limite". No texto fixo da página não há "referência de R$ 120". Exceção: o rótulo do seletor (polimento 2).

## TAREFA 2 — COBERTURA DE FONTES DO QUE MUDOU

| # | Texto do site | Onde conferi hoje | Bateu? |
|---|---|---|---|
| 1 | `#lim-8`: "O Supremo Tribunal Federal fixou condições para o fornecimento de medicamentos que não estão nas listas do SUS; uma delas é mostrar que a decisão da Conitec de não incluir o medicamento é ilegal, que não houve pedido de inclusão ou que a análise demorou demais" | `https://www.gov.br/conitec/pt-br/judicializacao` (`curl -L -A 'Mozilla/5.0'`, HTTP 200; "Publicado em 03/02/2025 14:23", "Modificado em 17/03/2026 11:22"): "De acordo com o Supremo Tribunal Federal (STF), a Justiça pode determinar o fornecimento de medicamentos que não estão na lista do SUS, desde que se comprove: … 2. que a decisão da Conitec de não incluir o medicamento nas listas do SUS é ilegal, que não houve pedido de inclusão ou houve demora excessiva na sua análise" | Sim, os três casos, na mesma ordem. Sem data nem número no site |
| 2 | `#rcei`: "escolha de prioridade (por exemplo, por ser uma doença rara ou grave)" e, na economia, "(proteger mais a saúde de quem tem uma doença rara ou grave, por exemplo)" | F40 (Quadro do relatório da Conitec, quatro alíneas: rara; de crianças; grave; endêmica em populações de baixa renda), que conferi no original na rodada 1; `#decisao` lista as quatro | Sim: dois exemplos de quatro, com "por exemplo". Afirmação qualitativa, sem número |
| 3 | F123 em `FONTES.md` | Mesma página: são seis condições numeradas; a segunda é a citada, palavra por palavra | Sim. Falta só atualizar "rodadas 2 e 3" (polimento 1e) |
| 4 | Nota sobre DOIs (`FONTES.md`, linha 408): "não foram testados em doi.org" | Os 32 endereços `https://doi.org/…` de `#refs` (os mesmos de `review/rodada-5/links-externos.txt`): 32 respostas 302, cada uma para a editora (BMJ, SAGE, Elsevier, NIHR etc.) | A nota não foi atualizada; os DOIs resolvem (polimento 1a). A página final da editora eu não abri (o proxy do ambiente recusa parte dos domínios) |

Pelo critério da rodada: nenhum número, data, citação entre aspas ou resultado de estudo novo ficou sem fonte verificada.

## TAREFA 3 — PORTÃO E MUTAÇÕES

- `npm test`: código 0. calc.js 166 verificações (eram 149); dados.js 10 pautas e 21 casos; equilibrio.js 32.400 partidas, sem falhas.
- `node tests/pagina.js <scratchpad>/juizD5/saida`: código 0, 59 itens, nenhuma FALHA. Tirando os tempos, as 59 linhas são idênticas às de `review/rodada-5/portao.md` (`diff` vazio).
- Capturas: abri `review/rodada-5/375-rcei.png` (seção certa, sem corte).

Mutações numa cópia no scratchpad (arquivos reais intactos):

| Mutação | `npm test` | `tests/pagina.js` |
|---|---|---|
| `o.prioridade=o.ok!==(o.bls>=-1e-12)` → `o.prioridade=false` (pedida) | **pegou** (calc.js) | **pegou** (3 falhas) |
| selo "acima da referência, dentro do limite de 3 vezes" → "abaixo da referência" (pedida) | passou (é texto de tela) | **pegou** (1 falha: 'o selo não diz "abaixo da referência"…') |
| frase do Supremo em `#lim-8` encurtada | **pegou** | passou |
| parêntese → "(por ser uma doença ultrarrara)" | sobreviveu | sobreviveu |
| `nome` sempre "referência" | sobreviveu | sobreviveu |
| `media="print"` → `"all"` | sobreviveu | sobreviveu |

O portão completo (`npm run portao`) pega as duas mutações pedidas.

## TAREFA 4 — CELULAR

| Verificação | 375 × 740 | 320 × 640 |
|---|---|---|
| `scrollWidth` do guia (todos os `<details>` abertos) | 375 | 320 |
| Elementos vazando para fora da página | nenhum | nenhum |
| Texto cortado por `overflow` ou `<text>` fora do SVG | nenhum (os achados do script eram títulos e legendas só de leitor de tela) | nenhum |
| Selo novo, o mais longo ("economia acima da referência, abaixo do limite de 3 vezes") | quebra em 2 linhas, 55 a 320 px, dentro do quadro (38 a 337) | 2 linhas, 55 a 265 px, dentro do quadro (38 a 282) |
| Rolagem interna | menu de seções (de propósito) | menu de seções; tabela de `#peso` (262 em 244 px) |
| Menor letra em gráfico | 10,5 px | 8,8 px (ilustração do topo) |
| Jogo, código 1234, partida padrão completa (início, 3 reuniões, 3 atas, jornal) | sem rolagem, sem corte, sem "undefined" ou "NaN" | idem |
| Erros de console | 0 | 0 |
| Carga | 356 ms | 187 ms |

Peso: 189.955 bytes; 60.230 com gzip.

## O QUE ESTÁ BOM (para não ser desfeito)

- O selo do caso intermediário: texto próprio e cor neutra, nos dois quadrantes. Selo, veredito e caixa de saúde deslocada contam a mesma história nos quatro casos pedidos.
- A distinção de vocabulário nas saídas: "referência" = R$ 40 mil; "limite" = R$ 120 mil. Está comentada no código (linha 1554) e presa por dois testes.
- A saúde deslocada continua sempre pela referência de R$ 40 mil, com o aviso "hipótese didática".
- `#lim-8` com a condição do Supremo inteira, colada à página da Conitec, sem data nem cronologia, com referência em `#refs` e teste do literal.
- "por exemplo" nos parênteses de prioridade: não fecha a lista das quatro situações.
- O quadrante de economia com prioridade ("Recusar a troca… é uma escolha de prioridade") é coerente com o outro e tem teste em `calc.js` e em `pagina.js`.
- Portão reproduzível linha a linha; 166 verificações de cálculo; as duas mutações pedidas são pegas.
- Zero erros de console, nenhuma rolagem horizontal, partida completa em 375 e 320 px; página de 60 kB com gzip.
- Nenhuma referência inventada e nenhum número sem fonte; os 32 DOIs resolvem.
