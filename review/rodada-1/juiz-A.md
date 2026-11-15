# Parecer do Juiz A — Leiga (Dona Cida) · Rodada 1

VEREDITO: REPROVA

Motivo em uma linha: o texto é bom e a Dona Cida acertou 5 de 5 no teste, mas o jogo leva mais que o dobro dos 10 minutos prometidos (1 BLOQUEANTE) e há 8 itens IMPORTANTES (termos sem explicação, armadilhas nos interativos 1 e 4, metade do jogo sem escolha possível).

## Como testei

- Li o guia inteiro no texto renderizado a 375 px (Playwright, 375×740, toque ligado) e vi as capturas `375-*.png`.
- Usei os quatro interativos de verdade: todos os exemplos prontos, toque no gráfico, desconto, questionário, três rodadas da troca de tempo, digitação nos campos do interativo 4.
- Joguei uma partida completa do Plenário (partida nº 1234, 6 reuniões, normal, com tutorial), decidindo como ela decidiria: com o coração na primeira reunião, aprovando o que parecia razoável depois. Extraí todo o texto que aparece na tela e contei as palavras.
- Teste de compreensão: respondi antes de abrir o gabarito.
- Scripts em `/tmp/claude-0/-home-user-SaudePraQuem2/5d4dd7db-ca0e-5c47-9b10-f70b859cb0a6/scratchpad/juizA/`.

## NOTAS (0–10 por critério)

| Critério | Nota | Comentário |
|---|---|---|
| Clareza da linguagem | 8 | Frases curtas, exemplos concretos, tom respeitoso. Perde nas Partes 4, 6 e 7, mais densas. |
| Termos explicados | 6 | Os termos centrais são bem explicados (QALY, peso, tarifa, custo de oportunidade, RCEI, limiar, PIB per capita). Mas sobram uns 15 termos soltos, e o jogo usa "incorporar", "evidência" e "dossiê" sem dizer o que são. |
| Uso dos interativos sem ajuda | 6,5 | 2 e 3 funcionam sozinhos e são ótimos. O 1 tem gráfico com letras de 7 px e uma frase errada com o desconto. O 4 tem uma armadilha de digitação. |
| Jogo (duração e diversão) | 5 | Diversão 8, duração 3. É bem escrito e prende, mas leva de 20 a 25 minutos para quem lê tudo, e a partida típica de uma leiga fica sem escolhas da reunião 4 em diante. |
| Compreensão (acertos de 5) | 10 | 5 de 5, e a pergunta de controle certa. |

## Teste de compreensão — respostas da Dona Cida e correção

1. **"São 2. Quatro anos vezes meio dá 2 QALYs. É como se fossem dois anos com saúde boa."**
   Correção: certo (2 QALYs).

2. **"Não é o médico nem o governo. Fizeram uma pesquisa com gente comum, mais de 9 mil pessoas no Brasil, perguntando quantos anos de vida a pessoa trocaria para ficar boa. Das respostas saiu uma tabela. O paciente só responde cinco perguntas e a tabela dá o número."**
   Correção: certo (pesquisa com a população, não opinião de médico ou governo).

3. **"60 mil dividido por 2 dá 30 mil por QALY. Fica abaixo dos 40 mil da Conitec, então passa na régua. Mas o site diz que a régua não decide sozinha."**
   Correção: certo (número e comparação).

4. **"Dá para comparar coisas diferentes, vacina, prótese, remédio de câncer, na mesma medida. Senão ganha quem grita mais."**
   Correção: certo.

5. **"Uma: o idoso sai perdendo, porque tem menos anos pela frente e soma menos. Outra: o questionário só tem cinco perguntas, não pergunta de ouvido nem de vista, e não conta a filha que larga o emprego para cuidar da mãe. Quem defende diz que a conta não pergunta a idade de ninguém, só mede o ganho; e na prática a Conitec ouve pacientes e cuidadores nas reuniões."**
   Correção: certo (duas limitações reconhecíveis, com resposta e prática).

Controle — "O QALY diz quanto vale a vida de uma pessoa?" **"Não. Os 40 mil não são o preço de ninguém, é para comparar onde o dinheiro rende mais saúde."** Certo. A limitação 8 funciona.

**Resultado: 5 de 5.** Observação honesta: ela acerta porque as Partes 1 a 5 são claras. As perguntas não tocam nos trechos onde ela travou (limiar e PIB per capita, limitação 3, Parte 7).

## Tempo do jogo (medido na partida 1234)

Palavras que aparecem na tela, sem contar o painel lateral nem o que está recolhido:

