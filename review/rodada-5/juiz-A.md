# Parecer do Juiz A — Leiga (Dona Cida) · Rodada 5 (última)

VEREDITO: APROVA

Motivo em uma linha: nenhum termo técnico central ficou sem explicação, os quatro interativos funcionam sozinhos, o jogo termina em 11 a 12 minutos, é divertido, e o teste deu 5 de 5. As correções da rodada 4 resolveram os dois polimentos que eu tinha destacado (o selo contraditório e o texto do aviso da reunião travada) e não criaram nenhum problema que faça a Dona Cida travar ou entender errado. Sobram só polimentos.

## Como testei

- Guia inteiro no texto renderizado a 375 px (Playwright, 375×740, toque ligado, recolhidos abertos), comparado linha a linha com o texto da rodada 4: mudaram 7 trechos, todos conferidos abaixo. Capturas `375-rcei.png` e `375-jogo-3-jornal.png` da rodada 5, mais capturas minhas do interativo 4.
- Interativo 4, com o limite de R$ 120 mil: atual 0/0 e novo 80.000/1; novo 20.000/1; atual 100.000/3 e novo 20.000/2; mais 30.000, 40.000, 120.000 e 130.000 por 1 QALY; mesmo efeito e mais caro; os seis exemplos prontos com os dois limites; "26,000" e campo vazio. Interativo 3 até o resultado.
- Jogo: partida padrão nº 4321 completa (3 reuniões, normal, com tutorial) aprovando tudo o que cabia, e de novo aprovando só o que fica na referência; mais 26 códigos aprovando tudo o que cabe (28 partidas ao todo).
- Teste de compreensão respondido antes de conferir o gabarito.
- `index.html` igual no começo e no fim (md5 `a01a2767…`, arquivo das 22:36 de 13/11/2026). Nenhum erro de script, nenhuma rolagem lateral (largura medida: 375) no guia e nas 28 partidas.
- Scripts e saídas em `/tmp/claude-0/-home-user-SaudePraQuem2/5d4dd7db-ca0e-5c47-9b10-f70b859cb0a6/scratchpad/juizA5/`.

## CONFERÊNCIA DA RODADA 4

### Itens pedidos

| Item | Situação | Evidência |
|---|---|---|
| Selo contraditório do interativo 4 com o limite de R$ 120 mil | **RESOLVIDO** | Com 0/0 e 80.000/1, o selo agora diz "acima da referência, dentro do limite de 3 vezes" e o texto diz "Fica abaixo do limite de R$ 120 mil que a Conitec admite em situações específicas, mas acima da referência de R$ 40 mil". Selo e texto dizem a mesma coisa. |
| "abaixo do valor de referência de R$ 120 mil" | **RESOLVIDO** | Com 20.000/1 e com 30.000/1 no limite de R$ 120 mil: selo "abaixo da referência e do limite"; texto "Fica abaixo do valor de referência de R$ 40 mil". "Valor de referência" voltou a ser sempre R$ 40 mil. |
| O empate (custo por QALY igual à referência) | **EM PARTE** | Texto corrigido: "Fica exatamente no valor de referência de R$ 40 mil: pela regra, o gasto rende a mesma saúde (1,00 QALYs) que o mesmo dinheiro renderia em outro lugar (1,00)". Mas o selo ao lado ainda diz "abaixo da referência", e ficou "1,00 QALYs" no plural. |
| Aviso da última reunião travada | **EM PARTE** | O texto foi corrigido como pedi: "O que resta do orçamento não paga nenhum pedido desta reunião. É o custo de oportunidade aparecendo: o dinheiro já foi para outras escolhas. Leia os pedidos e encerre a reunião." Não diz mais "o orçamento acabou" e explica o termo na hora. Continuam: a Praça desconta pela recusa forçada ("Faltou dinheiro para 'Genevida', e a recusa repercutiu. (−9)") e a frequência (11 de 27 partidas de quem aprova tudo o que cabe; 0 em quem segue a referência). |
| Limitação 3 quebrada em dois parágrafos | **RESOLVIDO** | Primeiro parágrafo termina em "(Raymakers e colaboradores, 2025)."; o segundo começa em "Um artigo de autores favoráveis à medida examinou a objeção da dupla penalização...". A última frase também ficou mais simples: "Os críticos não aceitam essa resposta. A réplica saiu no mesmo número da revista e sustenta que...". |
| "a tecnologia nova" | **EM PARTE** | Trocado por "o tratamento novo", mas a concordância ficou pela metade: "o tratamento novo é dominado **pela atual**", com o selo "Dominad**a**" ao lado. Resta "Os economistas chamam isso de tecnologia dominante", que é só o nome e não atrapalha. |

