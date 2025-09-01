<template>
  <ckeditor v-model="editorData" :editor="editor" :config="editorConfig" />
</template>

<script setup>
import { ref } from 'vue'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

const editor = ClassicEditor
const editorData = ref('<p>Hello CKEditor!</p>')
const editorConfig = {}
</script>


<!-- <template>
	<ckeditor
		v-if="editor"
		v-model="data"
		:editor="editor"
		:config="config"
	/>
</template>

<script setup>
import { ref, computed } from 'vue';
import { Ckeditor, useCKEditorCloud } from '@ckeditor/ckeditor5-vue';

// Carrega CKEditor do CDN
const cloud = useCKEditorCloud({
  version: '46.0.2',
  premium: false
})

const data = ref( '<p>Hello world!</p>' );

// Editor (ClassicEditor)
const editor = computed( () => {
	if ( !cloud.data.value ) {
		return null;
	}

	return cloud.data.value.CKEditor.ClassicEditor;
} );

// Configuração do editor
const config = computed( () => {
		if ( !cloud.data.value ) {
		return null;
	}

	const { Essentials, Paragraph, Bold, Italic } = cloud.data.value.CKEditor;

	return {
		plugins: [ Essentials, Paragraph, Bold, Italic],
		toolbar: [ 'undo', 'redo', '|', 'bold', 'italic', '|']
	};
} );

</script> -->
