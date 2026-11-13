# Plenário: regras e dados do jogo

Como o jogo funciona por dentro e como acrescentar conteúdo. O motor fica no bloco `CALC` do `index.html` (sem acesso à página, por isso roda também nos testes em Node); as telas ficam na seção "Jogo Plenário" do script.

O jogador é membro de um comitê nacional de incorporação de tecnologias. A intenção didática: sentir, jogando, uma vantagem do QALY (a moeda comum e o custo de oportunidade) e várias limitações (o que a conta não vê).

**Tudo no jogo é ilustrativo:** tecnologias fictícias, custos, QALYs, depoimentos, pesos dos jurados.

## Configuração (`cfg`)

| Opção | Valores | Efeito |
|---|---|---|
| Duração | 6 reuniões (padrão) ou 4 | número de pautas |
| Dificuldade | fácil, normal, difícil | orçamento de R$ 700, 600 ou 500 milhões (`ORC`); no fácil o cartão traz selo e dica; no difícil não traz o custo por QALY |
| Tutorial | ligado (padrão) | a primeira reunião é a pauta fixa `TUTORIAL`, sem os QALYs, e as duas primeiras têm dicas |
| Código da partida | 1 a 9999 | semente |

### Semente e reprodutibilidade

`rng(seed)` é um gerador mulberry32 (o mesmo do Cobertor Curto). A partida usa `rng(código × 7919 + reuniões)`. Em `novaPartida`, nesta ordem: sorteia o **ganho real** de todos os casos do baralho (para todos, sempre, na ordem do código) e depois embaralha as pautas. Nenhum sorteio depende das escolhas do jogador: com o mesmo código, duração e tutorial, a partida é idêntica. O jornal usa um gerador próprio (`G.jr`) para data, manchete, cartas e breves.

Acrescentar ou reordenar pautas ou casos muda o que cada código produz.

## Ciclo

```
novaPartida(cfg)       sorteia ganhos reais e pautas; orçamento cheio; Praça em 60
   │
   ├─ a cada reunião: o jogador marca Incorporar / Não incorporar em cada caso (2 ou 3)
   │     sobra(G, dec) diz se as decisões cabem no orçamento
   │
fecharReuniao(G, dec)  paga, registra, atualiza a Praça; devolve a ata (dC, dO, dP, motivos)
   │
resultado(G)           depois da última: placares, limites, notas, título, acertos de fim de mandato
```

## Os casos

Cada pauta (`PAUTAS`, mais a `TUTORIAL`) tem tema, introdução e dois ou três casos. Campos de um caso:

| Campo | Significado |
|---|---|
| `id`, `nm`, `oq` | identificador, nome e o que é |
| `cost` | custo total, em R$ milhões; negativo = economiza (caso dominante) |
| `q` | QALYs ganhos, segundo o dossiê |
| `ev` | força da evidência: `forte`, `moderada`, `fraca` |
| `w` | prioridade para a Ouvidora: 1 (comum), 1.2 (alguma), 1.7 (alta) |
| `com` | comoção pública, de 0 a 3 |
| `dep` | depoimento `{t, q}` (texto e quem fala) |
| `insp` | o tipo de caso real que inspira |
| `viu`, `nao` | o que a régua mostrou; o que ficou fora da conta (pode ser vazio) |
| `lim` | número da limitação do guia que o caso ilustra (0 = nenhuma) |
| `extra` | linha a mais no cartão (opcional) |
| `irma` | id do caso "gêmeo" na mesma pauta: mesmo tratamento para outro grupo |
| `virada` | `{t, sim, nao}`: fato revelado no fim e o efeito na Praça se aprovou ou recusou |

### As pautas e o que cada uma faz sentir

| Pauta | Casos | O que está em jogo |
|---|---|---|
| Tutorial: três pedidos, uma verba | proteção de bebês (R$ 20 mil/QALY), próteses de quadril (20 mil), remédio de câncer (200 mil) | **Vantagem:** sem a régua, não há como comparar; ganha a história mais forte |
| Mesma conta, pessoas diferentes | dois programas idênticos em custo e QALYs | Limitação 1 (distribuição) |
| Quantos anos pela frente | válvula para maiores de 85 (80 mil); reabilitação pós-AVC (35 mil) | Limitação 2 (idade) |
| O mesmo remédio, duas contas | mesmo remédio, 2 anos a mais: 60 mil/QALY em quem tem peso 0,5; 35 mil em quem tem 0,85 | Limitação 3 (deficiência) |
| O que cabe em cinco perguntas | aparelhos auditivos (83 mil); terapia para depressão (25 mil) | Limitação 4; e um caso em que o instrumento enxerga bem |
| Quem cuida | centro-dia para demência (100 mil, evidência fraca); anticoagulante (40 mil) | Limitação 4 (cuidadores); vantagem: o pedido sem plateia |
| A campanha na TV | terapia gênica (400 mil); teste de HPV (15 mil) | Limitação 6 (resgate); vantagem: quem não está na sala |
| O fim da vida | remédio de 3 meses (250 mil); cuidados paliativos (100 mil) | Limitações 6 e 4 |
| A novidade | remédio "eu também" com lobby (400 mil); caneta mais barata e melhor (dominante) | **Vantagem:** a régua acerta contra a pressão |
| Agora ou daqui a trinta anos | vacina com ganho em 30 anos (44 mil com desconto; 10 mil sem); stent (40 mil) | Limitação 7 (desconto) |