### Outros polimentos da rodada 4

| Item | Situação | Evidência |
|---|---|---|
| Jornal não comenta o que ficou de fora por falta de dinheiro | **NÃO RESOLVIDO** | Partida 909: o jornal não cita o Teste de HPV (R$ 15 mil por QALY) que não coube. |
| "quem deve valorar?" (interativo 3) | **NÃO RESOLVIDO** | "É essa a pergunta 'quem deve valorar?', que volta nas limitações." |
| "26,000" vira 26 reais | **NÃO RESOLVIDO** | Custo a mais "− R$ 5.974", selo "Dominante", sem aviso. |
| "força dos estudos" sem dizer para que serve | **NÃO RESOLVIDO** | Cartão: "moderada / força dos estudos", sem mais. |
| Painel muda no fim sem frase | **NÃO RESOLVIDO** | Partida 4321: Contador +3.950 na última ata e +3.664 no fim; Praça 52 e depois 60. |
| Notas finais sem "baixa / regular / alta" | **NÃO RESOLVIDO** | "Contador 8,9 · Ouvidora 6,3 · Praça 6,0 — Notas de 0 a 10." |
| Limitação 8, "maximizar a saúde total" | **RESOLVIDO** | A expressão não aparece mais no site. |
| Quadro do limiar pesado; lista "Alguns detalhes..." | **NÃO RESOLVIDO** | Iguais. |
| "(42 U.S.C. § 1320e-1)" no meio do texto | **NÃO RESOLVIDO** | Igual. |
| Interativo 3, três frases; "243 estados de saúde"; "Coeficientes da tarifa" | **NÃO RESOLVIDO** | Iguais. |

Nenhum dos itens abertos faz a Dona Cida travar ou entender errado.

## NOTAS (0–10 por critério)

| Critério | Nota | Comentário |
|---|---|---|
| Clareza da linguagem | 8,5 | A limitação 3 melhorou com a quebra. Pesam ainda o quadro do limiar, a frase do Supremo (ficou mais longa) e a frase nova do jornal. |
| Termos explicados | 9,5 | Nenhum termo central sem explicação. Sobram jargões leves. |
| Uso dos interativos sem ajuda | 9,5 | Era 9. Selos e textos do interativo 4 agora concordam; "escolha de prioridade" está claro. |
| Jogo (duração e diversão) | 8,5 | 11 a 12 minutos, divertido. A última reunião ainda trava em 4 de cada 10 partidas de quem diz "sim" a tudo. |
| Compreensão (acertos de 5) | 10 | 5 de 5, e a pergunta de controle certa. |

## Teste de compreensão — respostas da Dona Cida e correção

1. **"Dois QALYs. É 4 anos vezes 0,5. O site diz que 2 anos com peso 0,5 dão 1 QALY, então 4 anos dão 2."** Certo.
2. **"Não é o médico nem o governo. Pesquisadores entrevistaram milhares de pessoas comuns em capitais do Brasil e perguntaram quantos anos de vida elas trocariam para ter saúde plena. A média virou uma tabela, a tarifa. O paciente responde as cinco perguntas do questionário e a tabela dá o peso."** Certo.
3. **"60 mil dividido por 2 dá R$ 30 mil por QALY. Fica abaixo da referência de R$ 40 mil. Mas a referência orienta, a decisão olha outras coisas também."** Certo (número e comparação).
4. **"Põe tudo na mesma escala: vacina, prótese, remédio de câncer. E dá voz a quem não está na sala, os que perderiam se o dinheiro fosse para outro lugar. Sem a conta, ganha quem aparece mais na TV."** Certo.
5. **"Uma: a conta não pergunta quem recebe o ganho, se é quem já tem acesso ou quem não tem. Outra: quem tem deficiência soma menos QALYs pelos mesmos anos de vida, a tal dupla penalização. Quem defende diz que o peso é do estado de saúde e não da pessoa, ninguém 'vale' 0,5, e a regra é a mesma para todos. Na prática a Conitec aceita até 3 vezes o valor em situações específicas, como doença rara, e ouve pacientes na consulta pública."** Certo (duas limitações, uma resposta e duas práticas).

