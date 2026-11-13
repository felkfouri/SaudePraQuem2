# Inventário do projeto original

Fase 0 do novo produto, "O que é o QALY? Vantagens e limitações".

- **Original (somente leitura):** `/home/user/felkfouri/saudepraquem` · remoto `https://github.com/felkfouri/saudepraquem` · lido no commit `4604af2` (2 nov. 2026), 25 commits.
- **Novo (único lugar onde se escreve):** `/home/user/SaudePraQuem2` · remoto `https://github.com/felkfouri/SaudePraQuem2` · estava vazio (nenhum commit, nenhum arquivo), então não havia nada a preservar.

Arquivos do original: `index.html` (274 kB, 2.558 linhas: CSS, HTML e JS num arquivo só), `README.md`, `docs/modelo.md`, `docs/jogo.md`, `tests/motor.js`, `tests/validar.js`, `tests/dados.js`, `tests/dilemas.js`, `package.json`, `package-lock.json`, `.gitignore`.

Legenda: **REUTILIZAR** (copiar como está) · **ADAPTAR** (copiar e modificar) · **DESCARTAR** (não entra; fica no site original).

## 1. Identidade visual (`index.html`, linhas 11–411)

| Parte | Destino | Justificativa |
|---|---|---|
| Variáveis de cor (`:root`), tema claro e escuro, `data-theme` | REUTILIZAR | Paleta já testada em contraste nos dois temas; teal = ganho de saúde e âmbar = custo combinam com o tema novo. Mantém o parentesco visual entre os dois sites. |
| Fontes (Bricolage Grotesque, Source Serif 4, IBM Plex Mono via Google Fonts, com alternativas do sistema) | REUTILIZAR | Funciona sem rede (cai nas fontes do sistema), então abre com duplo clique. |
| Layout em faixas (`.band`, `.band.alt`, `.wrap`, `.prose` de 68ch), `.hero`, `.toc`, `.eyebrow`, `.lead` | REUTILIZAR | Estrutura de ensaio em coluna única com interativos de largura total: é o que o guia novo precisa. |
| Componentes de texto: `.note`, `.note.warn`, `.kicker`, `.steps`, `dl.gloss`, `ol.refs`, tabelas, `.legend` | REUTILIZAR | Servem ao guia sem mudança. |
| Componentes de laboratório: `.lab`, `.panel`, `.field`, `.chip`, `.presets`, `.tiles`/`.tile`, `.badge`, `.verdict`, `.chart`, `.hint` | REUTILIZAR | Os quatro interativos novos usam exatamente esses blocos. |
| Componentes do teste: `.qcard`, `.qopt`, `.qbtn`, `.qprog`, `.qres` | REUTILIZAR | Molde direto da escada de time trade-off. |
| Botões `.btn`, `.btn.ghost`, foco visível | REUTILIZAR | — |
| Barra fixa `.barra` (seções, progresso de leitura, modo jogo) | ADAPTAR | Mesma barra, com as seções novas; no modo jogo mostra reunião atual e orçamento. |
| CSS do jornal (`.paper`, `.mast`, `.pgrid`, `.kick`, `.head`, `.cols`, `.side`) | REUTILIZAR | O jornal de fim de jogo é o mesmo componente. |
| CSS dos jurados (`.react`, `.jury`), `.event`, `.coach`, `.card`, `.final .grades`, `.mathbox`, `.pulse` | ADAPTAR | Mantidos com ajustes para os cards de tecnologia do Plenário. |
| CSS específico do Cobertor Curto: `.quilt`, `.budget`, `.money`, `.tl`, `.flips`, `.cv`, `.hexkey`, `.paybar`, `.turma`, `.citylegend`, `.apoio` | DESCARTAR | Mecânicas (cobertor, mapa da cidade, custeio, turma) que não existem no jogo novo. |
| Arte da abertura (duas distribuições por quintil) | DESCARTAR | Ilustra a DCEA. A abertura nova desenha o próprio QALY (retângulo tempo × qualidade). |

## 2. Texto do guia (`index.html`, linhas 438–731)

