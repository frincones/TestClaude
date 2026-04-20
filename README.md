# Hola Mundo

Aplicación web mínima en Node.js que responde "Hola Mundo".

## Desarrollo local

```bash
npm start
```

Abre http://localhost:3000 en tu navegador.

## Despliegue en Vercel

### Opción 1 — Desde la web (más simple)

1. Entra a https://vercel.com/new
2. Inicia sesión con tu cuenta de GitHub
3. Importa el repositorio `frincones/testclaude`
4. En "Branch" selecciona `claude/create-new-application-2QQUj`
5. Deja la configuración por defecto (Vercel detecta `vercel.json`)
6. Haz clic en **Deploy**

Al terminar obtendrás una URL pública del tipo `https://<nombre>.vercel.app`.

### Opción 2 — Desde la CLI

```bash
npm i -g vercel
vercel login
vercel --prod
```

## Estructura

- `server.js` — servidor HTTP local para desarrollo
- `api/index.js` — función serverless para Vercel
- `vercel.json` — configuración de rutas en Vercel
