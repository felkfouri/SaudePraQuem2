# QALY — críticas, respostas e alternativas: checagem de referências

Checagem feita em 13 nov. 2026 para a página "O que é o QALY? Vantagens e limitações".

## Como ler este arquivo

**Fontes usadas.** Os metadados bibliográficos (autores, título, periódico, volume, páginas, DOI, PMID) e os resumos vêm do PubMed (ferramentas MCP `get_article_metadata`, `lookup_article_by_citation`, `search_articles`). Os fatos legais, regulatórios e de livros vêm de buscas na web (WebSearch).

**Limitação importante desta sessão.** O ambiente bloqueou a abertura direta de páginas (WebFetch e `curl` recusados para congress.gov, law.cornell.edu, ssa.gov, nice.org.uk, gov.uk, icer.org, gov.br, doi.org, api.crossref.org, PMC etc.). Portanto:

- nenhuma página web foi aberta e lida na íntegra; o que há são os trechos e resumos devolvidos pelo buscador, com a URL de origem;
- "trecho literal" abaixo significa trecho devolvido entre aspas pelo buscador, não leitura integral do documento;
- os DOIs foram copiados do registro PubMed, sem teste de resolução em doi.org;
- todo item que dependeu só de busca web está marcado como **parcialmente verificada**, mesmo quando várias fontes concordam.

**Legenda de status.**

- **verificada**: registro PubMed lido (metadados + resumo) e coerente com a citação.
- **parcialmente verificada**: metadados confirmados mas sem resumo disponível, ou confirmação apenas por fonte secundária / trecho de buscador.
- **não verificada**: não foi possível conferir; não usar sem checar.

**Ano de publicação.** O PubMed às vezes devolve só a data Epub. Quando o ano do fascículo foi deduzido do volume (e não lido diretamente), isso está indicado como "Epub AAAA".

**Atribuição.** Segundo o PubMed: todos os PMIDs e DOIs listados foram obtidos dos registros PubMed nesta sessão; cada DOI aparece como link.

---

## Correções às citações do briefing (ler primeiro)

| Como veio no briefing | O que o PubMed mostra |
|---|---|
| Neumann & Cohen 2018, **NEJM**, "QALYs in 2018—advantages and concerns" | É **JAMA** 2018;319(24):2473-4 (PMID 29800152). Não é NEJM. |
| Rand & Kesselheim 2021, Health Aff, "…a review of **legal strategies and policy options**" | O título real é "Controversy Over Using Quality-Adjusted Life-Years In Cost-Effectiveness Analyses: **A Systematic Literature Review**" (PMID 34495724). Não achei artigo dos autores com o subtítulo do briefing. |
| Kwon 2018 (crianças) | Kwon J, et al. **Med Decis Making** 2018;38(3):277-305 (Epub 2017). Há um artigo-irmão em Qual Life Res 2019. |
| Hughes 2005 (paliativos) | Hughes J. **Health Care Anal** 2005;13(4):289-301. Não é Palliat Med. |
| Al-Janabi 2016, "PharmacoEconomics/MDM" | O de 2016 é **Med Decis Making** 36(2):176-86. Em PharmacoEconomics o artigo é de **2011** ("QALYs and carers"). Há ainda Health Econ 2016 (meningite). |
| Finch, Brazier & Mukuria 2018 | **Value Health 2019**;22(1):50-61 (Epub 2018). |
| Dolan & Stalmeier 2003, "maximal endurable time" | O título é "The validity of time trade-off values in calculating QALYs: constant proportional time trade-off versus the proportional heuristic". "Maximal endurable time" é o conceito testado, não o título. |
| Shah 2013 (preferências sociais por gravidade) | A revisão sobre **gravidade** é Shah 2009 (Health Policy). O estudo empírico de 2013/2014 (Eur J Health Econ) é sobre **fim de vida**. |
| Richardson et al. 2015 | Med Decis Making 2015;35(3):276-91 (Epub 2014). |
| Claxton et al. 2011 Health Econ | Health Econ 2011;20(1):2-15 (Epub 2010). Confirmado. |

---

## A. Origem e fundamentos do QALY

### Quem cunhou o termo e quando

- **O que se confirmou (fontes secundárias):** o termo "quality-adjusted life year" aparece impresso pela primeira vez em Zeckhauser & Shepard, 1976. Uma obra de referência tipo wiki acrescenta que a primeira menção estaria na tese de doutorado de Joseph S. Pliskin em Harvard (1974). Uma matéria de 2025 ("The QALY has turned 50…", Managed Healthcare Executive) diz que os dois são "frequentemente creditados" como os primeiros a usar o termo em publicação revisada por pares.
- **O que não se confirmou:** não li o texto de 1976; a atribuição repousa em fontes secundárias.
- **Redação segura para o site:** "o termo aparece em 1976, em artigo de Zeckhauser e Shepard; a ideia de ajustar anos de vida pela qualidade é anterior (Klarman 1968; Fanshel & Bush 1970; Torrance 1972)". Evitar "inventaram o QALY".

### Referências

1. **Klarman HE, Francis JO, Rosenthal GD. Cost effectiveness analysis applied to the treatment of chronic renal disease. Med Care. 1968;6(1):48-54.**
   - DOI: não confirmado. PMID: não consta no PubMed (busca por autor/ano/título sem resultado).
   - Argumento: segundo uma retrospectiva de 2008 (Nauenberg, ISPOR), o artigo é creditado como origem da referência de cerca de US$ 50 mil por QALY para diálise; o mesmo autor sustenta que o ajuste de qualidade foi feito "na direção errada". Conteúdo original não lido.
   - Conferência: WebSearch (título, periódico e ano confirmados em bibliografias; **volume e páginas não confirmados por fonte independente**).
   - URL: https://www.ispor.org/heor-resources/presentations-database/presentation/ispor-13th-annual-international-meeting/the-50-000-qaly-threshold-reconsidered-a-retrospective-on-klarmans-original-paper-with-an-eye-to-the-future
   - Status: **parcialmente verificada**.

2. **Fanshel S, Bush JW. A health-status index and its application to health-services outcomes. Oper Res. 1970;18(6):1021-66.**
   - DOI: não confirmado. PMID: não consta no PubMed.
   - Argumento: atribui pesos em escala cardinal a estados de saúde, formando o Health Status Index.
   - Conferência: WebSearch (registro RePEc/IDEAS confirma volume, fascículo e páginas).
   - URL: https://ideas.repec.org/a/inm/oropre/v18y1970i6p1021-1066.html
   - Status: **parcialmente verificada**.

3. **Torrance GW, Thomas WH, Sackett DL. A utility maximization model for evaluation of health care programs. Health Serv Res. 1972;7(2):118-33.**
   - DOI: não consta. PMID: 5044699. PMCID: PMC1067402. URL: https://pubmed.ncbi.nlm.nih.gov/5044699/
   - Argumento: descreve uma escala linear de utilidade em saúde, com instrumentos de medida, que permite ordenar programas pela razão efetividade/custo ou escolher o conjunto de máxima efetividade sob restrição orçamentária.
   - Conferência: PubMed (metadados + resumo). Status: **verificada**.

4. **Zeckhauser R, Shepard D. Where now for saving lives? Law Contemp Probl. 1976;40(4):5-45.**
   - DOI: não confirmado. PMID: não consta no PubMed.
   - Argumento: segundo fontes secundárias, propõe medir o benefício em "quality-adjusted life-years saved"; primeira aparição impressa do termo.
   - Conferência: WebSearch (repositório da Duke Law confirma volume, número e páginas; texto não lido).
   - URL: https://scholarship.law.duke.edu/lcp/vol40/iss4/2
   - Status: **parcialmente verificada**.

