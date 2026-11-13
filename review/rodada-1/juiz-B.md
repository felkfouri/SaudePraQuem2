# Parecer do Juiz B — Banca da disciplina (rodada 1)

```
VEREDITO: REPROVA
```

Reprova por seis itens IMPORTANTES, todos de correção curta (uma linha de código, uma frase, um rótulo). Não há BLOQUEANTE: nenhuma definição central está errada, os valores da Conitec e da diretriz conferem com o que o próprio FONTES.md transcreve, e os exemplos numéricos fecham.

## NOTAS (0–10 por critério)

| Critério | Nota |
|---|---:|
| Precisão conceitual | 8,5 |
| Coerência com MS/Conitec | 7,5 |
| Correção dos cálculos | 7,5 |
| Separação entre fato, valor e ilustração | 7,0 |
| Qualidade como produto técnico | 7,0 |

## O que foi conferido

- `npm test` rodado: `calc.js` 98 verificações, `dados.js` 10 pautas e 21 casos, `equilibrio.js` 21.600 partidas, tudo verde. `portao.md` lido (verde).
- Refeitos à mão, todos corretos:
  - texto: 1×1; 2×0,5; 10×0,7; prótese (26.000 − 6.000) ÷ (6 − 5) = 20.000; 1/1,05^10 = 0,614; 1/1,05^30 = 0,231; lim-2 (20 anos contra 5 = 4 vezes); lim-3 (2×0,85 = 1,7; 2×0,5 = 1); lim-6 (6 ÷ 1,7 = 3,5, ainda acima de 1).
  - cenários do "Desenhe uma vida": quadril 5,5 → 8,25 (+2,75); câncer 1,5 → 2,95 (+1,45; 3 anos); só mais tempo 2 → 4 (+2; 4 anos); paliativo 0,65 → 1,10 (+0,45).
  - cenários do "Quanto custa um QALY?": 20.000; 60.000 ÷ 0,25 = 240.000; 2.400.000 ÷ 8 = 300.000; dominante; dominada; −40.000 ÷ −0,05 = 800.000 por QALY perdido.
  - tarifa: 21232 = 0,416; 22222 = 0,408; 33333 = −0,177; 243 estados; 10 negativos.
  - escada de TTO: 0,95 / 0,85 / 0,75 / 0,65 / 0,55 / 0,40 / 0,20 / ≤ 0,10.
  - custo por QALY dos 21 casos do jogo (20, 20, 200, 80, 35, 60, 35,3, 83,3, 25, 100, 40, 400, 15, 250, 100, 400, dominante, 43,75, 40 mil) e os textos "cinco vezes", "dez vezes", "seis vezes", "R$ 30 mil por ano de vida".
- Não pude conferir de forma independente o conteúdo da Diretriz de Avaliação Econômica (3ª ed., 2026) nem o relatório de 2022: a comparação foi feita contra as transcrições de `docs/FONTES.md` (F37 a F56). A reconferência na fonte cabe ao Juiz D.

## PROBLEMAS

### IMPORTANTES

- **[IMPORTANTE] `index.html:1102-1104`, função `Calc.avaliar` (interativo `#rcei`) · cálculo errado no caso "mesma saúde, mais barato".**
  Com ΔE = 0 e ΔC < 0, o código cai no ramo `else`: `rcei = dC/0 = −Infinity`, `tipo = 'economia'`, `ok = false`. Conferido: `avaliar(-1000, 0, 40000)` devolve `{rcei: -Infinity, tipo: 'economia', ok: false, bls: 0.025}`.
  Na tela, o leitor que digitar QALYs iguais e custo menor vê "− R$ ∞ economizados por QALY perdido", selo "economia abaixo da referência", ponto vermelho e a frase "a economia não compensa a saúde perdida". Nenhuma saúde foi perdida, e a opção deveria ser aceita.
  O caso contradiz `MODELO.md` §4 ("BLS ≥ 0 equivale ao veredito"): aqui BLS = +0,025 e o veredito é negativo. O teste não pega porque o laço de `tests/calc.js` não inclui ΔE = 0. Há assimetria: ΔE = 0 com ΔC > 0 já é tratado como dominada.
  Correção: trocar a linha 1102 por `else if(dE>=0&&dC<=0){o.tipo='dominante';o.ok=true;}` (o caso 0,0 já saiu antes). Ajustar o texto do veredito, que já diz "Mais saúde por menos (ou o mesmo) dinheiro", para cobrir "a mesma saúde por menos dinheiro". Acrescentar a `tests/calc.js`: `avaliar(-1000,0,40000)` → dominante, `ok true`, `rcei null`; e incluir `dE = 0` no laço BLS × RCEI. Atualizar `MODELO.md` §4 ("ΔE ≥ 0 e ΔC ≤ 0, não ambos zero").