| Trecho | Palavras |
|---|---|
| Tela "Antes da primeira reunião" (sem abrir "O que é simplificação") | ~250 |
| 6 reuniões (311, 289, 225, 211, 208, 198) | ~1.440 |
| 6 atas (331, 175, 174, 180, 156, 148) | ~1.160 |
| Fim do mandato: jornal, estilo e notas (sem a lista "O que a régua mostrou e o que ficou fora", que repete as atas) | ~390 |
| **Total que ela precisa ler** | **~3.240** |
| Lista repetida no fim | +370 |

- A 150 palavras por minuto: 3.240 ÷ 150 ≈ **21,5 min** de leitura, mais 13 decisões (uns 10 s cada, ≈ 2 min) e rolagem: **cerca de 24 minutos**.
- Lendo por cima, a 250 palavras por minuto: cerca de 15 minutos.
- Partida "4 reuniões (rápida)": cerca de 2.400 palavras, uns 17 minutos.
- A tela promete "De 8 a 10 minutos" em dois lugares. **Não cabe em 10 minutos em nenhuma configuração.**

É divertido? Sim, enquanto há escolha: os depoimentos são bons ("Não é que eu vá morrer disso. É que eu parei de viver."), a ata da reunião 1 "Agora, com a régua" é o melhor momento do site, e o jornal no fim dá vontade de jogar de novo. Mas veja o item 3 abaixo: na minha partida, as reuniões 4, 5 e 6 foram só marcar "Não incorporar".

## PROBLEMAS

### Bloqueante

- **[BLOQUEANTE]** Jogo, `#gStart` e `#plenario` ("Leva de 8 a 10 minutos"; "Partida padrão: 6 reuniões... De 8 a 10 minutos") · A partida padrão tem cerca de 3.240 palavras obrigatórias: 24 minutos a 150 palavras por minuto, 15 lendo por cima; a versão rápida, 17 (tabela acima). · Correção: cortar texto até caber em cerca de 1.200 palavras, não só mudar a promessa. Sugestões concretas: (a) partida padrão com 4 reuniões; (b) tela inicial em 80 palavras, com os três jurados apresentados em uma linha cada e o resto dentro de "Como funciona"; (c) cartão do pedido sem "Sua decisão sobre '...'" repetido e sem a linha da pauta duplicada (na reunião 1 a caixa "Como jogar" e a introdução da pauta dizem a mesma frase); (d) ata com uma frase por pedido e os três jurados em uma linha cada, com o detalhe recolhido; (e) no fim, recolher a lista "O que a régua mostrou e o que ficou fora", que repete as atas. Depois, medir de novo e escrever o tempo real.

### Importantes

- **[IMPORTANTE]** Jogo, textos no `<script>` (`casoHtml`, `#gStart`, jornal) · Termos sem explicação na primeira vez: **"incorporar / não incorporar"** (o guia diz "incluir no SUS"; o jogo troca a palavra sem avisar); **"evidência: forte / moderada / fraca"** em todo cartão a partir da reunião 2, sem dizer o que é nem para que serve (só no fim aparece "Quanto mais fraca a evidência, maior a surpresa"); **"dossiê"** no jornal ("rendeu menos do que o dossiê prometia"); **"tecnologias"** ("6 tecnologias incorporadas"); **"a rede"**; **"mi"** para milhões; **"consulta pública"**; **"secretaria-executiva"**. · Correção: na tela inicial, "incorporar (incluir no SUS)"; no cartão, trocar "evidência forte" por "confiança nos números: alta / média / baixa" ou explicar na caixa "Como jogar" da reunião 2 ("evidência é o quanto os estudos sustentam o ganho prometido"); "dossiê" vira "o pedido"; "tecnologias" vira "tratamentos"; escrever "milhões" por extenso ao menos na primeira vez.

- **[IMPORTANTE]** Jogo, orçamento (`#gSobra`, reuniões 4 a 6) · Decidindo com o coração na reunião 1 (sem a régua, como o jogo pede) e aprovando pedidos razoáveis nas reuniões 2 e 3, cheguei à reunião 4 com R$ 30 mi. O pedido mais barato dali em diante custava R$ 40 mi. Resultado: três reuniões seguidas com "Não cabe no orçamento. Recuse algum pedido para continuar", cerca de 1.100 palavras para ler sem nenhuma decisão possível, e a Praça ainda me puniu ("Recusou... e a recusa repercutiu", −18, −6, −12) por recusas que eu não podia evitar. A lição de escassez é boa uma vez; três vezes é castigo. · Correção: avisar o tamanho do problema na reunião 1 ("os pedidos do mandato somam cerca de R$ X; o orçamento paga metade"); quando nada cabe, dizer isso no alto da reunião, marcar as recusas sozinho e encurtar a reunião; a Praça não deve tratar recusa por falta de dinheiro como escolha, ou deve dizer "o comitê ficou sem dinheiro na reunião 3".

