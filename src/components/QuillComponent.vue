<template>
  <div>
    <!-- aqui vai o editor -->
    <div id="editor"></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import Quill from 'quill'
import 'quill/dist/quill.snow.css' // importa o tema snow (ou bubble)

onMounted(() => {
  const quill = new Quill('#editor', {
    modules: {
      toolbar: [
        [{ header: [1, 2, false] }],
        ['bold', 'italic', 'underline'],
        [{ list: 'ordered' }, { list: 'bullet' }]
      ],
    },
    placeholder: 'Compose an epic...',
    theme: 'snow', // ou 'bubble'
  })

  // Exemplo: ouvindo mudanças no editor
  quill.on('text-change', () => {
    console.log(quill.root.innerHTML) // pega o HTML atual
  })
})
</script>


<!-- <template>
  <div>
    <QuillEditor
      v-model:content="content"
      content-type="html"
      theme="snow"
      :modules="modules"
    />
    <pre>{{ content }}</pre>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import 'quill/dist/quill.snow.css' // tema do Quill

const content = ref('')

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ['bold', 'italic', 'underline'],
    ['image', 'code-block'],
  ],
}
</script> -->
