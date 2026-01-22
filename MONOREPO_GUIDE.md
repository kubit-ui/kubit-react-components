# 📚 Guía Completa del Monorepo Kubit

## 🏗️ Estructura del Monorepo

```
kubit-react-components/
├── packages/
│   ├── components/          # @kubit-ui-web/react-components (NPM)
│   ├── design-system/       # @kubit-ui-web/design-system (NPM)
│   └── storybook/          # @kubit-ui-web/storybook (Vercel - NO npm)
├── package.json            # Workspace raíz
├── pnpm-workspace.yaml     # Configuración workspace
└── pnpm-lock.yaml          # Lockfile compartido
```

---

## 📦 Los 3 Paquetes

### 1. **@kubit-ui-web/react-components** (components)
- **Qué contiene:** Componentes React puros (Button, Input, etc.)
- **Se publica en:** NPM ✅
- **Depende de:** `@floating-ui/dom`
- **Contenido:**
  - `/src/components/` - Código de componentes
  - `/src/lib/` - Utilidades, hooks, types
  - `/dist/` - Build (CJS + ESM + types)

### 2. **@kubit-ui-web/design-system** (design-system)
- **Qué contiene:** Tokens, themes, estilos CSS generados por Bernova
- **Se publica en:** NPM ✅
- **Depende de:** Nada (0 dependencias)
- **Contenido:**
  - `/src/tokens/` - Design tokens
  - `/src/themes/` - Temas (si aplica)
  - `/dist/` - CSS y provider generados

### 3. **@kubit-ui-web/storybook** (storybook)
- **Qué contiene:** Documentación, stories, Figma integration
- **Se publica en:** Vercel ✅ (NO npm)
- **Depende de:** `@kubit-ui-web/react-components` + `@kubit-ui-web/design-system`
- **Contenido:**
  - `/stories/components/` - Stories de componentes
  - `/.storybook/` - Configuración Storybook
  - `/dist/` - Build estático para Vercel

---

## 🚀 Comandos Principales

### 📥 Instalación (Primera vez o después de cambios)

```bash
# Desde la raíz del proyecto
pnpm install
```

Esto instala todas las dependencias de todos los paquetes.

---

## 🔨 Desarrollo

### **Trabajar en Components**

```bash
# Modo watch - Rebuild automático al cambiar archivos
pnpm --filter @kubit-ui-web/react-components dev

# O desde packages/components/
cd packages/components
pnpm dev
```

### **Trabajar en Design System**

```bash
# Genera CSS desde tokens con watch
pnpm --filter @kubit-ui-web/design-system dev

# O desde packages/design-system/
cd packages/design-system
pnpm dev
```

### **Trabajar en Storybook** ⭐ (Lo más común)

```bash
# Inicia Storybook en http://localhost:6006
pnpm --filter @kubit-ui-web/storybook dev

# O desde packages/storybook/
cd packages/storybook
pnpm dev
```

**¿Cómo trae cosas de los otros paquetes?**
- Gracias a `"@kubit-ui-web/react-components": "workspace:*"` en su `package.json`
- pnpm crea symlinks automáticamente entre los paquetes
- Storybook importa componentes como: `import { Button } from '@kubit-ui-web/react-components'`
- Los estilos se cargan desde `@kubit-ui-web/design-system`

### **Trabajar en TODO a la vez** 🔥

```bash
# Terminal 1: Components en watch
pnpm --filter @kubit-ui-web/react-components dev

# Terminal 2: Design System en watch
pnpm --filter @kubit-ui-web/design-system dev

# Terminal 3: Storybook
pnpm --filter @kubit-ui-web/storybook dev
```

**Flujo:**
1. Cambias un componente en `packages/components/src/`
2. Se rebuilda automáticamente (Terminal 1)
3. Storybook recarga automáticamente (Terminal 3) ✨
4. Ves los cambios en http://localhost:6006

---

## 🏗️ Build (Compilar para producción)

### **Build de un paquete específico**

```bash
# Components
pnpm --filter @kubit-ui-web/react-components build

# Design System
pnpm --filter @kubit-ui-web/design-system build

# Storybook
pnpm --filter @kubit-ui-web/storybook build
```

### **Build de TODOS los paquetes** (orden de dependencias)

```bash
# Desde la raíz
pnpm -r build

# O excluir storybook (no se publica en npm)
pnpm -r --filter=!@kubit-ui-web/storybook build
```

**Orden de build automático:**
1. `design-system` (no tiene dependencias)
2. `components` (puede depender de design-system si configurado)
3. `storybook` (depende de ambos)

---

## ✅ Testing

### **Test de un paquete específico**

```bash
# Components (tiene tests)
pnpm --filter @kubit-ui-web/react-components test

# Con coverage
pnpm --filter @kubit-ui-web/react-components test:coverage

# Modo watch
pnpm --filter @kubit-ui-web/react-components test:watch
```

### **Lint y Type-check**

```bash
# Lint en todos los paquetes
pnpm -r lint

# Type-check en todos
pnpm -r typecheck

# Fix lint automático
pnpm -r lint:fix
```

---

## 📤 Publicación a NPM

### **Publicación Manual**

```bash
# 1. Build de producción
pnpm -r --filter=!@kubit-ui-web/storybook build

# 2. Publicar components
cd packages/components
pnpm version patch  # o minor, o major
pnpm publish --access public

# 3. Publicar design-system
cd ../design-system
pnpm version patch
pnpm publish --access public
```

### **Publicación Automática** (GitHub Actions) ⭐

#### **Publicación de Release (Stable)**

1. Crear branch según tipo de cambio:
   ```bash
   # Para patch (bug fixes)
   git checkout -b fix/mi-bug-fix

   # Para minor (nuevas features)
   git checkout -b feat/mi-feature

   # Para major (breaking changes)
   git checkout -b break/mi-breaking-change
   ```

