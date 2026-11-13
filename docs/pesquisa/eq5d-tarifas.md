# EQ-5D, valoração de estados de saúde e tarifas brasileiras — checagem de fatos

Data da checagem: 2026-11-13. Regra seguida: nada de memória; cada item traz o que foi de fato aberto.

**Limitação de ambiente (importante):** a sessão só alcançava (a) o PubMed/PMC pelas ferramentas MCP (metadados e texto integral de artigos em acesso aberto no PMC), (b) clones de repositórios públicos do GitHub e (c) busca na web (apenas trechos/snippets, sem abrir a página). Estavam **bloqueados**: journals.sagepub.com, sciencedirect.com, euroqol.org, rebrats.saude.gov.br, scielo.br, CRAN, doi.org, Crossref, Europe PMC. Por isso **o texto integral de Santos 2016 (paywall, sem PMC) e de Andrade 2013 não foi aberto**; os coeficientes abaixo vêm de três fontes secundárias independentes que concordam entre si.

Atribuição: os metadados bibliográficos abaixo foram obtidos do PubMed (NCBI). Os DOIs estão como links.

Legenda de status: **verificada** | **parcialmente verificada** | **não verificada**.

---

## 1. Tarifa brasileira do EQ-5D-3L (Santos et al., 2016)

### 1.1 Referência

