# Como o QALY vira decisão no Brasil (e no NICE) — checagem de fatos

Data da checagem: 13/11/2026.

## AVISO METODOLÓGICO (ler antes de usar qualquer número)

**Nenhuma fonte primária governamental pôde ser aberta nesta sessão.** O ambiente bloqueia o acesso direto (WebFetch e curl) a `www.gov.br`, `www.planalto.gov.br`, `bvsms.saude.gov.br`, `www.nice.org.uk` e `pmc.ncbi.nlm.nih.gov` (erro `ENOTFOUND` / `CONNECT tunnel failed, response 403`: hosts fora da lista permitida da sessão). O que funcionou:

- **PubMed (MCP)**: metadados, resumos e, para um artigo, texto integral do PMC. Itens conferidos assim estão marcados **verificada (PubMed)**.
- **WebSearch**: devolve trechos indexados das páginas (inclusive de PDFs oficiais), não o documento. Itens conferidos assim estão marcados no máximo **parcialmente verificada (trecho de busca)**. As aspas nesses itens reproduzem o trecho devolvido pelo buscador, não uma leitura do PDF.

Consequência prática: antes de publicar, alguém com acesso normal à internet precisa abrir os PDFs listados em "Pendências" e confirmar a redação literal. Nenhum DOI, PMID ou URL abaixo foi inventado: todos vieram de resultado de busca ou do PubMed. Nenhum número veio de memória.

Legenda de status: **verificada** | **parcialmente verificada** | **não verificada**.

---

## 1. Conitec 2022 — limiares de custo-efetividade

**Documento:** Brasil. Ministério da Saúde. *O uso de limiares de custo-efetividade nas decisões em saúde: recomendações da Comissão Nacional de Incorporação de Tecnologias no SUS*. Brasília: Conitec, 2022.
**URL do PDF (não aberta; URL devolvida pelo buscador):** https://www.gov.br/conitec/pt-br/midias/pdf/2022/20221106_relatorio-uso-de-limiares-de-custo-efetividade-nas-decisoes-em-saude.pdf
**Notícia oficial da aprovação (não aberta):** https://www.gov.br/conitec/pt-br/assuntos/noticias/2022/setembro/conitec-aprova-proposta-de-uso-de-limiares-de-custo-efetividade-lce-nas-decisoes-em-saude

| Afirmação | Valor / redação encontrada | Como foi conferida | Status |
|---|---|---|---|
| Valor de referência | R$ 40.000 por QALY (AVAQ) | Trechos de busca da notícia gov.br/conitec (set/2022): "1 PIB per capita, equivalente a R$ 40 mil por ano de vida ajustado à qualidade (QALY)"; ata de audiência pública (AMB): "valor de referência fica estabelecido em R$ 40.000 por QALY"; resumo JAFF PE-055 (2026) | parcialmente verificada |
| Justificativa | 1 PIB per capita. O ano-base não foi confirmado no PDF. Uma reportagem cita 1 PIB per capita = R$ 40.688 (valor de 2021), que coincide com a primeira estimativa do IBGE para 2021 (ver item 6) | Trecho de busca (reportagem); o cruzamento com o IBGE é inferência minha | parcialmente verificada (ano-base não confirmado) |
| Ano de vida ganho | R$ 35.000 por ano de vida ganho, quando o QALY não é adequado | Trecho devolvido como sendo do PDF da Conitec: "35.000,00 por 'anos de vida ganhos' para o ano de 2022."; Futuro da Saúde: valor de referência de 35 mil reais quando o QALY não é considerado ideal | parcialmente verificada (redação completa da recomendação não lida) |
| Limiares alternativos | Até 3 vezes o valor de referência (≈ R$ 120.000/QALY; o número 120.000 aparece em fontes secundárias, não confirmei se está escrito no PDF) | Trecho: "é aceitável um limiar de até 3 vezes o valor de referência" (ata de audiência/AMB; white paper Interfarma) | parcialmente verificada |
| Em quais situações | Ver lista abaixo | Fontes secundárias, com divergência | parcialmente verificada — **redação literal pendente** |
| Não é critério único | QALY como desfecho principal, "mas os tomadores de decisão não devem limitar suas discussões a ele"; parâmetros "utilizados em combinação com outros critérios" (redação da Lei 14.313) | Trecho de busca (Mattos Filho, sobre a Recomendação 3) e texto da lei | parcialmente verificada |
| Atualização do valor | Fontes secundárias dizem que o valor seria atualizado conforme o PIB per capita. Não encontrei nenhuma atualização formal publicada (ver item 2) | Trechos de busca | parcialmente verificada |

