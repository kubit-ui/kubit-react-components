# 🚀 Quick Start - Comandos Rápidos

## 📥 Instalación Inicial

```bash
pnpm install
```

---

## 🎯 Comandos por Paquete

### Components (@kubit-ui-web/react-components)

```bash
# Desarrollo (watch mode)
pnpm --filter @kubit-ui-web/react-components dev

# Build
pnpm --filter @kubit-ui-web/react-components build

# Tests
pnpm --filter @kubit-ui-web/react-components test
pnpm --filter @kubit-ui-web/react-components test:watch
pnpm --filter @kubit-ui-web/react-components test:coverage

# Lint
pnpm --filter @kubit-ui-web/react-components lint
pnpm --filter @kubit-ui-web/react-components lint:fix

# Type check
pnpm --filter @kubit-ui-web/react-components typecheck
```

### Design System (@kubit-ui-web/design-system)

```bash
# Desarrollo (regenera CSS con watch)
pnpm --filter @kubit-ui-web/design-system dev

# Build
pnpm --filter @kubit-ui-web/design-system build

# Lint
pnpm --filter @kubit-ui-web/design-system lint

# Type check
pnpm --filter @kubit-ui-web/design-system typecheck
```

### Storybook (@kubit-ui-web/storybook)

```bash
# Desarrollo → http://localhost:6006
pnpm --filter @kubit-ui-web/storybook dev

# Build (para Vercel)
pnpm --filter @kubit-ui-web/storybook build

# Lint
pnpm --filter @kubit-ui-web/storybook lint
```

---

## 🏗️ Comandos Globales (Todos los paquetes)

```bash
# Build todos los paquetes (en orden de dependencias)
pnpm -r build

# Build sin storybook (solo paquetes npm)
pnpm -r --filter=!@kubit-ui-web/storybook build

# Lint todos
pnpm -r lint

# Fix lint en todos
pnpm -r lint:fix

# Type check todos
pnpm -r typecheck

# Test todos (solo components tiene tests)
pnpm -r test

# Limpiar todos
pnpm -r clean
```

---

## 💻 Desarrollo en Paralelo

```bash
# Terminal 1: Components en watch
pnpm --filter @kubit-ui-web/react-components dev

# Terminal 2: Design System en watch
pnpm --filter @kubit-ui-web/design-system dev

# Terminal 3: Storybook
pnpm --filter @kubit-ui-web/storybook dev
```

---

## 📤 Publicación Manual a NPM

### Components

```bash
cd packages/components

# Patch version (1.0.0 → 1.0.1)
pnpm version patch

# Minor version (1.0.0 → 1.1.0)
pnpm version minor

# Major version (1.0.0 → 2.0.0)
pnpm version major

# Publicar
pnpm publish --access public
```

### Design System

```bash
cd packages/design-system

pnpm version patch  # o minor, o major
pnpm publish --access public
```

---

## 🤖 Publicación Automática (GitHub Actions)

### Release (Stable)

1. **Crear branch:**
   ```bash
   # Bug fix → patch version
   git checkout -b fix/my-bug-fix
   
   # Nueva feature → minor version
   git checkout -b feat/my-feature
   
   # Breaking change → major version
   git checkout -b break/breaking-change
   ```

2. **Hacer cambios y commit**

3. **Push y crear PR:**
   ```bash
   git push origin fix/my-bug-fix
   ```

4. **Título del PR (importante):**
   ```
   [components] fix: bug en Button       → Solo components
   [design-system] feat: nuevos tokens   → Solo design-system
   [all] feat: nueva feature             → Ambos paquetes
   feat: nueva feature                   → Ambos (default)
   ```

5. **Mergear PR → Automáticamente publica a NPM** ✨

### Beta

```bash
# Crear branch break/
git checkout -b break/experimental-feature

# Push → Automáticamente publica beta en cada push
git push origin break/experimental-feature
```

**Resultado:** 
- `@kubit-ui-web/react-components@2.0.0-beta.1`
- `@kubit-ui-web/design-system@2.0.0-beta.1`

---

## 🔧 Gestión de Dependencias

### Agregar dependencia a un paquete