- **[IMPORTANTE] `index.html:1381` e `1386`, interativo `#desenhe` com "Aplicar desconto de 5%" · anos descontados apresentados como tempo vivido.**
  `ganhoAnos` vem de `anosVida(vive, r)`, que desconta. Com a caixa marcada, a frase vira "A pessoa vive 3,06 anos a mais" no cenário "Só mais tempo" (Σd(5..8) = 0,8227 + 0,7835 + 0,7462 + 0,7107 = 3,06). A pessoa vive 4 anos a mais; 3,06 é o valor presente desses anos. O bloco "anos de vida ganhos: +3,06" tem o mesmo problema, sem rótulo. A nota abaixo do interativo continua dizendo "a pessoa ganha 4 anos de vida, e a conta registra 2 QALYs" enquanto a tela mostra 3,06 e 1,53.
  Correção: na frase, usar sempre os anos sem desconto (`com.vive − sem.vive`). No bloco, mostrar "anos de vida ganhos: +4" e, com desconto, acrescentar "(com desconto: 3,06)". Alternativa mais simples: `anosVida` nunca desconta na interface.

- **[IMPORTANTE] `#decisao` (linha 661), `#lim-2` (768), `#lim-6` (800), glossário (882) · situações do limiar de 3 vezes sem os qualificadores da Conitec.**
  O site diz "doenças raras, doenças de crianças, doença grave e doença endêmica…" e, em lim-2, "doenças de crianças estão entre as situações que admitem limiar maior". O Quadro 1 do relatório (transcrito em FONTES F40) diz "Doença acometendo crianças (menores de 18 anos) **e implicando redução importante de sobrevida ajustada pela qualidade**"; o mesmo qualificador acompanha as doenças raras. Sem ele, o leitor entende que qualquer doença pediátrica ou rara dá direito a R$ 120 mil por QALY. É a incoerência com a Conitec que o critério manda reprovar.
  Redação sugerida (linha 661): "…em quatro situações: doença rara ou doença de crianças e adolescentes que reduza de forma importante o tempo e a qualidade de vida; doença grave; e doença endêmica em populações de baixa renda com poucas alternativas de tratamento." Em lim-2: "doenças de crianças que reduzem muito a vida ou a sua qualidade estão entre…". Em lim-6: "doenças raras ou de crianças com grande perda de saúde, doenças graves ou endêmicas…".

- **[IMPORTANTE] `#lim-4`, linha 784 · afirmação atribuída à Conitec sem lastro.**
  Trecho: "A Conitec pede que as análises descrevam também outros resultados que os pacientes consideram importantes". O próprio `FONTES.md` (linha 81 do mapa) registra "sem fato com esse teor; o fato só diz não 'limitar suas discussões ao QALY'". É uma norma inventada, posta como fato sob "O que se faz na prática".
  Redação sugerida: "O relatório da Conitec diz que o QALY é o desfecho principal, mas que a discussão não deve se limitar a ele; e a comissão ouve relatos de pacientes e cuidadores nas reuniões."

