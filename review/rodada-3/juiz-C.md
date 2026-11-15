# Parecer do Juiz C — Crítico do QALY (dos dois lados) · Rodada 3

```
VEREDITO: APROVA
```

Não há BLOQUEANTE nem IMPORTANTE. O único IMPORTANTE da rodada 2 (`#lim-3`, Singer e colaboradores como árbitros neutros) está resolvido. As três mudanças recentes que me pediram para examinar (Justiça e STF na limitação 8; reunião sem a régua fora da regra de coerência; depoimentos sem o rodapé "na consulta pública") não criaram caricatura, propaganda nem desequilíbrio. O que resta é POLIMENTO, e boa parte são restos já apontados nas rodadas 1 e 2.

Lido: `index.html` inteiro (guia, glossário, "Sobre", `#gStart`, e no `<script>` `TUTORIAL`, `PAUTAS`, `fecharReuniao`, `placar`, `resultado`, `casoHtml`, `coach`, `renderAta`, `MANCH`, `BREVES`, `jornal`, `renderFinal`, `eqRender`, `ttoFim`), meus pareceres das rodadas 1 e 2, e as capturas da rodada 3 (`1280-limitacoes`, `375-escuro-limitacao`, `375-jogo-2-reuniao`, `1280-jogo-2b-ata-sem-regua`, `1280-jogo-3-jornal`). As regras do jogo foram julgadas pelo código; não joguei partidas.

Aviso sobre as capturas: as oito capturas do jogo da rodada 3 são, byte a byte, iguais às da rodada 2 (as do guia mudaram). Elas já mostram os depoimentos sem o rodapé, então não escondem nada do que julguei, mas a mudança na regra de coerência só pôde ser conferida pelo código.

## CONFERÊNCIA DA RODADA 2

### IMPORTANTE da rodada 2

**I1 · `#lim-3`, "O que responde quem defende" (Singer e colaboradores como árbitros neutros, sem dizer que a resposta foi contestada) — RESOLVIDO.**
Trecho novo: *"Um artigo de autores favoráveis à medida examinou a objeção da dupla penalização, reconheceu o que ela tem de certo e sustentou que o defensor do QALY tem resposta adequada para ela (Singer e colaboradores, 1995). Os críticos não aceitam essa resposta, e o debate continua."*

Os três defeitos que apontei eram: autores apresentados como árbitros, resposta não enunciada, contestação omitida. O primeiro e o terceiro estão corrigidos: "autores favoráveis à medida" diz de que lado eles estão, "sustentou" substitui "concluíram", e a frase seguinte diz que os críticos não aceitam. O segundo (dizer qual é a resposta) não foi feito, e aceito a justificativa do construtor: afirmar o conteúdo de um argumento que só foi lido pelo resumo seria pior do que não afirmar. Dentro dessa restrição a redação é honesta e equilibrada, por três razões:

- o que a frase atribui ao artigo ("examinou", "reconheceu o que ela tem de certo", "sustentou que há resposta adequada") é o que um resumo permite afirmar, e nada além;
- a frase deixou de carregar o peso da defesa: o bloco já traz, antes dela, quatro argumentos de verdade (o peso é do estado e não da pessoa; a regra é a mesma para todos; mede-se o ganho, não quem recebe; a mesma tabela favorece tratamentos que melhoram a vida de quem tem deficiência). A citação virou indicação de leitura, não argumento de autoridade;
- "reconheceu o que ela tem de certo" é uma concessão à crítica dentro do bloco da defesa, o que ajuda o equilíbrio.

Resto de polimento em P1.

### POLIMENTOS da rodada 2