Controle — "O QALY diz quanto vale a vida de uma pessoa?" **"Não. O valor de referência não é preço de ninguém. Ele serve para comparar onde o mesmo dinheiro rende mais saúde."** Certo. A frase mais longa sobre o Supremo não muda essa leitura.

**Resultado: 5 de 5.**

## Interativo 4 com o limite de R$ 120 mil — o que ela lê

| Teste | Selo | Texto | Ela entende? |
|---|---|---|---|
| atual 0/0, novo 80.000/1 | "acima da referência, dentro do limite de 3 vezes" | "...o mesmo dinheiro renderia mais saúde em outro lugar (2,00 QALYs) do que rende aqui (1,00). Aceitar, neste caso, é uma **escolha de prioridade** (por exemplo, por ser uma doença rara ou grave), não um resultado da conta." | Sim. "Escolha de prioridade" vem com o exemplo colado e com o contraste "não um resultado da conta". É a frase mais clara do interativo. |
| novo 20.000/1 | "abaixo da referência e do limite" | "Fica abaixo do valor de referência de R$ 40 mil: pela regra, o gasto rende mais saúde (1,00 QALYs) do que o mesmo dinheiro renderia em outro lugar (0,50)." | Sim. |
| atual 100.000/3, novo 20.000/2 | "economia acima da referência, abaixo do limite de 3 vezes" | "O tratamento novo poupa dinheiro e perde um pouco de saúde: R$ 80.000 economizados para cada QALY perdido. Isso é mais que a referência de R$ 40 mil e menos que o limite de R$ 120 mil. [...] Recusar a troca, neste caso, é uma escolha de prioridade (proteger mais a saúde de quem tem uma doença rara ou grave, por exemplo), não um resultado da conta." | Sim, na segunda leitura. É o caso mais difícil do site: ela precisa virar a lógica (aqui, "mais" é bom para a troca). O texto acompanha a virada; o selo de duas linhas, sozinho, não diz se a notícia é boa ou ruim. Polimento. |

## Tempo e leitura do jogo (partida padrão nº 4321)

| Trecho | aprovando o que cabe | só o que fica na referência |
|---|---|---|
| Tela inicial, opções fechadas | 137 | 137 |
| Reunião 1 / ata 1 | 257 / 173 | 257 / 172 |
| Reunião 2 / ata 2 | 237 / 120 | 237 / 133 |
| Reunião 3 / ata 3 | 185 / 125 | 168 / 113 |
| Fim do mandato, detalhes fechados | 250 | 234 |
| **Total** | **1.484 palavras** | **1.451 palavras** |
| Decisões (7 votos + 3 encerramentos) | 10 | 10 |
| Tempo (150 palavras/min + 10 s por decisão) | **11,6 min** | **11,3 min** |

- A contagem inclui umas 50 palavras só para leitor de tela; o tempo real é uns 20 segundos menor.
- Nas outras 26 partidas: de 10,9 a 12,0 minutos (1.384 a 1.544 palavras). Cresceu uns 20 palavras por partida em relação à rodada 4 (a frase do jornal e o aviso ficaram mais longos).
- **Cabe em cerca de 10 minutos?** Sim, no limite: 11 a 12 minutos para a promessa de "cerca de 10". Não aumentar mais.
- **É divertido?** Sim. Na 4321 a reunião 2 ("O mesmo remédio, duas contas") é a melhor aula do site sobre a limitação 3: o mesmo Cardioprol custa R$ 60 mil por QALY para cadeirantes e R$ 35 mil para os demais, e a Marina pergunta "Por que os meus contam pela metade?". Na reunião 3 sobrou dinheiro para as equipes de cuidados paliativos e não para o Pancrevit; o cartão avisa "não cabe nesta reunião". Saí "Plenário da conta" (8,9 / 6,3 / 6,0), com a carta da Marina agradecendo e a do Carlos reclamando da planilha.
- **Entende os três jurados?** Sim.
- **Reunião travada:** não aconteceu na 4321. Aconteceu em 11 das 27 partidas de quem aprova tudo o que cabe (909, 7, 55, 77, 303, 505, 808, 1999, 8080, 9999, 31415).
- **Termos sem explicação no jogo:** nenhum que trave.

