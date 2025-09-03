 <template>
    <div>
    <ckeditor
        v-if="editor"
        v-model="data"
        :editor="editor"
        :config="config"
    />
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { Ckeditor, useCKEditorCloud } from '@ckeditor/ckeditor5-vue';

const cloud = useCKEditorCloud( {
    version: '46.0.2',
    premium: false
} );

const data = ref( '<p>Hello world!</p>' );

const editor = computed( () => {
    if ( !cloud.data.value ) {
        return null;
    }

    return cloud.data.value.CKEditor.ClassicEditor;
} );

const config = computed( () => {
        if ( !cloud.data.value ) {
        return null;
    }

    const { Essentials, Paragraph, Bold, Italic, List } = cloud.data.value.CKEditor;

    return {
		licenseKey: 'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3NTgwNjcxOTksImp0aSI6IjEzZTE0ODc1LTJmZjMtNDkxOS05MThhLTEwZDk2YmYwYmNiZCIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiLCJzaCJdLCJ3aGl0ZUxhYmVsIjp0cnVlLCJsaWNlbnNlVHlwZSI6InRyaWFsIiwiZmVhdHVyZXMiOlsiKiJdLCJ2YyI6IjdiNGY0ZjI4In0.AIm1AbHx7ZfHPW92VSRQ2wcI7ChVsGBX19hfRTcPE0F3rl5gKJI_PUKYZbL4XOHUMYVRzBqiIsJcstn8-D8xfw',
        plugins: [ Essentials, Paragraph, Bold, Italic, List],
        toolbar: [ 'undo', 'redo', '|', 'bold', 'italic', '|', 'bulletedList', 'numberedList'],
        contentStyles: {
      // aplica CSS diretamente no conteúdo editável
      'ol, ul': 'margin-left: 1rem; padding-left: 1.5rem; list-style-position: inside;'
    }
    };
} );
</script> 


<style scoped>
/* ✅ Ajusta listas dentro do CKEditor */
:deep(.ck-content ul),
:deep(.ck-content ol) {
  padding-left: 1.5rem; /* espaço para bullets visíveis */
  margin-left: 1rem;
  list-style-position:  outside;
}

</style>
