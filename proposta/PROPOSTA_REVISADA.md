---
title: "PROPOSTA REVISADA – TRABALHO FINAL – Produto Técnico para a Sociedade/Público em Geral"
lang: pt-BR
---

**Disciplina:** MPR5762 – Avaliação Econômica de Tecnologias em Saúde (FMUSP, 2026)\
**Docentes:** Alessandro Gonçalves Campolina, Hillegonda Maria Dutilh Novaes e Patrícia Coelho de Soárez\
**Grupo 1**

| Discente | Nº USP |
|---|---|
| Felipe Kfouri | 15281489 |
| Leonardo Pinho do Amaral | 16767089 |
| Marcos Vinícius Pereira Mota | 12674418 |
| Tainara Rodrigues Santos | 9309445 |

> **O que mudou em relação à proposta inicial (05/11).** Seguindo o parecer do Prof. Alessandro, o foco passou a ser **o conceito de QALY, seus métodos de cálculo e seu uso em avaliações econômicas e na tomada de decisão**. Saíram do escopo a discussão ampla sobre o funcionamento do SUS e a alocação de recursos em geral, a aversão à desigualdade (ε) e outras abordagens distributivas. O formato de jogo em plataforma digital foi mantido. O produto passa a se chamar **"A régua da saúde"** e o jogo, **"Plenário"**.

# 1. Proposta do produto

**Título:** *A régua da saúde: o que é o QALY e como ele ajuda o SUS a decidir.*

Plataforma digital gratuita (site acessível pelo celular e pelo computador) que reúne um **guia curto com interativos de cálculo** e um **jogo educativo, o Plenário**. Nele, o participante integra um comitê de incorporação de tecnologias e precisa usar o QALY e o custo por QALY para decidir o que incorporar com um orçamento limitado.

O objetivo principal é apresentar ao público geral **(a) o que é o QALY e como ele é calculado** e **(b) como o QALY é usado em avaliações econômicas (análise de custo-utilidade) e nas recomendações de incorporação de tecnologias no SUS**. A ideia é que o participante calcule QALYs e custos por QALY com as próprias mãos, em vez de apenas ler definições.

**Acesso:**

- Site (guia e jogo): https://felkfouri.github.io/SaudePraQuem2/
- Jogo direto: https://felkfouri.github.io/SaudePraQuem2/#jogo
- Código-fonte e documentação: https://github.com/felkfouri/SaudePraQuem2

# 2. Conteúdo técnico abordado

## 2.1 Conceitualização e cálculo de QALYs

- **Conceito.** O QALY (*quality-adjusted life year*, ano de vida ajustado pela qualidade) combina numa única medida a **quantidade** de vida (sobrevida) e a **qualidade** de vida relacionada à saúde [1–4]. Cada período de vida é multiplicado por um peso de utilidade, numa escala em que 1 = saúde plena e 0 = morte. Estados avaliados como piores que a morte recebem valores negativos [5,6].
- **Cálculo.** QALY = Σ (tempo em cada estado de saúde × utilidade do estado). Graficamente, é a **área sob a curva** de qualidade de vida ao longo do tempo. Exemplo: 4 anos com utilidade 0,5 = 2 QALYs; 1 ano em saúde plena = 1 QALY.
- **QALYs ganhos.** O benefício de uma intervenção é a **diferença** entre os QALYs com e sem ela, ou seja, a área entre as duas curvas. Exemplo: sem tratamento, 2 anos com utilidade 0,5 (1 QALY); com tratamento, 4 anos com utilidade 0,75 (3 QALYs). O ganho é de 2 QALYs.
- **Desconto.** Benefícios futuros são descontados. A Diretriz de Avaliação Econômica do Ministério da Saúde recomenda 5% ao ano para custos e efeitos [7]. Um QALY obtido no ano *t* vale 1/(1,05)^t^ QALY hoje.
- **De onde vêm os pesos (utilidades).**
  - *Métodos diretos:* **time trade-off** (TTO), em que se pergunta quantos anos em saúde plena equivalem a *t* anos no estado avaliado (se 10 anos no estado equivalem a 7 em saúde plena, a utilidade é 7/10 = 0,7); **standard gamble**, ou jogo padrão; e **escala visual analógica**, com suas limitações [5,6,8].
  - *Métodos indiretos:* questionários genéricos com tarifa populacional, recomendados pelo Ministério da Saúde [7,9]. O **EQ-5D-3L** descreve a saúde em cinco dimensões (mobilidade, cuidados pessoais, atividades habituais, dor/mal-estar e ansiedade/depressão), com três níveis cada, o que gera 243 estados. A **tarifa brasileira** (Santos et al., 2016, TTO com 9.148 entrevistados) converte cada estado em um peso [10,11]. Exemplo: o estado 21111 (algum problema de mobilidade) vale 1 − 0,149 − 0,120 = **0,731**.
  - Os pesos refletem **preferências da população geral**, e não a opinião de um médico ou do gestor [9,12].

