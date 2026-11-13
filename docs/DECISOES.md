# Decisões

Registro do que foi decidido sem perguntar (por não ser bloqueante), dos conflitos entre juízes e das ferramentas que não puderam ser usadas. Mais recente no fim.

## Fase 0 — reconhecimento (13 nov. 2026)

**D1. Onde está cada repositório.** Original, somente leitura: `/home/user/felkfouri/saudepraquem` (`github.com/felkfouri/saudepraquem`). Novo: `/home/user/SaudePraQuem2` (`github.com/felkfouri/SaudePraQuem2`). O original não estava na pasta; foi clonado por leitura anônima (é público). A sessão não tem permissão de escrita nele, o que reforça a regra de não tocá-lo.

**D2. O repositório novo estava vazio** (sem commits, sem arquivos). Nada a inventariar nem a preservar.

**D3. Branch de trabalho.** A sessão exige o branch `claude/fervent-ptolemy-kfb8ra`. Os commits ficam nele; a publicação no GitHub Pages depende de merge na `main`, que é decisão do autor.

**D4. Nenhuma pergunta bloqueante.** Os três campos marcados com ✏️ vieram sem preencher. Nenhum impede o plano:
- *Rubrica:* sem rubrica, os critérios são os do próprio pedido (seção 4) e os do Juiz B em `BANCADA.md` (o que se espera de um produto técnico: público-alvo, aplicabilidade, autoria, referências, documentação, replicabilidade). Se houver rubrica, ela entra em `BANCADA.md` no critério do Juiz B.
- *Prazo:* sem prazo, o trabalho segue o critério de saída do gauntlet (até 5 rodadas).
- *URL do site original:* a suposição natural é `https://felkfouri.github.io/saudepraquem/`, mas a rede desta sessão bloqueia `github.io` e não foi possível conferir. O link "para ir além" usará essa URL **só se o autor confirmar**; caso contrário, aponta para o repositório `https://github.com/felkfouri/saudepraquem`, que foi conferido.

**D5. Commit da fase de planejamento.** A regra pede um commit por rodada do gauntlet. Como o ambiente é efêmero, os documentos das Fases 0 e 1 entram num commit próprio ("fase 0–1: inventário, plano e bancada") antes da rodada 1. Sem push, conforme a regra 6.

**D6. Pesquisa de fatos antes do plano.** A verificação de fontes foi adiantada para a Fase 0 porque o desenho de um interativo depende dela (os coeficientes da tarifa brasileira do EQ-5D-3L existem em fonte aberta ou não?). As notas brutas ficam em `docs/pesquisa/`; a lista consolidada, em `docs/FONTES.md`.

**D6a. Rede bloqueada e ambiente novo.** As três primeiras pesquisas não conseguiram abrir fontes primárias (a rede do ambiente padrão só permitia PubMed e buscas). Com aprovação do autor, foi criado o ambiente pessoal `saudepraquem2`, com acesso a 20 sites oficiais ou acadêmicos (Conitec/gov.br, Rebrats, IBGE, NICE, PMC, EuroQol, ICER, Congresso e leis dos EUA, entre outros). Continuam inacessíveis: `planalto.gov.br`, `bvsms.saude.gov.br` e `journals.sagepub.com` (o artigo de Santos et al. é de acesso fechado). O que depender só deles fica com status "parcialmente verificada" em `FONTES.md`.

**D6b. URL do site original confirmada:** `https://felkfouri.github.io/saudepraquem/` respondeu com a página "Saúde para Quem?". Substitui a ressalva de D4.

**D6c. Aviso automático de push.** O ambiente emite um aviso pedindo commit e push a cada pausa. A regra 6 do autor (push só no final, com OK) prevalece: os commits são locais.

## Fase 1 — plano

**D7. Um arquivo só.** O site continua sendo um único `index.html` (CSS e JS embutidos), como o original: abre com duplo clique, sem servidor, e funciona no GitHub Pages. Os testes em Node extraem o bloco de cálculo do próprio `index.html` entre dois comentários marcadores, para testar o código que de fato roda na página.

**D8. Interativos dentro do guia, não numa seção à parte.** Cada interativo fica logo depois do texto que ele ilustra (ler → mexer). A barra de navegação tem atalhos para os quatro. Motivo: para a leitora leiga, um "laboratório" isolado no fim perde o contexto.

**D9. Vocabulário.** "QALY" é o termo principal (é o do título da entrega), com "AVAQ, ano de vida ajustado pela qualidade" explicado na primeira ocorrência. "RCEI" (razão de custo-efetividade incremental) é o termo das diretrizes brasileiras; "ICER" aparece uma vez como a sigla em inglês. "Peso de qualidade de vida" no texto corrido; "utilidade" é apresentada como o nome técnico. "Tarifa" = tabela de pesos de um país.

**D10. EQ-5D e direitos de uso.** O EQ-5D é um instrumento protegido pela EuroQol. O site não reproduz o questionário oficial: descreve as cinco dimensões e os níveis com palavras próprias, diz que não é o instrumento oficial e não serve para uso clínico, e cita a fonte. A decisão final sobre a redação depende do que a pesquisa encontrar sobre as regras de reprodução.

**D11. Jogo: sem perfis de cidade.** O comitê do Plenário é nacional. A variedade entre partidas vem da semente (quais casos aparecem e em que ordem) e da dificuldade. Os perfis de cidade do Cobertor Curto não são reaproveitados.