## Termos técnicos sem explicação na primeira vez

Técnico central, sem explicação: **nenhum**.

Trechos novos conferidos:
- Cartão "Pesos de justiça (equidade)": "Em troca, alguém precisa escolher quais grupos pesam mais e quanto, e essa escolha é política." Claro, e mostra o outro lado.
- Glossário, "Equidade": "Justiça na distribuição: olhar quem ganha e quem perde. Para muita gente, quer dizer dar mais atenção a quem tem menos saúde ou menos acesso." Claro.
- Glossário, "Dominante / dominado": "Dominado é o pior e mais caro (ou igual numa das duas coisas e pior na outra)." Claro, e agora combina com a Parte 4 ("ou igual numa coisa e pior na outra").
- Limitação 8, Supremo: "uma delas é mostrar que a decisão da Conitec de não incluir o medicamento é ilegal, que não houve pedido de inclusão ou que a análise demorou demais". Longa (53 palavras), mas as três condições são de linguagem comum. "A lógica da comparação entre todos os pedidos" é melhor que a antiga "lógica da conta para todos".
- Legenda do gráfico: "A linha tracejada é o limiar escolhido (a referência ou o limite de 3 vezes)". "Limiar" foi explicado na Parte 4 e vem com o parêntese.

Jargão leve que ela atravessa pelo contexto (polimento): "quem deve valorar?", "tecnologia dominante", "Coeficientes da tarifa", "243 estados de saúde", "modelo estatístico", "evidências", "réplica", "sanitarista", "terapia gênica".

## PROBLEMAS

### Bloqueante

Nenhum.

### Importante

Nenhum.

### Polimento — novos ou deixados pelas últimas correções

- **[POLIMENTO]** Jogo, jornal, parágrafo "Repercussão" (bônus de coerência) · A frase mudou de novo: "Nas reuniões com a régua, o comitê não aprovou um pedido mais caro por QALY depois de recusar outro mais barato e de igual prioridade." É exata, mas tem 26 palavras, uma negação e uma ordem no tempo, e não diz que é um elogio; a da rodada 4 ("o comitê foi coerente nas suas escolhas") se lia de uma vez. Apareceu em 22 das 28 partidas. · Correção: juntar as duas: "O comitê foi coerente: nas reuniões com a régua, não aprovou um pedido mais caro por QALY depois de recusar outro mais barato."
- **[POLIMENTO]** Interativo 4, veredito do "Pior e mais caro" e do caso de mesmo efeito e mais caro · "o tratamento novo é dominado **pela atual**", com o selo "Dominad**a**". Sobrou da troca de "tecnologia" por "tratamento". · Correção: "é dominado pelo atual"; selo "Dominado".
- **[POLIMENTO]** Interativo 4, empate com a referência (40.000 e 1, nos dois limites) · O texto diz "Fica exatamente no valor de referência" e o selo diz "abaixo da referência" (ou "abaixo da referência e do limite"). · Correção: selo "igual à referência".
- **[POLIMENTO]** Interativo 4, empate com o limite (120.000 e 1, limite de R$ 120 mil) · "Cada QALY a mais custa R$ 120.000. Fica abaixo do limite de R$ 120 mil". · Correção: "Fica exatamente no limite de R$ 120 mil".
- **[POLIMENTO]** Interativo 4 · "1,00 QALYs" em todos os vereditos com 1 QALY. · Correção: "1,00 QALY".
- **[POLIMENTO]** Interativo 4, selo do caso que poupa dinheiro com o limite de R$ 120 mil (100.000/3 contra 20.000/2) · "economia acima da referência, abaixo do limite de 3 vezes" ocupa duas linhas e não diz se isso é bom ou ruim para a troca; o texto abaixo explica. · Correção: selo mais curto, "economia entre a referência e o limite".
- **[POLIMENTO]** Limitação 8, frase do Supremo · 53 palavras com três condições em fila. · Correção: ponto depois de "listas do SUS" e começar outra frase: "Uma delas é mostrar que...".

### Polimento — abertos de rodadas anteriores

