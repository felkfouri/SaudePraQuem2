# O modelo por trás do site

Fórmula por fórmula, o que os quatro interativos e o jogo calculam. Tudo roda no navegador, dentro de `index.html`, no bloco entre os comentários `CALC:INICIO` e `CALC:FIM` (objeto `Calc`). Os testes em `tests/` leem esse mesmo bloco. Os nomes entre crases são as funções e constantes do código.

Os valores "esperados" abaixo foram calculados à mão e são os que `tests/calc.js` confere.

## 1. Desenhe uma vida

Dez colunas de um ano. Para cada cenário (sem e com o tratamento): `q[t]`, a qualidade no ano `t` (0 a 1, em passos de 0,05), e `vive`, o último ano de vida.

| | Fórmula | No código |
|---|---|---|
| Fator de desconto | `d(t) = 1 / (1 + r)^(t − 1)` | `fatorDesconto(t, r)` |
| QALYs de um cenário | `Σ q[t] · d(t)`, para `t = 1..vive` | `qalyPerfil(q, vive, r)` |
| Anos de vida | `Σ d(t)`, para `t = 1..vive` | `anosVida(vive, r)` |
| Ganhos | diferença entre os cenários | `compararVidas(sem, com, r)` |

- `r = 0` por padrão; a caixa "Aplicar desconto" usa `r = 0,05`, a taxa da Diretriz de Avaliação Econômica do Ministério da Saúde (3ª ed., 2026; FONTES F53).
- **Convenção:** o primeiro ano não é descontado. A diretriz não fixa essa convenção (recomenda correção de meio de ciclo em modelos); a escolha aqui é didática e está dita no código.
- **Simplificação:** a qualidade é constante dentro de cada ano (degraus), e não há valores negativos no desenho.

Esperados: 2 anos a 0,5 = 1; 10 anos a 1 = 10; 10 anos a 0,7 = 7; três anos a 1 com 5% = 1 + 0,952381 + 0,907029 = 2,859410; `d(11) = 0,613913` (o "0,61" do texto); `d(31) = 0,231377` (o "0,23"). Cenário "Só mais tempo": 4 × 0,5 = 2 contra 8 × 0,5 = 4, ganho de 2 QALYs e 4 anos. Cenário "Prótese": 10 × 0,55 = 5,5 contra 0,6 + 9 × 0,85 = 8,25, ganho de 2,75.

## 2. Seu estado no EQ-5D

Tarifa brasileira do EQ-5D-3L de Santos et al. (2016), método TTO (FONTES F17 a F23). Coeficientes em `TARIFA`, função `eq5dIndice(estado)`.

- Estado 11111: índice 1.
- Qualquer outro: `1 − 0,149 − Σ decrementos`, arredondado a três casas.

| Dimensão | Nível 2 | Nível 3 |
|---|---:|---:|
| Mobilidade | 0,120 | 0,363 |
| Cuidados pessoais | 0,112 | 0,218 |
| Atividades habituais | 0,097 | 0,184 |
| Dor ou mal-estar | 0,064 | 0,168 |
| Ansiedade ou depressão | 0,050 | 0,095 |

Não há termo adicional (N3) nem interações. Os coeficientes foram conferidos no arquivo de cálculo publicado pela EuroQol ("Brazil 3L (Santos TTO 2016)") e coincidem, nos 243 estados, com dois pacotes estatísticos independentes. O artigo original é de acesso fechado e não foi aberto.

Esperados: 11111 = 1; 21111 = 0,731; 11211 = 0,754; 11121 = 0,787; 11113 = 0,756; 11112 = 0,801 (segundo melhor); 22222 = 0,408; 21232 = 1 − 0,149 − 0,120 − 0,097 − 0,168 − 0,050 = 0,416; 33333 = −0,177 (mínimo); 10 estados abaixo de zero.

O texto das perguntas e respostas no site é próprio, não o do instrumento oficial (ver DECISOES D10).

## 3. Qual é o seu peso?

