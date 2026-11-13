# Parecer do Juiz B — Banca da disciplina (rodada 2)

```
VEREDITO: APROVA
```

Os cinco itens IMPORTANTES da rodada 1 que estavam ao alcance do construtor foram resolvidos (um deles em parte, com resíduo de redação). O sexto, autoria e citação, depende do autor e está em "PENDÊNCIA DO AUTOR"; não entrou no veredito, como instruído. Não encontrei erro novo de definição, de norma ou de cálculo nos textos do guia. Restam 16 itens de POLIMENTO, dos quais os três primeiros merecem ser corrigidos antes da entrega.

## NOTAS (0–10 por critério)

| Critério | Rodada 1 | Rodada 2 |
|---|---:|---:|
| Precisão conceitual | 8,5 | 9,0 |
| Coerência com MS/Conitec | 7,5 | 9,0 |
| Correção dos cálculos | 7,5 | 8,5 |
| Separação entre fato, valor e ilustração | 7,0 | 8,5 |
| Qualidade como produto técnico | 7,0 | 7,5 |

A nota de produto técnico fica em 7,5 por causa da autoria incompleta e da falta de teste com leitores reais, ambas declaradas.

## O que foi conferido

- `npm test`: `calc.js` 119 verificações, `dados.js` 10 pautas e 21 casos, `equilibrio.js` 32.400 partidas, tudo verde. `portao.md` lido (verde, 13 nov. 2026).
- **Fonte primária:** baixei o relatório da Conitec de 2022 (PDF de 112 p.) e li o Quadro 1 (p. 48 do PDF). Conferem com o site: "não deve ser um parâmetro isolado dos demais fatores"; QALY como desfecho principal; anos de vida ganhos "em situações excepcionais em que o QALY for considerado indisponível ou inadequado"; os quatro modificadores com os qualificadores; R$ 40.000 e R$ 35.000; "até 3 vezes"; exclusão de "tecnologias gênicas, curativas e tecnologias para doenças ultrarraras (até 1 pessoa em cada 50.000)"; estudo-base perto de 1 PIB per capita (0,92 a 1,07) e Woods com 0,20 a 0,63.
- **Não consegui abrir a Diretriz de Avaliação Econômica (3ª ed., 2026):** o endereço devolveu uma página HTML, não o PDF. Os 5% para custos e saúde, o "sugere" do cenário sem desconto e a perspectiva do SUS foram conferidos só contra as transcrições de `FONTES.md`. A reconferência na fonte fica com o Juiz D.
- **Refeito à mão ou por script próprio:**
  - `avaliar(−1000, 0, 40000)` → dominante, `ok true`, `rcei null`, BLS +0,025; `avaliar(0, 0,2, 40000)` → dominante; `avaliar(1000, 0, 40000)` → dominada.
  - "Só mais tempo" com 5%: QALYs 1,86 → 3,39 (+1,53); anos descontados +3,06; a tela mostra +4 (linha 1404, `a = com.vive − sem.vive`).
  - 7.000 ÷ 1,05³⁰ = 1.619,6 → 1.620; 70 milhões ÷ 1.620 = R$ 43,2 mil por QALY.
  - Custo por QALY dos 21 casos do jogo; tetos por reunião (metade de 400 a 700 milhões).
  - Aposta padrão: 20% de risco aceito → peso 0,8. Limitação 2: 20 ÷ 5 = 4. Limitação 3: 2 × 0,85 = 1,7 e 2 × 0,5 = 1. Limitação 6: 6 ÷ 1,7 = 3,5. Desconto: 0,614 e 0,231.
  - `limites` contra uma enumeração própria, reunião a reunião (ver POLIMENTO 2).
- Capturas vistas: `1280-rcei.png`, `1280-jogo-3-jornal.png`, `375-jogo-2-reuniao.png`.

## CONFERÊNCIA DA RODADA 1

### Itens IMPORTANTES