## 2.2 Utilização de QALYs em Avaliação Econômica e na Tomada de Decisão

- **Análise de custo-utilidade.** É a avaliação econômica que usa o QALY como desfecho. É o caso de referência da diretriz brasileira, na perspectiva do SUS [7,4].
- **Razão de custo-efetividade incremental (RCEI).** RCEI = (custo da nova tecnologia − custo da atual) ÷ (QALYs da nova − QALYs da atual). Exemplo: custo adicional de R$ 60 mil e 2 QALYs ganhos dão RCEI = **R$ 30 mil por QALY ganho**.
- **Plano de custo-efetividade e dominância.** Uma tecnologia que custa menos e gera mais QALYs é *dominante*. Uma que custa mais e gera menos é *dominada*. Nos demais quadrantes, a decisão depende da RCEI e do limiar [4,13].
- **Limiar de custo-efetividade e custo de oportunidade.** Em 2022 a Conitec adotou o valor de referência de **R$ 40 mil por QALY**. Esse valor pode chegar a **até 3 vezes** (R$ 120 mil/QALY) em situações definidas: doenças raras, doenças em crianças, doença grave e doença endêmica em populações de baixa renda [14,7]. O limiar representa a saúde que deixa de ser produzida em outros serviços quando o recurso é deslocado para a nova tecnologia (custo de oportunidade) [15–17].
- **O QALY na decisão real.** O custo por QALY é um critério central, mas **não o único**. A Conitec considera também a evidência clínica, o impacto orçamentário e a consulta pública. Tecnologias acima do limiar podem ser incorporadas e tecnologias abaixo dele podem ser recusadas [14,7].
- **Cuidados na interpretação.** O QALY mede ganho de saúde, não o "valor de uma vida". Os questionários genéricos captam mal alguns benefícios (por exemplo, audição, saúde mental e efeito sobre cuidadores). A estimativa de QALYs depende da qualidade da evidência [3,18]. Esses pontos são apresentados apenas para ajudar a interpretar o resultado da avaliação econômica, sem aprofundar abordagens alternativas.

# 3. Fundamentação científica (literatura consultada)

O conteúdo se apoia em três grupos de fontes.

1. **Documentos oficiais brasileiros:** o relatório da Conitec sobre limiares de custo-efetividade [14], a Diretriz de Avaliação Econômica (3ª ed., 2026) [7] e a Diretriz de Qualidade de Vida em Análises Econômicas [9].
2. **Literatura clássica e metodológica sobre o QALY e a análise de custo-utilidade:** desde a formulação de Weinstein e Stason [1] até as revisões de Weinstein, Torrance e McGuire [2], Whitehead e Ali [3] e Sassi [13], além dos manuais de Drummond et al. [4] e Gold et al. [19], dos trabalhos de Torrance [5] e dos protocolos de valoração da EuroQol [6]. Inclui também a tarifa brasileira do EQ-5D-3L [10] e o conjunto oficial de coeficientes da EuroQol [11].
3. **Literatura sobre limiar e custo de oportunidade:** McCabe, Claxton e Culyer [15], Culyer [16], Claxton et al. [17] e Pichon-Riviere et al. [20]. Este último está na base do valor de referência adotado pela Conitec.

