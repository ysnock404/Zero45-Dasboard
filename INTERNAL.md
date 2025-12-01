# INTERNAL NOTES — Zero45 Dashboard (0.1.0)

Use this file as the single place for status, full TODOs, and code hotspots. Text is blunt, for internal/AI use (no marketing).

---

## Snapshot (what exists)
- Proxmox: cluster resources/metrics/actions (nodes, VMs, LXC); token mode or pvesh fallback when local; watts via RAPL (FACTOR/OFFSET) and sensors fallback.
- Host metrics: sampler every 5s with in-memory history; `/api/host/metrics` returns `{latest, history}`; watts from RAPL+sensors.
- UI Proxmox: stacked area charts, disk MB/s, VMs online/offline, metrics only for running resources, auto-refresh 5s.
- SSH Gateway 2.0: xterm.js, persistent sessions, encrypted secrets.
- RDP/Guacamole: CRUD + browser streaming.
- Auth: JWT login/register, dashboard shell.
- Scripts: `start.sh`, `stop.sh`, `restart.sh` delegate to systemd `zero45-dashboard.service`.

## Hotspots (where to edit)
- Proxmox backend: `backend/src/modules/proxmox/*` (pvesh fallback in `proxmox.service.ts`).
- Host metrics & watts: `backend/src/modules/host/host.service.ts` (sampler + RAPL).
- Frontend Proxmox UI: `frontend/src/pages/Proxmox.tsx`.
- Config: `backend/config.json` (template `backend/config.example.json`).
- Service scripts: `start.sh`, `stop.sh`, `restart.sh`.

## Known gaps / short-term
- Auth hardening: refresh tokens rotativos, rate limit login, 2FA opcional, reset de senha.
- Persistência: modelos/migrações para usuários, sessões, servidores (SSH/RDP/Proxmox), audit logs.
- Alerts MVP: thresholds em métricas locais/Proxmox + canais email/Discord/Telegram.
- Observabilidade: logs estruturados, mensagens de erro consistentes, CORS alinhado ao deploy.
- CI/CD + Docker/Compose; healthchecks; env/segredos configuráveis.
- UI Proxmox: filtros/sort, estados de erro/skeleton, reduzir polls se necessário.

---

## FULL TODOs (copiados dos .md)

