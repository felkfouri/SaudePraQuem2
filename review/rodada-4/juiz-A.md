# Parecer do Juiz A — Leiga (Dona Cida) · Rodada 4

VEREDITO: APROVA

Motivo em uma linha: o único IMPORTANTE da rodada 3 ("equidade") foi resolvido no cartão e no glossário; não encontrei nenhum termo técnico central sem explicação, os quatro interativos funcionam sozinhos, o jogo termina em 11 minutos e o teste deu 5 de 5. Sobram só polimentos. Dois deles são novos e merecem atenção antes dos outros: o selo "abaixo da referência" que contradiz o texto novo da "escolha de prioridade", e a última reunião travada, que nesta rodada apareceu em 9 de 26 partidas de quem aprova tudo o que cabe.

## Como testei

- Li o guia inteiro no texto renderizado a 375 px (Playwright, 375×740, toque ligado, todos os recolhidos abertos) e vi capturas `375-*.png` da rodada 4 (alternativas, rcei), além de capturas minhas.
- Interativo 4: o caso pedido (atual 0 e 0; novo 80.000 e 1) com os dois limites; mais 130.000, 30.000 e 40.000 com o limite de R$ 120 mil; os seis exemplos prontos com os dois limites; "26,000" e campo vazio. Interativo 3: um caminho completo até o resultado.
- Jogo: partida padrão nº 909 completa (3 reuniões, normal, com tutorial), aprovando tudo o que cabia; a mesma 909 aprovando só o que fica na referência; e mais 25 códigos nos dois jeitos de decidir (52 partidas ao todo), para medir tamanho e procurar reunião sem escolha.
- Teste de compreensão respondido antes de conferir o gabarito.
- O `index.html` não mudou durante a revisão (mesmo md5 no começo e no fim; arquivo das 22:27 de 13/11/2026). Nenhum erro de script e nenhuma rolagem lateral (largura medida: 375) no guia e nas 52 partidas.
- Scripts e saídas em `/tmp/claude-0/-home-user-SaudePraQuem2/5d4dd7db-ca0e-5c47-9b10-f70b859cb0a6/scratchpad/juizA4/`.

## CONFERÊNCIA DA RODADA 3

### Importante

| Item | Situação | Evidência |
|---|---|---|
| "equidade" sem explicação no cartão da Parte 7 e fora do glossário | **RESOLVIDO** | Cartão: "**Pesos de justiça (equidade) e análise distributiva** — Equidade é justiça na distribuição: olhar quem ganha e quem perde. Estes métodos mantêm o QALY e acrescentam a pergunta 'para quem?'." Glossário: "**Equidade** — Justiça na distribuição: dar mais atenção a quem tem menos saúde ou menos acesso." |

### Polimentos da rodada 3

