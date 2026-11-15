# Fontes primárias — segunda passada de checagem (QALY)

**Data de acesso de tudo abaixo:** 13 nov. 2026.
**Método:** `curl` direto nos hosts liberados; PDFs convertidos com `pdftotext`. Todo trecho entre aspas foi copiado do arquivo baixado. "p. PDF" é a página do arquivo; "p. impressa" é o número no rodapé.
**Legenda de status:** **verificada na fonte primária** | **não foi possível abrir**.

Observação técnica sobre o gov.br: a URL terminada em `.pdf` devolve uma página HTML; o arquivo real sai acrescentando `/@@download/file` ao final. É assim que as URLs abaixo devem ser abertas por script (no navegador, a URL simples funciona).

---

## 0. O que CONTRADIZ ou corrige as notas anteriores

| # | Nota anterior | O que a fonte primária diz | Onde |
|---|---|---|---|
| C1 | `brasil-decisao.md`: "Não usar no site a lista com 'doença endêmica em populações de baixa renda' sem abrir o PDF: ela está confirmada apenas para a versão da consulta pública"; resumos da versão final falavam em "atenção a pessoas em vulnerabilidade social" | A **versão final** traz quatro situações, e a quarta é exatamente "Doença endêmica em populações de baixa renda com poucas alternativas terapêuticas disponíveis". A expressão "vulnerabilidade social" não está na recomendação. A lista pode ser usada | Item 1.4 |
| C2 | Lista resumida como "doenças graves com essa mesma redução" | Na versão final, "c) Doença grave;" aparece **sem** o qualificador de redução de sobrevida. O qualificador só está nos itens a) raras e b) crianças | Item 1.4 |
| C3 | "Fontes secundárias dizem que o valor seria atualizado conforme o PIB per capita" (parcial) | Confirmado em 2022: "atualizados anualmente conforme variação do PIB per capita brasileiro". **Mas a Diretriz de Avaliação Econômica, 3ª ed. (2026), trocou a regra**: as atualizações "serão publicadas pela própria Comissão, permanecendo vigentes até que uma nova versão seja oficialmente divulgada pela Conitec". A 3ª edição repete R$ 40.000 e R$ 35.000, sem valor novo | Itens 1.6 e 2.7 |
| C4 | Ano-base do PIB per capita "não confirmado"; cruzamento com R$ 40.688 (IBGE 2021) era inferência | O relatório **não cita ano-base nem valor do PIB per capita em reais**. Diz que os valores são "para o ano de 2022", que o limiar por QALY "ficaria perto de 1 PIB per capita" e que 0,87 PIB per capita "corresponderia a R$ 34.800,00" (o que implica PIB per capita ≈ R$ 40.000, conta minha). Diz também que o valor "foi calculado com base do documento do Banco Interamericano de Desenvolvimento (BID) elaborado por Pichon-Riviere" e que a conversão em PIB per capita "teve o único objetivo de promover a comparação internacional". Não escrever "1 PIB per capita de 2021" como se fosse texto da Conitec | Item 1.2 |
| C5 | Taxa de desconto da 3ª edição: "NÃO VERIFICADA" | **5% ao ano para custos e efetividade** (Recomendação LV). Novidade: a 3ª edição recomenda **não** variar a taxa na análise de sensibilidade paramétrica de rotina e sugere cenário **sem** desconto. A faixa "0% a 10%" só aparece no capítulo de vacinas (inconsistência interna do documento) | Item 2.2 |
| C6 | Exclusão: "tecnologias gênicas/curativas e doenças ultrarraras" | Correto para o relatório de 2022. No Quadro 6 da Diretriz 3ª ed. a frase ficou só "tecnologias para doenças ultrarraras" (o texto corrido ainda diz que terapias gênicas e curativas "serão discutidos posteriormente") | Itens 1.5 e 2.7 |
| C7 | `eq5d-tarifas.md`: tarifa de Andrade 2013 tratada como "de Minas Gerais — não confundir"; coeficientes "não verificados" | O site da EuroQol lista **dois** value sets 3L sob "Brazil": "Brazil 3L (Andrade TTO 2013)" e "Brazil 3L (Santos TTO 2016)", além do Y-3L. Os coeficientes de Andrade agora estão verificados (constante 0,054; ver 5.3). O aviso de não confundir continua válido, mas a EuroQol rotula os dois como "Brazil" | Item 5 |
| C8 | 33333 = −0,177 ou −0,176? | O código oficial da EuroQol para Santos 2016 dá **−0,177** (1 − 0,149 − 1,028, com arredondamento a 0,001). O −0,176 não foi reproduzido em nenhuma fonte primária aberta; o artigo original continua fechado | Itens 5.2 e 6 |
| C9 | (novo) | A diretriz do Ministério "Qualidade de Vida em Análises Econômicas" (1ª ed. revisada, 2026), Figura 1, mostra valores "de acordo com a tabela de valores brasileira" que **não batem** com Santos 2016 nem com Andrade 2013: 11112 = 0,8329 e 11121 = 0,8214 (Santos/EuroQol: 0,801 e 0,787). A fonte da figura é "elaboração própria" e o link aponta para `atsinc.com.br/.../2014/04/TabelaEQ5D.pdf` (host bloqueado). Não usar os números dessa figura; usar os da EuroQol | Item 2.6 |
| C10 | Zolgensma: "RCEI de R$ 883.587 por QALY", comparador não identificado | É a comparação **contra nusinersena** (Tabela 4). Contra risdiplam: R$ 766.549/QALY (Tabela 5). O relatório diz que não havia limiar para ultrarraras | Item 10.2 |
| C11 | NICE: data do anúncio e tabela do severity modifier "não confirmadas" | Anúncio em **1 December 2025**; mudança "from April 2026"; manual PMG36 atualizado em "March 2026" e já escrito com £25,000 e £35,000. Tabela 6.1 confirmada | Item 4 |

---

## 1. Conitec 2022 — limiares de custo-efetividade

**Documento:** Ministério da Saúde. *O uso de limiares de custo-efetividade nas decisões em saúde: recomendações da Comissão Nacional de Incorporação de Tecnologias no SUS*. Brasília – DF, 2022. 112 páginas no PDF.
**URL:** https://www.gov.br/conitec/pt-br/midias/pdf/2022/20221106_relatorio-uso-de-limiares-de-custo-efetividade-nas-decisoes-em-saude.pdf (arquivo `Relatorio_LCE_FINAL.pdf`; a página do portal informa "Criado em 06/11/2022 15:37 Modificado em 04/09/2023 14:33").
**Paginação:** p. PDF = p. impressa + 3. O "Quadro 1: Recomendações finais" está na p. PDF 52 (impressa 49).
**Status geral:** verificada na fonte primária.

