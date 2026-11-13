# Plano — "O que é o QALY? Vantagens e limitações"

Fase 1. **Nada é construído antes da aprovação deste plano.**

Público-alvo: pessoas sem formação em economia da saúde (usuários do SUS, conselheiros de saúde, estudantes, jornalistas), lendo pelo celular. Referência de leitura: ensino médio completo.

Objetivo: que o leitor saia capaz de (1) dizer o que é um QALY e fazer a conta simples, (2) dizer de onde vêm os pesos, (3) entender como o QALY entra numa decisão do SUS, e (4) discutir vantagens e limitações com argumentos dos dois lados, formando a própria opinião.

## 1. Título e subtítulo (escolher um)

| | Título | Subtítulo | Comentário |
|---|---|---|---|
| **A (recomendado)** | **A régua da saúde** | O que é o QALY, a medida que ajuda o SUS a decidir o que paga. Vantagens e limitações. | "Régua" é a metáfora do site inteiro: útil para comparar, mas mede só o que foi feita para medir. O título da entrega aparece inteiro no subtítulo. No topo, a marca pequena "da série Saúde para quem?". |
| B | O que é o QALY? | Vantagens e limitações da medida que compara tratamentos no SUS | Literal, igual ao tema da disciplina. Menos convidativo para leigos (a sigla no título assusta). |
| C | Saúde para quem? · Um ano de vida com saúde | O QALY explicado: para que serve e onde falha | Mantém a marca no título. Risco: confundir com o site original, que é sobre outra coisa. |

O jogo se chama **Plenário**.

## 2. Mapa do site

Um arquivo, duas vistas (como no original): o guia e, em `#jogo`, o jogo. Os interativos ficam dentro do guia, logo depois do texto que ilustram.

| # | Seção (âncora) | Mensagem-chave em uma frase |
|---|---|---|
| 0 | Abertura (`#topo`) | Para decidir o que o SUS paga, é preciso comparar coisas que parecem incomparáveis; o QALY é a régua criada para isso. |
| 1 | O problema (`#problema`) | O dinheiro da saúde é finito: todo "sim" para um tratamento é um "não" para outro, e esse "não" também tem pacientes (custo de oportunidade). |
| 2 | O que é o QALY (`#qaly`) | QALY = tempo de vida × qualidade desse tempo, numa escala em que 1 é saúde plena e 0 é a morte (com estados avaliados como piores que a morte, abaixo de zero). |
| 2a | **Interativo: Desenhe uma vida** (`#desenhe`) | O QALY é a área sob a curva; o ganho de um tratamento é a diferença entre duas áreas. |
| 3 | De onde vem o peso (`#peso`) | O peso não é opinião de médico nem do governo: vem de um questionário (EQ-5D) e de pesquisas em que a população diz quanto cada estado de saúde vale; o resultado é a tarifa de um país. |
| 3a | **Interativo: Seu estado no EQ-5D** (`#eq5d`) | Cinco respostas viram um número pela tarifa brasileira. |
| 3b | **Interativo: Qual é o seu peso?** (`#meu-peso`) | Seu peso para um estado de saúde pode ser bem diferente do da média da população, e é aí que mora a pergunta "quem valora?". |
| 4 | Como o QALY vira decisão (`#decisao`) | Divide-se o custo a mais pelos QALYs a mais (RCEI) e compara-se com um valor de referência (limiar); o limiar ajuda a decidir, não decide sozinho. |
| 4a | **Interativo: Quanto custa um QALY?** (`#rcei`) | O mesmo cálculo serve para uma vacina, uma prótese e um remédio de câncer, e mostra quanta saúde o gasto desloca em outro lugar. |
| 5 | Vantagens (`#vantagens`) | Cinco razões pelas quais sistemas de saúde usam o QALY há décadas. |
| 6 | Limitações (`#limitacoes`) | Oito críticas sérias, cada uma com exemplo, com a resposta de quem defende o QALY e com o que se faz na prática. |
| 7 | Alternativas e complementos (`#alternativas`) | Ninguém achou uma régua perfeita: as alternativas trocam um problema por outro, e por isso o QALY costuma ser complementado, não substituído. |
| 8 | Chamada para o jogo (`#plenario`) | Agora decida você. |
| 9 | Glossário (`#glossario`) | Cada termo técnico em uma ou duas frases. |
| 10 | Referências (`#refs`) | Só o que foi conferido, com DOI ou endereço. |
| 11 | Sobre (`#sobre`) | Autoria, como citar, licença e nota de transparência: o que é dado real e o que é ilustrativo. |
| J | Jogo Plenário (`#jogo`) | Ver seção 4. |