| Item | Situação | Evidência |
|---|---|---|
| Jogo: última reunião sem escolha, sem aviso | **EM PARTE** | Agora há aviso no alto: "O orçamento acabou: nenhum pedido desta reunião cabe. É o custo de oportunidade aparecendo. Leia os pedidos e encerre a reunião." A Praça continua descontando ("Faltou dinheiro para 'Genevida', e a recusa repercutiu. (−9)"). E a situação é bem mais comum do que medi antes: 9 de 26 partidas de quem aprova tudo o que cabe (ver polimento). |
| Interativo 4: "Saúde que sai de outro lugar" quando se poupa dinheiro | **RESOLVIDO** | "Melhor e mais barato" e "Mais barato e um pouco pior": título "Saúde que o dinheiro poupado pode render", legenda "QALYs que o dinheiro poupado pode render em outro lugar (hipótese)". |
| Interativo 3: "quem deve valorar?" | **NÃO RESOLVIDO** | "É essa a pergunta 'quem deve valorar?', que volta nas limitações." |
| Interativo 4: "a tecnologia nova" | **EM PARTE** | Resolvido em "O tratamento novo poupa dinheiro...". Restam "Os economistas chamam isso de tecnologia dominante" e "a tecnologia nova é dominada pela atual". |
| Jornal: frase do bônus de coerência com três negações | **RESOLVIDO** | "Desde que a régua apareceu, o comitê foi coerente nas suas escolhas." Uma leitura basta. |
| Jogo: "força dos estudos" sem dizer para que serve | **NÃO RESOLVIDO** | A ata "Agora, com a régua" não fala dela; o cartão mostra "moderada / força dos estudos" sem mais. |
| Jogo: painel muda no fim sem frase | **NÃO RESOLVIDO** | Partida 909: Contador +1.730 na última ata e +2.312 no fim; Praça 49 e depois 57. Nesta partida não houve parágrafo "Na prática", e nada liga os números. |
| Jogo: notas finais sem "boa / regular / baixa" | **NÃO RESOLVIDO** | "Contador 6,4 · Ouvidora 7,1 · Praça 5,7 — Notas de 0 a 10." |
| Interativo 4: "26,000" vira 26 reais | **NÃO RESOLVIDO** | Custo a mais "− R$ 5.974", selo "Dominante", sem aviso. |
| Limitação 8: "maximizar a saúde total" | **NÃO RESOLVIDO** | "É uma objeção antiga a toda a ideia de maximizar a saúde total." |
| Quadro do limiar pesado | **NÃO RESOLVIDO** | Igual, sem frase de resumo. |
| Lista "Alguns detalhes que costumam se perder" | **NÃO RESOLVIDO** | O quinto item ainda junta impacto orçamentário e incerteza. |
| Limitação 3 longa e com "(42 U.S.C. § 1320e-1)" | **NÃO RESOLVIDO** (e cresceu) | O bloco "O que responde quem defende" ganhou duas frases; agora tem oito ideias num parágrafo só. |
| Interativo 3: "tem alguns problemas para fazer", "até você mudar de lado", título "Qual é o seu peso?" | **NÃO RESOLVIDO** | Iguais. |
| Toque: botões de exemplo e deslizantes pequenos | **NÃO CONFERIDO** nesta rodada (não medi de novo; nas capturas parecem iguais). |
| "243 estados de saúde"; "Coeficientes da tarifa" | **NÃO RESOLVIDO** | Iguais. |

Nenhum dos itens abertos faz a Dona Cida travar ou entender errado; por isso continuam como polimento.

## NOTAS (0–10 por critério)

| Critério | Nota | Comentário |
|---|---|---|
| Clareza da linguagem | 8,5 | Igual à rodada 3. Pesam o quadro do limiar e a limitação 3, que ficou mais longa. |
| Termos explicados | 9,5 | Era 9. "Equidade" resolvida. Sobram só jargões leves. |
| Uso dos interativos sem ajuda | 9 | Os quatro funcionam sozinhos. O texto novo de "escolha de prioridade" é claro, mas o selo ao lado o contradiz. |
| Jogo (duração e diversão) | 8,5 | Era 9. 11 minutos e divertido; desce meio ponto porque a última reunião trava em cerca de 1 de cada 3 partidas de quem diz "sim" a tudo. |
| Compreensão (acertos de 5) | 10 | 5 de 5, e a pergunta de controle certa. |

## Teste de compreensão — respostas da Dona Cida e correção

1. **"Dois QALYs. Quatro anos vezes 0,5. O site dá o exemplo '2 anos com peso 0,5 = 1 QALY'; aqui é o dobro."** Certo.
2. **"Não é o médico, nem o governo, nem o paciente sozinho. Pesquisadores entrevistaram gente comum, 9.148 pessoas em quatro capitais, perguntando quantos anos de vida trocariam para ter saúde plena. Das respostas saiu uma tabela, a tarifa. O paciente só marca as cinco respostas do questionário e a tabela dá o peso."** Certo.
3. **"60 mil dividido por 2 dá R$ 30 mil por QALY. Fica abaixo dos R$ 40 mil de referência da Conitec. Mas a referência orienta, não decide sozinha."** Certo (número e comparação).
4. **"Dá para pôr vacina, prótese e remédio de câncer na mesma escala; sem isso ganharia quem tem mais voz. E lembra de quem não está na sala, os pacientes dos serviços que perderiam dinheiro."** Certo.
5. **"Uma: a conta não vê quem ganha, se é quem já tem bom acesso ou o ribeirinho. Outra: quem tem deficiência ou doença crônica soma menos QALYs pelos mesmos anos de vida; os críticos chamam de dupla penalização. Quem defende responde que o peso é do estado de saúde, não da pessoa, que ninguém 'vale' 0,5. Na prática, a Conitec aceita o custo por ano de vida ganho quando o QALY não serve, e admite até 3 vezes o valor para doença de população pobre."** Certo (duas limitações, uma resposta e duas práticas).

