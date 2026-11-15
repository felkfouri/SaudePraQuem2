# Parecer do Juiz A — Leiga (Dona Cida) · Rodada 3

VEREDITO: REPROVA

Motivo em uma linha: sobra 1 IMPORTANTE, o menor possível. Dos três termos que pedi na rodada 2, dois foram explicados ("consulta pública" e "deslocar"); "equidade" continua igual no título de um cartão da Parte 7, sem explicação e fora do glossário. O meu critério manda reprovar por termo técnico sem explicação na primeira vez. A correção é de meia linha. Tudo o mais é polimento, e o site está bom.

Nota sobre o peso desse item: a Dona Cida não desiste nem entende errado por causa dele; ela passa por cima do cartão sem saber o que é "peso de equidade". Mantive como IMPORTANTE porque o critério escrito ("Reprova se algum termo técnico aparece sem explicação na primeira vez") não deixa margem, e porque é o mesmo item que classifiquei assim na rodada 2 e não foi mexido. Corrigido isso, eu aprovaria sem pedir mais nada.

## Como testei

- Li o guia inteiro no texto renderizado a 375 px (Playwright, 375×740, toque ligado) e vi capturas `375-*.png` da rodada 3 (desenhe, rcei, limitações, alternativas, jogo-2-reunião), além de capturas minhas.
- Usei os quatro interativos: todos os exemplos prontos do 1, com e sem desconto, toque no gráfico nas duas vidas; questionário do 2 (estado 21132, pior estado, "Como a conta é feita"); três caminhos da troca de tempo no 3; no 4, os seis exemplos e os valores "26.000", "26000", "26 mil", "R$ 26.000,00", "26,000", vazio, "2.600.000", "abc", "6,5" e "6.5", e a referência de R$ 120 mil.
- Joguei duas partidas padrão completas (3 reuniões, normal, com tutorial): nº 2024 decidindo com o coração e nº 55 aprovando só o que cabia na referência. Depois rodei mais 64 partidas (32 códigos, dois jeitos de decidir) para medir tamanho e procurar reunião sem escolha.
- Teste de compreensão respondido antes de abrir o gabarito.
- O `index.html` não mudou durante a revisão (arquivo das 22:18 UTC de 13/11/2026). Nenhum erro de script e nenhuma rolagem lateral (largura medida: 375).
- Scripts e saídas em `/tmp/claude-0/-home-user-SaudePraQuem2/5d4dd7db-ca0e-5c47-9b10-f70b859cb0a6/scratchpad/juizA3/`.

## CONFERÊNCIA DA RODADA 2

### Importante (termos sem explicação)

| Termo | Situação | Evidência |
|---|---|---|
| "equidade" | **NÃO RESOLVIDO** | Parte 7, cartão: "**Pesos de equidade e análise distributiva** — Mantêm o QALY e acrescentam a pergunta 'para quem?'. É o tema do site Saúde para quem?". Título e corpo iguais aos da rodada 2. Não há entrada "Equidade" no glossário (24 termos conferidos). É a única ocorrência da palavra no site. |
| "consulta pública" | **RESOLVIDO** | Parte 5: "vão a consulta pública (um período em que qualquer pessoa pode opinar, pela internet, antes da decisão final)". Glossário: entrada "Consulta pública". No jogo, os depoimentos não trazem mais "na consulta pública" (agora "Dona Zefa, 71 anos"), e a tela inicial diz "o depoimento de alguém que veio opinar". |
| "deslocar saúde" | **RESOLVIDO** | Parte 4, quadro do limiar: "pode tirar de outros serviços mais saúde do que acrescenta". Seção Sobre: "'preço' da saúde que sai de outro lugar". A palavra "deslocar" não aparece mais em texto visível. |

Resultado do item: **EM PARTE** (2 de 3).

### Polimentos da rodada 2

