# Memorial descritivo do produto técnico

**Título:** A régua da saúde: o que é o QALY, suas vantagens e limitações
**Tipo:** produto técnico para a sociedade (material didático interativo, de acesso aberto)
**Autor:** Felipe, doutorando na Faculdade de Medicina da Universidade de São Paulo
**Disciplina:** Análise Econômica em Saúde, 2026
**Data:** novembro de 2026

## 1. Objetivo

Explicar ao público geral o que é o QALY (ano de vida ajustado pela qualidade), como ele entra nas decisões sobre o que o SUS oferece, e quais são suas vantagens e limitações, de modo que o leitor consiga:

1. dizer o que é um QALY e fazer a conta simples (tempo × qualidade);
2. dizer de onde vêm os pesos de qualidade de vida;
3. entender como o custo por QALY e o limiar entram numa recomendação da Conitec;
4. discutir vantagens e limitações com argumentos dos dois lados e formar opinião própria.

## 2. Público-alvo

Pessoas sem formação em economia da saúde: usuários do SUS, conselheiros de saúde, estudantes de graduação, jornalistas, profissionais de saúde de outras áreas. Referência de leitura: ensino médio completo, lendo pelo celular.

## 3. Justificativa

As recomendações de incorporação de tecnologias no SUS usam o custo por QALY e um valor de referência desde 2022. Essas decisões afetam a todos e passam por consulta pública, mas o vocabulário (QALY, RCEI, limiar, utilidade, desconto) afasta justamente quem é chamado a opinar. O material disponível em português é, na maior parte, técnico. Ao mesmo tempo, o QALY é alvo de críticas sérias (sobre idade, deficiência, gravidade, o que o instrumento capta), que costumam chegar ao público em versões simplificadas: ou "o governo põe preço na vida", ou "é só uma conta". Faltava um material que explicasse a medida e apresentasse as críticas com as respectivas respostas, sem conduzir o leitor.

O produto dá continuidade a um trabalho anterior do autor, "Saúde para quem?", sobre análise de custo-efetividade distributiva.

## 4. Conteúdo

Site estático de um arquivo, com três camadas:

- **Guia** em sete partes: o problema; o que é o QALY; de onde vem o peso (EQ-5D, métodos de valoração, tarifa brasileira); como vira decisão (RCEI, dominância, limiar da Conitec, desconto); cinco vantagens; oito limitações; alternativas e complementos. Cada limitação segue a mesma estrutura: o problema, um exemplo, a resposta de quem defende o QALY, o que se faz na prática. Glossário, referências e nota de transparência.
- **Quatro interativos:** desenhar a curva de qualidade de vida e ver o QALY como área; converter um estado do EQ-5D em peso pela tarifa brasileira; responder a uma escada de time trade-off e comparar o próprio peso com o da tarifa; calcular o custo por QALY de uma tecnologia e vê-la no plano de custo-efetividade.
- **Jogo Plenário:** o jogador integra um comitê de incorporação por seis reuniões, com orçamento fixo. A primeira reunião é jogada sem os QALYs, só com custo e depoimentos; em seguida o jogo mostra os mesmos pedidos na escala comum (a vantagem é sentida). Nas reuniões seguintes, cada pauta opõe a conta a um depoimento que expõe uma limitação, e há casos em que a conta acerta contra a pressão. Três jurados com critérios diferentes, sem nota única.

## 5. Método de construção

1. **Reconhecimento:** inventário do site anterior, classificando cada parte como reutilizar, adaptar ou descartar (`INVENTARIO.md`).
2. **Checagem de fatos antes da redação:** cada afirmação factual prevista foi buscada em fonte primária (relatório da Conitec de 2022; Diretriz de Avaliação Econômica, 3ª ed., 2026; manual do NICE; arquivos de cálculo da EuroQol; texto das leis americanas; registros do PubMed). O resultado é `FONTES.md`: 114 fatos e 119 referências, cada um com status "verificada", "parcial" ou "não verificada". O que não pôde ser verificado na fonte não é afirmado no site.
3. **Plano** aprovado pelo autor antes da construção (`PLANO.md`), com título, mapa, fórmulas, três conceitos de jogo e as perguntas de compreensão.
4. **Construção** em HTML, CSS e JavaScript puros, sem bibliotecas, reaproveitando do site anterior o estilo, a navegação, o gerador com semente, o jornal e o tutorial.
5. **Ciclo de revisão** em rodadas (seção 6).

O produto foi escrito com apoio de inteligência artificial generativa (Claude, da Anthropic), sob direção e revisão do autor, que responde pelo conteúdo.

## 6. Validação

A validação teve duas partes, e é importante dizer o que cada uma é.

**Testes automáticos (verificação objetiva).**
- Cálculos: 98 verificações com valores esperados calculados à mão (`MODELO.md`), entre elas o índice de nove estados do EQ-5D conferidos com a tarifa publicada, o total de 243 estados e os 10 abaixo de zero.
- Jogo: consistência dos dados e equilíbrio, com 21.600 partidas simuladas por seis estratégias fixas; nenhuma estratégia simples agrada aos três jurados.
- Página real: nenhum erro no console, interativos com os valores esperados, links internos, navegação por teclado, três partidas completas, acessibilidade (axe-core, sem violação séria ou crítica, nos temas claro e escuro) e capturas de tela em 375 px e 1280 px.

**Bancada de avaliadores simulados por IA (revisão por critérios).** Quatro avaliadores independentes, que não acompanharam a construção, leram o site e as capturas de tela e emitiram parecer em formato fixo: uma leitora leiga (que responde a cinco perguntas de compreensão e precisa acertar quatro), uma banca de economia da saúde, um crítico do QALY "dos dois lados" e um checador de fatos. Cada item dos pareceres foi aceito ou rejeitado com justificativa (`review/rodada-N/TRIAGEM.md`). O critério de saída era a aprovação dos quatro, sem pendência bloqueante ou importante. O resultado de cada rodada está em `review/` e no `CHANGELOG.md`.

**A bancada é uma simulação.** Ela ajuda a encontrar erros e desequilíbrios, mas não é evidência de que pessoas reais do público-alvo compreendem o material, nem substitui a avaliação da banca da disciplina.

## 7. Limitações do produto

- Não houve teste com pessoas do público-alvo.
- O artigo original da tarifa brasileira é de acesso fechado: os coeficientes foram conferidos nos arquivos de cálculo da EuroQol e em fontes secundárias concordantes, não no artigo.
- Parte das leis brasileiras citadas foi conferida por fontes secundárias, porque o portal da legislação estava inacessível durante a checagem; o status de cada fato está em `FONTES.md`.
- O interativo do EQ-5D usa redação própria, não o instrumento oficial; a escada de time trade-off é uma demonstração, não uma medida válida.
- "Saúde deslocada" e a conversão do orçamento que sobra em QALYs, no jogo, tratam o valor de referência como custo de oportunidade. É uma hipótese didática, declarada no site.
- O jogo simplifica o processo real: não há orçamento fixo por mandato na Conitec, a comissão recomenda e o Ministério decide, e os pesos dos jurados são inventados.
- Os valores de referência e as normas mudam; o conteúdo reflete a situação de novembro de 2026.

## 8. Como acessar

- Código, testes, fontes e pareceres: https://github.com/felkfouri/SaudePraQuem2
- Para ler: abrir `index.html` em qualquer navegador (não precisa de internet nem de instalação). Depois de publicado no GitHub Pages, o endereço previsto é `https://felkfouri.github.io/SaudePraQuem2/`.
- Licença: CC BY 4.0.