- **[IMPORTANTE] Jogo, texto visível · a conversão "R$ 40 mil = 1 QALY na rede" aparece como fato; o aviso de hipótese fica dentro de um `<details>` fechado (linha 993).**
  Onde aparece sem ressalva:
  - `#gStart`, linha 984: "acima disso, o mesmo dinheiro renderia mais saúde na rede que já existe";
  - linha 987: "O dinheiro que sobra vai para a rede e também rende saúde";
  - linha 1035: "QALYs além do que a rede renderia com o mesmo dinheiro";
  - caso `t3`, linha 1132: "O mesmo dinheiro, na rede, renderia cinco vezes mais saúde";
  - caso `p7a`, linha 1202: "renderia seis vezes mais saúde em outro lugar";
  - dica do modo fácil (1628), `coach` (1639), fala do Contador (1673);
  - jornal (1703) e repercussão (1313): "As filas cresceram: … rendeu menos saúde do que o mesmo dinheiro renderia na rede" (visível na captura `1280-jogo-3-jornal.png`).

  O guia faz certo: no interativo 4 diz "pela regra" e "É uma hipótese didática"; na nota da linha 672 admite que o custo de oportunidade brasileiro pode ser de 20% a 63% do PIB per capita. O jogo desfaz esse cuidado justamente onde o leitor leigo vai sentir a conclusão.
  Correção mínima:
  1. Linha 984: "A referência é R$ 40 mil por QALY. **Neste jogo, por hipótese,** cada R$ 40 mil que ficam na rede rendem 1 QALY; acima desse custo, o pedido rende menos do que a rede renderia."
  2. Linha 1035: "QALYs além do que a rede renderia (pela regra do jogo)".
  3. Nos textos `viu` de `t3` e `p7a` e na dica do modo fácil: "pela referência, o mesmo dinheiro renderia…".
  4. No resultado final, depois das notas, uma linha fixa: "Tudo aqui é ilustrativo. A conta do Contador supõe que cada R$ 40 mil na rede rendem 1 QALY; ninguém sabe ao certo esse número para o SUS (ver 'O limiar brasileiro mede o custo de oportunidade?')."

- **[IMPORTANTE] Autoria e citação · `#sobre` (linhas 951 e 961), `README.md` ("Como citar", "Autoria"), `MEMORIAL.md` (cabeçalho).**
  O autor aparece só como "Felipe", e a citação sugerida é "Felipe. *A régua da saúde…*". `DECISOES.md` D20 reconhece a pendência. Um produto técnico precisa de autoria identificável e citação utilizável.
  Completar: nome completo; programa de pós-graduação; docente responsável pela disciplina e/ou orientador; contato ou ORCID; versão e data (por exemplo "v1.0, nov. 2026"); endereço público definitivo. O memorial diz que o GitHub Pages é "endereço previsto": publicar e citar esse endereço, ou depositar uma versão com DOI (Zenodo). Formato: "SOBRENOME, Nome. A régua da saúde: … [recurso eletrônico]. Versão 1.0. São Paulo: FMUSP, 2026. Disponível em: <URL>. Acesso em: …".

### POLIMENTO

- **[POLIMENTO] `#peso`, linha 556** · "O peso sai de um caminho em **três** passos", e a lista tem **quatro** itens. Trocar por "quatro passos".

- **[POLIMENTO] `#lim-7`, linha 808, contra `#decisao`, linha 677** · num lugar a diretriz "sugere mostrar também o resultado sem desconto", no outro "pede um cenário sem desconto". FONTES F54 diz "sugere" (e registra a divergência). Uniformizar em "sugere".

- **[POLIMENTO] `#lim-7`, linha 807** · "sem ele [o desconto], as contas mandariam adiar quase todo gasto". O paradoxo do adiamento (Keeler e Cretin) aparece quando o dinheiro é descontado e a saúde não, ou é descontada a taxa menor. Sem desconto nenhum, ele não aparece. Redação: "se o dinheiro fosse descontado e a saúde não, as contas mandariam adiar quase todo gasto; por isso dinheiro e saúde costumam ser tratados com a mesma lógica".

