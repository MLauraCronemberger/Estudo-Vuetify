<template>
  <v-container style="margin-top: 50px;">
    <v-card class="mt-6">
      <v-card-title>
        <h1>Teste Mockar Ideia Agendamento</h1>
      </v-card-title>
      <form>
        <v-text-field           
          label="Nome"
          required
          outlined
        ></v-text-field>
        <v-text-field           
          label="E-mail"
          required
          outlined
        ></v-text-field>
      </form>

      <v-select
        v-model="selecao1"
        :items="Object.keys(locais)"
        @update:modelValue="selecao2 = ''; selecao3 = ''"
        label="Selecione um continente"
        required
        outlined
        density="comfortable"
      ></v-select>

      <!-- esse !selecao1, o operador ! é o operador lógico NOT -->
       <!-- agora esse ? : é um operador ternário que tem forma: condição ? valor_se_verdadeiro : valor_se_falso -->

      <v-select
        :disabled="!selecao1"  
      v-model="selecao2"
      :items="selecao1 ? Object.keys(locais[selecao1]) : []"
      @update:modelValu="selecao3=''"
        label="Selecione um sub"
        required
        outlined
        density="comfortable"
      ></v-select>

      <v-select
      v-model="selecao3"
      :disabled="!selecao2"
      :items="selecao2 ? locais[selecao1][selecao2] : []"
      label="Selecione um sub do sub"
      required
      outlined
      density="comfortable"
      ></v-select>

      <v-menu
        v-model="showDatePicker"
        :close-on-content-click="false"
        transition="scale-transition"
        min-width="290"
      >
        <template v-slot:activator="{ props }">
          <v-text-field
            v-bind="props"
            outlined
            prepend-inner-icon="mdi-calendar"
            readonly
            label="Selecione uma data"
            v-model="formatData"
          ></v-text-field>
        </template>
        <v-date-picker
        v-model="date">
      </v-date-picker>
      </v-menu>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      selecao1:'',
      selecao2:'',
      selecao3:'',
      locais:{
        'Brasil':{
        'Ceará': ['Fortaleza', 'Canoa Quebrada', 'Jericoacoara', 'Guaramiranga'],
        'Piauí': ['Teresina', 'Parnaíba', 'Floriano', 'Água Branca', 'Itaueira'],
        'Maranhão': ['São Luís', 'Bacabal', 'Imperatriz', 'Barreirinhas'],
      },
      'Europa':{
        'Itália': ['Pizza', 'Macarrão', 'Vinho', 'Massas em geral'],
        'França': ['Croissant', 'Fondue', 'Baguette', 'Macaron'],
      }
      },
      items: ['Banana', 'Maçã', 'Laranja'],
      showDatePicker: false,
      date:'',
    }
  },
  computed:{
    formatData(){
      if (!this.date) return "";
      const dateObj = new Date(this.date);
      return dateObj.toLocaleDateString('pt-BR');
    }
  }
}
</script>