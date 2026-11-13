# Parecer do Juiz A — Leiga (Dona Cida) · Rodada 2

VEREDITO: REPROVA

Motivo em uma linha: o bloqueante da rodada 1 (duração do jogo) foi resolvido e 7 dos 8 importantes também; sobra 1 IMPORTANTE, pequeno, que o meu critério manda tratar como motivo de reprovação: três termos técnicos continuam sem explicação na primeira vez ("equidade", "consulta pública" e "deslocar saúde"). São três correções de meia linha. Todo o resto é polimento.

## Como testei

- Li o guia inteiro no texto renderizado a 375 px (Playwright, 375×740, toque ligado) e vi as capturas `375-*.png` da rodada 2.
- Usei os quatro interativos: todos os exemplos prontos, desconto ligado em cada um, toque no gráfico nas duas vidas, questionário, três caminhos da troca de tempo, e no interativo 4 digitei "26.000", "26000", "26 mil", "R$ 26.000,00", "26,000", campo vazio, "2.600.000", "6,5" e "6.5".
- Joguei duas partidas padrão completas (3 reuniões, normal, com tutorial): nº 3141 decidindo com o coração e nº 777 aprovando o que cabia. Depois rodei mais 30 partidas com outros códigos só para medir tamanho e conferir se sempre há escolha.
- Teste de compreensão: respondi antes de abrir o gabarito.
- Aviso: o `index.html` foi alterado enquanto eu revisava (correções de outros juízes). Reli o texto e refiz os testes do jogo e dos interativos sobre o arquivo das 22:08 UTC de 13/11/2026; os números abaixo são dessa versão.
- Scripts e saídas em `/tmp/claude-0/-home-user-SaudePraQuem2/5d4dd7db-ca0e-5c47-9b10-f70b859cb0a6/scratchpad/juizA2/`.

## CONFERÊNCIA DA RODADA 1

### Bloqueante

| Item da rodada 1 | Situação | Evidência |
|---|---|---|
| Jogo levava 24 min e prometia "8 a 10" | **RESOLVIDO** | Partida padrão agora tem 3 reuniões. Medi 1.486 palavras (nº 3141) e 1.453 (nº 777): 11,1 e 10,7 minutos com as decisões. Em 32 partidas, de 1.392 a 1.560 palavras (10,4 a 11,6 min). A promessa virou "Cerca de 10 minutos", e as opções longas dizem "4 (15 min)" e "6 (20 min)". A lista repetida do fim ficou recolhida ("Rever caso a caso"). |

### Importantes

