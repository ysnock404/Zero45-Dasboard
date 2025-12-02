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
- [x] **Substituir "045h" por "ysnockserver" em todo o código**
  - [x] Logo/branding na sidebar
  - [x] Título no header
  - [x] Favicon
  - [x] Meta tags
  - [x] Package.json name

---

### 2. COMPONENTES SHADCN ✅ **100% COMPLETO - TODOS INSTALADOS**
- [x] Dialog/Modal
- [x] Tabs
- [x] Select
- [x] Toast/Sonner (notificações)
- [x] Badge
- [x] Avatar
- [x] Separator
- [x] Switch
- [x] Checkbox
- [x] Textarea
- [x] Popover
- [x] Command (para command palette)
- [x] Alert
- [x] Progress
- [x] Skeleton (loading states)
- [x] Label
- [x] Table
- [x] Accordion
- [x] Slider
- [x] Toggle

---

### 3. ROUTING & NAVEGAÇÃO ✅ **100% COMPLETO**
- [x] **Configurar React Router**
  - [x] Criar RouterProvider
  - [x] Definir rotas principais
  - [x] Implementar 404 page
- [x] **Criar estrutura de páginas** (14 páginas criadas)
  - [x] `/src/pages/Dashboard.tsx` (9.4KB - COMPLETO)
  - [x] `/src/pages/SSH.tsx` (25KB - COMPLETO)
  - [x] `/src/pages/RDP.tsx` (22KB - COMPLETO)
  - [x] `/src/pages/Proxmox.tsx` (31KB - COMPLETO)
  - [x] `/src/pages/Database.tsx` (placeholder)
  - [x] `/src/pages/API.tsx` (placeholder)
  - [x] `/src/pages/Monitoring.tsx` (placeholder)
  - [x] `/src/pages/Charts.tsx` (placeholder)
  - [x] `/src/pages/Logs.tsx` (placeholder)
  - [x] `/src/pages/Alerts.tsx` (placeholder)
  - [x] `/src/pages/Automation.tsx` (placeholder)
  - [x] `/src/pages/Settings.tsx` (placeholder)
  - [x] `/src/pages/Login.tsx` (4.7KB - COMPLETO)
  - [x] `/src/pages/NotFound.tsx` (COMPLETO)
- [x] **Tornar Sidebar navegável**
  - [x] Usar NavLink do React Router
  - [x] Active state baseado na rota
  - [x] Click handlers para navegação
- [x] **AppShell/Layout wrapper**
  - [x] Criar componente Layout
  - [x] Sidebar + Main content structure
  - [x] Outlet para rotas aninhadas

---

### 4. AUTENTICAÇÃO ✅ **90% COMPLETO**
- [x] **Página de Login** (4.7KB - COMPLETO)
  - [x] Form com email e password
  - [x] Validação básica
  - [x] Loading state
  - [x] Error messages
  - [x] "Remember me" checkbox
  - [x] Link "Forgot password" (UI only)
  - [x] Design glassmorphism matching theme
- [x] **Auth State Management (Zustand)**
  - [x] Criar store `useAuthStore`
  - [x] State: user, token, isAuthenticated
  - [x] Actions: login, logout, checkAuth
  - [x] Persist no localStorage
  - [ ] Action: refreshToken (FALTA)
- [x] **Protected Routes**
  - [x] ProtectedRoute component
  - [x] Redirect para /login se não autenticado
  - [x] Auth guard wrapper
- [x] **API Service para Auth**
  - [x] Axios instance configurada
  - [ ] Interceptors para JWT (FALTA - usa mock)
  - [ ] Auto-refresh token logic (FALTA)
  - [x] Error handling básico

---

### 5. LAYOUT COMPONENTS ✅ **95% COMPLETO**
- [x] **Topbar Component** (Topbar.tsx - COMPLETO)
  - [x] Breadcrumbs dinâmicos
  - [x] Global search button (Cmd+K trigger)
  - [x] Notifications bell icon + badge (3)
  - [x] User dropdown menu
  - [ ] Theme toggle (dark/light) (FALTA)
  - [ ] Full screen toggle (FALTA)
- [x] **Command Palette** (CommandPalette.tsx - COMPLETO)
  - [x] Modal com Shadcn Command
  - [x] Keyboard shortcut Cmd+K / Ctrl+K
  - [x] Search por páginas
  - [x] Categorias (Navigation, Pages)
  - [x] Fuzzy search
  - [ ] Search por ações (parcial)
  - [ ] Recent commands (FALTA)