### Estrutura fixa de cada limitação (seção 6)

Quatro blocos, sempre na mesma ordem e com o mesmo peso visual: **O problema** (uma frase) · **Um exemplo** · **O que responde quem defende o QALY** · **O que se faz na prática**.

1. "Um QALY é um QALY": a conta não vê quem ganha → ponte para a DCEA e link para o site original.
2. Idade e o argumento dos *fair innings* ("uma vida inteira").
3. Pessoas com deficiência e doenças crônicas (prolongar a vida de quem tem peso menor rende menos QALYs); a discussão nos EUA e a métrica evLYG.
4. O que o instrumento não capta (saúde mental, visão e audição, crianças, cuidados paliativos) e os efeitos sobre cuidadores e família.
5. De quem são as preferências, e a adaptação de quem vive com a doença.
6. Regra do resgate, gravidade, fim de vida e doenças raras (modificador de gravidade do NICE; limiares alternativos da Conitec).
7. Premissas técnicas (cada ano vale o mesmo; estados somam-se sem interagir; desconto).
8. O QALY não é o "valor de uma vida".

Equilíbrio: vantagens (5) e limitações (8) têm tamanhos de texto comparáveis no total, porque cada limitação já traz a defesa. A seção 5 termina com "o que as vantagens não garantem" e a seção 6 termina com "o que as críticas não derrubam". Não há seção de "conclusão" que diga o que pensar; o fecho é uma lista de perguntas para o leitor.

## 3. Os interativos e suas fórmulas

Cada cálculo fica num bloco de funções puras, sem acesso à página, que os testes em Node extraem do `index.html`. Valores esperados nos testes calculados à mão e escritos em `docs/MODELO.md`.

### 3.1 Desenhe uma vida

Dois cenários lado a lado no mesmo gráfico (sem tratamento, com tratamento), dez colunas de um ano. O leitor arrasta a altura de cada coluna (qualidade, de 0 a 1, em passos de 0,05) e escolhe até que ano a pessoa vive. Cada coluna também é um controle de teclado (setas). Cenários prontos ilustrativos: prótese de quadril (mesma duração, mais qualidade), remédio que prolonga a vida com efeitos colaterais (mais tempo, menos qualidade), tratamento que só prolonga, cuidado paliativo.

- Qualidade no ano *t* do cenário *s*: `q[s][t]`, com `t = 1..10`; depois do último ano de vida, `q = 0`.
- Fator de desconto: `d[t] = 1 / (1 + r)^(t − 1)` (o primeiro ano não é descontado). `r = 0` por padrão; um botão liga o desconto na taxa das Diretrizes Metodológicas do Ministério da Saúde.
- `QALY[s] = Σ q[s][t] · d[t]`
- `Anos de vida[s] = Σ d[t]` nos anos em que a pessoa está viva.
- `QALYs ganhos = QALY[com] − QALY[sem]`; `anos de vida ganhos = AV[com] − AV[sem]`.

Mostrar os dois ganhos lado a lado prepara a limitação 3 (anos de vida × QALYs).

Testes: 2 anos a 0,5 = 1 QALY; 10 anos a 1 = 10; perfil misto conferido à mão; desconto de um caso de 3 anos conferido à mão; ganho negativo.

### 3.2 Seu estado no EQ-5D