| Item da rodada 1 | Situação | Evidência |
|---|---|---|
| Jogo: termos sem explicação (incorporar, evidência, dossiê, tecnologias, rede, "mi", consulta pública, secretaria-executiva) | **RESOLVIDO EM PARTE** | Resolvidos: "incorporar, isto é, passar a oferecer" na tela inicial; "evidência" virou "força dos estudos: forte / moderada"; "dossiê" sumiu ("rendeu menos do que prometia"); "pedidos aprovados" no lugar de "tecnologias incorporadas"; "milhões" por extenso; "rede de saúde". Falta: "na consulta pública" aparece em todo depoimento (7 vezes por partida) sem dizer o que é. Entra no IMPORTANTE desta rodada. |
| Jogo: metade da partida sem escolha possível | **RESOLVIDO EM PARTE** | Nas duas partidas jogadas houve escolha em todas as reuniões. Há limite por reunião ("em cada uma só dá para gastar até metade") e a Praça agora diz "Faltou dinheiro para...". Mas em 4 das 32 partidas de teste a última reunião veio com os dois pedidos travados (códigos 9999, 808, 909, 1618, aprovando tudo o que cabe), sem aviso no alto, e a Praça ainda tira pontos (−9). Passou a polimento: é uma reunião, não três. |
| Jogo: painel "Contador −150" contra jornal "saldo positivo" | **RESOLVIDO** | No fim o painel mostra o mesmo número do jornal: partida 3141, painel −5.649; jornal 4.851 contra 10.500 (diferença −5.649). Legenda nova: "QALYs a mais (ou a menos) do que a rede de saúde renderia, pela hipótese do jogo". A fala repetida do Contador sumiu ("empate" quando nada foi gasto). |
| Guia: lista de termos sem explicação | **RESOLVIDO EM PARTE** | Resolvidos: doença endêmica ("isto é, sempre presente em uma região"); ultrarraras ("até 1 pessoa em 50 mil"); terapia gênica; "Tecnologia, aqui, é qualquer remédio, vacina..."; "incorporar é passar a oferecer"; ICER (agora o nome do instituto por extenso); "premissas" virou "suposições"; WELLBY traduzido; multicritério explicado; "cuidados paliativos, que aliviam o sofrimento no fim da vida"; "quadrante" virou "caso"; "evidência fraca" saiu da Parte 5. Faltam: "equidade" (título na Parte 7), "deslocar mais saúde do que acrescenta" (quadro do limiar, Parte 4), "o instrumento" (limitação 4), "quem deve valorar?" (interativo 3). |
| Interativo 1: frase falsa com o desconto | **RESOLVIDO** | Com desconto, exemplo "Remédio que prolonga a vida": "acrescenta 1,20 QALYs. A pessoa vive 3 anos a mais... Com o desconto de 5% ao ano, os QALYs de cada ano no futuro contam um pouco menos". Anos reais e inteiros; "anos de vida ganhos: +3" não muda. |
| Interativos 1 e 4: letras de 7 px nos gráficos; instrução longe do gráfico | **RESOLVIDO EM PARTE** | Letras medidas agora: 10,8 px nos dois gráficos (pedi 12). Dá para ler. O seletor "Sem / Com o tratamento" e a dica "Toque na altura que quiser" ficaram colados em cima do gráfico (85 px). Os rótulos do plano não ficam mais ilegíveis sobre a linha. Sobrou um defeito novo: "0,25" e "0,75" cortados na borda (ver polimento). |
| Interativo 4: "26.000" virava 26 reais | **RESOLVIDO** | Digitei "26.000": custo a mais + R$ 20.000, R$ 20.000 por QALY. "26000" e "R$ 26.000,00" também funcionam. "26 mil" e campo vazio mostram "Preencha os quatro campos só com números. Exemplos: 26000 ou 26.000 para o custo; 1,05 para os QALYs." Não aparece mais "R$ ∞". |
| Interativo 4: caixa "Saúde deslocada" e seletor cortado | **RESOLVIDO** | A caixa chama "Saúde que sai de outro lugar", com a legenda "QALYs que o mesmo dinheiro renderia em outro lugar (hipótese)". Opções do seletor: "R$ 40 mil por QALY" e "R$ 120 mil por QALY (3 vezes)", cabem inteiras. |

### Polimento da rodada 1

- "caiu 1 pontos": **resolvido** ("+1 ponto", "confiança −1").
- Linha "Sua decisão sobre '...'" repetida nos cartões: **não resolvido** (ainda visível).
- Notas sem dizer se são boas: **não resolvido**.
- Interativo 3, "tem alguns problemas para fazer" e "até você mudar de lado": **não resolvido**.
- Título "Qual é o seu peso?": **não resolvido**.
- "Coeficientes da tarifa": **não resolvido**.
- Botões de exemplo com 31 px e controles deslizantes com 16 px: **não resolvido** (medi de novo: 31 e 16).
- Quadro do limiar com fecho simples: **em parte** (fecha com "É um debate em aberto", mas a frase anterior ainda usa "deslocar").
- Limitação 3, "O que se faz na prática" num parágrafo só, com "(42 U.S.C. § 1320e-1)": **não resolvido**.
- Citações no meio dos parágrafos: **não resolvido** (aceitável).
- "243 estados de saúde" sem dizer o que é um estado: **não resolvido**.
- Capturas sem os interativos: **resolvido** (`375-desenhe.png` e `375-rcei.png` mostram os interativos).

## NOTAS (0–10 por critério)

| Critério | Nota | Comentário |
|---|---|---|
| Clareza da linguagem | 8,5 | As Partes 1, 4 e 5 ficaram melhores. Ainda pesam o quadro do limiar e o "na prática" da limitação 3. |
| Termos explicados | 8 | Era 6. Quase tudo foi explicado no lugar certo, e o glossário cresceu. Sobram três termos técnicos sem explicação e dois ou três jargões leves. |
| Uso dos interativos sem ajuda | 8,5 | Era 6,5. As duas armadilhas sumiram. Os quatro funcionam sozinhos. |
| Jogo (duração e diversão) | 8,5 | Era 5. Cabe em cerca de 11 minutos, é divertido, e dá vontade de jogar de novo com outro código. |
| Compreensão (acertos de 5) | 10 | 5 de 5, e a pergunta de controle certa. |

## Teste de compreensão — respostas da Dona Cida e correção