| # | Item | Situação | Evidência |
|---|---|---|---|
| 1 | `Calc.avaliar` com ΔE = 0 e ΔC < 0 | **RESOLVIDO EM PARTE** | Cálculo corrigido: linha 1112, `else if(dE>=0&&dC<=0)` → dominante. Teste em `tests/calc.js:59` e no portão. `MODELO.md` §4 atualizado. Falta o texto do veredito, que eu havia pedido: ver POLIMENTO 1. |
| 2 | "Desenhe uma vida": anos descontados como tempo vivido | **RESOLVIDO** | Linha 1404: anos sempre sem desconto. Portão: "com desconto, os anos vividos continuam 4". `MODELO.md` §1 tem a linha nova. Resíduo de redação em POLIMENTO 4. |
| 3 | Limiar de 3 vezes sem os qualificadores | **RESOLVIDO** | Linha 664: "doença rara que reduz muito o tempo de vida com qualidade; doença de crianças que faz o mesmo; doença grave; e doença endêmica… em populações de baixa renda com poucas alternativas". Limitação 2 (771) corrigida. Bate com o Quadro 1 lido na fonte. |
| 4 | "A Conitec pede… outros resultados que os pacientes consideram importantes" | **RESOLVIDO** | O autor tem razão quanto ao lastro. O Quadro 1 diz, literalmente: "Outros desfechos relevantes, preferencialmente desfechos relatados como importantes pelo paciente, devem ser descritos na análise das evidências". A redação nova (787) é fiel. Meu item da rodada 1 se apoiava no mapa de `FONTES.md`, que estava incompleto; F115 corrige. |
| 5 | Jogo: "R$ 40 mil = 1 QALY na rede" como fato | **RESOLVIDO** | Painel (1044): "…do que a rede de saúde renderia, pela hipótese do jogo". Ata do tutorial (1699): "pela regra". Jornal (1735): "pela hipótese do jogo (R$ 40 mil na rede = 1 QALY)". Textos de `t3` e `p7a` agora dizem "cinco/seis vezes a referência". A penalidade "as filas cresceram" saiu da Praça (`JOGO.md` explica por quê). Resíduo em POLIMENTO 9. |
| 6 | Autoria e citação | **NÃO RESOLVIDO** | Fora do alcance do construtor. Ver "PENDÊNCIA DO AUTOR". |

### Itens de POLIMENTO

| Item da rodada 1 | Situação | Evidência |
|---|---|---|
| "três passos" com quatro itens | RESOLVIDO | Linha 559: "quatro passos". |
| "sugere" contra "pede" (cenário sem desconto) | RESOLVIDO | Linhas 682 e 811: "sugere". |
| Limitação 7: paradoxo do adiamento | RESOLVIDO | Linha 810: "se o dinheiro é descontado e a saúde não, as contas passam a favorecer sempre adiar o gasto". |
| Exclusão das "curativas" | RESOLVIDO | Linha 669: "tratamentos gênicos ou que prometem cura". |
| Vantagem 3: "pode ser refeita por qualquer pessoa" | RESOLVIDO | Linha 745, com a ressalva "poucas pessoas conseguem refazer a conta". |
| Limitação 3: afirmação empírica sem fonte | RESOLVIDO | Linha 778: Raymakers e colaboradores (2025), nas referências e em F120. |
| Lacunas (perspectiva, incerteza, impacto orçamentário, horizonte, dominância estendida, outros instrumentos) | RESOLVIDO EM PARTE | Entraram perspectiva (671), impacto orçamentário (672 e glossário) e incerteza (uma frase em 672). Ficaram fora horizonte temporal, dominância estendida e SF-6D. Aceitável para o público. |
| Glossário | RESOLVIDO EM PARTE | Entrou "Impacto orçamentário". Faltam "ano de vida ganho" e "perspectiva". "Dominante" continua só "melhor e mais barato" (ver POLIMENTO 1). |
| `MODELO.md` §4 contra o site | NÃO RESOLVIDO | Ver POLIMENTO 6. |
| Caso `p9a`: 1.600 contra 1.620 | RESOLVIDO EM PARTE | `q = 1620`. Sobrou "aos 45" contra "30 anos" e o "44 mil" de `JOGO.md` (POLIMENTO 7). |
| Exemplo numérico da aposta padrão | RESOLVIDO | Linha 572: 20% de risco → 0,8. |
| evLY contra evLYG | RESOLVIDO | "evLY" em todo o site; glossário: "antes chamado evLYG". |
| Dica "o primeiro ano não tem desconto" | RESOLVIDO | Linha 1413. |
| `MEMORIAL.md`: aplicabilidade e impacto esperado | NÃO RESOLVIDO | Ver POLIMENTO 12. |
| Captura `1280-rcei.png` | RESOLVIDO | A captura mostra o interativo 4. |
| −0,177 contra −0,176 | RESOLVIDO EM PARTE | Está em `MODELO.md` §2. Não está nas limitações do memorial. |

