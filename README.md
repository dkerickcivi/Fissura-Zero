# Fissura Zero — funil de quiz

Projeto independente do aplicativo Fissura Zero. React, TypeScript, Vite, Tailwind e Lucide. Sem backend, banco, autenticação, captura de identificação, CRM ou analytics. As respostas ficam apenas no estado React e desaparecem ao recarregar a página. Nada é enviado ao checkout.

## Executar

Requer Node.js 22.12+ (Node 24 recomendado para os testes).

```sh
npm install
npm run dev
npm test
npm run build
npm run preview
```

Para publicar, envie `dist/` para uma hospedagem estática com HTTPS. O quiz é uma única página; não usa rotas com respostas ou parâmetros de rastreamento.

## Checkout e preço

Preço aprovado: **R$29,90, pagamento único**. Definido em `src/data/config.ts`.

Copie `.env.example` para `.env.local`, preencha `VITE_CHECKOUT_URL` com a URL HTTPS real e gere um novo build. O botão encaminha para essa URL exata, sem anexar respostas. O envio de referrer é desativado. Sem URL válida, o CTA fica desabilitado e informa “Checkout em configuração. A compra ainda não está disponível.”, inclusive em produção. Nenhum checkout fictício é usado.

## Fluxo e personalização

Nove perguntas principais; filhos aparece apenas nas faixas de 23 anos ou mais. Alterar a idade para 18–22 limpa `hasChildren`. Resultado/oferta familiar aparecem exclusivamente quando `hasChildren === true`; `false` e `null` usam a versão padrão. O gênero não gera inferências. Os resumos de gatilho, motivação e objetivo usam mapas explícitos das respostas.

Cada alternativa avança em 220ms. Voltar e abrir ajuda cancelam o avanço pendente. A barra usa a lista real de etapas, incluindo as duas telas educativas, resultado e oferta. A ajuda é uma tela do mesmo funil, sem popup, com retorno ao ponto anterior. O link está no rodapé das etapas após iniciar o quiz, acessível sem finalizar ou comprar. A home foi simplificada a pedido do usuário e tem apenas o título e o botão COMEÇAR AGORA. O cabeçalho com marca também foi retirado das demais telas, preservando voltar e progresso.

## Conteúdo educativo

Foi resolvida uma contradição do briefing: a orientação de não alegar bloqueio cerebral conflita com a segunda tela sugerida. A versão implementada fala em direcionar atenção para outra tarefa, sem prometer bloqueio, abstinência ou redução clínica. A primeira tela mantém título e parágrafos fornecidos, mas substitui a afirmação absoluta “sempre ... volta com mais força” por “POR ISSO, ALGUNS GATILHOS PODEM FAZER A VONTADE VOLTAR.”. As alterações foram comunicadas durante a execução. Não há diagnósticos, pontuações, percentuais de melhora, escassez artificial ou depoimentos inventados.

## Apoio

A tela de ajuda informa sobre UBS, CAPS AD, UPA/pronto-socorro e SAMU 192. Fontes verificadas do Ministério da Saúde:

- https://www.gov.br/saude/pt-br/composicao/saes/desmad/raps/caps/caps
- https://www.gov.br/saude/pt-br/composicao/saes/samu-192

Os links externos usam `referrerPolicy="no-referrer"`.

## Organização

- `src/data/questions.ts`: perguntas e tipos das respostas.
- `src/data/config.ts`: preço e checkout.
- `src/logic/quiz.ts`: fluxo, condição familiar e mapas de resumo.
- `src/components`: telas e componentes.
- `public/brain-reward.svg` e `public/brain-task.svg`: ilustrações locais, sem texto e com até 120px de altura na interface.
- `src/styles/globals.css`: estilos mobile-first, safe-area e movimento reduzido.

Testes cobrem os três caminhos, mudança de idade, navegação, avanço automático, progresso, copy implementada, ajuda, preço, configuração de checkout, privacidade e limpeza de timers. O layout usa rolagem vertical natural, sem botões sobrepostos ao conteúdo. A validação em viewports de navegador não substitui testes em aparelhos físicos.

## Ajustes visuais finais