Cinco perguntas (mobilidade, cuidados pessoais, atividades habituais, dor/mal-estar, ansiedade/depressão), três níveis cada (versão 3L). Saída: o código do estado (ex.: 21232), o índice pela tarifa brasileira e a frase "um ano neste estado conta como X de um ano com saúde plena". Um botão mostra o pior e o melhor estado.

- Fórmula: a do modelo publicado por Santos et al. (2016), com os coeficientes conferidos na fonte: `índice = 1 − (decrementos dos níveis marcados, por dimensão) − (termos adicionais do modelo, se houver)`. A fórmula exata e os coeficientes entram em `docs/MODELO.md` e `docs/FONTES.md` depois da conferência.
- **Se os coeficientes não puderem ser conferidos em duas fontes independentes**, o interativo usa coeficientes didáticos, com o rótulo "ilustrativo, não é a tarifa brasileira" e a explicação do motivo.
- Texto próprio para os níveis (não o questionário oficial) e aviso: não é o instrumento oficial e não serve para avaliar a saúde de ninguém.

Testes: 11111 = 1; dois ou três estados conferidos com a tabela publicada; o pior estado; todos os 243 estados dentro da faixa publicada.

### 3.3 Qual é o seu peso? (escada de time trade-off)

Molde: o teste "Qual é o seu ε?" do original. O leitor escolhe um de três estados descritos em palavras (leve, moderado, grave; os mesmos códigos do 3.2). Pergunta: "Viver 10 anos neste estado e depois morrer, ou viver *x* anos com saúde plena e depois morrer?". O *x* desce pela escada 9, 8, 7, 6, 5, 3, 1 enquanto o leitor escolhe a saúde plena; para quando ele troca de lado.

- No ponto de indiferença, `10 × u = x × 1`, logo `u = x / 10`.
- `x` de indiferença = média entre o último valor aceito e o primeiro recusado. Trocar já na primeira pergunta: `u ≈ 0,95`. Aceitar até 1 ano: `u ≤ 0,1`, e o texto explica que, para quem trocaria até por zero, o estado seria "pior que a morte", medido nas pesquisas com outra pergunta.
- Saída: o peso do leitor ao lado do peso da tarifa brasileira para o mesmo estado, com a frase: "nem você nem a tabela estão errados; a tabela é a média de muita gente, e é ela que entra na conta".

Testes: cada degrau da escada devolve o `u` esperado; extremos.

### 3.4 Quanto custa um QALY?

Entradas, por paciente: custo e QALYs do tratamento atual e do novo; o limiar (valor de referência da Conitec por padrão, com a opção do múltiplo previsto para situações específicas). Cenários prontos ilustrativos, um em cada situação: abaixo do limiar, acima, muito acima (doença rara), dominante (mais barato e melhor), dominado (mais caro e pior), mais barato e um pouco pior.

- `ΔC = C_novo − C_atual`; `ΔE = E_novo − E_atual`.
- `RCEI = ΔC / ΔE`, calculada só quando `ΔC` e `ΔE` têm o mesmo sinal.
- Classificação: `ΔE > 0 e ΔC ≤ 0` → dominante; `ΔE ≤ 0 e ΔC ≥ 0` (não ambos zero) → dominada; `ΔE > 0 e ΔC > 0` → custo-efetiva se `RCEI ≤ limiar`; `ΔE < 0 e ΔC < 0` → poupa dinheiro e perde saúde: aceitável pela regra se a economia por QALY perdido for maior que o limiar.
- Saúde deslocada (custo de oportunidade): `D = ΔC / limiar`. Benefício líquido em saúde: `BLS = ΔE − ΔC / limiar`. `BLS ≥ 0` equivale a `RCEI ≤ limiar` no quadrante de cima à direita.
- Gráfico: plano de custo-efetividade (ΔE na horizontal, ΔC na vertical), a reta do limiar e o ponto da tecnologia.

