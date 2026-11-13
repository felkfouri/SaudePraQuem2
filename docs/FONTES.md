# FONTES — catálogo de fatos e referências do site "A régua da saúde"

Catálogo único das afirmações factuais do site e de suas fontes. Consolida quatro arquivos de `docs/pesquisa/` (`fontes-primarias.md`, `brasil-decisao.md`, `eq5d-tarifas.md`, `criticas-alternativas.md`). Onde eles divergem, vale `fontes-primarias.md` (segunda passada, em documentos primários) e a divergência fica registrada no próprio fato. Nada aqui vem de memória nem de pesquisa nova.

**Data da conferência:** 13 nov. 2026.

**Status**
- **verificada**: documento primário aberto e lido no trecho citado; ou registro do PubMed (para dados bibliográficos e resumo).
- **parcial**: só fontes secundárias ou trechos de buscador concordantes; a redação pode não ser literal.
- **não verificada**: não usar como fato no site.

"Conta das notas" indica cálculo feito pelos pesquisadores sobre números verificados, não frase da fonte. "p. PDF" é a página do arquivo.

**Limitações de acesso (não abriram):** planalto.gov.br e bvsms.saude.gov.br (leis e decretos); agenciadenoticias.ibge.gov.br; congress.gov; ssa.gov; thelancet.com (Pichon-Riviere 2023); journals.sagepub.com (texto de Santos 2016); suplemento de Woods 2016; atsinc.com.br; em gov.br/conitec, a notícia de set. 2022, a página geral de participação social e a cartilha "Inovação normativa" (HTTP 401); documento do ICER de dez. 2018 (não localizado). A versão oficial em português do EQ-5D só sai mediante registro na EuroQol. A 2ª edição (2014) da Diretriz de Avaliação Econômica e o relatório oncológico da Conitec não foram abertos.

---

## Mapa — onde cada afirmação do site se apoia

