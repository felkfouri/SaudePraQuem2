---
title: "PROPOSTA REVISADA – TRABALHO FINAL – Produto Técnico para a Sociedade/Público em Geral"
lang: pt-BR
---

Felipe Kfouri (Nº USP 15281489) · Leonardo Pinho do Amaral (Nº USP 16767089) · Marcos Vinícius Pereira Mota (Nº USP 12674418) · Tainara Rodrigues Santos (Nº USP 9309445) — Grupo 1, MPR5762

# 1. Proposta do produto

**"A régua da saúde: o que é o QALY e como ele ajuda o SUS a decidir"** é uma plataforma digital gratuita, com um guia curto, quatro interativos de cálculo e o jogo educativo **Plenário**. Atendendo ao parecer, o foco passou a ser **o conceito de QALY, seus métodos de cálculo e seu uso em avaliações econômicas e na tomada de decisão**. Saíram do produto a discussão ampla sobre o SUS, a aversão à desigualdade e as abordagens alternativas ou distributivas.

- **Site e jogo:** https://felkfouri.github.io/SaudePraQuem2/ (jogo direto: …/#jogo)
- **Código e documentação:** https://github.com/felkfouri/SaudePraQuem2

# 2. Conteúdo

**2.1 Conceito e cálculo de QALYs.**

- **Conceito:** o QALY combina sobrevida e qualidade de vida numa única medida, com peso 1 para saúde plena e 0 para morte. É possível haver estados com peso abaixo de zero [1–3].
- **Cálculo:** QALY = Σ (tempo × utilidade), que corresponde à área sob a curva. Por exemplo, 4 anos com peso 0,5 equivalem a 2 QALYs.
- **QALYs ganhos e desconto:** o ganho de uma intervenção é a diferença entre as curvas com e sem ela, com desconto de 5% ao ano [4].
- **Origem dos pesos:** os métodos diretos são o *time trade-off*, o *standard gamble* e a escala visual [5,6]. O método indireto é o EQ-5D-3L com a tarifa brasileira; por exemplo, o estado 21111 vale 0,731 [7,8].

**2.2 Uso de QALYs em avaliação econômica e na decisão.**

- **Análise de custo-utilidade:** a RCEI é o custo incremental dividido pelos QALYs incrementais. Por exemplo, R$ 60 mil ÷ 2 QALYs = R$ 30 mil por QALY [3,4].
- **Plano de custo-efetividade:** mostra a dominância (tecnologia que custa menos e gera mais QALYs) e a dominação (o contrário).
- **Referência da Conitec:** o valor é de R$ 40 mil por QALY, admitindo até 3 vezes esse valor em situações definidas [9]. O limiar expressa o custo de oportunidade [10].
- **Peso na decisão:** a RCEI é um critério central, mas não o único.

**Vantagens e limitações** (por exemplo, idade, deficiência, o que o EQ-5D não capta e de quem são as preferências) aparecem como cuidados na interpretação do resultado.

# 3. Fundamentação científica

O material se apoia em três grupos de fontes:

- **Diretrizes do Ministério da Saúde:** Avaliação Econômica (3ª ed.) e Qualidade de Vida [4,11].
- **Relatório da Conitec sobre limiares** [9].
- **Literatura metodológica sobre QALY, utilidades e limiar:** inclui a tarifa brasileira do EQ-5D-3L [1–3,5–8,10].

Cada afirmação do site tem fonte registrada no repositório (`docs/FONTES.md`). Os cálculos são testados automaticamente contra valores feitos à mão.

# 4. Público-alvo

Pessoas sem formação em economia da saúde: usuários do SUS, conselheiros de saúde, associações de pacientes, estudantes de graduação e jornalistas. A leitura é pensada para quem tem ensino médio completo e usa o celular.

# 5. Objetivos de aprendizagem

Ao final, o participante deverá ser capaz de:

1. definir o QALY;
2. calcular QALYs e QALYs ganhos, incluindo o desconto;
3. explicar de onde vêm os pesos de utilidade;
4. calcular e interpretar a RCEI e a dominância;
5. comparar a RCEI com a referência da Conitec e explicar o custo de oportunidade;
6. reconhecer vantagens e limitações do QALY numa decisão de incorporação.