Cada afirmação factual do site foi conferida em fonte primária e registrada, com o grau de verificação, no arquivo `docs/FONTES.md` do repositório. Os números dos interativos (tarifa, RCEI, desconto) são testados automaticamente contra valores calculados à mão.

# 4. Público-alvo

Pessoas **sem formação em economia da saúde**: usuários do SUS, conselheiros de saúde e integrantes de associações de pacientes (em especial os que participam de consultas públicas da Conitec), estudantes de graduação da área da saúde, profissionais de saúde de outras áreas e jornalistas. O texto foi escrito para quem tem ensino médio completo e lê pelo celular. Cada termo técnico é explicado na primeira vez em que aparece, e há um glossário.

# 5. Objetivos de aprendizagem

Ao final da experiência (guia + jogo), espera-se que o participante seja capaz de:

1. **Definir** o QALY e explicar por que ele junta, numa única medida, viver mais e viver melhor.
2. **Calcular** QALYs a partir da duração e da utilidade de cada estado de saúde, e os **QALYs ganhos** por uma intervenção (diferença entre duas curvas), reconhecendo o efeito do desconto.
3. **Explicar de onde vêm os pesos de utilidade**: métodos diretos (TTO, *standard gamble*) e indiretos (EQ-5D-3L com a tarifa brasileira), que refletem preferências da população.
4. **Calcular e interpretar a RCEI** (custo por QALY ganho) e **identificar** tecnologias dominantes e dominadas no plano de custo-efetividade.
5. **Comparar** a RCEI com o valor de referência da Conitec e explicar o **custo de oportunidade** envolvido em incorporar uma tecnologia.
6. **Reconhecer** que o custo por QALY é um critério central, mas não o único, numa recomendação de incorporação, e identificar situações em que o QALY capta mal o benefício.

**Verificação da aprendizagem:** cinco perguntas de compreensão (por exemplo, "quantos QALYs são 4 anos com peso 0,5?" e "qual o custo por QALY de um tratamento que custa R$ 60 mil a mais e dá 2 QALYs a mais? Está acima ou abaixo da referência da Conitec?") podem ser aplicadas antes e depois do uso do material.

# 6. Descrição do produto técnico-tecnológico

## 6.1 Formato

- **Plataforma:** site estático em HTML, CSS e JavaScript, de arquivo único. Não exige cadastro, não coleta dados pessoais e não precisa de instalação. Funciona no celular e no computador e, se baixado, também sem internet. Tem tema claro e escuro e foi verificado quanto à acessibilidade (axe-core) e à navegação por teclado.
- **Componentes:**
  1. **Guia curto** em seções: o que é o QALY; de onde vêm os pesos; como o QALY vira decisão (RCEI, dominância, limiar da Conitec, desconto); cuidados na interpretação; glossário e referências.
  2. **Quatro interativos de cálculo:**
     - *Desenhe uma vida:* o participante ajusta a qualidade de vida ano a ano, com e sem tratamento, e vê os QALYs como área e o ganho como diferença, com opção de desconto.
     - *Um estado de saúde, um número:* cinco respostas no formato do EQ-5D-3L são convertidas em peso pela tarifa brasileira.
     - *Qual é o seu peso?:* uma escada de *time trade-off* compara o peso do próprio participante com o da tarifa.
     - *Quanto custa um QALY?:* o participante informa custos e QALYs de duas tecnologias e obtém a RCEI, a posição no plano de custo-efetividade, a dominância e a comparação com o valor de referência.
  3. **Jogo Plenário:** simulação de um comitê de incorporação (descrita a seguir).
- **Licença:** CC BY 4.0, de uso e adaptação livres com citação.

## 6.2 Dinâmica de veiculação

