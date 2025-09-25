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
		licenseKey: 'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3ODgzOTM1OTksImp0aSI6IjBjMjY4YmIzLTUwMzgtNDU4ZS1hM2Q0LTE1NWFhZTFjZWY5YSIsImxpY2Vuc2VkSG9zdHMiOlsiMTI3LjAuMC4xIiwibG9jYWxob3N0IiwiMTkyLjE2OC4qLioiLCIxMC4qLiouKiIsIjE3Mi4qLiouKiIsIioudGVzdCIsIioubG9jYWxob3N0IiwiKi5sb2NhbCJdLCJ1c2FnZUVuZHBvaW50IjoiaHR0cHM6Ly9wcm94eS1ldmVudC5ja2VkaXRvci5jb20iLCJkaXN0cmlidXRpb25DaGFubmVsIjpbImNsb3VkIiwiZHJ1cGFsIl0sImxpY2Vuc2VUeXBlIjoiZGV2ZWxvcG1lbnQiLCJmZWF0dXJlcyI6WyJEUlVQIiwiRTJQIiwiRTJXIl0sInZjIjoiNTE0M2I5ZmEifQ.iP_66prTzF5Q083D1GBG_O5GfhnhKmlCWj9wvGWabxkrrTDxbK_TrFWSFHnk5BH21IHnSMP8znOhcvHkz88oJQ',
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