**D12. Jogo: sem nota única.** Os três jurados dão notas separadas e não há soma nem ranking. O título da gestão descreve o estilo de decisão, não diz quem "ganhou". Motivo: o critério do Juiz C (o leitor forma a própria opinião) e a mensagem do produto (a régua ajuda, mas não decide sozinha).

**D13. Números do jogo e dos cenários prontos são ilustrativos.** As tecnologias são fictícias, "inspiradas em" casos reais citados. São reais, com fonte: a tarifa brasileira do EQ-5D-3L, os valores de referência da Conitec, a taxa de desconto das diretrizes e os pesos do modificador de gravidade do NICE. A nota de transparência lista os dois grupos.

## Rodada 1 — construção (13 nov. 2026)

**D14. Ouvidora: desvio do plano aprovado.** O plano previa a Ouvidora como soma dos QALYs com pesos de gravidade (1; 1,2; 1,7). Na simulação com seis estratégias, essa Ouvidora deu sempre a mesma ordem que o Contador (notas 9,9 e 9,9 para a estratégia "só a régua"): pesos dessa ordem não revertem diferenças de 5 a 10 vezes no custo por QALY. Um jurado que repete o outro derruba a regra "os jurados discordam". A Ouvidora passou a contar os pedidos atendidos de quem estava em pior situação (2 pontos para prioridade alta, 1 para alguma), menos os episódios de tratamento desigual. As categorias de prioridade continuam as mesmas. O achado numérico entrou no guia (limitação 6: "mesmo com peso 1,7, um tratamento que custa seis vezes a referência continua acima dela"). Detalhe em `JOGO.md`.

**D15. Título.** Aprovada a opção A: "A régua da saúde".

**D16. Convenção do desconto.** O primeiro ano não é descontado (`1 / (1 + r)^(t − 1)`). A 3ª edição da diretriz não fixa a convenção; a escolha é didática e está em `MODELO.md`.

**D17. Valor do pior estado: −0,177.** É o que sai do código oficial da EuroQol para a tarifa de Santos et al. A literatura cita −0,176; a diferença não foi resolvida porque o artigo é de acesso fechado.

**D18. O que ficou de fora por não estar verificado na fonte primária:** os valores do PIB per capita do IBGE (o site do IBGE não abriu); o andamento dos projetos de lei americanos; o valor em libras do WELLBY; os limiares em coroas e euros da Noruega e da Holanda; o prazo de 20 dias da consulta pública da Conitec. O site não afirma nenhum deles.

**D19. Playwright.** O ambiente já traz Playwright e Chromium; o `npm install` do projeto baixa outra versão, sem navegador. A cópia local foi removida de `node_modules` para o teste usar a instalada. Em outra máquina: `npm install` e `npx playwright install chromium`, ou `CHROMIUM_PATH`. O axe-core foi instalado sem problema.

**D20. Como citar e autoria.** O site traz só "Felipe", como no original. O sobrenome e o endereço público definitivo (GitHub Pages) dependem do autor; a citação aponta para o repositório, que existe.

## Rodada 1 — triagem (13 nov. 2026)

**D21. Conflito A × C: jogo curto × os dois lados em cada caso.** A Juíza A reprovou o jogo por não caber em 10 minutos; o Juiz C quer que cada caso mostre o que a régua viu e o que não viu. Pela ordem de prioridade (compreensão do leigo acima do equilíbrio), a partida padrão passou a 3 reuniões e a ata mostra um parágrafo por caso: "fora da conta", quando há, ou "o que a régua mostrou". A revisão completa, com os dois lados e a inspiração de cada caso, fica recolhida na tela final. O equilíbrio é preservado pelo sorteio (todo jogo tem casos dos dois tipos) e pelo teste de equilíbrio.

**D22. Parecer rejeitado (B4).** O Juiz B considerou sem lastro a frase sobre os desfechos importantes para o paciente. O Juiz D encontrou o trecho literal no Quadro 1 do relatório da Conitec. A frase ficou, com redação mais próxima do original; o erro estava no Mapa de `FONTES.md`.

**D23. Teto por reunião e partida de 3 reuniões.** Duas regras novas no jogo, não previstas no plano, para resolver problemas apontados pela Juíza A (duração e falta de escolha no fim). Detalhe em `JOGO.md`.

**D24. A Praça deixou de punir pelo critério do Contador.** A penalidade "as filas cresceram" foi retirada (pareceres B5 e C8).

**D25. Autoria (B6) fica em aberto.** Nome completo, programa, docente ou orientador, contato e endereço público dependem do autor.

**D26. Dominância estendida e outros instrumentos (SF-6D, HUI) não entram.** Sugeridos pela banca como polimento; aumentariam o texto para leigos. Ficam em `IDEIAS.md`.

**D27. Instrução aos juízes na rodada 2.** Para a autoria (B6), o Juiz B foi orientado a registrar o item numa seção "PENDÊNCIA DO AUTOR", fora da lista que decide o veredito, porque só o autor pode fornecer esses dados. Os Juízes A, C e D receberam uma definição mais explícita do que conta como IMPORTANTE e do que é POLIMENTO. A instrução está registrada aqui para que a leitura dos vereditos da rodada 2 em diante leve isso em conta.