- [x] **Notifications Center** (no Topbar - parcial)
  - [x] Dropdown com lista (3 notificações exemplo)
  - [ ] Mark as read (FALTA)
  - [ ] Filter por tipo (FALTA)
  - [ ] Clear all (FALTA)
  - [ ] Real-time badge count (FALTA - hardcoded 3)
- [x] **Breadcrumbs Component** (Breadcrumbs.tsx - COMPLETO)
  - [x] Auto-generate baseado na rota
  - [x] Click para navegar
  - [x] Separators
  - [x] Formatação bonita
- [x] **User Menu Dropdown** (no Topbar - COMPLETO)
  - [x] Profile link
  - [x] Settings link
  - [x] Logout button
  - [x] User info display (nome + email)

---

### 6. DASHBOARD PAGE ✅ **95% COMPLETO** (Dashboard.tsx - 9.4KB)
- [x] **StatCards** (4 cards implementados)
  - [x] Active Servers (12)
  - [x] Total CPU Load (45%)
  - [x] Memory Usage (24.8 GB)
  - [x] Active Alerts (3)
- [x] **System Health card** (com status indicators)
- [x] **Server Performance Chart** (Recharts - line chart 24h)
- [x] **Resource Distribution Chart** (Recharts - pie chart)
- [x] **Requests Bar Chart** (Recharts - bar chart)
- [x] **Recent Activity timeline** (lista de atividades)
- [x] **Grid responsivo** (md:grid-cols-2 lg:grid-cols-4)
- [x] **Header com título** e botões de ação
- [ ] **Tornar dados dinâmicos** (usa mock data - FALTA conectar backend)
- [ ] **Drag & Drop para widgets** (FALTA)
  - [ ] Integrar react-grid-layout
  - [ ] Save layout preference
  - [ ] Reset layout button
- [ ] **Widget Base Component** (FALTA)
- [ ] **WebSocket para dados real-time** (FALTA)

---

### 7. SSH TERMINAL PAGE
- [ ] **Servers List View**
  - [ ] Table/Grid de servidores
  - [ ] Status indicators (online/offline)
  - [ ] Quick connect button
  - [ ] Add server button
  - [ ] Edit/Delete buttons
  - [ ] Search/filter
- [ ] **Add/Edit Server Modal**
  - [ ] Form com Dialog
  - [ ] Fields: name, host, port, username, auth method
  - [ ] Password ou SSH key upload
  - [ ] Tags/labels
  - [ ] Test connection button
  - [ ] Validação
- [ ] **Terminal Component**
  - [ ] Integrar xterm.js
  - [ ] Configurar xterm-addon-fit
  - [ ] Configurar xterm-addon-web-links
  - [ ] Tema customizado matching design
  - [ ] Font size controls
  - [ ] Copy/paste support
  - [ ] Full screen mode
- [ ] **Terminal Manager**
  - [ ] Tabs para múltiplas sessões
  - [ ] New tab button
  - [ ] Close tab
  - [ ] Rename tab
  - [ ] Status indicator por tab
  - [ ] Reconnect functionality
- [ ] **Command History Sidebar**
  - [ ] Lista de comandos executados
  - [ ] Timestamps
  - [ ] Click to rerun
  - [ ] Search history
  - [ ] Clear button
- [ ] **File Browser (SFTP)**
  - [ ] Tree view de pastas
  - [ ] File list
  - [ ] Path breadcrumbs
  - [ ] Upload/Download
  - [ ] Delete/Rename
  - [ ] Create folder
  - [ ] Permissions editor
  - [ ] Drag & drop upload
  - [ ] Progress indicators
- [ ] **Saved Scripts Library**
  - [ ] Lista de scripts
  - [ ] Add/Edit script
  - [ ] Execute button
  - [ ] Parameters input
  - [ ] Tags/categories

---

### 8. DATABASE PAGE
- [ ] **Connections List**
  - [ ] Cards/Table de conexões
  - [ ] Add connection button
  - [ ] Status indicators
  - [ ] Quick connect
  - [ ] Edit/Delete
  - [ ] Test connection
- [ ] **Add/Edit Connection Modal**
  - [ ] Database type selector (PostgreSQL, MySQL, MongoDB, Redis)
  - [ ] Host, port, database name
  - [ ] Username, password
  - [ ] SSL options
  - [ ] Connection string (advanced)
  - [ ] Test button