- **[IMPORTANTE]** Jogo, placar lateral `#jC` contra o jornal · No fim, o painel "O mandato até aqui" mostra "CONTADOR −150 — QALYs além do que a rede renderia com o mesmo dinheiro", e o jornal, na mesma tela, diz "as decisões renderam 15.096 QALYs... Se todo o orçamento tivesse ficado na rede, teriam sido 15.000. O mandato fechou com saldo positivo de saúde". Um diz que perdi, o outro que ganhei, e nada explica a diferença (o prometido contra o que aconteceu de verdade). A frase "QALYs além do que a rede renderia com o mesmo dinheiro" também é difícil, e a fala repetida do Contador "Nada mudou na minha conta: o que se ganhou aqui é o que a rede renderia com o mesmo dinheiro" aparece até quando recusei tudo. · Correção: no fim, atualizar o painel com o número real ou escrever "previsto: −150 · aconteceu: +96"; trocar a legenda por "saúde a mais (ou a menos) do que se o dinheiro ficasse nos serviços que já existem"; quando nada foi aprovado, o Contador diz "Nada foi gasto, nada mudou".

- **[IMPORTANTE]** Guia, termos sem explicação na primeira vez · Lista com o lugar:
  - Parte 4, lista da Conitec: **"doença endêmica"** (repete nas limitações 1 e 6); **"terapias gênicas"** e **"doenças ultrarraras"**; **"Incorporação de Tecnologias"** no nome da Conitec, sem dizer que "tecnologia" aqui é remédio, vacina, exame, aparelho, e que "incorporar" é incluir no SUS.
  - Parte 4, quadro do limiar: **"deslocar mais saúde do que acrescenta"**. "Deslocar" nunca é explicado, e volta como título de caixa no interativo 4 ("Saúde deslocada").
  - Parte 5, último quadro: **"evidência fraca"**.
  - Limitação 3: **"(ICER)"** aparece como fonte do evLY, mas na Parte 4 ICER era "RCEI em inglês". É o nome de um instituto americano com a mesma sigla; ela acha que é a mesma coisa.
  - Limitação 4: **"o instrumento"** (é o questionário); **"esquizofrenia"** passa.
  - Limitação 6: **"terapia gênica para atrofia muscular espinhal"**.
  - Limitação 7, título: **"premissas"** (o texto usa "suposições" logo abaixo; usar a mesma palavra no título).
  - "O que as críticas não derrubam": **"revisões da literatura"**.
  - Parte 7: **"equidade"** (duas vezes, nunca explicada); **"WELLBY"** é a única sigla sem tradução; **"análise de decisão multicritério"** e **"deliberação"** só no título.
  - Interativo 1: exemplo **"Cuidado paliativo"** aparece antes da explicação, que só vem na limitação 4.
  - Interativo 3, resultado: **"quem deve valorar?"**.
  - Interativo 4, resultados: **"tecnologia nova"**, **"tecnologia dominante"** (o texto dizia "tratamento") e **"É o quadrante mais desconfortável"**.
  · Correção: uma explicação de meia linha na primeira vez, por exemplo "doença endêmica (que é comum o tempo todo numa região, como a malária na Amazônia)", "terapia gênica (tratamento que corrige um gene defeituoso)", "equidade (justiça na distribuição: dar mais a quem tem menos)", "evidência (o que os estudos mostram)"; escrever "(instituto ICER, dos Estados Unidos)"; nos interativos, usar "tratamento" e "canto do gráfico". Incluir esses termos no glossário.

- **[IMPORTANTE]** Interativo 1, `#dvFrase` com "Aplicar desconto de 5% ao ano" marcado · A frase passa a dizer uma coisa falsa. Exemplo medido: "O tratamento acrescenta 1,98 QALYs. **A pessoa vive 2,59 anos a mais**...", quando ela vive 3 anos a mais. O desconto está sendo aplicado aos anos de vida e apresentado como tempo vivido. A caixa "anos de vida ganhos" muda junto. Sem desconto também aparece "vive 3,00 anos a mais" e "4,00 anos", com casas decimais que não fazem sentido para anos inteiros. · Correção: manter sempre os anos reais na frase ("vive 3 anos a mais") e dizer à parte "com o desconto, esses anos contam como 2,59"; escrever anos inteiros sem decimais.