Controle — "O QALY diz quanto vale a vida de uma pessoa?" **"Não. 'O valor de referência não é preço de ninguém.' É uma estimativa de quanto custa para o sistema produzir um ano de vida saudável, e serve para comparar usos do mesmo dinheiro."** Certo. A frase nova sobre o Supremo não atrapalha essa leitura.

**Resultado: 5 de 5.**

## Tempo e leitura do jogo (partida padrão nº 909)

| Trecho | aprovando o que cabe | só o que fica na referência |
|---|---|---|
| Tela inicial, opções fechadas | 137 | 137 |
| Reunião 1 / ata 1 | 257 / 173 | 257 / 172 |
| Reunião 2 / ata 2 | 168 / 117 | 168 / 108 |
| Reunião 3 / ata 3 | 269 / 116 | 218 / 124 |
| Fim do mandato, detalhes fechados | 235 | 229 |
| **Total** | **1.472 palavras** | **1.413 palavras** |
| Decisões (7 votos + 3 encerramentos) | 10 | 10 |
| Tempo (150 palavras/min + 10 s por decisão) | **11,5 min** | **11,1 min** |

- A contagem inclui umas 50 palavras só para leitor de tela; o tempo real é uns 20 segundos menor.
- Nas outras 50 partidas: de 10,5 a 11,8 minutos (1.327 a 1.521 palavras).
- **Cabe em cerca de 10 minutos?** Sim: 11 minutos, e a tela promete "cerca de 10".
- **É divertido?** Sim. Na 909 saí "Plenário equilibrista" (6,4 / 7,1 / 5,7), com as cartas "Me prometeram um Natal. Obrigado por terem ouvido" e "Responderam com uma planilha". Mas a reunião 3, "A campanha na TV", que é o melhor dilema do jogo, veio travada: gastei R$ 370 milhões nas duas primeiras, sobraram R$ 50 milhões, e os pedidos custavam R$ 180 e R$ 60 milhões. Li 269 palavras e só pude apertar "Encerrar". O aviso novo explica bem o que houve; ainda assim, o fim perde a graça.
- **Entende os três jurados?** Sim. A fala nova do Contador ("+5.000 QALYs em relação à rede de saúde (hipótese do jogo)") combina com a legenda do painel ("QALYs a mais (ou a menos) do que a rede de saúde renderia").
- **Termos sem explicação no jogo:** nenhum que trave. O aviso novo usa "custo de oportunidade" sem explicar dentro do jogo (está na Parte 1 do guia); quem entra direto pelo botão "Jogar" não leu.

## Termos técnicos sem explicação na primeira vez (releitura completa)

Técnico central, sem explicação: **nenhum**.

Jargão leve, que ela atravessa pelo contexto (polimento):
- "quem deve valorar?" (resultado do interativo 3);
- "maximizar a saúde total" (limitação 8);
- "tecnologia dominante" / "tecnologia nova é dominada" (vereditos do interativo 4; "tecnologia" e "dominante" são explicados antes, na Parte 4);
- "Coeficientes da tarifa" (interativo 2, recolhido);
- "243 estados de saúde" (Parte 3; "estado de saúde" nunca é definido);
- "modelo estatístico" (Parte 3); "evidências" (limitação 2); "réplica" (limitação 3, frase nova); "custo de oportunidade" no aviso do jogo; "sanitarista" e "terapia gênica" (jogo).

Frases novas conferidas:
- Limitação 3, "argumento de imparcialidade": vem explicado na hora ("que regra cada um escolheria sem saber se terá ou não uma deficiência"). Bom.
- Limitação 8, Supremo: "fixou condições para o fornecimento de medicamentos que não estão nas listas do SUS; uma delas é mostrar que a decisão da Conitec de não incluir o medicamento é ilegal". Ela entende. "As listas do SUS" passa pelo contexto.

Conferidos e explicados no lugar: QALY/AVAQ, peso, utilidade, EQ-5D, valoração, tarifa, troca de tempo, aposta padrão, experimento de escolha, custo de oportunidade, RCEI/ICER, incremental, custo-efetividade, dominante, dominado, limiar, Conitec, tecnologia, incorporar, endêmica, ultrarrara, terapia gênica, impacto orçamentário, NICE, PIB per capita, taxa de desconto, consulta pública, dupla penalização, evLY, cuidados paliativos, regra do resgate, DALY, WELLBY, multicritério, equidade, análise distributiva, Perspectiva do Paciente.