> Atualizado na rodada 1. Afirmações acrescentadas depois da tabela abaixo: orçamento como decisão política e direito à saúde (#problema, #lim-8) → F121, parcial; exemplo numérico da aposta padrão (#peso) → F116; "outros desfechos… importantes pelo paciente" (#lim-4) → F115; consulta pública (#vantagens, #alternativas) → F118; WELLBY (#alternativas) → F119; subgrupos em oncologia (#lim-3) → F120; EQ-5D "um dos mais usados" (#peso) → F117; ultrarrara = até 1 em 50 mil (#decisao) → F41; perspectiva do SUS e impacto orçamentário (#decisao) → F55 (perspectiva) e R4 (a portaria de 2025 prevê um valor de referência de impacto orçamentário). Linhas da tabela que apontavam divergências já corrigidas foram mantidas como registro.

Auditoria do texto do guia (`index.html`, de `#guia` até `#sobre`) e dos textos do jogo (TUTORIAL, PAUTAS, BREVES) feita em 13 nov. 2026. Cada linha é uma afirmação factual do site; exemplos declarados ilustrativos e contas aritméticas ficaram de fora. "—" na coluna Fato(s) quer dizer que não há fato correspondente na Parte A. Quando o status do fato é misto, vale aqui o da parte que o site usa. "Divergência" marca diferença de número, redação ou sentido entre o site e o fato.

| Seção do site (âncora) | Afirmação (resumida, com o número) | Fato(s) | Status |
|---|---|---|---|
| `#problema` | O QALY é a medida comum de saúde "mais usada no mundo" | — | sem fato |
| `#qaly` | QALY = quality-adjusted life year; peso com dois pontos fixos: 1 = saúde plena, 0 = morte | F1 | verificada |
| `#qaly` | Há estados avaliados como piores que a morte, com peso negativo | F2 | verificada |
| `#qaly` | "A ideia tomou forma nos anos 1970" (Weinstein e Stason, 1977) | F3, F4 | parcial (F3); verificada (F4). F3 registra trabalhos anteriores (1968, 1970) |
| `#desenhe`, `#decisao`, `#lim-7`, `#glossario`, jogo | Diretriz brasileira: desconto de 5% ao ano, para custos e para saúde | F53 | verificada |
| `#peso` | O EQ-5D é o questionário "mais usado no mundo" | — | sem fato |
| `#peso`, `#glossario` | EQ-5D: cinco dimensões (mobilidade, cuidados pessoais, atividades habituais, dor ou mal-estar, ansiedade ou depressão) | F7, F8 | verificada (nomes da diretriz); redação oficial PT-BR não verificada |
| `#peso`, `#eq5d` | 3L: três respostas por pergunta ("sem problemas, alguns problemas, problemas extremos"); 243 estados | F7, F8 | verificada. Divergência de redação: a diretriz usa "nenhum problema / algum problema / problema grave" |
| `#peso` | A tarifa sai da "média das respostas"; cada país faz a sua porque os valores diferem entre povos | F16 (em parte) | verificada quanto ao estudo; F16 fala em modelo de efeitos mistos, não em média; a razão "povos diferentes" não tem fato |
| `#peso`, `#glossario` | TTO: horizonte de 10 anos; 7 anos em saúde plena → peso 7 ÷ 10 = 0,7 | F9 | verificada |
| `#peso`, `#glossario` | Aposta padrão: escolha entre ficar como está ou tratamento que pode curar ou matar; mais risco aceito, menor o peso | F12 | conceito verificado; descrição operacional **não verificada** (Parte C, item 4) |
| `#peso`, `#glossario` | DCE: a pessoa vê dois estados e diz qual prefere | F13 | verificada |
| `#peso` | TTO, aposta padrão e DCE são "as três mais usadas" | — | sem fato |
| `#peso`, `#lim-7` | Métodos e instrumentos diferentes dão pesos diferentes para o mesmo estado | F10, F33, F83 | verificada |
| `#peso`, `#vantagens` | Tarifa brasileira do EQ-5D-3L, publicada em 2016; 9.148 pessoas de 18 a 64 anos, entrevista em casa, TTO (Santos 2016) | F16 | verificada |
| `#peso` | Coleta "nas regiões de Belo Horizonte, Rio de Janeiro, Porto Alegre e Recife" (atribuída a Santos 2016) | F17 | verificada em fontes secundárias; divergência "MG" × "Belo Horizonte" registrada no fato; a fonte do fato não é o artigo de 2016 |
| `#peso`, `#lim-5` | É a tarifa que as diretrizes do Ministério da Saúde indicam | F26 | verificada |
| `#peso` | Melhor estado = 1; pior (33333) = −0,177 | F20, F21 | verificada (−0,177); a literatura cita −0,176 |
| `#peso`, `#meu-peso` | 10 dos 243 estados ficam abaixo de zero ("pior que a morte" na pesquisa brasileira) | F22 | verificada |
| `#peso`, `#glossario` | EQ-5D-5L tem cinco respostas por pergunta; até nov. 2026 sem tarifa brasileira; "em fase de valoração", segundo o Ministério | F28 | verificada (Parte C, item 1: redação dos níveis e nº de estados do 5L fora das notas) |
| `#peso` | Versão para crianças e adolescentes, com tarifa brasileira publicada em 2024 (Espirito Santo 2024) | F29, F30 | verificada |
| `#peso`, `#lim-5` | Quem respondeu à pesquisa brasileira foi a população geral | F16, F31 | verificada |
| `#peso`, `#lim-5` | Quem vive a condição tende a dar peso maior que o público; meta-análise confirmou (Peeters e Stiggelbout 2010) | F32, F33 | verificada |
| `#eq5d` | Coeficientes: constante 0,149; mobilidade 0,120/0,363; cuidados pessoais 0,112/0,218; atividades habituais 0,097/0,184; dor 0,064/0,168; ansiedade 0,050/0,095; saúde plena = 1 | F18, F19 | verificada |
| `#eq5d` | Coeficientes conferidos nos arquivos de cálculo da EuroQol, fundação responsável pelo questionário | F18, F15 | verificada |
| `#eq5d`, `#sobre` | O questionário oficial pertence à EuroQol; as frases do site são próprias | F15 | verificada |
| `#decisao`, `#glossario` | Conitec = Comissão Nacional de Incorporação de Tecnologias no SUS; avalia os pedidos e recomenda ao Ministério | F46, F48 | parcial |
| `#decisao`, `#rcei`, `#glossario`, `#lim-8` | Em 2022 a Conitec definiu R$ 40 mil por QALY como valor de referência | F37, F45 | verificada |
| `#decisao`, `#lim-3` | R$ 35 mil por ano de vida ganho, em situações excepcionais em que o QALY é indisponível ou inadequado | F37, F38 | verificada |
| `#decisao`, `#rcei`, `#lim-6`, `#glossario` | Até 3 vezes o valor de referência (R$ 120 mil por QALY), a critério da comissão | F39 | verificada |
| `#decisao`, `#lim-1`, `#lim-2`, `#lim-6` | Quatro situações: doenças raras, de crianças, doença grave, doença endêmica em populações de baixa renda com poucas alternativas | F40 | verificada |
| `#decisao` | Citação: a custo-efetividade "não deve ser um parâmetro isolado dos demais fatores envolvidos na discussão" | F42 | verificada até "demais fatores"; divergência: "envolvidos na discussão" não consta do fato |
| `#decisao`, `#lim-8` | Lei 14.313/2022: parâmetros de custo-efetividade "utilizados em combinação com outros critérios" | F47 | parcial (redação montada de trechos de busca; Parte C, item 7) |
| `#decisao`, `#lim-6` | Ultrarraras e terapias gênicas ficaram fora da regra | F41 | verificada (o fato inclui também as "curativas") |
| `#decisao` | Os valores são de 2022; a diretriz de 2026 repete R$ 40 mil e R$ 35 mil | F44, F52 | verificada |
| `#decisao` | NICE: desde abril de 2026, faixa de 25 mil a 35 mil libras por QALY | F64, F65 | verificada (dia exato não confirmado; o site só diz "abril") |
| `#decisao` | Custo de oportunidade no Brasil: 20% a 63% do PIB per capita, estimativa citada no relatório da Conitec (Woods 2016) | F60 | verificada como citação da Conitec |
| `#decisao` | O valor da Conitec é "referência de política", acima do que o sistema gasta para produzir um QALY | F43, F60, F61 | verificada; divergência de sentido: F43 diz que o valor foi calculado a partir do documento do BID; F61 dá 0,88 a 1,02 PIB per capita; a comparação com o PIB depende de F59 (parcial) |
| `#decisao` | NICE usa desconto de 3,5% | F69 | verificada |
| `#decisao`, `#lim-7` | A diretriz "pede" um cenário sem desconto | F54 | verificada; divergência de redação: o fato diz "sugere" |
| `#vantagens` | O QALY é usado "há décadas por órgãos de avaliação de vários países" | F4, F65, F79 (indireto) | sem fato específico |
| `#lim-1`, `#alternativas` | Análise de custo-efetividade distributiva mostra quem ganha e quem perde (Asaria 2016; Cookson 2017) | F103 | verificada |
| `#lim-2` | Fair innings: prioridade a quem ainda não chegou a uma vida completa (Williams 1997) | F72 | verificada |
| `#lim-2` | Harris 1987: os anos que restam valem igual para cada pessoa; medir assim é discriminar pela idade | F73 | verificada só quanto a "fatalmente falho"; o argumento descrito no site não está no fato |
| `#lim-2` | A regra da Conitec não tem peso por idade | F40 (indireto) | sem fato explícito (ausência) |
| `#lim-2` | EUA: a lei da negociação de preços (2022) veda tratar o prolongamento da vida de idoso como de menor valor | F76 | verificada (lei) |
| `#lim-3` | "Dupla penalização"; Singer 1995 conclui que o defensor do QALY tem resposta; Nord 1999: um ano ganho deve contar como um | F74 | verificada |
| `#lim-3` | "São raras as análises que separam os pacientes por deficiência" | F81 | verificada, mas só para análises em oncologia; divergência de alcance |
| `#lim-3` | EUA: a lei não proíbe o QALY; lei de 2010 veda ao programa público para idosos usar custo por QALY como limiar | F75 | verificada (o fato cita também o PCORI) |
| `#lim-3`, `#alternativas`, `#glossario`, jogo | evLY, criado por instituto americano (ICER): mesmo valor para cada ano de vida acrescentado; não capta melhora de qualidade nos anos acrescentados; usado ao lado do QALY | F78, F80 | verificada |
| `#lim-4`, jogo | O EQ-5D não tem pergunta sobre ouvir nem sobre enxergar | F7 | verificada |
| `#lim-4` | Em crianças, os métodos de valoração variam muito (Rowen 2020) | F85 | verificada |
| `#lim-4` | Cuidados paliativos: o QALY "parece não funcionar bem" (Normand 2009) | F86 | verificada (resumo; o fato restringe a "intervenções complexas") |
| `#lim-4` | Só 3% das avaliações na Inglaterra incluíram a qualidade de vida do cuidador (Pennington 2020) | F87 | verificada (12 de 414) |
| `#lim-4` | Saúde mental: razoável em ansiedade e depressão, pior na esquizofrenia (Mulhern 2014) | F82 | verificada |
| `#lim-4` | Perguntas extras para audição, visão e cansaço (Longworth 2014) | F84 | parcial |
| `#lim-4` | Questionário novo, mais amplo, que inclui cuidadores (Brazier 2022) | F88 | verificada |
| `#lim-4` | A Conitec pede que as análises descrevam outros resultados que os pacientes consideram importantes | F42 (aproximado) | sem fato com esse teor; o fato só diz não "limitar suas discussões ao QALY" |
| `#lim-4`, `#alternativas` | Pacientes e cuidadores relatam experiência nas reuniões (Perspectiva do Paciente) | F104 | verificada |
| `#lim-5` | As pessoas se adaptam e quem está de fora não prevê (Ubel 2003) | F34 | verificada |
| `#lim-5` | "A pergunta é se a adaptação deve contar" (atribuída a Menzel 2002) | F34 | verificada; divergência de atribuição: o fato dá essa tese a Dolan (R39) e, a Menzel, "nem só pacientes reais nem só hipotéticos" |
| `#lim-5` | A Suécia dá preferência aos valores dos pacientes (Brazier 2018) | F35 | parcial |
| `#lim-5` | Alguns pesquisadores defendem usar a experiência de quem vive o estado; caminho do meio: informar melhor o público | F32 | verificada |
| `#lim-6`, `#glossario` | "Regra do resgate" (Jonsen 1986) | F89 | parcial quanto ao texto de Jonsen (verificada via McKie e Richardson) |
| `#lim-6`, jogo | Em 2022 a Conitec avaliou terapia gênica para AME com custo por QALY acima de R$ 880 mil, contra o tratamento existente; sem limiar definido para ultrarraras (Relatório 793) | F106 | verificada (R$ 883.587 contra nusinersena) |
| `#lim-6` | Ser identificável não é razão para prioridade (McKie e Richardson 2003) | F89 | verificada |
| `#lim-6` | Mais de 4 mil britânicos: apoio a priorizar doenças graves, não a fim de vida nem a raras (Linley e Hughes 2013) | F91 | verificada (4.118) |
| `#lim-6` | NICE multiplica os QALYs por 1,2 ou 1,7 conforme a gravidade | F66 | verificada |
| `#lim-7` | Premissas do modelo: todo ano vale igual; a ordem não importa | F93, F94, F95 | parcial (F93); verificada (F94, F95) |
| `#lim-7` | Agregadas, as respostas sustentam bem melhor as premissas (Tsuchiya e Dolan 2005) | F94 | verificada |
| `#lim-7` | Debate sobre taxa de desconto menor para a saúde (Claxton 2011) | F96 | verificada |
| `#lim-8` | O limiar estima o custo de produzir saúde no sistema, não o preço de uma vida | F63, F97 | verificada |
| `#lim-8` | Estudos de disposição a pagar por QALY chegam a valores muito diferentes (Ryen e Svensson 2015) | F97 | verificada |
| `#limitacoes` | Boa parte das críticas éticas vale para qualquer medida (Rand e Kesselheim 2021) | F6 | verificada |
| `#alternativas` | O QALY costuma ser complementado, não trocado (Rand 2023) | F6 | verificada |
| `#alternativas`, `#glossario` | DALY: mede saúde perdida; usado para carga de doença (Murray 1994) | F99 | verificada |
| `#alternativas` | WELLBY: um ponto na satisfação com a vida, escala de 0 a 10, por um ano | F101 | parcial; sem referência na lista do site |
| `#alternativas` | Análise de decisão multicritério: vários critérios com pesos (Thokala 2016) | F102 | verificada |
| `#alternativas` | "Toda recomendação da Conitec passa por consulta pública" | F104 | parcial (consulta pública e base legal) |
| `#refs` | "Todas foram conferidas em novembro de 2026, no documento original ou no registro do PubMed" | Parte B | divergência: a Lei 14.313 (R6, `r-lei`) é [parcial], pois o Planalto não abriu |
| `#sobre` | São "reais, com fonte" a tarifa, os valores da Conitec, o desconto, os dados do NICE, "o que dizem as leis citadas" e os resultados dos estudos | F16–F22, F37–F44, F53, F64–F69, F47, F75, F76 | verificada, exceto a lei brasileira (F47, parcial) |
| jogo (PAUTAS, `insp`) | Imunização contra o vírus sincicial respiratório "avaliada pela Conitec" | F107 | verificada |
| jogo (PAUTAS, `insp`) | "O antigo critério de fim de vida e o atual modificador de gravidade do NICE" | F66, F67 | parcial (a substituição) |
| jogo (PAUTAS, `insp`) | Artroplastia de quadril, "uma das cirurgias com melhor custo por QALY na literatura" | F110 | verificada só para um estudo (US$ 7.307 por QALY aos 80 anos); o superlativo não tem fato |
| jogo (PAUTAS) | Ansiedade e depressão são uma das cinco perguntas do questionário | F7 | verificada |

## Parte A — Fatos

### 1. QALY e origem

**F1.** Os pesos de qualidade de vida do QALY ficam em escala intervalar "anchored at 0 (death) and 1 (full health)". — *Fonte:* R33. — *Status:* verificada.

**F2.** Há estados avaliados como piores que a morte (peso negativo): Torrance descreve a medida para estados "considered worse than death", e a tarifa brasileira tem 10 estados abaixo de zero (F22). — *Fonte:* R34 (resumo); R18. — *Status:* verificada.

**F3.** O termo "quality-adjusted life year" aparece impresso pela primeira vez em Zeckhauser e Shepard, 1976; uma fonte tipo wiki aponta menção anterior na tese de Joseph Pliskin (Harvard, 1974). A ideia de ajustar anos de vida pela qualidade é anterior (Klarman 1968; Fanshel e Bush 1970; Torrance 1972). Não escrever "inventaram o QALY". — *Fonte:* R45, R42, R43, R44. — *Status:* parcial (texto de 1976 não lido; Torrance 1972 verificada no PubMed).

**F4.** Weinstein e Stason (1977): a qualidade de vida entra como ajuste da expectativa de vida, e custos e benefícios futuros são descontados. Williams (1985) comparou o custo por QALY da revascularização miocárdica com outros usos do orçamento do NHS, chamando seus dados de "crus". — *Fonte:* R46, R48 (resumos). — *Status:* verificada.

**F5.** Há consenso sobre a necessidade de uma medida padrão comparável entre doenças; as controvérsias são cobertura limitada dos benefícios, "cegueira" à equidade, pressupostos teóricos, escolha do instrumento e de quem valora. — *Fonte:* R50 (resumo). — *Status:* verificada. A revisão clássica dos pressupostos do QALY "convencional" é R49 (conteúdo não lido; parcial).

**F6.** Revisão sistemática separa críticas metodológicas das éticas, que "não se aplicam só ao QALY"; outra conclui que as críticas valem também para as alternativas e que o QALY segue a melhor opção para comparar ganhos de saúde. — *Fonte:* R52, R53 (resumos). — *Status:* verificada. Neumann e Cohen 2018 saiu no **JAMA** (não no NEJM); conteúdo só por fonte secundária (R51, parcial).

### 2. EQ-5D e métodos de valoração

**F7.** EQ-5D-3L: cinco dimensões, "mobility, self-care, usual activities, pain/discomfort and anxiety/depression", cada uma com 3 níveis ("no problems, some problems, and extreme problems"); 3^5 = 243 estados, de 11111 a 33333. — *Fonte:* R19; R31. — *Status:* verificada.

**F8.** Nomes em português: a diretriz do Ministério usa "mobilidade, atividades habituais, cuidados pessoais, dor/mal-estar e ansiedade/depressão" e níveis "nenhum problema", "algum problema" ou "problema grave" (p. PDF 12); no glossário da mesma diretriz aparece "mobilidade, autocuidado, atividades habituais, dor/desconforto e ansiedade/depressão" (p. PDF 17). Um trecho de busca anterior trazia "atividades usuais". — *Fonte:* R3. — *Status:* verificada (diretriz); a redação oficial do questionário em PT-BR da EuroQol é **não verificada**.

**F9.** Time trade-off (TTO): mede quanto tempo de vida a pessoa aceita ceder para viver em saúde plena e evitar o estado ruim. No TTO convencional (protocolo MVH, horizonte de 10 anos), se x é o tempo em saúde plena no ponto de indiferença, o valor é x/10. — *Fonte:* R33. — *Status:* verificada (os símbolos da fórmula sumiram na extração do PMC).

**F10.** Estados piores que a morte no TTO convencional: valor −x/(10 − x); "the scale has an upper bound of 1 but a lower bound of negative infinity", o que exige reescalonamento, e a escolha do método "has been shown to have a substantial impact on the resulting values". — *Fonte:* R33. — *Status:* verificada.

**F11.** TTO composto (protocolo EQ-VT, para o 5L): TTO convencional para estados melhores que a morte e lead-time TTO para os piores; valores de −1 a 1, em passos de 0,05. Para o 3L recomenda-se o protocolo Paris. — *Fonte:* R33. — *Status:* verificada.

**F12.** Standard gamble: "has traditionally been considered the gold standard valuation method", mas "people have difficulties assessing probabilities"; as respostas dependem da atitude diante do risco. — *Fonte:* R33, R35. — *Status:* verificada (conceito); a descrição operacional clássica (Torrance 1986, Drummond 2015) é **não verificada**.

**F13.** Experimento de escolha discreta (DCE): o respondente escolhe entre (em geral dois) estados; os valores ficam "on an arbitrary scale ... and not on a scale anchored at 0 (death) and 1 (full health)"; sozinho, "is not viable for generating utilities for use in QALY calculations". — *Fonte:* R33. — *Status:* verificada.

**F14.** Escala visual analógica: usa números redondos e "may not represent utility, as it involves no sacrifice or tradeoff". A EQ-VAS vai de 0 a 100. — *Fonte:* R35, R29. — *Status:* verificada.

**F15.** Direitos da EuroQol: usar ou reproduzir o instrumento (inclusive partes, inclusive em site) exige consentimento prévio por escrito; em geral só se autoriza a amostra em inglês do Reino Unido. Mas "The IP Rights do not include data collected with EuroQol instruments, nor value sets", e "The value set is an ancillary product that is free to use by anyone". Descrever as dimensões com palavras próprias não é tratado nas páginas abertas. — *Fonte:* R19. — *Status:* verificada.

### 3. Tarifas brasileiras

**F16.** Tarifa brasileira do EQ-5D-3L: Santos et al., Med Decis Making 2016;36(2):253-63 (online em 22 out. 2015). TTO, protocolo MVH revisado, entrevista domiciliar; 9.148 pessoas da população geral, 18 a 64 anos, amostra probabilística estratificada por idade e sexo; todos os 243 estados valorados (7 por respondente); modelo de efeitos mistos em nível individual, sem interações. — *Fonte:* R27 (resumo PubMed). — *Status:* verificada (texto integral fechado).

**F17.** Local e período: Belo Horizonte, Rio de Janeiro, Porto Alegre e Recife; coleta de meados de 2011 a 2012. Outra fonte diz "state of Minas Gerais and the cities of Rio de Janeiro, Porto Alegre, and Recife"; a diretriz diz "base nacional, em quatro capitais, em 2014". — *Fonte:* artigo de Santos et al., Health Qual Life Outcomes 2024 (PMC10898160); R30; R2 (p. PDF 49–50). — *Status:* verificada em fontes secundárias abertas (divergência de ano e de "MG" × "Belo Horizonte" registrada).

**F18.** Coeficientes oficiais (código da EuroQol para "Brazil 3L (Santos TTO 2016)"): constante 0,149 para qualquer desvio da saúde plena; mobilidade 0,120 (nível 2) e 0,363 (nível 3); cuidados pessoais 0,112 e 0,218; atividades habituais 0,097 e 0,184; dor/mal-estar 0,064 e 0,168; ansiedade/depressão 0,050 e 0,095. Sem termo N3 e sem interações. — *Fonte:* R18 ("EQ_index=1-0.149-disut_total"); mesmos números em R30 e nos pacotes R `eq5d` e `eq5dsuite`. — *Status:* verificada (EuroQol; a tabela do artigo original não foi aberta).

**F19.** Fórmula: 11111 = 1; nos demais, índice = 1 − 0,149 − soma dos decrementos, arredondado a 3 casas. A fórmula de Silva 2017, escrita com intercepto fixo 0,851, daria 11111 = 0,851: não usar assim, nem os valores "−0.189" e "−0.889 (33331)" daquele artigo. — *Fonte:* R18; R30. — *Status:* verificada.

**F20.** Valores de teste: 11111 = 1,000; 21111 = 0,731; 11211 = 0,754; 11121 = 0,787; 11113 = 0,756; 22222 = 0,408; 21232 = 0,416; 33333 = −0,177. Também: 11112 = 0,801 e 12111 = 0,739. — *Fonte:* conta das notas sobre R18; idêntica à tabela dos 243 estados do `eq5dsuite` 2.1.0 (diferença máxima 0,000). — *Status:* verificada.

**F21.** Menor valor: 33333 = **−0,177** pelo código oficial. A literatura cita −0,176 (Espirito Santo 2024; testes do pacote `eq5d`, que também esperam 12133 = 0,477 e 12232 = 0,425 contra 0,476 e 0,424 pela soma). O −0,176 não foi reproduzido em nenhuma fonte primária aberta. Usar −0,177 e avisar que valores publicados podem diferir em 0,001. — *Fonte:* R18; R29. — *Status:* verificada (−0,177); −0,176 não verificada.

**F22.** Estados com valor negativo: 10 de 243 (4,1%): 32332, 32333, 33232, 33233, 33313, 33322, 33323, 33331, 33332, 33333. Nenhum vale exatamente 0; os mais próximos são 33313 (−0,009) e 33231 (+0,005), logo o arredondamento não muda a contagem. — *Fonte:* contagem das notas sobre os coeficientes de R18. — *Status:* verificada.

**F23.** "Degrau": o segundo melhor estado é 11112 = 0,801; qualquer problema já custa a constante 0,149. — *Fonte:* conta das notas sobre R18. — *Status:* verificada.

**F24.** O resumo do artigo diz que "Mobility" e "Usual Activities" tiveram as maiores perdas e "Anxiety/Depression" as menores. Nos coeficientes de nível 3 a ordem é mobilidade (0,363), cuidados pessoais (0,218), atividades habituais (0,184); ansiedade/depressão é de fato a menor (0,095). — *Fonte:* R27; R18. — *Status:* verificada (a divergência entre resumo e coeficientes fica em aberto).

**F25.** Existe outra tarifa 3L: Andrade et al. 2013, só Minas Gerais, 3.362 indivíduos alfabetizados de 18 a 64 anos, 99 estados valorados diretamente. Coeficientes (EuroQol): constante 0,054; mobilidade 0,127/0,403; cuidados pessoais 0,121/0,246; atividades 0,095/0,205; dor 0,067/0,200; ansiedade 0,061/0,113. As notas iniciais a tratavam só como "de Minas Gerais"; a EuroQol rotula as duas como "Brazil". O pacote `eq5d` atribui os números de Santos a Andrade 2013 (erro de citação) e Espirito Santo 2024 mistura os dois estudos. — *Fonte:* R28 (resumo); R18. — *Status:* verificada.

**F26.** O Ministério recomenda "preferencialmente, o EQ-5D-3L ... já que para essa versão existe um conjunto de valores brasileiros", com o SF-6D como segunda opção; e afirma: "O estudo que definiu a tabela de valores brasileira para o EQ-5D-3L foi publicado por Santos et al." — *Fonte:* R3 (p. PDF 30 e 13); R2 (rec. XXXV, p. PDF 95). — *Status:* verificada.

**F27.** Não usar os valores da Figura 1 da diretriz de Qualidade de Vida (11112 = 0,8329; 11113 = 0,7833; 11121 = 0,8214; 11211 = 0,7935): não saem de Santos 2016 nem de Andrade 2013 (EuroQol: 0,801; 0,756; 0,787; 0,754). — *Fonte:* R3 (p. PDF 13, "elaboração própria"); R18. — *Status:* verificada.

**F28.** Não há tarifa brasileira do EQ-5D-5L até 13 nov. 2026: a lista da EuroQol traz três entradas do Brasil (duas 3L e a Y-3L), nenhuma 5L; a diretriz diz que o 5L "encontra-se em fase de valoração no Brasil". Na prática usa-se o crosswalk para a tarifa 3L. — *Fonte:* R18; R3 (p. PDF 30); R32; R31 ("There is no value set for EQ-5D-5L in Brazil"). — *Status:* verificada.

**F29.** EQ-5D-Y-3L: Espirito Santo et al., Pharmacoeconomics 2024;42(9):1047-63. Adultos opinando "for a 10-year-old child"; DCE online (1.152) e cTTO presencial (211) em SP, RS e CE, out.–dez. 2022; o resumo fala em 1.376 participantes, embora 1.152 + 211 = 1.363. Valores de 1 a −0,0059; 33333 é o único estado negativo; dor/mal-estar pesa mais. Coeficientes (EuroQol), sem constante: mobilidade 0,12492/0,22867; cuidados 0,10265/0,19090; atividades 0,10334/0,18577; dor 0,10956/0,23673; preocupação/tristeza 0,06060/0,16382. — *Fonte:* R29 (texto integral); R18. — *Status:* verificada.

**F30.** Para crianças, a Diretriz de Avaliação Econômica admite "instrumentos adaptados, como o EQ-5D-Y, e tabelas de valores da população adulta"; a de Qualidade de Vida registra que "o conjunto de valores brasileiros para o EQ-5D-Y foi estabelecido". — *Fonte:* R2 (p. PDF 96); R3 (p. PDF 30). — *Status:* verificada.

### 4. Quem valora e adaptação

**F31.** Diretriz brasileira: "Deve-se priorizar os valores de utilidade que foram obtidos a partir da valoração da população em geral (tarifas populacionais)". — *Fonte:* R2 (rec. XL, p. PDF 97). — *Status:* verificada.

**F32.** Quem vive a condição tende a dar valores mais altos: "people with first-hand experience tend to (although not always) place higher values on dysfunctional health states than members of the general population"; "people tend to underpredict their ability to adapt". Os autores não defendem usar só pacientes nem só público pouco informado. — *Fonte:* R35 (texto integral). — *Status:* verificada.

**F33.** Meta-análise (30 estudos, 40 estimadores): pacientes deram valores mais altos que não pacientes (d de Cohen = 0,20; p < 0,01), no TTO (d não padronizado 0,05) e na VAS (0,04); no standard gamble não houve diferença (0,01; p = 0,70). — *Fonte:* R37 (resumo). — *Status:* verificada.

**F34.** Causas da discrepância: interpretações diferentes do estado, adaptação que o público não prevê, response shift, "focusing illusion", efeitos de contraste. Para Dolan, opor pacientes a público é falsa dicotomia: a questão é se a adaptação deve contar. Menzel et al.: nem só pacientes reais nem só hipotéticos. — *Fonte:* R36, R39, R38 (resumos). — *Status:* verificada.

**F35.** A recomendação de usar preferências da comunidade é atribuída ao Painel de Washington de 1996 (Gold et al.) por Brazier 2018, que lembra que a Suécia prefere valores de pacientes; o trecho do livro não foi obtido. — *Fonte:* R35; R41. — *Status:* parcial.

**F36.** Dolan e Kahneman (2008) distinguem utilidade como experiência e como preferência e recomendam medidas de utilidade experienciada. — *Fonte:* R40. — *Status:* parcial (conteúdo por trechos de busca; metadados conferidos no Crossref).

### 5. Conitec e limiar

**F37.** "Os valores calculados do limiar de custo-efetividade foram: R$ 40.000,00 por QALY e R$ 35.000,00 por 'anos de vida ganhos' para o ano de 2022." — *Fonte:* R1 (Quadro 1, p. PDF 52). — *Status:* verificada.

**F38.** O ano de vida ganho vale "Em situações excepcionais em que o QALY for considerado indisponível ou inadequado", com escolha "devidamente justificada no parecer". O valor de R$ 35.000 veio de "no máximo 0,87 PIB per capita, o que corresponderia a R$ 34.800,00". — *Fonte:* R1 (p. PDF 52 e 48). — *Status:* verificada.

**F39.** Limiar alternativo: "é aceitável um limiar de até 3 vezes o valor de referência". "R$ 120.000,00/QALY" está escrito no corpo do relatório (não no Quadro 1) e veio de um Painel Delphi em que "93,6% dos membros da Conitec" consideraram que o alternativo devia ser igual ou menor que 3 vezes. — *Fonte:* R1 (p. PDF 52 e 46–47). — *Status:* verificada.

**F40.** Situações (versão final, "A critério do julgamento da Conitec"): "a) Doenças raras (afeta até 65 pessoas em cada 100.000 indivíduos) redução importante de sobrevida ajustada pela qualidade; b) Doença acometendo crianças (menores de 18 anos) e implicando redução importante de sobrevida ajustada pela qualidade; c) Doença grave; d) Doença endêmica em populações de baixa renda com poucas alternativas terapêuticas disponíveis." As definições ficam para "avaliação qualitativa dos membros da Conitec". Corrige as notas anteriores: a alínea d) está na versão final; "doença grave" vem **sem** o qualificador de sobrevida; "vulnerabilidade social" (resumos secundários) não está na recomendação. — *Fonte:* R1 (Quadro 1, p. PDF 52); repetida em R2 (Quadro 6). — *Status:* verificada.