- **[IMPORTANTE]** Interativos 1 e 4, gráficos `#dvSvg` e `#rcPlane` a 375 px · O texto dos eixos mede 7 a 8 px na tela (medido: `#dvSvg` 7–8 px, `#rcPlane` 7 px). Os números da altura (0,25 a 1), os anos e os rótulos "mais caro e melhor / mais barato e pior" não se leem no celular; no plano, dois rótulos ficam por cima da linha tracejada. No interativo 1, a instrução "Toque no gráfico..." fica uma tela e meia acima do gráfico, separada pelos controles de duração, pelo desconto e pelo "Ajustar ano a ano": quando ela chega ao gráfico já não lembra, e não vê o botão "Sem / Com o tratamento" que diz qual vida está desenhando. · Correção: texto do SVG com pelo menos 12 px na tela a 375 px (desenhar o SVG com menos unidades de largura no celular, ou rótulos em HTML); pôr o seletor "Sem / Com" e a dica "toque numa coluna para mudar a altura" colados em cima do gráfico.

- **[IMPORTANTE]** Interativo 4, campos `#rcCa`, `#rcCn` (`type="number"`) · Os campos mostram "6000" e "26000", sem ponto. O texto ao lado escreve "26.000" e "R$ 26 mil". Se ela digita **26.000**, como se escreve dinheiro no Brasil, o campo aceita e a conta usa **26 reais**: testei, o resultado vira "CUSTO A MAIS − R$ 5.974" e "tecnologia dominante", sem nenhum aviso. Com campo vazio e QALYs iguais aparece "− R$ ∞ economizados para cada QALY perdido". · Correção: campo de texto com `inputmode="numeric"` que formata o milhar enquanto ela digita e entende "26.000", "26000" e "26 mil"; para campo vazio ou números iguais, mensagem simples ("Preencha os quatro números" / "Os dois tratamentos dão o mesmo resultado").

- **[IMPORTANTE]** Interativo 4, caixa "SAÚDE DESLOCADA" e frase `#rcVerd` · O nome da caixa é um termo novo, e a explicação só vem depois do gráfico, no fim do quadro, em letra pequena. A frase do resultado ("o gasto rende mais saúde (1,00 QALYs) do que o mesmo dinheiro renderia em outro lugar (0,50)") se entende; o rótulo, não. O seletor do limiar corta o texto no celular: "R$ 40 mil por QALY (referência da Co". · Correção: chamar a caixa de "Saúde que o mesmo dinheiro daria em outro lugar" e pôr a explicação logo abaixo dela; encurtar as opções do seletor ("R$ 40 mil por QALY (padrão)" / "R$ 120 mil por QALY (casos especiais)").

### Polimento

- **[POLIMENTO]** Jogo, ata · "A confiança no comitê caiu 1 pontos" (ata da reunião 2). Corrigir o singular.
- **[POLIMENTO]** Jogo, cartões · A linha "Sua decisão sobre '...'" repete o título do cartão em cima dos botões; em 13 cartões são umas 100 palavras a mais. Esconder da tela e deixar só para leitor de tela.
- **[POLIMENTO]** Jogo, fim · As notas (Contador 5,2 · Ouvidora 4,4 · Praça 3,3) vêm sem dizer se são boas ou ruins. Uma palavra ao lado ajuda ("regular", "baixa").
- **[POLIMENTO]** Interativo 3, `#tto` · O estado aparece como "tem alguns problemas para fazer", sem dizer o quê (faltou "as atividades do dia a dia"). O texto de abertura diz "os anos com saúde plena diminuem, até você mudar de lado", mas se ela escolhe os 10 anos doente logo na primeira pergunta o teste acaba ali; dizer "se você escolher a saúde plena, a pergunta volta com menos anos".
- **[POLIMENTO]** Interativo 3, título "Qual é o seu peso?" · No celular, de relance, parece pergunta de balança. Sugestão: "Que peso você daria?".
- **[POLIMENTO]** Interativo 2, "Como a conta é feita" · "perde 0,149 de saída" passa, mas "Coeficientes da tarifa" é jargão; "Números da tabela de Santos e colaboradores".
- **[POLIMENTO]** Botões de exemplo dos quatro interativos (`.chip`) têm 31 px de altura e os controles deslizantes, 16 px. Para dedo de 52 anos, 44 px é mais seguro. Os botões do jogo já estão no tamanho certo.
- **[POLIMENTO]** Parte 4, quadro "O limiar brasileiro mede o custo de oportunidade?" · É o parágrafo mais difícil do guia (duas estimativas, percentuais do PIB per capita, "deslocar"). Fechar com uma frase simples: "Em resumo: ninguém sabe ao certo se R$ 40 mil é o número certo; pode ser alto demais."
- **[POLIMENTO]** Limitação 3, "O que se faz na prática" · Quatro ideias num parágrafo (lei de 2010, instituto, evLY, Conitec) e a citação "(42 U.S.C. § 1320e-1)" no meio da frase. Quebrar em dois parágrafos; as citações de lei americana podem virar "(lei americana de 2010)" com o link.
- **[POLIMENTO]** Citações "(Fulano e colaboradores, 2016)" no meio de quase todo parágrafo das Partes 6 e 7 cansam no celular. Uma marca discreta que leva à referência serviria.
- **[POLIMENTO]** Parte 3, passo 1 · "As combinações dão 243 estados de saúde diferentes": acrescentar "(cada combinação de respostas é um 'estado de saúde')", porque "estado de saúde" vira a palavra-chave dali em diante.
- **[POLIMENTO]** Capturas da rodada · `375-desenhe.png`, `375-eq5d.png`, `375-meu-peso.png` e `375-rcei.png` não mostram os interativos: mostram o topo e a Parte 1. Quem revisar só pelas capturas não vê nenhum dos quatro. Refazer com rolagem até o elemento. (Problema do material da bancada, não do site.)