- **[POLIMENTO] `#decisao`, linha 666** · a exclusão do relatório é de "tecnologias gênicas, **curativas** e para doenças ultrarraras" (F41). Acrescentar "e as chamadas curativas", ou dizer "entre outras".

- **[POLIMENTO] `#vantagens`, item 3, linha 738** · "A conta é pública e pode ser refeita por qualquer pessoa" é factual e forte demais: os relatórios são públicos, os modelos dos demandantes em geral não. Sugestão: "A conta fica registrada em relatório público e pode ser contestada na consulta pública."

- **[POLIMENTO] `#lim-3`, linha 775** · "ao menos nas análises de remédios de câncer que já foram revistas, é raro separar os pacientes por deficiência" é empírica e não tem referência no texto. Citar a fonte ou cortar.

- **[POLIMENTO] Lacunas que uma banca esperaria, cada uma com uma frase:**
  1. **Perspectiva.** A diretriz manda usar a do SUS como pagador (F55). O site nunca diz de quem são os custos contados. Cabe na Parte 4 ("contam-se os custos para o SUS; o que a família gasta ou deixa de ganhar fica de fora") e melhora lim-4, onde hoje se misturam o custo do cuidador (questão de perspectiva) e a qualidade de vida do cuidador.
  2. **Incerteza.** Não há menção a análise de sensibilidade. O jogo tem "força da evidência", mas o guia não diz que a RCEI é uma estimativa com margem.
  3. **Impacto orçamentário.** A Conitec decide com a RCEI e com a análise de impacto orçamentário; FONTES F49 registra o "valor de referência orçamentário" da Portaria 8.817/2025. O jogo usa orçamento fixo; uma frase ligaria os dois ("um remédio barato por QALY pode não caber se muita gente precisar dele").
  4. **Horizonte temporal** (vida inteira, F55).
  5. **Dominância estendida.** Para leigos e comparação de duas opções, dispensa-se. Bastaria uma frase no glossário: "com três ou mais opções, a comparação é feita em ordem, cada uma contra a anterior que valha a pena".
  6. **Outros instrumentos** (SF-6D, medidas específicas): só aparecem no título de uma referência.

- **[POLIMENTO] Glossário (linhas 870-890)** · faltam "saúde deslocada" (rótulo de um bloco do interativo 4), "ano de vida ganho", "PIB per capita" e "perspectiva". Em "Dominante / dominado", acrescentar "(ou igual numa coisa e melhor na outra)", para casar com o que o interativo faz.

- **[POLIMENTO] `docs/MODELO.md` §4** · diz que o valor da Conitec é "referência de política" e que as estimativas pelo lado da oferta "são mais baixas". O site (linhas 672 e 815) diz que ele é "uma estimativa" do custo de oportunidade, derivada de um estudo que deu cerca de 1 PIB per capita (F43, F61). O mapa de FONTES (linha 61) já registra a divergência. Alinhar o MODELO ao texto do site, que está mais correto.

- **[POLIMENTO] Jogo, caso `p9a` (linha 1221)** · 7.000 × 1,05⁻³⁰ = 1.620, não 1.600. O texto fala em câncer "por volta dos 45" para vacina aos 12 (33 anos) e em "30 anos". Usar "cerca de 1.600" ou ajustar `q` para 1.620.

- **[POLIMENTO] `#peso`, aposta padrão (linha 569)** · o TTO tem exemplo numérico; a aposta padrão, não. Acrescentar: "Se ela só aceita o tratamento com até 30% de risco de morte, o peso é 0,7."

- **[POLIMENTO] evLY contra evLYG** · o guia usa "evLY" (linhas 776, 833, 888) e o jogo "evLYG" (linhas 1160, 1165). Unificar e dizer uma vez que o "G" é de "ganho".

- **[POLIMENTO] `#desenhe`, desconto** · o texto diz "1 QALY daqui a 10 anos conta 0,61" e o interativo não desconta o ano 1 (o fator 0,61 cai no ano 11). Está certo e documentado (D16), mas falta uma linha na dica: "o primeiro ano não tem desconto".