**F41.** Ultrarraras **não** são uma das situações do limiar de 3 vezes; ficaram fora da regra: "Não estão incluídas nesta regulamentação tecnologias gênicas, curativas e tecnologias para doenças ultrarraras (doença que afeta até 1 pessoa em cada 50.000 indivíduos)." Na Diretriz de 2026 (Quadro 6) a exclusão ficou só "tecnologias para doenças ultrarraras"; o texto corrido ainda adia as gênicas e curativas. A Portaria 8.817/2025 remete as ultrarraras a diretrizes "a serem publicadas". — *Fonte:* R1 (p. PDF 52); R2 (p. PDF 69); R4 (art. 37, § 1º). — *Status:* verificada.

**F42.** O limiar não é critério único: "a custo-efetividade não deve ser um parâmetro isolado dos demais fatores"; tecnologias acima do limiar "poderão receber recomendação favorável à incorporação com base em outros critérios" e as abaixo "podem receber recomendação contrária"; o QALY é o "principal desfecho", mas não se deve "limitar suas discussões ao QALY". Diretriz 2026: o limiar "não deve ser o único critério nem o fator dominante da decisão". — *Fonte:* R1 (p. PDF 52 e 34); R2 (p. PDF 67–68). — *Status:* verificada.

**F43.** "1 PIB per capita" **não** está na recomendação final: a preliminar dizia "até 3 vezes o valor de referência de 1 PIB per capita" e a final retirou a expressão. O relatório diz que o limiar por QALY "ficaria perto de 1 PIB per capita", que o valor "foi calculado com base do documento do Banco Interamericano de Desenvolvimento (BID) elaborado por Pichon-Riviere" e que a conversão em PIB per capita "teve o único objetivo de promover a comparação internacional, sem qualquer relação com os valores de 1 a 3 vezes o PIB per capita comumente difundidos como 'recomendação da OMS'". Não cita ano-base nem valor do PIB per capita em reais; o "R$ 40.688 de 2021" das notas anteriores era inferência. — *Fonte:* R1 (p. PDF 45–46 e 48). — *Status:* verificada (inclusive a ausência).

**F44.** Atualização: em 2022, "Os valores de limiar serão atualizados anualmente conforme variação do PIB per capita brasileiro". A Diretriz de 2026 trocou a regra (as atualizações "serão publicadas pela própria Comissão, permanecendo vigentes até que uma nova versão seja oficialmente divulgada") e repete R$ 40.000 por QALY/DALY e R$ 35.000 por AVG. Nenhum documento aberto traz valor novo; o Relatório nº 974 (fev. 2025) usa R$ 120 mil/QALY. — *Fonte:* R1 (p. PDF 52); R2 (Quadro 6, p. PDF 69); R12. — *Status:* verificada quanto aos textos; a inexistência de atualização é ausência de evidência.

**F45.** Cronologia: Consulta Pública nº 41/2022 (21/06 a 01/08/2022); audiência pública nº 02/2022 em 22/08/2022, com 119 inscritos (52 de pacientes e associações); recomendações finais na 112ª reunião, em 31/08/2022; arquivo no portal "Criado em 06/11/2022". — *Fonte:* R1 (p. PDF 8 e 29). — *Status:* verificada. Não se encontrou portaria de 2022 que instituísse os valores (existência **não verificada**); "227 contribuições" vem de fonte secundária (parcial).

### 6. Leis e normas brasileiras

**F46.** Lei 12.401/2011 (arts. 19-M a 19-U da Lei 8.080): o relatório da Conitec "levará em consideração, necessariamente" as evidências científicas e "a avaliação econômica comparativa dos benefícios e dos custos em relação às tecnologias já incorporadas" (art. 19-Q, § 2º). — *Fonte:* R5. — *Status:* parcial (trecho de busca).