## Evidência e ganho real

`SPREAD`: forte 0,9 a 1,1; moderada 0,7 a 1,2; fraca 0,3 a 1,3. O ganho real de cada caso é `q × fator`, sorteado uniformemente na faixa. O jogador só vê o ganho real no jornal. Os jurados usam o real; as reações durante a partida usam a estimativa.

## Os três jurados

Não há nota única (DECISOES D12).

**Contador (saúde total).** `C = Σ ganho real dos aprovados + (B − gasto) × 10⁶ / 40.000`. O segundo termo é o dinheiro que sobrou, convertido em saúde "na rede" (hipótese do jogo). Nota: `10 × (C − C_pior) / (C_melhor − C_pior)`, com o pior e o melhor resultados possíveis na partida, por enumeração (até 2¹³ combinações).

**Ouvidora (quem estava pior).** Soma `pontos(caso)` dos aprovados: 2 para `w = 1.7`, 1 para `w = 1.2`, 0 para `w = 1`. Perde 2 pontos (`DISC`) quando o mesmo tratamento é aprovado para um grupo e negado ao "irmão". Nota: `10 × pontos / máximo possível no orçamento`.

**Praça (confiança).** Medidor de 0 a 100, começa em 60 (`PRACA0`). Em cada reunião:

| Evento | Efeito |
|---|---|
| Aprovar caso com comoção `c` | `+4c` |
| Recusar caso com comoção `c` | `−6c` |
| Aprovar caso dominante | `+3` |
| Incoerência: aprovar um caso acima da referência depois de recusar outro com custo por QALY menor e prioridade igual ou maior | `−5` |
| Aprovar para um grupo e negar ao "irmão" | `−10` |

No fim (`resultado`): virada do caso com patrocínio escondido (`−12` se aprovou, `+12` se recusou); `−10` se o Contador ficou abaixo do que a rede renderia sozinha ("as filas cresceram"); `+8` se não houve nenhuma incoerência e houve ao menos uma aprovação e uma recusa. Nota = medidor / 10.

A regra de incoerência aceita a exceção justificada: aprovar um caso mais caro por QALY não conta como incoerência se ele tem prioridade maior que o recusado. É a versão de jogo da ideia de "modificador" (gravidade, raridade).

### Por que a Ouvidora não usa pesos sobre os QALYs

O plano previa `Σ peso × QALYs`, com pesos 1 / 1,2 / 1,7 (os do modificador de gravidade do NICE). A simulação mostrou que, com esses pesos, a Ouvidora dava sempre a mesma resposta que o Contador (pesos de até 1,7 não revertem diferenças de 5 a 10 vezes no custo por QALY). Um jurado redundante não serve ao jogo. A Ouvidora passou a contar pedidos atendidos, uma noção de justiça diferente (atender a necessidade, não somar ganhos). O achado virou uma frase do guia, na limitação 6. Ver DECISOES D14.

## Título da gestão

Descritivo, sem ranking. Em ordem: nada incorporado → "de portas fechadas"; as três notas a até 2 pontos uma da outra → "equilibrista"; nenhum aprovado acima da referência → "da régua"; maior nota na Praça → "da praça"; maior na Ouvidora → "de quem está pior"; senão → "da conta".

## Equilíbrio

`tests/equilibrio.js` joga 300 códigos em cada combinação de dificuldade, duração e tutorial com seis estratégias fixas (só a régua; só o depoimento; aprova tudo; nada; prioriza os graves até 3 vezes a referência; ao acaso) e exige: nenhuma tira 9 ou mais nos três jurados; a régua vence no Contador e perde na Praça e na Ouvidora; o depoimento vence a régua na Praça; nenhuma estratégia tem as três médias acima de 7,5.

## Como acrescentar uma pauta

1. Acrescente um objeto a `PAUTAS` com dois casos, seguindo os campos acima. Todo caso precisa de depoimento, `insp` e `viu`.
2. Se o caso ilustra uma limitação, preencha `nao` e `lim` (o número precisa existir no guia como `id="lim-N"`).
3. Rode `npm test`: `dados.js` confere os campos; `equilibrio.js` confere que o jogo continua sem estratégia dominante.
4. Rode `node tests/pagina.js` para as partidas na página e a acessibilidade.
