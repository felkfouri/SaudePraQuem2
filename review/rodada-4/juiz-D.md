# Parecer do Juiz D — Checador de fatos e técnico · Rodada 4

```
VEREDITO: REPROVA
```

Motivo em uma frase: tudo o que pedi na rodada 3 foi atendido no site e as fontes novas conferem, mas o caso novo do interativo "Quanto custa um QALY?" mostra, na mesma tela, um selo verde "abaixo da referência" para R$ 80.000 por QALY e um parágrafo que diz "acima da referência de R$ 40 mil"; o selo está errado pelo vocabulário do próprio site e o portão não vê. É um item só, com correção de uma linha.

Versão julgada: `index.html` com md5 `bdc055cb18ff2e45462426af6afb563d`, 188.227 bytes (commit `25adc74`). Não toquei em nenhum arquivo além deste parecer. `git status` limpo ao fim, fora este parecer.

## CONFERÊNCIA DA RODADA 3

| # | Polimento pedido na rodada 3 | Situação | Evidência |
|---|---|---|---|
| 1 | `#lim-8`: frase sobre o Supremo colada à página da Conitec e com referência em `#refs` | RESOLVIDO | Texto atual: "O Supremo Tribunal Federal fixou condições para o fornecimento de medicamentos que não estão nas listas do SUS; uma delas é mostrar que a decisão da Conitec de não incluir o medicamento é ilegal (Conitec, Judicialização)". Sumiram "mais recentes" e "passaram a"; fala de medicamentos, como a página. `#r-jud` existe em `#refs`; F123 criado. Resta um detalhe (polimento 3) |
| 2 | `#lim-3`: réplica de Harris citada | RESOLVIDO | "a réplica saiu no mesmo número da revista: para ela, o QALY continua sujeito à acusação de dupla penalização (Harris, 1995)"; `#r-harris95` em `#refs`; F122 criado |
| 3 | Contradições de FONTES.md | EM PARTE | (a) Nota do Mapa (linha 20): agora "F121, verificada em páginas oficiais". RESOLVIDO. (b) Parte C: a nota explica que os itens 4, 7 e 15 "ficam na lista como registro", mas eles seguem debaixo do título "O site não deve afirmar como fato". EM PARTE. (c) F84 continua "parcial (conclusões por condição não lidas)" e a linha 81 do Mapa também. NÃO RESOLVIDO. (d) Linha 408: "Os DOIs vêm do PubMed e não foram testados em doi.org" continua. NÃO RESOLVIDO. (e) A tabela do Mapa é a da rodada 1 (linha 104 ainda dá a consulta pública como "parcial", e F124 a dá como verificada) |
| 4 | Literais "R$ 120 mil por QALY" e "9.148" com teste | RESOLVIDO | `tests/calc.js`, linha 80: `tem('(R$ 120 mil por QALY)')`, `tem('9.148 pessoas')`, `tem('No caso brasileiro, 9.148')`. As três mutações agora derrubam `npm test` (tabela abaixo) |
| 5 | Consulta pública registrada no catálogo | RESOLVIDO | F124: página "Consultas públicas" da Conitec, "qualquer cidadão… por formulário eletrônico" |
| 6 | Portão sem teste da folha de fontes; dois `ok(true, …)` | NÃO RESOLVIDO | `media="print"` → `media="all"` passa em `npm test`; `tests/pagina.js` linhas 108 e 164 continuam `ok(true, …)` |
| 7 | "autores favoráveis à medida" (`#lim-3`) | NÃO RESOLVIDO (aceitável) | Mesma redação; segue leitura razoável do resumo |
| 8 | 320 px: letra de 8,8 px no topo; tabela com rolagem interna; deslizantes de 16 px | NÃO RESOLVIDO | Medi de novo: 8,8 px em `.hero-art`; `.tablewrap` 261 px em 244 px |
| 9 | Restos da rodada 1 e frase "sem imagens nem bibliotecas" do `portao.md` | NÃO RESOLVIDO | Sem mudança |

## NOTAS (0–10 por critério)

| Critério | Nota | Por quê |
|---|---|---|
| Cobertura de fontes | 9 | As três mudanças de texto têm fato novo (F122 a F124) e fonte que abri hoje. O catálogo ainda guarda três incoerências antigas |
| Verificação das referências (amostra reconferida) | 9,5 | PMID 7674278 e 7674279 e a página da Conitec reconferidos hoje; a citação nova bate campo a campo |
| Portão automático | 8,5 | Verde, 56 itens, reproduzível; os testes novos de `avaliar` pegam cinco mutações. Não pega o selo errado (item importante), nem dois literais novos do interativo, nem a folha de fontes |
| Funcionamento no celular | 8,5 | Sem rolagem horizontal, sem corte, zero erros de console, partida completa em 375 e 320 px. Perde ponto pelo selo que contradiz o texto ao lado |
| Desempenho | 9,5 | Carga em 117 ms (375) e 133 ms (320) na minha máquina; 59.780 bytes com gzip |