- **Link público e QR Code** no slide de divulgação, para compartilhamento em redes sociais e aplicativos de mensagem.
- **Uso em grupo:** em aulas de graduação e residência, ou em reuniões de conselhos de saúde e associações de pacientes, por exemplo antes de uma consulta pública da Conitec. Cada partida tem um **código** (1 a 9999). Com o mesmo código, todos jogam a mesma partida, o que permite à turma comparar e discutir as decisões ao final.
- **Uso individual:** leitura do guia em cerca de 15 minutos e uma partida padrão em cerca de 10 minutos.

## 6.3 Roteiro de participação no jogo Plenário

1. **Entrada.** O participante acessa o link, lê uma introdução curta ("você integra um comitê que decide o que o sistema público vai oferecer, com um orçamento limitado") e escolhe:
   - a **duração**: 3 reuniões (padrão, cerca de 10 minutos), 4 ou 6;
   - a **dificuldade**: *fácil*, em que cada pedido traz um selo e uma dica; *normal*; ou *difícil*, em que o custo por QALY não aparece e o participante precisa calculá-lo;
   - o **tutorial**, ligado por padrão;
   - o **código da partida**, que é opcional.
2. **Reunião 1, sem a régua.** Chegam três pedidos de incorporação (por exemplo, uma proteção para bebês, uma prótese de quadril e um remédio para câncer) apenas com o **custo** e um **depoimento**. O orçamento não permite aprovar todos. O participante decide **Incorporar / Não incorporar**. Na ata, o jogo revela os **QALYs ganhos e o custo por QALY** de cada pedido. O participante percebe, assim, o que muda quando há uma medida comum para comparar intervenções muito diferentes.
3. **Reuniões seguintes, com a régua.** Cada pedido traz o **custo**, os **QALYs ganhos**, o **custo por QALY** (comparado ao valor de referência de R$ 40 mil e ao limite de 3 vezes), a **força da evidência** e um depoimento. O participante decide respeitando o orçamento do mandato e o teto por reunião. A cada reunião, a **ata** mostra os QALYs obtidos e a "saúde deslocada" (o que o mesmo dinheiro produziria em outros serviços, ilustrando o custo de oportunidade). Há casos em que o custo por QALY ajuda a resistir a pressões, como um remédio caro com campanha publicitária ou uma tecnologia dominante. Há também casos em que o número sozinho capta mal o benefício.
4. **Fim do mandato: o jornal.** Uma edição de jornal fictícia mostra o **ganho real** de cada tecnologia incorporada, que pode diferir da estimativa conforme a força da evidência. Três jurados avaliam a gestão sem uma nota única:
   - o **Contador**, pelo total de QALYs produzidos;
   - a **Praça**, pela confiança pública e pela coerência das decisões;
   - a **Ouvidora**, pela prioridade dada a casos graves, critério que a Conitec admite ao aceitar até 3 vezes o valor de referência.
   O participante recebe um título descritivo da gestão (por exemplo, "gestão da régua").
5. **Fechamento.** Links levam de cada caso de volta à seção correspondente do guia. O participante pode jogar de novo com outra dificuldade ou com outro código.

## 6.4 Instruções necessárias

- **Para jogar:** abrir o link em qualquer navegador atualizado (no celular ou no computador) e seguir o tutorial da primeira reunião. Não há cadastro.
- **Para mediadores (professores, conselheiros):** definir um código de partida comum. Pedir que os participantes anotem suas decisões e os três resultados finais. Discutir em grupo: "por que vocês aprovaram (ou recusaram) o pedido acima do valor de referência?". As cinco perguntas de compreensão podem ser usadas antes e depois.
- **Transparência:** o site informa que tecnologias, custos, QALYs e depoimentos do jogo são **fictícios e ilustrativos**. São reais, com fonte citada, a tarifa brasileira do EQ-5D-3L, os valores de referência da Conitec e a taxa de desconto da diretriz.

# 7. Cronograma

| Data | Atividade |
|---|---|
| até 04/11 | Planejamento, proposta inicial e organização de conceitos |
| 05/11 | Entrega da proposta inicial |
| 20/11 | Envio da proposta revisada (este documento) |
| 21/11 a 10/12 | Ajuste do conteúdo ao foco no QALY (retirada das seções sobre abordagens alternativas e análise distributiva), testes de cálculo e de usabilidade, aplicação piloto das perguntas de compreensão |
| 11/12 | Primeira apresentação do produto |
| 12/12 a 17/12 | Refinamento dos casos do jogo e do texto a partir das sugestões |
| 18/12 | Entrega final: produto, relatório técnico e slide de divulgação |