- **[POLIMENTO] `MEMORIAL.md`** · falta uma seção explícita de aplicabilidade, abrangência e impacto esperado (onde e por quem será usado: conselhos de saúde, aulas de graduação, capacitação para consulta pública; como se pretende medir o uso). O teste com pessoas reais do público-alvo está declarado como limitação, e isso é correto, mas é a principal fragilidade da validação. Um piloto com 5 a 10 leitores e as perguntas de `COMPREENSAO.md` resolveria.

- **[POLIMENTO] `review/rodada-1/1280-rcei.png`** · a captura não mostra o interativo "Quanto custa um QALY?": mostra o fim da Parte 2. Corrigir a rolagem em `tests/pagina.js` para a evidência visual existir.

- **[POLIMENTO] `DECISOES.md` D17** · o pior estado é −0,177 no arquivo da EuroQol e −0,176 na literatura; a diferença ficou sem resolver. Registrar isso também em `MODELO.md` §2 e nas limitações do memorial (hoje só se diz que o artigo é fechado).

## O QUE ESTÁ BOM (para não ser desfeito)

- **Definições corretas e bem simplificadas:** QALY como tempo × peso; âncoras 1 e 0; peso negativo explicado cedo, com dado real (−0,177; 10 estados); "QALYs ganhos" como diferença entre dois futuros; RCEI com "incremental = a mais" e comparação contra o que o SUS já oferece; dominante e dominado; custo de oportunidade como saúde deixada de produzir; limiar com a lógica do lado da oferta; TTO com o exemplo 7 ÷ 10; cadeia questionário → valoração → tarifa → paciente.
- **O limiar como "referência, não sentença":** os três "detalhes que costumam se perder" (não é parâmetro isolado; ultrarraras fora; valores de 2022) e a nota "O limiar brasileiro mede o custo de oportunidade?", com as duas estimativas e a consequência. É o melhor trecho do guia.
- **Quadrante sudoeste tratado corretamente** (`rcei ≥ lim` aceita; "economizados por QALY perdido"; área verde abaixo da reta nos dois lados), com o comentário honesto de que "a conta aceita, e muita gente não". Poucos materiais didáticos fazem isso.
- **"Saúde deslocada" no interativo 4** rotulada como hipótese didática, com "pela regra" no veredito e a frase final "O valor de referência orienta; a decisão final considera outros critérios".
- **Etiquetas "dado real" e "números ilustrativos"** nos pontos certos, e a seção "O que é dado real e o que é ilustrativo" no Sobre e no README.
- **Tarifa brasileira:** coeficientes, constante 0,149, ausência de N3, tabela aberta em "Como a conta é feita", aviso de que não é o instrumento oficial da EuroQol.
- **Escada de TTO declarada como demonstração**, com a diferença para o protocolo real em `MODELO.md` e o tratamento de "≤ 0,10" no fim da escada.
- **Limitações em estrutura fixa** (problema, exemplo, resposta, prática), com referências primárias adequadas (Harris, Williams, Singer, Nord, Ubel, Menzel, Jonsen, McKie, Claxton). As duas leis americanas estão descritas com precisão: não "proíbem o QALY". O evLY vem com o seu custo dito.
- **Jogo:** primeira reunião sem a régua; casos em que a conta acerta contra a pressão (p8, p5b, p6b); três jurados sem nota única; regra de coerência com exceção por prioridade; ganho real variando com a força da evidência; simplificações declaradas (sem orçamento fixo por mandato na vida real; a comissão recomenda e o Ministério decide). Não ensina nada errado sobre ATS além do item 5 acima.
- **Documentação e replicabilidade:** `MODELO.md` com fórmulas e esperados; testes que leem o bloco `CALC` do próprio `index.html`; `FONTES.md` com status por fato, inclusive divergências confessadas; `DECISOES.md`; semente reprodutível; licença CC BY 4.0; uso de IA declarado no site, no README e no memorial, com a ressalva de que a bancada simulada não substitui leitores reais.