- **Citação:** Santos M, Cintra MACT, Monteiro AL, Santos B, Gusmão-Filho F, Andrade MV, Noronha K, Cruz LN, Camey S, Tura B, Kind P. Brazilian Valuation of EQ-5D-3L Health States: Results from a Saturation Study. *Med Decis Making*. 2016;36(2):253-263.
- **DOI:** [10.1177/0272989X15613521](https://doi.org/10.1177/0272989X15613521) — **PMID:** 26492896 — sem PMCID (não há texto aberto no PMC). Publicado online em 22/10/2015; fascículo de fevereiro de 2016.
- **URL aberta (só resumo):** https://pubmed.ncbi.nlm.nih.gov/26492896/
- **Como foi conferida:** registro PubMed aberto via MCP (`get_article_metadata`, PMID 26492896): 11 autores na ordem acima, volume 36, número 2, páginas 253-63.
- **Status:** verificada (metadados). Texto integral: não aberto.

### 1.2 Desenho do estudo

| Afirmação | Valor | Fonte e trecho literal | Status |
|---|---|---|---|
| Método de valoração | TTO (time trade-off), protocolo MVH revisado, entrevista domiciliar | Resumo PubMed: "The interview followed a revised version of the MVH protocol, in which all 243 health states were valued. Each respondent ranked and valued 7 health states using the TTO in a home interview." | verificada |
| Amostra | 9.148 pessoas, população geral, 18 a 64 anos, amostra probabilística estratificada por idade e sexo | Resumo: "Data were collected from 9148 subjects." / "A probabilistic sample of the general population, aged 18 to 64 y, stratified by age and gender" | verificada |
| Estados valorados | Todos os 243 (estudo de "saturação"); 7 estados por respondente | Resumo: "Thus far, no studies using a time tradeoff utility elicitation method have been carried out using all 243 EQ-5D health states." | verificada |
| Onde | 4 áreas urbanas: Belo Horizonte (MG), Rio de Janeiro, Porto Alegre, Recife | Resumo: "A multicentric study was conducted in 4 Brazilian areas." Nomes das cidades em Santos M et al., *Health Qual Life Outcomes* 2024 (PMC10898160, texto integral aberto via MCP): "four Brazilian cities (Belo Horizonte, Rio de Janeiro, Porto Alegre, and Recife)"; e em Silva MT et al. 2017 (PMC5556350): "9148 people in the state of Minas Gerais and the cities of Rio de Janeiro, Porto Alegre, and Recife" | verificada (cidades por fontes secundárias em acesso aberto) |
| Período de coleta | meados de 2011 a 2012 | PMC10898160: "Data collection occurred from mid 2011 to 2012 during the Brazilian EQ-5D-3L valuation study" | verificada (fonte secundária) |
| Modelo | Efeitos mistos em nível individual, sem termos de interação | Resumo: "The best-fitting regression model was an individual-level mixed-effects model without any interaction terms." | verificada |
| Achado qualitativo | Mobilidade e atividades habituais com as maiores perdas; ansiedade/depressão com as menores | Resumo: "The dimensions 'Mobility' and 'Usual Activities' were associated with higher losses in health state utility value. The 'Anxiety/Depression' dimension was the domain that contributed to lower losses" | verificada (ver nota 1.6-c) |
| Transformação dos estados piores que a morte usada no estudo | — | Não consta no resumo; texto integral não aberto. | não verificada |

### 1.3 Coeficientes (decrementos) — PRIORIDADE MÁXIMA

Modelo aditivo de efeitos principais, com constante aplicada a qualquer desvio da saúde plena e **sem termo N3**.

| Termo | Decremento |
|---|---|
| Constante (qualquer dimensão em nível 2 ou 3) | 0,149 (equivale a intercepto 0,851 = 1 − 0,149) |
| Mobilidade nível 2 (MO2) | 0,120 |
| Mobilidade nível 3 (MO3) | 0,363 |
| Cuidados pessoais nível 2 (SC2) | 0,112 |
| Cuidados pessoais nível 3 (SC3) | 0,218 |
| Atividades habituais nível 2 (UA2) | 0,097 |
| Atividades habituais nível 3 (UA3) | 0,184 |
| Dor/mal-estar nível 2 (PD2) | 0,064 |
| Dor/mal-estar nível 3 (PD3) | 0,168 |
| Ansiedade/depressão nível 2 (AD2) | 0,050 |
| Ansiedade/depressão nível 3 (AD3) | 0,095 |
| N3 (algum nível 3) | não existe nesta tarifa |

```json
{
  "instrument": "EQ-5D-3L",
  "country": "Brazil",
  "method": "TTO (MVH revisado), modelo de efeitos mistos, efeitos principais",
  "source": {
    "citation": "Santos M, et al. Med Decis Making. 2016;36(2):253-263",
    "doi": "10.1177/0272989X15613521",
    "pmid": "26492896"
  },
  "full_health": 1.0,
  "constant_any_problem": -0.149,
  "N3": null,
  "decrements": {
    "MO": {"1": 0, "2": -0.120, "3": -0.363},
    "SC": {"1": 0, "2": -0.112, "3": -0.218},
    "UA": {"1": 0, "2": -0.097, "3": -0.184},
    "PD": {"1": 0, "2": -0.064, "3": -0.168},
    "AD": {"1": 0, "2": -0.050, "3": -0.095}
  },
  "rounding": 3,
  "note": "Coeficientes com 3 casas; 33333 = -0.177 pela soma. A literatura cita -0.176 (provável arredondamento de coeficientes com mais casas)."
}
```

**Como foi conferida — três fontes independentes, todas abertas nesta sessão:**

1. **Artigo revisado por pares em acesso aberto que reproduz a fórmula:** Silva MT, Caicedo Roa M, Galvao TF. Health-related quality of life in the Brazilian Amazon: a population-based cross-sectional study. *Health Qual Life Outcomes*. 2017;15(1):159. DOI [10.1186/s12955-017-0734-5](https://doi.org/10.1186/s12955-017-0734-5), PMID 28807027, PMC5556350 (https://pmc.ncbi.nlm.nih.gov/articles/PMC5556350/). Texto integral aberto via MCP. Trecho literal: "Utility scores were obtained from a validation study that included 9148 people in the state of Minas Gerais and the cities of Rio de Janeiro, Porto Alegre, and Recife []. To transform the five-digit health status to health utility values, we used the following formula []: Utility score = 0.851+ (−0.120*M2) + (−0.363*M3) + (−0.112*SC2) + (−0.218*SC3) + (−0.097*UA2) + (−0.184*UA3) + (−0.064*PD2) + (−0.168 *PD3) + (−0.050*AD2) + (−0.095*AD3)."
2. **Pacote R `eq5d` (fragla/eq5d, GitHub)**, clonado nesta sessão (commit `4b5b710`, 26/10/2026, versão 0.17.0.9000). Arquivo `data-raw/TTO.csv`, coluna `Brazil`: FullHealth 1; AtLeastOne2Or3 −0.149; AtLeastOne3 NA; MO2 −0.12; MO3 −0.363; SC2 −0.112; SC3 −0.218; UA2 −0.097; UA3 −0.184; PD2 −0.064; PD3 −0.168; AD2 −0.05; AD3 −0.095; todos os termos de interação NA. https://github.com/fragla/eq5d/blob/master/data-raw/TTO.csv
3. **Pacote R `eq5dsuite` (MathsInHealth/eq5dsuite-r, GitHub; pacote ligado à EuroQol)**, clonado nesta sessão (commit `aebe991`, 21/10/2026, versão 2.1.0). Arquivo `R/sysdata.rda`, objeto `.vsets3L`, coluna `BR`: tabela completa dos 243 estados. O objeto `.cntrcodes` atribui a coluna a: "Santos M, Cintra MACT, Monteiro AL, Santos B, Gusmão-filho F, Andrade MV, Noronha K, Cruz LN, Camey S, Tura B, Kind P. Brazilian Valuation of EQ-5D-3L Health States. Medical Decision Making. 2015;36(2):253-263. doi:10.1177/0272989X15613521".

**Concordância:** calculei os 243 estados com os coeficientes da fonte 2 e comparei com a tabela da fonte 3: diferença máxima = 0,000 em todos os 243 estados. A fórmula da fonte 1 tem exatamente os mesmos números.

**Status:** parcialmente verificada — os valores são consistentes em três fontes independentes, mas a Tabela original do artigo de Santos 2016 não pôde ser aberta (paywall + domínio bloqueado).

### 1.4 Divergências encontradas (mostrar, não esconder)

- **a) Atribuição no pacote `eq5d` (fragla):** o `data-raw/references.csv` (linha 5) e `man/TTO.Rd` atribuem o value set "Brazil" a **Viegas Andrade 2013** (PMID 29702778, DOI 10.1016/j.vhri.2013.01.009), isto é, ao estudo de Minas Gerais — e não a Santos 2016. Já o `eq5dsuite` e o artigo de Silva 2017 ligam os mesmos números ao estudo nacional de 9.148 pessoas (Santos 2016). Um snippet de busca na web indicou que a tabela de Minas Gerais tem outros números (mobilidade 0,152 e 0,420), o que sugere erro de citação no pacote `eq5d`; **não consegui abrir Andrade 2013 para confirmar os coeficientes de MG** (não verificada).
- **b) Valor de 33333: −0,177 ou −0,176?** Pela soma dos coeficientes com 3 casas: 1 − 0,149 − 0,363 − 0,218 − 0,184 − 0,168 − 0,095 = **−0,177** (é o que `eq5d` e `eq5dsuite` devolvem). Porém: (i) Espirito Santo et al. 2024 (PMC11343814) escrevem "In the EQ-5D-3L Brazilian value set, the worst health state (33333) was valued as − 0.176"; (ii) os testes do pacote `eq5d` (`tests/testthat/test-eq5d3l.R`) esperam −0.176, 0.477 (12133) e 0.425 (12232) com `tolerance = .0011`, enquanto a soma dos coeficientes dá −0,177, 0,476 e 0,424. Interpretação provável (não confirmada no original): a tabela publicada foi gerada com coeficientes de mais casas decimais, e há diferenças de ±0,001 em alguns estados. **Sugestão para o site:** usar os coeficientes de 3 casas e avisar que valores publicados podem diferir em 0,001 (ex.: 33333 = −0,176 na tabela original citada na literatura).
- **c) Fórmula de Silva 2017 escrita com intercepto fixo 0,851:** aplicada literalmente daria 11111 = 0,851. Nos dois pacotes, 11111 = 1,000 e a constante 0,149 só entra quando há algum problema. O mesmo artigo relata utilidade "range: −0.189 to 1" e "−0.889 (33331)", valores que não saem da fórmula (33331 = −0,082); parecem erros tipográficos daquele artigo. Não usar esses dois números.
- **d) Frase do resumo de Santos 2016** diz que "Mobility" e "Usual Activities" tiveram as maiores perdas. Nos coeficientes, o maior decremento de nível 3 é mobilidade (0,363), seguido de cuidados pessoais (0,218) e atividades habituais (0,184). Ansiedade/depressão é de fato o menor (0,095). A redação do resumo não bate exatamente com a ordem dos coeficientes de nível 3; como o texto integral não foi aberto, fica registrado como ponto a conferir.
- **e) Espirito Santo 2024** descreve a tarifa adulta como baseada em "a sample of 3,362 literate individuals" (número do estudo de Minas Gerais), citando duas referências. Ou seja, a própria literatura mistura os dois estudos.