- **[POLIMENTO]** Jogo, última reunião travada · 11 de 27 partidas de quem aprova tudo o que cabe; a Praça ainda desconta ("Faltou dinheiro para 'Genevida', e a recusa repercutiu. (−9)"). · Correção: não descontar a Praça por recusa forçada; se der, avisar na ata anterior "Restam R$ 50 milhões para a última reunião".
- **[POLIMENTO]** Jogo, jornal · não comenta o pedido bom que ficou de fora por falta de dinheiro. · Correção: uma frase ("Faltou dinheiro para o Teste de HPV, que renderia 4.000 QALYs.").
- **[POLIMENTO]** Jogo, painel do fim · Contador e Praça mudam entre a última ata e o fim (4321: +3.950 → +3.664; 52 → 60) sem frase. · Correção: "O painel agora mostra o que aconteceu de verdade, não o prometido, e a repercussão final."
- **[POLIMENTO]** Jogo, cartões · "força dos estudos" sem dizer para que serve. · Correção: na ata "Agora, com a régua", "A 'força dos estudos' diz o quanto dá para confiar nos QALYs prometidos."
- **[POLIMENTO]** Jogo, notas finais · sem dizer o que é nota boa. · Correção: uma palavra sob cada nota (baixa / regular / alta).
- **[POLIMENTO]** Interativo 3, resultado · "quem deve valorar?". · Correção: "quem deve dar os pesos?".
- **[POLIMENTO]** Interativo 4, campo de custo · "26,000" vira 26 reais sem aviso. · Correção: vírgula seguida de três dígitos no custo conta como milhar, ou pergunta.
- **[POLIMENTO]** Parte 4, quadro do limiar · ainda o parágrafo mais pesado. · Correção: fechar com "Em resumo: ninguém sabe ao certo se R$ 40 mil é o número certo; pode ser alto demais."
- **[POLIMENTO]** Parte 4, lista "Alguns detalhes que costumam se perder" · quinto item com dois assuntos. · Correção: separar a incerteza.
- **[POLIMENTO]** Limitações 2 e 3 · "(42 U.S.C. § 1320e-1)" no meio do texto. · Correção: "(lei americana de 2010)", com o link.
- **[POLIMENTO]** Interativo 3 · "tem alguns problemas para fazer", "até você mudar de lado", título "Qual é o seu peso?". · Correção: "para fazer as atividades do dia a dia"; "até você preferir ficar com os 10 anos"; "Que peso você daria?".
- **[POLIMENTO]** Parte 3 e interativo 2 · "243 estados de saúde"; "Coeficientes da tarifa". · Correção: "243 combinações de respostas, chamadas estados de saúde"; "Números da tarifa".

## O QUE ESTÁ BOM (para não ser desfeito)

- **Os selos novos do interativo 4** ("acima da referência, dentro do limite de 3 vezes", "abaixo da referência e do limite", "acima do limite de 3 vezes") e "valor de referência" sempre igual a R$ 40 mil.
- **"Aceitar, neste caso, é uma escolha de prioridade (por exemplo, por ser uma doença rara ou grave), não um resultado da conta."** E o espelho para quem poupa: "Recusar a troca, neste caso, é uma escolha de prioridade".
- **"Fica exatamente no valor de referência [...] rende a mesma saúde"** no empate.
- **O aviso da reunião travada** na forma nova, com o custo de oportunidade explicado na hora.
- **A limitação 3 em dois parágrafos**, com "Os críticos não aceitam essa resposta." em frase própria.
- **O cartão "Pesos de justiça (equidade)"** com a frase "essa escolha é política", e as entradas "Equidade" e "Dominante / dominado" do glossário.
- **"A lógica do direito de cada pessoa e a lógica da comparação entre todos os pedidos convivem, em tensão permanente."**
- **A reunião "O mesmo remédio, duas contas"** e a fala da Marina; as cartas do jornal; a ata "Agora, com a régua"; "Fora da conta" com o link para a limitação.
- **A partida padrão de 3 reuniões.** Está no teto do tempo; não acrescentar texto.
- **A caixa "Saúde que o dinheiro poupado pode render"**, a nota sobre a hipótese de R$ 40 mil e a mensagem de erro com exemplos.
- **Interativos 1, 2 e 3**, as explicações de meia linha da Parte 4, as ressalvas das vantagens, o formato em quatro partes das limitações e "O que fica de pé dos dois lados".
- **Sem rolagem lateral a 375 px e sem erro de script** no guia e nas 28 partidas.