1. **"Dois. Quatro anos vezes 0,5 dá 2 QALYs. O site dá um exemplo igual: 2 anos com peso 0,5 é 1 QALY."** Certo.
2. **"Não é o médico, nem o governo, nem o paciente sozinho. Entrevistaram gente comum, 9.148 pessoas no Brasil, perguntando quantos anos de vida trocariam para ficar com saúde. Das respostas fizeram uma tabela, a tarifa. O paciente só marca as cinco respostas."** Certo.
3. **"60 mil dividido por 2 dá 30 mil por QALY. Fica abaixo dos 40 mil da Conitec. Mas o site diz que a referência orienta, não decide sozinha."** Certo (número e comparação).
4. **"Põe vacina, prótese e remédio de câncer na mesma medida. Sem isso ganha quem tem mais voz."** Certo.
5. **"Uma: os mais velhos somam menos, porque têm menos anos pela frente. Outra: o questionário só tem cinco perguntas, não pergunta de ouvir nem de enxergar, e a filha que larga o emprego para cuidar da mãe não entra. Quem defende diz que a conta não pergunta a idade de ninguém, só mede o ganho. Na prática, a Conitec aceita um valor maior para doenças de criança e ouve pacientes e cuidadores nas reuniões."** Certo.

Controle — "O QALY diz quanto vale a vida de uma pessoa?" **"Não. O valor de referência não é preço de ninguém; serve para comparar onde o mesmo dinheiro rende mais saúde."** Certo.

**Resultado: 5 de 5.**

## Tempo e leitura do jogo (partida padrão)

| Trecho | nº 3141 (com o coração) | nº 777 (aprovando o que cabe) |
|---|---|---|
| Tela inicial, opções fechadas | 134 | 134 |
| Reunião 1 / ata 1 | 266 / 173 | 266 / 174 |
| Reunião 2 / ata 2 | 214 / 140 | 214 / 112 |
| Reunião 3 / ata 3 | 174 / 145 | 195 / 137 |
| Fim do mandato, detalhes fechados | 240 | 221 |
| **Total** | **1.486 palavras** | **1.453 palavras** |
| Decisões | 7 | 6 |
| Tempo (150 palavras/min + 10 s por decisão) | **11,1 min** | **10,7 min** |

- "Rever caso a caso", se ela abrir: mais umas 360 palavras (2,4 min). Está recolhido, então não conta.
- **Cabe em cerca de 10 minutos?** Sim. Fica entre 10,5 e 11,5 minutos, e a tela diz "cerca de 10".
- **É divertido?** Sim. Os depoimentos continuam ótimos ("Ninguém me prometeu cura. Me prometeram um Natal."), a ata "Agora, com a régua" continua sendo o melhor momento, e o jornal mudou de manchete e de cartas entre as duas partidas ("Responderam com uma planilha" dói). As duas partidas deram estilos diferentes: "Plenário de quem está pior" (0,7 / 7,1 / 6,2) e "Plenário da conta" (10,0 / 6,0 / 5,6).
- **Entende o que os três jurados querem?** Sim, pela lista de três linhas da tela inicial e pelas falas de cada ata ("+2 pontos por atender quem estava pior"; "Aprovou 'Oncovita', que mobilizou muita gente (+12)").
- **Sempre tem escolha de verdade?** Nas duas partidas jogadas, sim. Em 4 de 32 partidas de teste a terceira reunião veio sem escolha (ver polimento).
- **Termos sem explicação no jogo:** "consulta pública" (ver o IMPORTANTE). "Sanitarista" passa pelo contexto.

## PROBLEMAS

### Bloqueante

Nenhum.

### Importante

- **[IMPORTANTE]** Guia e jogo, três termos técnicos sem explicação na primeira vez (o meu critério reprova por isso) ·
  1. **"equidade"**: Parte 7, título do cartão "Pesos de equidade e análise distributiva". Não é explicada em lugar nenhum e não está no glossário. O corpo só diz "acrescentam a pergunta 'para quem?'".
  2. **"consulta pública"**: Parte 5 ("os relatórios são públicos e vão a consulta pública"), Parte 7, e em todos os depoimentos do jogo ("Dona Zefa, 71 anos, na consulta pública"). Só a nota "Agenda" do jornal, que nem sempre aparece, diz "Qualquer pessoa pode opinar". Não está no glossário.
  3. **"deslocar"**: Parte 4, quadro "O limiar brasileiro mede o custo de oportunidade?": "um tratamento aprovado perto do limiar pode deslocar mais saúde do que acrescenta". É a conclusão do parágrafo mais difícil do guia, e o verbo nunca é explicado. A frase gêmea, logo acima, já foi consertada ("tira do sistema mais saúde do que acrescenta"). "Saúde deslocada" também aparece na seção Sobre.
  · Correção: (1) "Pesos de justiça (equidade) e análise distributiva", ou no corpo "equidade é justiça na distribuição: olhar quem ganha e quem perde", mais a entrada no glossário; (2) na Parte 5, "vão a consulta pública (um período em que qualquer pessoa pode opinar antes da decisão)", mais a entrada no glossário; no jogo basta uma vez, na caixa "Como jogar" da reunião 1: "Os depoimentos vêm da consulta pública, quando qualquer pessoa pode opinar"; (3) "pode tirar do sistema mais saúde do que acrescenta" e, no Sobre, "a saúde que sai de outro lugar".