### 1.1 R$ 40.000 por QALY e R$ 35.000 por ano de vida ganho
- **Valor exato:** R$ 40.000,00 por QALY; R$ 35.000,00 por ano de vida ganho; "para o ano de 2022".
- **Trecho literal (Quadro 1, p. PDF 52; repetido na p. PDF 49):** "Os valores calculados do limiar de custo-efetividade foram: R$ 40.000,00 por QALY e R$ 35.000,00 por “anos de vida ganhos” para o ano de 2022."
- **Status:** verificada na fonte primária.

### 1.2 Relação com o PIB per capita (sem ano-base no texto)
- **Trechos literais:**
  - p. PDF 45–46 (impressa 42–43): "O valor de R$ 40.000,00/QALY foi calculado com base do documento do Banco Interamericano de Desenvolvimento (BID) elaborado por Pichon-Riviere [47,48], igualmente consistente com os estudos de Claxton et al (2015) [39] na Universidade de York. A conversão dos valores monetários em termos de PIB per capita teve o único objetivo de promover a comparação internacional, sem qualquer relação com os valores de 1 a 3 vezes o PIB per capita comumente difundidos como “recomendação da OMS”".
  - p. PDF 45: a recomendação **preliminar** dizia "é aceitável um limiar de até 3 vezes o valor de referência de 1 PIB per capita."; a final retirou "de 1 PIB per capita".
  - p. PDF 48 (impressa 45): "enquanto o limiar por QALY ficaria perto de 1 PIB per capita, o limiar por ano de vida ganho ficaria no máximo 0,87 PIB per capita, o que corresponderia a R$ 34.800,00. Com base nisso, os membros da Conitec concordaram com a adoção do valor de referência por ano de vida ganho de R$ 35.000,00."
- **O que NÃO está no documento:** o valor do PIB per capita em reais usado na conta e o ano a que ele se refere. Busquei "40.688" e "PIB per capita" em todas as páginas.
- **Status:** verificada na fonte primária (inclusive a ausência do ano-base).

### 1.3 Ano de vida ganho: em que condição
- **Trecho literal (Quadro 1, p. PDF 52):** "Em situações excepcionais em que o QALY for considerado indisponível ou inadequado, o desfecho “Anos de Vida Ganhos” por ser utilizado em avaliações de custo-efetividade. Esta escolha deve ser devidamente justificada no parecer. Outros desfechos relevantes, preferencialmente desfechos relatados como importantes pelo paciente, devem ser descritos na análise das evidências" (o "por ser" está assim no original; leia-se "pode ser").
- **Status:** verificada na fonte primária.

### 1.4 Limiar alternativo: até 3 vezes e lista literal das situações
- **Trecho literal (Quadro 1, p. PDF 52; mesma redação nas p. PDF 44–45, onde se lê "a final segue reproduzida na íntegra"):**
  "A critério do julgamento da Conitec, nas seguintes situações (modificadores positivos) poderá se utilizar limiar alternativo:
  a) Doenças raras (afeta até 65 pessoas em cada 100.000 indivíduos) redução importante de sobrevida ajustada pela qualidade;
  b) Doença acometendo crianças (menores de 18 anos) e implicando redução importante de sobrevida ajustada pela qualidade;
  c) Doença grave;
  d) Doença endêmica em populações de baixa renda com poucas alternativas terapêuticas disponíveis.
  As definições de “redução importante de sobrevida ajustada pela qualidade” e de “doença grave” serão realizadas por avaliação qualitativa dos membros da Conitec."
- **Trecho literal do multiplicador (Quadro 1):** "Em situações coerentes com a hipótese de limiares alternativos, é aceitável um limiar de até 3 vezes o valor de referência."
- **"R$ 120.000" está escrito?** Sim, no corpo do relatório, não no Quadro 1: título de seção "Valores estimados de R$40.000/QALY e R$120.000,00/QALY" e "o valor do limiar alternativo R$ 120.000,00/QALY ... foi resultado da preferência dos decisores extraída por meio de um Painel Delphi, no qual 93,6% dos membros da Conitec consideraram que o limiar alternativo devia ser igual ou menor que 3 vezes o valor de referência" (p. PDF 46–47).
- **Status:** verificada na fonte primária. **Contradiz a cautela das notas (C1, C2).**

### 1.5 Doenças ultrarraras e terapias avançadas
- **Trecho literal (Quadro 1, p. PDF 52; também p. PDF 49):** "Não estão incluídas nesta regulamentação tecnologias gênicas, curativas e tecnologias para doenças ultrarraras (doença que afeta até 1 pessoa em cada 50.000 indivíduos)."
- **Recomendação preliminar (p. PDF 49):** "As discussões relacionadas a tecnologias avançadas (terapias gênicas ou curativas) ou indicadas em doenças ultrarraras (até 1 caso em cada 50.000 pessoas) serão pautadas em critérios específicos, a serem definidos posteriormente pela Conitec."
- **Definição citada (p. PDF 44):** "segundo a Resolução nº 563, de 10 de novembro de 2017 [73] do Conselho Nacional de Saúde, considera-se ultrarrara a doença crônica, debilitante ou que ameace a vida, com incidência menor ou igual a 1 (um) caso para cada 50.000 (cinquenta mil) habitantes."
- **Status:** verificada na fonte primária.

### 1.6 O limiar não é critério único; atualização
- **Trechos literais (Quadro 1, p. PDF 52):**
  - "É importante que as avaliações de tecnologias na Conitec adotem um parâmetro de referência de custo-efetividade em suas discussões. Todavia, a custo-efetividade não deve ser um parâmetro isolado dos demais fatores envolvidos na discussão."
  - "Tecnologias consideradas não custo-efetivas (valores de ICER* a cima do limiar) poderão receber recomendação favorável à incorporação com base em outros critérios. Estes critérios devem estar claramente assinalados no parecer."
  - "Tecnologias consideradas custo-efetivas (valores de ICER abaixo do limiar) podem receber recomendação contrária à incorporação com base em outros critérios (modificadores negativos**)."
  - "No cenário de avaliação da custo-efetividade de uma tecnologia pela Conitec, é importante considerar o QALY*** como principal desfecho. Apesar disso, os envolvidos na tomada de decisão não devem limitar suas discussões ao QALY."
  - "Os valores de limiar serão atualizados anualmente conforme variação do PIB per capita brasileiro."
- **Frase com "critério único" (p. PDF 34, impressa 31):** "A avaliação da eficiência por meio de um limiar de custo-efetividade não é critério único e é analisado em conjunto com todos os demais critérios pertinentes à tecnologia em discussão e norteadores das políticas do SUS."
- **Status:** verificada na fonte primária.