O texto diz com todas as letras que tratar o limiar como "preço da saúde deslocada" é uma hipótese didática.

Testes: um RCEI conhecido (ex.: ΔC = 60.000 e ΔE = 2 → 30.000); os quatro quadrantes; o caso `ΔE = 0`; BLS e RCEI concordam no veredito.

## 4. O jogo

Critério obrigatório: jogando, sem ler o guia, o jogador precisa sentir pelo menos uma vantagem e pelo menos duas limitações do QALY.

### Três conceitos

| | Conceito | Como se joga | Vantagem sentida | Limitações sentidas | Prós e contras |
|---|---|---|---|---|---|
| **1** | **Plenário** (escolhido) | Membro de um comitê nacional de incorporação. Seis reuniões, dois ou três pedidos por reunião, um orçamento para o mandato inteiro. Cada pedido traz custo, QALYs e um depoimento. Três jurados discordam entre si. Jornal no fim. | Moeda comum e custo de oportunidade: a primeira reunião é jogada **sem a régua** (só custo e depoimentos); depois o jogo revela o que os QALYs diriam. | Até oito, uma por caso: distribuição, idade, deficiência, instrumento que não capta, resgate e doença rara, fim de vida, cuidadores. | Cobre o tema inteiro; reaproveita o motor original (semente, jurados, jornal, tutorial, dificuldade). Exige cuidado para caber em 10 minutos. |
| 2 | A Balança | O jogador é pesquisador e monta a tarifa de um país fictício entrevistando oito personagens (pacientes, cuidadores, pessoas saudáveis) com perguntas de time trade-off; depois vê decisões mudarem conforme quem ele ouviu. | Preferências da população como base. | "De quem são as preferências", adaptação, instrumento. | Original e bom para a seção 3, mas cobre só um pedaço do tema e não reaproveita o motor. |
| 3 | Deslize | Cartas em sequência rápida (aprova ou recusa com um gesto) e quatro medidores que não podem zerar: saúde, justiça, confiança, caixa. | Custo de oportunidade (o caixa). | Resgate, distribuição. | Muito ágil no celular, mas os números somem: o jogador sente a pressão e não vê a conta, que é o assunto do produto. |

**Escolha: Plenário**, com duas ideias tomadas dos outros: do Deslize, a decisão por caso em um toque (Incorporar / Não incorporar) e os medidores sempre visíveis; da Balança, o momento em que o depoimento contradiz o peso da tabela.

### Regras do Plenário

- **Partida:** 6 reuniões (padrão, 8 a 10 minutos) ou 4 (rápida). Uma semente (código da partida) define os casos e as surpresas; mesmo código, mesma partida.
- **Reunião 1, "sem a régua"** (com o tutorial ligado): três pedidos, só com custo total e depoimentos. O jogador decide no escuro. Em seguida o jogo mostra os QALYs de cada um e o que as escolhas dele renderam. É aqui que a vantagem é sentida.
- **Reuniões 2 a 6:** dois pedidos por reunião, tirados de um baralho de cerca de 16 tecnologias fictícias. Cada cartão traz: a doença e quantas pessoas, o custo total, os QALYs ganhos, o custo por QALY, a força da evidência e um depoimento da consulta pública. Decisão: Incorporar ou Não incorporar.
- **Orçamento:** um valor fixo para o mandato. O que não couber não pode ser aprovado. O que sobrar no fim reforça a rede e vira QALYs à razão de 1 QALY por limiar (hipótese ilustrativa, dita na tela).
- **Evidência:** forte, moderada ou fraca. Nas fracas, o ganho real é sorteado numa faixa ao redor do prometido e só aparece no jornal (mecânica do original).
- **Três jurados, sem nota única:**
  - **Contador** (saúde total): `Σ QALYs reais dos aprovados + sobra / limiar`.
  - **Ouvidora** (justiça): a mesma soma, com cada ganho multiplicado por um peso de gravidade do caso (1; 1,2; 1,7, os pesos do modificador de gravidade do NICE, usados aqui como ilustração) e a sobra com peso 1.
  - **Praça** (confiança da sociedade): medidor de 0 a 100. Cai quando o comitê recusa um caso de grande comoção, e quando é incoerente (recusa um pedido e depois aprova outro parecido com custo por QALY pior). Sobe quando aprova casos de comoção e quando mantém coerência. Cai também se o orçamento estoura cedo e os últimos pedidos ficam sem dinheiro.