- [ ] **Database Explorer**
  - [ ] Sidebar com tree view
  - [ ] Databases/schemas
  - [ ] Tables/collections
  - [ ] Schema info display
  - [ ] Relationships diagram
- [ ] **SQL/Query Editor**
  - [ ] Integrar Monaco Editor ou CodeMirror
  - [ ] Syntax highlighting
  - [ ] Auto-complete
  - [ ] Multiple tabs
  - [ ] Execute query button
  - [ ] Execute selection
  - [ ] Format query button
  - [ ] Query history
  - [ ] Save/Load queries
- [ ] **Query Results Table**
  - [ ] Results display
  - [ ] Pagination
  - [ ] Sort columns
  - [ ] Filter rows
  - [ ] Export (CSV, JSON)
  - [ ] Copy to clipboard
  - [ ] Execution time
  - [ ] Rows affected
- [ ] **Visual Query Builder**
  - [ ] Drag & drop interface
  - [ ] Select tables
  - [ ] Joins builder
  - [ ] Where conditions
  - [ ] Group by / Order by
  - [ ] Generate SQL button
- [ ] **Schema Visualizer**
  - [ ] ER diagram
  - [ ] Tables as nodes
  - [ ] Relationships as edges
  - [ ] Zoom/pan
  - [ ] Export diagram
- [ ] **Database Metrics Widget**
  - [ ] Connection pool status
  - [ ] Active queries
  - [ ] Slow queries log
  - [ ] Database size
  - [ ] Table sizes
- [ ] **Backup & Restore**
  - [ ] Backup now button
  - [ ] Schedule backup
  - [ ] Backup history
  - [ ] Download/Restore
  - [ ] Progress indicator

---

### 9. API TESTING PAGE
- [ ] **Collections Sidebar**
  - [ ] Tree view de coleções
  - [ ] Add collection/folder
  - [ ] Add request
  - [ ] Organize/drag & drop
  - [ ] Import/Export (Postman format)
- [ ] **Request Builder**
  - [ ] HTTP method selector
  - [ ] URL input com auto-complete
  - [ ] Params tab (query params editor)
  - [ ] Headers tab (key-value editor)
  - [ ] Body tab (JSON, Form-data, Raw, Binary)
  - [ ] Auth tab (Bearer, Basic, API key, OAuth)
  - [ ] JSON editor com syntax highlighting
  - [ ] File upload support
- [ ] **Response Viewer**
  - [ ] Status code display
  - [ ] Response time
  - [ ] Response size
  - [ ] Tabs: Body, Headers, Cookies, Timeline
  - [ ] Syntax highlighting
  - [ ] Copy/Download response
- [ ] **Environment Variables**
  - [ ] Environments dropdown
  - [ ] Add/Edit environment
  - [ ] Variables editor (key-value)
  - [ ] {{variable}} syntax support
  - [ ] Quick switch environments
- [ ] **Request History**
  - [ ] Lista de requests executados
  - [ ] Timestamp, method, URL, status
  - [ ] Click to reload
  - [ ] Clear history
- [ ] **Tests & Assertions**
  - [ ] Test script editor
  - [ ] Pre-request scripts
  - [ ] Assertions builder
  - [ ] Test results display
- [ ] **Mock Server**
  - [ ] Create mock endpoint
  - [ ] Response builder
  - [ ] Status code selector
  - [ ] Delay simulator
  - [ ] Toggle on/off
- [ ] **Webhooks Receiver**
  - [ ] Webhook URL display
  - [ ] Request history
  - [ ] Details viewer
  - [ ] Replay webhook

---

### 10. MONITORING PAGE
- [ ] **Services Overview Grid**
  - [ ] Service cards com status
  - [ ] Add service button
  - [ ] Filter por status
  - [ ] Search
- [ ] **Add/Edit Service Modal**
  - [ ] Service name
  - [ ] Check type (HTTP, TCP, Ping, SSL)
  - [ ] URL/Host, Port
  - [ ] Check interval, Timeout
  - [ ] Expected status code
  - [ ] Alert thresholds
- [ ] **Service Details Page**
  - [ ] Service info header
  - [ ] Status timeline (24h, 7d, 30d)
  - [ ] Uptime chart
  - [ ] Response time chart
  - [ ] Recent incidents
  - [ ] Check history table