A home contém apenas título e COMEÇAR AGORA, com tipografia grande e botão de 66px. Não há cabeçalho da marca nas perguntas. As ilustrações das duas telas educativas foram substituídas por imagens 3D geradas com imagegen e otimizadas em WebP transparente em `public/images/`. O destaque de cor na primeira imagem é meramente ilustrativo, sem localizar a fissura exclusivamente em uma área. Os prompts estão em `IMAGE-PROMPTS.md`. Os SVGs locais originais permanecem como arquivos de origem, sem serem usados nas telas educativas.

## Vídeo da oferta

A imagem ilustrativa de celular foi substituída pelo vídeo enviado pelo usuário, dentro de uma moldura responsiva. Arquivo: `public/video/fissura-zero-demo.mp4`; capa: `public/video/fissura-zero-poster.webp`. Cerca de 20s, H.264, 480×816, 24fps, aproximadamente 300KB, otimizado com fast-start e sem metadados ou faixa de áudio. O original permanece intacto fora do projeto.

Conforme a instrução final do usuário, a demonstração inicia automaticamente, muda e em loop, sem precisar tocar em play. `playsInline` mantém a reprodução dentro da moldura no iPhone. O vídeo só é montado na oferta, portanto não é requisitado durante as perguntas. Um controle discreto permite pausar a animação. Restrições do navegador ou modo de economia de bateria podem bloquear autoplay; nesse caso, o controle permite iniciar manualmente. Ao sair da oferta, o player é pausado e descarregado.

## Leitura e orientação de rolagem

As perguntas mantêm a tipografia anterior. Nas telas educativas, no resultado e na oferta, o texto principal passou para 18px, os títulos para 27–30px e os CTAs para 14–15px. Resumos, benefícios, notas e legendas também foram ampliados; espaçamentos decorativos foram reduzidos.

Nessas telas e na ajuda, “Role para ver mais” aparece após cerca de 550ms sem rolagem quando restam mais de 32px abaixo. Some durante o movimento e ao chegar ao fim. É possível tocar para avançar 65% da altura da tela. O componente observa mudanças de tamanho, limpa listeners e timers, considera safe-area e respeita movimento reduzido. O rodapé reserva espaço para o indicador não ocultar o último conteúdo. Ele não aparece na home nem nas perguntas.

A oferta inclui dois cards compactos de dúvidas comuns sobre simplicidade e facilidade de uso. Não há avaliações, nomes fictícios apresentados como clientes, estrelas, contagens ou relatos de resultados inventados.

## Feedbacks e condições da oferta

A seção anterior de dúvidas comuns foi substituída pelos três relatos fornecidos pelo responsável pelo produto: Pedro Carvalho (35), Ana Almeida (23) e Pedro (50). São apresentados com ícones neutros, sem foto, estrelas, selo de verificação, sobrenomes adicionais inventados ou resultados quantificados. A plataforma não verificou esses relatos; há nota visível de que experiências individuais não garantem resultados.

Condições comerciais fornecidas pelo responsável: R$29,90, pagamento único, acesso vitalício, sem mensalidade. Estão destacadas no card e nas respostas curtas abaixo dele. Compatibilidade descrita com celular, tablet e computador, de diferentes marcas, por navegador atualizado; não é feita promessa de suporte a todo aparelho antigo ou navegador incompatível.

## Últimos ajustes da oferta

O último feedback foi atualizado para Flávio Campos (50 anos), conforme instrução. O segundo card de compatibilidade foi removido; seus ícones foram incorporados ao primeiro card, preservando exatamente “SIMPLES. RÁPIDO. NO CELULAR, TABLET OU COMPUTADOR.”. O FAQ agora usa `details`/`summary` nativos: as respostas começam fechadas e abrem ao toque ou teclado. As perguntas são cobrança mensal, compatibilidade com celular e necessidade de saber jogar. Não há pergunta nem copy sobre instalação.

O CTA ganhou pulso suave de escala e sombra, sem flashes, desligado em `prefers-reduced-motion`. O checkout segue pendente e o botão continua desabilitado até a configuração da URL, com essa condição informada na página.