- **P1 · Glossário, "Regra do resgate" ("impulso") — RESOLVIDO.** *"O dever de socorrer uma pessoa identificada e em perigo imediato, mesmo a um custo que salvaria mais pessoas de outra forma."* Coerente com o corpo da limitação 6.
- **P2 · `#lim-8`, frase da defesa dentro do exemplo; crítica sem fonte — RESOLVIDO EM PARTE.** O exemplo ficou só com a crítica: *"Para quem precisava dele, a mensagem que chega é 'a sua vida não vale R$ 200 mil'. A recusa cai sobre uma pessoa com nome; o ganho prometido em troca, sobre desconhecidos."* A crítica continua sem fonte (*"É uma objeção antiga a toda a ideia de maximizar a saúde total"*), enquanto a defesa tem uma.
- **P3 · `#vantagens`, ressalva do item 4 ("supõe que o orçamento é fixo") — RESOLVIDO.** *"Ninguém sabe ao certo de onde o dinheiro sai nem quanto de saúde ele renderia lá. O valor de referência é uma estimativa, e o tamanho do orçamento também é uma escolha."* Não contradiz mais a Parte 1 e diz o que o argumento de fato supõe.
- **P4 · `#vantagens`, itens 1 e 3 — NÃO RESOLVIDO.** Continuam *"Sem uma medida única, não há como comparar… ganharia quem tivesse mais voz"* e a ressalva do item 3 sem dizer quem monta o estudo.
- **P5 · Caixa "O limiar brasileiro mede o custo de oportunidade?" (erro numa direção só) — NÃO RESOLVIDO.**
- **P6 · `resultado()`, vocabulário do bônus de coerência — RESOLVIDO.** *"O comitê foi coerente: nunca aprovou um pedido mais caro por QALY depois de recusar um mais barato, sem a justificativa da prioridade."* "Pior" e "melhor" saíram; a Praça agora descreve, não julga pela régua. Ver P3 desta rodada para um efeito colateral pequeno.
- **P7 · Depoimentos (casos "sem rosto" na voz de profissionais; `p8a.viu`; "cadeirante") — NÃO RESOLVIDO.** Permanecem *"A régua não se comove com a palavra 'moderno'"* e *"Marina, 38 anos, cadeirante há doze"*.
- **P8 · `renderAta`, rótulo "Fora da conta" em `p3b` — RESOLVIDO; um parágrafo por caso — NÃO RESOLVIDO.** `p3b.nao` agora é *"O remédio é o mesmo do outro pedido da reunião. Só o peso do estado de saúde muda, e com ele o resultado."* O rótulo "Fora da conta" não é exato para essa frase, mas ela é justa e deixou de dizer "Aqui a conta fecha". Nos casos de custo alto (`p6a`, `p7a`) a ata continua mostrando só o que ficou fora.
- **P9 · `eqRender`, "pior que a morte" sem ressalva — NÃO RESOLVIDO.**
- **P10 · Restos menores — RESOLVIDO EM PARTE.** Resolvido: `#plenario`, *"às vezes a conta mostra o que a história esconde, às vezes é o contrário"* (simétrico, melhor do que a redação que sugeri). Não resolvidos: `#lim-4` (defesa não responde a cuidadores nem a paliativos), `#lim-5` (Menzel no bloco da defesa), `#lim-7` (*"A vacina de hoje perde"*), `#problema` (*"Um remédio de câncer dá alguns meses a mais"*), `#alternativas` (*"Resolve a crítica da deficiência"*), `irma` só em `p3a`.
- **P11 · `#lim-6`, defesa não responde ao argumento de justiça — NÃO RESOLVIDO.**

## PROBLEMAS NOVOS DAS ÚLTIMAS CORREÇÕES

Examinei as três mudanças. Nenhuma gerou item IMPORTANTE.

1. **`#lim-8`, "O que se faz na prática", Justiça e STF.** Trecho: *"Na Justiça, pedidos de tratamento são discutidos a partir do direito de cada pessoa à saúde, e as decisões mais recentes do Supremo Tribunal Federal passaram a levar em conta a avaliação da Conitec. As duas lógicas convivem, em tensão permanente."* É descritivo e não toma partido: não diz que a judicialização é abuso (o que os defensores da conta costumam dizer) nem que é o direito sendo cumprido (o que os críticos dizem). As duas omissões são simétricas. O fecho "em tensão permanente" continua sendo a frase certa. Dois reparos de polimento em P2.

2. **Reunião sem a régua fora da regra de coerência (`fecharReuniao`: `!semRegua(G)` e `!h.sr`).** É justo: o jogador não via o custo por QALY e não pode ser acusado de incoerência por um número que não tinha. A mudança reduz, um pouco, o quanto a Praça julga pela régua, o que vai na direção que pedi na rodada 1. Efeito colateral de texto em P3.

3. **Depoimentos sem o rodapé "na consulta pública" (`casoHtml`).** O rodapé agora é só quem fala (*"Dona Zefa, 71 anos"*, *"médica de família"*). Não muda o equilíbrio das vozes. O contexto continua dado em `#gStart` (*"o depoimento de alguém que veio opinar"*). No jornal, a carta de `p8a` assinada *"porta-voz de uma campanha pelo remédio"* ao lado da "Repercussão" sobre a campanha paga pelo fabricante funciona bem e não ridiculariza pacientes.

## NOTAS (0–10 por critério)