### 1.7 Datas e reunião
- **Trecho literal (p. PDF 8, impressa 5):** "disponibilizadas em Consulta Pública (CP), realizada entre os dias 21/06/2022 e 01/08/2022 (CP n° 41/2022) ... foi aberta uma audiência pública (n° 02/2022) ... As contribuições recebidas na CP e na audiência foram sistematizadas e discutidas na 112ª reunião da Conitec (em 31/08/2022), quando foram deliberadas as Recomendações Finais".
- **Trecho literal (p. PDF 29, impressa 26):** "apresentadas à Conitec em 31/08/2022 durante a 112ª reunião ordinária da Comissão"; "A audiência pública teve início às 14 horas do dia 22 de agosto de 2022".
- **Oficinas:** "duas oficinas, a primeira no ano de 2020 e a segunda em 2022, ambas em Brasília-DF" (p. PDF 8).
- **Status:** verificada na fonte primária.
- **Notícia de setembro de 2022** (https://www.gov.br/conitec/pt-br/assuntos/noticias/2022/setembro/conitec-aprova-proposta-de-uso-de-limiares-de-custo-efetividade-lce-nas-decisoes-em-saude): **não foi possível abrir** (HTTP 401, "Conteúdo Restrito").

### 1.8 Woods 2016 citado pela própria Conitec
- **Trecho literal (p. PDF 18):** "Com os dados disponíveis no ano de 2013, Woods et al. (2016) [38] estimaram um limiar de $ 3.210 a $ 10.122 por QALY, equivalente a 0,20 a 0,63 PIB per capita, para o Brasil [46]." Na atualização feita pelos autores do relatório (dados de 2018): "o custo de oportunidade por QALY para o Brasil seria estimado em $ 8.407,95 (R$ 17.059,72), variando de $ 2.943,81 (R$ 5.973,00) a $11.519,24 (R$ 23.372,54), ou seja, aproximadamente 0,18 a 0,71 PIB per capita".
- **Documento do BID/IECS citado (p. PDF 20–21):** "na faixa de US$ 8.758 (equivalente a 0,78 PIB per capita) a US$ 9,969 (0,89 PIB per capita) por cada ano de vida ou de US$ 9.890 (0,88 PIB per capita) a US$ 11.417 (1,02 PIB per capita) por cada ano de vida ajustado pela qualidade (QALY)"; "valores relatados estão expressos em dólares correntes de 2013".
- **Status:** verificada na fonte primária (como citação da Conitec; ver item 8 para os artigos originais).

---

## 2. Diretriz de Avaliação Econômica em Saúde — 3ª edição (2026)

**Edição vigente:** a página de Diretrizes Metodológicas da Conitec lista "Diretrizes Metodológicas: Diretriz de Avaliação Econômica - 3ª edição" e, abaixo, a "2ª edição". O PDF traz na capa "3ª edição / Brasília – DF / 2026" e, no verso, "3ª edição – 2026 – versão eletrônica". Metadado do PDF: criado em 23 jun. 2026. A Portaria GM/MS nº 8.817/2025 remete a "Diretrizes Metodológicas: Diretriz de Avaliação Econômica" (item 3).
**URL (final):** https://www.gov.br/conitec/pt-br/midias/artigos_publicacoes/diretrizes/diretrizes_metodologicas_diretriz_avaliacao_economica_3ed.pdf (167 páginas).
**Página-índice:** https://www.gov.br/conitec/pt-br/assuntos/avaliacao-de-tecnologias-em-saude/diretrizes-metodologicas
**Versão de consulta pública (2025), também baixada:** https://rebrats.saude.gov.br/images/Documentos/2025/Diretriz_de_Avaliacao_Economica_3a_ed_2025.pdf (153 páginas; não usada para as citações abaixo).
**Paginação:** p. PDF = p. impressa + 1.
**Status geral:** verificada na fonte primária.

### 2.1 Taxa de desconto
- **Valor exato:** 5% ao ano, igual para custos e efetividade, em modelos com horizonte acima de 12 meses.
- **Trechos literais (seção 5.1.7, p. PDF 101, impressa 100):**
  - "LIII. Deve-se aplicar taxa de desconto a todos os modelos de AES com um horizonte temporal que exceda 12 meses."
  - "LIV. Deve-se utilizar uma taxa de desconto uniforme para a avaliação da efetividade e dos custos em modelos de saúde."
  - "LV. Deve-se utilizar uma taxa de desconto de 5% ao ano para custos e efetividade."
- **Contexto (seção 2.8.13, p. PDF 65):** "é comum a adoção de uma taxa de desconto de aproximadamente 5% ao ano para custos e desfechos em saúde, com alguma variabilidade (65)."
- **Status:** verificada na fonte primária.

### 2.2 Análise de sensibilidade da taxa de desconto (mudou em relação à 2ª edição)
- **Trecho literal (p. PDF 101–102):** "LVI. Recomenda-se não incluir a variação da taxa de desconto na análise de sensibilidade paramétrica em AES de forma rotineira. Considerações: a) Sugere-se análise de cenário sem uso de taxa de desconto, de forma a apresentar desfechos de custo, efetividade e custo-efetividade em termos absolutos. b) A não inclusão da taxa de desconto na análise de sensibilidade paramétrica é justificada pela complexidade adicional e potencial confusão na interpretação dos resultados que podem surgir, especialmente em análises de sensibilidade probabilísticas."
- **Exceção admitida (LIV, consideração b):** "em circunstâncias excepcionais, como na avaliação de estratégias preventivas (por exemplo, vacinas), pode ser justificável revisar essa prática, sendo admissível apresentar análises de cenário com taxas de desconto diferentes para custos e para efetividade, desde que haja justificativa adequada."
- **Inconsistência dentro da própria 3ª edição (capítulo de vacinas, p. PDF 141):** "Seguindo as recomendações dessas Diretrizes, essa taxa deve ser em 5% ao ano, variando de 0% a 10% nas análises de sensibilidade."
- **A outra diretriz do Ministério** (Qualidade de Vida em Análises Econômicas, 1ª ed. revisada 2026, p. PDF 31) ainda descreve a regra antiga: "a taxa de desconto seja padronizada em 5% para os custos e os benefícios em saúde. Recomenda ainda que, na análise de sensibilidade, essa taxa seja variada entre 0% e 10%".
- **Status:** verificada na fonte primária. **Para o site:** "5% ao ano para custos e efeitos" é seguro; "faixa de 0% a 10%" deve ser atribuída à 2ª edição (2014) e ao capítulo de vacinas, não ao caso de referência da 3ª.

### 2.3 Perspectiva
- **Trecho literal (5.1.3.1, p. PDF 90, impressa 89):** "X. Em modelos de custo-efetividade com fins de incorporação de tecnologia ou subsídio para o gestor de saúde, a perspectiva principal a ser apresentada é a do pagador em relação aos custos. Em especial, para submissões de estudos às esferas públicas competentes, a perspectiva escolhida recomendada é a do SUS como órgão comprador de serviços (ou seja, computando todos os custos cobertos pelo sistema público de saúde)."
- **Trecho literal (p. PDF 25):** "Para modelos a serem submetidos ao SUS, deve-se adotar a perspectiva do SUS; outras perspectivas, como a da sociedade como um todo ... também podem ser mostradas como análises secundárias (análises de cenários)."
- **Status:** verificada na fonte primária.

### 2.4 Desfecho preferido e horizonte
- **Trechos literais (5.1.4, p. PDF 93–94):** "XXIII. Se a análise do caso de referência for uma análise de custo-utilidade, o desfecho será QALY e o resultado será expresso em reais (R$)/QALY." "XXIX. Deve-se priorizar o seguinte nível hierárquico de desfechos de efetividade: 1. QALY (ou DALY); 2. AVG; 3. eventos clínicos objetivos críticos ..."
- **Horizonte (p. PDF 93):** "XXI. O horizonte temporal de preferência é o tempo de vida inteira. Recomenda-se a adoção de tempo de censura em 100 anos de idade."
- **Status:** verificada na fonte primária.

### 2.5 Instrumento e tarifa de utilidade
- **Trecho literal (5.1.5, p. PDF 95, impressa 94):** "XXXV. Deve-se priorizar o seguinte nível hierárquico de obtenção de dados: 1. Dados de utilidade obtidos por meio de um instrumento validado, preferencialmente o EQ-5D-3L, para a população-alvo da tecnologia em pacientes brasileiros. Como alternativa, podem ser utilizados outros instrumentos que possam gerar dados de utilidade com validade nacional, como o SF-6D para a população brasileira."
- **Tarifa populacional (p. PDF 97):** "XL. Deve-se priorizar os valores de utilidade que foram obtidos a partir da valoração da população em geral (tarifas populacionais)".
- **Qual tarifa (p. PDF 49–50):** "Para valoração dos estados de saúde do EQ-5D-3L, foi realizado um estudo na população de Minas Gerais (46) e outro com base nacional, em quatro capitais, em 2014 (47)". Referência 47 (p. PDF 149): "SANTOS, M. et al. Brazilian valuation of EQ-5D-3L health states: results from a saturation study. Medical Decision Making, Thousand Oaks, v. 36, n. 2, p. 253-263, 2016."; referência 46: Andrade et al. 2013.
- **Crianças (p. PDF 96):** "Pode ser realizada por meio de instrumentos adaptados, como o EQ-5D-Y, e tabelas de valores da população adulta."
- **Status:** verificada na fonte primária.

### 2.6 Diretriz "Qualidade de Vida em Análises Econômicas" (1ª ed. revisada, 2026)
- **URL:** https://www.gov.br/conitec/pt-br/midias/artigos_publicacoes/diretrizes/diretrizesmetodologicas_qualidadedevida_emanaliseseconomicas.pdf (47 páginas; p. PDF = impressa + 1).
- **Trecho literal sobre 3L, 5L e Y (p. PDF 30, impressa 29):** "Deve-se utilizar, preferencialmente, o EQ-5D-3L (32), já que para essa versão existe um conjunto de valores brasileiros (5,11,47). O SF-6D também possui valoração local e pode ser considerado como uma segunda opção. A versão EQ-5D-5L encontra-se em fase de valoração no Brasil (48) e, recentemente, o conjunto de valores brasileiros para o EQ-5D-Y foi estabelecido (49)."
- **Trecho literal sobre a tarifa (p. PDF 13):** "O estudo que definiu a tabela de valores brasileira para o EQ-5D-3L foi publicado por Santos et al. (16)."
- **Nomes das dimensões em português (p. PDF 12):** "mobilidade, atividades habituais, cuidados pessoais, dor/mal-estar e ansiedade/depressão"; níveis do 3L: "“nenhum problema”, “algum problema” ou “problema grave”". No glossário (p. PDF 17) a mesma diretriz usa outra redação: "mobilidade, autocuidado, atividades habituais, dor/desconforto e ansiedade/depressão".
- **Sobre direitos (p. PDF 12):** a EuroQol "autoriza o uso não comercial dos instrumentos".
- **Alerta (C9):** a Figura 1 (p. PDF 13) lista 11112 = 0,8329; 11113 = 0,7833; 11121 = 0,8214; 11122 = 0,7703; 11211 = 0,7935. Esses valores não saem dos coeficientes de Santos 2016 publicados pela EuroQol (item 5.2). Fonte declarada: "elaboração própria".
- **Status:** verificada na fonte primária.

### 2.7 O limiar dentro da 3ª edição
- **Trecho literal (Quadro 6, p. PDF 69, impressa 68):** "Os valores calculados do limiar de custo-efetividade foram R$ 40.000,00 (quarenta mil reais) por QALY/DALY e R$ 35.000,00 (trinta e cinco mil) por AVG. As atualizações do valor do limiar de custo-efetividade serão publicadas pela própria Comissão, permanecendo vigentes até que uma nova versão seja oficialmente divulgada pela Conitec. Em situações coerentes com a hipótese de limiares alternativos, é aceitável um limiar de até três vezes o valor de referência. Não estão incluídas nessa regulamentação tecnologias para doenças ultrarraras (que afetam até 1 pessoa em cada 50.000 indivíduos)."
- **Lista das situações (mesmo quadro):** "a) doenças raras (que afetam até 65 pessoas em cada 100.000 indivíduos) que implicam redução importante de sobrevida ajustada pela qualidade; b) doenças acometendo crianças (menores de 18 anos) e implicando redução importante de sobrevida ajustada pela qualidade; c) doenças graves; d) doenças endêmicas em populações de baixa renda com poucas alternativas terapêuticas disponíveis."
- **Texto corrido (p. PDF 67–68):** "o limiar preestabelecido de custo-efetividade não deve ser o único critério nem o fator dominante da decisão"; "Digno de nota, o mesmo limiar pode ser utilizado para o desfecho DALY"; "será considerada como eficiente (custo-efetiva) a tecnologia que apresentar uma RCEI abaixo do valor correspondente a três vezes o valor de referência"; "o valor de referência será atualizado periodicamente e indicado pela Conitec".
- **Status:** verificada na fonte primária.

### 2.8 Convenção de desconto e correção de ciclo
- **Não há frase** dizendo se o primeiro ano é descontado ou não (busquei "primeiro ano" em todo o PDF).
- **Correção dentro do ciclo (p. PDF 105):** "O impacto da adoção do tempo discreto nos MTE deve ser considerado com a correção de continuidade do ciclo (within cycle) ... Sugere-se, para tanto, priorizar a correção por meio do método trapezoide, dada a sua praticidade e maior robustez frente à fragilidade do racional teórico da correção de meio ciclo convencional (adição e subtração de meio ciclo)."
- **Status:** verificada na fonte primária (ausência da convenção do primeiro ano incluída).

### 2.9 2ª edição (2014)
- Listada na mesma página da Conitec: https://www.gov.br/conitec/pt-br/midias/artigos_publicacoes/diretrizes/diretriz-de-avaliacao-economica.pdf. **Não baixada nesta sessão** (a 3ª edição foi encontrada). A regra "0% a 10%" atribuída à 2ª edição está confirmada só de forma indireta, pela citação da diretriz de Qualidade de Vida (item 2.2).

---

## 3. Atualizações do limiar (2023–2026), Portaria GM/MS nº 8.817/2025 e Decreto nº 12.716/2025

### 3.1 Valor do limiar
- Nenhum documento aberto traz valor diferente. A 3ª edição da Diretriz (2026) repete R$ 40.000 e R$ 35.000 (item 2.7). O Relatório nº 974 (fev. 2025) usa "limiar de R$ 120 mil/QALY" (item 10.1). Não encontrei em gov.br/conitec página com atualização anual pelo PIB per capita.
- **Status:** verificada na fonte primária quanto ao que os documentos dizem; a inexistência de atualização é ausência de evidência.

### 3.2 Portaria GM/MS nº 8.817, de 21 de novembro de 2025
- **URL:** https://www.gov.br/conitec/pt-br/assuntos/reunioes-da-conitec/portaria-gm-ms-no-8-817-de-21-de-novembro-de-2025.pdf (2 páginas; cópia do DOU, "Nº 223, segunda-feira, 24 de novembro de 2025", Seção 1).
- **Ementa:** "Altera a Portaria de Consolidação GM/MS nº 1, de 28 de setembro de 2017, para dispor sobre o fluxo de solicitação de incorporação de tecnologias em saúde ...".
- **Trecho literal sobre limiar (p. PDF 2):** "IX - a avaliação econômica comparativa dos benefícios e dos custos em relação às tecnologias já incorporadas, considerando limiar de custo-efetividade disposto em diretrizes metodológicas do Ministério da Saúde. § 1º As metodologias empregadas na avaliação de que tratam os incisos II e III do caput, incluídos os indicadores e parâmetros, serão dispostas nas: I - Diretrizes metodológicas: Análise de Impacto Orçamentário; e II - Diretrizes Metodológicas: Diretriz de Avaliação Econômica."
- **Ultrarraras (art. 37, § 1º):** "No caso de avaliação de tecnologias para doenças ultrarraras, as metodologias de avaliação da eficácia, acurácia, efetividade, segurança e de avaliação econômica e de impacto orçamentário, seguirão o disposto em diretrizes metodológicas a serem publicadas pelo Ministério da Saúde e divulgadas no sítio eletrônico da Conitec."
- **Valor de referência orçamentário:** "§ 3º A tecnologia em saúde cuja estimativa anual de aquisição ultrapasse o valor de referência orçamentário, a ser estabelecido pelo Ministério da Saúde em diretrizes metodológicas, deverá ser objeto de trâmites adicionais na área responsável pela política, programa ou ação, incluindo: I - consulta sobre adequação orçamentária; II - consulta sobre desconto em relação ao preço em Comitê do Ministério da Saúde ...; III - consulta quanto à proposição de acordo de acesso gerenciado ou formas de implementação gradual da tecnologia; IV - retorno à Conitec com as informações requeridas para deliberação final."
- **Acesso gerenciado (art. 2º, XIV):** "modalidade de implementação de tecnologia em saúde no SUS, condicionada ao monitoramento de desempenho, bem como a fatores econômicos, com prazo estabelecido para a reavaliação da sua incorporação".
- **Vigência:** "Art. 3º Esta Portaria entra em vigor na data de sua publicação."
- **A portaria não traz número de limiar.**
- **Status:** verificada na fonte primária.

### 3.3 Decreto nº 12.716/2025
- **Não foi possível abrir** em host liberado (Planalto bloqueado; a cartilha "Inovação normativa da Conitec" em gov.br devolveu HTTP 401). Segue como nas notas anteriores.

---

## 4. NICE

### 4.1 Mudança do limiar para £25.000–£35.000
- **URL:** https://www.nice.org.uk/news/articles/changes-to-nice-s-cost-effectiveness-thresholds-confirmed ("News 1 December 2025").
- **Trechos literais:**
  - "The government has today (1 December 2025) announced that it will increase the thresholds NICE uses in evaluations of new medicines to decide which are cost-effective for use in the NHS."
  - "This change, from April 2026, is designed to improve the operating environment for pharmaceutical companies in the UK".
  - "We currently assess value for money for the NHS by applying a cost-effectiveness range of £20,000 to £30,000 per QALY gained. (we use a much higher threshold for medicines that treat ultra-rare conditions)."
  - "It has now been agreed that NICE will apply new thresholds of £25,000 to £35,000/QALY as soon as NICE has the power to do so, following a change in regulations."
  - "NICE will apply threshold changes to new technology appraisals and those currently underway."
  - "Our analysis suggests that increasing the standard threshold to £25,000 - £35,000 will allow us to recommend an additional 3-5 new medicines or indications per year."
- **Data de vigência literal:** "from April 2026" (a página não dá o dia). O manual registra: "March 2026: This manual has been updated to include the change to the cost-effectiveness threshold." (https://www.nice.org.uk/process/pmg36/chapter/update-information). O dia "1º de abril" **não** foi confirmado em fonte primária.
- **Status:** verificada na fonte primária.

### 4.2 Manual PMG36 (versão vigente)
- **URL:** https://www.nice.org.uk/process/pmg36/chapter/committee-recommendations-2 — "Reference number: PMG36 / Published: 31 January 2022 / Last updated: 13 October 2026".
- **Faixa do limiar no manual:** "Below a most plausible ICER of £25,000 per QALY gained, or £100,000 per QALY gained for highly specialised technologies, the decision to recommend a technology is normally based on the cost-effectiveness estimate and the acceptability of a technology as an effective use of NHS resources."; "As the ICER for a technology increases in the range of £25,000 to £35,000 per QALY gained, the committee's decisions ... will make explicit reference to the relevant factors listed in section 6.3.5."; "Above a most plausible ICER of £35,000 per QALY gained ... the committee will need to identify an increasingly stronger case".
- **Severity modifier, Tabela 6.1 ("QALY weightings for severity"), literal:**

  | QALY weight | Proportional QALY shortfall | Absolute QALY shortfall |
  |---|---|---|
  | 1 | Less than 0.85 | Less than 12 |
  | x1.2 | 0.85 to 0.95 | 12 to 18 |
  | x1.7 | At least 0.95 | At least 18 |

  "The QALY weightings for severity are applied based on absolute and proportional shortfall, whichever implies the greater severity level. If either the proportional or absolute QALY shortfall calculated falls on the cut-off between severity levels, the higher severity level will apply."
- **HST:** "the committee will apply a weight between 1 and 3, using equal increments, for a range between 10 and 30 QALYs gained." Tabela 6.2: "Less than or equal to 10 → 1; 11 to 29 → Between 1 and 3 (using equal increments); Greater than or equal to 30 → 3". Nível de referência: "the highly specialised technologies £100,000 cost per QALY level". "For highly specialised technologies ... No additional QALY weighting for the severity of disease is applied."
- **Taxa de desconto** (https://www.nice.org.uk/process/pmg36/chapter/economic-evaluation-2, seção 4.5): "For the reference case, costs and health effects should be discounted at the same rate of 3.5% per year. Alternative analyses using rates of 1.5% for both costs and health effects may be presented alongside the reference-case analysis, in specific circumstances."
- **Status:** verificada na fonte primária. A afirmação de que o modificador "substituiu o fim de vida" não foi procurada no texto.

---

## 5. EuroQol

### 5.1 Lista de value sets
- **URL:** https://euroqol.org/information-and-support/resources/value-sets/
- **Brasil na lista (três entradas, nenhuma 5L):**
  - EQ-5D-3L, "pre-EQ-VT TTO": "Viegas Andrade M, Noronha K, Kind P, ... Societal Preferences for EQ-5D Health States from a Brazilian Population Survey. Value in Health Regional Issues 2013;2(3)" — arquivo "Brazil 3L (Andrade TTO 2013)".
  - EQ-5D-3L: "Santos M, Cintra MA, Monteiro AL, Santos B, Gusmão-Filho F, Andrade MV, Noronha K, Cruz LN, Camey S, Tura B, Kind P Brazilian Valuation of EQ-5D-3L Health States: Results from a Saturation Study. Med Decis Making. 2016 Feb;36(2):253-63" — arquivo "Brazil 3L (Santos TTO 2016)".
  - EQ-5D-Y-3L: "Espirito Santo CM, Miyamoto GC, Santos VS, Ben ÂJ, Finch AP, Roudijk B, de Jesus-Moraleida FR, Stein AT, Santos M, Yamato TP. Estimating an EQ-5D-Y-3L Value Set for Brazil. Pharmacoeconomics. 2024;42(9):1047-1063." — arquivo "Brazil Y-3L (Santo DCE TTO 2024)".
- **Há value set brasileiro do EQ-5D-5L?** Não na lista da EuroQol em 13 nov. 2026. Coerente com a diretriz do Ministério: "A versão EQ-5D-5L encontra-se em fase de valoração no Brasil" (item 2.6).
- **Status:** verificada na fonte primária.

### 5.2 Coeficientes oficiais — Santos 2016 (arquivo SAS da EuroQol)
- **URL:** https://euroqol.org/wp-content/uploads/2026/05/Brazil-3L-Santos-TTO-2016.txt
- **Literal:** "if mobility eq 2 then disut_mo=0.120; if mobility eq 3 then disut_mo=0.363; if selfcare eq 2 then disut_sc=0.112; if selfcare eq 3 then disut_sc=0.218; if activity eq 2 then disut_ua=0.097; if activity eq 3 then disut_ua=0.184; if pain eq 2 then disut_pd=0.064; if pain eq 3 then disut_pd=0.168; if anxiety eq 2 then disut_ad=0.050; if anxiety eq 3 then disut_ad=0.095; ... EQ_index=1-0.149-disut_total; if mobility=1 and selfcare=1 and activity=1 and pain=1 and anxiety=1 then EQ_index=1; EQ_index=ROUND(EQ_index, 0.001);"
- **Consequência (conta minha sobre o código):** 33333 = 1 − 0,149 − (0,363 + 0,218 + 0,184 + 0,168 + 0,095) = **−0,177**. Sem termo N3. Coincide com os coeficientes das notas anteriores.
- **Status:** verificada na fonte primária (EuroQol; o artigo em si segue fechado).

### 5.3 Coeficientes oficiais — Andrade 2013
- **URL:** https://euroqol.org/wp-content/uploads/2026/05/Brazil-3L-Andrade-TTO-2013.txt
- **Literal:** mobilidade 0.127 / 0.403; cuidados pessoais 0.121 / 0.246; atividades 0.095 / 0.205; dor 0.067 / 0.200; ansiedade 0.061 / 0.113; "EQ_index=1-0.054-disut_total".
- **Status:** verificada na fonte primária. Item novo (estava "não verificado").

### 5.4 Coeficientes oficiais — Y-3L (Espirito Santo 2024)
- **URL:** https://euroqol.org/wp-content/uploads/2026/05/Brazil-Y-3L-Santo-DCE-TTO-2024.txt
- **Literal:** mobilidade 0.12492 / 0.22867; cuidados 0.10265 / 0.19090; atividades 0.10334 / 0.18577; dor 0.10956 / 0.23673; ansiedade 0.06060 / 0.16382; "EQ_index=1-disut_total" (sem constante). Bate com as notas anteriores.
- **Status:** verificada na fonte primária.

### 5.5 Termos de uso e reprodução
- **URL:** https://euroqol.org/register/quality/intellectual-property-ip-protection/
- **Trechos literais:**
  - "Prior written consent from the EQ Office is required to use, test, reproduce, alter, amend, convert, transfer, translate, publish, or otherwise make EuroQol instruments available, regardless of mode of administration (self-complete, interview, etc.), language, or form (digital, hard-copy, etc.)."
  - "A request to display (parts of) a EuroQol instrument in a publication (book, article, dissertation, thesis, etc.) or on a website should be submitted via the EuroQol registration page. In general, permission is provided for non-commercial purposes and for the English (UK) sample versions only."
  - "The IP Rights do not include data collected with EuroQol instruments, nor value sets estimated for EuroQol instruments."
- **FAQ** (https://euroqol.org/information-and-support/user-support/faqs/): "A licence fee will only be charged for commercial use of EQ-5D. The value set is an ancillary product that is free to use by anyone."; "Yes, you are free to publish your results. If you would like to reproduce the EQ-5D questionnaire in your publication, please contact the EuroQol Office."
- **Amostras** (https://euroqol.org/register/obtain-eq-5d/eq-5d-sample-demos/): "These versions are for inspection purposes only."
- **Leitura prática:** coeficientes e valores da tarifa podem ser usados; reproduzir o questionário (inclusive partes, e inclusive em site) exige pedido à EuroQol, que em geral só autoriza a amostra em inglês do Reino Unido. Descrever as dimensões com palavras próprias não é tratado nas páginas abertas.
- **Status:** verificada na fonte primária.

### 5.6 Nomes das dimensões
- **Inglês (página do EQ-5D-3L, https://euroqol.org/information-and-support/euroqol-instruments/eq-5d-3l/):** "mobility, self-care, usual activities, pain/discomfort and anxiety/depression. Each dimension has 3 levels: no problems, some problems, and extreme problems."
- **Português:** o site da EuroQol não mostra a versão em português. Os nomes em português verificados vêm da diretriz do Ministério (item 2.6).
- **Status:** inglês verificado na fonte primária; versão oficial PT-BR da EuroQol **não foi possível abrir** (só mediante registro).

---

## 6. Santos et al. 2016 (Med Decis Making)

- **Crossref** (https://api.crossref.org/works/10.1177/0272989X15613521): título "Brazilian Valuation of EQ-5D-3L Health States"; periódico "Medical Decision Making"; volume 36, número 2, páginas 253-263; publicado online em 2015-10-22; 11 autores (Santos, Cintra, Monteiro, Santos, Gusmão-filho, Andrade, Noronha, Cruz, Camey, Tura, Kind). Sem licença aberta (só licença de mineração de texto da Sage). **Status:** verificada na fonte primária (metadados).
- **Texto integral e Tabela de coeficientes:** **não foi possível abrir** (journals.sagepub.com bloqueado; sem cópia aberta).
- **Valor de 33333:** −0,177 pelo código oficial da EuroQol (item 5.2). **−0,176 não confirmado** nesta passada.
- **De passagem:** o DOI de Dolan & Kahneman 2008 (10.1111/j.1468-0297.2007.02110.x), pendente nas notas, resolve no Crossref: "Interpretations of Utility and Their Implications for the Valuation of Health", The Economic Journal, v. 118, n. 525, p. 215-234. **Status:** verificada na fonte primária (metadados).

---

## 7. Estados Unidos

### 7.1 42 U.S.C. § 1320e-1(e) (seção 1182 do Social Security Act)
- **URL:** https://www.law.cornell.edu/uscode/text/42/1320e-1
- **Trecho literal:** "(e) The Patient-Centered Outcomes Research Institute established under section 1320e(b)(1) of this title shall not develop or employ a dollars-per-quality adjusted life year (or similar measure that discounts the value of a life because of an individual’s disability) as a threshold to establish what type of health care is cost effective or recommended. The Secretary shall not utilize such an adjusted life year (or such a similar measure) as a threshold to determine coverage, reimbursement, or incentive programs under subchapter XVIII."
- **Origem:** "(Aug. 14, 1935, ch. 531, title XI, § 1182, as added Pub. L. 111–148, title VI, § 6301(c), Mar. 23, 2010, 124 Stat. 740.)"
- **Status:** verificada na fonte primária (Cornell LII). ssa.gov: **não foi possível abrir** ("Access Denied").

### 7.2 Seção 1194(e)(2) do Social Security Act (IRA) = 42 U.S.C. § 1320f-3(e)(2)
- **URL:** https://www.law.cornell.edu/uscode/text/42/1320f-3
- **Trecho literal:** "(2) Evidence about alternative treatments The following evidence, as available, with respect to such selected drug and therapeutic alternatives to such drug: ... In using evidence described in subparagraph (C), the Secretary shall not use evidence from comparative clinical effectiveness research in a manner that treats extending the life of an elderly, disabled, or terminally ill individual as of lower value than extending the life of an individual who is younger, nondisabled, or not terminally ill."
- **Status:** verificada na fonte primária.

### 7.3 H.R. 485 (118º) e H.R. 3864 (119º)
- **Não foi possível abrir** congress.gov (desafio anti-robô do Cloudflare no `curl`; host não resolvido no WebFetch). Status dos projetos segue como nas notas anteriores. cms.gov não foi tentado.

### 7.4 ICER: evLY/evLYG
- **Definição (glossário, https://icer.org/icer-glossary/):** "Equal Value Life Year (evLY) – The Equal Value Life Year is a way of measuring health benefit that gives the same value to each year of life a treatment adds, regardless of a patient’s age, disability, or how severe their illness is. ICER developed the evLY as an alternative to the QALY. ICER previously referred to this measure as the evLYG but it is now the evLY."
- **Página de métodos (https://icer.org/our-approach/methods-process/cost-effectiveness-the-qaly-and-the-evlyg/):** "To complement the use of the QALY, ICER’s reports also include a calculation of the Equal Value of Life Years (evLY), which measures quality of life equally for everyone during any periods of life extension."
- **Valor 0,851** (ICER’s Reference Case for Economic Evaluations, "Current as of October 22, 2026", https://icer.org/wp-content/uploads/2024/02/ICER_Reference-Case_For-Publication_102226.pdf, p. PDF 35, impressa 32): "the quality-adjusted component of the life expectancy calculation does not vary by age but is rather fixed at 0.851 for all ages ... (calculated using age- and sex-adjusted estimates for mortality and a constant 0.851 for quality of life)". O trecho está na seção de "evLY shortfall"; a frase "0,851 para os anos de vida ganhos" não foi localizada literalmente neste PDF.
- **Benchmarks (glossário):** "based on cost-effectiveness ratios of $100,000 and $150,000 per QALY or evLY gained and outlined in ICER’s 2023 Value Assessment Framework".
- **Data de introdução (dezembro de 2018):** **não confirmada** em icer.org (o documento de 2018 não foi localizado no site).
- **Status:** definição, 0,851 e benchmarks verificados na fonte primária; data de introdução não.

---

## 8. Woods 2016 e Pichon-Riviere 2023

- **Woods 2016:** o texto em https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5193154/ abriu e confirma que os valores por país estão no material suplementar ("US dollar CET values with and without PPP adjustment are provided in the Supplemental Materials"). O suplemento (`mmc1.docx`) **não foi possível abrir** (página de desafio no lugar do arquivo). O valor do Brasil está confirmado de forma indireta pelo relatório da Conitec (item 1.8): "$ 3.210 a $ 10.122 por QALY, equivalente a 0,20 a 0,63 PIB per capita". A coluna sem ajuste PPP (US$ 2.393–7.544) segue não verificada.
- **Pichon-Riviere 2023 (Lancet Glob Health):** **não foi possível abrir** (www.thelancet.com devolveu HTTP 403). Os valores US$ 8.462 (6.173–14.894) e 0,95 PIB per capita seguem não verificados. O que está verificado é o documento anterior do mesmo grupo, citado pela Conitec (item 1.8): US$ 9.890 a US$ 11.417 por QALY (0,88 a 1,02 PIB per capita), dólares correntes de 2013.

---

## 9. IBGE — PIB per capita

- **Não foi possível abrir** agenciadenoticias.ibge.gov.br (desafio do Cloudflare no `curl`; host não resolvido no WebFetch). Os valores R$ 40.688 (2021, primeira estimativa), R$ 42.247,52 (2021 revisado) e R$ 59.687,49 (2025) continuam como estavam nas notas: não verificados na fonte primária.

---

## 10. Conitec — participação social e relatórios

### 10.1 Perspectiva do Paciente
- **URL:** https://www.gov.br/conitec/pt-br/assuntos/participacao-social/perspectiva-do-paciente-1
- **Trechos literais:** "A Perspectiva do Paciente é um espaço para a apresentação de um relato de experiência com a condição de saúde e/ou com a tecnologia em avaliação durante a reunião da Conitec." "Podem participar da ação usuários do SUS e seus cuidadores e/ou familiares. Todos os interessados devem se inscrever na chamada pública do tema de interesse, disponibilizada nesta página." "A ação promove a participação social no processo de Avaliação de Tecnologias em Saúde (ATS), considerando que aspectos ligados à vida real, tais como qualidade de vida, vantagens e desvantagens da experiência com a tecnologia e vivência com determinada condição de saúde, também agregam informações relevantes ao processo."
- A página lista chamadas até a "Chamada Pública nº 103/2026".
- **Status:** verificada na fonte primária. A página geral de participação social e a de consultas públicas: **não foi possível abrir** o conteúdo (HTTP 401 na primeira; a segunda abriu só o menu).
- **Audiência pública de 2022 (no relatório do item 1, p. PDF 29):** "contou com um total de 119 inscritos, distribuídos entre os seguintes segmentos: pacientes e associações com 52 inscritos, profissionais de saúde com 24 inscritos, representantes de instituições de ensino e pesquisa com 14 inscritos, gestores com 6 inscritos e fabricantes de tecnologias com: 23 inscritos."

### 10.2 Relatório nº 793 (dez. 2022) — onasemnogeno abeparvoveque, AME
- **URL:** https://www.gov.br/conitec/pt-br/midias/relatorios/portaria/2022/20221207_relatorio_zolgensma_ame_tipo_i_793_2022.pdf (116 páginas).
- **RCEI literal (Tabelas 4 e 5, p. PDF 50, impressa 49; horizonte "lifetime"; modelo do demandante):** contra nusinersena, custo incremental 2.579.780, efetividade incremental 2,92 QALY, "RCEI (R$/QALY)" **883.587**; contra risdiplam, 3.316.571, 4,33 QALY, **766.549**.
- **Sensibilidade ao horizonte (p. PDF 51):** "Horizonte de 10 anos Vs. Nusinersena R$3.045.181/QALY Vs. Risdiplam R$2.787.717/QALY Horizonte de 25 anos Vs. Nusinersena R$ 1.208.573/QALY Vs. Risdiplanm R$1.054.747/QALY".
- **Sobre limiar (p. PDF 51):** "A nuvem do gráfico de dispersão não foi comparada a nenhum limiar de custo-efetividade, já que no Brasil não há definido um limiar de disposição a pagar para doenças ultrarraras."
- **Status:** verificada na fonte primária.

### 10.3 Relatório nº 974 (fev. 2025) — nirsevimabe
- **URL:** https://www.gov.br/conitec/pt-br/midias/relatorios/2025/relatorio_974_nirvesimabe_virus_sincicial_respiratorio.pdf (91 páginas; o nome do arquivo traz "nirvesimabe").
- **RCEI literal (p. PDF 10):** "o nirsevimabe não seria custo-efetivo no cenário da população proposta, que inclui crianças elegíveis e não elegíveis ao palivizumabe, apresentando um RCEI de R$ 212.320,00 por QALY, com apenas 0,6% das simulações abaixo do limiar de R$ 120 mil/QALY. Além disso, o nirsevimabe também não seria custo-efetivo na população não elegível ao palivizumabe (prematuros entre 29 e 35 semanas), com um RCEI de R$ 416.064,01 por QALY." Contra palivizumabe, na população elegível: "dominante (cost-saving)".
- **Após a consulta pública (Tabela 9, p. PDF 59):** "Elegível ao palivizumabe: Dominância forte / Dominância forte; Inelegível ao palivizumabe: R$ 416.064/QALY / R$ 247.290/QALY; Elegíveis e inelegíveis ao palivizumabe: R$ 212.320/QALY / R$ 355,43/QALY". Os pareceristas "não validaram essa atualização".
- **Inconsistência no próprio relatório:** o valor atualizado para toda a população aparece como "R$ 355 por QALY" (p. PDF 11), "R$ 255,43/QALY (cenário base)" (p. PDF 12) e "R$ 355,43/QALY" (Tabela 9). Não usar esse número; usar o da submissão inicial com a ressalva.
- **Uso do limiar alternativo:** o relatório compara com "limiar de R$ 120.000,00/QALY" (p. PDF 42).
- **Status:** verificada na fonte primária.

### 10.4 Relatório oncológico
- Não aberto nesta passada (faltou tempo). O relatório da oficina de 2021 foi baixado (https://www.gov.br/conitec/pt-br/midias/pdf/2021/20211202_relatorio_oficina_limiares.pdf, 34 páginas), mas não lido.

---

## 11. O que não abriu (resumo)

| Fonte | Motivo |
|---|---|
| www.congress.gov (H.R. 485, H.R. 3864) | desafio anti-robô (Cloudflare) |
| agenciadenoticias.ibge.gov.br | desafio anti-robô (Cloudflare) |
| www.ssa.gov (seção 1182) | "Access Denied" |
| www.thelancet.com (Pichon-Riviere 2023) | HTTP 403 |
| pmc.ncbi.nlm.nih.gov e suplemento de Woods 2016 | página de desafio (o artigo abriu por www.ncbi.nlm.nih.gov/pmc) |
| journals.sagepub.com (Santos 2016), www.planalto.gov.br, bvsms.saude.gov.br | bloqueados, conforme avisado |
| atsinc.com.br (TabelaEQ5D.pdf citada pelo Ministério) | host fora da lista liberada |
| gov.br/conitec: notícia de set/2022, página geral de participação social, cartilha "Inovação normativa" | HTTP 401 ("Conteúdo Restrito") |
| ICER: documento de dezembro de 2018 | não localizado em icer.org |