- **Casos desenhados para o conflito** (todos fictícios, cada um "inspirado em" um caso real citado no cartão):
  - dois pedidos com o mesmo custo por QALY, um deles para quem já tem menos saúde (limitação 1);
  - um remédio que prolonga a vida igualmente em dois grupos, e rende metade dos QALYs em quem vive com deficiência (limitação 3);
  - o mesmo tratamento para crianças e para idosos de 80 anos (limitação 2);
  - aparelho auditivo e psicoterapia, com ganho pequeno "na régua" e grande no depoimento (limitação 4);
  - cuidado para demência cujo maior ganho é da cuidadora, que a conta não vê (limitação 4);
  - terapia gênica para doença rara de bebês, com campanha na TV (limitação 6);
  - remédio de câncer que dá três meses a mais (limitação 6);
  - **e os casos em que a régua acerta contra a pressão:** um remédio "novo" igual ao antigo e mais caro, com forte lobby; uma tecnologia dominante que ninguém pediu; uma vacina sem depoimento comovente e com o melhor custo por QALY da partida.
- **Fim:** o jornal (componente do original) resume a gestão em manchete, texto, cartas de leitores e "o que a régua viu e o que não viu": cada decisão marcante ligada à vantagem ou limitação correspondente, com link para a seção do guia. Depois, as três notas de 0 a 10, um título descritivo do estilo de decisão e o botão de jogar a mesma partida de novo.
- **Dificuldade:** fácil (custo por QALY calculado, selo "abaixo/acima da referência" e uma dica), normal (custo por QALY, sem dica), difícil (só custo e QALYs; orçamento menor).
- **Tutorial:** dicas na reunião 1 e na 2 (padrão do original, `coach`).

### Equilíbrio (testado)

Um teste joga a partida com estratégias fixas em muitas sementes: "só o custo por QALY", "só o depoimento", "aprova tudo até acabar o dinheiro", "ao acaso". Exigências: nenhuma estratégia tira nota máxima nos três jurados; "só o custo por QALY" vence no Contador e perde na Praça; "só o depoimento" faz o contrário. Assim o jogo não tem resposta certa embutida.

## 5. Afirmações factuais que precisam de fonte

Cada item abaixo entra em `docs/FONTES.md` com citação, DOI/PMID ou endereço, o trecho conferido e o status (verificada / não verificada). O que não for verificado sai do texto ou é rotulado como ilustrativo.

**QALY e origem**
1. Definição de QALY e a escala 0–1, com valores negativos possíveis.
2. Quando e por quem o termo foi criado.

**Pesos**
3. As cinco dimensões e os níveis do EQ-5D-3L e do 5L; quantos estados cada versão descreve (243 e 3.125).
4. Definições de time trade-off, standard gamble e experimento de escolha discreta.
5. Tarifa brasileira do EQ-5D-3L: autores, ano, método, amostra, coeficientes, menor valor, quantos estados abaixo de zero.
6. Existência (ou não) de tarifa brasileira do EQ-5D-5L.
7. Tarifa brasileira do EQ-5D-Y-3L (2024).
8. Recomendação de usar preferências da população geral, e a evidência de que pacientes costumam dar pesos diferentes (adaptação).

