# A régua da saúde

**O que é o QALY, a medida que ajuda o SUS a decidir o que paga. Vantagens e limitações.**

Guia interativo para o público geral, com quatro interativos e o jogo **Plenário**. Produto técnico da disciplina de Análise Econômica em Saúde, programa de pós-graduação da Faculdade de Medicina da USP, 2026.

É a continuação de [Saúde para quem?](https://felkfouri.github.io/saudepraquem/), que trata da análise de custo-efetividade distributiva. Aqui, a análise distributiva aparece como resposta a uma das limitações do QALY.

## Para quem é

Pessoas sem formação em economia da saúde: usuários do SUS, conselheiros de saúde, estudantes, jornalistas. Foi escrito para ser lido no celular por alguém com ensino médio completo. Cada termo técnico é explicado na primeira vez que aparece.

## O que tem

- **Guia em sete partes:** o problema (orçamento finito e custo de oportunidade); o que é o QALY; de onde vem o peso (EQ-5D, valoração, tarifa brasileira); como vira decisão (custo por QALY, dominância, limiar da Conitec, desconto); cinco vantagens; oito limitações, cada uma com o problema, um exemplo, a resposta de quem defende o QALY e o que se faz na prática; alternativas e complementos. Mais glossário, referências e uma nota sobre o que é dado real e o que é ilustrativo.
- **Desenhe uma vida:** a qualidade de vida ano a ano, com e sem o tratamento; o QALY é a soma; opção de desconto.
- **Um estado de saúde, um número:** cinco respostas viram o peso da tarifa brasileira do EQ-5D-3L (Santos et al., 2016).
- **Qual é o seu peso?:** uma escada de troca de tempo (time trade-off) que compara o peso do leitor com o da tarifa.
- **Quanto custa um QALY?:** custo e QALYs do tratamento novo contra o atual; custo por QALY, dominância, plano de custo-efetividade, saúde deslocada.
- **Plenário:** o jogador integra um comitê de incorporação por seis reuniões. A primeira é jogada sem a régua (só custo e depoimentos); nas seguintes, cada pedido traz custo, QALYs e um depoimento que expõe o que a conta não vê, ou em que ela acerta contra a pressão. Três jurados (Contador, Ouvidora, Praça) sem nota única, jornal no fim, três dificuldades, tutorial e partidas reproduzíveis por código. De 8 a 10 minutos.

## Como usar

É um único arquivo estático, sem build e sem dependências (as fontes vêm do Google Fonts; sem rede, o navegador usa as do sistema).

- **Direto no navegador:** abra `index.html` com duplo clique.
- **Servidor local** (opcional):

  ```bash
  python3 -m http.server 8000
  ```

- **GitHub Pages:** Settings → Pages → branch `main`, pasta `/`.

`index.html#jogo` abre direto o jogo. O tema escuro segue o sistema; para forçar, `<html data-theme="dark">`.

## Como o código está organizado

```
index.html          guia + interativos + jogo (HTML, CSS e JS num arquivo)
docs/PLANO.md       o plano aprovado: mapa do site, fórmulas, conceitos de jogo
docs/MODELO.md      as fórmulas de cada interativo, com exemplos calculados à mão
docs/JOGO.md        regras, dados e jurados do Plenário; como acrescentar pautas
docs/FONTES.md      cada afirmação factual do site, a fonte e o grau de verificação
docs/pesquisa/      notas brutas da checagem de fatos
docs/MEMORIAL.md    memorial descritivo do produto técnico
docs/INVENTARIO.md  o que foi reaproveitado do site original
docs/BANCADA.md     critérios dos quatro avaliadores simulados
docs/COMPREENSAO.md cinco perguntas de compreensão para leigos, com gabarito
docs/DECISOES.md    decisões tomadas e por quê
docs/IDEIAS.md      ideias que ficaram fora desta entrega
tests/              testes dos cálculos, dos dados e do equilíbrio do jogo, e o portão na página real
review/rodada-N/    capturas de tela, relatório do portão, pareceres e triagem de cada rodada
CHANGELOG.md
```

Dentro do `<script>` de `index.html`:

| Parte | O que contém |
|---|---|
| `Calc` (entre `CALC:INICIO` e `CALC:FIM`) | funções puras: tarifa do EQ-5D, área sob a curva e desconto, escada de time trade-off, custo por QALY e dominância, e o motor do jogo (dados, sorteio com semente, jurados) |
| Interativos | estado, `render` e gráficos SVG de cada um |
| Rotas e barra | `#jogo` mostra o jogo, o resto mostra o guia; cada vista guarda a rolagem e o foco |
| Telas do jogo | reunião, ata, jornal e resultado |

## Como verificar e replicar

Precisa de Node 20 ou mais novo.

```bash
npm install
```

```bash
npx playwright install chromium
```

Cálculos, dados e equilíbrio do jogo, sem navegador (segundos):

```bash
npm test
```

Portão na página real: console sem erros, interativos com os valores esperados, links internos, teclado, três partidas completas, acessibilidade (axe-core) e capturas de tela em 375 px e 1280 px:

```bash
node tests/pagina.js review/rodada-1
```

Se já houver um Chromium instalado: `CHROMIUM_PATH=/caminho/do/chromium node tests/pagina.js`.

Os testes leem o bloco `Calc` do próprio `index.html`, então testam o código que roda na página. Os valores esperados estão calculados à mão em [`docs/MODELO.md`](docs/MODELO.md).

## Dado real e dado ilustrativo

- **Reais, com fonte em [`docs/FONTES.md`](docs/FONTES.md):** a tarifa brasileira do EQ-5D-3L; os valores de referência da Conitec (R$ 40 mil por QALY, R$ 35 mil por ano de vida ganho, até 3 vezes em quatro situações); a taxa de desconto de 5% da Diretriz de Avaliação Econômica (3ª ed., 2026); os dados do NICE; as leis e os estudos citados.
- **Ilustrativos:** os exemplos numéricos do texto, os cenários prontos dos interativos e tudo no jogo (tecnologias fictícias, custos, QALYs, depoimentos, pontos dos jurados).

## Como foi feito

Escrito com apoio de inteligência artificial (Claude, da Anthropic), sob direção e revisão do autor. A revisão usou uma bancada de quatro avaliadores simulados por IA (leiga, banca da disciplina, crítico do QALY, checador de fatos), com pareceres e triagem em `review/`. Isso não substitui a leitura por pessoas reais do público-alvo.

## Como citar

> Felipe. *A régua da saúde: o que é o QALY, suas vantagens e limitações* [guia interativo]. São Paulo: Faculdade de Medicina da Universidade de São Paulo; 2026. Disponível em: https://github.com/felkfouri/SaudePraQuem2

## Autoria

Felipe, cirurgião e doutorando na FMUSP. Disciplina de Análise Econômica em Saúde, 2026.

## Licença

Texto e código: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.pt-br). Este site não é o questionário EQ-5D oficial (que pertence à EuroQol Research Foundation), não avalia a saúde de ninguém e não representa a posição da Conitec, do Ministério da Saúde ou da USP.