# 8. Referências

1. Weinstein MC, Stason WB. Foundations of cost-effectiveness analysis for health and medical practices. N Engl J Med. 1977;296(13):716-21.
2. Weinstein MC, Torrance G, McGuire A. QALYs: the basics. Value Health. 2009;12 Suppl 1:S5-9.
3. Whitehead SJ, Ali S. Health outcomes in economic evaluation: the QALY and utilities. Br Med Bull. 2010;96:5-21.
4. Drummond MF, Sculpher MJ, Claxton K, Stoddart GL, Torrance GW. Methods for the economic evaluation of health care programmes. 4th ed. Oxford: Oxford University Press; 2015.
5. Torrance GW. Measurement of health state utilities for economic appraisal. J Health Econ. 1986;5(1):1-30.
6. Oppe M, Rand-Hendriksen K, Shah K, Ramos-Goñi JM, Luo N. EuroQol protocols for time trade-off valuation of health outcomes. Pharmacoeconomics. 2016;34(10):993-1004.
7. Brasil. Ministério da Saúde. Diretrizes metodológicas: Diretriz de Avaliação Econômica. 3ª ed. Brasília: Ministério da Saúde; 2026.
8. Brazier J, Rowen D, Karimi M, Peasgood T, Tsuchiya A, Ratcliffe J. Experience-based utility and own health state valuation for a health state classification system: why and how to do it. Eur J Health Econ. 2018;19(6):881-91.
9. Brasil. Ministério da Saúde. Diretrizes metodológicas: Qualidade de Vida em Análises Econômicas. Brasília: Ministério da Saúde; 2026.
10. Santos M, Cintra MACT, Monteiro AL, Santos B, Gusmão-Filho F, Andrade MV, et al. Brazilian valuation of EQ-5D-3L health states: results from a saturation study. Med Decis Making. 2016;36(2):253-63.
11. EuroQol Research Foundation. Value sets: Brazil 3L (Santos TTO 2016) [internet]. Disponível em: https://euroqol.org/information-and-support/resources/value-sets/
12. Dolan P. Whose preferences count? Med Decis Making. 1999;19(4):482-6.
13. Sassi F. Calculating QALYs, comparing QALY and DALY calculations. Health Policy Plan. 2006;21(5):402-8.
14. Brasil. Ministério da Saúde. Comissão Nacional de Incorporação de Tecnologias no SUS (Conitec). O uso de limiares de custo-efetividade nas decisões em saúde: recomendações da Comissão Nacional de Incorporação de Tecnologias no SUS. Brasília: Ministério da Saúde; 2022.
15. McCabe C, Claxton K, Culyer AJ. The NICE cost-effectiveness threshold: what it is and what that means. Pharmacoeconomics. 2008;26(9):733-44.
16. Culyer AJ. Cost-effectiveness thresholds in health care: a bookshelf guide to their meaning and use. Health Econ Policy Law. 2016;11(4):415-32.
17. Claxton K, Martin S, Soares M, Rice N, Spackman E, Hinde S, et al. Methods for the estimation of the National Institute for Health and Care Excellence cost-effectiveness threshold. Health Technol Assess. 2015;19(14):1-503.
18. Neumann PJ, Cohen JT. QALYs in 2018—advantages and concerns. JAMA. 2018;319(24):2473-4.
19. Gold MR, Siegel JE, Russell LB, Weinstein MC, editors. Cost-effectiveness in health and medicine. New York: Oxford University Press; 1996.
20. Pichon-Riviere A, Drummond M, Palacios A, Garcia-Marti S, Augustovski F. Determining the efficiency path to universal health coverage: cost-effectiveness thresholds for 174 countries based on growth in life expectancy and health expenditures. Lancet Glob Health. 2023;11(6):e833-42.
