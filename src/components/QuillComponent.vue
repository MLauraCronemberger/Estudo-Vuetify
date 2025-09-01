<template>
  <div>
    <QuillEditor
      v-model="content"
      :options="editorOptions"
      style="height: 300px;"
    />
    <button @click="saveContent">Salvar</button>

    <div class="preview">
      <h3>Preview:</h3>
      <div v-html="content"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { QuillEditor } from 'vue3-quill'
// npm install @vueup/vue-quill quill

const content = ref('<p>Escreva algo aqui...</p>')

const editorOptions = {
  theme: 'snow',
  modules: {
    toolbar: [
      ['bold', 'italic', 'underline'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image']
    ]
  }
}

const saveContent = () => {
  // Aqui você envia content.value para o backend
  console.log('Conteúdo HTML a salvar:', content.value)
}
</script>

<style>
.preview {
  margin-top: 20px;
  border: 1px solid #ddd;
  padding: 10px;
}
</style>