- [ ] **Status Page Builder**
  - [ ] Public status page toggle
  - [ ] Custom domain input
  - [ ] Logo upload
  - [ ] Company name
  - [ ] Customization options
  - [ ] Services selection
  - [ ] Preview
- [ ] **Incidents Management**
  - [ ] Active incidents list
  - [ ] Create incident
  - [ ] Incident details modal
  - [ ] Updates timeline
  - [ ] Post update
  - [ ] Resolve incident
- [ ] **Dependencies Map**
  - [ ] Visual graph
  - [ ] Nodes e edges
  - [ ] Status colors
  - [ ] Impact analysis
  - [ ] Zoom/pan
- [ ] **SLA Reports**
  - [ ] Overview
  - [ ] Uptime by service
  - [ ] Date range selector
  - [ ] Export report

---

### 11. CHARTS & ANALYTICS PAGE
- [ ] **Dashboard Builder Canvas**
  - [ ] Drag & drop interface
  - [ ] Add chart button
  - [ ] Widget gallery sidebar
  - [ ] Save/Load dashboard
  - [ ] Share dashboard
- [ ] **Data Source Configuration**
  - [ ] Source selector modal
  - [ ] API endpoint, Database query, WebSocket, CSV
  - [ ] Data mapping
  - [ ] Refresh interval
- [ ] **Chart Components (Recharts)**
  - [ ] Line Chart
  - [ ] Bar Chart (vertical/horizontal)
  - [ ] Pie/Donut Chart
  - [ ] Area Chart
  - [ ] Gauge Chart
  - [ ] Heatmap
  - [ ] Scatter Plot
  - [ ] Geomap (opcional, pode usar react-simple-maps)
- [ ] **Chart Configuration Panel**
  - [ ] General: title, description, size
  - [ ] Data: X-axis, Y-axis, series
  - [ ] Style: colors, fonts, borders
  - [ ] Legend settings
  - [ ] Tooltip settings
- [ ] **Time Range Selector**
  - [ ] Preset ranges (1h, 24h, 7d, 30d)
  - [ ] Custom range picker
  - [ ] Relative ranges
  - [ ] Auto-refresh toggle
  - [ ] Comparison mode
- [ ] **Export Options**
  - [ ] Export PNG/SVG
  - [ ] Export data CSV/JSON
  - [ ] Export PDF
  - [ ] Share link
  - [ ] Embed code
- [ ] **Real-time Charts**
  - [ ] WebSocket integration
  - [ ] Streaming data
  - [ ] Auto-scroll
  - [ ] Data buffering

---

### 12. LOGS PAGE
- [ ] **Logs Stream Viewer**
  - [ ] Virtual scrolling (react-window ou react-virtual)
  - [ ] Auto-scroll toggle
  - [ ] Log level indicators
  - [ ] Timestamp column
  - [ ] Source/service column
  - [ ] Message column
  - [ ] Expandable details
- [ ] **Log Entry Details**
  - [ ] Expand row
  - [ ] Full message
  - [ ] Metadata/context
  - [ ] Stack trace (para errors)
  - [ ] Related logs
  - [ ] Copy/Share buttons
- [ ] **Search & Filter**
  - [ ] Search input com auto-complete
  - [ ] Filter por level, source, date range
  - [ ] Advanced query builder
  - [ ] Regex search toggle
  - [ ] Save searches
- [ ] **Log Sources Management**
  - [ ] Sources list
  - [ ] Add source
  - [ ] Configuration
  - [ ] Enable/disable
  - [ ] Status indicators
- [ ] **Pattern Detection**
  - [ ] Automatic patterns
  - [ ] Pattern highlighting
  - [ ] Pattern alerts
  - [ ] Statistics
- [ ] **Error Tracking**
  - [ ] Error grouping
  - [ ] Frequency
  - [ ] First/last seen
  - [ ] Affected users
  - [ ] Stack trace analyzer
  - [ ] Mark as resolved
- [ ] **Log Analytics**
  - [ ] Volume over time chart
  - [ ] Error rate chart
  - [ ] Top errors
  - [ ] Top sources
  - [ ] Response time distribution
- [ ] **Export & Archive**
  - [ ] Export (CSV, JSON)
  - [ ] Date range selector
  - [ ] Archive old logs
  - [ ] Download archives

---