Escada de time trade-off. Pergunta: 10 anos no estado, ou `x` anos com saúde plena? `x` desce por `TTO_ESCADA = [9, 8, 7, 6, 5, 3, 1]` enquanto a pessoa escolhe a saúde plena. `aceitos` = quantos degraus ela aceitou.

- Na indiferença, `10 · u = x`, logo `u = x / 10`.
- `x` de indiferença = média entre o último valor aceito (ou 10, se nenhum) e o primeiro recusado (ou 0, se aceitou todos): `ttoPeso(aceitos)`.

| Aceitos | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
|---|---|---|---|---|---|---|---|---|
| `u` | 0,95 | 0,85 | 0,75 | 0,65 | 0,55 | 0,40 | 0,20 | ≤ 0,10 |

Estados oferecidos e seu valor na tarifa: leve 11121 (0,787), moderado 21222 (0,520), grave 23332 (0,111).

**Diferenças para o TTO das pesquisas:** o protocolo real alterna valores acima e abaixo até a indiferença, tem perguntas próprias para estados piores que a morte e é aplicado por entrevistador. Aqui é uma demonstração; o resultado não é uma medida válida de utilidade.

## 4. Quanto custa um QALY?

Por paciente: custo e QALYs do tratamento atual e do novo; `lim`, o valor de referência. Função `avaliar(dC, dE, lim)`.

- `ΔC = C_novo − C_atual`; `ΔE = E_novo − E_atual`.
- `ΔE > 0` e `ΔC ≤ 0`: **dominante**. `ΔE ≤ 0` e `ΔC ≥ 0` (não ambos zero): **dominada**. Nos dois casos não se calcula a razão.
- `ΔE > 0` e `ΔC > 0`: `RCEI = ΔC / ΔE`; aceita pela regra se `RCEI ≤ lim`.
- `ΔE < 0` e `ΔC < 0`: `RCEI = ΔC / ΔE` é a economia por QALY perdido; aceita pela regra se `RCEI ≥ lim`.
- Saúde deslocada: `D = ΔC / lim`. Benefício líquido em saúde: `BLS = ΔE − ΔC / lim`. Nos dois quadrantes com troca, `BLS ≥ 0` equivale ao veredito da RCEI (o teste confere).

`lim` = R$ 40.000 (valor de referência da Conitec) ou R$ 120.000 (3 vezes, admitido em quatro situações; FONTES F37 a F41).

**Hipótese didática:** `D` trata o valor de referência como se fosse o custo de oportunidade do sistema (quanto custa produzir 1 QALY na margem). O valor da Conitec é uma referência de política; estimativas pelo lado da oferta para o Brasil são mais baixas (FONTES F60 a F62). O site diz isso no próprio interativo.

Esperados: ΔC 60.000 e ΔE 2 → 30.000 (D = 1,5; BLS = 0,5). Prótese: 20.000 / 1 = 20.000. Câncer: 60.000 / 0,25 = 240.000. Rara: 2.400.000 / 8 = 300.000 (acima também de 120.000). Economia: −40.000 / −0,05 = 800.000 por QALY perdido.

## 5. Jogo Plenário

Regras e dados em [`JOGO.md`](JOGO.md). Em resumo:

- Custo por QALY de um caso: `cost × 10⁶ / q` (`rceiCaso`); `null` se o caso economiza (dominante).
- **Contador:** `Σ ganho real dos aprovados + (orçamento − gasto) × 10⁶ / 40.000`. Nota de 0 a 10 por interpolação entre o pior e o melhor resultado possíveis na partida, achados por enumeração de todas as combinações que cabem no orçamento (`limites`).
- **Ouvidora:** pontos dos pedidos atendidos (2 para prioridade alta, 1 para alguma, 0 para comum), menos 2 por episódio de tratamento desigual. Nota = 10 × pontos / máximo possível.
- **Praça:** medidor de 0 a 100, começa em 60; nota = medidor / 10.

Todos os números do jogo são ilustrativos.