## PENDÊNCIA DO AUTOR

Só o autor pode fornecer estes dados; o construtor não deve inventá-los. Hoje o site (`#sobre`, linhas 959 e 969), o `README.md` ("Como citar", "Autoria") e o cabeçalho do `MEMORIAL.md` trazem apenas "Felipe, cirurgião e doutorando na FMUSP". Falta:

1. **Nome completo**, na forma de citação (SOBRENOME, Nome).
2. **Programa de pós-graduação** (o README diz só "programa de pós-graduação da Faculdade de Medicina da USP").
3. **Docente responsável pela disciplina e/ou orientador.**
4. **Contato:** e-mail institucional ou ORCID.
5. **Endereço público definitivo.** O memorial dá o GitHub Pages como "endereço previsto". É preciso publicar e confirmar o endereço; se possível, depositar uma versão com DOI (Zenodo).
6. Com esses dados, trocar a citação por: "SOBRENOME, Nome. *A régua da saúde: o que é o QALY, suas vantagens e limitações* [recurso eletrônico]. Versão 1.0. São Paulo: Faculdade de Medicina da USP, 2026. Disponível em: <endereço>. Acesso em: <data>."

Sem isso, a banca real não tem como registrar o produto. O item não pesou no veredito desta rodada.

## PROBLEMAS

Nenhum BLOQUEANTE. Nenhum IMPORTANTE.

### POLIMENTO (os três primeiros convém corrigir antes da entrega)

1. **[POLIMENTO] Interativo 4, texto do veredito "dominante" (linha 1546) · sobra do item 1 da rodada 1.**
   Com QALYs iguais e custo menor, a tela diz "**Mais saúde** por menos (ou o mesmo) dinheiro. Não há o que pesar: a tecnologia nova é **melhor nas duas coisas**". Nesse caso a saúde é a mesma. A classificação e o selo estão certos; a frase não.
   Correção: "**Não custa mais e não rende menos saúde, e é melhor em pelo menos uma das duas coisas.** Não há o que pesar: os economistas chamam isso de tecnologia *dominante*."
   Alinhar a Parte 4 (653) e o glossário (884): "melhor e mais barato (ou igual numa coisa e melhor na outra)".

2. **[POLIMENTO] Jogo, função `limites` (linhas 1316-1329) · o "máximo possível" inclui combinações que não dá para jogar.**
   A enumeração exige gasto total ≤ orçamento e teto por reunião, mas não que o dinheiro exista reunião a reunião. Como a caneta de insulina (`p8b`) devolve R$ 20 milhões, entra na conta uma combinação que estoura o orçamento numa reunião e só "fecha" numa reunião posterior.
   Comparei com uma enumeração sequencial em 2.700 partidas (150 códigos × 18 configurações): 22 diferem, sempre no máximo da Ouvidora, superestimado em 1 ponto. Exemplo: 4 reuniões, normal, com tutorial, código 9: `maxO` 7, o certo é 6. A nota da Ouvidora sai um pouco mais baixa do que deveria.
   Não ocorre na partida padrão de 3 reuniões (dois tetos de metade somam no máximo o orçamento). Por isso, e por ser pontuação inventada de um jogo ilustrativo, não classifiquei como IMPORTANTE.
   Correção: em `limites`, acumular o gasto na ordem das pautas e descartar a combinação se, em alguma reunião, o acumulado passar de `G.B`. Acrescentar o caso a `tests/equilibrio.js`.