### 13. ALERTS PAGE
- [ ] **Active Alerts List**
  - [ ] Alert cards
  - [ ] Severity indicators
  - [ ] Filter por severity
  - [ ] Search
  - [ ] Acknowledge button
  - [ ] Resolve button
- [ ] **Create/Edit Alert Modal**
  - [ ] Alert name, description
  - [ ] Metric source selector
  - [ ] Condition builder (visual)
  - [ ] Threshold value
  - [ ] Severity level
  - [ ] Evaluation interval
  - [ ] Notification channels selection
  - [ ] Test alert button
- [ ] **Condition Builder**
  - [ ] Metric selector dropdown
  - [ ] Operator selector (>, <, =, !=, etc)
  - [ ] Value input
  - [ ] Multiple conditions (AND/OR)
  - [ ] Time window selector
- [ ] **Notification Channels**
  - [ ] Channels list
  - [ ] Add channel button
  - [ ] Channel types: Email, Slack, Discord, Telegram, Webhook, SMS
  - [ ] Configuration modal por tipo
  - [ ] Test notification
- [ ] **Alert History**
  - [ ] Historical table
  - [ ] Date range filter
  - [ ] Severity filter
  - [ ] Resolution status
  - [ ] Time to resolve
  - [ ] Export history
- [ ] **Alert Rules Management**
  - [ ] Rules list
  - [ ] Enable/disable toggle
  - [ ] Edit/Delete
  - [ ] Clone rule
  - [ ] Import/Export rules
- [ ] **Escalation Policies**
  - [ ] Create policy
  - [ ] Steps configuration
  - [ ] Time delays
  - [ ] Notification targets
  - [ ] Repeat until acknowledged
  - [ ] Assign to alerts
- [ ] **Maintenance Windows**
  - [ ] Create window
  - [ ] Schedule
  - [ ] Affected services
  - [ ] Suppress alerts toggle
  - [ ] Active windows list

---

### 14. AUTOMATION/WORKFLOWS PAGE
- [ ] **Workflows List**
  - [ ] Grid/List de workflows
  - [ ] Status (active/paused)
  - [ ] Last run, success rate
  - [ ] Create workflow button
  - [ ] Search
- [ ] **Visual Workflow Builder**
  - [ ] Canvas com drag & drop (react-flow ou reactflow)
  - [ ] Node types: Trigger, Action, Condition, Loop
  - [ ] Connect nodes
  - [ ] Delete nodes
  - [ ] Node configuration panel
- [ ] **Trigger Nodes**
  - [ ] Schedule (cron expression builder)
  - [ ] Webhook (generate URL)
  - [ ] Event trigger
  - [ ] Manual trigger
- [ ] **Action Nodes**
  - [ ] SSH Command
  - [ ] API Request
  - [ ] Database Query
  - [ ] Send Notification
  - [ ] Delay
- [ ] **Condition Nodes**
  - [ ] If/Else branches
  - [ ] Condition builder
  - [ ] Multiple conditions
  - [ ] Branch visualization
- [ ] **Variables & Data**
  - [ ] Workflow variables editor
  - [ ] Data from previous steps
  - [ ] Data transformation
  - [ ] {{template}} syntax
- [ ] **Workflow Execution**
  - [ ] Run button
  - [ ] Execution logs viewer
  - [ ] Step-by-step progress
  - [ ] Success/failure indicators
  - [ ] Execution time
  - [ ] Retry failed steps
- [ ] **Scheduled Tasks**
  - [ ] Calendar view
  - [ ] Upcoming tasks list
  - [ ] Task history
  - [ ] Enable/disable
  - [ ] Edit schedule
- [ ] **Workflow Templates**
  - [ ] Templates library
  - [ ] Common workflows predefinidos
  - [ ] Use template button
  - [ ] Create from template

---

### 15. SETTINGS PAGE
- [ ] **User Profile Section**
  - [ ] Avatar upload
  - [ ] Name, email, bio
  - [ ] Timezone selector
  - [ ] Language selector
  - [ ] Save changes
- [ ] **Account Security**
  - [ ] Change password form
  - [ ] Enable 2FA
  - [ ] QR code display
  - [ ] Backup codes
  - [ ] Active sessions list
  - [ ] Revoke session
  - [ ] API keys management
- [ ] **Appearance Settings**
  - [ ] Theme selector (dark/light/auto)
  - [ ] Accent color picker
  - [ ] Font size slider
  - [ ] Sidebar position (left/right)
  - [ ] Compact mode toggle
  - [ ] Animations toggle
