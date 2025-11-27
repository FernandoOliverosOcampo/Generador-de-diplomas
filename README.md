# 🎓 Creador de Diplomas - Aplicación Web

Aplicación web dinámica para generar diplomas automáticamente a partir de una plantilla de Word y un archivo Excel con datos.

## ✨ Características

- **Interfaz web moderna y fácil de usar**
- **Subida de archivos dinámica**: Puedes usar diferentes plantillas y archivos Excel
- **Generación automática**: Crea múltiples diplomas en segundos
- **Descarga en ZIP**: Todos los diplomas se descargan en un archivo ZIP comprimido
- **Formateo inteligente**: Preserva el formato de números de documento y lugares de expedición

## 📋 Requisitos

- Python 3.8 o superior
- pip (gestor de paquetes de Python)

## 🚀 Instalación

1. **Instala las dependencias:**
   ```bash
   pip install -r requirements.txt
   ```

## 💻 Uso

1. **Inicia el servidor:**
   ```bash
   python app.py
   ```

2. **Abre tu navegador y ve a:**
   ```
   http://localhost:5000
   ```

3. **En la interfaz web:**
   - Selecciona tu archivo de plantilla (.docx)
   - Selecciona tu archivo Excel con los datos (.xlsx)
   - Haz clic en "Generar Diplomas"
   - Espera a que se procesen los archivos
   - Se descargará automáticamente un archivo ZIP con todos los diplomas generados

## 📝 Formato del Excel

El archivo Excel debe tener:
- **Primera fila**: Nombres de columnas (se convertirán automáticamente a mayúsculas)
- **Filas siguientes**: Datos de cada persona

### Columnas especiales:

- **N_DOCUMENTO**: Se formateará automáticamente con puntos como separadores de miles (formato colombiano)
- **LUGAR_EXPEDICION**: Se preserva exactamente como está en el Excel
- **NOMBRE_COMPLETO**: Se usa para nombrar los archivos generados

### Ejemplo de estructura del Excel:

| N_REGISTRO| NOMBRE_COMPLETO| N_DOCUMENTO | LUGAR_EXPEDICION | 
|-----------|----------------|-------------|------------------|
| 01        | Juan Pérez     | 1234567890  | Bogotá           | 
| 02        | María García   | 9876543210  | Medellín         | 

## 📄 Formato de la Plantilla Word

En tu plantilla de Word (.docx), usa placeholders con el formato:
```
{NOMBRE_COLUMNA}
```

Por ejemplo:
- `{NOMBRE_COMPLETO}` será reemplazado por el valor de la columna NOMBRE_COMPLETO
- `{N_DOCUMENTO}` será reemplazado por el valor formateado de N_DOCUMENTO
- `{LUGAR_EXPEDICION}` será reemplazado por el valor exacto de LUGAR_EXPEDICION


<img width="784" height="409" alt="image" src="https://github.com/user-attachments/assets/e8a60333-f0f0-4c99-aa57-270720352ca1" />


Los placeholders pueden estar en cualquier parte del documento:
- Párrafos normales
- Tablas
- Encabezados y pies de página
- Cuadros de texto
- Formas

## 🔧 Solución de Problemas

### Error: "Faltan archivos requeridos"
- Asegúrate de haber seleccionado ambos archivos (plantilla y Excel)

### Error: "Tipo de archivo no permitido"
- La plantilla debe ser un archivo .docx
- El archivo de datos debe ser .xlsx o .xls

### Error al iniciar el servidor
- Verifica que Python esté instalado correctamente
- Asegúrate de haber instalado todas las dependencias: `pip install -r requirements.txt`
- Verifica que el puerto 5000 no esté en uso

## 📦 Estructura del Proyecto

```
.
├── app.py              # Servidor Flask (backend)
├── index.html          # Interfaz web (frontend)
├── app.js              # JavaScript para manejo de UI
├── requirements.txt    # Dependencias de Python
├── README.md          # Este archivo
└── diplomas.py        # Script original (referencia)
```

## 🎯 Ventajas sobre el script original

- ✅ **Interfaz gráfica**: No necesitas editar código para cambiar archivos
- ✅ **Reutilizable**: Puedes usar diferentes plantillas y archivos Excel sin modificar código
- ✅ **Portable**: Funciona en cualquier navegador
- ✅ **Descarga directa**: Los diplomas se descargan automáticamente en un ZIP
- ✅ **Sin instalación local**: Solo necesitas el servidor corriendo

## 📤 Subir a GitHub

1. **Inicializar Git:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Creador de Diplomas Web App"
   ```

2. **Crear repositorio en GitHub** y luego:
   ```bash
   git remote add origin https://github.com/tu-usuario/creador-diplomas.git
   git branch -M main
   git push -u origin main
   ```

## 🌐 Desplegar en la Nube

Para desplegar tu aplicación en la nube (Render, Railway, Heroku, etc.), consulta el archivo **[DEPLOY.md](DEPLOY.md)** que incluye instrucciones detalladas paso a paso.

### Opciones de Deployment Gratuitas:
- **Render** (Recomendado) - [render.com](https://render.com)
- **Railway** - [railway.app](https://railway.app)
- **PythonAnywhere** - [pythonanywhere.com](https://www.pythonanywhere.com)

## 📞 Soporte

Si encuentras algún problema o tienes sugerencias, revisa el código fuente o contacta al desarrollador.

---

¡Disfruta generando diplomas de forma rápida y eficiente! 🎉