| Item | Situação | Evidência |
|---|---|---|
| Interativo 1: "0,25" e "0,75" cortados | **RESOLVIDO** | Os rótulos começam 4 px dentro do desenho; letras de 13 px (eram 10,8). |
| Jogo: última reunião sem escolha | **NÃO RESOLVIDO** | Código 808 (e 1999), aprovando o que cabe na referência: reunião 3 com limite de R$ 60 milhões e pedidos de R$ 100 e R$ 70 milhões, os dois "não cabe nesta reunião". Sem aviso no alto; a Praça tira 9 ("Faltou dinheiro para..., e a recusa repercutiu"). Aconteceu em 2 de 66 partidas. |
| Jogo: "Dois pesos, duas medidas" contando a reunião sem régua | **RESOLVIDO** | Partida 2024: recusei a prótese (R$ 20 mil por QALY) e aprovei o Oncovita (R$ 200 mil) na reunião sem régua; não houve punição, e o jornal disse "O comitê foi coerente". |
| Jornal: "Estudo fraco, surpresa maior" com estudo "moderado" | **RESOLVIDO** | Agora: "Quanto menos firmes os estudos, maior a surpresa." Falta só o cartão dizer para que serve a "força dos estudos" (ver polimento). |
| Painel: números mudam no fim sem frase | **NÃO RESOLVIDO** | Partida 2024: atas somam −3.050; painel do fim, −3.793. Nesta partida o parágrafo "Na prática" ajuda; quando ele não aparece, nada liga os dois números. |
| Interativo 4: campos sem formatação; "26,000" | **EM PARTE** | Os exemplos agora preenchem "26.000", "2.600.000" e "1,05". "26,000" ainda vira 26 reais sem aviso (custo a mais "− R$ 5.974"). |
| Interativo 4: "Saúde que sai de outro lugar: +0,02" no exemplo melhor e mais barato | **NÃO RESOLVIDO** | Mesmo título, mesmo número. |
| Interativo 4: "a tecnologia nova" | **NÃO RESOLVIDO** | "a tecnologia nova é dominada pela atual"; "A tecnologia nova poupa dinheiro...". |
| Limitação 4: "o instrumento" | **RESOLVIDO** | "E o questionário funciona melhor do que se costuma dizer." |
| Interativo 3: "quem deve valorar?" | **NÃO RESOLVIDO** | "É essa a pergunta 'quem deve valorar?', que volta nas limitações." |
| Limitação 8: "maximizar a saúde total" | **NÃO RESOLVIDO** | "É uma objeção antiga a toda a ideia de maximizar a saúde total." |
| Quadro do limiar pesado | **EM PARTE** | A conclusão ficou clara ("tirar de outros serviços"); continua com duas estimativas e "entre 20% e 63% do PIB per capita", sem frase de resumo. |
| Lista "Alguns detalhes que costumam se perder" | **NÃO RESOLVIDO** | Cinco itens; o quinto ainda junta impacto orçamentário e incerteza. |
| Limitação 3, blocos longos e "(42 U.S.C. § 1320e-1)" | **NÃO RESOLVIDO** | Igual. |
| Restos da rodada 1 | **EM PARTE** | Resolvido: "Sua decisão sobre '...'" não aparece mais na tela (ficou só para leitor de tela). Abertos: notas finais sem "boa / regular / baixa"; interativo 3 ("tem alguns problemas para fazer", "até você mudar de lado", título "Qual é o seu peso?"); "Coeficientes da tarifa"; botões de exemplo com 31 px e controles deslizantes com 16 px; "243 estados de saúde" sem dizer o que é um estado. |

## NOTAS (0–10 por critério)

| Critério | Nota | Comentário |
|---|---|---|
| Clareza da linguagem | 8,5 | Igual à rodada 2. Pesam ainda o quadro do limiar e a limitação 3. |
| Termos explicados | 9 | Era 8. Sobra um termo técnico ("equidade") e três jargões leves. |
| Uso dos interativos sem ajuda | 9 | Era 8,5. Eixo do gráfico legível, campos já formatados. Os quatro funcionam sozinhos. |
| Jogo (duração e diversão) | 9 | Era 8,5. 11 minutos, sem jargão nos depoimentos, sem punição injusta na reunião sem régua. |
| Compreensão (acertos de 5) | 10 | 5 de 5, e a pergunta de controle certa. |

## Teste de compreensão — respostas da Dona Cida e correção