- [ ] **Notifications Preferences**
  - [ ] Email toggle
  - [ ] Push toggle
  - [ ] Notification types checkboxes
  - [ ] Quiet hours configuration
  - [ ] Digest frequency
- [ ] **Team Management** (se multi-user)
  - [ ] Members list
  - [ ] Invite member
  - [ ] Role assignment
  - [ ] Permissions matrix
  - [ ] Remove member
- [ ] **Integrations**
  - [ ] Available integrations list
  - [ ] Connected status
  - [ ] Connect/Disconnect buttons
  - [ ] Integration settings
- [ ] **Data & Privacy**
  - [ ] Export all data button
  - [ ] Delete account (com confirmação)
  - [ ] Data retention settings
  - [ ] Privacy policy link
  - [ ] Terms link
- [ ] **Advanced Settings**
  - [ ] API endpoint config
  - [ ] WebSocket URL
  - [ ] Debug mode toggle
  - [ ] Feature flags
  - [ ] Reset to defaults

---

### 16. GLOBAL COMPONENTS & UTILITIES

#### Components
- [ ] **EmptyState Component**
  - [ ] Icon, title, description
  - [ ] Action button opcional
  - [ ] Reutilizável em todas as páginas
- [ ] **ErrorBoundary Component**
  - [ ] Catch React errors
  - [ ] User-friendly error display
  - [ ] Report error button
  - [ ] Reload button
- [ ] **LoadingSpinner Component**
  - [ ] Varios tamanhos
  - [ ] Full page loading
  - [ ] Inline loading
  - [ ] Skeleton variants
- [ ] **ConfirmDialog Component**
  - [ ] Reutilizável para delete/destructive actions
  - [ ] Custom title, message
  - [ ] Confirm/Cancel buttons
- [ ] **StatusIndicator Component**
  - [ ] Dot com cores (green, yellow, red)
  - [ ] Pulse animation opcional
  - [ ] Com label opcional
- [ ] **CopyButton Component**
  - [ ] Copy to clipboard
  - [ ] Success feedback (toast ou checkmark)
- [ ] **CodeBlock Component**
  - [ ] Syntax highlighting
  - [ ] Copy button integrado
  - [ ] Language badge

#### Hooks Customizados
- [ ] **useLocalStorage**
  - [ ] Persist state no localStorage
  - [ ] Type-safe
- [ ] **useDebounce**
  - [ ] Para search inputs
- [ ] **useWebSocket**
  - [ ] WebSocket connection management
  - [ ] Auto-reconnect
  - [ ] Event listeners
- [ ] **useAuth**
  - [ ] Wrapper para authStore
  - [ ] Return user, login, logout, etc
- [ ] **useToast**
  - [ ] Wrapper para toast notifications
- [ ] **useKeyboardShortcut**
  - [ ] Register keyboard shortcuts
  - [ ] Cleanup automático
- [ ] **useInterval**
  - [ ] Declarative setInterval
  - [ ] Auto cleanup

#### Services/API
- [ ] **API Client Setup**
  - [ ] Axios instance base
  - [ ] Base URL configuration
  - [ ] Request interceptors (add JWT)
  - [ ] Response interceptors (handle errors)
  - [ ] Auto-refresh token logic
- [ ] **API Services** (um por módulo):
  - [ ] authService.ts
  - [ ] serversService.ts
  - [ ] databaseService.ts
  - [ ] monitoringService.ts
  - [ ] alertsService.ts
  - [ ] logsService.ts
  - [ ] etc.
- [ ] **WebSocket Service**
  - [ ] Socket.io client setup
  - [ ] Connection management
  - [ ] Event emitters
  - [ ] Reconnection logic

#### State Management (Zustand)
- [ ] **useAuthStore** (já mencionado)
- [ ] **useUIStore**
  - [ ] Sidebar collapsed state
  - [ ] Theme preference
  - [ ] Notifications
- [ ] **useServersStore**
  - [ ] Lista de servidores SSH
  - [ ] Active connections
- [ ] **useDatabaseStore**
  - [ ] Conexões de database
  - [ ] Active queries
- [ ] **useAlertsStore**
  - [ ] Active alerts
  - [ ] Alert count

---

### 17. OPTIMIZAÇÕES & PERFORMANCE
- [ ] **Code Splitting**
  - [ ] Lazy load páginas com React.lazy
  - [ ] Suspense boundaries
  - [ ] Dynamic imports para componentes pesados