**F47.** Lei 14.313/2022 (§ 3º do art. 19-Q): as metodologias da avaliação econômica "serão dispostas em regulamento e amplamente divulgadas, inclusive em relação aos indicadores e parâmetros de custo-efetividade utilizados em combinação com outros critérios". — *Fonte:* R6. — *Status:* parcial (redação montada de dois trechos de busca).

**F48.** O Decreto 7.646/2011 regulamenta a Conitec; foi alterado pelo Decreto 12.716/2025 (nova composição, sociedade civil com voto), em adequação à Lei 15.120/2025. — *Fonte:* R7. — *Status:* parcial (redação vigente do art. 18 não confirmada).

**F49.** Portaria GM/MS nº 8.817, de 21/11/2025 (DOU de 24/11/2025): manda considerar "limiar de custo-efetividade disposto em diretrizes metodológicas do Ministério da Saúde"; cria um "valor de referência orçamentário" que, ultrapassado, exige trâmites adicionais (adequação orçamentária, desconto, acordo de acesso gerenciado ou implementação gradual); define acesso gerenciado. Não traz número de limiar. — *Fonte:* R4. — *Status:* verificada.

**F50.** Proposta (não norma) de limiar de impacto orçamentário: R$ 37,8 a 75,6 milhões = alto impacto; acima de R$ 75,6 milhões = muito alto. — *Fonte:* R15. — *Status:* parcial.

**F51.** A palavra "equidade" não aparece nos incisos I, II e IV do art. 7º da Lei 8.080, que fala em "igualdade da assistência à saúde"; a Constituição (art. 196) fala em "acesso universal e igualitário". — *Fonte:* R9. — *Status:* parcial (alteração do art. 7º pela Lei 15.126/2025 não lida).

### 7. Diretriz de avaliação econômica e desconto

**F52.** Vigente: Diretriz de Avaliação Econômica, 3ª edição, 2026 (167 p.). — *Fonte:* R2. — *Status:* verificada.

**F53.** Desconto: "Deve-se utilizar uma taxa de desconto de 5% ao ano para custos e efetividade" (LV), em modelos com horizonte acima de 12 meses (LIII), com taxa uniforme (LIV). As notas anteriores davam esse item como não verificado. — *Fonte:* R2 (p. PDF 101). — *Status:* verificada.

**F54.** A 3ª edição recomenda **não** variar a taxa de forma rotineira na análise de sensibilidade paramétrica e sugere um cenário sem desconto (LVI). A faixa "0% a 10%" só aparece no capítulo de vacinas da 3ª edição (p. PDF 141) e como regra da 2ª edição (2014), esta confirmada só de forma indireta. — *Fonte:* R2 (p. PDF 101–102); R3 (p. PDF 31). — *Status:* verificada (3ª ed.); parcial (2ª ed.).

**F55.** Perspectiva do SUS como pagador; no caso de referência de custo-utilidade "o desfecho será QALY" (hierarquia: QALY ou DALY; AVG; eventos clínicos); horizonte de "vida inteira", com censura aos 100 anos. — *Fonte:* R2 (rec. X, XXIII, XXIX, XXI; p. PDF 90–94). — *Status:* verificada.

**F56.** A diretriz não diz se o primeiro ano é descontado; para a correção dentro do ciclo, sugere o método trapezoide. — *Fonte:* R2 (p. PDF 105). — *Status:* verificada (inclusive a ausência).

### 8. ANS

**F57.** A Lei 14.307/2022 manda a ANS fixar em norma as metodologias, "incluídos os indicadores e os parâmetros de avaliação econômica ... utilizados em combinação com outros critérios"; a RN nº 555/2022 exige "estudo de avaliação econômica em saúde, na perspectiva da saúde suplementar". — *Fonte:* R8. — *Status:* parcial.

**F58.** Não se encontrou limiar numérico adotado pela ANS; em 2026 a agência teria retomado o tema e pretenderia se basear nos limiares da Conitec. — *Fonte:* R14. — *Status:* parcial (fonte jornalística única). Consulta pública da ANS sobre limiar: **não verificada**.

### 9. PIB per capita

**F59.** PIB per capita (IBGE): R$ 40.688 em 2021 (primeira estimativa); R$ 42.247,52 em 2021 (revisado); R$ 59.687,49 em 2025. Conta das notas: R$ 40.000 ≈ 0,67 e R$ 120.000 ≈ 2,01 PIB per capita de 2025. — *Fonte:* R13. — *Status:* parcial (trechos de busca; o site do IBGE não abriu).

### 10. Custo de oportunidade (limiar pelo lado da oferta)

**F60.** Woods et al. (2016) estimaram para o Brasil "$ 3.210 a $ 10.122 por QALY, equivalente a 0,20 a 0,63 PIB per capita" (dados de 2013). Atualização da própria Conitec com dados de 2018: R$ 17.059,72, de R$ 5.973,00 a R$ 23.372,54, "aproximadamente 0,18 a 0,71 PIB per capita". — *Fonte:* R1 (p. PDF 18), citando R55. — *Status:* verificada como citação da Conitec; o suplemento de Woods não abriu, e a coluna sem ajuste PPP (US$ 2.393–7.544) é **não verificada**.

**F61.** Documento do BID/IECS citado pela Conitec: US$ 9.890 (0,88 PIB per capita) a US$ 11.417 (1,02) por QALY, em dólares de 2013. — *Fonte:* R1 (p. PDF 20–21). — *Status:* verificada.

**F62.** Pichon-Riviere et al. (2023): limiares por QALY abaixo de 1 PIB per capita em 168 (97%) de 174 países. — *Fonte:* R56 (resumo). — *Status:* verificada. O valor do Brasil (US$ 8.462; 0,95 PIB per capita) é **não verificado** na fonte primária.

**F63.** Inglaterra: estimativa central de £12.936 por QALY, com probabilidade 0,89 de estar abaixo de £20.000 e 0,97 abaixo de £30.000. O limiar representa a saúde perdida em outro lugar do sistema; não pode ser fixado independentemente do orçamento. — *Fonte:* R57, R58, R59 (resumos). — *Status:* verificada.

### 11. NICE

**F64.** Em 1º dez. 2025 o governo britânico anunciou a mudança da faixa de "£20,000 to £30,000 per QALY gained" para "£25,000 to £35,000/QALY", "from April 2026", para avaliações novas e em andamento; o NICE estima "an additional 3-5 new medicines or indications per year". — *Fonte:* R16. — *Status:* verificada. O dia "1º de abril" **não** foi confirmado.

**F65.** O manual vigente já traz a faixa nova: abaixo de £25.000 por QALY a decisão se baseia normalmente na custo-efetividade; entre £25.000 e £35.000 há referência explícita a outros fatores; acima de £35.000 exige-se "an increasingly stronger case". — *Fonte:* R17. — *Status:* verificada.

**F66.** Modificador de gravidade (Tabela 6.1): peso 1 para déficit proporcional de QALYs "Less than 0.85" e absoluto "Less than 12"; ×1,2 para "0.85 to 0.95" ou "12 to 18"; ×1,7 para "At least 0.95" ou "At least 18". Vale o que indicar maior gravidade; no corte, aplica-se o nível mais alto. — *Fonte:* R17. — *Status:* verificada.

**F67.** O modificador de gravidade (2022) substituiu os critérios de fim de vida de 2009 (expectativa "normally less than 24 months"; ganho "normally of at least an additional 3 months"). — *Fonte:* R115 e fontes secundárias. — *Status:* parcial (a substituição não foi procurada no texto do manual).

**F68.** Tecnologias altamente especializadas: nível de £100.000 por QALY, com peso "between 1 and 3, using equal increments, for a range between 10 and 30 QALYs gained"; sem peso adicional de gravidade. — *Fonte:* R17. — *Status:* verificada.

**F69.** Desconto no NICE: "3.5% per year" para custos e efeitos; 1,5% em análises alternativas "in specific circumstances". — *Fonte:* R17 (seção 4.5). — *Status:* verificada.

### 12. Outros países (Noruega, Holanda)

**F70.** Noruega: o comitê propôs três critérios (benefício, recursos e perda de saúde ao longo da vida), com limiares diferenciados. O Parlamento teria aprovado a gravidade medida como "absolute shortfall" prospectivo, em vigor desde 1º jan. 2018; os degraus de NOK 275 mil a 825 mil por QALY são **não oficiais**. — *Fonte:* R83 (resumo; proposta). — *Status:* verificada (proposta); parcial (o que foi aprovado e os valores).

**F71.** Holanda: o "proportional shortfall" é cada vez mais aplicado desde 2015, com apoio empírico limitado. Faixas (2015): carga de doença 0,1–0,4 → até €20.000/QALY; 0,41–0,7 → até €50.000; 0,71–1,0 → até €80.000. — *Fonte:* R84 (resumo); R116. — *Status:* verificada (R84); parcial (valores).

### 13. Idade e fair innings

**F72.** Williams (1997) **não** usa o fair innings para proteger idosos: a equidade entre gerações que ele defende exige **mais** discriminação contra idosos do que a simples eficiência, isto é, prioridade adicional aos mais jovens. — *Fonte:* R61 (resumo). — *Status:* verificada.

**F73.** Harris (1987): o QALY é "fatalmente falho" como método de priorização. Tsuchiya (2000) examina seis propostas de ponderação por idade. — *Fonte:* R62, R63 (resumos). — *Status:* verificada.

### 14. Deficiência, lei americana e evLYG

**F74.** "Dupla penalização": quem já tem deficiência sofreria duas vezes (pela condição e pela menor prioridade). O artigo que formula a objeção conclui que "o defensor dos QALYs tem uma resposta adequada". Nord et al.: para doentes crônicos ou pessoas com deficiência, "um ano de vida ganho deve contar como um, e não menos que um". — *Fonte:* R64, R65 (resumos). — *Status:* verificada.

**F75.** A lei americana não "proíbe o QALY". 42 U.S.C. § 1320e-1(e), de 2010: o PCORI "shall not develop or employ a dollars-per-quality adjusted life year (or similar measure that discounts the value of a life because of an individual's disability) as a threshold to establish what type of health care is cost effective or recommended", e o Secretário "shall not utilize such an adjusted life year ... as a threshold to determine coverage, reimbursement, or incentive programs under subchapter XVIII" (Medicare). A vedação é ao uso **como limiar**, para o PCORI e o Medicare; o texto não cita Medicaid, planos privados nem o ICER. — *Fonte:* R20. — *Status:* verificada.

**F76.** A lei de 2022 (IRA; 42 U.S.C. § 1320f-3(e)(2)) **não cita o QALY**: veda usar evidência "in a manner that treats extending the life of an elderly, disabled, or terminally ill individual as of lower value than extending the life of an individual who is younger, nondisabled, or not terminally ill". A exclusão explícita ("will not use Quality-Adjusted Life Years") está na orientação do CMS. — *Fonte:* R21; R23. — *Status:* verificada (lei); parcial (CMS).

**F77.** O projeto que ampliaria a vedação (H.R. 485) passou na Câmara em 7 fev. 2024 por 211 a 208 e não foi votado no Senado; foi reapresentado como H.R. 3864 em 10 jun. 2025, sem andamento conhecido. A regra do HHS de 2024 (45 CFR § 84.57) não bane o QALY em si, segundo resumos jurídicos. — *Fonte:* R22; R24. — *Status:* parcial (congress.gov não abriu).

**F78.** evLY: criado pelo ICER, "gives the same value to each year of life a treatment adds, regardless of a patient's age, disability, or how severe their illness is"; antes chamado evLYG. Complementa o QALY nos relatórios do ICER. — *Fonte:* R25. — *Status:* verificada. A data de introdução (dez. 2018) é **não verificada**.

**F79.** No Reference Case do ICER a qualidade de vida fica "fixed at 0.851 for all ages"; o trecho está na seção de "evLY shortfall", e a frase "0,851 para os anos de vida ganhos" não foi localizada literalmente. Benchmarks: "$100,000 and $150,000 per QALY or evLY gained" (um comentário secundário falava em US$ 100 mil por QALY e US$ 150 mil por evLYG). — *Fonte:* R25 (p. PDF 35). — *Status:* verificada.

**F80.** Limite do evLY: não capta ganhos de qualidade de vida nos anos adicionais; o HYT (Basu et al.) foi proposto para captá-los. Autores do ICER recomendam reportar o evLY em toda análise. O GRACE faz o limiar subir para doenças graves e cair para as leves. — *Fonte:* R67, R66, R68 (resumos). — *Status:* verificada.

**F81.** Em análises de custo-efetividade em oncologia, subgrupos por idade, doença ou deficiência são raros e, quando existem, têm motivo clínico. O National Council on Disability (2019) recomendou rejeitar o QALY. — *Fonte:* R54 (resumo); R26. — *Status:* verificada (R54); parcial (R26).