1. **"Dois QALYs. Quatro anos vezes 0,5. É a mesma conta do exemplo '2 anos com peso 0,5 = 1 QALY', em dobro."** Certo.
2. **"Não é o médico, nem o governo, nem o paciente sozinho. Os pesquisadores entrevistaram gente comum, 9.148 pessoas em quatro capitais, perguntando quantos anos de vida trocariam para viver com saúde plena. Das respostas saiu uma tabela, a tarifa. O paciente marca cinco respostas e a tabela dá o número."** Certo.
3. **"60 mil dividido por 2 dá R$ 30 mil por QALY. Fica abaixo dos R$ 40 mil da Conitec. Pela regra passa, mas a referência orienta, não decide sozinha."** Certo (número e comparação).
4. **"Dá para comparar vacina, prótese e remédio de câncer na mesma escala. Sem isso, ganha quem tem mais voz. E conta junto viver mais e viver melhor."** Certo.
5. **"Uma: quem é mais velho soma menos QALYs, porque tem menos anos pela frente. Outra: a conta não vê quem ganha, se é quem já tem acesso ou o ribeirinho. Quem defende diz que a conta não pergunta a idade de ninguém, só mede o ganho. Na prática, a Conitec aceita até 3 vezes o valor para doença de criança, doença grave e doença de população pobre."** Certo (duas limitações, uma resposta e uma prática).

Controle — "O QALY diz quanto vale a vida de uma pessoa?" **"Não. O site diz: 'O valor de referência não é preço de ninguém'. Serve para comparar onde o mesmo dinheiro rende mais saúde. E o peso é de um estado de saúde, não de uma pessoa: ninguém 'vale' 0,5."** Certo.

**Resultado: 5 de 5.**

## Tempo e leitura do jogo (partida padrão)

| Trecho | nº 2024 (com o coração) | nº 55 (só o que cabe na referência) |
|---|---|---|
| Tela inicial, opções fechadas | 137 | 137 |
| Reunião 1 / ata 1 | 257 / 173 | 257 / 174 |
| Reunião 2 / ata 2 | 191 / 94 | 218 / 120 |
| Reunião 3 / ata 3 | 173 / 110 | 191 / 99 |
| Fim do mandato, detalhes fechados | 275 | 219 |
| **Total** | **1.410 palavras** | **1.415 palavras** |
| Decisões (7 votos + 3 encerramentos) | 10 | 10 |
| Tempo (150 palavras/min + 10 s por decisão) | **11,1 min** | **11,1 min** |

- A contagem inclui umas 50 palavras que não aparecem na tela (legendas para leitor de tela); o tempo real é uns 20 segundos menor.
- Nas outras 64 partidas: de 10,5 a 12,0 minutos.
- **Cabe em cerca de 10 minutos?** Sim: 11 minutos, e a tela promete "cerca de 10".
- **É divertido?** Sim. As duas partidas saíram bem diferentes: "Plenário de quem está pior" (Contador 0,6 / Ouvidora 10,0 / Praça 8,2), com a carta "Obrigado por terem ouvido" ao lado de "Minha mãe espera há dois anos por uma cirurgia de catarata"; e "Plenário da régua" (9,9 / 6,0 / 4,0), com "Responderam com uma planilha". A reunião "A campanha na TV" (terapia para 30 bebês contra o teste que salva mulheres "que ainda não sabem que estão doentes") é um dilema de verdade.
- **Entende os três jurados?** Sim, pela lista da tela inicial e pelas falas de cada ata.
- **Sempre tem escolha?** Nas duas partidas jogadas, sim. Em 2 de 66, a última reunião veio travada (polimento).
- **Termos sem explicação no jogo:** nenhum que trave. "Sanitarista" e "terapia gênica" (explicada no guia, não no jogo) passam pelo contexto.

## Termos técnicos sem explicação na primeira vez (releitura completa)

Técnico, sem explicação:
- **"equidade"** — Parte 7, título "Pesos de equidade e análise distributiva". É o IMPORTANTE.

Jargão leve, que ela atravessa pelo contexto (polimento):
- "quem deve valorar?" (resultado do interativo 3; o substantivo "valoração" é explicado, o verbo aparece só aqui);
- "maximizar a saúde total" (limitação 8);
- "Coeficientes da tarifa" (interativo 2, dentro de "Como a conta é feita", recolhido);
- "243 estados de saúde" (Parte 3: "estado de saúde" nunca é definido, mas o contexto resolve);
- "análise distributiva" (Parte 7: explicada antes, na limitação 1, com o nome completo "análise de custo-efetividade distributiva");
- "modelo estatístico" (Parte 3, passo 3); "evidências" (limitação 2); "sanitarista" (jogo).