| Parte | Destino | Justificativa |
|---|---|---|
| Parte 1, "A conta de sempre" (orçamento finito, ACE, QALY, ICER, limiar, custo de oportunidade) | ADAPTAR | É o embrião das seções 1, 2 e 4 do guia novo. Precisa ser expandida, trocar ICER por RCEI (termo das diretrizes brasileiras, com ICER como sinônimo) e corrigir a frase "R$ 120 mil para doenças raras", que simplifica demais a regra da Conitec (a conferir em `FONTES.md`). |
| Parte 2, "O que ela não vê" (um QALY é um QALY; o custo de oportunidade tem endereço) | ADAPTAR | Vira a limitação "indiferença à distribuição", resumida, com link para o site original. |
| Parte 3, "A pergunta a mais" (as 4 etapas da DCEA) | DESCARTAR | Detalhe de método da DCEA; o site novo só aponta para o original. |
| Parte 4, laboratório da DCEA (EDE de Atkinson, plano equidade-eficiência, curva por ε) | DESCARTAR (código) / ADAPTAR (padrões) | As fórmulas são da DCEA. Reaproveitam-se os padrões: `state` + `render()` que redesenha tudo, gráficos SVG montados como texto, `niceTicks`, formatadores `Intl`, `press()` dos chips, cenários prontos em constante `PRESETS`. O desenho do plano (`drawPlane`) é o molde do plano de custo-efetividade. |
| Parte 4b, "Qual é o seu ε?" (`LADDER`, `quizQ`, `quizEnd`) | ADAPTAR | A escada de escolhas binárias vira o time trade-off "Qual é o seu peso?": mesma mecânica (um lado fixo, o outro desce até a pessoa trocar), outra fórmula (utilidade = x/10). |
| Parte 4c, chamada para o jogo | ADAPTAR | Mesmo formato de chamada, texto novo. |
| Parte 5, "E no Brasil?" e "O que o método não resolve" | DESCARTAR | Trata da DCEA no Brasil. O Brasil entra no guia novo pela tarifa do EQ-5D e pela Conitec. |
| Glossário: QALY, ICER, limiar, custo de oportunidade | ADAPTAR | Definições reaproveitadas e revistas. |
| Glossário: QALE, quintil, Atkinson, EDE, ε, plano de impacto | DESCARTAR | Termos da DCEA; ficam só os que o texto novo usar (provavelmente nenhum). |
| Referências 1–7 (DCEA) | ADAPTAR | Entram só as 2–3 que sustentam a limitação distributiva e o "para ir além" (Asaria 2016; Cookson 2017; Robson 2017), todas reconferidas. |
| Referências 8–13 (fontes das cartas do Cobertor Curto) | DESCARTAR | Sustentam propostas que não existem no jogo novo. |
| Referências 14–16 (Conitec 2022; Diretriz de Avaliação Econômica; Woods 2016) | ADAPTAR | Centrais para o tema novo; reconferidas, com edição vigente e DOI. |
| Rodapé (autoria, disciplina, nota de que os números são ilustrativos) | ADAPTAR | Vira a seção "Sobre": autoria, como citar, licença e nota de transparência (dado real × ilustrativo). |

## 3. Código de infraestrutura (`index.html`, script)

| Parte | Destino | Justificativa |
|---|---|---|
| Utilitários: `$`, `fmt`/`fmt1` (`Intl.NumberFormat('pt-BR')`), `esc`, `press`, `sum` | REUTILIZAR | Pequenos e já testados. |
| Rotas guia/jogo por hash (`route`, `instant`, `focusEl`, `onScreen`), memória de rolagem e foco por vista | REUTILIZAR | O site novo tem as mesmas duas vistas (`#jogo` abre o jogo). |
| Barra de navegação (`onScroll`: seção atual, progresso) | REUTILIZAR | — |
| `rng(seed)` (mulberry32), `shuffle`, `newSeed`, `deal` (baralho de textos sem repetição) | REUTILIZAR | Partidas reproduzíveis por código, exigência do jogo novo e base da partida automatizada com 3 sementes. |
| `face(who, mood)` (rostos SVG dos jurados) | ADAPTAR | Contador e Ouvidora continuam; entra um terceiro rosto. |
| `newspaper`, `paperData`, `tpl`, `ext`, `headline` | ADAPTAR | Mesmo componente e mesma técnica (modelos de frase com variações sorteadas por um gerador próprio), com textos novos sobre a gestão do comitê. |
| `coach(at)` (tutorial passo a passo) | ADAPTAR | Mesma ideia: dicas contextuais na primeira reunião. |
| Dificuldade (`DIFFD`: fácil/normal/difícil mudam quanta informação o card mostra) | ADAPTAR | No jogo novo, a dificuldade muda o orçamento e se o card já traz a conta feita. |
| Perfis de cidade (`CITIES`) | DESCARTAR | O comitê é nacional; não há cidade. A variação entre partidas vem da semente (quais casos aparecem). Registrado em `DECISOES.md`. |
| `refocus`/`focusKey` (devolver o foco após redesenhar o painel) | REUTILIZAR | Necessário para navegação por teclado no jogo. |
| `copyText`, `saveImage` | ADAPTAR / DESCARTAR | `copyText` fica (copiar o resumo da partida). `saveImage` (canvas) sai: fora do escopo. |
| Comparação da turma (`turmaCode`, `readTurma`, `cleanTurma`, `renderTurma`) | DESCARTAR | Fora do escopo desta entrega; vai para `IDEIAS.md`. |

