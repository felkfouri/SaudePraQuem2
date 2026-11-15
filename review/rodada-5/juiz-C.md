# Parecer do Juiz C — Crítico do QALY (dos dois lados) · Rodada 5 (última)

```
VEREDITO: APROVA
```

Não há BLOQUEANTE nem IMPORTANTE. Os cinco polimentos do topo da minha lista da rodada 4 foram atendidos, quatro por inteiro e um por outro caminho. As correções novas não criaram caricatura, propaganda, linguagem que diminua alguém nem condução do leitor. O que resta é POLIMENTO: três arestas pequenas nos textos novos e os mesmos restos das rodadas anteriores, que não foram tocados.

Lido: `index.html` (Partes 4 a 7, glossário, tela inicial do jogo e, no `<script>`, `avaliar`, `TUTORIAL`, `PAUTAS`, `fecharReuniao`, `placar`, `resultado`, `eqRender`, `ttoFim`, `rcRender`, `casoHtml`, `coach`, `renderReuniao`, `renderAta`, `MANCH`, `BREVES`, `jornal`, `renderFinal`), meu parecer da rodada 4 e as capturas `1280-rcei` e `375-escuro-limitacao` da rodada 5. As Partes 1 a 3 não foram relidas linha a linha nesta rodada; conferi nelas só o trecho que eu já tinha apontado. As regras do jogo foram julgadas pelo código; não joguei partidas.

Três avisos sobre o que foi e o que não foi visto:

- **Os textos novos não aparecem em captura nenhuma.** A captura `1280-rcei` mostra o cenário da prótese com o limite de R$ 40 mil. Os dois textos de "escolha de prioridade", o aviso do orçamento e a frase do bônus de coerência foram conferidos só pelo código.
- **As oito capturas do jogo são, byte a byte, iguais às da rodada 4** (`jogo-1-inicio`, `jogo-2-reuniao`, `jogo-2b-ata-sem-regua` e `jogo-3-jornal`, em 375 e 1280). Seis delas já eram iguais às da rodada 3.
- **Abri `portao.md`**, que está na pasta das capturas mas fora da lista do que eu deveria ler. Ele diz que os dois casos de prioridade do interativo são testados. Não usei mais nada dele.

## CONFERÊNCIA DA RODADA 4

Não havia IMPORTANTE na rodada 4. Polimentos:

- **P1 · `resultado()`, frase do bônus de coerência — RESOLVIDO.** Trecho novo: *"Nas reuniões com a régua, o comitê não aprovou um pedido mais caro por QALY depois de recusar outro mais barato e de igual prioridade."* Agora a Praça diz por qual critério mede a coerência, e "Nas reuniões com a régua" serve também para a partida sem tutorial. Reparo fino em P3 desta rodada.
- **P2 · `#lim-8`, condição do Supremo e "conta para todos" — RESOLVIDO.** Trecho novo: *"uma delas é mostrar que a decisão da Conitec de não incluir o medicamento é ilegal, que não houve pedido de inclusão ou que a análise demorou demais (Conitec, Judicialização). A lógica do direito de cada pessoa e a lógica da comparação entre todos os pedidos convivem, em tensão permanente."* O caminho judicial não parece mais estreito do que é, e nenhuma das duas lógicas fica com o "para todos" só para si. Não conferi a condição na fonte; isso cabe ao checador de fatos.
- **P3 · `#lim-3`, "para ela" e posição do levantamento — RESOLVIDO.** Trecho novo: *"Os críticos não aceitam essa resposta. A réplica saiu no mesmo número da revista e sustenta que o QALY continua sujeito à acusação de dupla penalização (Harris, 1995)."* O verbo é o mesmo dado a Singer. O levantamento de Raymakers foi para o fim do primeiro parágrafo e deixou de parecer resposta a Harris. Análise do efeito em "Problemas novos", item 2.
- **P4 · `rcRender`, parêntese das situações de prioridade — RESOLVIDO por outro caminho.** Trecho novo: *"(por exemplo, por ser uma doença rara ou grave)"*. O "por exemplo" tira a aparência de lista completa, que era o defeito. A situação de equidade (doença endêmica em populações de baixa renda) continua sem ser nomeada no interativo, mas está na Parte 4 logo acima; não insisto.
- **P5 · Cartão "Pesos de justiça (equidade)" e glossário "Equidade" — RESOLVIDO.** Cartão: *"Em troca, alguém precisa escolher quais grupos pesam mais e quanto, e essa escolha é política."* Glossário: *"Justiça na distribuição: olhar quem ganha e quem perde. Para muita gente, quer dizer dar mais atenção a quem tem menos saúde ou menos acesso."* A definição deixou de tomar uma das respostas em disputa como se fosse o conceito. Resto em P5 desta rodada: dois cartões da Parte 7 ainda não têm o "em troca".
- **P6 · `#vantagens`, itens 1 e 3 — NÃO RESOLVIDO.** Continuam *"Sem uma medida única, não há como comparar…"* e a ressalva do item 3 sem dizer quem monta o estudo.
- **P7 · Caixa "O limiar brasileiro mede o custo de oportunidade?" — NÃO RESOLVIDO.** Mesma redação; o erro é discutido numa direção só.
- **P8 · Linguagem (`eqRender`, `p8a.viu`, `p3a.dep.q`) — NÃO RESOLVIDO.** Permanecem *"as pessoas avaliaram este estado como pior que a morte"* sem ressalva, *"A régua não se comove com a palavra 'moderno'"* e *"cadeirante há doze"*.
- **P9 · `#lim-6` e `#lim-4`, defesas que respondem a parte da crítica — NÃO RESOLVIDO.**
- **P10 · Restos menores — NÃO RESOLVIDO.** `renderAta` só com "Fora da conta" nos casos caros, vozes dos casos "sem rosto", `#lim-7` *"A vacina de hoje perde"*, `#problema` *"Um remédio de câncer dá alguns meses a mais"*, `#alternativas` *"Resolve a crítica da deficiência"*, Menzel no bloco da defesa da `#lim-5`, fonte para a objeção da `#lim-8`, capturas do jogo.

Nenhum desses restos é, sozinho ou somado, caso de reprovação. São os mesmos que classifiquei como polimento nas rodadas 2 a 4, e o texto em volta não piorou.

## PROBLEMAS NOVOS DAS ÚLTIMAS CORREÇÕES

Examinei cada mudança listada. Nenhuma gerou item IMPORTANTE.

1. **`rcRender`, os dois textos de "escolha de prioridade" com o limite de R$ 120 mil.** São justos com os dois lados, e a simetria entre eles é o que os torna justos.
   - Aceitar: *"Aceitar, neste caso, é uma escolha de prioridade (por exemplo, por ser uma doença rara ou grave), não um resultado da conta."*
   - Recusar a economia: *"Recusar a troca, neste caso, é uma escolha de prioridade (proteger mais a saúde de quem tem uma doença rara ou grave, por exemplo), não um resultado da conta."*

   O mesmo rótulo vale para o "sim" a um tratamento caro e para o "não" a uma economia. O defensor da conta não pode apresentar o limite de 3 vezes como técnica. O crítico não pode apresentar a prioridade como se saísse de graça: os dois textos dão os QALYs dos dois lados da troca. "Escolha de prioridade" não é censura; é o nome que a própria regra da Conitec dá a essas situações. Os dois textos começam com *"Pela hipótese desta página"*, que impede ler o custo de oportunidade como fato medido, e o fecho comum (*"O valor de referência orienta; a decisão final considera outros critérios"*) continua lá. O selo dos dois casos é neutro. Dois reparos em P1.

2. **`#lim-3`, bloco da defesa em dois parágrafos, com Harris no fecho.** Não desequilibra. Na rodada 4 usei como um dos argumentos o fato de o bloco não terminar na réplica; agora termina, então refiz a conta sem esse argumento.
   - O bloco da defesa tem quatro argumentos próprios, um dado empírico e o argumento de imparcialidade de Singer enunciado. A réplica é uma frase, que registra a conclusão do crítico sem o argumento dele.
   - A crítica já tem os dois blocos anteriores só para ela, e a defesa volta no bloco seguinte (o custo do evLY) e na caixa "O que fica de pé dos dois lados".
   - O guia inteiro segue o mesmo padrão: nas cinco vantagens, a última palavra é a ressalva do crítico; nas limitações, a defesa vem depois da crítica. Uma frase de réplica no fim de um dos oito blocos de defesa não muda esse balanço.
   - A ordem nova é a mais honesta: o segundo parágrafo conta uma troca de artigos na ordem em que aconteceu, tese e réplica, com fonte para as duas.

   Efeito colateral pequeno em P2: o levantamento de Raymakers ficou sem ligação com a frase anterior.