| Critério | Rodada 1 | Rodada 2 | Rodada 3 | Resumo |
|---|---|---|---|---|
| Fidelidade às críticas | 5,5 | 8,5 | 9 | Guia: 2, 3, 6 e 8 na versão forte; glossário coerente com o corpo. Falta fonte na 8. Jogo: os depoimentos críticos argumentam |
| Fidelidade às defesas | 7,5 | 8 | 8,5 | A defesa da 3 agora se sustenta nos argumentos e cita Singer com a filiação declarada. A ressalva da vantagem 4 ficou precisa. A defesa da 6 ainda não responde ao argumento de justiça |
| Contra-argumento presente em cada limitação | 7 | 8,5 | 8,5 | Presente nas oito, no bloco certo. Na 4 e na 6, responde só a parte da crítica |
| Linguagem respeitosa | 7 | 8,5 | 8,5 | Pesos são de estados, não de pessoas. Restam "pior que a morte" sem ressalva no interativo, "cadeirante" e a ironia de `p8a.viu` |
| Equilíbrio e autonomia do leitor (inclui o jogo) | 6 | 8,5 | 9 | Nenhuma frase do guia dá veredito. Fechos e perguntas neutros. No jogo, três jurados sem nota única, e nem os jurados nem o jornal têm resposta certa embutida |

Guia e jogo, em separado. Guia: 9 em fidelidade às críticas e em equilíbrio; 8,5 nos outros três. Jogo: 8,5 nos cinco critérios; o que o separa do 9 são as vozes dos casos "sem rosto", todas de profissionais, e a ata que, nos casos caros, lembra só o que ficou fora da conta.

## PROBLEMAS

Nenhum BLOQUEANTE. Nenhum IMPORTANTE.

### POLIMENTO

- **[POLIMENTO] P1 · `#lim-3`, defesa · a contestação é afirmada sem fonte.**
  Evidência: *"Os críticos não aceitam essa resposta, e o debate continua."* A frase é verdadeira e necessária, mas é a única afirmação do bloco sem referência. Harris respondeu no mesmo periódico e no mesmo ano. Sugestão, se o registro puder ser conferido pela regra do projeto: *"Os críticos não aceitam essa resposta (Harris, 1995), e o debate continua."* Se não puder, manter como está; não vale trocar por nada mais fraco.

- **[POLIMENTO] P2 · `#lim-8`, "O que se faz na prática" · frase do STF vaga e sem fonte; "as duas lógicas" sem antecedente claro.**
  Evidência: *"as decisões mais recentes do Supremo Tribunal Federal passaram a levar em conta a avaliação da Conitec. As duas lógicas convivem, em tensão permanente."* É o único fato do guia sobre o Judiciário e não tem referência na lista. E "as duas lógicas" pede que o leitor adivinhe quais. Sugestão: *"Na Justiça, pedidos de tratamento são discutidos a partir do direito de cada pessoa à saúde; em decisões recentes, o Supremo Tribunal Federal passou a exigir que os juízes considerem a avaliação da Conitec (fonte). A lógica do direito individual e a da comparação entre usos do dinheiro convivem, em tensão permanente."*

- **[POLIMENTO] P3 · `resultado()`, bônus de coerência · a frase pode ficar literalmente falsa depois da mudança.**
  Evidência: *"O comitê foi coerente: nunca aprovou um pedido mais caro por QALY depois de recusar um mais barato, sem a justificativa da prioridade."* Como a reunião sem a régua deixou de contar, quem recusou a proteção contra bronquiolite (R$ 20 mil por QALY) no tutorial e depois aprovou um pedido comum de custo maior recebe o bônus com um "nunca" que não é verdade. Sugestão: *"O comitê foi coerente: nas reuniões com a régua, nunca aprovou…"*.

- **[POLIMENTO] P4 · `#vantagens`, itens 1 e 3 (resto da rodada 2).**
  Item 1: *"Sem uma medida única, não há como comparar… ganharia quem tivesse mais voz."* É absoluto; a Parte 7 do próprio guia lista outros modos de comparar. Sugestão: *"Sem uma medida comum, fica muito mais difícil comparar… e tende a ganhar quem tem mais voz."* Item 3, ressalva: acrescentar *"e quem monta o estudo, em geral, é quem pede a incorporação."*

- **[POLIMENTO] P5 · Caixa "O limiar brasileiro mede o custo de oportunidade?" (resto das rodadas 1 e 2).**
  Evidência: *"Se a mais baixa estiver certa, um tratamento aprovado perto do limiar pode tirar de outros serviços mais saúde do que acrescenta."* O erro é discutido numa direção só. Acrescentar: *"Há também quem ache o valor baixo demais para o que o país poderia gastar com saúde, e quem lembre que o dinheiro de um 'não' nem sempre vai para outro cuidado."*