```bash
# Production dependency
pnpm --filter @kubit-ui-web/react-components add lodash

# Dev dependency
pnpm --filter @kubit-ui-web/storybook add -D prettier

# Agregar dependencia de workspace
pnpm --filter @kubit-ui-web/storybook add @kubit-ui-web/react-components@workspace:*
```

### Remover dependencia

```bash
pnpm --filter @kubit-ui-web/react-components remove lodash
```

### Actualizar dependencias

```bash
# Actualizar todas
pnpm up -r

# Actualizar una específica en todos los paquetes
pnpm up -r typescript

# Actualizar en un paquete específico
pnpm --filter @kubit-ui-web/react-components up typescript
```

---

## 🐛 Troubleshooting

### Storybook no ve cambios

```bash
# Rebuild components
pnpm --filter @kubit-ui-web/react-components build

# Limpiar cache de Storybook
rm -rf packages/storybook/.storybook-cache

# Reiniciar
pnpm --filter @kubit-ui-web/storybook dev
```

### Error de módulo no encontrado

```bash
# Reinstalar workspace
rm -rf node_modules packages/*/node_modules
pnpm install
```

### Limpiar todo y empezar de cero

```bash
# Limpiar builds y node_modules
pnpm -r clean
rm -rf node_modules packages/*/node_modules pnpm-lock.yaml

# Reinstalar
pnpm install

# Rebuild todo
pnpm -r build
```

---

## 📊 Información del Workspace

```bash
# Ver todos los paquetes
pnpm list --depth 0

# Ver dependencias de un paquete
pnpm --filter @kubit-ui-web/storybook list

# Ver workspace info
pnpm -r exec pwd
```

---

## 🎨 Flujo de Trabajo Típico

### Desarrollar un componente nuevo

```bash
# 1. Crear componente
cd packages/components/src/components
mkdir MyComponent
# ... crear archivos

# 2. Desarrollar con watch
pnpm --filter @kubit-ui-web/react-components dev

# 3. En otra terminal, ver en Storybook
pnpm --filter @kubit-ui-web/storybook dev
```

### Crear story para componente

```bash
# 1. Crear story en storybook
cd packages/storybook/stories/components/MyComponent
mkdir __stories__
# ... crear story

# 2. Ver en Storybook
cd ../../../..
pnpm --filter @kubit-ui-web/storybook dev
```

### Actualizar tokens de diseño

```bash
# 1. Editar tokens
cd packages/design-system/src

# 2. Regenerar CSS
cd ..
pnpm build

# 3. Ver cambios en Storybook
cd ../storybook
pnpm dev
```

---

## ⚡ Atajos desde la Raíz

Puedes agregar estos scripts al `package.json` raíz:

```json
{
  "scripts": {
    "dev:components": "pnpm --filter @kubit-ui-web/react-components dev",
    "dev:design": "pnpm --filter @kubit-ui-web/design-system dev",
    "dev:storybook": "pnpm --filter @kubit-ui-web/storybook dev",
    "build:all": "pnpm -r build",
    "build:packages": "pnpm -r --filter=!@kubit-ui-web/storybook build",
    "test": "pnpm --filter @kubit-ui-web/react-components test",
    "lint": "pnpm -r lint",
    "lint:fix": "pnpm -r lint:fix"
  }
}
```

Entonces puedes usar:

```bash
pnpm dev:storybook
pnpm build:all
pnpm test
pnpm lint:fix
```

---

## 📝 Checklist Antes de Publicar

- [ ] `pnpm -r lint` → Sin errores
- [ ] `pnpm --filter @kubit-ui-web/react-components test` → Tests pasan
- [ ] `pnpm -r build` → Build exitoso
- [ ] `pnpm --filter @kubit-ui-web/storybook build` → Storybook compila
- [ ] Crear PR con título correcto `[components]`, `[design-system]`, o `[all]`
- [ ] Mergear → Auto-publish 🚀

---

## 🔗 Enlaces Útiles

- [Guía Completa](./MONOREPO_GUIDE.md)
- [Workflows GitHub Actions](./.github/workflows/)
- [pnpm workspace docs](https://pnpm.io/workspaces)