### Polimento

- **[POLIMENTO]** Interativo 1, gráfico `#dvChart` a 375 px (defeito novo, veio com o aumento das letras) · Os números "0,25" e "0,75" do eixo começam 2,6 px fora do desenho e aparecem cortados: lê-se ",75" e ",25" (captura `juizA2/dv2.png`). · Correção: aumentar a margem esquerda do SVG em uns 6 px na versão estreita.
- **[POLIMENTO]** Jogo, última reunião sem escolha · Códigos 9999, 808, 909 e 1618 (aprovando tudo o que cabe): a reunião 3 chega com limite de R$ 60 milhões e dois pedidos de R$ 70 e R$ 100 milhões. Os dois vêm marcados "não cabe nesta reunião", ela lê uns 190 palavras e só aperta "Encerrar". A Praça desconta 9 pontos ("Faltou dinheiro para..., e a recusa repercutiu"). · Correção: quando nada cabe, pôr uma frase no alto ("O dinheiro acabou: o comitê não pode aprovar nada nesta reunião. Leia os pedidos que ficaram de fora.") e não descontar a Praça, ou descontar menos.
- **[POLIMENTO]** Jogo, Praça, "Dois pesos, duas medidas" · Partida 3141, ata 2: "aprovou 'Vacina...' depois de recusar 'Proteção contra bronquiolite para bebês', que custava menos por QALY (−5)". A recusa foi na reunião 1, jogada sem a régua: ela não tinha como saber o custo por QALY. · Correção: não contar as recusas da reunião sem régua nessa regra, ou dizer "na primeira reunião você não tinha a régua; agora tem".
- **[POLIMENTO]** Jogo, jornal · "'Pancrevit' rendeu menos do que prometia (389 QALYs, contra 480). Estudo fraco, surpresa maior." No cartão, a força dos estudos do Pancrevit era "moderada", não fraca. E o cartão nunca diz para que serve a "força dos estudos". · Correção: "Quanto mais fracos os estudos, maior a chance de surpresa", e uma linha na caixa "Como jogar" da reunião 2.
- **[POLIMENTO]** Jogo, painel · Na partida 777 o Contador passa de +5.120 (ata 3) para +5.487 (fim) e a Praça de 48 para 56 sem uma frase que ligue os dois números (não houve o parágrafo "Na prática"). · Correção: uma linha no fim, "o painel agora mostra o que aconteceu de verdade, não o prometido".
- **[POLIMENTO]** Interativo 4, campos · Os exemplos prontos enchem os campos com "26000", "2600000" e "1.05", enquanto a mensagem de erro ensina "26.000" e "1,05". "2600000" é difícil de ler. Digitar "26,000" ainda vira 26 reais sem aviso (pouco provável, mas acontece). · Correção: preencher os exemplos já formatados ("26.000", "2.600.000", "1,05"); se o custo novo for 100 vezes menor que o atual, perguntar "é isso mesmo?".
- **[POLIMENTO]** Interativo 4, exemplo "Melhor e mais barato" · A caixa "Saúde que sai de outro lugar" mostra "+0,02": o título diz que sai, o número diz que entra. · Correção: nesse caso, trocar o título por "Saúde a mais em outro lugar".
- **[POLIMENTO]** Interativo 4, vereditos · "a tecnologia nova é melhor nas duas coisas", enquanto os campos dizem "Tratamento novo". "Tecnologia" já foi explicada na Parte 4, mas a troca de palavra não ajuda. · Correção: "o tratamento novo".
- **[POLIMENTO]** Limitação 4 · "E o instrumento funciona melhor do que se costuma dizer." · Correção: "E o questionário funciona melhor...".
- **[POLIMENTO]** Interativo 3, resultado · "É essa a pergunta 'quem deve valorar?'". · Correção: "quem deve dar os pesos?", que é o título usado na Parte 3.
- **[POLIMENTO]** Limitação 8 · "É a objeção mais antiga a toda a ideia de maximizar a saúde total." · Correção: "a toda a ideia de buscar o maior total de saúde".
- **[POLIMENTO]** Parte 4, quadro do limiar · Continua sendo o trecho mais pesado: duas estimativas, "entre 20% e 63% do PIB per capita". · Correção: fechar com "Em resumo: ninguém sabe ao certo se R$ 40 mil é o número certo; pode ser alto demais."
- **[POLIMENTO]** Parte 4, lista "Alguns detalhes que costumam se perder" · Cinco itens longos seguidos, logo depois de outra lista. O quinto junta duas ideias (impacto orçamentário e incerteza). · Correção: separar a incerteza em item próprio, ou cortar o item "Os valores são de 2022".
- **[POLIMENTO]** Limitação 3, "O que se faz na prática" · Cinco ideias num parágrafo (proposta de Nord, lei de 2010, instituto, evLY, Conitec), com "(42 U.S.C. § 1320e-1)" no meio. O acréscimo desta rodada em "O que responde quem defende" ("Um artigo de autores favoráveis à medida examinou a objeção... Os críticos não aceitam essa resposta, e o debate continua") deixou esse bloco com seis frases. · Correção: quebrar cada bloco em dois parágrafos; a citação de lei vira "(lei americana de 2010)" com o link.
- **[POLIMENTO]** Itens da rodada 1 ainda abertos (lista na conferência acima): "Sua decisão sobre '...'" repetido nos cartões; notas finais sem "boa / regular / baixa"; interativo 3 ("tem alguns problemas para fazer", "até você mudar de lado", título "Qual é o seu peso?"); "Coeficientes da tarifa"; botões de exemplo com 31 px e controles deslizantes com 16 px; "243 estados de saúde" sem dizer o que é um estado.