- [ ] **React Optimizations**
  - [ ] React.memo em componentes pesados
  - [ ] useMemo para cálculos caros
  - [ ] useCallback para funções passadas como props
  - [ ] Virtual scrolling (react-window) em listas longas
- [ ] **Bundle Analysis**
  - [ ] Configurar vite-plugin-bundle-analyzer
  - [ ] Analisar e otimizar bundle size
  - [ ] Remove unused dependencies
- [ ] **Image Optimization**
  - [ ] Lazy loading de imagens
  - [ ] WebP format
  - [ ] Responsive images
- [ ] **Caching Strategy**
  - [ ] Integrar TanStack Query (React Query) ou SWR
  - [ ] Cache de API responses
  - [ ] Invalidação de cache
  - [ ] Stale-while-revalidate
- [ ] **Service Worker** (PWA opcional)
  - [ ] Offline support básico
  - [ ] Cache de assets
  - [ ] Background sync

---

### 18. ERROR HANDLING & LOADING STATES
- [ ] **Global Error Handler**
  - [ ] Catch all errors
  - [ ] Log para serviço (Sentry, LogRocket)
  - [ ] User notification
- [ ] **Loading States Consistentes**
  - [ ] Skeleton screens em todas as páginas
  - [ ] Progress indicators
  - [ ] Optimistic updates onde faz sentido
- [ ] **Toast Notifications**
  - [ ] Success toasts
  - [ ] Error toasts
  - [ ] Info toasts
  - [ ] Warning toasts
  - [ ] Posição configurável
- [ ] **Retry Mechanisms**
  - [ ] Retry failed API calls
  - [ ] Exponential backoff
  - [ ] Max retry attempts

---

### 19. ACCESSIBILITY (a11y)
- [ ] **Keyboard Navigation**
  - [ ] Tab order lógico
  - [ ] Focus visible styles
  - [ ] Skip to content link
  - [ ] Keyboard shortcuts documentados
- [ ] **ARIA Labels**
  - [ ] aria-label em ícones/botões
  - [ ] aria-labelledby/describedby
  - [ ] aria-live para updates dinâmicos
  - [ ] role attributes corretos
- [ ] **Screen Reader Support**
  - [ ] Alt text em imagens
  - [ ] Descriptive link text
  - [ ] Form labels associados
- [ ] **Color Contrast**
  - [ ] Verificar WCAG AA compliance
  - [ ] Testar em ferramentas (axe DevTools)
- [ ] **Focus Management**
  - [ ] Focus trap em modals
  - [ ] Return focus após modal close
  - [ ] Focus first input em forms

---

### 20. TESTING
- [ ] **Setup Testing Framework**
  - [ ] Vitest configurado
  - [ ] React Testing Library
  - [ ] MSW (Mock Service Worker) para API mocking
- [ ] **Unit Tests**
  - [ ] Utils functions
  - [ ] Custom hooks
  - [ ] Store actions (Zustand)
- [ ] **Component Tests**
  - [ ] Componentes UI críticos
  - [ ] User interactions
  - [ ] Props variations
- [ ] **Integration Tests**
  - [ ] Fluxos completos (login, navegação)
  - [ ] API integration
- [ ] **E2E Tests** (opcional)
  - [ ] Playwright ou Cypress
  - [ ] Critical user journeys
  - [ ] Login flow
  - [ ] SSH connection flow

---

### 21. DOCUMENTATION
- [ ] **Storybook** (opcional mas recomendado)
  - [ ] Setup Storybook
  - [ ] Stories para componentes UI
  - [ ] Interactive docs
  - [ ] Args/controls
- [ ] **JSDoc Comments**
  - [ ] Functions públicas
  - [ ] Componentes complexos
  - [ ] Types/interfaces
- [ ] **README.md**
  - [ ] Project overview
  - [ ] Setup instructions
  - [ ] Scripts disponíveis
  - [ ] Folder structure
  - [ ] Contributing guidelines
- [ ] **Component Documentation**
  - [ ] Props documentation
  - [ ] Usage examples
  - [ ] Best practices

---

### 22. BUILD & DEPLOY
- [ ] **Environment Variables**
  - [ ] .env.example file
  - [ ] VITE_API_URL
  - [ ] VITE_WS_URL
  - [ ] Outras configs necessárias