**Lista das situações para limiar alternativo (atenção: fontes divergem).**
- Versão da **proposta em consulta pública** (trecho via Abrale e Instituto Unidos pela Vida): "a critério do julgamento da Conitec", doenças que acometem **crianças** com reduções importantes de sobrevida ajustada pela qualidade; **doenças graves** com essa mesma redução; **doenças raras** com essa redução; **doenças endêmicas em populações de baixa renda com poucas alternativas terapêuticas**.
- Resumos da **versão final** (IATS, Futuro da Saúde, INAFF): "doenças pediátricas com redução substancial de sobrevida ajustada pela qualidade, doenças raras e atenção a pessoas em vulnerabilidade social". Um resumo diz que a versão final lista as situações "de forma semelhante" à proposta.
- **Ultrarraras e terapias avançadas:** segundo trechos secundários, tecnologias gênicas/curativas e doenças ultrarraras (definidas num trecho como até 1 caso em 50.000 pessoas) ficaram **fora** da regra, com critérios específicos a definir depois pela Conitec. Ou seja, "ultrarraras" não é uma das situações do limiar de 3x: é uma exclusão.
- **Não consegui confirmar a lista literal da versão final.** Não usar no site a lista com "doença endêmica em populações de baixa renda" sem abrir o PDF: ela está confirmada apenas para a versão da consulta pública.

