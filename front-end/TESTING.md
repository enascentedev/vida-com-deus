# Testes E2E com Playwright

Este documento descreve os testes E2E da aplicação, seus objetivos e como executá-los.

## Visão geral dos tipos de teste

### 1) Proteção de rotas (Auth Guard)

**Objetivo:** garantir que páginas protegidas só sejam acessadas quando existe `authToken`.

**Como funciona:**

- Sem token → redireciona para `/login`.
- Com token fake → permite abrir todas as rotas críticas.

**O que detecta:**

- Quebra do `router.beforeEach`.
- Redirecionamento não acontecendo.
- Rota protegida acessível sem login.

---

### 2) Smoke test (rotas críticas)

**Objetivo:** validar que as principais páginas carregam e renderizam elementos essenciais.

**Como funciona:**

- Com `authToken` fake, acessa `/`, `/home`, `/artigo-semanal`, `/livros`.
- Em cada rota valida elementos básicos (ex.: `header` visível).

**O que detecta:**

- Página quebrada por erro de renderização.
- Rota que não existe.
- Falhas que impedem o usuário de ver o layout mínimo.

---

### 3) Responsividade com screenshots (regressão visual)

**Objetivo:** comparar visualmente o layout entre versões e evitar regressões.

**Como funciona:**

- Abre cada rota crítica em iPhone 11 e Desktop (1280x800).
- Gera screenshots do viewport (sem `fullPage`).
- Se a pasta `tests/__snapshots__/default` estiver vazia, apenas grava a base.
- Se houver imagens na pasta `default`, compara com elas; divergências falham o teste.

**O que detecta:**

- Layout quebrado em mobile (colunas estourando, texto cortado, imagens desalinhadas).
- Alterações visuais não planejadas.

---

### 4) Validação dos links do footer

**Objetivo:** garantir que o rodapé tenha links válidos.

**Como funciona:**

- Conta os links no `footer`.
- Verifica se todos têm `href` com `http/https`.

**O que detecta:**

- Links faltando.
- Links vazios ou inválidos.

---

## Como rodar os testes

### Instalar dependências

```bash
npm install
npx playwright install
```

### Rodar todos os testes

```bash
npx playwright test
```

### Rodar apenas iPhone 11

```bash
npx playwright test --project=iphone-11 --headed
```

### Rodar um arquivo específico

```bash
npx playwright test tests/auth-routes.spec.js
```

### Snapshots (primeira execução)

Na primeira vez, a pasta `tests/__snapshots__/default` fica vazia e os testes só gravam a base.
Se preferir atualizar manualmente, use:

```bash
npx playwright test tests/responsive-snapshots.spec.js --project=chromium --update-snapshots
```

Depois, execute normalmente para comparar:

```bash
npx playwright test tests/responsive-snapshots.spec.js --project=chromium
```

---

## Observações

- Os testes usam `authToken` fake no `localStorage` para evitar dependência de login real.
- Se o fluxo de autenticação mudar, revise os testes de proteção de rotas.