Conferidos e explicados no lugar: QALY/AVAQ, peso, utilidade, EQ-5D, valoração, tarifa, troca de tempo, aposta padrão, experimento de escolha, custo de oportunidade, RCEI/ICER, incremental, custo-efetividade, dominante, dominado, limiar, Conitec, tecnologia, incorporar, endêmica, ultrarrara, terapia gênica, impacto orçamentário, NICE, PIB per capita, taxa de desconto, consulta pública, dupla penalização, evLY, cuidados paliativos, regra do resgate, DALY, WELLBY, multicritério, Perspectiva do Paciente.

## PROBLEMAS

### Bloqueante

Nenhum.

### Importante

- **[IMPORTANTE]** Parte 7, cartão "Pesos de equidade e análise distributiva" (`#alternativas`, linha 840 do HTML) · "equidade" aparece só aqui, no título, sem explicação; o corpo diz apenas "Mantêm o QALY e acrescentam a pergunta 'para quem?'"; não há entrada no glossário. Pedido na rodada 2, não mexido. · Correção (qualquer uma basta): trocar o título por "Pesos de justiça (equidade) e análise distributiva"; ou abrir o corpo com "Equidade é justiça na distribuição: olhar quem ganha e quem perde. Estes métodos mantêm o QALY e dão peso maior aos ganhos de quem está em pior situação." De preferência, mais uma entrada "Equidade" no glossário.

### Polimento

- **[POLIMENTO]** Jogo, última reunião sem escolha (código 808 ou 1999, aprovando só o que cabe na referência) · Reunião 3 com limite de R$ 60 milhões e pedidos de R$ 100 e R$ 70 milhões; ela lê uns 190 palavras, só pode apertar "Encerrar", e a Praça tira 9 pontos. · Correção: frase no alto ("O dinheiro acabou: o comitê não pode aprovar nada nesta reunião. Leia os pedidos que ficaram de fora.") e não descontar a Praça por recusa forçada.
- **[POLIMENTO]** Interativo 4, exemplo "Melhor e mais barato" · Caixa "Saúde que sai de outro lugar: +0,02", com a legenda "QALYs que o dinheiro poupado pode render em outro lugar": o título diz que sai, o número diz que entra. O mesmo no exemplo "Mais barato e um pouco pior" (+1,00). · Correção: nesses dois casos, título "Saúde a mais em outro lugar".
- **[POLIMENTO]** Interativo 3, resultado · "É essa a pergunta 'quem deve valorar?', que volta nas limitações." · Correção: "quem deve dar os pesos?", que é o título usado na Parte 3.
- **[POLIMENTO]** Interativo 4, vereditos · "a tecnologia nova é dominada pela atual", "A tecnologia nova poupa dinheiro", enquanto os campos dizem "Tratamento novo". · Correção: "o tratamento novo".
- **[POLIMENTO]** Jogo, jornal, parágrafo "Repercussão" (novo) · "O comitê foi coerente: nunca aprovou um pedido mais caro por QALY depois de recusar um mais barato, sem a justificativa da prioridade." Três negações e uma ressalva numa frase só; precisei reler. · Correção: "O comitê foi coerente: quando recusou um pedido, não aprovou depois outro que custava mais por QALY."
- **[POLIMENTO]** Jogo, cartões · "força dos estudos: forte / moderada / fraca" aparece em todo cartão a partir da reunião 2, e nada diz para que serve antes do jornal. · Correção: na ata "Agora, com a régua", acrescentar "A 'força dos estudos' diz o quanto dá para confiar nos QALYs prometidos."
- **[POLIMENTO]** Jogo, painel do fim · O Contador muda entre a última ata e o fim (partida 2024: de −3.050 para −3.793) sem frase que explique quando não há o parágrafo "Na prática". · Correção: uma linha fixa, "O painel agora mostra o que aconteceu de verdade, não o prometido."
- **[POLIMENTO]** Jogo, notas finais · "Contador 0,6 · Ouvidora 10,0 · Praça 8,2" sem dizer o que é nota boa. · Correção: uma palavra sob cada nota (baixa / regular / alta).
- **[POLIMENTO]** Interativo 4, campo de custo · "26,000" vira 26 reais sem aviso (custo a mais "− R$ 5.974"). · Correção: se o custo tiver vírgula seguida de três dígitos, tratar como milhar ou perguntar.
- **[POLIMENTO]** Limitação 8 · "toda a ideia de maximizar a saúde total". · Correção: "de buscar o maior total de saúde".
- **[POLIMENTO]** Parte 4, quadro "O limiar brasileiro mede o custo de oportunidade?" · Ainda é o parágrafo mais pesado do guia. · Correção: fechar com "Em resumo: ninguém sabe ao certo se R$ 40 mil é o número certo; pode ser alto demais."
- **[POLIMENTO]** Parte 4, lista "Alguns detalhes que costumam se perder" · O quinto item junta impacto orçamentário e incerteza. · Correção: separar a incerteza ou cortar o item "Os valores são de 2022".
- **[POLIMENTO]** Limitação 3, "O que responde quem defende" e "O que se faz na prática" · Seis e cinco ideias por parágrafo, com "(42 U.S.C. § 1320e-1)" no meio. · Correção: quebrar cada bloco em dois parágrafos; a citação vira "(lei americana de 2010)" com o link.
- **[POLIMENTO]** Interativo 3 · "tem alguns problemas para fazer" (fazer o quê?), "até você mudar de lado", e o título "Qual é o seu peso?" (lê-se como peso do corpo). · Correção: "tem alguns problemas para fazer as atividades do dia a dia"; "até você preferir ficar com os 10 anos"; "Que peso você daria?".
- **[POLIMENTO]** Toque · Botões de exemplo com 31 px de altura e controles deslizantes com 16 px (medidos). Funcionam, mas são pequenos para o dedo. · Correção: 40 px nos botões; área de toque maior nos deslizantes.
- **[POLIMENTO]** Parte 3 e interativo 2 · "243 estados de saúde" sem dizer o que é um estado; "Coeficientes da tarifa". · Correção: "243 combinações de respostas, chamadas estados de saúde"; "Números da tarifa".

