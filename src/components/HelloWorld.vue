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
        label="Selecione a cidade:"
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
        label="Selecione o serviço que deseja realizar:"
        required
        outlined
        density="comfortable"
      ></v-select>

      <v-select
      v-model="selecao3"
      :disabled="!selecao2"
      :items="selecao2 ? locais[selecao1][selecao2] : []"
      label="Selecione o posto ideal para você:"
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

      <v-btn variant="tonal" style="margin-left: 20px; margin-right: 40px;" @click="envioEmail" >Enviar por e-mail</v-btn>
      <v-btn variant="tonal" @click="envioTel" >Enviar por telefone</v-btn>
    </v-card>
  </v-container>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  data() {
    return {
      selecao1:'',
      selecao2:'',
      selecao3:'',
      locais:{
        'Cidade 1':{
        'Serviço 1': ['Posto A', 'Posto D', 'Posto M', 'Posto J'],
        'Serviço 2': ['Posto A', 'Posto B', 'Posto C'],
      },
      'Cidade 2':{
        'Serviço 3': ['Posto X', 'Posto Y', 'Posto Z'],
        'Serviço 4': ['Posto H', 'Posto G', 'Posto L', 'Posto J'],
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
  },

  methods:{
    envioEmail() {
  Swal.fire({
    title: "Digite o seu e-mail:",
    input: "email",
    inputAttributes: {
      autocapitalize: "off"
    },
    showCancelButton: true,
    cancelButtonText: "Cancelar",
    confirmButtonText: "Enviar e-mail"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Confirme se esse é mesmo o seu e-mail:",
        text: result.value,
        showCancelButton: true,
        showLoaderOnConfirm: true,
        cancelButtonText: "Cancelar",
        confirmButtonText: "Confirmo"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            icon: "success",
            title: "Seu e-mail foi enviado com sucesso!",
            showConfirmButton: false,
            timer: 1500
          });
        }
      });
    }
  });
},

envioTel() {
  Swal.fire({
    title: "Digite o seu número de telefone:",
    input: "tel",
    inputAttributes: {
      autocapitalize: "off"
    },
    showCancelButton: true,
    cancelButtonText: "Cancelar",
    confirmButtonText: "Enviar SMS"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Confirme se esse é mesmo o seu número:",
        text: result.value,
        showCancelButton: true,
        showLoaderOnConfirm: true,
        cancelButtonText: "Cancelar",
        confirmButtonText: "Confirmo"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            icon: "success",
            title: "Seu SMS foi enviado com sucesso!",
            showConfirmButton: false,
            timer: 1500
          });
        }
      });
    }
  });
},





  }

}
</script>