### 1.5 Fórmula de cálculo e exemplo trabalhado

```
se estado == 11111:  índice = 1
senão:               índice = 1 − 0,149 − d(MO) − d(SC) − d(UA) − d(PD) − d(AD)
```

onde d(dimensão) é 0 no nível 1 e o decremento da tabela nos níveis 2 ou 3. Não há termo N3 nem interações. Arredondar para 3 casas.

**Exemplo — estado 21232** (alguns problemas para andar; sem problemas nos cuidados pessoais; alguns problemas nas atividades habituais; dor extrema; ansiedade moderada):
1 − 0,149 (constante) − 0,120 (MO2) − 0 (SC1) − 0,097 (UA2) − 0,168 (PD3) − 0,050 (AD2) = **0,416** (confere com `eq5dsuite`: 0,416).

Implementação de referência (lida nesta sessão): `R/eq5d3l.R` do pacote `eq5d` — soma `FullHealth` + `AtLeastOne2Or3` (se soma dos níveis > 5) + `AtLeastOne3` (se houver; NA no Brasil) + termos de dimensão.

### 1.6 Valores pedidos

| Estado | Cálculo | Índice (coef. 3 casas; `eq5d` = `eq5dsuite`) |
|---|---|---|
| 11111 | saúde plena | 1,000 |
| 21111 | 1 − 0,149 − 0,120 | 0,731 |
| 11211 | 1 − 0,149 − 0,097 | 0,754 |
| 11121 | 1 − 0,149 − 0,064 | 0,787 |
| 11112 | 1 − 0,149 − 0,050 | 0,801 (maior valor depois de 11111) |
| 11113 | 1 − 0,149 − 0,095 | 0,756 |
| 12111 | 1 − 0,149 − 0,112 | 0,739 |
| 22222 | 1 − 0,149 − 0,120 − 0,112 − 0,097 − 0,064 − 0,050 | 0,408 |
| 33333 | 1 − 0,149 − 0,363 − 0,218 − 0,184 − 0,168 − 0,095 | −0,177 (literatura cita −0,176; ver 1.4-b) |

- **Menor valor da tarifa:** 33333 = −0,177 (−0,176 na tabela citada na literatura).
- **Estados com valor negativo:** **10 de 243** (4,1%): 32332, 32333, 33232, 33233, 33313, 33322, 33323, 33331, 33332, 33333. Nenhum estado vale exatamente 0. Contagem feita por mim sobre a tabela do `eq5dsuite` e, de forma independente, sobre os coeficientes do `eq5d` (mesmo resultado). Os estados mais próximos de zero são 33313 (−0,009) e 33231 (+0,005); logo, diferenças de arredondamento de ±0,001 em relação à tabela original não alteram a contagem de 10.
- **"Degrau" entre saúde plena e o segundo melhor estado:** 1,000 → 0,801 (efeito da constante 0,149).
- **Status:** parcialmente verificada (mesma ressalva de 1.3).

### 1.7 Tarifa de Minas Gerais (Andrade et al., 2013) — não confundir