### 15. Sensibilidade do instrumento e cuidadores

**F82.** Saúde mental: EQ-5D e SF-6D podem ser usados "com alguma confiança" em transtornos mentais comuns; na esquizofrenia a validade é fraca e a responsividade incerta. Não é que "o EQ-5D não funciona em saúde mental". — *Fonte:* R69 (resumo). — *Status:* verificada.

**F83.** Instrumentos diferentes dão utilidades diferentes: a diferença entre público e pacientes variou com o instrumento em mais de 50% em todos os grupos de doença, com desvantagem sistemática sobretudo para saúde mental; entre EQ-5D e SF-6D a concordância é apenas "razoável" (ICC de 0,375 a 0,615; diferença média de 0,253). — *Fonte:* R71, R72 (resumos). — *Status:* verificada.

**F84.** Visão e audição: revisão para o NICE examinou EQ-5D, SF-6D e HUI3 em deficiência visual e auditiva e desenvolveu itens "bolt-on" de audição, cansaço e visão. — *Fonte:* R70. — *Status:* parcial (conclusões por condição não lidas).

**F85.** Crianças: os métodos de valoração variam muito e carecem de diretriz; de quem são as preferências é questão normativa. — *Fonte:* R73 (resumo). — *Status:* verificada.

**F86.** Cuidados paliativos: o QALY "parece não funcionar bem" em intervenções complexas; revisão conclui que QALYs podem ser obtidos, somando ao EQ-5D instrumentos específicos. Revisão Cochrane: maior chance de morrer em casa (OR 2,21; IC95% 1,31 a 3,71), mas "Evidence on cost-effectiveness (six studies) is inconclusive". — *Fonte:* R74, R75, R113 (resumos). — *Status:* verificada.

**F87.** Cuidadores: só 12 de 414 avaliações de tecnologia do NICE (3%) e 4 de 8 de tecnologias altamente especializadas incluíram a qualidade de vida do cuidador; a inclusão sempre aumentou os QALYs incrementais. Há proposta de contar efeitos na família dos dois lados (benefício gerado e deslocado), e casos em que incluir o cuidador **reduz** o ganho ("carer QALY trap"). — *Fonte:* R78, R77, R79 (resumos). — *Status:* verificada.

**F88.** O EQ-HWB (25 itens; versão curta de 9) foi desenvolvido para saúde, saúde pública e assistência social, incluindo cuidadores. — *Fonte:* R76 (resumo). — *Status:* verificada.

### 16. Regra do resgate, gravidade, fim de vida, raras

**F89.** "Rule of Rescue" foi cunhada por Jonsen (1986) para o imperativo de resgatar indivíduos identificáveis diante de morte evitável; McKie e Richardson argumentam que "ser identificável" não parece razão moralmente relevante. — *Fonte:* R81 (resumo); R80. — *Status:* verificada (R81); parcial quanto ao texto de Jonsen.

**F90.** Oregon: a lista preliminar foi criticada por parecer favorecer tratamentos menores; a lista final foi gerada **sem referência a custos**. O exemplo do capeamento dentário à frente da apendicectomia só tem fonte secundária: escrever "segundo relatos da época", sem números de ranking. — *Fonte:* R82 (resumo); R117. — *Status:* verificada (Hadorn); parcial (episódio).

**F91.** Preferências do público: há disposição a sacrificar saúde agregada para priorizar os mais graves. Em levantamento com 4.118 adultos britânicos houve apoio a priorizar doenças graves, mas **não** ao prêmio de fim de vida, ao status especial para doenças raras nem ao Cancer Drugs Fund. Em 50 entrevistas na Inglaterra não houve consenso sobre fim de vida. — *Fonte:* R85, R87, R86 (resumos). — *Status:* verificada.

**F92.** Doenças raras: pelos métodos padrão, medicamentos órfãos raramente são custo-efetivos, mas as restrições podem não refletir preferências sociais. A tese de que a raridade em si não justifica prêmio (McCabe 2005) não foi lida. No Brasil, a Conitec define rara como até 65 por 100.000 (F40). — *Fonte:* R88 (resumo); R89; R1. — *Status:* verificada (R88, R1); parcial (R89).

### 17. Premissas técnicas

**F93.** As três condições do modelo (independência de utilidade, trade-off proporcional constante, neutralidade ao risco) são atribuídas a Pliskin, Shepard e Weinstein (1980). — *Fonte:* R47. — *Status:* parcial (formulação original não lida).

**F94.** As preferências individuais são afetadas pela duração e pela sequência dos estados, mas os pressupostos se sustentam bem melhor quando as valorações são agregadas. — *Fonte:* R90 (resumo). — *Status:* verificada.

**F95.** Com 91 respondentes, Dolan e Stalmeier sugerem que as pessoas usam uma heurística proporcional que só aparenta satisfazer o trade-off proporcional constante e gera reversões de preferência em estados com "tempo máximo suportável". — *Fonte:* R91 (resumo). — *Status:* verificada.

**F96.** Desconto: há debate sobre taxa única ou menor para a saúde; com orçamento fixo, a mesma taxa só é correta se o limiar ficar constante. — *Fonte:* R92, R93, R94 (resumos). — *Status:* verificada.

### 18. Limiar × valor da vida

**F97.** O limiar é uma estimativa do custo de oportunidade dentro de um orçamento, não o preço de uma vida (F63). A disposição a pagar por um QALY é outra medida e varia muito: 24 estudos, 383 estimativas, média aparada de €74.159 e mediana de €24.226 (preços de 2010). — *Fonte:* R57, R59, R60 (resumos). — *Status:* verificada.

**F98.** Nenhuma fonte conferida compara diretamente o limiar por QALY com o "valor estatístico de uma vida". — *Status:* **não verificada** (não fazer a comparação com números).

### 19. Alternativas

**F99.** DALY: o original (Murray 1994) embutia tábua de vida padrão, ponderação por idade, seis classes de gravidade e desconto de 3%. O GBD 2010 teria retirado idade e desconto ("Neither YLLs nor YLDs were age-weighted or discounted"). QALY e DALY são tipos de HALY com propósitos distintos. A diretriz brasileira aceita o mesmo limiar para o DALY. — *Fonte:* R95, R97, R98 (resumos); R96; R2 (p. PDF 67–69). — *Status:* verificada; parcial quanto ao GBD 2010.

**F100.** evLY/evLYG: ver F78 a F80. Anos de vida ganhos: ver F37 e F38.

**F101.** WELLBY: variação de um ponto na satisfação com a vida (escala de 0 a 10) para uma pessoa por um ano; o Tesouro britânico (2021) recomenda £13.000 por WELLBY, faixa de £10.000 a £16.000, preços de 2019. — *Fonte:* R100; R99. — *Status:* parcial (PDF do Tesouro não aberto).

**F102.** Análise de decisão multicritério: pondera vários critérios ao mesmo tempo, enquanto a custo-efetividade olha um por vez; a ISPOR publicou definição, etapas e boas práticas. — *Fonte:* R101, R102, R103 (resumos). — *Status:* verificada.

**F103.** DCEA: modela a distribuição social da saúde sob cada intervenção e a avalia por dois objetivos (mais saúde total, menos desigualdade injusta); o "plano de impacto na equidade" mostra quem ganha e quem perde. No NICE, entrou em 2025 como análise suplementar opcional. — *Fonte:* R105, R104 (resumos). — *Status:* verificada; parcial quanto ao NICE.

**F104.** Participação social na Conitec: "A Perspectiva do Paciente é um espaço para a apresentação de um relato de experiência ... durante a reunião da Conitec. Podem participar da ação usuários do SUS e seus cuidadores e/ou familiares"; a página lista chamadas até a nº 103/2026. — *Fonte:* R10. — *Status:* verificada. A consulta pública "por 20 dias" e sua base legal: parcial.

**F105.** "Accountability for reasonableness" (Daniels e Sabin): referência para a deliberação. — *Fonte:* R106. — *Status:* parcial (as quatro condições não foram conferidas).

### 20. Casos reais que inspiram o jogo

**F106.** Terapia gênica para AME tipo I (onasemnogeno abeparvoveque; Relatório Conitec nº 793, dez. 2022): R$ 883.587 por QALY **contra nusinersena** (custo incremental 2.579.780; 2,92 QALY) e R$ 766.549 contra risdiplam (4,33 QALY), horizonte de vida inteira, modelo do demandante; em 10 anos, R$ 3.045.181 por QALY contra nusinersena. O relatório diz que "no Brasil não há definido um limiar de disposição a pagar para doenças ultrarraras". — *Fonte:* R11 (p. PDF 50–51). — *Status:* verificada. Incorporação com compartilhamento de risco e não ampliação em 2025: parcial.

**F107.** Imunização (nirsevimabe; Relatório nº 974, fev. 2025): R$ 212.320,00 por QALY na população proposta, "com apenas 0,6% das simulações abaixo do limiar de R$ 120 mil/QALY"; R$ 416.064,01 por QALY nos não elegíveis ao palivizumabe; "dominante" contra palivizumabe nos elegíveis. O valor atualizado após consulta pública aparece como R$ 355, R$ 255,43 e R$ 355,43 no próprio relatório: não usar. — *Fonte:* R12 (p. PDF 10–12, 59). — *Status:* verificada.

**F108.** Nusinersena: incorporado para AME tipo I em 2019 e para tipo II em 2021; não incorporado para tipo III. — *Fonte:* fontes secundárias sobre os Relatórios nº 449 e 595. — *Status:* parcial; RCEI não recuperada.

**F109.** Oncologia: nenhum caso único com meses de sobrevida e RCEI foi confirmado; o relatório oncológico não foi aberto. — *Status:* **não verificada**; usar tecnologia fictícia sem números atribuídos a caso real.

**F110.** Prótese de quadril aos 80 anos (EUA): "$7307 per QALY" (dólares de 2016). — *Fonte:* R107 (resumo). — *Status:* verificada.

**F111.** Saúde mental: psicoterapia de grupo em Uganda, "I$ 1,150 per QALY"; intervenção psicológica na atenção primária no Nepal, "$4422 per QALY gained"; no Paquistão, intervenção por pares para depressão perinatal: +0,005 QALY e −US$ 52 por paciente (dominância estrita). Sem dado brasileiro confirmado. — *Fonte:* R108, R109, R110 (resumos). — *Status:* verificada.

**F112.** Implante coclear: custo-efetivo em países da América Latina, inclusive o Brasil (razão custo-efetividade/PIB per capita de 0,69 a 2,96; desfecho em DALY); o implante bilateral em adultos só provavelmente acima de £62.000 por QALY. — *Fonte:* R111, R112 (resumos). — *Status:* verificada.

**F113.** Cuidados paliativos domiciliares: ver F86. Política Nacional de Cuidados Paliativos: Portaria GM/MS nº 3.681, de 07/05/2024. — *Fonte:* R113; R118. — *Status:* verificada (R113); parcial (portaria).

**F114.** Catarata bilateral no mesmo dia: não inferior e € 403 mais barata para a sociedade (é "não inferior e mais barata", não dominância estrita). Custo por QALY de operar versus não operar: não localizado. Oficina da Conitec (2021) lista como "Dominante" ranibizumabe, vacina de hepatite A e pegvisomanto. — *Fonte:* R114 (resumo); R119. — *Status:* verificada (R114); parcial (R119).

---

### 21. Acréscimos da rodada 1 (13 nov. 2026)

**F115.** Relatório da Conitec de 2022, Quadro 1: "Outros desfechos relevantes, preferencialmente desfechos relatados como importantes pelo paciente, devem ser descritos na análise das evidências". — *Fonte:* R1 (p. PDF 52). — *Status:* verificada (reconferida pelo Juiz D na rodada 1).

**F116.** Aposta padrão (standard gamble): a pessoa escolhe entre ficar no estado de saúde com certeza e uma aposta com chance p de saúde plena e 1 − p de morte; o peso é o p em que ela fica indiferente. — *Fonte:* artigo aberto indicado pelo Juiz D na rodada 2 (PMID 20920309); a diretriz R3 define o método no glossário, sem a fórmula. — *Status:* verificada pelo Juiz D; o exemplo "20% de risco → peso 0,8" é aritmética sobre a definição.

**F117.** O EQ-5D está entre os "instrumentos mais utilizados no mundo", segundo a diretriz de Qualidade de Vida do Ministério da Saúde. — *Fonte:* R3, localizada pelo Juiz D. — *Status:* verificada pelo Juiz D.

**F118.** As recomendações preliminares da Conitec são submetidas a consulta pública. — *Fonte:* R11 (Relatório 793, p. 4), localizada pelo Juiz D. — *Status:* verificada pelo Juiz D. O prazo em dias não é afirmado no site.