## O QUE ESTÁ BOM (para não ser desfeito)

- **A partida padrão de 3 reuniões.** É o tamanho certo: uma reunião sem a régua, a virada "Agora, com a régua", duas reuniões com dilema, o jornal. Não aumentar.
- **A tela inicial do jogo em 134 palavras**, com os três jurados em uma linha cada e o resto recolhido em "Como cada jurado faz a conta" e "O que é simplificação neste jogo".
- **"incorporar, isto é, passar a oferecer"** logo na primeira frase do jogo, e "força dos estudos" no lugar de "evidência".
- **O limite por reunião** ("em cada uma só dá para gastar até metade dele") e a linha "Limite desta reunião: R$ 210 milhões · marcado: R$ 150 milhões", que avisa na hora quando passa.
- **O painel do fim igual ao jornal**, e a frase "pela hipótese do jogo (R$ 40 mil na rede = 1 QALY)".
- **A ata curta:** uma frase por pedido ("Fora da conta" / "O que a régua mostrou") com o link para a limitação, e os três jurados em uma linha cada.
- **As cartas do jornal** ("Obrigado por terem ouvido" / "Responderam com uma planilha" / "Minha mãe espera há dois anos por uma cirurgia de catarata. Ninguém fez campanha por ela.").
- **Interativo 1 com o desconto:** os anos de vida continuam reais, e a frase explica o que o desconto faz. O seletor "Sem / Com o tratamento" colado no gráfico.
- **Interativo 4:** aceita "26.000" e "R$ 26.000,00"; a mensagem de erro com exemplos; a caixa "Saúde que sai de outro lugar"; "É o caso mais desconfortável: a conta aceita, e muita gente não".
- **As explicações de meia linha na Parte 4** (tecnologia, incorporar, endêmica, ultrarrara, terapia gênica, PIB per capita, impacto orçamentário) e a frase "pagar por ele tira do sistema mais saúde do que acrescenta".
- **O aviso da Parte 1** de que o tamanho do orçamento é decisão política, e as "ressalvas" em cada vantagem da Parte 5: ela percebe que o site não está vendendo a régua.
- **"O que fica de pé dos dois lados"** no fim da Parte 6 e o "Para pensar" sem conclusão.
- **Limitação 8** e a resposta "O valor de referência não é preço de ninguém": é o que garante a pergunta de controle.
- **Tudo o que já estava bom na rodada 1** e continua: abertura, Parte 2, os quatro passos de "De onde vem o peso", interativos 2 e 3, o formato das oito limitações, as etiquetas "DADO REAL" / "NÚMEROS ILUSTRATIVOS", a seção Sobre.
- **Sem rolagem lateral a 375 px** (largura medida: 375) e nenhum erro de script em toda a navegação e nas 34 partidas.
