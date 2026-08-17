# ADBA Oficial — MVP

Aplicativo oficial (web/PWA) da Assembleia de Deus Ministério Belém – Araraquara.

## Stack

React + TypeScript + Vite, Tailwind CSS v4, React Router, Zustand (com persistência em
localStorage), PWA via `vite-plugin-pwa`. Ver decisões completas na conversa de criação do
projeto (Etapa 1 da arquitetura).

## Rodando localmente

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # build de produção em dist/
npm run preview  # servir o build de produção
```

## Estrutura

```
src/
├── components/   # UI reutilizável
├── data/         # DADOS DE DEMONSTRAÇÃO (ver aviso abaixo)
├── services/     # camada de acesso a dados — trocar por API real aqui
├── store/        # estado global (zustand)
├── features/     # telas, organizadas por seção do app
├── theme/        # aplicação de tema claro/escuro
└── hooks/, utils/, types.ts
```

## IMPORTANTE — Conteúdo de demonstração

Todo o conteúdo em `src/data/` (notícias, eventos, vídeos, igrejas, hinos, versículos) é
**fictício**, criado apenas para demonstrar a interface. Não representa informações oficiais
da ADBA. Antes de publicar:

- Substituir hinos/versículos por conteúdo **licenciado/autorizado**.
- Substituir a integração de vídeos pela YouTube Data API v3 (assinatura já pronta em
  `services/videosService.ts`).
- Cadastrar dados reais de igrejas, notícias e eventos via futuro painel administrativo.
- Trocar o `Logo.tsx` (SVG provisório) pela identidade visual oficial da ADBA.
- Gerar ícones PWA reais (192x192 / 512x512) a partir da logo oficial.

## Pendências para produção (próximas etapas)

- Painel administrativo web (CRUD de notícias, eventos, igrejas, hinos, banners) consumindo
  as mesmas interfaces já definidas em `services/`.
- Backend/API real substituindo os dados demo.
- Notificações push (estrutura de UI já presente em `/notificacoes` e `/configuracoes`).
- Cadastro opcional de usuário (hoje o app funciona 100% sem login).
- Empacotar como app nativo (Capacitor/Cordova) ou publicar como PWA instalável, conforme
  decisão do cliente.