2. Hacer cambios y commits

3. Crear PR con título apropiado:
   ```
   # Publicar solo components
   [components] fix: corrección en Button

   # Publicar solo design-system
   [design-system] feat: nuevos tokens

   # Publicar ambos
   [all] feat: nueva feature completa

   # Sin tag = publicar ambos (default)
   feat: nueva feature
   ```

4. Mergear el PR → **Auto-publish** a NPM 🎉

#### **Publicación de Beta**

1. Crear branch `break/`:
   ```bash
   git checkout -b break/experimental-feature
   ```

2. Push a esa branch:
   ```bash
   git push origin break/experimental-feature
   ```

3. **Automáticamente** publica versiones beta en cada push 🎉
   - `@kubit-ui-web/react-components@2.0.0-beta.1`
   - `@kubit-ui-web/design-system@2.0.0-beta.1`

4. Usuarios pueden instalar:
   ```bash
   npm install @kubit-ui-web/react-components@beta
   ```

---

## 🌐 Deployment de Storybook (Vercel)

**Automático:**
- Cada PR → Preview deployment
- Merge a `main` → Production deployment

**Manual (si configurado localmente):**
```bash
cd packages/storybook
pnpm build
# Upload dist/ folder to Vercel
```

---

## 🔄 Workflows Comunes

### **Agregar un nuevo componente**

```bash
# 1. Crear componente en components
cd packages/components/src/components
mkdir MyNewComponent
# ... crear archivos del componente

# 2. Crear stories en storybook
cd ../../../storybook/stories/components
mkdir MyNewComponent
mkdir MyNewComponent/__stories__
# ... crear stories

# 3. Desarrollar con Storybook
cd ../../..
pnpm --filter @kubit-ui-web/storybook dev
```

### **Actualizar design tokens**

```bash
# 1. Editar tokens en design-system
cd packages/design-system/src/tokens
# ... editar tokens

# 2. Regenerar CSS
cd ../..
pnpm dev  # o pnpm build

# 3. Ver cambios en Storybook
cd ../storybook
pnpm dev
```

### **Fix rápido en producción**

```bash
# 1. Branch de hotfix
git checkout -b fix/critical-bug

# 2. Fix en components
cd packages/components
# ... hacer fix

# 3. Test local
pnpm test
pnpm build

# 4. PR y merge → Auto-publish patch version
```

---

## 🎯 Comandos Útiles del Root

```bash
# Limpiar todo
pnpm -r clean

# Reinstalar todo
rm -rf node_modules packages/*/node_modules pnpm-lock.yaml
pnpm install

# Ver workspace info
pnpm list --depth 0

# Agregar dependencia a un paquete específico
pnpm --filter @kubit-ui-web/react-components add lodash

# Agregar dev dependency
pnpm --filter @kubit-ui-web/storybook add -D vite

# Remover dependencia
pnpm --filter @kubit-ui-web/react-components remove lodash
```

---

## 🐛 Troubleshooting

### **Storybook no ve cambios en components**

```bash
# 1. Rebuild components
pnpm --filter @kubit-ui-web/react-components build

# 2. Reiniciar Storybook
pnpm --filter @kubit-ui-web/storybook dev
```

### **Error "Cannot find module @kubit-ui-web/react-components"**

```bash
# Reinstalar workspace links
pnpm install
```

### **Cambios en design-system no se reflejan**

```bash
# Regenerar CSS
pnpm --filter @kubit-ui-web/design-system build

# Limpiar cache de Storybook
rm -rf packages/storybook/.storybook-cache
pnpm --filter @kubit-ui-web/storybook dev
```

### **Tests fallan después de cambios**

```bash
# Rebuild antes de test
pnpm --filter @kubit-ui-web/react-components build
pnpm --filter @kubit-ui-web/react-components test
```

---

## 📊 Resumen Visual

```
┌─────────────────────────────────────────┐
│         USUARIO FINAL                   │
│  npm install @kubit-ui-web/...          │
└─────────────────┬───────────────────────┘
                  │
         ┌────────┴─────────┐
         │                  │
         ▼                  ▼
┌────────────────┐  ┌──────────────────┐
│  Components    │  │ Design System    │
│  (NPM)         │  │ (NPM)            │
│                │  │                  │
│ • Button       │  │ • Tokens         │
│ • Input        │  │ • Themes         │
│ • ...          │  │ • CSS            │
└────────┬───────┘  └─────────┬────────┘
         │                    │
         │    workspace:*     │
         └────────┬───────────┘
                  │
                  ▼
         ┌────────────────┐
         │   Storybook    │
         │   (Vercel)     │
         │                │
         │ • Stories      │
         │ • Docs         │
         │ • Figma        │
         └────────────────┘
```

---

## 🎓 Conceptos Clave

1. **workspace:\*** = Symlink local entre paquetes
2. **pnpm -r** = Ejecuta comando en todos los paquetes (recursive)
3. **pnpm --filter** = Ejecuta comando en paquete específico
4. **[components]** en PR title = Publica solo ese paquete
5. **break/** branch = Publica versiones beta automáticamente

---

## 📝 Checklist Diario de Desarrollo

- [ ] `pnpm install` (si hay cambios en dependencies)
- [ ] `pnpm --filter @kubit-ui-web/storybook dev` (para desarrollar)
- [ ] `pnpm -r lint` (antes de commit)
- [ ] `pnpm --filter @kubit-ui-web/react-components test` (antes de PR)
- [ ] `pnpm -r build` (validar que todo compila)
- [ ] Crear PR con título descriptivo y tag `[components]`, `[design-system]` o `[all]`
- [ ] Mergear → Auto-publish 🎉

---

¿Alguna duda específica? 🚀
