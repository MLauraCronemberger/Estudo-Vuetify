<template>
  <v-container style="margin-top: 50px;">
    <v-card class="mt-6">
      <v-card-title>
        <h1>Teste Mockar Ideia Agendamento</h1>
      </v-card-title>
      <form>
        <v-text-field           
          label="Name"
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
        label="Selecione uma fruta"
        required
        outlined
        density="comfortable"
        :items="items"
      ></v-select>

      <v-select
        label="Selecione uma fruta"
        required
        outlined
        density="comfortable"
        :items="items"
      ></v-select>

      <v-select
        label="Selecione uma fruta"
        required
        outlined
        density="comfortable"
        :items="items"
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
            prepend-icon="mdi-calendar"
            readonly
            label="Selecione a data"
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