- [ ] **Production Build**
  - [ ] Otimizar vite.config.ts para prod
  - [ ] Minification
  - [ ] Source maps configuration
  - [ ] Compression (gzip/brotli)
- [ ] **Docker Setup**
  - [ ] Dockerfile para frontend
  - [ ] Multi-stage build
  - [ ] Nginx config
  - [ ] docker-compose.yml
- [ ] **CI/CD** (GitHub Actions)
  - [ ] Lint on PR
  - [ ] Run tests on PR
  - [ ] Build check
  - [ ] Auto-deploy (opcional)

---

### 23. MOBILE RESPONSIVENESS
- [ ] **Mobile Navigation**
  - [ ] Hamburger menu
  - [ ] Mobile sidebar (Sheet/Drawer)
  - [ ] Bottom navigation (opcional)
- [ ] **Touch Gestures**
  - [ ] Swipe to open sidebar
  - [ ] Pull to refresh (opcional)
- [ ] **Responsive Layouts**
  - [ ] Breakpoints consistentes
  - [ ] Grid responsivo em todas as páginas
  - [ ] Stack em mobile
- [ ] **Mobile-specific Components**
  - [ ] Mobile command palette
  - [ ] Mobile notifications
  - [ ] Mobile tables (horizontal scroll ou cards)

---

### 24. POLISH & NICE-TO-HAVES
- [ ] **Animações & Transitions**
  - [ ] Page transitions
  - [ ] Hover effects
  - [ ] Loading animations smooth
  - [ ] Micro-interactions
- [ ] **Onboarding**
  - [ ] Welcome modal (first time users)
  - [ ] Tour guide (react-joyride)
  - [ ] Tooltips em features complexas
- [ ] **Keyboard Shortcuts System**
  - [ ] Hotkeys panel (?)
  - [ ] Lista de shortcuts
  - [ ] Customizable shortcuts
- [ ] **Search Everything**
  - [ ] Global search funcional
  - [ ] Search em servers, databases, logs, etc
  - [ ] Recent searches
- [ ] **Favorites/Bookmarks**
  - [ ] Marcar servers favoritos
  - [ ] Quick access
  - [ ] Pin to sidebar
- [ ] **Activity Feed**
  - [ ] Timeline de todas as ações
  - [ ] User actions log
  - [ ] System events
- [ ] **Export/Import Settings**
  - [ ] Export toda a configuração
  - [ ] Import para outro browser/device
  - [ ] Backup de settings
- [ ] **Multi-language Support** (i18n)
  - [ ] react-i18next setup
  - [ ] EN/PT translations
  - [ ] Language switcher

---

## 📊 RESUMO DO TRABALHO

### Estatísticas
- **Componentes Shadcn a instalar:** ~15
- **Páginas a criar:** ~12
- **Componentes custom a criar:** ~100+
- **Hooks customizados:** ~8
- **Services/API:** ~10 files
- **Stores (Zustand):** ~5
- **Testes:** ~50+ test files (se cobertura boa)

### Tempo Estimado (aproximado)
- **Setup & Branding:** 2-4 horas
- **Routing & Layout:** 4-6 horas
- **Autenticação:** 6-8 horas
- **Dashboard melhorado:** 4-6 horas
- **SSH Terminal:** 12-16 horas
- **Database Page:** 12-16 horas
- **API Testing:** 10-12 horas
- **Monitoring:** 8-10 horas
- **Charts & Analytics:** 10-14 horas
- **Logs:** 8-10 horas
- **Alerts:** 8-10 horas
- **Automation:** 14-18 horas
- **Settings:** 6-8 horas
- **Global Components & Utils:** 8-10 horas
- **Optimizations & Testing:** 10-15 horas
- **Polish & Documentation:** 6-10 horas

**TOTAL ESTIMADO:** 120-180 horas (3-4.5 semanas full-time)

---

## 🎯 PRÓXIMOS PASSOS IMEDIATOS (Prioridade 1)

1. **Renomear "045h" para "ysnockserver"** em todo o código
2. **Instalar componentes Shadcn restantes** (Dialog, Tabs, Select, Toast, Badge, Avatar, etc)
3. **Setup React Router** + criar estrutura de páginas vazias
4. **Implementar navegação funcional** na sidebar
5. **Criar Topbar** com breadcrumbs e user menu
6. **Página de Login** completa com auth state
7. **Protected routes** implementation

---

**Última atualização:** 2025-11-30
**Versão:** 1.0