## PROBLEMAS

### Bloqueante

Nenhum.

### Importante

Nenhum.

### Polimento — novos, criados pelas últimas correções

- **[POLIMENTO]** Interativo 4, selo `#rcSelo` com o limite de R$ 120 mil (teste: atual 0 e 0; novo 80.000 e 1) · O selo verde diz "abaixo da referência", e o texto logo abaixo diz "Fica abaixo do limite de R$ 120 mil [...], mas **acima da referência de R$ 40 mil**". Os dois aparecem na mesma tela (captura `rc-prioridade.png` no meu scratchpad). O texto é claro e ela entende por ele, mas o selo diz o contrário. · Correção: nesse caso o selo vira "dentro do limite de 3 vezes" (ou "acima da referência, dentro do limite"), de preferência em outra cor que não o verde.
- **[POLIMENTO]** Interativo 4, veredito com o limite de R$ 120 mil e custo por QALY até R$ 40 mil (teste: 30.000 e 1; também o exemplo "Prótese de quadril") · "Fica abaixo do valor de referência de R$ 120 mil". O site inteiro ensina que o valor de referência é R$ 40 mil e que R$ 120 mil é o limite para situações especiais; o próprio texto novo usa "limite de R$ 120 mil". · Correção: nesse caso, manter "abaixo do valor de referência de R$ 40 mil".
- **[POLIMENTO]** Interativo 4, custo por QALY igual à referência (teste: 40.000 e 1) · "o gasto rende mais saúde (1,00 QALYs) do que o mesmo dinheiro renderia em outro lugar (1,00)": diz "mais" e mostra dois números iguais. Também "1,00 QALYs" no plural. · Correção: no empate, "rende a mesma saúde"; e "1,00 QALY".
- **[POLIMENTO]** Jogo, última reunião travada · Em 9 de 26 partidas de quem aprova tudo o que cabe (códigos 909, 7, 55, 303, 505, 808, 1999, 8080, 9999), a reunião 3 vem com todos os pedidos marcados "não cabe nesta reunião". Aprovando só o que fica na referência, 0 de 26. O aviso novo é bom, mas (a) diz "O orçamento acabou" com o painel mostrando "R$ 50 milhões restam"; (b) a Praça ainda desconta ("Faltou dinheiro para 'Genevida', e a recusa repercutiu. (−9)"); (c) quem diz "sim" a tudo, que é o jeito mais provável de uma leiga jogar, perde o dilema final. · Correção: no aviso, "O dinheiro que sobrou (R$ 50 milhões) não paga nenhum pedido desta reunião"; não descontar a Praça por recusa forçada; e, se der, garantir na última reunião um pedido que caiba, ou avisar na ata da reunião anterior "Restam R$ 50 milhões para a última reunião".
- **[POLIMENTO]** Jogo, aviso novo · "É o custo de oportunidade aparecendo" usa o termo sem explicar dentro do jogo. · Correção: "É o custo de oportunidade aparecendo: o que foi gasto antes não está mais aqui."
- **[POLIMENTO]** Jogo, jornal, bônus de coerência · Na partida 909 aprovei um remédio de R$ 250 mil por QALY e fiquei sem dinheiro para o teste de R$ 15 mil por QALY; o jornal diz "o comitê foi coerente nas suas escolhas" e não comenta o que ficou de fora por falta de dinheiro. · Correção: quando houver recusa por falta de dinheiro, uma frase no jornal ("Faltou dinheiro para o Teste de HPV, que renderia 4.000 QALYs.").
- **[POLIMENTO]** Limitação 3, "O que responde quem defende" · Com as duas frases novas, o parágrafo tem oito ideias e quatro citações. · Correção: quebrar em dois parágrafos, o segundo começando em "Um artigo de autores favoráveis...".

### Polimento — abertos de rodadas anteriores