3. **`#lim-8`, condição do Supremo completa e "comparação entre todos os pedidos".** Descritivo, sem tomar partido. As três hipóteses mostram que a via judicial continua aberta sob condições; a frase anterior afirma o direito de cada pessoa; os nomes das duas lógicas são dignos para os dois lados. Nada a reparar.

4. **Jogo, aviso do orçamento.** Trecho: *"O que resta do orçamento não paga nenhum pedido desta reunião. É o custo de oportunidade aparecendo: o dinheiro já foi para outras escolhas. Leia os pedidos e encerre a reunião."* Não conduz. "Outras escolhas" descreve o que o jogador fez sem dizer que errou; não há "deveria ter guardado". A caixa de simplificações da tela inicial já avisa que o orçamento fixo por mandato é artifício do jogo. Pelo código, o aviso só aparece quando o saldo do mandato é menor que o custo de todos os pedidos da reunião, então a frase é verdadeira sempre que aparece. A redação nova é melhor que a da rodada 4.

5. **Jogo, frase do bônus de coerência.** Ver a conferência de P1 e o reparo em P3.

## NOTAS (0–10 por critério)

| Critério | R1 | R2 | R3 | R4 | R5 | Resumo |
|---|---|---|---|---|---|---|
| Fidelidade às críticas | 5,5 | 8,5 | 9 | 9 | 9 | Versão forte nas limitações 2, 3, 6 e 8; a réplica de Harris com fonte e verbo simétrico. Falta fonte para a objeção da 8 |
| Fidelidade às defesas | 7,5 | 8 | 8,5 | 9 | 9 | Defesa da 3 com o argumento de imparcialidade; interativo que separa conta e prioridade nos dois sentidos. A defesa da 6 ainda não responde ao argumento de justiça |
| Contra-argumento presente em cada limitação | 7 | 8,5 | 8,5 | 8,5 | 8,5 | Presente nas oito, no bloco certo. Na 4 e na 6 responde só a parte da crítica |
| Linguagem respeitosa | 7 | 8,5 | 8,5 | 8,5 | 8,5 | Pesos são de estados, não de pessoas. Restam "pior que a morte" sem ressalva, "cadeirante" e a ironia de `p8a.viu` |
| Equilíbrio e autonomia do leitor (inclui o jogo) | 6 | 8,5 | 9 | 9 | 9 | Nenhuma frase do guia dá veredito; "escolha de prioridade" simétrica; equidade definida sem tomar partido. No jogo, três jurados sem nota única e sem resposta certa em jurados ou jornal |

Guia e jogo, em separado.

- **Guia:** 9 em fidelidade às críticas, fidelidade às defesas e equilíbrio; 8,5 em contra-argumento e linguagem.
- **Jogo:** 8,5 em fidelidade às críticas, fidelidade às defesas, contra-argumento e linguagem; 9 em equilíbrio e autonomia. Subiu meio ponto no último porque a frase do bônus agora diz o critério da coerência. O que segura os outros quatro em 8,5 são as vozes dos casos "sem rosto", todas de profissionais, a ata que nos casos caros lembra só o que ficou fora da conta, e os dois restos de linguagem.

## PROBLEMAS

Nenhum BLOQUEANTE. Nenhum IMPORTANTE.

### POLIMENTO