**F119.** WELLBY: Frijters P, Clark AE, Krekel C, Layard R. A happy choice: wellbeing as the goal of government. Behav Public Policy. 2020;4(2):126-65. doi:10.1017/bpp.2019.39. Dados bibliográficos conferidos no Crossref (título, quatro autores, volume, número, páginas). A definição (um ponto de satisfação com a vida, de 0 a 10, por um ano) foi confirmada pelo Juiz D na rodada 2 em dois artigos indexados (PMID 40566377 e 39352886); o artigo de Frijters não foi lido na íntegra. — *Status:* referência verificada; definição verificada em fontes secundárias indexadas. O site não dá o valor em libras.

**F120.** Em revisão de análises de custo-efetividade em oncologia, subgrupos por idade, doença ou deficiência foram raros. — *Fonte:* R54 (Raymakers et al., 2025; resumo no PubMed). — *Status:* verificada. É o mesmo F81; o site cita a referência.

**F121.** "A saúde é direito de todos e dever do Estado" (Constituição de 1988, art. 196), e há fornecimento de tratamentos por decisão judicial no Brasil. — *Fonte:* R9; páginas oficiais conferidas pelo Juiz D na rodada 2: https://www.gov.br/saude/pt-br/sus (texto do art. 196) e https://www.gov.br/conitec/pt-br/judicializacao (fornecimento por decisão judicial e critérios do STF que consideram a avaliação da Conitec). — *Status:* verificada em páginas oficiais do governo; o texto da Constituição no portal da legislação não abriu.

## Parte B — Referências

Marcas: **[PubMed]** registro lido; **[Crossref]** metadados no Crossref; **[aberto]** documento aberto em 13 nov. 2026; **[parcial]** dados só por buscador ou catálogo. "s/r" = sem resumo no PubMed. Os DOIs vêm do PubMed e não foram testados em doi.org.

**Documentos oficiais brasileiros**
- **R1.** Brasil. Ministério da Saúde. O uso de limiares de custo-efetividade nas decisões em saúde: recomendações da Comissão Nacional de Incorporação de Tecnologias no SUS. Brasília: Ministério da Saúde; 2022. 112 p. https://www.gov.br/conitec/pt-br/midias/pdf/2022/20221106_relatorio-uso-de-limiares-de-custo-efetividade-nas-decisoes-em-saude.pdf [aberto; p. PDF = impressa + 3]
- **R2.** Brasil. Ministério da Saúde. Diretrizes metodológicas: Diretriz de Avaliação Econômica. 3ª ed. Brasília: Ministério da Saúde; 2026. 167 p. https://www.gov.br/conitec/pt-br/midias/artigos_publicacoes/diretrizes/diretrizes_metodologicas_diretriz_avaliacao_economica_3ed.pdf [aberto]
- **R3.** Brasil. Ministério da Saúde. Diretrizes metodológicas: Qualidade de Vida em Análises Econômicas. 1ª ed. rev. Brasília: Ministério da Saúde; 2026. 47 p. https://www.gov.br/conitec/pt-br/midias/artigos_publicacoes/diretrizes/diretrizesmetodologicas_qualidadedevida_emanaliseseconomicas.pdf [aberto]
- **R4.** Brasil. Ministério da Saúde. Portaria GM/MS nº 8.817, de 21 de novembro de 2025. Diário Oficial da União. 24 nov. 2025; Seção 1. https://www.gov.br/conitec/pt-br/assuntos/reunioes-da-conitec/portaria-gm-ms-no-8-817-de-21-de-novembro-de-2025.pdf [aberto]
- **R5.** Brasil. Lei nº 12.401, de 28 de abril de 2011. https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/lei/L12401.htm [parcial]
- **R6.** Brasil. Lei nº 14.313, de 21 de março de 2022. https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2022/lei/L14313.htm [parcial]
- **R7.** Brasil. Decreto nº 7.646, de 21 de dezembro de 2011; Decreto nº 12.716, de 12 de novembro de 2025; Lei nº 15.120, de 7 de abril de 2025. https://www2.camara.leg.br/legin/fed/decret/2025/decreto-12716-12-novembro-2025-798285-publicacaooriginal-176987-pe.html [parcial]
- **R8.** Brasil. Lei nº 14.307, de 3 de março de 2022; Agência Nacional de Saúde Suplementar. Resolução Normativa nº 555, de 14 de dezembro de 2022. http://www.planalto.gov.br/ccivil_03/_ato2019-2022/2022/lei/l14307.htm [parcial]
- **R9.** Brasil. Constituição da República Federativa do Brasil de 1988, arts. 196 e 198; Lei nº 8.080, de 19 de setembro de 1990, art. 7º. [parcial]
- **R10.** Conitec. Perspectiva do Paciente [internet]. https://www.gov.br/conitec/pt-br/assuntos/participacao-social/perspectiva-do-paciente-1 [aberto]
- **R11.** Conitec. Relatório de Recomendação nº 793: onasemnogeno abeparvoveque para atrofia muscular espinhal tipo I. Brasília; dez. 2022. https://www.gov.br/conitec/pt-br/midias/relatorios/portaria/2022/20221207_relatorio_zolgensma_ame_tipo_i_793_2022.pdf [aberto]
- **R12.** Conitec. Relatório de Recomendação nº 974: nirsevimabe para vírus sincicial respiratório. Brasília; fev. 2025. https://www.gov.br/conitec/pt-br/midias/relatorios/2025/relatorio_974_nirvesimabe_virus_sincicial_respiratorio.pdf [aberto]
- **R13.** IBGE. Agência de Notícias (PIB de 2021 e de 2025). https://agenciadenoticias.ibge.gov.br/agencia-noticias/33066-pib-cresce-4-6-em-2021-e-supera-perdas-da-pandemia.html [parcial; não abriu]
- **R14.** Futuro da Saúde. Matérias sobre ANS e limiar de custo-efetividade (2023 e 2026). https://futurodasaude.com.br/ans-limiar-custo-efetividade-incorporacao-tecnologias/ [parcial]
- **R15.** Rebrats. Diretriz de Análise de Impacto Orçamentário: versão preliminar; 2026. http://www.rebrats.saude.gov.br/images/2026/VERSAO_PRELIMINAR_Diretriz-AIO-2026.pdf [parcial]

**NICE, EuroQol, Estados Unidos**
- **R16.** NICE. Changes to NICE's cost-effectiveness thresholds confirmed [internet]. 1 Dec 2025. https://www.nice.org.uk/news/articles/changes-to-nice-s-cost-effectiveness-thresholds-confirmed [aberto]
- **R17.** NICE. NICE health technology evaluations: the manual (PMG36). Publicado em 31 jan. 2022; atualizado em 13 out. 2026. https://www.nice.org.uk/process/pmg36 [aberto: capítulos "committee-recommendations-2" e "economic-evaluation-2"]
- **R18.** EuroQol Research Foundation. Value sets [internet]; arquivos "Brazil 3L (Santos TTO 2016)", "Brazil 3L (Andrade TTO 2013)" e "Brazil Y-3L (Santo DCE TTO 2024)". https://euroqol.org/information-and-support/resources/value-sets/ ; https://euroqol.org/wp-content/uploads/2026/05/Brazil-3L-Santos-TTO-2016.txt [aberto]
- **R19.** EuroQol Research Foundation. Intellectual property (IP) protection; FAQs; EQ-5D-3L [internet]. https://euroqol.org/register/quality/intellectual-property-ip-protection/ [aberto]
- **R20.** United States Code. 42 U.S.C. § 1320e-1 (Social Security Act, § 1182; Pub. L. 111-148, § 6301(c), 2010). https://www.law.cornell.edu/uscode/text/42/1320e-1 [aberto]
- **R21.** United States Code. 42 U.S.C. § 1320f-3 (Social Security Act, § 1194; Pub. L. 117-169, 2022). https://www.law.cornell.edu/uscode/text/42/1320f-3 [aberto]
- **R22.** US Congress. H.R. 485, Protecting Health Care for All Patients Act of 2023 (118º); H.R. 3864 (119º). https://www.congress.gov/bill/118th-congress/house-bill/485/all-info [parcial; não abriu]
- **R23.** Centers for Medicare & Medicaid Services. Medicare Drug Price Negotiation Program: revised guidance. Jun 2023. https://www.cms.gov/files/document/revised-medicare-drug-price-negotiation-program-guidance-june-2023.pdf [parcial]
- **R24.** US Department of Health and Human Services. Regra final da Seção 504 (45 CFR § 84.57), 2024. https://www.hhs.gov/sites/default/files/ocr-dcl-section-504-section-1557-disability.pdf [parcial]
- **R25.** Institute for Clinical and Economic Review. ICER glossary; Cost-effectiveness, the QALY, and the evLYG; ICER's Reference Case for Economic Evaluations (22 out. 2026). https://icer.org/icer-glossary/ ; https://icer.org/wp-content/uploads/2024/02/ICER_Reference-Case_For-Publication_102226.pdf [aberto]
- **R26.** National Council on Disability. Quality-adjusted life years and the devaluation of life with disability. Washington (DC): NCD; 2019. https://ncd.gov/report/quality-adjusted-life-years-and-the-devaluation-of-life-with-a-disability [parcial]

**Tarifas e valoração**
- **R27.** Santos M, Cintra MACT, Monteiro AL, Santos B, Gusmão-Filho F, Andrade MV, et al. Brazilian valuation of EQ-5D-3L health states: results from a saturation study. Med Decis Making. 2016;36(2):253-63. doi:10.1177/0272989X15613521. PMID 26492896. [PubMed; Crossref; texto fechado]
- **R28.** Viegas Andrade M, Noronha K, Kind P, Maia AC, Miranda de Menezes R, De Barros Reis C, et al. Societal preferences for EQ-5D health states from a Brazilian population survey. Value Health Reg Issues. 2013;2(3):405-12. doi:10.1016/j.vhri.2013.01.009. PMID 29702778. [PubMed]
- **R29.** Espirito Santo CM, Miyamoto GC, Santos VS, Ben ÂJ, Finch AP, Roudijk B, et al. Estimating an EQ-5D-Y-3L value set for Brazil. Pharmacoeconomics. 2024;42(9):1047-63. doi:10.1007/s40273-024-01404-9. PMID 38954389. PMCID PMC11343814. [PubMed; texto integral]
- **R30.** Silva MT, Caicedo Roa M, Galvao TF. Health-related quality of life in the Brazilian Amazon: a population-based cross-sectional study. Health Qual Life Outcomes. 2017;15(1):159. doi:10.1186/s12955-017-0734-5. PMID 28807027. [PubMed; texto integral]
- **R31.** Santos M, et al. EQ-5D Brazilian population norms. Health Qual Life Outcomes. 2021. doi:10.1186/s12955-021-01671-6. PMID 34112207. PMCID PMC8190837. [PubMed; texto integral; coautores, volume e páginas não registrados nas notas]
- **R32.** Santos M, Correia MG, von Doellinger VR, Lordello S, Monteiro AL. Assessing the impact of a social program using EQ-HWB-9 and EQ-5D-5L: the Dara Project. Value Health Reg Issues. 2025;53:101524. doi:10.1016/j.vhri.2025.101524. PMID 41205347. [PubMed]
- **R33.** Oppe M, Rand-Hendriksen K, Shah K, Ramos-Goñi JM, Luo N. EuroQol protocols for time trade-off valuation of health outcomes. Pharmacoeconomics. 2016;34(10):993-1004. doi:10.1007/s40273-016-0404-1. PMID 27084198. [PubMed; texto integral]
- **R34.** Torrance GW. Measurement of health state utilities for economic appraisal. J Health Econ. 1986;5(1):1-30. doi:10.1016/0167-6296(86)90020-2. PMID 10311607. [PubMed]
- **R35.** Brazier J, Rowen D, Karimi M, Peasgood T, Tsuchiya A, Ratcliffe J. Experience-based utility and own health state valuation for a health state classification system: why and how to do it. Eur J Health Econ. 2018;19(6):881-91. doi:10.1007/s10198-017-0931-5. PMID 29022120. [PubMed; texto integral]
- **R36.** Ubel PA, Loewenstein G, Jepson C. Whose quality of life? A commentary exploring discrepancies between health state evaluations of patients and the general public. Qual Life Res. 2003;12(6):599-607. doi:10.1023/a:1025119931010. PMID 14516169. [PubMed]
- **R37.** Peeters Y, Stiggelbout AM. Health state valuations of patients and the general public analytically compared. Value Health. 2010;13(2):306-9. doi:10.1111/j.1524-4733.2009.00610.x. PMID 19744288. [PubMed]
- **R38.** Menzel P, Dolan P, Richardson J, Olsen JA. The role of adaptation to disability and disease in health state valuation: a preliminary normative analysis. Soc Sci Med. 2002;55(12):2149-58. doi:10.1016/s0277-9536(01)00358-6. PMID 12409128. [PubMed]
- **R39.** Dolan P. Whose preferences count? Med Decis Making. 1999;19(4):482-6. doi:10.1177/0272989X9901900416. PMID 10520686. [PubMed]
- **R40.** Dolan P, Kahneman D. Interpretations of utility and their implications for the valuation of health. Econ J. 2008;118(525):215-34. doi:10.1111/j.1468-0297.2007.02110.x. [Crossref; fora do PubMed]
- **R41.** Gold MR, Siegel JE, Russell LB, Weinstein MC, editors. Cost-effectiveness in health and medicine. New York: Oxford University Press; 1996. ISBN 9780195108248. [parcial]