- **[POLIMENTO]** Interativo 3, resultado · "quem deve valorar?" · Correção: "quem deve dar os pesos?".
- **[POLIMENTO]** Interativo 4, vereditos · "tecnologia dominante", "a tecnologia nova é dominada pela atual". · Correção: "tratamento dominante", "o tratamento novo é dominado pelo atual".
- **[POLIMENTO]** Interativo 4, campo de custo · "26,000" vira 26 reais sem aviso. · Correção: vírgula seguida de três dígitos no custo conta como milhar, ou pergunta.
- **[POLIMENTO]** Jogo, cartões · "força dos estudos" sem dizer para que serve. · Correção: na ata "Agora, com a régua", "A 'força dos estudos' diz o quanto dá para confiar nos QALYs prometidos."
- **[POLIMENTO]** Jogo, painel do fim · Contador e Praça mudam entre a última ata e o fim (909: +1.730 → +2.312; 49 → 57) sem frase. · Correção: linha fixa, "O painel agora mostra o que aconteceu de verdade, não o prometido, e a repercussão final."
- **[POLIMENTO]** Jogo, notas finais · sem dizer o que é nota boa. · Correção: uma palavra sob cada nota (baixa / regular / alta).
- **[POLIMENTO]** Limitação 8 · "maximizar a saúde total". · Correção: "buscar o maior total de saúde".
- **[POLIMENTO]** Parte 4, quadro do limiar · ainda o parágrafo mais pesado. · Correção: fechar com "Em resumo: ninguém sabe ao certo se R$ 40 mil é o número certo; pode ser alto demais."
- **[POLIMENTO]** Parte 4, lista "Alguns detalhes que costumam se perder" · quinto item com dois assuntos. · Correção: separar a incerteza.
- **[POLIMENTO]** Limitação 3, "(42 U.S.C. § 1320e-1)" e limitação 2, "(42 U.S.C. § 1320f-3)" no meio do texto. · Correção: "(lei americana de 2010)" e "(lei americana de 2022)", com o link.
- **[POLIMENTO]** Interativo 3 · "tem alguns problemas para fazer", "até você mudar de lado", título "Qual é o seu peso?". · Correção: "para fazer as atividades do dia a dia"; "até você preferir ficar com os 10 anos"; "Que peso você daria?".
- **[POLIMENTO]** Parte 3 e interativo 2 · "243 estados de saúde"; "Coeficientes da tarifa". · Correção: "243 combinações de respostas, chamadas estados de saúde"; "Números da tarifa".

## O QUE ESTÁ BOM (para não ser desfeito)

- **O cartão "Pesos de justiça (equidade) e análise distributiva"** e a entrada "Equidade" do glossário: curtos e na língua dela.
- **O texto novo da "escolha de prioridade"** no interativo 4: "Aceitar, neste caso, é uma escolha de prioridade (doença rara, grave, de crianças), não um resultado da conta." É a frase que faltava para entender o limite de 3 vezes.
- **A caixa "Saúde que o dinheiro poupado pode render"** quando o tratamento poupa dinheiro, e a nota "o custo a mais dividido por R$ 40 mil, sempre, mesmo quando você escolhe o limite de R$ 120 mil".
- **"Fica acima até do limite de R$ 120 mil admitido em situações específicas"** (remédio de câncer e doença rara com o limite maior).
- **A frase do bônus:** "Desde que a régua apareceu, o comitê foi coerente nas suas escolhas."
- **O aviso da reunião travada**, que antes não existia, e "Faltou dinheiro para..." no lugar de "Recusou...".
- **A fala do Contador** igual à legenda do painel, com "(hipótese do jogo)".
- **A explicação colada do argumento de imparcialidade** na limitação 3 e a frase do Supremo na limitação 8, que não desfaz "O valor de referência não é preço de ninguém".
- **A partida padrão de 3 reuniões e 1.400 palavras.** Não aumentar.
- **A tela inicial do jogo**, a ata "Agora, com a régua", "Fora da conta" / "O que a régua mostrou" com o link para a limitação, e as cartas do jornal.
- **As explicações de meia linha da Parte 4**, o parêntese da consulta pública, o aviso da Parte 1 sobre o orçamento ser decisão política, as ressalvas das vantagens, o formato em quatro partes das limitações e "O que fica de pé dos dois lados".
- **Interativos 1, 2 e 3** como estão; os campos já formatados e a mensagem de erro com exemplos no interativo 4.
- **Sem rolagem lateral a 375 px e sem erro de script** no guia e nas 52 partidas.