- **[POLIMENTO] P1 · `rcRender`, casos de prioridade · o caso da economia estende a regra da Conitec; o ponto do gráfico não acompanha o selo.**
  Evidência 1: *"Isso é mais que a referência de R$ 40 mil e menos que o limite de R$ 120 mil. […] Recusar a troca, neste caso, é uma escolha de prioridade…"*. O limite de 3 vezes foi definido pela Conitec para aceitar tratamentos mais caros. Aplicá-lo a uma troca que poupa dinheiro é uma extensão lógica desta página, não uma regra da comissão, e o texto não diz isso. Sugestão: *"Pela mesma lógica do limite de 3 vezes, recusar a troca, neste caso, é uma escolha de prioridade (…), não um resultado da conta."* Peço ao checador de fatos que confirme que a regra não trata desse caso.
  Evidência 2: pelo código (`rcPlane`), o ponto fica verde no caso "aceitar por prioridade" e vermelho no caso "recusar por prioridade", enquanto o selo dos dois é neutro. O texto diz que é escolha; a cor diz que é resultado da regra. Sugestão: cor neutra no ponto quando `o.prioridade` for verdadeiro. Não vi em captura.

- **[POLIMENTO] P2 · `#lim-3`, defesa · o levantamento ficou solto no fim do primeiro parágrafo.**
  Evidência: *"…rendam muitos QALYs. Um levantamento de análises de remédios de câncer encontrou poucos casos em que os pacientes eram separados por idade ou deficiência (Raymakers e colaboradores, 2025)."* O leitor leigo não tem como saber por que isso é resposta à crítica. Sugestão: *"E, na prática, a comparação que a crítica teme é rara: um levantamento de análises de remédios de câncer encontrou poucos casos…"* Opcional, só se o texto de Harris for lido além do resumo: meia frase com a razão dele, para que a réplica tenha argumento como a tese tem.

- **[POLIMENTO] P3 · `resultado()`, bônus de coerência · a frase diz "igual prioridade"; a regra é "igual ou maior".**
  Evidência: *"…depois de recusar outro mais barato e de igual prioridade."* O código penaliza também quando o recusado tinha prioridade maior (`h.c.w>=c.w`). Sugestão: *"…outro mais barato e de prioridade igual ou maior."*

- **[POLIMENTO] P4 · Linguagem: `eqRender`, `p8a.viu`, `p3a.dep.q` (restos das rodadas 1 a 4).**
  `eqRender`: *"as pessoas avaliaram este estado como pior que a morte"* → acrescentar *"Quem respondeu, na maioria, nunca viveu este estado: imaginou."* `p8a.viu`: *"A régua não se comove com a palavra 'moderno'"* → *"A régua mediu o ganho sobre o remédio que já existe: mínimo, para um preço quatro vezes maior."* `p3a.dep.q`: *"cadeirante há doze"* → *"usa cadeira de rodas há doze anos"*.

- **[POLIMENTO] P5 · `#vantagens`, itens 1 e 3, e Parte 7 (restos das rodadas 2 a 4).**
  Item 1: *"Sem uma medida única, não há como comparar…, e ganharia quem tivesse mais voz."* É absoluto; a Parte 7 do próprio guia lista outros modos de comparar. Sugestão: *"Sem uma medida comum, fica muito mais difícil comparar… e tende a ganhar quem tem mais voz."* Item 3, ressalva: acrescentar *"e quem monta o estudo, em geral, é quem pede a incorporação."* Parte 7: os cartões do evLY e da deliberação são os únicos sem "em troca"; o custo do evLY já está escrito na `#lim-3` e basta repetir. No cartão dos anos de vida ganhos, *"Resolve a crítica da deficiência"* → *"Responde à crítica da deficiência"*.

- **[POLIMENTO] P6 · Caixa "O limiar brasileiro mede o custo de oportunidade?" (resto das rodadas 1 a 4).**
  Evidência: *"Se a mais baixa estiver certa, um tratamento aprovado perto do limiar pode tirar de outros serviços mais saúde do que acrescenta."* O erro é discutido numa direção só. Acrescentar: *"Há também quem ache o valor baixo demais para o que o país poderia gastar com saúde, e quem lembre que o dinheiro de um 'não' nem sempre vai para outro cuidado."*

- **[POLIMENTO] P7 · `#lim-6` e `#lim-4`, defesas que respondem a parte da crítica (resto das rodadas 2 a 4).**
  `#lim-6`: a defesa responde à regra do resgate e não ao argumento de justiça. Uma frase: *"Dar prioridade aos mais graves tem um custo em saúde total, e é preciso dizer quanto se aceita pagar por ela."* `#lim-4`: uma frase sobre cuidadores e paliativos.