## PROBLEMAS

Nenhum BLOQUEANTE.

### IMPORTANTE

1. **[IMPORTANTE] `#rcei`, selo `#rcSelo` · no caso "escolha de prioridade", o selo diz "abaixo da referência" para um valor que o parágrafo ao lado diz estar "acima da referência de R$ 40 mil".**
   - Como reproduzir: limiar "R$ 120 mil por QALY (3 vezes)"; atual 0 / 0; novo 80.000 / 1.
   - Evidência (texto lido da tela em 375 e 320 px; captura em `…/scratchpad/juizD4/cel/375-selo.png`): quadro "Custo por QALY · R$ 80.000 · por QALY ganho · **abaixo da referência**" (selo verde, classe `badge ok`). Logo abaixo, `#rcVerd`: "Fica abaixo do limite de R$ 120 mil que a Conitec admite em situações específicas, mas **acima da referência de R$ 40 mil**."
   - Por que não é só estilo: a própria tela define "R$ 40 mil é a referência da Conitec" (dica sob o seletor) e F37 diz o mesmo. R$ 80.000 não está abaixo da referência. O selo é a parte da tela que se lê de relance e a que vai para captura; neste caminho ele afirma o contrário do texto e do fato. É justamente o caso criado nesta rodada para responder ao item do Juiz B.
   - Causa: `index.html`, linha 1552: `badge(o.ok?'ok':'no', … (o.ok?'abaixo da referência':'acima da referência') …)` não olha `o.prioridade`.
   - Correção: quando `o.prioridade` for verdadeiro, selo próprio, por exemplo "acima da referência, dentro do limite de 3 vezes" (de preferência com cor neutra, não o verde de "ok"). E um dente no portão: em `tests/pagina.js`, linha 122, além de `#rcVerd` conter "escolha de prioridade", exigir que `#rcSelo` não contenha "abaixo da referência".
   - Do mesmo problema, para acertar junto (sozinhos seriam polimento): com limiar de R$ 120 mil e 20.000 / 1, o veredito diz "abaixo do valor de referência de R$ 120 mil"; a Conitec chama de valor de referência só os R$ 40 mil (F37, F39), e o ramo "acima" do mesmo código já diz "limite de R$ 120 mil admitido em situações específicas". O rótulo do seletor, "Valor de referência (limiar)", com a opção de R$ 120 mil, alimenta a mesma confusão.

### POLIMENTO

1. **[POLIMENTO] `#rcei`, veredito · "escolha de prioridade (doença rara, grave, de crianças)" lista três das quatro situações.** O relatório da Conitec (F40) e o próprio site, em `#decisao`, dão quatro: rara, de crianças, grave e "doença endêmica em populações de baixa renda com poucas alternativas". O parêntese parece lista fechada. Correção: "(por exemplo, doença rara, grave ou de crianças)" ou incluir a quarta. Sem número, sem erro de fato.
2. **[POLIMENTO] Portão · literais novos do interativo sem teste.** Trocar "(doença rara, grave, de crianças)" por "(doença ultrarrara)" passa em `npm test` (e ultrarrara é exatamente o que F41 diz estar fora da regra). Trocar "o custo a mais dividido por R$ 40 mil, sempre" por "R$ 50 mil" também passa. Correção: dois `tem(…)` em `tests/calc.js`.
3. **[POLIMENTO] `#lim-8` · a condição do Supremo foi resumida a um dos três casos.** A página diz: "que a decisão da Conitec de não incluir o medicamento nas listas do SUS é ilegal, que não houve pedido de inclusão ou houve demora excessiva na sua análise". O site: "uma delas é mostrar que a decisão da Conitec de não incluir o medicamento é ilegal". Correção: "…é ilegal, ou que não houve pedido de inclusão, ou que a análise demorou demais".
4. **[POLIMENTO] FONTES.md · incoerências que sobraram** (linha 3 da conferência): F84 "parcial" × nota da Parte C; itens 4, 7 e 15 ainda sob "O site não deve afirmar como fato"; linha 408 "não foram testados em doi.org"; Mapa, linha 104, consulta pública "parcial" × F124 "verificada". F123 diz "conferida pelo Juiz D nas rodadas 2 e 3": pode acrescentar a 4.
5. **[POLIMENTO] Portão · dentes antigos.** Folha de fontes (`media="print"` → `"all"` passa); `ok(true, …)` nas linhas 108 e 164 de `tests/pagina.js`.
6. **[POLIMENTO] `#lim-3` · "O artigo usa um argumento de imparcialidade".** A fonte é o resumo da réplica, não o do artigo (o resumo de Singer et al. não fala em véu da ignorância). F122 declara isso, e está certo. "Imparcialidade" é palavra do site para "veil of ignorance"; a explicação que vem depois ("que regra cada um escolheria sem saber se terá ou não uma deficiência") é fiel. Se quiser colar à fonte: "o argumento do véu da ignorância, de John Rawls: que regra…".
7. **[POLIMENTO] `#rcei` no celular · o veredito do caso novo ocupa 435 px de altura em 375 px e 543 px em 320 px** (a tela tem 640). Cabe, sem corte, mas enche a tela. Se sobrar tempo, cortar "que a Conitec admite em situações específicas" (já está na dica do seletor).
8. **[POLIMENTO] Celular, 320 px, e restos antigos** (linhas 7 a 9 da conferência).