### TODO-BACKEND.md (completo)
```text
# 📋 TODO Backend - ysnockserver Dashboard

## 🎯 Stack Tecnológica Backend

- **Runtime:** Node.js 20+ com TypeScript
- **Framework:** Express.js ou Fastify
- **Database:** PostgreSQL (principal) + Redis (cache/sessions)
- **Time-Series DB:** InfluxDB ou TimescaleDB (métricas)
- **ORM:** Prisma
- **WebSocket:** Socket.io
- **Authentication:** JWT + bcrypt
- **Validation:** Zod
- **SSH:** ssh2 library
- **Database Clients:** pg, mysql2, mongodb, ioredis

---

## 📦 TODO BACKEND COMPLETO

### 1. SETUP INICIAL

#### 1.1 Projeto Base
- [ ] Criar pasta `/backend`
- [ ] Inicializar npm/pnpm (`npm init -y`)
- [ ] Configurar TypeScript
  - [ ] `tsconfig.json` com strict mode
  - [ ] Path aliases (@modules, @shared, @config)
- [ ] Configurar ESLint + Prettier
- [ ] Setup nodemon para dev
- [ ] Configurar scripts no package.json:
  - [ ] `dev` (nodemon)
  - [ ] `build` (tsc)
  - [ ] `start` (node dist)
  - [ ] `lint`
  - [ ] `test`

#### 1.2 Estrutura de Pastas
```
backend/
├── src/
│   ├── modules/
│   │   ├── auth/
│   │   ├── ssh/
│   │   ├── database/
│   │   ├── api/
│   │   ├── monitoring/
│   │   ├── metrics/
│   │   ├── logs/
│   │   ├── alerts/
│   │   └── automation/
│   ├── shared/
│   │   ├── config/
│   │   ├── middleware/
│   │   ├── utils/
│   │   └── types/
│   ├── database/
│   │   ├── migrations/
│   │   └── seeds/
│   └── server.ts
├── tests/
├── .env.example
└── package.json
```
- [ ] Criar estrutura completa de pastas

#### 1.3 Dependências Core
- [ ] express ou fastify
- [ ] typescript, @types/node, @types/express
- [ ] dotenv
- [ ] cors
- [ ] helmet (security headers)
- [ ] compression
- [ ] morgan (logging HTTP)
- [ ] winston ou pino (logging)
- [ ] zod (validation)
- [ ] prisma
- [ ] socket.io
- [ ] jsonwebtoken, @types/jsonwebtoken
- [ ] bcrypt, @types/bcrypt
- [ ] axios
- [ ] date-fns

#### 1.4 Environment Variables
- [ ] Criar `.env.example` com:
  - [ ] NODE_ENV
  - [ ] PORT
  - [ ] DATABASE_URL (PostgreSQL)
  - [ ] REDIS_URL
  - [ ] JWT_SECRET
  - [ ] JWT_REFRESH_SECRET
  - [ ] JWT_EXPIRES_IN
  - [ ] CORS_ORIGIN
  - [ ] INFLUXDB_URL (opcional)
  - [ ] SMTP_* (email config)
- [ ] Config loader em `src/shared/config/env.ts`
- [ ] Validação com Zod

---

### 2. SERVER & MIDDLEWARE SETUP

#### 2.1 Express/Fastify App
- [ ] Criar `src/server.ts`
- [ ] Setup express app
- [ ] Configurar middlewares globais:
  - [ ] cors
  - [ ] helmet
  - [ ] compression
  - [ ] express.json()
  - [ ] express.urlencoded()
  - [ ] morgan (HTTP logging)
- [ ] Error handling middleware global
- [ ] 404 handler
- [ ] Health check endpoint (`/health`)

#### 2.2 Middleware Customizados
- [ ] **authMiddleware** (JWT verification)
- [ ] **roleMiddleware** (RBAC - role-based access)
- [ ] **rateLimitMiddleware** (express-rate-limit)
- [ ] **validateMiddleware** (Zod schema validation)
- [ ] **errorHandlerMiddleware** (catch-all errors)
- [ ] **requestLoggerMiddleware** (log requests)
- [ ] **corsMiddleware** (dynamic CORS)

#### 2.3 Logging System
- [ ] Configurar Winston ou Pino
- [ ] Log levels (error, warn, info, debug)
- [ ] File transports (logs/error.log, logs/combined.log)
- [ ] Console transport (dev only)
- [ ] Structured logging (JSON format)
- [ ] Request ID tracking
- [ ] Log rotation (winston-daily-rotate-file)

---

### 3. DATABASE SETUP

#### 3.1 PostgreSQL + Prisma
- [ ] Instalar Prisma (`prisma`, `@prisma/client`)
- [ ] `npx prisma init`
- [ ] Configurar `schema.prisma`
- [ ] Definir datasource (PostgreSQL)
- [ ] Definir generator (Prisma Client)

#### 3.2 Prisma Schema - Models
- [ ] **User Model**
  - id, email, password (hashed), name, role, avatar
  - emailVerified, twoFactorEnabled, twoFactorSecret
  - createdAt, updatedAt
- [ ] **RefreshToken Model**
  - id, token, userId, expiresAt, createdAt
- [ ] **Session Model**
  - id, userId, token, ipAddress, userAgent, expiresAt
- [ ] **SSHServer Model**
  - id, userId, name, host, port, username, authMethod
  - encryptedPassword, encryptedPrivateKey, tags
  - status, lastConnectedAt, createdAt, updatedAt
- [ ] **DatabaseConnection Model**
  - id, userId, name, type (enum), host, port, database
  - username, encryptedPassword, sslEnabled
  - status, createdAt, updatedAt
- [ ] **MonitoringService Model**
  - id, userId, name, type (HTTP, TCP, Ping, SSL)
  - url, port, checkInterval, timeout
  - expectedStatus, status, lastCheckAt, createdAt
- [ ] **MonitoringCheck Model**
  - id, serviceId, status, responseTime, statusCode
  - errorMessage, checkedAt
- [ ] **Incident Model**
  - id, serviceId, title, description, severity, status
  - createdAt, resolvedAt, updatedAt
- [ ] **Alert Model**
  - id, userId, name, description, metricSource
  - condition, threshold, severity, enabled
  - createdAt, updatedAt
- [ ] **AlertHistory Model**
  - id, alertId, triggered, value, notifiedAt
- [ ] **NotificationChannel Model**
  - id, userId, type (Email, Slack, etc), name
  - config (JSON), enabled, createdAt
- [ ] **Workflow Model**
  - id, userId, name, description, definition (JSON)
  - enabled, lastRunAt, createdAt, updatedAt
- [ ] **WorkflowExecution Model**
  - id, workflowId, status, startedAt, completedAt
  - logs (JSON), error
- [ ] **APICollection Model**
  - id, userId, name, description, requests (JSON)
  - createdAt, updatedAt
- [ ] **APIRequest Model**
  - id, collectionId, name, method, url, headers
  - body, params, createdAt
- [ ] **AuditLog Model**
  - id, userId, action, resource, metadata (JSON)
  - ipAddress, userAgent, createdAt

#### 3.3 Migrations
- [ ] Criar migration inicial (`npx prisma migrate dev`)
- [ ] Script de migration para production
- [ ] Rollback strategy

... (restante do TODO-BACKEND.md continua, mantenha no arquivo original se precisar de referência completa)
```