- **[POLIMENTO] P8 · Jogo: ata e vozes (restos das rodadas 2 a 4).**
  `renderAta`: em `p6a` e `p7a` a ata mostra só "Fora da conta"; sugestão *"A régua mostrou: R$ 400 mil por QALY. Fora da conta: a gravidade…"*. Dar a um dos casos "sem rosto" (`p6b`, por exemplo) a voz de uma usuária comum.

- **[POLIMENTO] P9 · Restos menores.**
  `#lim-8`: fonte para a objeção (Harris, 1987, já está nas referências). `#lim-5`: mover Menzel para "O que se faz na prática". `#lim-7`: *"A vacina de hoje perde"* → *"pode perder"*. `#problema`: *"Um remédio de câncer dá alguns meses a mais."* → *"Um remédio para câncer avançado pode dar alguns meses a mais."* Capturas: regerar as oito do jogo e incluir uma do caso de prioridade no interativo (nos dois sentidos) e uma do aviso de orçamento.

## O QUE ESTÁ BOM (para não ser desfeito)

- Interativo "Quanto custa um QALY?": a mesma fórmula nos dois sentidos (*"é uma escolha de prioridade…, não um resultado da conta"*), *"Pela hipótese desta página…"*, os QALYs dos dois lados sempre à vista, o selo neutro, o custo de oportunidade sempre pela referência de base, e *"É o caso mais desconfortável: a conta aceita, e muita gente não."* Não trocar "escolha de prioridade" por palavra com juízo, como "exceção" ou "concessão".
- `#lim-3`, defesa: a filiação declarada de Singer ("autores favoráveis à medida"), "sustentou" e "sustenta" para os dois lados, a concessão "reconheceu o que ela tem de certo", o argumento de imparcialidade em linguagem leiga, e a réplica de Harris com fonte. Não cortar a réplica para "limpar" o bloco, nem devolver o levantamento para depois dela.
- `#lim-3`, problema e exemplo: a crítica em primeira pessoa, o peso como propriedade do estado, a etiqueta de números ilustrativos.
- `#lim-8`: a objeção enunciada como objeção, o exemplo sem refutação embutida, *"Recusar a conta não faz o limite desaparecer: alguém continua ficando sem, só que sem regra conhecida"*, a condição do Supremo com as três hipóteses e o fecho *"a lógica do direito de cada pessoa e a lógica da comparação entre todos os pedidos convivem, em tensão permanente"*.
- `#lim-2` e `#lim-6`: Harris com a razão; os dois argumentos (justiça e dever de socorrer) separados; o caso real da atrofia muscular espinhal sem refutação no exemplo.
- `#vantagens`: o formato "A ressalva" nos cinco cartões e a ressalva do item 4.
- Parte 7 e glossário: equidade definida como *"olhar quem ganha e quem perde"*, com *"Para muita gente, quer dizer…"*; o "em troca" do cartão de equidade; "Regra do resgate" como *"O dever de socorrer…"*.
- A Parte 1 sobre o orçamento como decisão política; o fecho *"O que fica de pé dos dois lados"*; as quatro perguntas de "Para pensar"; *"Este guia não tem conclusão."*
- `#plenario`: *"às vezes a conta mostra o que a história esconde, às vezes é o contrário."*
- Jogo: a frase do bônus com o critério dito; o aviso do orçamento sem culpa (*"o dinheiro já foi para outras escolhas"*); "(hipótese do jogo)" na fala do Contador, no painel e no jornal; a regra de coerência com a exceção da prioridade e sem a reunião do tutorial; três jurados sem nota única (*"nenhuma decisão agrada aos três"*); títulos descritivos; cartas do jornal com a mesma fórmula para os dois lados; a caixa de simplificações.
- Jogo: os depoimentos da mãe do Heitor, de Marina, Dona Olga, Sandra, Rosa, Jorge, Dona Zefa, Luciana e Seu Anísio; Carlos e Dona Lúcia falando pelo afeto, com dignidade.
