# 🚀 Guía de Despliegue - Creador de Diplomas

Esta guía te ayudará a subir tu aplicación a GitHub y desplegarla en diferentes plataformas.

## 📦 Subir a GitHub

### 1. Inicializar Git (si no lo has hecho)

```bash
git init
```

### 2. Agregar archivos

```bash
git add .
```

### 3. Hacer commit inicial

```bash
git commit -m "Initial commit: Creador de Diplomas Web App"
```

### 4. Crear repositorio en GitHub

1. Ve a [GitHub](https://github.com) y crea un nuevo repositorio
2. **NO** inicialices con README, .gitignore o licencia (ya los tenemos)
3. Copia la URL del repositorio (ej: `https://github.com/tu-usuario/creador-diplomas.git`)

### 5. Conectar y subir

```bash
git remote add origin https://github.com/tu-usuario/creador-diplomas.git
git branch -M main
git push -u origin main
```

## 🌐 Desplegar en la Nube

### Opción 1: Render (Recomendado - Gratis)

1. Ve a [render.com](https://render.com) y crea una cuenta
2. Haz clic en "New +" → "Web Service"
3. Conecta tu repositorio de GitHub
4. Configuración:
   - **Name**: creador-diplomas
   - **Environment**: Python 3
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `python app.py`
   - **Plan**: Free
5. Haz clic en "Create Web Service"
6. Espera a que se despliegue (5-10 minutos)
7. Tu app estará disponible en: `https://creador-diplomas.onrender.com`

### Opción 2: Railway (Gratis con límites)

1. Ve a [railway.app](https://railway.app) y crea una cuenta
2. Haz clic en "New Project" → "Deploy from GitHub repo"
3. Selecciona tu repositorio
4. Railway detectará automáticamente que es una app Python
5. Tu app estará disponible en una URL generada automáticamente

### Opción 3: Heroku (Requiere tarjeta de crédito para verificar)

1. Instala Heroku CLI: [heroku.com/cli](https://devcenter.heroku.com/articles/heroku-cli)
2. Login:
   ```bash
   heroku login
   ```
3. Crear app:
   ```bash
   heroku create tu-app-nombre
   ```
4. Desplegar:
   ```bash
   git push heroku main
   ```
5. Tu app estará en: `https://tu-app-nombre.herokuapp.com`

### Opción 4: PythonAnywhere (Gratis)

1. Ve a [pythonanywhere.com](https://www.pythonanywhere.com) y crea cuenta
2. Abre una consola Bash
3. Clona tu repositorio:
   ```bash
   git clone https://github.com/tu-usuario/creador-diplomas.git
   ```
4. Instala dependencias:
   ```bash
   pip3.10 install --user -r creador-diplomas/requirements.txt
   ```
5. Crea una nueva Web App desde el dashboard
6. Configura el archivo WSGI para apuntar a `app.py`
7. Recarga la aplicación

## 🔧 Configuración Adicional

### Variables de Entorno (si las necesitas)

En la mayoría de plataformas puedes configurar variables de entorno:
- `PORT`: Puerto donde correrá la app (generalmente se configura automáticamente)
- `FLASK_ENV`: `production` o `development`

### Límites de Archivos

Algunas plataformas tienen límites de tamaño de archivo:
- **Render**: 100MB por request
- **Railway**: 100MB por request
- **Heroku**: 30 segundos de timeout

Si necesitas procesar archivos muy grandes, considera:
- Aumentar el timeout
- Procesar en segundo plano
- Usar un servicio de almacenamiento (S3, etc.)

## 📝 Notas Importantes

1. **Archivos temporales**: La app crea archivos temporales que se eliminan automáticamente
2. **Memoria**: Procesar muchos diplomas puede requerir memoria. Considera limitar el número de filas en el Excel
3. **HTTPS**: Todas las plataformas mencionadas proporcionan HTTPS automáticamente
4. **Dominio personalizado**: Puedes configurar un dominio personalizado en la mayoría de plataformas

## 🐛 Solución de Problemas

### Error: "Module not found"
- Verifica que `requirements.txt` tenga todas las dependencias
- Asegúrate de que el build command instale las dependencias

### Error: "Port already in use"
- En producción, usa la variable de entorno `PORT` que la plataforma proporciona
- El código ya está configurado para esto

### Error: "Application error"
- Revisa los logs de la plataforma
- Verifica que el comando de inicio sea correcto
- Asegúrate de que todos los archivos estén en el repositorio

## ✅ Checklist Pre-Deployment

- [ ] Archivos subidos a GitHub
- [ ] `.gitignore` configurado correctamente
- [ ] `requirements.txt` actualizado
- [ ] `app.py` configurado para producción (puerto dinámico)
- [ ] README.md actualizado
- [ ] Probado localmente

---

¡Listo! Tu aplicación debería estar funcionando en la nube. 🎉