## O QUE ESTÁ BOM (para não ser desfeito)

- **A abertura e a Parte 1.** "O dinheiro acaba antes dos pedidos", "O 'não' também tem pacientes", custo de oportunidade explicado com consultas e equipes de saúde da família. Ela entende de primeira e quer continuar.
- **A Parte 2.** A fórmula em uma linha, os três exemplos de conta, "pronuncia-se quáli", e o gráfico do topo "Áreas iguais, mesma quantidade de saúde".
- **"De onde vem o peso" em passos**, com "Não é o médico, nem o governo, nem o paciente sozinho", e a decisão de chamar "utilidade" de "peso".
- **Interativo 2 (questionário).** Não precisa de instrução, responde na hora, e a frase do resultado é perfeita ("Um ano neste estado conta como 0,563 QALY. Dez anos assim somam 5,63"). O "Pior estado" com peso negativo explicado em palavras simples.
- **Interativo 3 (troca de tempo).** Os dois cartões grandes "10 anos neste estado / 9 anos com saúde plena", "Não existe resposta certa. É uma pergunta difícil de propósito", e o fecho "Nem você nem a tabela estão errados... Se você convivesse com este problema há anos, sua resposta seria a mesma?". É o interativo que mais ensina.
- **Interativo 1, os exemplos prontos** e a frase-resumo sem desconto; o aviso "Repare no exemplo 'Só mais tempo'" que prepara a limitação 3.
- **Interativo 4, a frase do veredito** sempre terminando em "O valor de referência orienta; a decisão final considera outros critérios", e o exemplo "Mais barato e um pouco pior" dizendo "a conta aceita, e muita gente não".
- **A conta da prótese em três linhas** na Parte 4 e a explicação de "incremental quer dizer a mais". **PIB per capita explicado entre parênteses.**
- **O formato das oito limitações** (o problema, um exemplo, o que responde quem defende, o que se faz na prática). É longo, mas é o que permitiu acertar a pergunta 5. Os exemplos são do mundo dela: ribeirinhos, a filha que larga o emprego, a manchete "Governo diz que vida de paciente não vale R$ 200 mil".
- **A limitação 8** e o fecho "Sem régua nenhuma, a escolha não deixa de ser feita. Ela só deixa de ser vista."
- **"Para pensar"**, sem conclusão imposta.
- **No jogo:** a primeira reunião sem a régua seguida da tabela "Agora, com a régua"; os depoimentos; "O que a régua mostrou / O que ficou fora da conta" com o link para a limitação (e voltar pelo navegador mantém a partida, testei); a barra fixa com "reunião 2 de 6 · R$ 330 mi"; botões grandes de "Incorporar / Não incorporar"; o botão de encerrar que só libera quando tudo foi decidido, com aviso claro; três jurados sem nota única; o jornal no fim com as cartas dos personagens.
- **Sem rolagem lateral a 375 px** e nenhum erro de script em toda a navegação.
- **A seção "Sobre"** dizendo o que é dado real e o que é inventado, e as etiquetas "DADO REAL" / "NÚMEROS ILUSTRATIVOS" ao longo do texto.