**Origem, vantagens e defesa**
- **R42.** Klarman HE, Francis JO, Rosenthal GD. Cost effectiveness analysis applied to the treatment of chronic renal disease. Med Care. 1968;6(1):48-54. [parcial; volume e páginas sem confirmação independente; fora do PubMed]
- **R43.** Fanshel S, Bush JW. A health-status index and its application to health-services outcomes. Oper Res. 1970;18(6):1021-66. [parcial; RePEc]
- **R44.** Torrance GW, Thomas WH, Sackett DL. A utility maximization model for evaluation of health care programs. Health Serv Res. 1972;7(2):118-33. PMID 5044699. [PubMed]
- **R45.** Zeckhauser R, Shepard D. Where now for saving lives? Law Contemp Probl. 1976;40(4):5-45. https://scholarship.law.duke.edu/lcp/vol40/iss4/2 [parcial]
- **R46.** Weinstein MC, Stason WB. Foundations of cost-effectiveness analysis for health and medical practices. N Engl J Med. 1977;296(13):716-21. doi:10.1056/NEJM197703312961304. PMID 402576. [PubMed]
- **R47.** Pliskin JS, Shepard DS, Weinstein MC. Utility functions for life years and health status. Oper Res. 1980;28(1):206-24. [parcial; RePEc]
- **R48.** Williams A. Economics of coronary artery bypass grafting. Br Med J (Clin Res Ed). 1985;291(6491):326-9. doi:10.1136/bmj.291.6491.326. PMID 3160430. [PubMed]
- **R49.** Weinstein MC, Torrance G, McGuire A. QALYs: the basics. Value Health. 2009;12 Suppl 1:S5-9. doi:10.1111/j.1524-4733.2009.00515.x. PMID 19250132. [PubMed, s/r]
- **R50.** Whitehead SJ, Ali S. Health outcomes in economic evaluation: the QALY and utilities. Br Med Bull. 2010;96:5-21. doi:10.1093/bmb/ldq033. PMID 21037243. [PubMed]
- **R51.** Neumann PJ, Cohen JT. QALYs in 2018—advantages and concerns. JAMA. 2018;319(24):2473-4. doi:10.1001/jama.2018.6072. PMID 29800152. [PubMed, s/r; é JAMA, não NEJM]
- **R52.** Rand LZ, Kesselheim AS. Controversy over using quality-adjusted life-years in cost-effectiveness analyses: a systematic literature review. Health Aff (Millwood). 2021;40(9):1402-10. doi:10.1377/hlthaff.2021.00343. PMID 34495724. [PubMed; título corrigido]
- **R53.** Rand LZ, Melendez-Torres GJ, Kesselheim AS. Alternatives to the quality-adjusted life year: how well do they address common criticisms? Health Serv Res. 2023;58(2):433-44. doi:10.1111/1475-6773.14116. PMID 36537647. [PubMed]
- **R54.** Raymakers AJN, Rand LZ, Feldman WB, Kesselheim AS. An empirical investigation into concerns over quality-adjusted life-years: a review of cost-effectiveness analyses in oncology. J Cancer Policy. 2025;43:100562. doi:10.1016/j.jcpo.2025.100562. PMID 39894216. [PubMed]

**Limiar e custo de oportunidade**
- **R55.** Woods B, Revill P, Sculpher M, Claxton K. Country-level cost-effectiveness thresholds: initial estimates and the need for further research. Value Health. 2016;19(8):929-35. doi:10.1016/j.jval.2016.02.017. PMID 27987642. PMCID PMC5193154. [PubMed; texto integral, sem o suplemento]
- **R56.** Pichon-Riviere A, Drummond M, Palacios A, Garcia-Marti S, Augustovski F. Determining the efficiency path to universal health coverage: cost-effectiveness thresholds for 174 countries based on growth in life expectancy and health expenditures. Lancet Glob Health. 2023;11(6):e833-42. doi:10.1016/S2214-109X(23)00162-6. PMID 37202020. [PubMed]
- **R57.** Claxton K, Martin S, Soares M, Rice N, Spackman E, Hinde S, et al. Methods for the estimation of the National Institute for Health and Care Excellence cost-effectiveness threshold. Health Technol Assess. 2015;19(14):1-503. doi:10.3310/hta19140. PMID 25692211. [PubMed]
- **R58.** McCabe C, Claxton K, Culyer AJ. The NICE cost-effectiveness threshold: what it is and what that means. Pharmacoeconomics. 2008;26(9):733-44. doi:10.2165/00019053-200826090-00004. PMID 18767894. [PubMed]
- **R59.** Culyer AJ. Cost-effectiveness thresholds in health care: a bookshelf guide to their meaning and use. Health Econ Policy Law. 2016;11(4):415-32. doi:10.1017/S1744133116000049. PMID 26906561. [PubMed]
- **R60.** Ryen L, Svensson M. The willingness to pay for a quality adjusted life year: a review of the empirical literature. Health Econ. 2015;24(10):1289-301. doi:10.1002/hec.3085. PMID 25070495. [PubMed]

**Idade, deficiência e métricas americanas**
- **R61.** Williams A. Intergenerational equity: an exploration of the 'fair innings' argument. Health Econ. 1997;6(2):117-32. doi:10.1002/(sici)1099-1050(199703)6:2<117::aid-hec256>3.0.co;2-b. PMID 9158965. [PubMed]
- **R62.** Harris J. QALYfying the value of life. J Med Ethics. 1987;13(3):117-23. doi:10.1136/jme.13.3.117. PMID 3669036. [PubMed]
- **R63.** Tsuchiya A. QALYs and ageism: philosophical theories and age weighting. Health Econ. 2000;9(1):57-68. doi:10.1002/(sici)1099-1050(200001)9:1<57::aid-hec484>3.0.co;2-n. PMID 10694760. [PubMed]
- **R64.** Singer P, McKie J, Kuhse H, Richardson J. Double jeopardy and the use of QALYs in health care allocation. J Med Ethics. 1995;21(3):144-50. doi:10.1136/jme.21.3.144. PMID 7674278. [PubMed]
- **R65.** Nord E, Pinto JL, Richardson J, Menzel P, Ubel P. Incorporating societal concerns for fairness in numerical valuations of health programmes. Health Econ. 1999;8(1):25-39. doi:10.1002/(sici)1099-1050(199902)8:1<25::aid-hec398>3.0.co;2-h. PMID 10082141. [PubMed]
- **R66.** Campbell JD, Whittington MD, Pearson SD. An alternative measure of health for value assessment: the equal value life-year. Pharmacoeconomics. 2023;41(10):1175-82. doi:10.1007/s40273-023-01302-6. PMID 37458912. [PubMed]
- **R67.** Basu A, Carlson J, Veenstra D. Health years in total: a new health objective function for cost-effectiveness analysis. Value Health. 2020;23(1):96-103. doi:10.1016/j.jval.2019.10.014. PMID 31952678. [PubMed]
- **R68.** Lakdawalla DN, Phelps CE. Health technology assessment with diminishing returns to health: the Generalized Risk-Adjusted Cost-Effectiveness (GRACE) approach. Value Health. 2021;24(2):244-9. doi:10.1016/j.jval.2020.10.003. PMID 33518031. [PubMed]

**Sensibilidade do instrumento e cuidadores**
- **R69.** Mulhern B, Mukuria C, Barkham M, Knapp M, Byford S, Soeteman D, et al. Using generic preference-based measures in mental health: psychometric validity of the EQ-5D and SF-6D. Br J Psychiatry. 2014;205(3):236-43. doi:10.1192/bjp.bp.112.122283. PMID 24855127. [PubMed]
- **R70.** Longworth L, Yang Y, Young T, Mulhern B, Hernández Alava M, Mukuria C, et al. Use of generic and condition-specific measures of health-related quality of life in NICE decision-making: a systematic review, statistical modelling and survey. Health Technol Assess. 2014;18(9):1-224. doi:10.3310/hta18090. PMID 24524660. [PubMed; conclusões não lidas]
- **R71.** Richardson J, Khan MA, Iezzi A, Maxwell A. Comparing and explaining differences in the magnitude, content, and sensitivity of utilities predicted by the EQ-5D, SF-6D, HUI 3, 15D, QWB, and AQoL-8D multiattribute utility instruments. Med Decis Making. 2015;35(3):276-91. doi:10.1177/0272989X14543107. PMID 25159172. [PubMed]
- **R72.** Whitehurst DG, Norman R, Brazier JE, Viney R. Comparison of contemporaneous EQ-5D and SF-6D responses using scoring algorithms derived from similar valuation exercises. Value Health. 2014;17(5):570-7. doi:10.1016/j.jval.2014.03.1720. PMID 25128050. [PubMed]
- **R73.** Rowen D, Rivero-Arias O, Devlin N, Ratcliffe J. Review of valuation methods of preference-based measures of health for economic evaluation in child and adolescent populations: where are we now and where are we going? Pharmacoeconomics. 2020;38(4):325-40. doi:10.1007/s40273-019-00873-7. PMID 31903522. [PubMed]
- **R74.** Normand C. Measuring outcomes in palliative care: limitations of QALYs and the road to PalYs. J Pain Symptom Manage. 2009;38(1):27-31. doi:10.1016/j.jpainsymman.2009.04.005. PMID 19615624. [PubMed]
- **R75.** Wichmann AB, Adang EM, Stalmeier PF, Kristanti S, Van den Block L, Vernooij-Dassen MJ, et al. The use of quality-adjusted life years in cost-effectiveness analyses in palliative care: mapping the debate through an integrative review. Palliat Med. 2017;31(4):306-22. doi:10.1177/0269216316689652. PMID 28190374. [PubMed]
- **R76.** Brazier J, Peasgood T, Mukuria C, Marten O, Kreimeier S, Luo N, et al. The EQ-HWB: overview of the development of a measure of health and wellbeing and key results. Value Health. 2022;25(4):482-91. doi:10.1016/j.jval.2022.01.009. PMID 35277337. [PubMed]
- **R77.** Al-Janabi H, van Exel J, Brouwer W, Coast J. A framework for including family health spillovers in economic evaluation. Med Decis Making. 2016;36(2):176-86. doi:10.1177/0272989X15605094. PMID 26377370. [PubMed]
- **R78.** Pennington BM. Inclusion of carer health-related quality of life in National Institute for Health and Care Excellence appraisals. Value Health. 2020;23(10):1349-57. doi:10.1016/j.jval.2020.05.017. PMID 33032779. [PubMed]
- **R79.** Mott DJ, Schirrmacher H, Al-Janabi H, Guest S, Pennington B, Scheuer N, et al. Modelling spillover effects on informal carers: the carer QALY trap. Pharmacoeconomics. 2023;41(12):1557-61. doi:10.1007/s40273-023-01316-0. PMID 37659032. [PubMed]

**Regra do resgate, gravidade, fim de vida, raras**
- **R80.** Jonsen AR. Bentham in a box: technology assessment and health care allocation. Law Med Health Care. 1986;14(3-4):172-4. doi:10.1111/j.1748-720x.1986.tb00974.x. PMID 3645228. [PubMed, s/r]
- **R81.** McKie J, Richardson J. The rule of rescue. Soc Sci Med. 2003;56(12):2407-19. doi:10.1016/s0277-9536(02)00244-7. PMID 12742604. [PubMed]
- **R82.** Hadorn DC. Setting health care priorities in Oregon: cost-effectiveness meets the rule of rescue. JAMA. 1991;265(17):2218-25. PMID 1901610. [PubMed; sem DOI no registro]
- **R83.** Ottersen T, Førde R, Kakad M, Kjellevold A, Melberg HO, Moen A, et al. A new proposal for priority setting in Norway: open and fair. Health Policy. 2016;120(3):246-51. doi:10.1016/j.healthpol.2016.01.012. PMID 26851991. [PubMed]
- **R84.** Reckers-Droog VT, van Exel NJA, Brouwer WBF. Looking back and moving forward: on the application of proportional shortfall in healthcare priority setting in the Netherlands. Health Policy. 2018;122(6):621-9. doi:10.1016/j.healthpol.2018.04.001. PMID 29703652. [PubMed]
- **R85.** Shah KK. Severity of illness and priority setting in healthcare: a review of the literature. Health Policy. 2009;93(2-3):77-84. doi:10.1016/j.healthpol.2009.08.005. PMID 19712990. [PubMed]
- **R86.** Shah KK, Tsuchiya A, Wailoo AJ. Valuing health at the end of life: an empirical study of public preferences. Eur J Health Econ. 2014;15(4):389-99. doi:10.1007/s10198-013-0482-3. PMID 23657476. [PubMed]
- **R87.** Linley WG, Hughes DA. Societal views on NICE, cancer drugs fund and value-based pricing criteria for prioritising medicines: a cross-sectional survey of 4118 adults in Great Britain. Health Econ. 2013;22(8):948-64. doi:10.1002/hec.2872. PMID 22961976. [PubMed]
- **R88.** Drummond MF, Wilson DA, Kanavos P, Ubel P, Rovira J. Assessing the economic challenges posed by orphan drugs. Int J Technol Assess Health Care. 2007;23(1):36-42. doi:10.1017/S0266462307051550. PMID 17234015. [PubMed]
- **R89.** McCabe C, Claxton K, Tsuchiya A. Orphan drugs and the NHS: should we value rarity? BMJ. 2005;331(7523):1016-9. doi:10.1136/bmj.331.7523.1016. PMID 16254305. [PubMed, só a chamada]