## 4. Motor do Cobertor Curto (`index.html`, linhas 1143–2555)

| Parte | Destino | Justificativa |
|---|---|---|
| Dados: `DECK` (27 propostas), `ADDON`, `EXITS`, `SINERGIAS`, `DILEMMAS`, `EVENTS`, `TUTORIAL_HANDS` | DESCARTAR | São propostas de gestão municipal com distribuição por quintil. O jogo novo tem casos de incorporação com custo, QALYs e depoimento. Algumas histórias e fontes servem de inspiração para casos novos. |
| Regras: custeio que volta todo ano, equipes, pilotos, pacto, conferência, eleição, apoio político, `waterfall` de cortes | DESCARTAR | Complexidade que serve à mensagem "o cobertor encolhe". O jogo novo precisa caber em 10 minutos e ensinar outra coisa. |
| Estrutura do ciclo (`newGame` → `dealYear` → jogador decide → `closeYear` → `nextYear` → `renderFinal`) | ADAPTAR | Mesmo esqueleto, com "reunião" no lugar de "ano". |
| Jurados e notas finais (`GRADES`, réguas de 0 a 10, título da gestão) | ADAPTAR | Três jurados com réguas próprias: saúde total, justiça, confiança da sociedade. |
| Custo de oportunidade como saúde deslocada (`D = C / k`) | REUTILIZAR (conceito) | É o coração da "vantagem" que o jogador precisa sentir: cada real gasto desloca saúde de quem não está na sala. |
| EDE de Atkinson no placar da Ouvidora | DESCARTAR | A Ouvidora nova usa uma regra mais simples e explicável a leigos (ver `PLANO.md`). |

## 5. Documentação e testes

| Arquivo | Destino | Justificativa |
|---|---|---|
| `README.md` | ADAPTAR | Mesma estrutura (o que é, como rodar, como o código está organizado, como verificar), com seções novas pedidas: para quem é, como citar, licença. |
| `docs/modelo.md` | ADAPTAR | Vira `docs/MODELO.md` do site novo: fórmulas de cada interativo com exemplos calculados à mão, que os testes conferem. |
| `docs/jogo.md` | ADAPTAR | Vira `docs/JOGO.md`: regras e dados do Plenário e como acrescentar casos. |
| `tests/motor.js` (motor de referência que lê os dados do `index.html`) | ADAPTAR | Mesma técnica: os testes em Node extraem o bloco de cálculo do `index.html` entre dois comentários marcadores, de modo que se testa o código que roda na página, sem duplicá-lo. |
| `tests/validar.js` (Playwright: partidas na página, cliques ao acaso, jornal sem `undefined`/`NaN`) | ADAPTAR | Base da partida automatizada com 3 sementes e do teste de console sem erros. |
| `tests/dados.js` (consistência dos dados do jogo) | ADAPTAR | Confere os casos do Plenário (campos obrigatórios, fontes, RCEI coerente com custo e QALYs). |
| `tests/dilemas.js` (nenhum dilema com resposta dominante) | ADAPTAR | Vira a checagem de equilíbrio: nenhuma estratégia simples (só RCEI, só depoimento) pode tirar nota máxima nos três jurados. |
| `package.json`, `.gitignore` | ADAPTAR | Scripts novos (`test`, `gate`), Playwright e axe-core como dependências de desenvolvimento. |
| Capturas de tela | (não existiam) | O original não tem script de capturas; será escrito do zero em `tests/capturas.js`. |

## 6. O que o original não tinha e será novo

- Explicação do EQ-5D, dos métodos de valoração (TTO, standard gamble, DCE) e da tarifa brasileira.
- Vantagens e limitações do QALY com contra-argumentos e prática.
- Os quatro interativos (área sob a curva, EQ-5D, RCEI/plano de custo-efetividade, time trade-off).
- O jogo Plenário.
- `docs/FONTES.md` com cada afirmação factual e seu status de verificação; testes de acessibilidade (axe-core); capturas de tela por rodada; pareceres da bancada.
