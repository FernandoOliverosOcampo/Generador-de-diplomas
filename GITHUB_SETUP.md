# 📚 Guía Rápida: Subir a GitHub

## Pasos Rápidos

### 1. Si no tienes Git instalado
Descarga Git desde: https://git-scm.com/download/win

### 2. Abre PowerShell o Terminal en la carpeta del proyecto

### 3. Inicializa Git (solo la primera vez)
```bash
git init
```

### 4. Agrega todos los archivos
```bash
git add .
```

### 5. Haz tu primer commit
```bash
git commit -m "Primera versión: Creador de Diplomas Web"
```

### 6. Crea un repositorio en GitHub
1. Ve a https://github.com
2. Haz clic en el botón "+" (arriba a la derecha)
3. Selecciona "New repository"
4. **Nombre**: `creador-diplomas` (o el que prefieras)
5. **Descripción**: "Aplicación web para generar diplomas automáticamente"
6. **Público o Privado**: Tú decides
7. **NO marques** "Add a README file" (ya lo tenemos)
8. Haz clic en "Create repository"

### 7. Conecta tu proyecto local con GitHub
Copia y pega estos comandos (reemplaza `TU-USUARIO` con tu usuario de GitHub):

```bash
git remote add origin https://github.com/TU-USUARIO/creador-diplomas.git
git branch -M main
git push -u origin main
```

GitHub te pedirá autenticarte. Puedes usar:
- Tu usuario y contraseña de GitHub
- O un Personal Access Token (más seguro)

### 8. ¡Listo! 🎉
Tu código está en GitHub. Puedes verlo en: `https://github.com/TU-USUARIO/creador-diplomas`

## Para futuros cambios

Cuando hagas cambios y quieras subirlos:

```bash
git add .
git commit -m "Descripción de los cambios"
git push
```

## Archivos que NO se suben

El archivo `.gitignore` está configurado para NO subir:
- Archivos Excel y Word personales
- Carpetas de diplomas generados
- Archivos temporales
- Información sensible

## ¿Problemas?

### Error: "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/TU-USUARIO/creador-diplomas.git
```

### Error: "authentication failed"
1. Ve a GitHub → Settings → Developer settings → Personal access tokens
2. Genera un nuevo token con permisos de "repo"
3. Úsalo como contraseña cuando Git te lo pida

### Error: "branch main does not exist"
```bash
git branch -M main
```

---

¡Tu código está seguro en GitHub! 🚀