**Premissas técnicas**
- **R90.** Tsuchiya A, Dolan P. The QALY model and individual preferences for health states and health profiles over time: a systematic review of the literature. Med Decis Making. 2005;25(4):460-7. doi:10.1177/0272989X05276854. PMID 16061898. [PubMed]
- **R91.** Dolan P, Stalmeier P. The validity of time trade-off values in calculating QALYs: constant proportional time trade-off versus the proportional heuristic. J Health Econ. 2003;22(3):445-58. doi:10.1016/S0167-6296(02)00120-0. PMID 12683961. [PubMed]
- **R92.** Gravelle H, Smith D. Discounting for health effects in cost-benefit and cost-effectiveness analysis. Health Econ. 2001;10(7):587-99. doi:10.1002/hec.618. PMID 11747043. [PubMed]
- **R93.** Claxton K, Paulden M, Gravelle H, Brouwer W, Culyer AJ. Discounting and decision making in the economic evaluation of health-care technologies. Health Econ. 2011;20(1):2-15. doi:10.1002/hec.1612. PMID 21154521. [PubMed]
- **R94.** Brouwer WB, Niessen LW, Postma MJ, Rutten FF. Need for differential discounting of costs and health effects in cost effectiveness analyses. BMJ. 2005;331(7514):446-8. doi:10.1136/bmj.331.7514.446. PMID 16110075. [PubMed]

**Alternativas**
- **R95.** Murray CJ. Quantifying the burden of disease: the technical basis for disability-adjusted life years. Bull World Health Organ. 1994;72(3):429-45. PMID 8062401. PMCID PMC2486718. [PubMed]
- **R96.** Murray CJ, Ezzati M, Flaxman AD, Lim S, Lozano R, Michaud C, et al. GBD 2010: design, definitions, and metrics. Lancet. 2012;380(9859):2063-6. doi:10.1016/S0140-6736(12)61899-6. PMID 23245602. [PubMed, s/r]
- **R97.** Sassi F. Calculating QALYs, comparing QALY and DALY calculations. Health Policy Plan. 2006;21(5):402-8. doi:10.1093/heapol/czl018. PMID 16877455. [PubMed]
- **R98.** Gold MR, Stevenson D, Fryback DG. HALYs and QALYs and DALYs, oh my: similarities and differences in summary measures of population health. Annu Rev Public Health. 2002;23:115-34. doi:10.1146/annurev.publhealth.23.100901.140513. PMID 11910057. [PubMed]
- **R99.** Frijters P, Clark AE, Krekel C, Layard R. A happy choice: wellbeing as the goal of government. Behav Public Policy. 2020;4(2):126-65. doi:10.1017/bpp.2019.39. [parcial; fora do PubMed]
- **R100.** HM Treasury. Wellbeing guidance for appraisal: supplementary Green Book guidance. London: HM Treasury; 2021. https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/1005389/Wellbeing_guidance_for_appraisal_-_background_paper_reviewing_methods_and_approaches.pdf [parcial]
- **R101.** Thokala P, Devlin N, Marsh K, Baltussen R, Boysen M, Kalo Z, et al. Multiple criteria decision analysis for health care decision making—an introduction: report 1 of the ISPOR MCDA Emerging Good Practices Task Force. Value Health. 2016;19(1):1-13. doi:10.1016/j.jval.2015.12.003. PMID 26797229. [PubMed]
- **R102.** Marsh K, IJzerman M, Thokala P, Baltussen R, Boysen M, Kaló Z, et al. Multiple criteria decision analysis for health care decision making—emerging good practices: report 2 of the ISPOR MCDA Emerging Good Practices Task Force. Value Health. 2016;19(2):125-37. doi:10.1016/j.jval.2015.12.016. PMID 27021745. [PubMed]
- **R103.** Baltussen R, Niessen L. Priority setting of health interventions: the need for multi-criteria decision analysis. Cost Eff Resour Alloc. 2006;4:14. doi:10.1186/1478-7547-4-14. PMID 16923181. [PubMed]
- **R104.** Cookson R, Mirelman AJ, Griffin S, Asaria M, Dawkins B, Norheim OF, et al. Using cost-effectiveness analysis to address health equity concerns. Value Health. 2017;20(2):206-12. doi:10.1016/j.jval.2016.11.027. PMID 28237196. [PubMed]
- **R105.** Asaria M, Griffin S, Cookson R. Distributional cost-effectiveness analysis: a tutorial. Med Decis Making. 2016;36(1):8-19. doi:10.1177/0272989X15583266. PMID 25908564. [PubMed]
- **R106.** Daniels N, Sabin JE. Accountability for reasonableness: an update. BMJ. 2008;337:a1850. doi:10.1136/bmj.a1850. PMID 18845595. [PubMed, s/r]

**Casos (nas referências abaixo marcadas "incompleta", as notas só registram o primeiro autor ou não trazem o título: completar pelo PMID antes de publicar)**
- **R107.** Kunkel ST, et al. The cost-effectiveness of total hip arthroplasty in patients 80 years of age and older. J Arthroplasty. 2018;33(5):1359-67. doi:10.1016/j.arth.2017.11.063. PMID 29276115. [PubMed; incompleta]
- **R108.** Siskind D, Baingana F, Kim J. Cost-effectiveness of group psychotherapy for depression in Uganda. J Ment Health Policy Econ. 2008;11(3):127-33. PMID 18806302. [PubMed; sem DOI]
- **R109.** Aldridge LR, et al. Glob Ment Health (Camb). 2022;9:499-507. doi:10.1017/gmh.2022.54. PMID 36618735. [PubMed; incompleta]
- **R110.** Gibbs NK, et al. BMJ Glob Health. 2025;10(11). doi:10.1136/bmjgh-2025-020833. PMID 41238226. [PubMed; incompleta]
- **R111.** Emmett SD, et al. Moving beyond GDP: cost effectiveness of cochlear implantation and deaf education in Latin America. Otol Neurotol. 2016;37(8):1040-8. doi:10.1097/MAO.0000000000001148. PMID 27518131. [PubMed; incompleta]
- **R112.** Crathorne L, et al. Clin Otolaryngol. 2012;37(5):342-54. doi:10.1111/coa.12011. PMID 22928754. [PubMed; incompleta]
- **R113.** Gomes B, Calanzani N, Curiale V, McCrone P, Higginson IJ. Effectiveness and cost-effectiveness of home palliative care services for adults with advanced illness and their caregivers. Cochrane Database Syst Rev. 2013;(6):CD007760. doi:10.1002/14651858.CD007760.pub2. PMID 23744578. [PubMed]
- **R114.** Spekreijse L, et al. (estudo BICAT-NL). Lancet. 2023;401(10392):1951-62. doi:10.1016/S0140-6736(23)00525-1. PMID 37201546. [PubMed; incompleta]

**Fontes usadas só em fatos de status "parcial"**
- **R115.** NICE. Appraising life-extending, end of life treatments (orientação suplementar); 2009. https://nice.org.uk/guidance/GID-TAG387/documents/appraising-life-extending-end-of-life-treatments-paper2 [parcial]
- **R116.** Zorginstituut Nederland. Cost-effectiveness in practice. 16 jun. 2015. https://english.zorginstituutnederland.nl/ [parcial]
- **R117.** AMA Journal of Ethics. Oregon's experiment prioritizing public health care services. 2011. https://journalofethics.ama-assn.org/article/oregons-experiment-prioritizing-public-health-care-services/2011-04 [parcial; autoria não registrada nas notas]
- **R118.** Brasil. Ministério da Saúde. Portaria GM/MS nº 3.681, de 7 de maio de 2024 (Política Nacional de Cuidados Paliativos). [parcial]
- **R119.** Conitec. Relatório da oficina sobre limiares de custo-efetividade; 2021. https://www.gov.br/conitec/pt-br/midias/pdf/2021/20211202_relatorio_oficina_limiares.pdf [parcial; baixado, não lido]

---

## Parte C — O que não foi possível verificar

> Atualização da rodada 2: os itens 4 (aposta padrão), 7 (Constituição e leis brasileiras, no que toca ao art. 196) e 15 (Longworth, quanto ao desenvolvimento de itens extras) foram superados pelos fatos F116, F121 e F84; o site afirma só o que esses fatos sustentam. Afirmações qualitativas sem fato próprio, aceitas como conhecimento geral e sem número: gastos da família fora da perspectiva do SUS e impacto orçamentário (conferidas pelo Juiz D na diretriz e na Portaria 8.817); consulta pública pela internet; a crítica de movimentos de pessoas com deficiência; o uso de outras medidas ao lado do QALY.

O site não deve afirmar como fato:

1. Que o EQ-5D-5L descreve 3.125 estados, e a redação dos seus cinco níveis: não constam das notas de pesquisa.
2. A redação oficial em português do questionário EQ-5D (itens e níveis).
3. O valor −0,176 para 33333 e a transformação aplicada no estudo de Santos 2016 aos estados piores que a morte (texto integral fechado).
4. A descrição operacional do standard gamble e as fórmulas de Torrance 1986; o conteúdo de Drummond 2015 e de Brazier et al. (livros).
5. Que a Conitec fixou o limiar em "1 PIB per capita de 2021": o relatório não dá ano-base nem valor em reais. Os valores do IBGE têm status parcial.
6. A existência de portaria de 2022 instituindo os valores, e de qualquer atualização numérica do limiar depois de 2022.
7. A redação literal e vigente das Leis 12.401, 14.313, 14.307, 15.120 e 15.126, dos Decretos 7.646 e 12.716 e da Constituição (Planalto não abriu).
8. A regra "0% a 10%" no texto da 2ª edição (2014) da diretriz; a convenção de desconto do primeiro ano.
9. Limiar da ANS, consulta pública da ANS sobre o tema e resultado do estudo com o IECS.
10. O valor do Brasil em Pichon-Riviere 2023 (US$ 8.462; 0,95 PIB per capita) e a coluna sem PPP de Woods 2016.
11. NICE: o dia exato da vigência em abril de 2026; a frase de que o modificador de gravidade "substituiu" o fim de vida, no texto do manual; o texto do manual sobre cuidadores e sobre DCEA; o Citizens Council (número de membros, encerramento).
12. Estados Unidos: status atual dos projetos H.R. 485 e H.R. 3864; o texto do 45 CFR § 84.57; o que a regra final do CMS de nov. 2026 (CMS-4215-F) diz sobre QALY; a data de dezembro de 2018 para o evLYG.
13. Noruega: limiares oficiais em coroas e o texto do que o Parlamento aprovou. Holanda: os valores em euros, na fonte original.
14. Oregon: as posições do capeamento dentário e da apendicectomia na lista.
15. O texto original de Klarman 1968, Zeckhauser e Shepard 1976 e Pliskin 1980 (inclusive a frase em que o termo aparece e as três condições); a recomendação de "preferências da comunidade" em Gold 1996; as quatro condições de Daniels e Sabin; a posição de McCabe 2005 sobre raridade; as conclusões de Longworth 2014.
16. Qualquer comparação numérica entre o limiar por QALY e o valor estatístico de uma vida.
17. WELLBY: o valor de £13.000 no documento do Tesouro; atualização posterior.
18. Casos: RCEI de nusinersena, da vacina meningocócica ACWY e de qualquer caso oncológico; custo por QALY da cirurgia de catarata versus não operar; dado brasileiro de custo-efetividade em saúde mental; o valor atualizado do nirsevimabe após a consulta pública; a base legal dos 20 dias de consulta pública da Conitec.
