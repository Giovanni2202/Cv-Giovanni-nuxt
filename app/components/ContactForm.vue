<script setup lang="ts">
import { reactive, ref } from 'vue'

// Estado del formulario
const form = reactive({
  username: '',
  email: '',
  phone: '',
  body: ''
})

const errors = reactive({
  username: '',
  email: '',
  body: ''
})

const isSending = ref(false)

// Validación simple
const validateForm = () => {
  let isValid = true
  errors.username = !form.username ? 'IDENT_USER REQUERIDO' : ''
  errors.email = !form.email.includes('@') ? 'MAIL_ENDPOINT INVÁLIDO' : ''
  errors.body = !form.body ? 'DATA_PACKET_CONTENT VACÍO' : ''
  
  if (errors.username || errors.email || errors.body) isValid = false
  return isValid
}

const handleSubmit = async () => {
  if (!validateForm()) return
  
  isSending.value = true // Corregido: .value en lugar de .ref
  
  // Tu URL de Google Apps Script
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwwT9mC5bpf1y6UIpzHVe-1qhxqWeqWqOOe3k5iNCbwuqUSbvnkIz-IdCyDPsZSCHS_/exec'

  try {
    // Enviamos los datos a Google Sheets
    await fetch(scriptURL, {
      method: 'POST',
      mode: 'no-cors', // Evita bloqueos de política de origen (CORS)
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })

    alert('TRANSMISIÓN EXITOSA: Datos sincronizados en la nube.')
    
    // Limpiar formulario tras el envío exitoso
    form.username = ''
    form.email = ''
    form.phone = ''
    form.body = ''
    
  } catch (error) {
    console.error('Error de conexión:', error)
    alert('ERROR DE PROTOCOLO: No se pudo establecer la conexión con el servidor.')
  } finally {
    isSending.value = false
  }
}
</script>

<template>
  <section class="matrix-form-container">
    <div class="terminal-header">
      <span class="dot red"></span>
      <span class="dot yellow"></span>
      <span class="dot green"></span>
      <span class="terminal-title">ESTABLECER_CONEXIÓN.exe</span>
    </div>

    <form @submit.prevent="handleSubmit" class="matrix-form">
      <div class="grid-layout">
        <div class="input-group">
          <label for="username">> IDENT_USER:</label>
          <input 
            v-model="form.username" 
            type="text" 
            id="username" 
            placeholder="quien_eres?..."
            :class="{ 'error-border': errors.username }"
          >
        </div>

        <div class="input-group">
          <label for="email">> MAIL_ENDPOINT:</label>
          <input 
            v-model="form.email" 
            type="email" 
            id="email" 
            placeholder="usuario@red.com"
            :class="{ 'error-border': errors.email }"
          >
        </div>

        <div class="input-group">
          <label for="phone">> COMMS_CHANNEL (TEL):</label>
          <input v-model="form.phone" type="text" id="phone" placeholder="55XXXXXXXX">
        </div>

        <div class="input-group full-width">
          <label for="body">> DATA_PACKET_CONTENT:</label>
          <textarea 
            v-model="form.body" 
            id="body" 
            placeholder="Escribe tu mensaje aquí..."
            :class="{ 'error-border': errors.body }"
          ></textarea>
        </div>
      </div>

      <button type="submit" class="submit-btn" :disabled="isSending">
        {{ isSending ? 'ENVIANDO_PAQUETES...' : 'EJECUTAR_ENVIO' }}
      </button>
    </form>
  </section>
</template>

<style scoped>
/* Los estilos que ya tenías para mantener la estética Matrix */
.matrix-form-container {
  border: 1px solid #00ff41;
  background: rgba(0, 20, 0, 0.8);
  border-radius: 8px;
  overflow: hidden;
  font-family: 'Courier New', Courier, monospace;
}

.terminal-header {
  background: #1a1a1a;
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 8px;
  border-bottom: 1px solid #00ff41;
}

.dot { width: 12px; height: 12px; border-radius: 50%; }
.red { background: #ff5f56; }
.yellow { background: #ffbd2e; }
.green { background: #27c93f; }

.terminal-title { color: #00ff41; font-size: 0.8rem; margin-left: 10px; }

.matrix-form { padding: 20px; display: flex; flex-direction: column; gap: 20px; }

.grid-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }

.input-group { display: flex; flex-direction: column; gap: 8px; }
.full-width { grid-column: span 2; }

label { color: #00ff41; font-size: 0.9rem; }

input, textarea {
  background: transparent;
  border: 1px solid #004411;
  color: #00ff41;
  padding: 10px;
  outline: none;
}

input:focus, textarea:focus { border-color: #00ff41; box-shadow: 0 0 5px #00ff41; }

.submit-btn {
  background: transparent;
  border: 1px solid #00ff41;
  color: #00ff41;
  padding: 15px;
  cursor: pointer;
  transition: 0.3s;
}

.submit-btn:hover:not(:disabled) {
  background: #00ff41;
  color: #000;
}

.submit-btn:disabled { opacity: 0.5; cursor: not-allowed; }

.error-border { border-color: #ff0000 !important; }
</style>