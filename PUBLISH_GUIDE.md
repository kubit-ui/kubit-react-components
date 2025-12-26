# 📦 Instrucciones para Publicar en NPM

## Problema Original

```bash
npm error 404 Not Found - PUT https://registry.npmjs.org/@kubit-ui-web%2freact-components
npm error Access token expired or revoked
```

## ✅ Cambios Realizados

1. **Añadido `"private": false`** en `package.json` para permitir publicación
2. **Corregido repositorio URL** a GitHub público: `git+https://github.com/kubit-ui/kubit-react-components.git`
3. **Creado `.npmrc`** con configuración pública

---

## 🔐 Paso a Paso para Publicar

### 1. **Hacer Login en NPM**

Primero, necesitas autenticarte en NPM. Ejecuta:

```bash
npm login
```

Te pedirá:
- **Username**: Tu usuario de NPM (o crea uno en https://www.npmjs.com/signup)
- **Password**: Tu contraseña
- **Email**: Tu email
- **One-time password**: Código 2FA (si lo tienes activado)

### 2. **Verificar Autenticación**

```bash
npm whoami
```

Debe mostrar tu usuario de NPM. Si da error, repite el paso 1.

### 3. **Verificar el Scope del Paquete**

Tu paquete usa el scope `@kubit-ui-web`. Necesitas:

**Opción A: Organización NPM existente**
- Si `@kubit-ui-web` es una organización NPM existente, necesitas ser miembro
- Ve a: https://www.npmjs.com/settings/kubit-ui-web/members
- Pide acceso al administrador de la organización

**Opción B: Crear la Organización**
- Ve a: https://www.npmjs.com/org/create
- Crea la organización `kubit-ui-web`
- Elige "free" para organizaciones públicas

**Opción C: Publicar en tu scope personal (recomendado para pruebas)**
```bash
# Cambiar temporalmente el nombre del paquete
# En package.json, cambiar:
# "@kubit-ui-web/react-components" → "@TU_USUARIO/react-components"
```

### 4. **Asegurar que la Build está Lista**

```bash
# Verificar que dist/ existe
ls -la dist/

# Si no existe, ejecutar:
yarn dist
```

### 5. **Verificar qué se va a Publicar**

```bash
npm pack --dry-run
```

Esto muestra:
- Los archivos que se incluirán en el paquete
- El tamaño del paquete
- No crea ningún archivo, solo simula

### 6. **Publicar en NPM**

Para publicar la versión **beta**:

```bash
npm publish --access public --tag beta
```

Para publicar como versión **estable**:

```bash
npm publish --access public
```

### 7. **Verificar la Publicación**

```bash
# Ver en NPM
open https://www.npmjs.com/package/@kubit-ui-web/react-components

# Probar instalación
npm info @kubit-ui-web/react-components@beta
```

---

## 🚨 Solución de Problemas

### Error: "E404 Not Found"

**Causa**: La organización `@kubit-ui-web` no existe o no tienes permisos.

**Soluciones**:

1. **Verificar si la organización existe**:
   ```bash
   npm org ls kubit-ui-web
   ```

2. **Crear la organización** (si no existe):
   - Ve a https://www.npmjs.com/org/create
   - Nombre: `kubit-ui-web`
   - Tipo: Public (gratis)

3. **Unirte a la organización** (si existe):
   ```bash
   npm org set kubit-ui-web TU_USUARIO developer
   ```
   (El propietario debe ejecutar este comando)

4. **Usar tu scope personal** (alternativa temporal):
   ```bash
   # En package.json, cambiar:
   "name": "@TU_USUARIO/react-components"
   ```

### Error: "E401 Unauthorized"

**Causa**: Token expirado o no estás logueado.

**Solución**:
```bash
# Cerrar sesión
npm logout

# Volver a iniciar sesión
npm login

# Verificar
npm whoami
```

### Error: "E403 Forbidden"

**Causa**: No tienes permisos para publicar en esa organización.

**Solución**:
```bash
# Verificar tus organizaciones
npm org ls

# Pedir acceso al owner de la org
```

### Error: "ENEEDAUTH"

**Causa**: Necesitas autenticación 2FA.

**Solución**:
```bash
# Habilitar 2FA en tu cuenta NPM
# https://www.npmjs.com/settings/TU_USUARIO/tfa

# Luego publicar con OTP
npm publish --access public --tag beta --otp=123456
```

### Error: "Version already exists"

**Causa**: La versión `2.0.0-beta.1` ya fue publicada.

**Solución**:
```bash
# Opción 1: Incrementar versión
npm version 2.0.0-beta.2

# Opción 2: Usar un tag diferente
npm publish --access public --tag next

# Opción 3: Despublicar (solo en las primeras 72 horas)
npm unpublish @kubit-ui-web/react-components@2.0.0-beta.1
```

---

## 📋 Checklist Pre-Publicación

- [ ] ✅ `package.json` tiene `"private": false`
- [ ] ✅ Build completa en `dist/` (ejecutar `yarn dist`)
- [ ] ✅ Tests pasando (`yarn test`)
- [ ] ✅ Linting sin errores (`yarn lint`)
- [ ] ✅ `README.md` actualizado
- [ ] ✅ `CHANGELOG.md` actualizado con la versión
- [ ] ✅ Autenticado en NPM (`npm whoami`)
- [ ] ✅ Permisos en la organización NPM
- [ ] ✅ Versión correcta en `package.json`
- [ ] ✅ Git tag creado: `git tag v2.0.0-beta.1`
- [ ] ✅ Cambios commiteados

---

## 🎯 Comando Final

Una vez completados todos los pasos:

```bash
# Para versión beta
npm publish --access public --tag beta

# Con 2FA habilitado
npm publish --access public --tag beta --otp=CODIGO_2FA
```

---

## 📦 Después de Publicar

### 1. **Crear Release en GitHub**

```bash
# Crear tag
git tag v2.0.0-beta.1
git push origin v2.0.0-beta.1

# Ir a GitHub y crear release
open https://github.com/kubit-ui/kubit-react-components/releases/new
```

### 2. **Verificar Instalación**

```bash
# Crear proyecto de prueba
mkdir test-install
cd test-install
npm init -y
npm install @kubit-ui-web/react-components@beta

# Verificar importación
node -e "console.log(require('@kubit-ui-web/react-components'))"
```

### 3. **Anunciar el Release**

- Actualizar README.md con badge de NPM
- Tweet/anuncio en redes sociales
- Notificar a usuarios existentes

---

## 🔗 Links Útiles

- **NPM Package**: https://www.npmjs.com/package/@kubit-ui-web/react-components
- **NPM Organization**: https://www.npmjs.com/org/kubit-ui-web
- **GitHub Repo**: https://github.com/kubit-ui/kubit-react-components
- **NPM Docs**: https://docs.npmjs.com/cli/v10/commands/npm-publish

---

## 💡 Tips

### Publicar versiones Beta

```bash
# Beta 1
npm version 2.0.0-beta.1
npm publish --access public --tag beta

# Beta 2
npm version 2.0.0-beta.2
npm publish --access public --tag beta

# Release Candidate
npm version 2.0.0-rc.1
npm publish --access public --tag rc

# Versión Estable
npm version 2.0.0
npm publish --access public --tag latest
```

### Automatizar con CI/CD

Puedes automatizar la publicación con GitHub Actions:

```yaml
# .github/workflows/publish.yml
name: Publish to NPM

on:
  release:
    types: [created]

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          registry-url: 'https://registry.npmjs.org'
      - run: yarn install
      - run: yarn dist
      - run: yarn test
      - run: npm publish --access public
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

---

**Última actualización**: 26 de diciembre de 2025