**Datas e ato normativo.**
- Consulta Pública Conitec nº 41/2022 (227 contribuições, segundo Mattos Filho) e Audiência Pública nº 2/2022 (ata em https://www.gov.br/conitec/pt-br/midias/audiencias_publicas/20230102_ATA_ap22022.pdf). Parcialmente verificada.
- Recomendação final aprovada na **112ª Reunião Ordinária da Conitec, em 31 de agosto de 2022** (IATS; white paper Interfarma). Parcialmente verificada.
- Documento final publicado em **6 de novembro de 2022** (Mattos Filho; Interfarma; o nome do arquivo começa com `20221106`). Parcialmente verificada.
- **Ato normativo:** não encontrei portaria que tenha instituído os valores em 2022. O documento é um relatório de recomendações da Conitec. Só em 2025 a Portaria GM/MS nº 8.817 passou a remeter ao "limiar de custo-efetividade disposto em diretrizes metodológicas do Ministério da Saúde" (ver item 2). **Não verificada** a existência de portaria de 2022.

---

## 2. Houve atualização entre 2023 e novembro de 2026?

| Afirmação | O que foi encontrado | Status |
|---|---|---|
| Novo valor numérico do limiar (correção monetária, novo PIB per capita) | **Nenhuma fonte encontrada** informa valor diferente de R$ 40.000/QALY e R$ 35.000/AVG. Um resumo de 2026 (JAFF PE-055) ainda cita R$ 40.000, R$ 35.000 e até R$ 120.000. Entidades pedem atualização anual (Futuro da Saúde) | parcialmente verificada (ausência de evidência; não consegui navegar em gov.br/conitec) |
| Portaria GM/MS nº 8.817, de 21/11/2025 (DOU 24/11/2025) | Altera a Portaria de Consolidação GM/MS nº 1/2017; liga a análise da Conitec ao "limiar de custo-efetividade disposto em diretrizes metodológicas do Ministério da Saúde"; cria valor de referência de impacto orçamentário a definir em diretriz; etapas extras para tecnologias de alto impacto (negociação de preço, implementação gradual); formaliza acesso gerenciado. Cópias: https://ses.sp.bvs.br/wp-content/uploads/2025/11/U_PT-MS-GM-8817_211125.pdf | parcialmente verificada |
| Decreto nº 12.716, de 12/11/2025 (DOU 13/11/2025) | Altera o Decreto 7.646/2011: nova composição (17 membros com voto por Comitê, sociedade civil com voto), decisão final pelo Secretário de Ciência, Tecnologia e Inovação em Saúde; adequação à Lei 15.120/2025. Texto: https://www2.camara.leg.br/legin/fed/decret/2025/decreto-12716-12-novembro-2025-798285-publicacaooriginal-176987-pe.html | parcialmente verificada |
| Lei nº 15.120, de 07/04/2025 | Alterou o § 1º do art. 19-Q da Lei 8.080 (composição da Conitec), vigência em 05/10/2025 segundo o LegJur. Conteúdo exato não lido | parcialmente verificada |
| Diretriz de Avaliação Econômica, 3ª edição (2026) | Segundo o INAFF, a nova edição "detalha formalmente" o uso de limiares e prevê modificador de até 3 vezes o valor de referência em situações excepcionais (doenças raras ou pediátricas graves). O valor numérico na 3ª edição **não foi confirmado** | parcialmente verificada |
| Limiar de impacto orçamentário | Versão preliminar da Diretriz de Análise de Impacto Orçamentário em consulta pública pela Rebrats (documento datado de 30/04/2026): entre R$ 37,8 milhões e R$ 75,6 milhões = alto impacto; acima de R$ 75,6 milhões = muito alto. Não encontrei publicação final. PDF: http://www.rebrats.saude.gov.br/images/2026/VERSAO_PRELIMINAR_Diretriz-AIO-2026.pdf | parcialmente verificada (proposta, não norma final) |

Resumo: o que mudou de 2023 a 2026 foi a **governança** (lei, decreto e portaria de 2025), a **formalização do limiar dentro das diretrizes metodológicas** e a proposta de um **limiar de impacto orçamentário**. Não achei mudança do número R$ 40.000.

---

## 3. Base legal

| Norma | Dispositivo e redação encontrada | Status |
|---|---|---|
| **Lei nº 12.401, de 28/04/2011** (acrescenta os arts. 19-M a 19-U à Lei 8.080/1990) | Art. 19-Q: incorporação, exclusão ou alteração de tecnologias é atribuição do Ministério da Saúde, assessorado pela Conitec. § 2º: "O relatório da Comissão Nacional de Incorporação de Tecnologias no SUS levará em consideração, necessariamente": I – evidências científicas sobre eficácia, acurácia, efetividade e segurança; II – "a avaliação econômica comparativa dos benefícios e dos custos em relação às tecnologias já incorporadas, inclusive no que se refere aos atendimentos domiciliar, ambulatorial ou hospitalar, quando cabível". https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/lei/L12401.htm | parcialmente verificada (trecho de busca; Planalto não aberto) |
| **Lei nº 14.313, de 21/03/2022** (DOU 22/03/2022) | Acrescenta o § 3º ao art. 19-Q: "As metodologias empregadas na avaliação econômica a que se refere o inciso II do § 2º deste artigo serão dispostas em regulamento e amplamente divulgadas, inclusive em relação aos indicadores e parâmetros de custo-efetividade utilizados em combinação com outros critérios." https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2022/lei/L14313.htm | parcialmente verificada (redação montada a partir de dois trechos de busca) |
| **Decreto nº 7.646, de 21/12/2011** | Regulamenta a Conitec e o processo administrativo. O art. 18 trata do relatório que subsidia a recomendação. Foi alterado pelo Decreto 11.161/2022 e pelo **Decreto 12.716/2025**; uma fonte cita também o Decreto 12.036/2024. **Redação vigente do art. 18 não confirmada** | parcialmente verificada |
| **Lei nº 15.120/2025** e **Portaria GM/MS nº 8.817/2025** | Ver item 2 | parcialmente verificada |

---

## 4. ANS (saúde suplementar)

| Afirmação | O que foi encontrado | Status |
|---|---|---|
| Lei nº 14.307, de 03/03/2022 (altera a Lei 9.656/1998) | Art. 10-D, § 3º: a Cosaúde considera, entre outros, "a avaliação econômica comparativa dos benefícios e dos custos em relação às coberturas já previstas no rol"; as metodologias, "incluídos os indicadores e os parâmetros de avaliação econômica de tecnologias em saúde utilizados em combinação com outros critérios, serão estabelecidas em norma editada pela ANS", com assessoria da Cosaúde e ampla divulgação. http://www.planalto.gov.br/ccivil_03/_ato2019-2022/2022/lei/l14307.htm | parcialmente verificada |
| RN ANS nº 555, de 14/12/2022 | Rito de atualização do Rol; exige "estudo de avaliação econômica em saúde, na perspectiva da saúde suplementar, com a respectiva planilha eletrônica de cálculos". https://bvsms.saude.gov.br/bvs/saudelegis/ans/2022/res0555_16_12_2022.html. Não confirmei se há RN posterior que a substitua | parcialmente verificada |
| A ANS tem limiar explícito? | **Não encontrei nenhum limiar numérico adotado pela ANS.** Resumo de 2025 (congresso, PMC12806705): "diferentemente da Conitec, a ANS não possui diretrizes claras para a avaliação de custo-efetividade" | parcialmente verificada |
| Discussão em 2023 | Futuro da Saúde: a ANS pretendia definir parâmetros de avaliação econômica e limiares e planejava seminário. https://futurodasaude.com.br/ans-parametros-de-avaliacao-economica-e-limiares/ (data exata não confirmada) | parcialmente verificada |
| Retomada em 2026 | Futuro da Saúde (abril de 2026, segundo o resumo da busca): a ANS retomou o tema, iniciou avaliação interna, deve contratar com a OPAS um estudo do IECS (Argentina) e pretende se basear nos limiares da Conitec. https://futurodasaude.com.br/ans-limiar-custo-efetividade-incorporacao-tecnologias/ | parcialmente verificada (fonte jornalística única) |
| Consulta/audiência pública da ANS específica sobre limiar | **Não encontrada.** As CPs localizadas (nº 167 e nº 175, 2026) tratam de tecnologias do Rol, não de limiar | não verificada |
| STF | Informativo 1075 (nov/2022): a avaliação econômica e a análise de impacto financeiro na atualização do rol são necessárias à sustentabilidade do setor. ADI 7.265 (voto de set/2025 localizado, não lido) | parcialmente verificada |

---

## 5. Diretriz de Avaliação Econômica (Ministério da Saúde)

| Afirmação | O que foi encontrado | Status |
|---|---|---|
| Edição vigente em nov/2026 | **Existe 3ª edição.** A página de Diretrizes Metodológicas da Conitec lista "Diretriz de Avaliação Econômica – 3ª edição"; o PDF da BVS traz "3ª edição – 2026 – versão eletrônica"; elaborada pelo Ministério da Saúde com o Hospital Moinhos de Vento. Versão preliminar foi a consulta pública da Rebrats em 2025 (contribuições até 12 de setembro). PDF final: https://bvsms.saude.gov.br/bvs/publicacoes/diretrizes_metodologicas_diretriz_avaliacao_economica_3ed.pdf ; versão de consulta: https://rebrats.saude.gov.br/images/Documentos/2025/Diretriz_de_Avaliacao_Economica_3a_ed_2025.pdf | parcialmente verificada (data exata de publicação não confirmada) |
| Taxa de desconto na **3ª edição** | **NÃO VERIFICADA.** O sumário do PDF final tem a seção "2.11.1.1 Recomendação sobre taxa de desconto", mas o buscador não devolveu o valor. Tentei seis buscas diferentes. Não afirmar 5% para a 3ª edição sem abrir o PDF | **não verificada** |
| Taxa de desconto na **2ª edição (2014)** | 5% ao ano para custos e efeitos; análise de sensibilidade com 0% e 10%. Trecho: "O horizonte temporal preferencial é o de tempo de vida, e a taxa de desconto padrão é de 5% para custo e efetividade" (Ribeiro et al., J Bras Econ Saúde 2016, resumo da diretriz). PDF da 2ª ed.: https://bvsms.saude.gov.br/bvs/publicacoes/diretrizes_metodologicas_diretriz_avaliacao_economica.pdf (página não conferida) | parcialmente verificada |
| Perspectiva | 2ª edição: perspectiva do SUS no caso de referência (resumo de Ribeiro et al.). 3ª edição: há tabela de perspectivas; recomendação não confirmada | parcialmente verificada (2ª ed.) / não verificada (3ª ed.) |
| Desfecho preferido | 3ª edição, segundo trecho de busca: preferência por anos de vida, "mais especificamente QALY" e, depois, anos de vida ganhos; outros desfechos em situações justificadas (por exemplo, eventos agudos sem sequelas de longo prazo) | parcialmente verificada |

---

## 6. PIB per capita do Brasil (IBGE)

| Ano | Valor | Fonte | Status |
|---|---|---|---|
| 2021, primeira estimativa (Contas Nacionais Trimestrais, mar/2022) | R$ 40.688 (uma reportagem dá R$ 40.688,10) | Agência IBGE: https://agenciadenoticias.ibge.gov.br/agencia-noticias/33066-pib-cresce-4-6-em-2021-e-supera-perdas-da-pandemia.html (trecho de busca; texto cortado) | parcialmente verificada |
| 2021, revisado (Sistema de Contas Nacionais anual, nov/2023) | R$ 42.247,52 | Agência IBGE / Agência Gov, 08/11/2023: https://agenciagov.ebc.com.br/noticias/202311/pib-cresce-4-8-e-totaliza-r-9-trilhoes-em-2021 | parcialmente verificada |
| 2025 (divulgado em 03/03/2026) | R$ 59.687,49; PIB de R$ 12,7 trilhões; alta real de 1,9% no per capita | Agência IBGE: https://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/45968-pib-cresce-2-3-em-2025-e-fecha-o-ano-em-r-12-7-trilhoes | parcialmente verificada |

**Contas minhas (não são de fonte):** R$ 40.000 ÷ R$ 59.687,49 ≈ 0,67 PIB per capita de 2025; R$ 120.000 ≈ 2,01 PIB per capita de 2025. Ou seja, como o valor nominal não foi atualizado, "≈ 1 PIB per capita" só vale para 2021. Sugestão de redação: "R$ 40 mil por QALY, valor que correspondia a cerca de 1 PIB per capita em 2021".

---

## 7. Estimativas de custo de oportunidade ("lado da oferta") para o Brasil

Segundo o PubMed:

**Woods B, Revill P, Sculpher M, Claxton K.** Country-Level Cost-Effectiveness Thresholds: Initial Estimates and the Need for Further Research. *Value Health*. 2016;19(8):929-935. PMID 27987642; PMCID PMC5193154. [DOI 10.1016/j.jval.2016.02.017](https://doi.org/10.1016/j.jval.2016.02.017)
- Citação: **verificada (PubMed; texto integral lido via PMC)**.
- O texto principal **não traz o valor do Brasil**: cita Malawi, Camboja, El Salvador, Cazaquistão, Luxemburgo e EUA, e remete os demais países ao material suplementar. Trecho: "US dollar CET values with and without PPP adjustment are provided in the Supplemental Materials". Valores em dólares de 2013.
- Valor para o Brasil: **US$ PPP 3.210 – 10.122** por QALY; sem ajuste PPP, **US$ 2.393 – 7.544**. Fonte: trecho de busca da tabela do CHE Research Paper 109 (https://www.york.ac.uk/media/che/documents/papers/researchpapers/CHERP109_cost-effectiveness_threshold_LMICs.pdf) e de editorial dos Cadernos de Saúde Pública 2017;33(4):e00040717 (https://www.scielosp.org/article/csp/2017.v33n4/e00040717/en/), que cita "$PPP 3,210 – $PPP 10,122". Status: **parcialmente verificada** (suplemento não aberto; a atribuição das duas colunas a PPP e não PPP é inferência pela ordem de grandeza).

**Pichon-Riviere A, Drummond M, Palacios A, Garcia-Marti S, Augustovski F.** Determining the efficiency path to universal health coverage: cost-effectiveness thresholds for 174 countries based on growth in life expectancy and health expenditures. *Lancet Glob Health*. 2023;11(6):e833-e842. PMID 37202020. [DOI 10.1016/S2214-109X(23)00162-6](https://doi.org/10.1016/S2214-109X(23)00162-6)
- Citação e achados gerais: **verificada (PubMed, resumo)**. Trecho: "Cost-effectiveness thresholds per QALY were less than 1 GDP per capita in 168 (97%) of the 174 countries"; faixa de US$ 87 (RD Congo) a US$ 95.958 (EUA).
- Valor para o Brasil: **US$ 8.462 por QALY (US$ 6.173 – 14.894), equivalente a 0,95 PIB per capita (0,70 – 1,68)**. Fonte: trecho de busca atribuído à tabela do artigo. Status: **parcialmente verificada** (tabela não aberta; sem PMC). Conferir no PDF da Lancet ou na ferramenta do IECS: https://iecs.org.ar/en/thresholds/
- Trabalho anterior do mesmo grupo (2017, documento técnico): Brasil entre 0,62 e 1,05 PIB per capita por QALY, segundo fontes secundárias. Parcialmente verificada.

Leitura didática possível (com as ressalvas acima): as duas estimativas "do lado da oferta" ficam em torno de ou abaixo de 1 PIB per capita; a de Woods fica bem abaixo.

---

## 8. NICE (Inglaterra)

| Afirmação | O que foi encontrado | Status |
|---|---|---|
| Faixa histórica | £20.000 – £30.000 por QALY | Várias fontes; texto de Woods 2016 (PMC): "values of £20,000 to £30,000 ... have commonly been applied in the United Kingdom" | verificada para o uso histórico (PubMed) |
| **Mudança em 2025/2026** | **Sim.** Faixa passou a **£25.000 – £35.000 por QALY**. Página do NICE "Changes to NICE's cost-effectiveness thresholds confirmed" (https://www.nice.org.uk/news/articles/changes-to-nice-s-cost-effectiveness-thresholds-confirmed): o NICE aplicaria os novos limiares "as soon as NICE has the power to do so, following a change in regulations". Fontes secundárias: anúncio em dezembro de 2025, **vigência a partir de abril de 2026**; primeira alteração em mais de duas décadas; vale para avaliações novas e em andamento, sem reabrir decisões negativas; requer direção do Secretário de Estado e mudança nos regulamentos do NICE. Um resumo da ISPOR Europe 2026 diz que os comitês aplicam a nova faixa desde 1º de abril de 2026 | parcialmente verificada (página do NICE não aberta; data exata do anúncio e ato legal não confirmados) |
| HST | £100.000 por QALY, com peso de 1 a 3 para ganhos de 10 a 30 QALYs por paciente, chegando a £300.000. **Não foi alterado** pela mudança de 2026, segundo fontes secundárias | parcialmente verificada (fontes secundárias) |
| Severity modifier (2022) | Manual PMG36 (2022): substituiu o critério de fim de vida. Pesos: **×1,2** para shortfall absoluto de 12 a menos de 18 QALYs ou proporcional de 0,85 a menos de 0,95; **×1,7** para absoluto ≥ 18 ou proporcional ≥ 0,95. Usa-se o que indicar maior gravidade. Capítulo: https://www.nice.org.uk/process/pmg36/chapter/committee-recommendations-2 | parcialmente verificada (os números vieram de análise secundária que descreve a proposta; a tabela final do PMG36 não foi lida) |
| Substituiu o fim de vida | Consistente em fontes secundárias (Value in Health 2023, "The Evolving Nature of HTA: A Critical Appraisal of NICE's New Methods Manual") | parcialmente verificada |
| Taxa de desconto | 3,5% ao ano para custos e efeitos no caso de referência; 1,5% como taxa fora do caso de referência em circunstâncias específicas. O NICE declarou ver fundamento para 1,5%, mas manteve 3,5% | parcialmente verificada (documentos de consulta do NICE via busca) |
| Outras mudanças 2026 | NICE anunciou a adoção de um novo conjunto de valores EQ-5D-5L, sujeita a consulta pública; implementação não confirmada | parcialmente verificada |

Sugestão de redação segura: "Na Inglaterra, o NICE usou por mais de vinte anos a faixa de £20 mil a £30 mil por QALY; em abril de 2026 ela passou a £25 mil a £35 mil."

---

## 9. Casos reais para inspirar tecnologias fictícias

**(a) Onasemnogeno abeparvoveque (Zolgensma), AME tipo I.** Relatório de Recomendação Conitec nº 793, dezembro de 2022. Recomendação final de incorporação (115ª Reunião Ordinária, 01/12/2022) para pacientes de até 6 meses com AME tipo I fora de ventilação invasiva acima de 16 horas por dia; Portaria SCTIE/MS nº 172, de 06/12/2022; com acordo de compartilhamento de risco. Um trecho de busca do relatório mostra "RCEI de R$ 883.587 por QALY", sem identificar o comparador nem o cenário: **não usar esse número sem abrir o PDF**. PDF: https://docs.bvsalud.org/biblioref/2023/05/1434575/20221207_relatorio_zolgensma_ame_tipo_i_793_2022.pdf. Novidade: Relatório nº 1064 (ampliação para menores de 2 anos): em dezembro de 2025 o Comitê de Medicamentos recomendou por maioria simples a **não ampliação**; a portaria citada pelo InfoSUS-SC (SCTIE/MS nº 103, de 08/09/2026) não foi confirmada. Status: parcialmente verificada.

**(b) Nusinersena.** Relatório nº 449 (2019): recomendação final de incorporação para AME 5q tipo I na 76ª Reunião Ordinária (04/04/2019); Portaria SCTIE nº 24, de 24/04/2019; condicionada a reavaliação em três anos. Relatório nº 595 (maio de 2021): após audiência pública, incorporação para tipo II (diagnóstico até 18 meses) e não incorporação para tipo III; Portaria SCTIE/MS nº 26, de 01/06/2021. RCEI não recuperada. Análise crítica: Cad Saúde Pública 2019;35(8):e00099619. Status: parcialmente verificada.

**(c) Oncologia.** Não confirmei um caso único com meses de sobrevida e RCEI. O que há: (i) nivolumabe para câncer gástrico avançado em primeira linha, não incorporado (Portaria SECTICS/MS nº 30/2025, publicada em 07/05/2025, segundo a página de recomendações de 2025 da Conitec); (ii) pembrolizumabe, quatro consultas públicas em maio de 2026 (pulmão, esôfago, mama triplo negativo, colo do útero) com recomendação preliminar de não incorporação por incerteza de custo-benefício e impacto orçamentário; (iii) resumo JAFF PE-055 (fev/2026): de 9 tecnologias oncológicas incorporadas em 2022–2024, 5 tinham RCEI acima do limiar e 4 dessas eram para cânceres raros. Para o jogo, usar tecnologia fictícia sem números atribuídos a um caso real. Status: parcialmente verificada; números de RCEI não verificados.

**(d) Imunização.** Nirsevimabe: Relatório de Recomendação nº 974/2025; 137ª Reunião Ordinária (fevereiro de 2025); Portaria SECTICS/MS nº 15, de 28/02/2025; para prematuros (< 37 semanas) e menores de 2 anos com comorbidades; oferta no SUS a partir de fevereiro de 2026. Vacina VSR A e B recombinante para gestantes: decidida na mesma reunião, segundo imprensa; número do relatório e portaria não confirmados. Vacina meningocócica ACWY para adolescentes de 11 e 12 anos: Relatório nº 556 (2020). RCEI de nenhum deles recuperada. Status: parcialmente verificada; RCEI não verificada.

**(e) Prótese de quadril e catarata (literatura internacional, segundo o PubMed).**
- Kunkel ST et al. The Cost-Effectiveness of Total Hip Arthroplasty in Patients 80 Years of Age and Older. *J Arthroplasty*. 2018;33(5):1359-1367. PMID 29276115. [DOI 10.1016/j.arth.2017.11.063](https://doi.org/10.1016/j.arth.2017.11.063). Resumo: artroplastia total de quadril versus tratamento não cirúrgico aos 80 anos, EUA, perspectiva da sociedade: "incremental cost-effectiveness ratio was $7307 per QALY" (dólares de 2016). **Verificada (PubMed).**
- Catarata: não localizei nesta sessão um estudo com custo por QALY da cirurgia versus não operar. Ver o caso de dominância em (i). Não verificada.

**(f) Saúde mental (segundo o PubMed; não há dado brasileiro confirmado).**
- Siskind D, Baingana F, Kim J. Cost-effectiveness of group psychotherapy for depression in Uganda. *J Ment Health Policy Econ*. 2008;11(3):127-133. PMID 18806302 (sem DOI no PubMed). Resumo: psicoterapia de grupo com sessões de reforço, "I$ 1,150 per QALY", abaixo do PIB per capita de Uganda. **Verificada (PubMed).**
- Aldridge LR et al. *Glob Ment Health (Camb)*. 2022;9:499-507. PMID 36618735. [DOI 10.1017/gmh.2022.54](https://doi.org/10.1017/gmh.2022.54). Nepal, intervenção psicológica por trabalhadores da atenção primária: "$4422 per QALY gained (95% confidence interval: $2484 to $9550)", dólares internacionais de 2020. **Verificada (PubMed).**

**(g) Implante coclear (segundo o PubMed).**
- Emmett SD et al. Moving Beyond GDP: Cost Effectiveness of Cochlear Implantation and Deaf Education in Latin America. *Otol Neurotol*. 2016;37(8):1040-1048. PMID 27518131. [DOI 10.1097/MAO.0000000000001148](https://doi.org/10.1097/MAO.0000000000001148). Inclui o Brasil (coautor da USP); desfecho em DALY: implante coclear custo-efetivo em todos os países (razão custo-efetividade/PIB per capita de 0,69 a 2,96); educação de surdos muito custo-efetiva (0,07 a 0,93). Valor isolado do Brasil não está no resumo. **Verificada (PubMed).**
- Crathorne L et al. *Clin Otolaryngol*. 2012;37(5):342-354. PMID 22928754. [DOI 10.1111/coa.12011](https://doi.org/10.1111/coa.12011). Implante bilateral em adultos: provavelmente custo-efetivo só acima de £62.000 por QALY. **Verificada (PubMed).** Bom exemplo de que a "segunda unidade" rende menos por real.
- Conitec: Relatório nº 99 (implante coclear e prótese ancorada no osso) e Portaria nº 18/2014, segundo trechos de busca. Parcialmente verificada.

**(h) Cuidados paliativos domiciliares.**
- Gomes B, Calanzani N, Curiale V, McCrone P, Higginson IJ. Effectiveness and cost-effectiveness of home palliative care services for adults with advanced illness and their caregivers. *Cochrane Database Syst Rev*. 2013;(6):CD007760. PMID 23744578. [DOI 10.1002/14651858.CD007760.pub2](https://doi.org/10.1002/14651858.CD007760.pub2). Resumo: maior chance de morrer em casa (OR 2,21; IC95% 1,31 a 3,71; NNTB 5), redução pequena mas significativa da carga de sintomas; "Evidence on cost-effectiveness (six studies) is inconclusive". **Verificada (PubMed).** Bom caso para mostrar o que o QALY capta mal.
- Brasil: Política Nacional de Cuidados Paliativos, Portaria GM/MS nº 3.681, de 07/05/2024; previsão de 485 equipes matriciais e 836 assistenciais (cerca de 1,3 mil). Parcialmente verificada (imprensa e cópias da portaria via busca).

**(i) Dominância (mais barata e melhor).**
- Spekreijse L et al. BICAT-NL. *Lancet*. 2023;401(10392):1951-1962. PMID 37201546. [DOI 10.1016/S0140-6736(23)00525-1](https://doi.org/10.1016/S0140-6736(23)00525-1). Cirurgia de catarata bilateral no mesmo dia versus em dois tempos: não inferior em efetividade, custos para a sociedade € 403 menores, 100% de probabilidade de ser custo-efetiva em toda a faixa de disposição a pagar testada. **Verificada (PubMed).** Rigorosamente, é "não inferior e mais barata".
- Gibbs NK et al. *BMJ Glob Health*. 2025;10(11). PMID 41238226. [DOI 10.1136/bmjgh-2025-020833](https://doi.org/10.1136/bmjgh-2025-020833). Paquistão, depressão perinatal, intervenção por pares com apoio de tecnologia versus programa da OMS: +0,005 QALY e −US$ 52 por paciente ("both more effective and less costly"). **Verificada (PubMed).** Dominância estrita; serve também para (f).
- Conitec: relatório de oficina de 2021 lista como "Dominante" ranibizumabe para degeneração macular relacionada à idade, vacina de hepatite A e pegvisomanto para acromegalia (https://www.gov.br/conitec/pt-br/midias/pdf/2021/20211202_relatorio_oficina_limiares.pdf). Parcialmente verificada; comparadores não conferidos.

---

## 10. Princípios do SUS

| Fonte | Redação encontrada | Status |
|---|---|---|
| **CF/1988, art. 196** | "A saúde é direito de todos e dever do Estado", garantido mediante políticas sociais e econômicas que visem à redução do risco de doença e ao "acesso universal e igualitário" às ações e serviços | parcialmente verificada (fragmentos; Planalto não aberto) |
| **CF/1988, art. 198** | Ações e serviços públicos de saúde integram rede regionalizada e hierarquizada e constituem um sistema único, com diretrizes; inciso II: "atendimento integral, com prioridade para as atividades preventivas, sem prejuízo dos serviços assistenciais" (o inciso I trata de descentralização e o III de participação da comunidade; estes dois não apareceram nos trechos) | parcialmente verificada |
| **Lei 8.080/1990, art. 7º** | "I - universalidade de acesso aos serviços de saúde em todos os níveis de assistência;" "II - integralidade de assistência, entendida como conjunto articulado e contínuo das ações e serviços preventivos e curativos, individuais e coletivos, exigidos para cada caso em todos os níveis de complexidade do sistema;" "IV - igualdade da assistência à saúde, sem preconceitos ou privilégios de qualquer espécie;" | parcialmente verificada (publicação original da Câmara e LegJur via busca) |
| "Equidade" | **Confirmado: a palavra "equidade" não aparece nos incisos I, II e IV do art. 7º; a lei diz "igualdade da assistência".** A Constituição diz "acesso universal e igualitário". Equidade é princípio doutrinário e de políticas do SUS. O LegJur registra alteração do art. 7º pela Lei 15.126, de 28/04/2025, cujo conteúdo não consegui ler: conferir se acrescentou inciso relevante | parcialmente verificada |

Redação sugerida: "A Constituição fala em acesso 'universal e igualitário' (art. 196) e a Lei 8.080 em 'igualdade da assistência' (art. 7º, IV); a equidade é a leitura que o SUS consolidou desses dispositivos."

---

## Pendências (abrir a fonte primária antes de publicar)

1. **PDF da Conitec 2022**: lista literal das situações de limiar alternativo na versão final; redação da recomendação sobre R$ 35.000 por ano de vida ganho; ano-base do PIB per capita; se "R$ 120.000" está escrito; regra de atualização do valor.
2. **Diretriz de Avaliação Econômica, 3ª ed. (2026)**: taxa de desconto (seção 2.11.1.1), faixa da análise de sensibilidade, perspectiva do caso-base, valor do limiar reproduzido, data de publicação e página. Este é o item mais crítico: a taxa de 5% só está sustentada para a 2ª edição.
3. **NICE**: data exata do anúncio, ato legal, tabela final do severity modifier no PMG36 e texto atual sobre HST.
4. **Pichon-Riviere 2023 e Woods 2016**: valor do Brasil na tabela/suplemento.
5. **RCEI dos relatórios Conitec** nº 793, 449, 595, 974, 556 e 1064 (nenhuma confirmada).
6. **Planalto**: redação consolidada do art. 19-Q (após Lei 15.120/2025), do art. 7º da Lei 8.080 (após Lei 15.126/2025) e do art. 18 do Decreto 7.646 (após Decreto 12.716/2025).
7. **ANS**: se houve norma, consulta pública ou resultado do estudo com o IECS sobre limiar depois de abril de 2026.
8. Para liberar a checagem direta, é preciso permitir na rede da sessão os hosts: `www.gov.br`, `www.planalto.gov.br`, `bvsms.saude.gov.br`, `rebrats.saude.gov.br`, `www.nice.org.uk`, `pmc.ncbi.nlm.nih.gov`, `www.thelancet.com`, `agenciadenoticias.ibge.gov.br`.