**Decisão**
9. Conitec 2022: valor de referência por QALY; relação com o PIB per capita; valor por ano de vida ganho; o múltiplo para situações específicas e quais são elas; que o limiar não é critério único.
10. Atualizações desses valores até novembro de 2026.
11. Leis: 12.401/2011, 14.313/2022 e o decreto da Conitec.
12. O que a ANS discute sobre limiares.
13. Diretriz de Avaliação Econômica do Ministério da Saúde: edição vigente e taxa de desconto.
14. NICE: faixa do limiar, modificador de gravidade (pesos e critérios), taxa de desconto.
15. Estimativas de custo de oportunidade para o Brasil (limiar "pelo lado da oferta").

**Limitações**
16. *Fair innings* (Williams) e a crítica de discriminação por idade (Harris).
17. Deficiência: a crítica (dupla penalização); a lei americana (o que proíbe e para quem); a métrica evLYG (quem criou, como funciona).
18. Sensibilidade do EQ-5D em saúde mental, visão, audição, crianças e cuidados paliativos; efeitos sobre cuidadores.
19. Regra do resgate (origem do termo); o caso do Oregon; gravidade na Noruega e na Holanda; doenças raras.
20. Premissas do modelo (trade-off proporcional constante, independência, neutralidade ao risco) e a evidência de que as pessoas as violam.
21. Diferença entre o limiar por QALY e o "valor estatístico de uma vida".

**Alternativas**
22. DALY, evLYG, WELLBY, análise de decisão multicritério, DCEA e pesos de equidade, participação social na Conitec: definição e uma referência de cada.

**Jogo e cenários**
23. Cada caso real que "inspira" uma tecnologia fictícia: uma fonte.

## 6. O que vem do original

Detalhe em `docs/INVENTARIO.md`. Em resumo:

| Do original (`index.html`) | Para o novo |
|---|---|
| CSS inteiro de base: variáveis de cor, temas, tipografia, faixas, painéis, chips, tiles, selos, tabelas, glossário, botões, barra fixa (linhas 11–186, 380–410) | Igual. |
| CSS do jornal, jurados, cartões, tutorial, notas finais (linhas 188–262, 367–377) | Igual, com ajustes nos cartões. |
| Rotas guia/jogo, memória de rolagem e foco, barra com seção atual e progresso (script, "Rotas" e "Barra de navegação") | Igual. |
| `rng` (mulberry32), `shuffle`, `deal`, `tpl`, `ext`, formatadores, `press`, `focusEl`, `refocus` | Igual. |
| Teste "Qual é o seu ε?" (`LADDER`, `quizQ`, `quizEnd`) | Molde do "Qual é o seu peso?". |
| `drawPlane`, `niceTicks`, padrão `state` + `render()` do laboratório | Molde do plano de custo-efetividade e dos gráficos. |
| `face()`, `newspaper()`/`paperData()`, `coach()`, réguas `GRADES`, ciclo `newGame → dealYear → closeYear → renderFinal` | Adaptados ao Plenário. |
| Parte 1 do guia, glossário (QALY, ICER, limiar, custo de oportunidade), referências 14–16 | Reescritos e reconferidos. |
| Parte 2 do guia ("O que ela não vê") | Resumida na limitação 1, com link para o site original. |
| `tests/motor.js` (técnica de ler os dados do `index.html`), `tests/validar.js`, `tests/dados.js`, `tests/dilemas.js` | Adaptados: testes de cálculo, partida automatizada, consistência dos casos, equilíbrio. |
| README, `docs/modelo.md`, `docs/jogo.md` | Estrutura reaproveitada. |

Não vêm: o laboratório da DCEA (Atkinson, EDE, ε), as 27 propostas e as regras do Cobertor Curto (custeio, equipes, pilotos, pacto, conferência, eleição), os perfis de cidade, a comparação da turma.

## 7. Compreensão

As cinco perguntas e o gabarito estão em `docs/COMPREENSAO.md`.

## 8. Depois da aprovação

Rodada 1 do gauntlet: construir o site, `docs/FONTES.md`, `docs/MODELO.md`, `docs/JOGO.md`, os testes e o portão automático; rodar a bancada; triagem; commit `rodada 1: ...`. Repetir até os quatro juízes aprovarem ou até a rodada 5.
