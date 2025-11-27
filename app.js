// Manejo de archivos seleccionados
document.getElementById('templateFile').addEventListener('change', function(e) {
    const file = e.target.files[0];
    const button = document.getElementById('templateButton');
    const fileName = document.getElementById('templateFileName');
    
    if (file) {
        fileName.textContent = file.name;
        button.classList.add('has-file');
    } else {
        fileName.textContent = 'Seleccionar archivo...';
        button.classList.remove('has-file');
    }
});

document.getElementById('excelFile').addEventListener('change', function(e) {
    const file = e.target.files[0];
    const button = document.getElementById('excelButton');
    const fileName = document.getElementById('excelFileName');
    
    if (file) {
        fileName.textContent = file.name;
        button.classList.add('has-file');
    } else {
        fileName.textContent = 'Seleccionar archivo...';
        button.classList.remove('has-file');
    }
});

// Manejo del formulario
document.getElementById('diplomaForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const templateFile = document.getElementById('templateFile').files[0];
    const excelFile = document.getElementById('excelFile').files[0];
    
    if (!templateFile || !excelFile) {
        showMessage('Por favor, selecciona ambos archivos.', 'error');
        return;
    }
    
    // Validar extensiones
    if (!templateFile.name.endsWith('.docx')) {
        showMessage('El archivo de plantilla debe ser un archivo .docx', 'error');
        return;
    }
    
    if (!excelFile.name.endsWith('.xlsx') && !excelFile.name.endsWith('.xls')) {
        showMessage('El archivo de datos debe ser un archivo .xlsx o .xls', 'error');
        return;
    }
    
    // Preparar UI
    const generateButton = document.getElementById('generateButton');
    const progressContainer = document.getElementById('progressContainer');
    const messageDiv = document.getElementById('message');
    
    generateButton.disabled = true;
    generateButton.textContent = '⏳ Generando...';
    progressContainer.classList.add('active');
    messageDiv.className = 'message';
    updateProgress(0, 'Subiendo archivos...');
    
    try {
        // Crear FormData
        const formData = new FormData();
        formData.append('template', templateFile);
        formData.append('excel', excelFile);
        
        // Enviar archivos al servidor
        updateProgress(10, 'Enviando archivos al servidor...');
        
        const response = await fetch('/generate', {
            method: 'POST',
            body: formData
        });
        
        if (!response.ok) {
            // Intentar obtener el error como JSON, pero manejar si no es JSON
            let errorMessage = 'Error al generar los diplomas';
            try {
                const contentType = response.headers.get('content-type');
                if (contentType && contentType.includes('application/json')) {
                    const errorData = await response.json();
                    errorMessage = errorData.error || errorMessage;
                } else {
                    const errorText = await response.text();
                    errorMessage = errorText || errorMessage;
                }
            } catch (e) {
                errorMessage = `Error ${response.status}: ${response.statusText}`;
            }
            throw new Error(errorMessage);
        }
        
        updateProgress(50, 'Procesando archivos...');
        
        // Obtener el archivo ZIP generado
        const blob = await response.blob();
        
        updateProgress(90, 'Preparando descarga...');
        
        // Crear enlace de descarga
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'diplomas_generados.zip';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
        
        updateProgress(100, '¡Completado!');
        
        // Mostrar mensaje de éxito
        showMessage('¡Diplomas generados exitosamente! El archivo ZIP se está descargando.', 'success');
        
        // Resetear formulario después de 3 segundos
        setTimeout(() => {
            document.getElementById('diplomaForm').reset();
            document.getElementById('templateButton').classList.remove('has-file');
            document.getElementById('excelButton').classList.remove('has-file');
            document.getElementById('templateFileName').textContent = 'Seleccionar archivo...';
            document.getElementById('excelFileName').textContent = 'Seleccionar archivo...';
            progressContainer.classList.remove('active');
            generateButton.disabled = false;
            generateButton.textContent = '🚀 Generar Diplomas';
        }, 3000);
        
    } catch (error) {
        console.error('Error completo:', error);
        let errorMsg = error.message || 'Error desconocido';
        
        // Si es un error de red, mostrar mensaje más amigable
        if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
            errorMsg = 'Error de conexión. Asegúrate de que el servidor esté corriendo en http://localhost:5000';
        }
        
        showMessage('Error: ' + errorMsg, 'error');
        progressContainer.classList.remove('active');
        generateButton.disabled = false;
        generateButton.textContent = '🚀 Generar Diplomas';
    }
});

function updateProgress(percentage, text) {
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    
    progressFill.style.width = percentage + '%';
    progressFill.textContent = percentage + '%';
    progressText.textContent = text;
}

function showMessage(message, type) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.className = 'message ' + type;
    
    if (type === 'success') {
        setTimeout(() => {
            messageDiv.className = 'message';
        }, 5000);
    }
}