- **Citação:** Viegas Andrade M, Noronha K, Kind P, Maia AC, Miranda de Menezes R, De Barros Reis C, Nepomuceno Souza M, Martins D, Gomes L, Nichele D, Calazans J, Mascarenhas T, Carvalho L, Lins C. Societal Preferences for EQ-5D Health States from a Brazilian Population Survey. *Value Health Reg Issues*. 2013;2(3):405-412.
- **DOI:** [10.1016/j.vhri.2013.01.009](https://doi.org/10.1016/j.vhri.2013.01.009) — **PMID:** 29702778 — sem PMCID.
- **Diferenças em relação a Santos 2016 (do resumo PubMed, aberto via MCP):** só Minas Gerais; 3.362 indivíduos alfabetizados, 18-64 anos, áreas urbanas; amostragem por cotas de idade e sexo; **99 estados** valorados diretamente (26 blocos de 6 estados), restante interpolado por regressão (MQO e efeitos aleatórios); "The values of mean observed transformed TTO values range from 0.869 to-0.235"; mobilidade com o maior decremento. Os autores a descrevem como "an important first step in establishing national Brazilian social preference weights".
- **Coeficientes de MG:** não verificados (texto integral bloqueado).
- **Status:** verificada (metadados e desenho); coeficientes não verificados.
- Artigos correlatos do mesmo grupo confirmados no PubMed: Andrade MV et al. *Cad Saude Publica* 2013;29 Suppl 1:S59-72, DOI [10.1590/0102-311x00021113](https://doi.org/10.1590/0102-311x00021113), PMID 25402251; Andrade MV et al. *Med Decis Making* 2016;36(2):242-52, DOI [10.1177/0272989X15601047](https://doi.org/10.1177/0272989X15601047), PMID 26289747.

### 1.8 Tabela completa dos 243 estados (coluna `BR` do `eq5dsuite` 2.1.0 = coeficientes do `eq5d`)

```json
{"11111": 1.000, "11112": 0.801, "11113": 0.756, "11121": 0.787, "11122": 0.737, "11123": 0.692, "11131": 0.683, "11132": 0.633, "11133": 0.588,
 "11211": 0.754, "11212": 0.704, "11213": 0.659, "11221": 0.690, "11222": 0.640, "11223": 0.595, "11231": 0.586, "11232": 0.536, "11233": 0.491,
 "11311": 0.667, "11312": 0.617, "11313": 0.572, "11321": 0.603, "11322": 0.553, "11323": 0.508, "11331": 0.499, "11332": 0.449, "11333": 0.404,
 "12111": 0.739, "12112": 0.689, "12113": 0.644, "12121": 0.675, "12122": 0.625, "12123": 0.580, "12131": 0.571, "12132": 0.521, "12133": 0.476,
 "12211": 0.642, "12212": 0.592, "12213": 0.547, "12221": 0.578, "12222": 0.528, "12223": 0.483, "12231": 0.474, "12232": 0.424, "12233": 0.379,
 "12311": 0.555, "12312": 0.505, "12313": 0.460, "12321": 0.491, "12322": 0.441, "12323": 0.396, "12331": 0.387, "12332": 0.337, "12333": 0.292,
 "13111": 0.633, "13112": 0.583, "13113": 0.538, "13121": 0.569, "13122": 0.519, "13123": 0.474, "13131": 0.465, "13132": 0.415, "13133": 0.370,
 "13211": 0.536, "13212": 0.486, "13213": 0.441, "13221": 0.472, "13222": 0.422, "13223": 0.377, "13231": 0.368, "13232": 0.318, "13233": 0.273,
 "13311": 0.449, "13312": 0.399, "13313": 0.354, "13321": 0.385, "13322": 0.335, "13323": 0.290, "13331": 0.281, "13332": 0.231, "13333": 0.186,
 "21111": 0.731, "21112": 0.681, "21113": 0.636, "21121": 0.667, "21122": 0.617, "21123": 0.572, "21131": 0.563, "21132": 0.513, "21133": 0.468,
 "21211": 0.634, "21212": 0.584, "21213": 0.539, "21221": 0.570, "21222": 0.520, "21223": 0.475, "21231": 0.466, "21232": 0.416, "21233": 0.371,
 "21311": 0.547, "21312": 0.497, "21313": 0.452, "21321": 0.483, "21322": 0.433, "21323": 0.388, "21331": 0.379, "21332": 0.329, "21333": 0.284,
 "22111": 0.619, "22112": 0.569, "22113": 0.524, "22121": 0.555, "22122": 0.505, "22123": 0.460, "22131": 0.451, "22132": 0.401, "22133": 0.356,
 "22211": 0.522, "22212": 0.472, "22213": 0.427, "22221": 0.458, "22222": 0.408, "22223": 0.363, "22231": 0.354, "22232": 0.304, "22233": 0.259,
 "22311": 0.435, "22312": 0.385, "22313": 0.340, "22321": 0.371, "22322": 0.321, "22323": 0.276, "22331": 0.267, "22332": 0.217, "22333": 0.172,
 "23111": 0.513, "23112": 0.463, "23113": 0.418, "23121": 0.449, "23122": 0.399, "23123": 0.354, "23131": 0.345, "23132": 0.295, "23133": 0.250,
 "23211": 0.416, "23212": 0.366, "23213": 0.321, "23221": 0.352, "23222": 0.302, "23223": 0.257, "23231": 0.248, "23232": 0.198, "23233": 0.153,
 "23311": 0.329, "23312": 0.279, "23313": 0.234, "23321": 0.265, "23322": 0.215, "23323": 0.170, "23331": 0.161, "23332": 0.111, "23333": 0.066,
 "31111": 0.488, "31112": 0.438, "31113": 0.393, "31121": 0.424, "31122": 0.374, "31123": 0.329, "31131": 0.320, "31132": 0.270, "31133": 0.225,
 "31211": 0.391, "31212": 0.341, "31213": 0.296, "31221": 0.327, "31222": 0.277, "31223": 0.232, "31231": 0.223, "31232": 0.173, "31233": 0.128,
 "31311": 0.304, "31312": 0.254, "31313": 0.209, "31321": 0.240, "31322": 0.190, "31323": 0.145, "31331": 0.136, "31332": 0.086, "31333": 0.041,
 "32111": 0.376, "32112": 0.326, "32113": 0.281, "32121": 0.312, "32122": 0.262, "32123": 0.217, "32131": 0.208, "32132": 0.158, "32133": 0.113,
 "32211": 0.279, "32212": 0.229, "32213": 0.184, "32221": 0.215, "32222": 0.165, "32223": 0.120, "32231": 0.111, "32232": 0.061, "32233": 0.016,
 "32311": 0.192, "32312": 0.142, "32313": 0.097, "32321": 0.128, "32322": 0.078, "32323": 0.033, "32331": 0.024, "32332": -0.026, "32333": -0.071,
 "33111": 0.270, "33112": 0.220, "33113": 0.175, "33121": 0.206, "33122": 0.156, "33123": 0.111, "33131": 0.102, "33132": 0.052, "33133": 0.007,
 "33211": 0.173, "33212": 0.123, "33213": 0.078, "33221": 0.109, "33222": 0.059, "33223": 0.014, "33231": 0.005, "33232": -0.045, "33233": -0.090,
 "33311": 0.086, "33312": 0.036, "33313": -0.009, "33321": 0.022, "33322": -0.028, "33323": -0.073, "33331": -0.082, "33332": -0.132, "33333": -0.177}
```

---

## 2. Existe tarifa brasileira do EQ-5D-5L? (até 13/11/2026)

- **Afirmação:** não foi localizado nenhum value set brasileiro do EQ-5D-5L publicado. O que se usa é o **crosswalk** (mapeamento 5L→3L) aplicado à tarifa brasileira do 3L.
- **Como foi conferida:**
  1. PubMed (MCP), 13/11/2026: `EQ-5D-5L[Title] AND (Brazil[Title] OR Brazilian[Title]) AND (value set OR valuation)` → 0 resultados; `(EQ-5D-5L) AND (Brazil OR Brazilian) AND (value set OR valuation OR EQ-VT OR "composite time trade-off" OR crosswalk OR mapping)` → 5 resultados, nenhum é estudo de valoração brasileiro do 5L; `"EQ-5D-5L"[tiab] AND (Brazil[tiab] OR Brazilian[tiab]) AND ("value set"[tiab] OR tariff[tiab] OR "valuation study"[tiab] OR protocol[ti])` → 2 resultados, nenhum é value set nem protocolo.
  2. Pacote `eq5d` (commit de 26/10/2026), `data-raw/VT.csv` (value sets 5L pelo EQ-VT): 50 colunas de países, de Australia a WePP; da América Latina há Mexico, Peru, Uruguay e Trinidad_and_Tobago; **não há Brazil**. `data-raw/CW.csv` (crosswalks prontos) também não tem Brazil.
  3. Pacote `eq5dsuite` 2.1.0 (commit de 21/10/2026), objeto `.vsets5L`: 44 value sets; **não há BR**. Em `.vsets3L` e `.vsetsY3L` há BR.
  4. Santos M, Correia MG, von Doellinger VR, Lordello S, Monteiro AL. Assessing the Impact of a Social Program Using EQ-HWB-9 and EQ-5D-5L: The Dara Project. *Value Health Reg Issues*. 2025;53:101524. DOI [10.1016/j.vhri.2025.101524](https://doi.org/10.1016/j.vhri.2025.101524), PMID 41205347 (publicado em 07/11/2025; primeira autora é a mesma da tarifa 3L). Resumo: "Health index values were derived using validated scoring algorithms, including the UK value set for EQ-HWB-9 and the **Brazilian EQ-5D-3L crosswalk for EQ-5D-5L**."
  5. Santos M et al. EQ-5D Brazilian population norms. *Health Qual Life Outcomes* 2021. DOI [10.1186/s12955-021-01671-6](https://doi.org/10.1186/s12955-021-01671-6), PMID 34112207, PMC8190837 (texto integral aberto): "There is no value set for EQ-5D-5L in Brazil." e "EQ-5D -3L was selected because it is the only Euroqol instrument with Brazilian Valuation data."
  6. Snippet de busca (não aberto): a diretriz do Ministério da Saúde "Diretrizes Metodológicas: Qualidade de Vida em Análises Econômicas" (PDF de 2024 em rebrats.saude.gov.br) diria que a versão 5L estava "em fase de valoração" no Brasil. **Não verificada** (domínio bloqueado).
- **Não consegui:** abrir a lista de value sets em euroqol.org (bloqueado). Ausência em PubMed e em dois pacotes atualizados em outubro de 2026 é evidência forte, mas não prova de inexistência (pode haver preprint, resumo de congresso ou artigo ainda não indexado).
- **Status:** parcialmente verificada (ausência confirmada em PubMed e em dois repositórios de value sets; site da EuroQol não consultado).

---

## 3. Tarifa brasileira do EQ-5D-Y-3L

- **Citação:** Espirito Santo CM, Miyamoto GC, Santos VS, Ben ÂJ, Finch AP, Roudijk B, de Jesus-Moraleida FR, Stein AT, Santos M, Yamato TP. Estimating an EQ-5D-Y-3L Value Set for Brazil. *Pharmacoeconomics*. 2024;42(9):1047-1063.
- **DOI:** [10.1007/s40273-024-01404-9](https://doi.org/10.1007/s40273-024-01404-9) — **PMID:** 38954389 — **PMCID:** PMC11343814 — URL aberta: https://pmc.ncbi.nlm.nih.gov/articles/PMC11343814/
- **Como foi conferida:** metadados PubMed e texto integral do PMC abertos via MCP.
- **Método (trechos literais):** protocolo internacional de valoração do EQ-5D-Y-3L, software EQ-VT v2.1; duas amostras independentes de adultos: DCE online e cTTO presencial; enquadramento "considering your views for a 10-year-old child". "A representative sample of 1376 Brazilian adults participated (DCE, 1152; cTTO, 211)". DCE: 150 pares em 10 blocos de 15; cTTO: 28 estados em 3 blocos de 10; cTTO feito em São Paulo, Rio Grande do Sul e Ceará; coleta de outubro a dezembro de 2022. Modelo: mixed logit no DCE, reescalonado por mapeamento linear sem intercepto sobre as médias de cTTO ("All mixed-logit coefficients were multiplied by the rescaling parameter ... namely 0.125148").
  - Observação: 1152 + 211 = 1363, não 1376; a discrepância está no próprio resumo do artigo.
- **Faixa de valores:** "Utilities ranged from 1 (full health) to − 0.0059 (the worst health state)"; 33333 é o único estado negativo ("the only negative utilities of the whole elicited value set"). Média observada de cTTO para 33333: −0,280 (os autores discutem essa discrepância entre previsto e observado).
- **Ordem de peso das dimensões:** dor/mal-estar > mobilidade > cuidados pessoais > atividades habituais > preocupação/tristeza.
- **Exemplo do artigo:** "the health state 13231 would be assigned the value = 1 – (0.1908 + 0.1033 + 0.237), which equals 0.4692".
- **Coeficientes (pacote `eq5d`, `data-raw/Y.csv`, coluna Brazil; sem intercepto):** MO2 0,124924673; MO3 0,228665295; SC2 0,102653598; SC3 0,190900384; UA2 0,103339847; UA3 0,185773946; PD2 0,109558484; PD3 0,236729081; AD2 0,060601154; AD3 0,163819483. Conferência cruzada: batem com o exemplo do artigo (SC3 0,1909; UA2 0,1033; PD3 0,2367) e dão 33333 = −0,0059, igual ao artigo; a coluna `BR` de `.vsetsY3L` do `eq5dsuite` (3 casas) difere no máximo 0,0005 (arredondamento). Exemplos: 21111 = 0,875; 11121 = 0,890; 22222 = 0,499; 33333 = −0,006.
- **Status:** verificada.
- Contexto adicional: Roudijk B, Pan T, Olsen JA, Devlin N. Do EQ-5D-Y-3L value sets have common properties, and how do they compare to EQ-5D-5L value sets? *Eur J Health Econ*. 2026;27(3):715-729 (online 29/10/2025). DOI [10.1007/s10198-025-01852-w](https://doi.org/10.1007/s10198-025-01852-w), PMID 41160306, PMC13190540. Resumo: valores de 33333 entre −0,691 (Eslovênia) e 0,289 (Japão) em 11 países; dor/mal-estar nível 3 com o maior peso em todos. (Ano do volume inferido do registro PubMed: volume 27; conferir o ano de capa antes de citar.)

---

## 4. Nomes das dimensões e redação dos níveis (PT-BR) e direitos de uso

### 4.1 Dimensões e níveis

- **Em inglês (verificado em textos abertos):** mobility, self-care, usual activities, pain/discomfort, anxiety/depression; três níveis: "no problems, some/moderate problems, and extreme problems" (PMC8190837); 3^5 = 243 estados, de 11111 a 33333. Fonte adicional: Oppe 2016 (PMC5023738).
- **Em português do Brasil — redação oficial: NÃO VERIFICADA.** O questionário oficial fica em euroqol.org (bloqueado nesta sessão) e nenhum artigo em acesso aberto que consegui abrir reproduz a versão brasileira. O que apareceu:
  - Snippet de busca atribuído à diretriz do Ministério da Saúde (PDF não aberto): "cinco domínios de saúde (mobilidade, autocuidado, atividades usuais, dor/desconforto, ansiedade/depressão) com três níveis cada um". Isso é a terminologia descritiva usada pela diretriz, não necessariamente os rótulos do questionário oficial.
  - Os rótulos "cuidados pessoais", "atividades habituais" e "dor/mal-estar" usados nas tabelas deste arquivo são **rótulos de trabalho meus, sem fonte aberta nesta sessão**; não são citação da versão oficial brasileira. Conferir no questionário oficial (registro gratuito em euroqol.org) antes de publicar.
  - Redação dos 3 níveis por dimensão em PT-BR: não verificada; não reproduzo texto de memória.
- **EQ-5D-Y-3L (inglês, do artigo brasileiro, PMC11343814):** "walking about (mobility), looking after myself (self-care), doing usual activities (usual activities), having pain or discomfort (pain/discomfort), and feeling worried, sad, or unhappy (anxiety/depression)"; níveis "no problems / some problems / a lot of problems".
- **Status:** parcialmente verificada (estrutura e termos em inglês); redação oficial em PT-BR não verificada.

### 4.2 Direitos de uso (EuroQol)

- **O que foi encontrado (apenas snippets de cópias secundárias dos termos; página oficial não aberta):** "Without the prior written consent of the EuroQol Executive Office, [you] are not permitted to use, reproduce, alter, amend, convert, translate, publish or make available in any way..." (cópia de 2018 citada na documentação do CamCOPS; redação equivalente no guia do EQ-5D-Y, inclusive para as "sample versions"); o uso exige registro do estudo em euroqol.org; segundo um desses snippets, o uso não comercial é gratuito após registro.
- **Leitura prática para um site educativo (inferência minha, a confirmar com a EuroQol):**
  - Não reproduzir o questionário (itens, opções de resposta, EQ-VAS, layout) sem autorização por escrito; pedir permissão via registro em euroqol.org.
  - Pode-se descrever o instrumento com palavras próprias (cinco dimensões, três níveis, 243 estados, código de 5 dígitos) e citar as fontes; isso é o que os artigos científicos fazem.
  - Os **coeficientes da tarifa** são resultados publicados em artigo científico e redistribuídos em pacotes de código aberto (`eq5d`, `eq5dsuite`); citá-los com a referência é prática corrente. Ainda assim, vale mencionar "EQ-5D™ é marca da EuroQol Research Foundation" e consultar a EuroQol se o site oferecer uma calculadora interativa com o texto dos itens.
- **Status:** parcialmente verificada (fontes secundárias, possivelmente desatualizadas).

---

## 5. Definições dos métodos de valoração e referências

### 5.1 Referências confirmadas

| Referência | DOI | PMID | Como foi conferida | Status |
|---|---|---|---|---|
| Torrance GW. Measurement of health state utilities for economic appraisal. *J Health Econ*. 1986;5(1):1-30. | [10.1016/0167-6296(86)90020-2](https://doi.org/10.1016/0167-6296(86)90020-2) | 10311607 | PubMed MCP (metadados e resumo) | verificada |
| Whitehead SJ, Ali S. Health outcomes in economic evaluation: the QALY and utilities. *Br Med Bull*. 2010;96:5-21. | [10.1093/bmb/ldq033](https://doi.org/10.1093/bmb/ldq033) | 21037243 | PubMed MCP | verificada |
| Weinstein MC, Torrance G, McGuire A. QALYs: the basics. *Value Health*. 2009;12 Suppl 1:S5-9. | [10.1111/j.1524-4733.2009.00515.x](https://doi.org/10.1111/j.1524-4733.2009.00515.x) | 19250132 | PubMed MCP (sem resumo no PubMed) | verificada (metadados) |
| Oppe M, Rand-Hendriksen K, Shah K, Ramos-Goñi JM, Luo N. EuroQol Protocols for Time Trade-Off Valuation of Health Outcomes. *Pharmacoeconomics*. 2016;34(10):993-1004. | [10.1007/s40273-016-0404-1](https://doi.org/10.1007/s40273-016-0404-1) | 27084198 (PMC5023738) | PubMed MCP + texto integral PMC | verificada |
| Dolan P. Modeling valuations for EuroQol health states. *Med Care*. 1997;35(11):1095-108. (tarifa MVH do Reino Unido; origem do modelo com constante e N3) | [10.1097/00005650-199711000-00002](https://doi.org/10.1097/00005650-199711000-00002) | 9366889 | PubMed MCP | verificada |
| Drummond MF, Sculpher MJ, Claxton K, Stoddart GL, Torrance GW. *Methods for the Economic Evaluation of Health Care Programmes*. 4th ed. Oxford: Oxford University Press; 2015. ISBN 9780199665877 (capa dura), 9780199665884 (brochura). | — | — (livro) | Só snippets de catálogos de biblioteca (busca web); nenhuma página aberta | parcialmente verificada |
| Brazier J et al. (livro *Measuring and Valuing Health Benefits for Economic Evaluation*) | — | — | Não pesquisado/aberto nesta sessão | não verificada |

### 5.2 Definições com trecho literal

- **Três técnicas clássicas e estados piores que a morte (Torrance 1986, resumo):** "Three measurement techniques for health state utilities are described in detail: rating scale, standard gamble, and time trade-off. The use of these methods is described for both chronic and temporary health states and for both health states considered better than death and those considered worse than death." — O texto integral (com as fórmulas de Torrance) não foi aberto.
- **Escala do QALY (Oppe 2016, PMC5023738):** "the quality-of-life (QOL) weights, also described as health state utility values, must lie on an interval scale anchored at 0 (death) and 1 (full health)".
- **Time trade-off (TTO) (Oppe 2016):** "The objective of the TTO is to determine the length of life-time the respondent would be willing to forego to live in a better health state (typically 'full health') and avoid living in a bad health state." No TTO convencional do protocolo MVH (horizonte fixo de 10 anos), para estado melhor que a morte, se x é o tempo em saúde plena no ponto de indiferença, o valor é x/10 (o texto traz "the value of the target state is calculated as U() = /10"; os símbolos das variáveis foram suprimidos na extração do PMC).
- **Estados piores que a morte no TTO convencional (Oppe 2016):** o respondente escolhe entre morte imediata e uma vida com (10 − x) anos no estado seguida de x anos em saúde plena; "the value of the target state is U() = –/(10 −) when indifference is achieved" (isto é, −x/(10 − x)). Problema apontado: "the scale has an upper bound of 1 but a lower bound of negative infinity"; soluções: "rescaling the WTD values to a scale ranging from 0 to −1; changing the measure of central tendency from the mean to the median; and using geometry-based (angular) methods". "The choice of method for handling WTD values has been shown to have a substantial impact on the resulting values".
- **Lead-time TTO e TTO composto (cTTO) (Oppe 2016):** "For health states BTD, the BTD task of the conventional TTO is used, while for health states WTD, lead-time TTO is used." No EQ-VT: "The possible utility value ranges from −1 to 1, with the smallest difference between values being 0.05". Descrição operacional em Espirito Santo 2024 (PMC11343814): "10-year time trade-off" para melhor que a morte e "20-year time trade-off, 10 years in full health followed by 10 years in the health state" para pior que a morte.
- **Standard gamble (SG) (Oppe 2016):** "The SG technique, which is grounded in expected utility theory, has traditionally been considered the gold standard valuation method. However, in general, people have difficulties assessing probabilities, but can relate more easily to time". Brazier 2018 (PMC6008352): no SG as respostas "would also be impacted by respondents' attitude to and perception of risk". A formulação operacional clássica (probabilidade de indiferença entre a certeza do estado e uma aposta entre saúde plena e morte) está em Torrance 1986 e Drummond 2015, **cujos textos não abri**: citar essas obras, mas a descrição operacional fica como não verificada nesta checagem.
- **Discrete choice experiment (DCE) (Oppe 2016):** "In a DCE, respondents are shown multiple (usually two) EQ-5D health states and asked to indicate which one they prefer ... health state values based on DCEs are on an arbitrary scale based on the relative distances between health states and not on a scale anchored at 0 (death) and 1 (full health) as is required by the QALY model. Until this anchoring problem is properly resolved, DCE as a standalone technique is not viable for generating utilities for use in QALY calculations". Modelo híbrido: combina as verossimilhanças de TTO e DCE.
- **Escala visual analógica (VAS) (Brazier 2018, PMC6008352):** "there are well-documented problems with VAS, including the use of rounded numbers (such as 80, 85, 90) ... and that the value may not represent utility, as it involves no sacrifice or tradeoff. An additional complication is that the value is not anchored on the 1–0 full health–dead scale unless there is some consideration of value of the own health state relative to the value for dead." EQ-VAS (PMC11343814): "ranges from 0 to 100, where 0 represents 'the worst health state you can imagine' and 100 represents 'the best health state you can imagine'".
- **Protocolos EuroQol (Oppe 2016):** MVH (1993) e Paris (2009) para o 3L, TTO convencional, horizonte de 10 anos; EQ-VT (2012) para o 5L, cTTO + DCE. "For the valuation of the 3-level version of the EQ-5D (EQ-5D-3L), the Paris protocol is recommended. For the valuation of the 5-level version of EQ-5D (EQ-5D-5L), the EQ-VT protocol is recommended."
- **Status do bloco:** verificada para TTO, cTTO, DCE, VAS e estados piores que a morte (via Oppe 2016 e Brazier 2018, textos abertos); SG verificada apenas conceitualmente.

---

## 6. Quem deve valorar (população geral ou pacientes) e adaptação

| Referência | DOI | PMID | Achado central (trecho literal) | Status |
|---|---|---|---|---|
| Brazier J, Rowen D, Karimi M, Peasgood T, Tsuchiya A, Ratcliffe J. Experience-based utility and own health state valuation for a health state classification system: why and how to do it. *Eur J Health Econ*. 2018;19(6):881-891. | [10.1007/s10198-017-0931-5](https://doi.org/10.1007/s10198-017-0931-5) | 29022120 (PMC6008352) | "people with first-hand experience tend to (although not always) place higher values on dysfunctional health states than members of the general population"; "It is well established in the literature that people tend to underpredict their ability to adapt"; conclusão: "it may be difficult to justify the exclusive use of own health state values or the currently widely adopted practice of using values from relatively uninformed members of the general population"; propõe preferências da população geral mais informadas. Lembra que o Painel de Washington (1996) defendeu valores da comunidade e que a Suécia prefere valores de pacientes. | verificada (texto integral PMC) |
| Ubel PA, Loewenstein G, Jepson C. Whose quality of life? A commentary exploring discrepancies between health state evaluations of patients and the general public. *Qual Life Res*. 2003;12(6):599-607. | [10.1023/a:1025119931010](https://doi.org/10.1023/a:1025119931010) | 14516169 | "There is often a discrepancy between quality of life estimates from patients and the general public." Causas listadas: interpretações diferentes da descrição do estado, adaptação que o público não prevê, response shift, "focusing illusion", efeitos de contraste e pontos de vista diferentes (ganhar saúde ou perder saúde). | verificada (resumo PubMed) |
| Peeters Y, Stiggelbout AM. Health state valuations of patients and the general public analytically compared: a meta-analytical comparison of patient and population health state utilities. *Value Health*. 2010;13(2):306-9. | [10.1111/j.1524-4733.2009.00610.x](https://doi.org/10.1111/j.1524-4733.2009.00610.x) | 19744288 | "From 30 eligible studies, 40 estimators were retrieved revealing a difference between respondent group (Cohen's d=0.20, P<0.01) ... patients gave higher valuations than nonpatients using the time trade-off (TTO) (N=25, unstandardized d=0.05, P<0.05) and the visual analog scale (VAS) (N=22, unstandardized d=0.04, P<0.05). When the standard gamble was used, no difference was seen (N=24, unstandardized d=0.01, P=0.70)." | verificada (resumo PubMed) |
| Menzel P, Dolan P, Richardson J, Olsen JA. The role of adaptation to disability and disease in health state valuation: a preliminary normative analysis. *Soc Sci Med*. 2002;55(12):2149-58. | [10.1016/s0277-9536(01)00358-6](https://doi.org/10.1016/s0277-9536(01)00358-6) | 12409128 | "(1) Neither solely actual nor solely hypothetical patient perspectives should be used for rating quality of life. (2) Even if representatives of the general public acting as hypothetical patients provide ultimately the best perspective ... patients' values that are often influenced by adaptation must still be conveyed to and clearly understood by public representatives" | verificada (resumo PubMed) |
| Dolan P, Kahneman D. Interpretations of utility and their implications for the valuation of health. *Econ J*. 2008;118(525):215-234. | 10.1111/j.1468-0297.2007.02110.x (DOI vindo de snippet de busca; não resolvido) | não indexado no PubMed (busca sem resultado) | Segundo snippets (LSE Research Online, RePEc): distinguem utilidade como experiência hedônica e utilidade como preferência; argumentam que os métodos baseados em preferência dificilmente geram dados significativos sobre a experiência e recomendam medidas de utilidade experienciada. | parcialmente verificada (só snippets; conferir o DOI antes de publicar) |

---

## Pendências

1. Abrir o texto integral de Santos 2016 (Med Decis Making; paywall) para: conferir a Tabela de coeficientes no original (casas decimais; por que 33333 = −0,176 na literatura e −0,177 pela soma), a transformação aplicada aos estados piores que a morte e a frase sobre "Usual Activities".
2. Abrir Andrade 2013 (VHRI) para registrar os coeficientes de Minas Gerais e confirmar que são diferentes dos de Santos 2016 (o pacote `eq5d` cita Andrade 2013 para o value set "Brazil"; provável erro de citação).
3. Consultar euroqol.org: lista oficial de value sets (confirmar que não há 5L brasileiro), versão oficial em PT-BR do EQ-5D-3L (nomes das dimensões e redação dos níveis) e termos de uso vigentes.
4. Abrir a diretriz do Ministério da Saúde (REBRATS, 2024) para citar a recomendação brasileira sobre EQ-5D-3L, 5L e crosswalk.
5. Confirmar DOI de Dolan & Kahneman 2008 e ISBN de Drummond 2015 na página do editor.
6. Para acesso: liberar na rede da sessão journals.sagepub.com, www.sciencedirect.com, euroqol.org, rebrats.saude.gov.br e doi.org.