## COBERTURA DE FONTES DO QUE MUDOU

| # | Texto do site | Onde conferi hoje | Bateu? |
|---|---|---|---|
| 1 | `#lim-3`: "O artigo usa um argumento de imparcialidade: que regra cada um escolheria sem saber se terá ou não uma deficiência" | PubMed, PMID 7674279, [doi:10.1136/jme.21.3.151](https://doi.org/10.1136/jme.21.3.151): "The paper then analyses the use to which the notorious 'veil of ignorance' has been put both by Singer et al and by others". PMID 7674278, [doi:10.1136/jme.21.3.144](https://doi.org/10.1136/jme.21.3.144): o resumo do artigo não menciona o argumento | Sim, pelo resumo da réplica (polimento 6) |
| 2 | `#lim-3`: "para ela, o QALY continua sujeito à acusação de dupla penalização (Harris, 1995)" | PubMed, PMID 7674279: "the QALY and other similar measures… remain vulnerable to the charge of double jeopardy" | Sim, quase tradução |
| 3 | `#lim-3`: "a réplica saiu no mesmo número da revista" | PubMed: os dois em J Med Ethics, jun. 1995, volume 21, número 3, páginas 144-50 e 151-7 | Sim |
| 4 | `#refs`: "Harris J. Double jeopardy and the veil of ignorance--a reply. J Med Ethics. 1995;21(3):151-7. doi:10.1136/jme.21.3.151. PMID 7674279" | PubMed, mesmo registro: autor único Harris J; título idêntico; volume 21, número 3, páginas 151-7; DOI idêntico | Sim, campo a campo |
| 5 | `#lim-8`: Supremo "fixou condições para o fornecimento de medicamentos que não estão nas listas do SUS; uma delas é mostrar que a decisão da Conitec de não incluir o medicamento é ilegal" | `https://www.gov.br/conitec/pt-br/judicializacao` (`curl -L -A 'Mozilla/5.0'`, HTTP 200; "Publicado em 03/02/2025", "Modificado em 17/03/2026"): seis condições "De acordo com o Supremo Tribunal Federal (STF)"; a segunda é a citada | Sim; a condição tem mais dois casos (polimento 3) |
| 6 | `#refs`: "Conitec. Judicialização [internet]" com o endereço | Mesmo endereço, título da página "Judicialização" | Sim |
| 7 | `#rcei`: "escolha de prioridade (doença rara, grave, de crianças)" | F40 (Quadro 1 do relatório da Conitec, conferido na rodada 1) e `#decisao` | Coerente, mas incompleto: falta a quarta situação (polimento 1) |
| 8 | `#rcei`: saúde deslocada = custo a mais ÷ R$ 40 mil, "sempre"; "É uma hipótese didática" | F37 (R$ 40 mil); a tela declara que é hipótese | Sim; não se apresenta como dado |

Pelo critério da rodada: nenhum número, data, citação entre aspas ou resultado de estudo novo ficou sem fonte verificada. Nenhuma afirmação se apoia em fato "não verificada".

## PORTÃO, MUTAÇÕES, CELULAR E LINKS (o que rodei)

- `npm test`: código 0. calc.js 149 verificações (eram 119); dados.js 10 pautas e 21 casos; equilibrio.js 32.400 partidas, sem falhas.
- `node tests/pagina.js <meu scratchpad>/juizD4/saida`: código 0, 56 itens, nenhuma FALHA. Tirando tempos e a data, o relatório é idêntico ao `review/rodada-4/portao.md`.
- Testes novos de `avaliar` (`tests/calc.js`, linhas 55 a 60 e 72 a 73): fixam `REF = 40.000`, a saúde deslocada pela referência com limiar de 3 vezes (60 QALYs no caso de R$ 2,4 milhões), os três casos de `prioridade` (80.000/1 com 120 mil: verdadeiro; com 40 mil: falso; 20.000/1 com 120 mil: falso) e uma varredura de 15 pares que amarra `prioridade` ao sinal do saldo. São testes com dente (tabela).
- Capturas: abri `review/rodada-4/375-rcei.png` (seção certa, sem corte).

Mutações, numa cópia no scratchpad (arquivos reais intactos; md5 do `index.html` igual antes e depois):

| Mutação | `npm test` |
|---|---|
| `deslocada:dC/REF` → `deslocada:dC/lim` (a pedida) | **pegou** (calc.js) |
| `bls:dE-dC/REF` → `bls:dE-dC/lim` | **pegou** |
| `const REF=40000` → `50000` | **pegou** |
| `o.prioridade=…` → `o.prioridade=false` | **pegou** |
| "(R$ 120 mil por QALY)" → "(R$ 160 mil por QALY)" | **pegou** (sobrevivia na rodada 3) |
| "entrevistaram 9.148" → "9.418" | **pegou** (sobrevivia na rodada 3) |
| "No caso brasileiro, 9.148" → "9.418" | **pegou** |
| "(doença rara, grave, de crianças)" → "(doença ultrarrara)" | sobreviveu |
| "dividido por R$ 40 mil, sempre" → "R$ 50 mil" | sobreviveu |
| `media="print"` → `media="all"` na folha de fontes | sobreviveu |

Celular, script próprio em Playwright (`isMobile`, toque, 375 × 740 e 320 × 640, todos os `<details>` abertos):

| Verificação | 375 px | 320 px |
|---|---|---|
| `scrollWidth` do guia | 375 | 320 |
| Elementos vazando para fora da página | nenhum | nenhum |
| Texto cortado por `overflow` ou `<text>` fora do SVG (fora rótulos só de leitor de tela) | nenhum | nenhum |
| Rolagem interna | menu de seções (de propósito) | menu de seções; tabela de `#peso` (261 em 244 px) |
| Menor letra em gráfico | 10,5 px | 8,8 px (ilustração do topo) |
| Custo por QALY, R$ 120 mil, 0 / 0 e 80.000 / 1: texto novo | cabe: 299 px de largura, 435 px de altura, sem corte nem rolagem | cabe: 244 px de largura, 543 px de altura, sem corte nem rolagem |
| Mesma tela: quadros | R$ 80.000; "Saúde que sai de outro lugar" 2,00; selo "abaixo da referência" (**item importante**) | idem |
| Jogo, partida 1234 completa (início, 3 reuniões, 3 atas, jornal) | sem rolagem, sem corte, sem "undefined" ou "NaN"; painel −472 | idem |
| Erros de console | 0 | 0 |
| Carga | 117 ms | 133 ms |

Links novos de `#refs`:

| Link | Resultado |
|---|---|
| `https://www.gov.br/conitec/pt-br/judicializacao` | HTTP 200, conteúdo conferido |
| `https://doi.org/10.1136/jme.21.3.151` | doi.org responde 302 para `https://jme.bmj.com/lookup/doi/10.1136/jme.21.3.151`; o registro do DOI (API de handles do doi.org) aponta para o mesmo endereço. O destino final no site da BMJ não abre daqui (o proxy do ambiente recusa o domínio, 403 no túnel), então não vi a página da editora. O texto aberto existe: PMC1376690, HTTP 200 |

## O QUE ESTÁ BOM (para não ser desfeito)

- `#lim-3` agora dá os dois lados com fonte: o argumento de Singer e colaboradores e a réplica de Harris, cada um dizendo só o que os resumos dizem.
- `#lim-8` ficou colado à página da Conitec, sem cronologia inventada, e a página está em `#refs`.
- A saúde deslocada usa sempre a referência de R$ 40 mil, e a tela diz que isso é hipótese didática. O parágrafo do caso intermediário ("escolha de prioridade… não um resultado da conta") é honesto e está certo; o defeito é só o selo.
- Testes de `avaliar`: cinco mutações de lógica pegas, inclusive a pedida. `REF` preso em 40.000.
- "R$ 120 mil por QALY" e "9.148" agora têm teste.
- F122, F123 e F124 criados com a limitação declarada (resumo no PubMed; "o site não afirma data nem cronologia").
- Portão reproduzível: rodei e saiu o mesmo relatório.
- Zero erros de console, partida padrão completa e nenhum vazamento em 375 e 320 px; página abaixo de 60 kB com gzip.
- Nenhuma referência inventada e nenhum número novo sem fonte.