3. **[POLIMENTO] `#decisao`, linha 666 · "Três detalhes que costumam se perder:" e a lista tem cinco itens.**
   As correções acrescentaram perspectiva e impacto orçamentário à lista. É o mesmo tipo de erro dos "três passos" da rodada 1. Trocar por "Cinco detalhes…" ou separar os dois novos sob "E dois avisos sobre a conta:".

4. **[POLIMENTO] "Desenhe uma vida", frase (linha 1412).**
   Com desconto ligado e saúde plena nos dois cenários (por exemplo, viver 4 contra 8 anos com qualidade 1), a frase diz "cada um conta menos que 1 QALY, **porque não é de saúde plena**". O motivo ali é o desconto. Usar a comparação sem desconto para escolher essa frase (`qalyPerfil(…, 0)`).

5. **[POLIMENTO] Interativo 4, leitura de números (linha 1517).**
   "1.050" no campo de QALYs vira 1.050 QALYs, e "5.000" vira cinco mil. Sugestão: nos campos de QALYs, tratar o ponto como decimal, ou avisar quando o valor passar de 100.

6. **[POLIMENTO] `docs/MODELO.md` §4 · não resolvido da rodada 1.**
   Ainda diz "O valor da Conitec é uma referência de política; estimativas pelo lado da oferta para o Brasil são mais baixas". O site (677) diz que o relatório partiu de um estudo que deu perto de 1 PIB per capita e cita outra estimativa, de 20% a 63%. O relatório confirma a versão do site ("pautada no cálculo do custo de oportunidade"; 0,92 a 1,07). Trocar por: "O valor da Conitec vem de uma estimativa de custo de oportunidade próxima de 1 PIB per capita; outra estimativa citada no mesmo relatório é mais baixa (0,20 a 0,63)."

7. **[POLIMENTO] `docs/JOGO.md`, tabela das pautas · "vacina … (44 mil com desconto)".**
   Com `q = 1620`, o cartão mostra R$ 43 mil (conferido na captura). A mesma tabela diz que no tutorial "o teto deixa aprovar no máximo dois"; no fácil com 6 reuniões o teto é R$ 350 milhões e os três pedidos (110 + 90 + 150 = 350) cabem. Corrigir o documento ou baixar esse orçamento para 680.
   No caso `p9a`, continua "um câncer que viria aos 45" para vacina aos 12 (33 anos) ao lado de "30 anos"; trocar por "por volta dos 42".

8. **[POLIMENTO] `MEMORIAL.md` §5 · "114 fatos e 119 referências".**
   `FONTES.md` tem hoje 121 fatos (F115 a F121 entraram na rodada 1) e ganhou referências (Raymakers, Frijters). Atualizar os dois números.
   O memorial também cita `CHANGELOG.md`, mas o registro só vai até as correções da rodada 1; incluir a rodada 2 ao fechar.

9. **[POLIMENTO] Jogo, fala do Contador na ata (linha 1705).**
   "+2.750 QALYs em relação a deixar o dinheiro na rede de saúde" não traz a ressalva. O painel ao lado traz, por isso é só polimento. Sugestão: "…em relação a deixar o dinheiro na rede (hipótese do jogo)".

10. **[POLIMENTO] Limitação 8, linha 816 · "É a objeção mais antiga a toda a ideia de maximizar a saúde total."**
    Superlativo histórico sem fonte, num bloco que descreve fatos. Trocar por "É uma das objeções mais antigas…".

11. **[POLIMENTO] Limitação 3, linha 777 · "parece quase duas vezes pior".**
    1,7 contra 1 é 70% a mais. Sugestão: "rende 1,7 vez menos QALYs no segundo grupo". Na Parte 7 (836), "meio-termo entre os dois anteriores" tem só um item antes; trocar por "entre o QALY e os anos de vida ganhos".