A aprendizagem será verificada com cinco perguntas de compreensão, aplicadas antes e depois.

# 6. Descrição do produto técnico-tecnológico

**Formato.** É um site de arquivo único que funciona no celular e no computador, sem cadastro e sem coleta de dados. É acessível (navegação por teclado, tema claro e escuro) e funciona offline. A licença é CC BY 4.0. Interativos: *Desenhe uma vida* (QALY como área sob a curva); *Um estado de saúde, um número* (EQ-5D pela tarifa brasileira); *Qual é o seu peso?* (escada de *time trade-off*); *Quanto custa um QALY?* (RCEI, plano de custo-efetividade e limiar).

**Veiculação.** O link e um QR Code vão no slide de divulgação, para compartilhamento em redes e aplicativos de mensagem. O produto também pode ser usado em aulas e conselhos de saúde. Com um código de partida comum, todos jogam a mesma partida e depois discutem as decisões.

**Roteiro do jogo Plenário** (cerca de 10 minutos):

1. **Configuração:** o participante escolhe a duração (3, 4 ou 6 reuniões) e a dificuldade. No nível difícil, ele mesmo calcula o custo por QALY.
2. **Reunião 1, sem a régua:** três pedidos chegam só com custo e depoimento, e o orçamento não cobre todos. Na ata, aparecem os QALYs e o custo por QALY de cada pedido.
3. **Reuniões seguintes:** cada pedido traz custo, QALYs ganhos, RCEI (comparada à referência e ao limite de 3 vezes), força da evidência e depoimento. O participante decide entre "Incorporar" e "Não incorporar". A ata mostra os QALYs obtidos e a saúde deslocada, que representa o custo de oportunidade.
4. **Fim do mandato:** um jornal mostra o ganho real de cada pedido. Três jurados avaliam as decisões: o **Contador** (QALYs totais), a **Ouvidora** (prioridade a casos graves) e a **Praça** (confiança e coerência).
5. **Fechamento:** links levam a cada parte correspondente do guia.

**Instruções.** Basta abrir o link e seguir o tutorial. Os casos e os números do jogo são fictícios. A tarifa, o limiar e a taxa de desconto são reais e têm fonte.

# 7. Cronograma

**20/11:** proposta revisada · **até 10/12:** testes de usabilidade e piloto das perguntas · **11/12:** apresentação · **12–17/12:** refinamento · **18/12:** entrega final (produto, relatório e slide).

# 8. Referências

1. Weinstein MC, Torrance G, McGuire A. QALYs: the basics. Value Health. 2009;12 Suppl 1:S5-9.
2. Whitehead SJ, Ali S. Health outcomes in economic evaluation: the QALY and utilities. Br Med Bull. 2010;96:5-21.
3. Drummond MF, Sculpher MJ, Claxton K, Stoddart GL, Torrance GW. Methods for the economic evaluation of health care programmes. 4th ed. Oxford: OUP; 2015.
4. Brasil. Ministério da Saúde. Diretrizes metodológicas: Diretriz de Avaliação Econômica. 3ª ed. Brasília; 2026.
5. Torrance GW. Measurement of health state utilities for economic appraisal. J Health Econ. 1986;5(1):1-30.
6. Oppe M, et al. EuroQol protocols for time trade-off valuation of health outcomes. Pharmacoeconomics. 2016;34(10):993-1004.
7. Santos M, et al. Brazilian valuation of EQ-5D-3L health states: results from a saturation study. Med Decis Making. 2016;36(2):253-63.
8. EuroQol Research Foundation. Value sets: Brazil 3L (Santos TTO 2016). https://euroqol.org/information-and-support/resources/value-sets/
9. Brasil. Ministério da Saúde. Conitec. O uso de limiares de custo-efetividade nas decisões em saúde: recomendações da Conitec. Brasília; 2022.
10. McCabe C, Claxton K, Culyer AJ. The NICE cost-effectiveness threshold: what it is and what that means. Pharmacoeconomics. 2008;26(9):733-44.
11. Brasil. Ministério da Saúde. Diretrizes metodológicas: Qualidade de Vida em Análises Econômicas. Brasília; 2026.