## O QUE ESTÁ BOM (para não ser desfeito)

- **As duas correções de termo desta rodada:** o parêntese da consulta pública na Parte 5 ("um período em que qualquer pessoa pode opinar, pela internet, antes da decisão final") e "tirar de outros serviços mais saúde do que acrescenta" no quadro do limiar.
- **Os depoimentos do jogo sem "na consulta pública"** ("Dona Zefa, 71 anos"; "Carlos, 54 anos") e "o depoimento de alguém que veio opinar" na tela inicial.
- **A reunião sem régua não gera mais "dois pesos, duas medidas".** É justo: ela não tinha a conta.
- **"Quanto menos firmes os estudos, maior a surpresa"** no jornal.
- **Os campos do interativo 4 já formatados** ("26.000", "2.600.000", "1,05") e a mensagem de erro com exemplos.
- **O gráfico do interativo 1:** letras de 13 px, eixo inteiro, seletor "Sem / Com o tratamento" colado no gráfico, e as colunas da outra vida esmaecidas enquanto se desenha.
- **A partida padrão de 3 reuniões e 1.400 palavras.** Não aumentar.
- **A tela inicial do jogo** com os três jurados em uma linha cada, e o resto recolhido.
- **A ata "Agora, com a régua"**, as frases "Fora da conta" / "O que a régua mostrou" com o link para a limitação, e as cartas do jornal.
- **O painel do fim igual ao jornal**, com "pela hipótese do jogo (R$ 40 mil na rede = 1 QALY)".
- **As explicações de meia linha da Parte 4** (tecnologia, incorporar, endêmica, ultrarrara, terapia gênica, PIB per capita, impacto orçamentário).
- **O aviso da Parte 1** sobre o orçamento ser decisão política, **as ressalvas em cada vantagem** da Parte 5, **o formato em quatro partes das limitações** e **"O que fica de pé dos dois lados"**.
- **Limitação 8** ("O valor de referência não é preço de ninguém") e **limitação 3** ("ninguém 'vale' 0,5"): garantem a pergunta de controle.
- **Interativos 2 e 3** como estão: a frase "Um ano neste estado conta como 0,513 QALY. Dez anos assim somam 5,13 QALYs" e "Nem você nem a tabela estão errados".
- **Sem rolagem lateral a 375 px e sem erro de script** em toda a navegação e nas 66 partidas.