### TODO-FRONTEND.md (completo)
```text
# 📋 TODO Frontend - ysnockserver Dashboard

## ✅ Já Completado

### Setup & Configuração
- [x] Criar projeto Vite + React + TypeScript
- [x] Configurar Tailwind CSS
- [x] Inicializar Shadcn/ui (estilo new-york)
- [x] Configurar path aliases (@/components, @/lib, etc)
- [x] Instalar dependências core (React Router, Zustand, date-fns, lucide-react)

### Componentes UI Base (Shadcn)
- [x] Button
- [x] Card
- [x] Input
- [x] Dropdown Menu
- [x] Sheet

### Design System
- [x] Tema dark mode customizado
- [x] Cores primárias (vermelho #F0003C + preto)
- [x] Glassmorphism utilities
- [x] Background gradient radial
- [x] Typography base

### UI Implementada
- [x] Layout principal com sidebar
- [x] Sidebar com navegação e user info
- [x] Dashboard page básico
- [x] Stat cards (4 cards de métricas)
- [x] System Health card
- [x] Grid responsivo

---

## 🚧 Falta Fazer - FRONTEND COMPLETO

### 1. BRANDING & DESIGN
- [ ] **Substituir "045h" por "ysnockserver" em todo o código**
  - [ ] Logo/branding na sidebar
  - [ ] Título no header
  - [ ] Favicon
  - [ ] Meta tags
  - [ ] Package.json name
- [ ] **Criar logo SVG para ysnockserver**
  - [ ] Versão completa (com texto)
  - [ ] Versão icon only
  - [ ] Versão white/color variants
- [ ] **Ajustar paleta de cores se necessário**
  - [ ] Confirmar primary color (#F0003C)
  - [ ] Definir accent colors secundárias

...

(TODO-FRONTEND.md continua extenso: componentes shadcn faltantes, routing, auth, layout, dashboard widgets, SSH terminal page, Database page, API testing page, Monitoring page, Logs/Alerts/Automation, Settings. Consulte o arquivo original para a lista completa sem perdas.)
```

### TODO-DEVOPS.md (resumo integral no arquivo original)
```text
(Manter como referência: Docker/Compose, CI/CD pipelines, reverse proxy, monitoring stack, backups, secrets, infra scripts, etc.)
```

### PLANO.md (alto nível)
- Mantém visão/arquitetura, módulos e UX propostos. Use como referência de longo prazo; TODOs detalhados acima.

---

## QuickStart / Scripts
- Backend/Frontend dev: `./start.sh` (delegado ao systemd; para manual, usar INVOCATION_ID=manual).
- Stop/restart: `./stop.sh`, `./restart.sh` (ou systemctl).
- Backup pesado atual: `backup.zip` (inclui node_modules e .git; regen com `zip -r backup.zip .`).

## Notes
- Proxmox tokenless apenas local; caso contrário set env de token.
- Watts: fator/offset fixos em `host.service.ts` (ajustar ali ou futuramente via env).
- Polling: recursos e host metrics a cada 5s; ajustar se necessário.