12. **[POLIMENTO] `MEMORIAL.md` · aplicabilidade e impacto esperado, não resolvido da rodada 1.**
    Falta uma seção curta dizendo onde e por quem o material será usado (conselhos de saúde, aulas de graduação, preparação para consulta pública) e como se pretende medir o uso. Um piloto com 5 a 10 leitores e as perguntas de `COMPREENSAO.md` continua sendo a melhor resposta à principal fragilidade declarada.

13. **[POLIMENTO] Citação (linha 969 e README) · o que o construtor pode fazer sem o autor.**
    Acrescentar "Versão 1.0, nov. 2026" e "Acesso em:". O resto está em "PENDÊNCIA DO AUTOR".

14. **[POLIMENTO] Glossário.** Acrescentar "Ano de vida ganho" (aparece no valor de R$ 35 mil) e "Perspectiva" (de quem são os custos contados).

15. **[POLIMENTO] `MEMORIAL.md` §7.** Registrar a diferença −0,177 contra −0,176 do pior estado, que já está em `MODELO.md` §2.

16. **[POLIMENTO] `#decisao`, linha 670.** O Quadro 1 diz que os valores "serão atualizados anualmente conforme variação do PIB per capita". O site informa que a diretriz de 2026 repete R$ 40 mil e R$ 35 mil. Vale uma frase: "O relatório previa atualização anual pelo PIB per capita; a diretriz de 2026 manteve os mesmos valores." Mostra ao leitor que a referência perdeu valor real.

## O QUE ESTÁ BOM (para não ser desfeito)

- **Tudo o que elogiei na rodada 1 continua de pé:** definições, cadeia questionário → valoração → tarifa → paciente, quadrante sudoeste, tarifa brasileira, escada de TTO declarada como demonstração, estrutura fixa das limitações.
- **"A ressalva" em cada vantagem.** As cinco são honestas e curtas. A da vantagem 4 ("ninguém sabe ao certo de onde o dinheiro sai nem quanto de saúde ele renderia lá… o argumento supõe que o orçamento é fixo, o que é uma escolha política") resume a discussão sobre custo de oportunidade empírico numa frase para leigos.
- **Parte 1, o aviso sobre o orçamento como decisão política.** Separa o fato (algum limite existe) do valor (o tamanho do limite).
- **Situações do limiar de 3 vezes** agora fiéis ao Quadro 1, com "a critério da comissão". Ultrarraras com a definição (1 em 50 mil) e as terapias "que prometem cura".
- **Perspectiva do SUS, impacto orçamentário e incerteza** entraram em três frases, sem inflar a Parte 4.
- **Limitação 3 reescrita.** A crítica vem na versão forte e em primeira pessoa; a resposta tem Singer e colaboradores (1995), cujo resumo de fato conclui que o defensor do QALY tem resposta adequada; as duas leis americanas são descritas com precisão; o evLY vem com o seu custo.
- **Limitação 7.** O argumento do desconto agora está tecnicamente certo.
- **Limitação 8 e o fecho.** "A conta não disse isso… mas a recusa caiu sobre uma pessoa, e o ganho, sobre desconhecidos" separa o que a conta afirma do que a pessoa ouve. O fecho não toma partido.
- **Interativo 4:** "pela regra" no veredito, "(hipótese)" nos blocos, aviso para campo inválido, simetria entre dominante e dominada, entrada de "26.000".
- **Jogo.** O teto por reunião resolve o "aprova tudo na primeira" sem ensinar nada errado, e está declarado como simplificação. Recusa por falta de dinheiro pesa menos e não conta como incoerência. A Praça deixou de julgar pelo critério do Contador. O jornal declara a hipótese. A vacina a R$ 43 mil com desconto e R$ 10 mil sem é um bom caso para a limitação 7.
- **Documentação.** `MODELO.md` acompanha o código (dominância com igualdade, anos sem desconto, 1.620). `JOGO.md` explica o teto e por que a penalidade saiu. Os testes conferem os números do texto contra o código. `FONTES.md` registra a citação literal e a página de F115.