5. **Weinstein MC, Stason WB. Foundations of cost-effectiveness analysis for health and medical practices. N Engl J Med. 1977;296(13):716-21.**
   - DOI: [10.1056/NEJM197703312961304](https://doi.org/10.1056/NEJM197703312961304). PMID: 402576. URL: https://pubmed.ncbi.nlm.nih.gov/402576/
   - Argumento: recursos limitados exigem comparar custo e benefício esperado; a qualidade de vida entra no cálculo como ajuste da expectativa de vida, e custos e benefícios futuros são descontados.
   - Conferência: PubMed (metadados + resumo). Status: **verificada**.

6. **Williams A. Economics of coronary artery bypass grafting. Br Med J (Clin Res Ed). 1985;291(6491):326-9.**
   - DOI: [10.1136/bmj.291.6491.326](https://doi.org/10.1136/bmj.291.6491.326). PMID: 3160430. PMCID: PMC1416615. URL: https://pubmed.ncbi.nlm.nih.gov/3160430/
   - Argumento: compara o custo por QALY da revascularização miocárdica com outros usos do orçamento do NHS; o resultado é bom para angina grave com doença extensa e piora muito nos casos leves. O próprio autor diz que os dados são "crus".
   - Conferência: PubMed (metadados + resumo). Reimpresso em Bull World Health Organ 2001;79(7):681-4 (PMID 11484733).
   - Status: **verificada**.

7. **Pliskin JS, Shepard DS, Weinstein MC. Utility functions for life years and health status. Oper Res. 1980;28(1):206-24.**
   - DOI: não confirmado. PMID: não consta no PubMed.
   - Argumento: usa teoria da utilidade multiatributo para derivar a forma da função de utilidade sobre anos de vida e estado de saúde, aplicada à decisão de revascularização. As três condições (independência de utilidade, trade-off proporcional constante, neutralidade ao risco) aparecem atribuídas a este artigo em fonte secundária tipo wiki; **não li a formulação original**.
   - Conferência: WebSearch (RePEc confirma volume e páginas).
   - URL: https://ideas.repec.org/a/inm/oropre/v28y1980i1p206-224.html
   - Status: **parcialmente verificada**.

8. **Weinstein MC, Torrance G, McGuire A. QALYs: the basics. Value Health. 2009;12 Suppl 1:S5-9.**
   - DOI: [10.1111/j.1524-4733.2009.00515.x](https://doi.org/10.1111/j.1524-4733.2009.00515.x). PMID: 19250132. URL: https://pubmed.ncbi.nlm.nih.gov/19250132/
   - Argumento: revisão do QALY "convencional" e de seus pressupostos, distinguindo-o de variantes como QALYs ponderados por equidade (descrição de fonte secundária; o PubMed não traz resumo).
   - Conferência: PubMed (metadados, sem resumo). A lista de pressupostos do artigo não foi lida.
   - Status: **parcialmente verificada**.

9. **Whitehead SJ, Ali S. Health outcomes in economic evaluation: the QALY and utilities. Br Med Bull. 2010;96:5-21.**
   - DOI: [10.1093/bmb/ldq033](https://doi.org/10.1093/bmb/ldq033). PMID: 21037243. URL: https://pubmed.ncbi.nlm.nih.gov/21037243/
   - Argumento: há consenso sobre a necessidade de uma medida padrão comparável entre doenças; as controvérsias são a cobertura limitada dos benefícios, a "cegueira" à equidade, os pressupostos teóricos, a escolha do instrumento e de quem valora os estados.
   - Conferência: PubMed (metadados + resumo). Boa fonte didática única para a página.
   - Status: **verificada**.

---

## B. Vantagens e defesa do QALY

10. **Claxton K, Martin S, Soares M, Rice N, Spackman E, Hinde S, et al. Methods for the estimation of the National Institute for Health and Care Excellence cost-effectiveness threshold. Health Technol Assess. 2015;19(14):1-503, v-vi.**
    - DOI: [10.3310/hta19140](https://doi.org/10.3310/hta19140). PMID: 25692211. PMCID: PMC4781395. URL: https://pubmed.ncbi.nlm.nih.gov/25692211/
    - Argumento: o limiar deve representar a saúde perdida em outro lugar do sistema quando um gasto novo desloca cuidado existente. Estimativa central: **£12.936 por QALY** (gasto de 2008, mortalidade 2008–10), com probabilidade 0,89 de estar abaixo de £20.000 e 0,97 de estar abaixo de £30.000.
    - Conferência: PubMed (metadados + resumo; números copiados do resumo). Status: **verificada**.

11. **McCabe C, Claxton K, Culyer AJ. The NICE cost-effectiveness threshold: what it is and what that means. Pharmacoeconomics. 2008;26(9):733-44.**
    - DOI: [10.2165/00019053-200826090-00004](https://doi.org/10.2165/00019053-200826090-00004). PMID: 18767894. URL: https://pubmed.ncbi.nlm.nih.gov/18767894/
    - Argumento: o limiar é o ponto a partir do qual outros critérios entram; decisões positivas acima dele reduzem a saúde da população, e usar pesos de equidade exige conhecer as características de quem arca com o custo de oportunidade.
    - Conferência: PubMed (metadados + resumo). Status: **verificada**.

12. **Culyer AJ. Cost-effectiveness thresholds in health care: a bookshelf guide to their meaning and use. Health Econ Policy Law. 2016;11(4):415-32.**
    - DOI: [10.1017/S1744133116000049](https://doi.org/10.1017/S1744133116000049). PMID: 26906561. URL: https://pubmed.ncbi.nlm.nih.gov/26906561/
    - Argumento: o limiar não pode ser fixado independentemente do orçamento; fixá-lo alto ou baixo demais custa vidas, e não fixar nenhum também implica mortes e morbidade evitáveis.
    - Conferência: PubMed (metadados + resumo). Status: **verificada**.

13. **Neumann PJ, Cohen JT. QALYs in 2018—Advantages and Concerns. JAMA. 2018;319(24):2473-4.**
    - DOI: [10.1001/jama.2018.6072](https://doi.org/10.1001/jama.2018.6072). PMID: 29800152. URL: https://pubmed.ncbi.nlm.nih.gov/29800152/
    - Argumento: revê a justificativa para medir desfechos em QALYs e discute vantagens e limitações; fontes secundárias relatam que os autores listam as preocupações (potencial de discriminação por idade e deficiência, uso como ferramenta de racionamento, não distinguir período longo em estado moderado de período curto em estado grave) e defendem a medida.
    - Conferência: PubMed (metadados, sem resumo) + WebSearch (página do CEVR/Tufts). Texto não lido.
    - Status: **parcialmente verificada**. **Atenção: é JAMA, não NEJM.**

14. **Rand LZ, Kesselheim AS. Controversy over using quality-adjusted life-years in cost-effectiveness analyses: a systematic literature review. Health Aff (Millwood). 2021;40(9):1402-10.**
    - DOI: [10.1377/hlthaff.2021.00343](https://doi.org/10.1377/hlthaff.2021.00343). PMID: 34495724. URL: https://pubmed.ncbi.nlm.nih.gov/34495724/
    - Argumento: separa críticas metodológicas (que pedem correção e consistência) de críticas éticas, que "não se aplicam só ao QALY" e exigem decisões políticas sobre valores sociais.
    - Conferência: PubMed (metadados + resumo). Status: **verificada** (com o título corrigido).

15. **Rand LZ, Melendez-Torres GJ, Kesselheim AS. Alternatives to the quality-adjusted life year: how well do they address common criticisms? Health Serv Res. 2023;58(2):433-44 (Epub 2022).**
    - DOI: [10.1111/1475-6773.14116](https://doi.org/10.1111/1475-6773.14116). PMID: 36537647. URL: https://pubmed.ncbi.nlm.nih.gov/36537647/
    - Argumento: não há medida "certa"; as críticas ao QALY valem também para as alternativas, e o QALY segue sendo a melhor opção quando é preciso comparar o valor social de ganhos de saúde.
    - Conferência: PubMed (metadados + resumo). Status: **verificada**.

16. **Rand LZ, Raymakers A, Rome BN. Congress' misguided plan to ban QALYs. JAMA. 2023;329(24):2125-6.**
    - DOI: [10.1001/jama.2023.8695](https://doi.org/10.1001/jama.2023.8695). PMID: 37289466. URL: https://pubmed.ncbi.nlm.nih.gov/37289466/
    - Argumento: pelo título, critica o projeto de banir o QALY no Congresso dos EUA. Sem resumo no PubMed; texto não lido.
    - Status: **parcialmente verificada**.

17. **Willke RJ, Pizzi LT, Rand LZ, Neumann P. The value of the quality-adjusted life years. Value Health. 2024;27(6):702-5.**
    - DOI: [10.1016/j.jval.2024.04.018](https://doi.org/10.1016/j.jval.2024.04.018). PMID: 38703994. URL: https://pubmed.ncbi.nlm.nih.gov/38703994/
    - Sem resumo no PubMed; texto não lido. Status: **parcialmente verificada**.

18. **Raymakers AJN, Rand LZ, Feldman WB, Kesselheim AS. An empirical investigation into concerns over quality-adjusted life-years: a review of cost-effectiveness analyses in oncology. J Cancer Policy. 2025;43:100562.**
    - DOI: [10.1016/j.jcpo.2025.100562](https://doi.org/10.1016/j.jcpo.2025.100562). PMID: 39894216. URL: https://pubmed.ncbi.nlm.nih.gov/39894216/
    - Argumento: análises de custo-efetividade em oncologia raramente fazem subgrupos por idade, doença ou deficiência, e quando fazem é por motivo clínico; os autores concluem que esse temor não justifica excluir o QALY.
    - Conferência: PubMed (metadados + final do resumo). Status: **verificada**. Desdobramento 2025.

---

## C. Limitações — a crítica e a resposta

### C1. "Um QALY é um QALY": indiferença à distribuição

19. **Cookson R, Mirelman AJ, Griffin S, Asaria M, Dawkins B, Norheim OF, et al. Using cost-effectiveness analysis to address health equity concerns. Value Health. 2017;20(2):206-12.**
    - DOI: [10.1016/j.jval.2016.11.027](https://doi.org/10.1016/j.jval.2016.11.027). PMID: 28237196. PMCID: PMC5340318. URL: https://pubmed.ncbi.nlm.nih.gov/28237196/
    - Argumento (resposta): apresenta o "plano de impacto na equidade" e duas vias — análise de impacto (quem ganha e quem perde, inclusive quem arca com o custo de oportunidade) e análise de trade-off (quanta saúde total se abre mão por uma opção mais justa, ou pesos de equidade).
    - Conferência: PubMed (metadados + resumo). Status: **verificada**.

20. **Asaria M, Griffin S, Cookson R. Distributional cost-effectiveness analysis: a tutorial. Med Decis Making. 2016;36(1):8-19 (Epub 2015).**
    - DOI: [10.1177/0272989X15583266](https://doi.org/10.1177/0272989X15583266). PMID: 25908564. PMCID: PMC4853814. URL: https://pubmed.ncbi.nlm.nih.gov/25908564/
    - Argumento: a DCEA modela a distribuição social da saúde sob cada intervenção e a avalia pelos dois objetivos (mais saúde total, menos desigualdade injusta), explicitando os juízos de valor; exemplo do rastreamento de câncer colorretal do NHS.
    - Conferência: PubMed (metadados + resumo). Status: **verificada**.

21. **Nord E, Pinto JL, Richardson J, Menzel P, Ubel P. Incorporating societal concerns for fairness in numerical valuations of health programmes. Health Econ. 1999;8(1):25-39.**
    - DOI: [10.1002/(sici)1099-1050(199902)8:1<25::aid-hec398>3.0.co;2-h](https://doi.org/10.1002/(sici)1099-1050(199902)8:1%3C25::aid-hec398%3E3.0.co;2-h). PMID: 10082141. URL: https://pubmed.ncbi.nlm.nih.gov/10082141/
    - Argumento (crítica + proposta): é preciso separar utilidade individual de valor social, incluir a gravidade como fator independente e não discriminar quem tem menor potencial de saúde; para doentes crônicos ou pessoas com deficiência, "um ano de vida ganho deve contar como um, e não menos que um". Chamam a abordagem de "cost-value analysis".
    - Conferência: PubMed (metadados + resumo). Status: **verificada**.

22. **Nord E. Cost-value analysis in health care: making sense out of QALYs. Cambridge: Cambridge University Press; 1999.** ISBN 9780521643085.
    - Argumento: propõe substituir a análise de custo-utilidade por uma baseada em preferências do público entre programas de saúde.
    - Conferência: WebSearch (livrarias e resenha em Economics and Philosophy; contagem de páginas varia entre fontes). Status: **parcialmente verificada**.

**Desdobramento 2025 (NICE).** Segundo o blog do NICE e comentários de terceiros, o NICE publicou em maio de 2025 uma atualização modular do manual (PMG36) sobre desigualdades em saúde; a DCEA entra como **análise suplementar opcional**, fora do caso-base, e a flexibilidade no limiar só se aplica quando o impacto é "substancial". Texto do manual não lido. URL: https://www.nice.org.uk/news/blogs/health-inequalities-an-update-to-nice-s-methods-for-health-technology-evaluation — Status: **parcialmente verificada**.

### C2. Idade e "fair innings"

23. **Williams A. Intergenerational equity: an exploration of the 'fair innings' argument. Health Econ. 1997;6(2):117-32.**
    - DOI: [10.1002/(sici)1099-1050(199703)6:2<117::aid-hec256>3.0.co;2-b](https://doi.org/10.1002/(sici)1099-1050(199703)6:2%3C117::aid-hec256%3E3.0.co;2-b). PMID: 9158965. URL: https://pubmed.ncbi.nlm.nih.gov/9158965/
    - Argumento: todos teriam direito a um tempo "normal" de vida saudável; essa noção de equidade entre gerações exige **mais** discriminação contra idosos do que a simples eficiência exigiria.
    - Conferência: PubMed (metadados + resumo). Status: **verificada**.
    - **Correção a crença comum:** Williams não usa o fair innings para proteger idosos do QALY; o argumento dele dá prioridade adicional aos mais jovens.

24. **Harris J. QALYfying the value of life. J Med Ethics. 1987;13(3):117-23.**
    - DOI: [10.1136/jme.13.3.117](https://doi.org/10.1136/jme.13.3.117). PMID: 3669036. PMCID: PMC1375658. URL: https://pubmed.ncbi.nlm.nih.gov/3669036/
    - Argumento (crítica): o QALY é "fatalmente falho" como método de priorização e de lidar com escassez; o artigo expõe as restrições morais que deveriam reger a alocação.
    - Conferência: PubMed (metadados + resumo). Status: **verificada**.

25. **Harris J. The value of life: an introduction to medical ethics. London: Routledge & Kegan Paul; 1985.** ISBN 9780710204370 (edição de 1985); reimpressão Routledge ISBN 9780415040327.
    - Conferência: WebSearch (registro da Wellcome Collection e livrarias). Conteúdo não lido. Status: **parcialmente verificada**.

26. **Tsuchiya A. QALYs and ageism: philosophical theories and age weighting. Health Econ. 2000;9(1):57-68.**
    - DOI: [10.1002/(sici)1099-1050(200001)9:1<57::aid-hec484>3.0.co;2-n](https://doi.org/10.1002/(sici)1099-1050(200001)9:1%3C57::aid-hec484%3E3.0.co;2-n). PMID: 10694760. URL: https://pubmed.ncbi.nlm.nih.gov/10694760/
    - Argumento: examina seis propostas (duas variantes do fair innings, pesos de fair innings, ponderação etária do DALY, "biographical life span", "prudential lifetime account") e pergunta, para cada uma, por que escolher o mais jovem e se a escolha persiste quando o idoso ganharia mais QALYs.
    - Conferência: PubMed (metadados + resumo). Status: **verificada**.

### C3. Deficiência e doenças crônicas ("double jeopardy") e a situação nos EUA

27. **Singer P, McKie J, Kuhse H, Richardson J. Double jeopardy and the use of QALYs in health care allocation. J Med Ethics. 1995;21(3):144-50.**
    - DOI: [10.1136/jme.21.3.144](https://doi.org/10.1136/jme.21.3.144). PMID: 7674278. PMCID: PMC1376689. URL: https://pubmed.ncbi.nlm.nih.gov/7674278/
    - Argumento (crítica e resposta no mesmo texto): expõe a objeção de que quem já tem deficiência sofre duas vezes (pela condição e pela baixa prioridade para salvar sua vida) e conclui que "o defensor dos QALYs tem uma resposta adequada".
    - Conferência: PubMed (metadados + resumo). Status: **verificada**.

28. **National Council on Disability. Quality-adjusted life years and the devaluation of life with disability. Washington (DC): NCD; 6 nov. 2019.**
    - URL: https://ncd.gov/report/quality-adjusted-life-years-and-the-devaluation-of-life-with-a-disability
    - Argumento: recomenda ao Congresso, a agências federais e a seguradoras rejeitar o QALY como medida de custo-efetividade; registra que o governo federal não tem política única sobre o uso de QALYs e que os entrevistados não apoiaram uma alternativa única.
    - Conferência: WebSearch (página do NCD e resumos; relatório não lido). Status: **parcialmente verificada**.

#### Fatos legais dos EUA

**(a) Affordable Care Act, seção 1182 do Social Security Act = 42 U.S.C. § 1320e-1** (acrescentada por Pub. L. 111-148, § 6301(c), 23 mar. 2010, 124 Stat. 740).

- URLs oficiais: https://www.ssa.gov/OP_Home/ssact/title11/1182.htm e https://www.govinfo.gov/link/uscode/42/1320e-1
- Trechos devolvidos pelo buscador (subseção (e)), **reunidos de fragmentos e não de leitura integral**:
  - "The Patient-Centered Outcomes Research Institute established under section 1320e(b)(1) of this title shall not develop or employ a dollars-per-quality adjusted life year (or similar measure that discounts the value of a life because of an individual's disability) as a threshold to establish what type of health care is cost effective or recommended."
  - "The Secretary shall not utilize such an adjusted life year (or such a similar measure) as a threshold to determine coverage, reimbursement, or incentive programs under subchapter XVIII."
- Outras subseções (paráfrase do buscador): o Secretário não pode usar evidência de pesquisa comparativa de efetividade de modo que trate prolongar a vida de pessoa idosa, com deficiência ou em estado terminal como de menor valor; e não pode negar cobertura **somente** com base nessa pesquisa.
- **Leitura correta:**
  - a proibição recai sobre o uso do custo-por-QALY **como limiar** ("as a threshold");
  - os destinatários são o **PCORI** e o **Secretário de Saúde no Medicare** (subchapter/title XVIII);
  - o texto não menciona Medicaid, Veterans Affairs, planos privados nem o ICER;
  - um comentário jurídico (N. Bagley, The Incidental Economist) lê que o PCORI pode calcular QALYs, só não pode usá-los como limiar; o próprio PCORI repetiu em 2020 que a lei "ainda não permite" o dólar-por-QALY como limiar.
- Status: **parcialmente verificada** (fragmentos literais via buscador; conferir a redação completa na página da SSA antes de publicar entre aspas).

**(b) Inflation Reduction Act de 2022 (Pub. L. 117-169), seção 1194(e)(2) do Social Security Act** — negociação de preços do Medicare.

- Segundo fontes que reproduzem o dispositivo (inclusive documentos do CMS e do Federal Register de 2026), ao considerar evidência de efetividade comparativa o Secretário não pode usá-la de modo que trate prolongar a vida de pessoa idosa, com deficiência ou em estado terminal como de menor valor que prolongar a vida de pessoa mais jovem, sem deficiência ou não terminal.
- **O dispositivo não cita o QALY pelo nome.** A exclusão explícita está na orientação do CMS: trecho devolvido pelo buscador diz que o CMS "will not use Quality-Adjusted Life Years (QALYs)" para determinar qualquer oferta; a orientação revisada cita também a seção 1182(e).
- URL (orientação revisada de jun. 2023): https://www.cms.gov/files/document/revised-medicare-drug-price-negotiation-program-guidance-june-2023.pdf
- **Não confirmado:** a redação literal da seção 1194(e)(2) no U.S. Code (42 U.S.C. § 1320f-3) não foi obtida; a frase em inglês que circula é a do ACA, e fontes dizem que o IRA usa linguagem equivalente.
- Status: **parcialmente verificada**.

**(c) Orientações e regra do CMS, 2025–2026.**

- A orientação final para o ano de aplicação 2028 saiu em 30 set. 2025 (aviso no Federal Register em 28 nov. 2025). Cartas de entidades de pacientes dizem que os rascunhos de 2027 e 2028 reafirmaram o compromisso de não usar QALYs.
- Em 5 nov. 2026 o CMS emitiu a regra final CMS-4215-F (Federal Register de 9 nov. 2026, documento 2026-22792, vigência em 5 dez. 2026), que codifica o programa para 2029 em diante.
- **Não confirmado:** o que a regra final de 2026 diz sobre QALY. O buscador não devolveu esse trecho.
- URLs: https://www.federalregister.gov/documents/2025/11/28/2025-21501/medicare-program-inflation-reduction-act-ira-medicare-drug-price-negotiation-program-final-guidance e https://www.govinfo.gov/content/pkg/FR-2026-11-09/pdf/2026-22792.pdf
- Status: **parcialmente verificada**.

**(d) H.R. 485, "Protecting Health Care for All Patients Act of 2023" (118º Congresso).**

- Aprovado na Câmara em **7 fev. 2024 por 211 a 208**, em votação partidária (todos os votos a favor republicanos, todos os contrários democratas). Recebido no Senado e enviado à Comissão de Finanças em 8 fev. 2024; **o Senado não votou** e o projeto caducou com o fim da legislatura.
- Conteúdo: proibiria programas federais de saúde (inclusive o FEHB) e programas estaduais com verba federal, como o Medicaid, de usar preços baseados em QALY ou medidas similares.
- URLs: https://www.congress.gov/bill/118th-congress/house-bill/485/all-info e https://clerk.house.gov/Votes/202440
- Status: **parcialmente verificada** (várias fontes concordantes via buscador).

**(e) Reapresentação: H.R. 3864, "Protecting Health Care for All Patients Act of 2025" (119º Congresso).**

- Apresentado em 10 jun. 2025 pela deputada Kat Cammack; enviado às comissões de Energy and Commerce e Ways and Means. O status devolvido é "introduced", sem ação posterior. Não achei projeto correspondente no Senado nem movimentação em 2026.
- URL: https://www.congress.gov/bill/119th-congress/house-bill/3864
- Status: **parcialmente verificada**. Conferir o status no dia da publicação.

**(f) Regra final do HHS sobre a Seção 504 (maio de 2024), 45 CFR § 84.57.**

- Em vigor desde 8 jul. 2024. Resumos jurídicos dizem que proíbe métodos de avaliação de valor que desvalorizem a extensão da vida por causa de deficiência, quando usados para negar ou limitar acesso; e que o HHS afirmou que a regra **não bane o QALY** em si — depende do contexto e da finalidade.
- URL (carta do OCR): https://www.hhs.gov/sites/default/files/ocr-dcl-section-504-section-1557-disability.pdf
- **Não confirmado:** texto literal do § 84.57. Status: **parcialmente verificada**.

**Síntese para o site.** A frase "a lei americana proíbe o QALY" é imprecisa. O que se confirmou: desde 2010 o Medicare e o PCORI não podem usar custo-por-QALY **como limiar** de cobertura, reembolso ou recomendação; na negociação de preços do Medicare, a lei de 2022 veda tratar a extensão da vida de idosos, pessoas com deficiência ou terminais como de menor valor, e o CMS declarou que não usará QALYs. Um banimento amplo para todos os programas federais passou só na Câmara em 2024 e não virou lei até a data desta checagem.

#### Métricas alternativas surgidas desse debate

29. **evLYG / evLY (ICER — Institute for Clinical and Economic Review).**
    - Fontes secundárias dizem que o ICER introduziu o "equal value of life years gained" em **dezembro de 2018** e o incorporou ao marco de avaliação 2020–2023. Definição: todo ano de vida **ganho** é valorado como um ano de vida saudável, independentemente de idade, deficiência ou doença. O valor de referência é **0,851**, descrito como a utilidade média ajustada por idade e sexo da população geral dos EUA.
    - Limitação relatada: melhoras de qualidade de vida durante o período de sobrevida adicional não são captadas.
    - Limiar: um comentário público descreve o ICER usando US$ 100 mil por QALY e US$ 150 mil por evLYG; o resumo de Campbell 2023 (abaixo) fala em alinhamento com US$ 100 mil por QALY. **Os valores exatos dos benchmarks do ICER não foram confirmados em documento do próprio instituto.**
    - **Não confirmado:** documento primário do ICER com o 0,851 e a data; mudanças de marco em 2025–2026.
    - URL: https://icer.org/news-insights/press-releases/2020_vaf_update/
    - Status: **parcialmente verificada**.

30. **Campbell JD, Whittington MD, Pearson SD. An alternative measure of health for value assessment: the equal value life-year. Pharmacoeconomics. 2023;41(10):1175-82.**
    - DOI: [10.1007/s40273-023-01302-6](https://doi.org/10.1007/s40273-023-01302-6). PMID: 37458912. URL: https://pubmed.ncbi.nlm.nih.gov/37458912/
    - Argumento: o evLY pode ser alternativa ou complemento ao QALY para não subvalorizar tratamentos que prolongam a vida de pessoas com doença grave ou deficiência crônica; os autores (do ICER) recomendam reportá-lo em toda análise.
    - Conferência: PubMed (metadados + final do resumo). Status: **verificada**.

31. **Basu A, Carlson J, Veenstra D. Health years in total: a new health objective function for cost-effectiveness analysis. Value Health. 2020;23(1):96-103 (Epub 2019).**
    - DOI: [10.1016/j.jval.2019.10.014](https://doi.org/10.1016/j.jval.2019.10.014). PMID: 31952678. URL: https://pubmed.ncbi.nlm.nih.gov/31952678/
    - Argumento: o HYT separa, em escala aditiva, mudanças de expectativa de vida e de qualidade de vida; evita a implicação discriminatória do QALY e capta ganhos de qualidade nos anos adicionais (o que o "equal value of life" não faz). Limiares de US$ 34 mil e US$ 89 mil por HYT corresponderiam a US$ 50 mil e US$ 150 mil por QALY.
    - Conferência: PubMed (metadados + resumo). Status: **verificada**.

32. **Lakdawalla DN, Phelps CE. Health technology assessment with risk aversion in health. J Health Econ. 2020;72:102346.**
    - DOI: [10.1016/j.jhealeco.2020.102346](https://doi.org/10.1016/j.jhealeco.2020.102346). PMID: 32592923. PMCID: PMC7402585. URL: https://pubmed.ncbi.nlm.nih.gov/32592923/
    - Argumento: com aversão ao risco em qualidade de vida, a disposição a pagar sobe com a gravidade e o valor marginal de melhorar a qualidade de vida é maior para pessoas com deficiência; deriva o "GRA-QALY". Há corrigendum (J Health Econ 2021;78:102474, PMID 34107319).
    - Conferência: PubMed (metadados + resumo). Status: **verificada**.

33. **Lakdawalla DN, Phelps CE. Health technology assessment with diminishing returns to health: the Generalized Risk-Adjusted Cost-Effectiveness (GRACE) approach. Value Health. 2021;24(2):244-9.**
    - DOI: [10.1016/j.jval.2020.10.003](https://doi.org/10.1016/j.jval.2020.10.003). PMID: 33518031. URL: https://pubmed.ncbi.nlm.nih.gov/33518031/
    - Argumento: admitir retornos decrescentes da saúde faz o limiar ótimo subir para doenças graves e cair para as leves, dispensando exceções ad hoc (fim de vida, raras, câncer); os autores dizem que isso resolve a objeção "matematicamente legítima" dos defensores das pessoas com deficiência.
    - Conferência: PubMed (metadados + resumo). Status: **verificada**.

34. **Lakdawalla DN, Phelps CE. A guide to extending and implementing generalized risk-adjusted cost-effectiveness (GRACE). Eur J Health Econ. 2022;23(3):433-51 (Epub 2021).**
    - DOI: [10.1007/s10198-021-01367-0](https://doi.org/10.1007/s10198-021-01367-0). PMID: 34495445. PMCID: PMC8964662. URL: https://pubmed.ncbi.nlm.nih.gov/34495445/
    - Argumento: guia de implementação; lista os parâmetros novos necessários (preferências de risco sobre qualidade de vida, taxa de troca entre longevidade e qualidade, variância e assimetria dos desfechos).
    - Conferência: PubMed (metadados + resumo). Status: **verificada**.

35. **Lakdawalla DN, Doctor JN. A principled approach to non-discrimination in cost-effectiveness. Eur J Health Econ. 2024;25(8):1393-416.**
    - DOI: [10.1007/s10198-023-01659-7](https://doi.org/10.1007/s10198-023-01659-7). PMID: 38411845. URL: https://pubmed.ncbi.nlm.nih.gov/38411845/
    - Argumento: métodos correntes de "não discriminação" produzem inconsistências (falha de aditividade, valor negativo de ganhos de sobrevida em certos casos, preferências não convexas); propõem alternativa baseada no GRACE.
    - Conferência: PubMed (metadados + final do resumo). Status: **verificada**. Desdobramento 2024.

36. **Lakdawalla DN, Chen AJ, Doctor JN, Garrison LP, Goldman DP, Liden B, et al. Beyond the QALY: putting preferences to the test in health technology assessment. Value Health. 2026 (Epub out. 2026).**
    - DOI: [10.1016/j.jval.2026.10.005](https://doi.org/10.1016/j.jval.2026.10.005). PMID: 42926098. URL: https://pubmed.ncbi.nlm.nih.gov/42926098/
    - Sem resumo no PubMed; conteúdo não lido. Status: **parcialmente verificada**. Desdobramento 2026.

### C4. Sensibilidade do instrumento

**Saúde mental**

37. **Brazier J, Connell J, Papaioannou D, Mukuria C, Mulhern B, Peasgood T, et al. A systematic review, psychometric analysis and qualitative assessment of generic preference-based measures of health in mental health populations and the estimation of mapping functions from widely used specific measures. Health Technol Assess. 2014;18(34):vii-viii, xiii-xxv, 1-188.**
    - DOI: [10.3310/hta18340](https://doi.org/10.3310/hta18340). PMID: 24857402. PMCID: PMC4781324. URL: https://pubmed.ncbi.nlm.nih.gov/24857402/
    - Argumento: avalia validade e responsividade do EQ-5D e do SF-36/SF-6D em pessoas com problemas de saúde mental por revisão, análise psicométrica e entrevistas. Li só a parte de objetivos e métodos do resumo; **as conclusões não foram lidas nesta sessão**.
    - Status: **parcialmente verificada** (metadados confirmados).

38. **Mulhern B, Mukuria C, Barkham M, Knapp M, Byford S, Soeteman D, et al. Using generic preference-based measures in mental health: psychometric validity of the EQ-5D and SF-6D. Br J Psychiatry. 2014;205(3):236-43.**
    - DOI: [10.1192/bjp.bp.112.122283](https://doi.org/10.1192/bjp.bp.112.122283). PMID: 24855127. URL: https://pubmed.ncbi.nlm.nih.gov/24855127/
    - Argumento: EQ-5D e SF-6D podem ser usados "com alguma confiança" em transtornos mentais comuns; na esquizofrenia a validade é fraca e a responsividade incerta, e convém uma medida focada em saúde mental.
    - Conferência: PubMed (metadados + resumo). Status: **verificada**.
    - **Correção a crença comum:** não é que "o EQ-5D não funciona em saúde mental"; o problema documentado concentra-se na esquizofrenia e em transtornos graves.

**Visão e audição; instrumentos específicos**

39. **Longworth L, Yang Y, Young T, Mulhern B, Hernández Alava M, Mukuria C, et al. Use of generic and condition-specific measures of health-related quality of life in NICE decision-making: a systematic review, statistical modelling and survey. Health Technol Assess. 2014;18(9):1-224.**
    - DOI: [10.3310/hta18090](https://doi.org/10.3310/hta18090). PMID: 24524660. PMCID: PMC4780954. URL: https://pubmed.ncbi.nlm.nih.gov/24524660/
    - Argumento: revê as propriedades do EQ-5D, SF-6D e HUI3 em deficiência visual, deficiência auditiva, câncer e doenças de pele, e desenvolve e valora três itens "bolt-on" (audição, cansaço, visão). Li objetivos e métodos; **as conclusões por condição não foram lidas**.
    - Status: **parcialmente verificada** (metadados confirmados).

40. **Finch AP, Brazier JE, Mukuria C. Selecting bolt-on dimensions for the EQ-5D: examining their contribution to health-related quality of life. Value Health. 2019;22(1):50-61 (Epub 2018).**
    - DOI: [10.1016/j.jval.2018.07.001](https://doi.org/10.1016/j.jval.2018.07.001). PMID: 30661634. URL: https://pubmed.ncbi.nlm.nih.gov/30661634/
    - Argumento: medidas genéricas podem omitir dimensões importantes; como cada bolt-on pode exigir revaloração completa, é preciso método para escolher entre eles.
    - Conferência: PubMed (metadados + início do resumo). Status: **verificada**.
    - Relacionados: Finch AP, et al. Value Health 2017;20(10):1362-75 (PMID 29241896, [10.1016/j.jval.2017.06.002](https://doi.org/10.1016/j.jval.2017.06.002)); Finch AP, Brazier J, Mukuria C. Med Decis Making 2021;41(1):89-99 (PMID 33256502, [10.1177/0272989X20969686](https://doi.org/10.1177/0272989X20969686)) — testa audição, sono, cognição, energia e relacionamentos.

41. **Mulhern BJ, Sampson C, Haywood P, Addo R, Page K, Mott D, et al. Criteria for developing, assessing and selecting candidate EQ-5D bolt-ons. Qual Life Res. 2022;31(10):3041-8.**
    - DOI: [10.1007/s11136-022-03138-7](https://doi.org/10.1007/s11136-022-03138-7). PMID: 35486216. URL: https://pubmed.ncbi.nlm.nih.gov/35486216/
    - Argumento: propõe critérios de desenvolvimento (estrutura, linguagem, consistência com o EQ-5D) e de seleção (validade de face e conteúdo, psicometria) para bolt-ons.
    - Conferência: PubMed. Status: **verificada**.

42. **Rencz F, Pangestu S, Mulhern B, Finch AP, Janssen MF. Development and use of cognition bolt-ons for the EQ-5D-3L and EQ-5D-5L: a systematic review. Value Health. 2025;28(11):1752-69.**
    - DOI: [10.1016/j.jval.2025.05.015](https://doi.org/10.1016/j.jval.2025.05.015). PMID: 40490133. URL: https://pubmed.ncbi.nlm.nih.gov/40490133/
    - Argumento: há demanda crescente por bolt-ons de cognição, mas a variedade de itens dificulta a comparabilidade.
    - Conferência: PubMed. Status: **verificada**. Desdobramento 2025.

**EQ-HWB**

43. **Brazier J, Peasgood T, Mukuria C, Marten O, Kreimeier S, Luo N, et al. The EQ-HWB: overview of the development of a measure of health and wellbeing and key results. Value Health. 2022;25(4):482-91.**
    - DOI: [10.1016/j.jval.2022.01.009](https://doi.org/10.1016/j.jval.2022.01.009). PMID: 35277337. URL: https://pubmed.ncbi.nlm.nih.gov/35277337/
    - Argumento: descreve o desenvolvimento internacional do EQ-HWB (25 itens) e da versão curta (9 itens), para avaliar intervenções em saúde, saúde pública e assistência social, incluindo o impacto em cuidadores.
    - Conferência: PubMed. Status: **verificada**.
    - Relacionado: Mukuria C, et al. Value Health 2023;26(7):1073-84 (PMID 36805577, [10.1016/j.jval.2023.02.008](https://doi.org/10.1016/j.jval.2023.02.008)) — estudo de viabilidade e conjunto-piloto de valores do EQ-HWB-S no Reino Unido.

**Crianças**

44. **Rowen D, Rivero-Arias O, Devlin N, Ratcliffe J. Review of valuation methods of preference-based measures of health for economic evaluation in child and adolescent populations: where are we now and where are we going? Pharmacoeconomics. 2020;38(4):325-40.**
    - DOI: [10.1007/s40273-019-00873-7](https://doi.org/10.1007/s40273-019-00873-7). PMID: 31903522. URL: https://pubmed.ncbi.nlm.nih.gov/31903522/
    - Argumento: os métodos de valoração para crianças e adolescentes variam muito e carecem de diretriz; de quem são as preferências e qual perspectiva usar é questão normativa a ser decidida pelas agências.
    - Conferência: PubMed (metadados + resumo). Status: **verificada**.

45. **Kwon J, Kim SW, Ungar WJ, Tsiplova K, Madan J, Petrou S. A systematic review and meta-analysis of childhood health utilities. Med Decis Making. 2018;38(3):277-305 (Epub 2017).**
    - DOI: [10.1177/0272989X17732990](https://doi.org/10.1177/0272989X17732990). PMID: 28990449. URL: https://pubmed.ncbi.nlm.nih.gov/28990449/
    - Argumento: primeira revisão abrangente de utilidades na infância: 272 estudos, 3.414 utilidades, 19 métodos de valoração e 12 tipos de respondente; examina o efeito dos fatores metodológicos.
    - Conferência: PubMed (metadados + resumo). Status: **verificada**.
    - Artigo-irmão: Qual Life Res 2019;28(7):1705-24 (PMID 30783876, [10.1007/s11136-019-02121-z](https://doi.org/10.1007/s11136-019-02121-z)).

**Cuidados paliativos e fim de vida**

46. **Normand C. Measuring outcomes in palliative care: limitations of QALYs and the road to PalYs. J Pain Symptom Manage. 2009;38(1):27-31.**
    - DOI: [10.1016/j.jpainsymman.2009.04.005](https://doi.org/10.1016/j.jpainsymman.2009.04.005). PMID: 19615624. URL: https://pubmed.ncbi.nlm.nih.gov/19615624/
    - Argumento: o QALY "parece não funcionar bem" em intervenções complexas como cuidados paliativos, criando o paradoxo de as pessoas priorizarem serviços que o QALY mostraria não custo-efetivos; explora alternativas.
    - Conferência: PubMed (metadados + resumo). Status: **verificada**.

47. **Wichmann AB, Adang EM, Stalmeier PF, Kristanti S, Van den Block L, Vernooij-Dassen MJ, et al. The use of quality-adjusted life years in cost-effectiveness analyses in palliative care: mapping the debate through an integrative review. Palliat Med. 2017;31(4):306-22.**
    - DOI: [10.1177/0269216316689652](https://doi.org/10.1177/0269216316689652). PMID: 28190374. PMCID: PMC5405846. URL: https://pubmed.ncbi.nlm.nih.gov/28190374/
    - Argumento (crítica + resposta): três temas — poucos anos de vida a ganhar, conceito e medida de qualidade de vida, e valoração não linear do tempo. Conclui que QALYs podem ser obtidos em paliativos, recomendando somar ao EQ-5D instrumentos específicos ou de capacidade.
    - Conferência: PubMed (metadados + resumo). Status: **verificada**.

48. **Hughes J. Palliative care and the QALY problem. Health Care Anal. 2005;13(4):289-301.**
    - DOI: [10.1007/s10728-005-8126-0](https://doi.org/10.1007/s10728-005-8126-0). PMID: 16435466. URL: https://pubmed.ncbi.nlm.nih.gov/16435466/
    - Argumento: sob maximização de QALYs os paliativos saem mal porque seus benefícios duram pouco; para justificá-los seria preciso trocar a visão "atomística" do valor da vida por uma visão "narrativa", com implicações que seus defensores podem não querer aceitar.
    - Conferência: PubMed (metadados + resumo). Status: **verificada**.

49. **Garau M, Shah KK, Mason AR, Wang Q, Towse A, Drummond MF. Using QALYs in cancer: a review of the methodological limitations. Pharmacoeconomics. 2011;29(8):673-85.**
    - DOI: [10.2165/11588250-000000000-00000](https://doi.org/10.2165/11588250-000000000-00000). PMID: 21599035. URL: https://pubmed.ncbi.nlm.nih.gov/21599035/
    - Argumento: o EQ-5D é relativamente insensível a mudanças em pacientes com câncer; o time trade-off faz suposições provavelmente violadas no fim da vida; e a população geral tende a não entender como é viver com câncer.
    - Conferência: PubMed (metadados + resumo). Status: **verificada** (referência adicional, não pedida).

**Demência**

50. **Hounsome N, Orrell M, Edwards RT. EQ-5D as a quality of life measure in people with dementia and their carers: evidence and key issues. Value Health. 2011;14(2):390-9.**
    - DOI: [10.1016/j.jval.2010.08.002](https://doi.org/10.1016/j.jval.2010.08.002). PMID: 21402307. URL: https://pubmed.ncbi.nlm.nih.gov/21402307/
    - Argumento: boa viabilidade e confiabilidade, mas a validade do autorrelato é problemática (pouca associação com o relato de terceiros, efeito teto), e diferentes informantes dão notas diferentes; o impacto sobre o cuidador deve entrar na avaliação.
    - Conferência: PubMed (metadados + final do resumo). Status: **verificada**.

51. **Keetharuth AD, Hussain H, Rowen D, Wailoo A. Assessing the psychometric performance of EQ-5D-5L in dementia: a systematic review. Health Qual Life Outcomes. 2022;20(1):139.**
    - DOI: [10.1186/s12955-022-02036-3](https://doi.org/10.1186/s12955-022-02036-3). PMID: 36171595. URL: https://pubmed.ncbi.nlm.nih.gov/36171595/
    - Argumento: 20 artigos de 14 estudos; o EQ-5D-5L distingue gravidade em 5 de 7 estudos, mas mudança significativa foi vista em 1 de 6, e os 7 estudos que compararam mostraram discordância entre autorrelato e proxy (autorrelato mais alto).
    - Conferência: PubMed (metadados + resumo). Status: **verificada**.
    - Outras: Li L, et al. Value Health 2018;21(4):471-81 (PMID 29680105, [10.1016/j.jval.2017.09.005](https://doi.org/10.1016/j.jval.2017.09.005)); Comans TA, et al. AD-5D, Pharmacoeconomics 2020;38(8):871-81 (PMID 32314315, [10.1007/s40273-020-00913-7](https://doi.org/10.1007/s40273-020-00913-7)). Metadados conferidos; resumos lidos só em parte.

**Cuidadores e família**

52. **Al-Janabi H, van Exel J, Brouwer W, Coast J. A framework for including family health spillovers in economic evaluation. Med Decis Making. 2016;36(2):176-86 (Epub 2015).**
    - DOI: [10.1177/0272989X15605094](https://doi.org/10.1177/0272989X15605094). PMID: 26377370. PMCID: PMC4708618. URL: https://pubmed.ncbi.nlm.nih.gov/26377370/
    - Argumento: propõe dois multiplicadores na regra de decisão — um para o benefício gerado e outro para o benefício **deslocado** —, de modo que os efeitos sobre a família contem dos dois lados.
    - Conferência: PubMed (metadados + resumo). Status: **verificada**.

53. **Al-Janabi H, Van Exel J, Brouwer W, Trotter C, Glennie L, Hannigan L, et al. Measuring health spillovers for economic evaluation: a case study in meningitis. Health Econ. 2016;25(12):1529-44 (Epub 2015).**
    - DOI: [10.1002/hec.3259](https://doi.org/10.1002/hec.3259). PMID: 26464311. URL: https://pubmed.ncbi.nlm.nih.gov/26464311/
    - Argumento: sequelas de meningite afetam a saúde de familiares além de um único cuidador próximo; métodos diferentes de quantificar o efeito deram resultados consistentes.
    - Conferência: PubMed (metadados, com os sete autores: Al-Janabi, Van Exel, Brouwer, Trotter, Glennie, Hannigan, Coast; + final do resumo). Status: **verificada**.

54. **Al-Janabi H, Flynn TN, Coast J. QALYs and carers. Pharmacoeconomics. 2011;29(12):1015-23.**
    - DOI: [10.2165/11593940-000000000-00000](https://doi.org/10.2165/11593940-000000000-00000). PMID: 22077576. URL: https://pubmed.ncbi.nlm.nih.gov/22077576/
    - Argumento: incluir QALYs de cuidadores pode ter consequências distributivas importantes e pede discussão normativa; medidas mais amplas de bem-estar podem ser mais adequadas para cuidadores.
    - Conferência: PubMed (final do resumo). Status: **verificada**.

55. **Pennington BM. Inclusion of carer health-related quality of life in National Institute for Health and Care Excellence appraisals. Value Health. 2020;23(10):1349-57.**
    - DOI: [10.1016/j.jval.2020.05.017](https://doi.org/10.1016/j.jval.2020.05.017). PMID: 33032779. URL: https://pubmed.ncbi.nlm.nih.gov/33032779/
    - Argumento: só **12 de 414** avaliações de tecnologia (3%) e **4 de 8** de tecnologias altamente especializadas incluíram qualidade de vida do cuidador; oito eram de esclerose múltipla; a inclusão sempre aumentou os QALYs incrementais e reduziu a razão de custo-efetividade.
    - Conferência: PubMed (metadados + resumo; números do resumo). Status: **verificada**.

56. **Henry E, Al-Janabi H, Brouwer W, Cullinan J, Engel L, Griffin S, et al. Recommendations for emerging good practice and future research in relation to family and caregiver health spillovers in health economic evaluations: a report of the SHEER Task Force. Pharmacoeconomics. 2024;42(3):343-62 (Epub 2023).**
    - DOI: [10.1007/s40273-023-01321-3](https://doi.org/10.1007/s40273-023-01321-3). PMID: 38041698. URL: https://pubmed.ncbi.nlm.nih.gov/38041698/
    - Argumento: recomendações de consenso para incorporar spillovers; os autores as apresentam como roteiro inicial, não como checklist.
    - Conferência: PubMed (final do resumo). Status: **verificada**.

57. **Mott DJ, Schirrmacher H, Al-Janabi H, Guest S, Pennington B, Scheuer N, et al. Modelling spillover effects on informal carers: the carer QALY trap. Pharmacoeconomics. 2023;41(12):1557-61.**
    - DOI: [10.1007/s40273-023-01316-0](https://doi.org/10.1007/s40273-023-01316-0). PMID: 37659032. URL: https://pubmed.ncbi.nlm.nih.gov/37659032/
    - Argumento: há casos em que incluir a qualidade de vida do cuidador **reduz** o ganho incremental de QALYs (a "armadilha do QALY do cuidador"), resultado que pode contrariar as preferências dos próprios cuidadores.
    - Conferência: PubMed (final do resumo). Status: **verificada**.

**Posição do NICE sobre cuidadores.** Segundo o resumo do buscador, o caso de referência do manual (PMG36) conta "all health effects" para pacientes "or, when relevant, carers"; o guia anterior (PMG9) dizia "all direct health effects". A Decision Support Unit de Sheffield avalia que o manual dá orientação mínima sobre como fazê-lo, e o NICE classificou o tema como prioridade para atualização modular. Texto do manual não lido. URL: https://sheffield.ac.uk/nice-dsu/methods-development/carers-health-related-quality-life-nice-guidance — Status: **parcialmente verificada**.

### C5. De quem são as preferências (só confirmação)

58. **Dolan P. Whose preferences count? Med Decis Making. 1999;19(4):482-6.**
    - DOI: [10.1177/0272989X9901900416](https://doi.org/10.1177/0272989X9901900416). PMID: 10520686. URL: https://pubmed.ncbi.nlm.nih.gov/10520686/
    - Argumento: opor "pacientes" a "público geral" é uma falsa dicotomia; a questão central é se a adaptação das pessoas a estados ruins de saúde deve ser levada em conta ao valorá-los.
    - Conferência: PubMed (metadados + resumo). Status: **verificada**.

59. **Gold MR, Siegel JE, Russell LB, Weinstein MC, editors. Cost-effectiveness in health and medicine. New York: Oxford University Press; 1996.** ISBN 9780195108248.
    - Argumento: relatório do painel nomeado pelo US Public Health Service; propõe o "caso de referência" para toda análise de custo-efetividade.
    - **Não confirmado nesta sessão:** a recomendação específica de usar preferências da comunidade (o buscador não devolveu esse trecho).
    - Conferência: WebSearch (livrarias, repositório de Harvard). Status: **parcialmente verificada**.

60. **Sanders GD, Neumann PJ, Basu A, Brock DW, Feeny D, Krahn M, et al. Recommendations for conduct, methodological practices, and reporting of cost-effectiveness analyses: Second Panel on Cost-Effectiveness in Health and Medicine. JAMA. 2016;316(10):1093-103.**
    - DOI: [10.1001/jama.2016.12195](https://doi.org/10.1001/jama.2016.12195). PMID: 27623463. URL: https://pubmed.ncbi.nlm.nih.gov/27623463/
    - Argumento: atualiza as recomendações de 1996; o painel foi formado em 2012 com 2 copresidentes e 13 membros. Li só o início do resumo; as recomendações específicas (dois casos de referência, inventário de impactos) **não foram lidas**.
    - Status: **parcialmente verificada** (metadados confirmados).

### C6. Regra do resgate, gravidade, fim de vida, doenças raras

61. **Jonsen AR. Bentham in a box: technology assessment and health care allocation. Law Med Health Care. 1986;14(3-4):172-4.**
    - DOI: [10.1111/j.1748-720x.1986.tb00974.x](https://doi.org/10.1111/j.1748-720x.1986.tb00974.x). PMID: 3645228. URL: https://pubmed.ncbi.nlm.nih.gov/3645228/
    - Argumento: sem resumo no PubMed. McKie & Richardson (abaixo) atestam que Jonsen cunhou "Rule of Rescue" para o imperativo de resgatar indivíduos identificáveis diante de morte evitável.
    - Status: **parcialmente verificada** (metadados confirmados; conteúdo por fonte secundária).

62. **McKie J, Richardson J. The rule of rescue. Soc Sci Med. 2003;56(12):2407-19.**
    - DOI: [10.1016/s0277-9536(02)00244-7](https://doi.org/10.1016/s0277-9536(02)00244-7). PMID: 12742604. URL: https://pubmed.ncbi.nlm.nih.gov/12742604/
    - Argumento (crítica + resposta): descreve o conflito da regra com a custo-efetividade e a preferência por vidas identificáveis. Ela pode ser defendida de modo utilitarista (reforça a crença de viver numa comunidade que valoriza a vida), mas a justiça pede não discriminar por razões moralmente irrelevantes, e "ser identificável" não parece razão relevante.
    - Conferência: PubMed (metadados + resumo). Status: **verificada**.

63. **Hadorn DC. Setting health care priorities in Oregon: cost-effectiveness meets the rule of rescue. JAMA. 1991;265(17):2218-25.**
    - DOI: não consta no registro PubMed. PMID: 1901610. URL: https://pubmed.ncbi.nlm.nih.gov/1901610/
    - Argumento: a lista preliminar do Oregon foi criticada por parecer favorecer tratamentos menores em vez dos que salvam vidas, refletindo um conflito "fundamental e irreconciliável" entre custo-efetividade e a regra do resgate; a lista final foi gerada **sem referência a custos**.
    - Conferência: PubMed (metadados + resumo). Status: **verificada**.
    - **Episódio do capeamento dentário × apendicectomia:** o resumo de Hadorn não cita o exemplo. Um artigo do AMA Journal of Ethics (2011) diz que a lista inicial de 1990 gerou "peculiaridades", como possivelmente cobrir coroas dentárias mas não a cirurgia de apendicite; outra fonte diz que o rascunho de setembro de 1990 foi retirado de imediato. As posições exatas na lista não foram confirmadas. URL: https://journalofethics.ama-assn.org/article/oregons-experiment-prioritizing-public-health-care-services/2011-04 — Status do episódio: **parcialmente verificada**; escrever "segundo relatos da época", sem números de ranking.

64. **Ottersen T, Førde R, Kakad M, Kjellevold A, Melberg HO, Moen A, et al. A new proposal for priority setting in Norway: open and fair. Health Policy. 2016;120(3):246-51.**
    - DOI: [10.1016/j.healthpol.2016.01.012](https://doi.org/10.1016/j.healthpol.2016.01.012). PMID: 26851991. URL: https://pubmed.ncbi.nlm.nih.gov/26851991/
    - Argumento: propõe três critérios — benefício de saúde, recursos e **perda de saúde** ao longo da vida — com limiares de custo-efetividade diferenciados conforme a perda.
    - Conferência: PubMed (metadados + resumo). Status: **verificada**.
    - **Atenção:** este artigo descreve a proposta do comitê (perda de saúde ao longo da vida). Segundo a busca, o que o Parlamento norueguês aprovou foi benefício, recursos e **gravidade medida como "absolute shortfall" prospectivo** (perda futura esperada de QALYs), em vigor nas decisões de reembolso desde 1º jan. 2018. Os degraus de NOK 275 mil a 825 mil por QALY em seis grupos aparecem como **não oficiais** (slides de J. A. Olsen, 2019). Não achei mudanças de 2025. Status desses fatos: **parcialmente verificada**. URL: https://pubmed.ncbi.nlm.nih.gov/35767256/

65. **Reckers-Droog VT, van Exel NJA, Brouwer WBF. Looking back and moving forward: on the application of proportional shortfall in healthcare priority setting in the Netherlands. Health Policy. 2018;122(6):621-9.**
    - DOI: [10.1016/j.healthpol.2018.04.001](https://doi.org/10.1016/j.healthpol.2018.04.001). PMID: 29703652. URL: https://pubmed.ncbi.nlm.nih.gov/29703652/
    - Argumento: o "proportional shortfall" quantifica a necessidade e vem sendo cada vez mais aplicado desde 2015, mas tem apoio empírico limitado e pode não refletir preferências sociais sobre idade e desigualdades de saúde ao longo da vida.
    - Conferência: PubMed (metadados + resumo). Status: **verificada**.
    - Valores holandeses (relatório do Zorginstituut, 2015, via buscador): carga de doença 0,1–0,4 → até €20.000/QALY; 0,41–0,7 → até €50.000; 0,71–1,0 → até €80.000. URL: https://english.zorginstituutnederland.nl/ (relatório "Cost-effectiveness in practice", 16 jun. 2015). Status: **parcialmente verificada**.

66. **NICE — critérios de fim de vida (2009).**
    - Segundo o buscador, a orientação suplementar entrou em vigor em 5 jan. 2009 e foi revista em jul. 2009. Critérios: expectativa de vida curta, "normally less than 24 months"; extensão de vida "normally of at least an additional 3 months" em relação ao tratamento corrente do NHS; e indicação para populações pequenas de pacientes.
    - URL: https://nice.org.uk/guidance/GID-TAG387/documents/appraising-life-extending-end-of-life-treatments-paper2
    - Status: **parcialmente verificada** (trechos entre aspas vindos do buscador).

67. **NICE — modificador de gravidade (manual PMG36, jan. 2022), que substituiu os critérios de fim de vida.**
    - Tabela conforme reproduzida por fontes secundárias (o buscador confirmou os valores):

      | Peso do QALY | Déficit proporcional de QALYs | Déficit absoluto de QALYs |
      |---|---|---|
      | 1 | menor que 0,85 | menor que 12 |
      | 1,2 | 0,85 a 0,95 | 12 a 18 |
      | 1,7 | pelo menos 0,95 | pelo menos 18 |

    - Vale o maior dos dois níveis; déficits são descontados à taxa do caso de referência.
    - URL oficial: https://www.nice.org.uk/process/pmg36 (não aberta).
    - Status: **parcialmente verificada**.
    - Literatura 2023–2026 no PubMed: Coughlan D, et al. Pharmacoeconomics 2024;42(1):5-9 (PMID 37796409, [10.1007/s40273-023-01317-z](https://doi.org/10.1007/s40273-023-01317-z)); Abdelsabour A, et al. Value Health 2026 (PMID 42767341, [10.1016/j.jval.2026.08.009](https://doi.org/10.1016/j.jval.2026.08.009)) — a decisão sobre o peso pode mudar sob suposições plausíveis quando a estimativa está perto do corte.

68. **NICE — mudança do limiar (2025–2026).**
    - Segundo a notícia do NICE devolvida pelo buscador, o governo anunciou em **1º dez. 2025** o aumento da faixa padrão de £20.000–£30.000 para **£25.000–£35.000 por QALY**; fontes secundárias dizem que passou a valer em abril de 2026 e a ligam ao acordo comercial EUA–Reino Unido. O NICE estima 3 a 5 medicamentos ou indicações adicionais por ano. Foi anunciado também novo conjunto de valores do EQ-5D-5L para o Reino Unido.
    - Contraponto registrado: economistas da saúde argumentam que o limiar anterior já era alto demais frente ao custo de oportunidade real (ver Claxton 2015, item 10).
    - URL: https://www.nice.org.uk/news/articles/changes-to-nice-s-cost-effectiveness-thresholds-confirmed
    - Status: **parcialmente verificada**. Fato novo e relevante: a faixa "£20–30 mil", repetida em quase todo material didático, está desatualizada.

69. **Shah KK. Severity of illness and priority setting in healthcare: a review of the literature. Health Policy. 2009;93(2-3):77-84.**
    - DOI: [10.1016/j.healthpol.2009.08.005](https://doi.org/10.1016/j.healthpol.2009.08.005). PMID: 19712990. URL: https://pubmed.ncbi.nlm.nih.gov/19712990/
    - Argumento: a evidência empírica sugere que as pessoas, em geral, aceitam sacrificar saúde agregada para priorizar os mais graves, mas resta estimar a força desse apoio.
    - Conferência: PubMed (metadados + resumo). Status: **verificada**.

70. **Shah KK, Tsuchiya A, Wailoo AJ. Valuing health at the end of life: an empirical study of public preferences. Eur J Health Econ. 2014;15(4):389-99 (Epub 2013).**
    - DOI: [10.1007/s10198-013-0482-3](https://doi.org/10.1007/s10198-013-0482-3). PMID: 23657476. URL: https://pubmed.ncbi.nlm.nih.gov/23657476/
    - Argumento: em 50 entrevistas na Inglaterra (jul. 2011) houve algum apoio a priorizar quem tem menor expectativa de vida, com minoria não trivial na direção oposta e preferência substancial por melhora de qualidade de vida em vez de extensão; não há um "consenso".
    - Conferência: PubMed (metadados + resumo). Status: **verificada**.
    - Relacionado: Shah KK, Tsuchiya A, Wailoo AJ. Soc Sci Med 124:48-56 (o PubMed registra 2014; ano do volume não conferido; PMID 25461861, [10.1016/j.socscimed.2014.11.022](https://doi.org/10.1016/j.socscimed.2014.11.022)); só metadados conferidos.

71. **Linley WG, Hughes DA. Societal views on NICE, cancer drugs fund and value-based pricing criteria for prioritising medicines: a cross-sectional survey of 4118 adults in Great Britain. Health Econ. 2013;22(8):948-64 (Epub 2012).**
    - DOI: [10.1002/hec.2872](https://doi.org/10.1002/hec.2872). PMID: 22961976. URL: https://pubmed.ncbi.nlm.nih.gov/22961976/
    - Argumento: os 4.118 respondentes apoiaram priorizar doenças graves, necessidades não atendidas, inovação com benefício substancial e benefícios sociais amplos; **não** apoiaram o prêmio de fim de vida, a prioridade a crianças ou a grupos desfavorecidos como especificada pelo NICE, o status especial para doenças raras, nem o Cancer Drugs Fund.
    - Conferência: PubMed (metadados + resumo). Status: **verificada**.

72. **Drummond MF, Wilson DA, Kanavos P, Ubel P, Rovira J. Assessing the economic challenges posed by orphan drugs. Int J Technol Assess Health Care. 2007;23(1):36-42.**
    - DOI: [10.1017/S0266462307051550](https://doi.org/10.1017/S0266462307051550). PMID: 17234015. URL: https://pubmed.ncbi.nlm.nih.gov/17234015/
    - Argumento: pelos métodos padrão, medicamentos órfãos raramente são custo-efetivos, mas as restrições resultantes podem não refletir preferências sociais; propõe agenda de pesquisa.
    - Conferência: PubMed (metadados + resumo). Status: **verificada**.

73. **McCabe C, Claxton K, Tsuchiya A. Orphan drugs and the NHS: should we value rarity? BMJ. 2005;331(7523):1016-9.**
    - DOI: [10.1136/bmj.331.7523.1016](https://doi.org/10.1136/bmj.331.7523.1016). PMID: 16254305. PMCID: PMC1273462. URL: https://pubmed.ncbi.nlm.nih.gov/16254305/
    - Argumento: o PubMed traz só a chamada ("decisões sobre financiar esses tratamentos precisam de base sólida"). A posição de que a raridade em si não justifica prêmio é a leitura corrente do artigo, **mas não foi lida aqui**.
    - Status: **parcialmente verificada** (metadados confirmados).

74. **Lakdawalla DN, Phelps CE, Nguyen HH. Three pillars of support for orphan drug programs: individual valuations, societal valuations, and anonymous altruism. Value Health. 2024;27(12):1648-55.**
    - DOI: [10.1016/j.jval.2024.06.014](https://doi.org/10.1016/j.jval.2024.06.014). PMID: 38977180. URL: https://pubmed.ncbi.nlm.nih.gov/38977180/
    - Argumento: busca fundamentos (via GRACE, equidade horizontal e altruísmo anônimo) para o apoio a medicamentos órfãos. Só o início do resumo foi lido. Status: **parcialmente verificada**. Contraponto de 2024 a McCabe 2005.

75. **Phelps CE, Lakdawalla DN. Methods to adjust willingness-to-pay measures for severity of illness. Value Health. 2023;26(7):1003-10.**
    - DOI: [10.1016/j.jval.2023.02.001](https://doi.org/10.1016/j.jval.2023.02.001). PMID: 36796478. URL: https://pubmed.ncbi.nlm.nih.gov/36796478/
    - Argumento: déficit absoluto, déficit proporcional e fair innings usam ajustes ad hoc e faixas "em degraus"; os autores os comparam com métodos baseados em utilidade esperada. Só o início do resumo foi lido. Status: **parcialmente verificada**.

### C7. Premissas técnicas

76. **Tsuchiya A, Dolan P. The QALY model and individual preferences for health states and health profiles over time: a systematic review of the literature. Med Decis Making. 2005;25(4):460-7.**
    - DOI: [10.1177/0272989X05276854](https://doi.org/10.1177/0272989X05276854). PMID: 16061898. URL: https://pubmed.ncbi.nlm.nih.gov/16061898/
    - Argumento (crítica + resposta): as preferências individuais são afetadas pela duração e pela sequência dos estados, mas os pressupostos se sustentam bem melhor quando as valorações são agregadas — o que é encorajador para avaliações que usam médias.
    - Conferência: PubMed (metadados + resumo). Status: **verificada**.

77. **Dolan P, Stalmeier P. The validity of time trade-off values in calculating QALYs: constant proportional time trade-off versus the proportional heuristic. J Health Econ. 2003;22(3):445-58.**
    - DOI: [10.1016/S0167-6296(02)00120-0](https://doi.org/10.1016/S0167-6296(02)00120-0). PMID: 12683961. URL: https://pubmed.ncbi.nlm.nih.gov/12683961/
    - Argumento: com 91 respondentes, sugere que as pessoas usam uma heurística proporcional que só aparenta satisfazer o trade-off proporcional constante e gera reversões de preferência em estados com "tempo máximo suportável".
    - Conferência: PubMed (metadados + resumo). Status: **verificada**.

78. **Gravelle H, Smith D. Discounting for health effects in cost-benefit and cost-effectiveness analysis. Health Econ. 2001;10(7):587-99.**
    - DOI: [10.1002/hec.618](https://doi.org/10.1002/hec.618). PMID: 11747043. URL: https://pubmed.ncbi.nlm.nih.gov/11747043/
    - Argumento: se o valor dos efeitos de saúde cresce com o tempo, descontá-los a taxa menor que a dos custos é válido; o paradoxo de Keeler-Cretin não é relevante para essa escolha.
    - Conferência: PubMed (metadados + resumo). Status: **verificada**.

79. **Claxton K, Paulden M, Gravelle H, Brouwer W, Culyer AJ. Discounting and decision making in the economic evaluation of health-care technologies. Health Econ. 2011;20(1):2-15 (Epub 2010).**
    - DOI: [10.1002/hec.1612](https://doi.org/10.1002/hec.1612). PMID: 21154521. URL: https://pubmed.ncbi.nlm.nih.gov/21154521/
    - Argumento: a divergência entre taxa única e taxa menor para saúde depende de juízos de fato e de valor (objetivo social, orçamento fixo, crescimento do limiar); com orçamento fixo, a mesma taxa só é correta se o limiar ficar constante.
    - Conferência: PubMed (metadados + resumo). Status: **verificada**.

80. **Brouwer WB, Niessen LW, Postma MJ, Rutten FF. Need for differential discounting of costs and health effects in cost effectiveness analyses. BMJ. 2005;331(7514):446-8.**
    - DOI: [10.1136/bmj.331.7514.446](https://doi.org/10.1136/bmj.331.7514.446). PMID: 16110075. PMCID: PMC1188116. URL: https://pubmed.ncbi.nlm.nih.gov/16110075/
    - Argumento: a decisão do NICE de abandonar o desconto diferenciado da saúde futura é "um passo atrás" e pode mudar decisões de financiamento.
    - Conferência: PubMed (metadados + chamada). Status: **verificada**.

81. **Richardson J, Khan MA, Iezzi A, Maxwell A. Comparing and explaining differences in the magnitude, content, and sensitivity of utilities predicted by the EQ-5D, SF-6D, HUI 3, 15D, QWB, and AQoL-8D multiattribute utility instruments. Med Decis Making. 2015;35(3):276-91 (Epub 2014).**
    - DOI: [10.1177/0272989X14543107](https://doi.org/10.1177/0272989X14543107). PMID: 25159172. URL: https://pubmed.ncbi.nlm.nih.gov/25159172/
    - Argumento: com pacientes de sete áreas e público de seis países, a diferença entre utilidades de público e de pacientes variou com o instrumento em mais de 50% em todos os grupos de doença e em mais de 100% em quatro dos sete; os instrumentos medem construtos relacionados mas diferentes e discriminam sistematicamente algumas classes de serviço, sobretudo saúde mental.
    - Conferência: PubMed (metadados + resumo). Status: **verificada**.

82. **Whitehurst DG, Norman R, Brazier JE, Viney R. Comparison of contemporaneous EQ-5D and SF-6D responses using scoring algorithms derived from similar valuation exercises. Value Health. 2014;17(5):570-7.**
    - DOI: [10.1016/j.jval.2014.03.1720](https://doi.org/10.1016/j.jval.2014.03.1720). PMID: 25128050. URL: https://pubmed.ncbi.nlm.nih.gov/25128050/
    - Argumento: mesmo com o mesmo método de valoração, a concordância entre EQ-5D e SF-6D fica apenas "razoável" (ICC de 0,375 a 0,615; diferença média de 0,253), o que aponta para os sistemas descritivos como origem da discrepância.
    - Conferência: PubMed (metadados + resumo). Status: **verificada**.

### C8. "O QALY não é o valor de uma vida"

83. **Neumann PJ, Cohen JT, Weinstein MC. Updating cost-effectiveness — the curious resilience of the $50,000-per-QALY threshold. N Engl J Med. 2014;371(9):796-7.**
    - DOI: [10.1056/NEJMp1405158](https://doi.org/10.1056/NEJMp1405158). PMID: 25162885. URL: https://pubmed.ncbi.nlm.nih.gov/25162885/
    - Sem resumo no PubMed; texto não lido. Status: **parcialmente verificada**.

84. **Ryen L, Svensson M. The willingness to pay for a quality adjusted life year: a review of the empirical literature. Health Econ. 2015;24(10):1289-301 (Epub 2014).**
    - DOI: [10.1002/hec.3085](https://doi.org/10.1002/hec.3085). PMID: 25070495. URL: https://pubmed.ncbi.nlm.nih.gov/25070495/
    - Argumento: 24 estudos com 383 estimativas; média aparada de **€74.159** e mediana de **€24.226** (preços de 2010); a disposição a pagar é maior quando o QALY vem de extensão de vida e depende do tamanho do ganho.
    - Conferência: PubMed (metadados + resumo). Status: **verificada**. Serve para mostrar que não existe "um" valor do QALY.

**Distinção para o texto do site.** Claxton 2015 e Culyer 2016 (itens 10 e 12) sustentam que o limiar de custo-efetividade é uma estimativa do custo de oportunidade dentro de um orçamento, e não o preço de uma vida. Ryen & Svensson medem outra coisa: a disposição a pagar. **Não conferi nesta sessão nenhuma fonte que compare diretamente o limiar com o valor estatístico da vida (VSL)**; se o site fizer essa comparação, falta a referência.

---

## D. Alternativas e complementos

### DALY

85. **Murray CJ. Quantifying the burden of disease: the technical basis for disability-adjusted life years. Bull World Health Organ. 1994;72(3):429-45.**
    - DOI: não consta. PMID: 8062401. PMCID: PMC2486718. URL: https://pubmed.ncbi.nlm.nih.gov/8062401/
    - Argumento: expõe as quatro escolhas sociais do DALY original — tábua de vida padrão (West nível 26), **ponderação por idade** em função exponencial, seis classes de gravidade com pesos de 0 a 1, e **desconto de 3%**.
    - Conferência: PubMed (metadados + resumo). Status: **verificada**.

86. **Murray CJ, Ezzati M, Flaxman AD, Lim S, Lozano R, Michaud C, et al. GBD 2010: design, definitions, and metrics. Lancet. 2012;380(9859):2063-6.**
    - DOI: [10.1016/S0140-6736(12)61899-6](https://doi.org/10.1016/S0140-6736(12)61899-6). PMID: 23245602. URL: https://pubmed.ncbi.nlm.nih.gov/23245602/
    - Sem resumo no PubMed. O buscador devolveu, do artigo de resultados de DALYs do GBD 2010 (Lancet 2012), a frase: "Neither YLLs nor YLDs were age-weighted or discounted", com YLDs calculados por prevalência. Uma revisão posterior diz que o GBD retirou o desconto, uniformizou os pesos etários e adotou uma única expectativa de vida de 86 anos para os dois sexos.
    - Status: **parcialmente verificada** (metadados confirmados; a retirada de idade e desconto confirmada por trecho de buscador, não pelo texto deste artigo). **O PMID do artigo de resultados de DALYs não foi conferido.**

87. **Sassi F. Calculating QALYs, comparing QALY and DALY calculations. Health Policy Plan. 2006;21(5):402-8.**
    - DOI: [10.1093/heapol/czl018](https://doi.org/10.1093/heapol/czl018). PMID: 16877455. URL: https://pubmed.ncbi.nlm.nih.gov/16877455/
    - Argumento: formula o cálculo de QALYs e explica as diferenças sistemáticas para DALYs com dois exemplos (tuberculose e depressão bipolar); a relação depende de idade de início, duração e dos pesos.
    - Conferência: PubMed (metadados + resumo). Status: **verificada**.

88. **Gold MR, Stevenson D, Fryback DG. HALYs and QALYs and DALYs, oh my: similarities and differences in summary measures of population health. Annu Rev Public Health. 2002;23:115-34 (Epub 2001).**
    - DOI: [10.1146/annurev.publhealth.23.100901.140513](https://doi.org/10.1146/annurev.publhealth.23.100901.140513). PMID: 11910057. URL: https://pubmed.ncbi.nlm.nih.gov/11910057/
    - Argumento: QALYs e DALYs são tipos de HALY com propósitos originais distintos; revê história, cálculo e questões éticas, e alerta contra usar tipos diferentes em contextos decisórios diferentes sem clareza.
    - Conferência: PubMed (metadados + resumo). Status: **verificada**.

### WELLBY

89. **Frijters P, Clark AE, Krekel C, Layard R. A happy choice: wellbeing as the goal of government. Behav Public Policy. 2020;4(2):126-65.**
    - DOI: [10.1017/bpp.2019.39](https://doi.org/10.1017/bpp.2019.39) (devolvido pelo buscador a partir da página da Cambridge; não testado). PMID: não consta no PubMed.
    - Argumento: defende o bem-estar como objetivo do governo, discute como medi-lo respeitando a avaliação dos próprios cidadãos e as barreiras à adoção.
    - Conferência: WebSearch (Cambridge Core, RePEc). Status: **parcialmente verificada**.

90. **HM Treasury. Wellbeing guidance for appraisal: supplementary Green Book guidance. London: HM Treasury; jul. 2021.**
    - Trecho devolvido pelo buscador: a orientação recomenda converter a variação de um ponto na satisfação com a vida multiplicando por "£13,000 [Low: £10,000, High £16,000]", valor padrão de um WELLBY "in 2019 prices and values". Definição: variação de um ponto na satisfação com a vida (escala 0–10) para uma pessoa por um ano.
    - **Confirmado: £13.000 por WELLBY, preços de 2019, faixa £10.000–£16.000.** O valor baixo parte do valor do QALY no Green Book. Não confirmei atualização oficial posterior.
    - URL (documento de apoio, gov.uk): https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/1005389/Wellbeing_guidance_for_appraisal_-_background_paper_reviewing_methods_and_approaches.pdf
    - Status: **parcialmente verificada** (fontes secundárias concordantes, inclusive OCDE; PDF do Tesouro não aberto).

### MCDA

91. **Thokala P, Devlin N, Marsh K, Baltussen R, Boysen M, Kalo Z, et al. Multiple criteria decision analysis for health care decision making — an introduction: report 1 of the ISPOR MCDA Emerging Good Practices Task Force. Value Health. 2016;19(1):1-13.**
    - DOI: [10.1016/j.jval.2015.12.003](https://doi.org/10.1016/j.jval.2015.12.003). PMID: 26797229. URL: https://pubmed.ncbi.nlm.nih.gov/26797229/
    - Argumento: define MCDA, dá exemplos em saúde e descreve as etapas e os principais métodos.
    - Conferência: PubMed (metadados + resumo). Status: **verificada**.

92. **Marsh K, IJzerman M, Thokala P, Baltussen R, Boysen M, Kaló Z, et al. Multiple criteria decision analysis for health care decision making — emerging good practices: report 2 of the ISPOR MCDA Emerging Good Practices Task Force. Value Health. 2016;19(2):125-37.**
    - DOI: [10.1016/j.jval.2015.12.016](https://doi.org/10.1016/j.jval.2015.12.016). PMID: 27021745. URL: https://pubmed.ncbi.nlm.nih.gov/27021745/
    - Argumento: orientação de boas práticas para implementar MCDA em decisões de saúde.
    - Conferência: PubMed (metadados + resumo). Status: **verificada**.

93. **Baltussen R, Niessen L. Priority setting of health interventions: the need for multi-criteria decision analysis. Cost Eff Resour Alloc. 2006;4:14.**
    - DOI: [10.1186/1478-7547-4-14](https://doi.org/10.1186/1478-7547-4-14). PMID: 16923181. PMCID: PMC1560167. URL: https://pubmed.ncbi.nlm.nih.gov/16923181/
    - Argumento: carga de doença, custo-efetividade e análises de equidade olham um critério por vez, enquanto o decisor precisa ponderar vários ao mesmo tempo; daí a defesa da MCDA.
    - Conferência: PubMed (metadados + resumo). Status: **verificada**.

### Deliberação e participação social

94. **Daniels N, Sabin J. Limits to health care: fair procedures, democratic deliberation, and the legitimacy problem for insurers. Philos Public Aff. 1997;26(4):303-50.**
    - DOI: [10.1111/j.1088-4963.1997.tb00082.x](https://doi.org/10.1111/j.1088-4963.1997.tb00082.x). PMID: 11660435. URL: https://pubmed.ncbi.nlm.nih.gov/11660435/
    - Sem resumo no PubMed; texto não lido. Status: **parcialmente verificada**.

95. **Daniels N, Sabin JE. Accountability for reasonableness: an update. BMJ. 2008;337:a1850.**
    - DOI: [10.1136/bmj.a1850](https://doi.org/10.1136/bmj.a1850). PMID: 18845595. URL: https://pubmed.ncbi.nlm.nih.gov/18845595/
    - Sem resumo no PubMed; texto não lido. Status: **parcialmente verificada**. As quatro condições do modelo (publicidade, relevância, revisão/apelação, garantia de cumprimento) **não foram conferidas nesta sessão**.

96. **NICE Citizens Council.**
    - Segundo o buscador: criado em 2002 para trazer a perspectiva do público a questões sociais, éticas ou morais; suas conclusões alimentaram o documento "Social value judgements" (1ª edição em 2005); último relatório em 2014; um capítulo de livro diz que o NICE o deixou de lado em favor do "NICE Listens".
    - **Não confirmado:** número de membros (30) e data de encerramento.
    - URL: https://www.ncbi.nlm.nih.gov/books/NBK401693
    - Status: **parcialmente verificada**.

97. **Brasil — Conitec: consulta pública e "Perspectiva do Paciente".**
    - Trecho devolvido da página oficial: "A Perspectiva do Paciente é um espaço para a apresentação de um relato de experiência com a condição de saúde e/ou com a tecnologia em avaliação durante a reunião da Conitec. Podem participar da ação usuários do SUS e seus cuidadores e/ou familiares. Todos os interessados devem se inscrever na chamada pública do tema de interesse, disponibilizada nesta página."
    - Um documento de perguntas e respostas da Conitec diz que a recomendação inicial "é então, submetida à consulta pública por 20 dias" e que as contribuições são analisadas, inseridas no relatório técnico e apresentadas na apreciação final.
    - URL oficial: https://www.gov.br/conitec/pt-br/assuntos/participacao-social/perspectiva-do-paciente-1
    - **Não confirmado:** a base legal dos 20 dias (Lei 12.401/2011 ou decreto) e o ano de início da Perspectiva do Paciente. Uma fonte secundária relata mudança recente (inscrição via plataforma federal de participação, não mais por associações) — conferir.
    - Status: **parcialmente verificada** (trechos oficiais via buscador).
    - Literatura indexada sobre o tema (busca PubMed "Conitec" + participação): PMIDs 42945908, 40850219, 37438823, 35894368, 34627182, 33331420, 31660957, 29139001 — **listados pela busca, não lidos**.

### Anos de vida ganhos, evLYG, pesos de equidade e DCEA

- Anos de vida ganhos: nenhuma referência específica foi conferida; Sassi 2006 e Gold 2002 (itens 87 e 88) tratam da relação entre anos de vida e medidas ajustadas.
- evLYG/evLY: itens 29 e 30.
- Pesos de equidade e DCEA: itens 19 a 21 e a nota do NICE de 2025.

---

## O que NÃO foi possível conferir

1. Texto integral de qualquer página web (bloqueio de rede). Todas as citações literais de leis e do NICE vêm de trechos do buscador.
2. Redação literal da seção 1194(e)(2) do IRA (42 U.S.C. § 1320f-3) e do 45 CFR § 84.57.
3. O que a regra final do CMS de nov. 2026 (CMS-4215-F) diz sobre QALY.
4. Documento primário do ICER com o valor 0,851, a data de dez. 2018 e os benchmarks em dólares.
5. Klarman 1968: volume e páginas; conteúdo original.
6. Zeckhauser & Shepard 1976 e Pliskin 1980: texto original (inclusive a frase em que o termo aparece e a formulação das três condições).
7. DOIs de Klarman, Fanshel & Bush, Zeckhauser & Shepard, Pliskin e Hadorn 1991.
8. Conteúdo de artigos sem resumo no PubMed: Weinstein 2009, Neumann & Cohen 2018, Neumann 2014, Jonsen 1986, Daniels & Sabin 1997 e 2008, Murray 2012, Rand 2023 (JAMA), Willke 2024, McCabe 2005 (só a chamada).
9. Conclusões de Brazier 2014 e Longworth 2014 (li só objetivos e métodos do resumo).
10. Recomendação de "preferências da comunidade" em Gold 1996 e os dois casos de referência de Sanders 2016.
11. Episódio capeamento dentário × apendicectomia: posições na lista do Oregon.
12. Noruega: limiares oficiais e eventuais mudanças de 2025.
13. Fonte que compare limiar de custo-efetividade e valor estatístico da vida.
14. Resolução dos DOIs em doi.org.