- **[POLIMENTO] P6 · Jogo, depoimentos e textos dos casos (resto das rodadas 1 e 2).**
  `p8a.viu`: *"A régua não se comove com a palavra 'moderno'"* → *"A régua mediu o ganho sobre o remédio que já existe: mínimo, para um preço quatro vezes maior."* `p3a.dep.q`: *"cadeirante há doze"* → *"usa cadeira de rodas há doze anos"*. Dar a um dos casos "sem rosto" (`p6b`, por exemplo) a voz de uma usuária comum, e não de profissional.

- **[POLIMENTO] P7 · `eqRender`, peso negativo (resto das rodadas 1 e 2).**
  Evidência: *"Na pesquisa brasileira, as pessoas avaliaram este estado como pior que a morte."* Acrescentar: *"Quem respondeu, na maioria, nunca viveu este estado: imaginou."*

- **[POLIMENTO] P8 · `#lim-6` e `#lim-4`, defesas que respondem a parte da crítica (resto da rodada 2).**
  `#lim-6`: a defesa responde à regra do resgate e não ao argumento de justiça. Uma frase: *"Dar prioridade aos mais graves tem um custo em saúde total, e é preciso dizer quanto se aceita pagar por ela."* `#lim-4`: uma frase sobre cuidadores e paliativos.

- **[POLIMENTO] P9 · `renderAta`, casos de custo alto.**
  Em `p6a` e `p7a` a ata mostra só "Fora da conta". Sugestão: *"A régua mostrou: R$ 400 mil por QALY. Fora da conta: a gravidade…"*. Em `p3b`, o rótulo "Fora da conta" não descreve a frase; um rótulo neutro ("Para comparar") serviria.

- **[POLIMENTO] P10 · Restos menores.**
  `#lim-8`: citar uma fonte para a objeção no bloco do problema (Harris, 1987, já está nas referências). `#lim-5`: mover Menzel para a prática. `#lim-7`: *"pode perder"*. `#problema`: *"Um remédio para câncer avançado pode dar alguns meses a mais."* `#alternativas`: *"Responde à crítica da deficiência."* `irma:'p3a'` em `p3b`, para que negar ao grupo sem deficiência e aprovar para o outro também conte como tratamento desigual. Capturas do jogo: regerar, pois são as mesmas da rodada 2.

## O QUE ESTÁ BOM (para não ser desfeito)

- `#lim-3`, defesa: a citação de Singer com a filiação declarada ("autores favoráveis à medida"), o verbo "sustentou", a concessão "reconheceu o que ela tem de certo" e a frase seguinte sobre os críticos. Não trocar por um resumo do argumento sem ter lido o artigo inteiro.
- `#lim-3`, problema e exemplo: a crítica em primeira pessoa, o peso como propriedade do estado e a etiqueta de números ilustrativos.
- `#lim-8`: a objeção enunciada como objeção, o exemplo sem refutação embutida, *"Recusar a conta não faz o limite desaparecer: alguém continua ficando sem, só que sem regra conhecida"* e *"As duas lógicas convivem, em tensão permanente."*
- `#lim-2` e `#lim-6`: Harris com a razão; os dois argumentos (justiça e dever de socorrer) separados; o caso real da atrofia muscular espinhal sem refutação no exemplo.
- Glossário: "O dever de socorrer…".
- `#vantagens`: o formato "A ressalva" nos cinco cartões, e a ressalva nova do item 4.
- O parágrafo da Parte 1 sobre o orçamento como decisão política; o fecho *"O que fica de pé dos dois lados"*; as quatro perguntas de "Para pensar"; *"Este guia não tem conclusão."*
- `#plenario`: *"às vezes a conta mostra o que a história esconde, às vezes é o contrário."*
- Jogo: a regra de coerência com a exceção da prioridade e, agora, sem a reunião do tutorial; o bônus descrito em custo por QALY, sem "pior" e "melhor".
- Jogo: três jurados sem nota única (*"nenhuma decisão agrada aos três"*), títulos descritivos, cartas do jornal com a mesma fórmula para os dois lados, "pela hipótese do jogo" no painel e no jornal, a caixa de simplificações.
- Jogo: os depoimentos da mãe do Heitor, de Marina, Dona Olga, Sandra, Rosa, Jorge, Dona Zefa, Luciana e Seu Anísio; Carlos e Dona Lúcia falando pelo afeto, com dignidade.
- "Sobre": a separação entre dado real e ilustrativo e *"Isso não substitui a leitura por pessoas reais."*
