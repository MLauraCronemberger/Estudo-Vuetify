<template>
  <v-container fluid max-width="600px" class="mt-6">
    <div>
      <v-card elevation="4" outlined class="card">
        <div class="cabecalho-form">
          <h1 class="titulo-form">Selecione o Horário de Início e Fim</h1>
          <p class="subtitulo">
            Informe os horários de início e término do evento.
          </p>
        </div>
        <v-card-text style="width: 100%">
          <v-form ref="formEvento" lazy-validation>
            <v-container fluid>
              <!-- Campos de horário lado a lado -->
              <v-row>
                <v-col cols="12" md="6">
                  <label class="label-horario">Horário de Início</label>
                  <v-text-field
                    v-model="horaInicio"
                    variant="outlined"
                    density="compact"
                    readonly
                    placeholder="Selecione"
                    @click="abrirMenuInicio"
                  >
                    <v-menu
                      v-model="menuInicio"
                      :close-on-content-click="false"
                      activator="parent"
                      location="bottom"
                    >
                      <v-card>
                        <v-time-picker
                          v-if="menuInicio"
                          v-model="horaInicio"
                          format="24hr"
                          :allowed-minutes="allowedMinutes"
                        ></v-time-picker>
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn
                            color="primary"
                            variant="text"
                            @click="menuInicio = false"
                          >
                            OK
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-menu>
                  </v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                  <label class="label-horario">Horário de Fim</label>
                  <v-text-field
                    v-model="horaFim"
                    variant="outlined"
                    density="compact"
                    readonly
                    placeholder="Selecione"
                    @click="abrirMenuFim"
                  >
                    <v-menu
                      v-model="menuFim"
                      :close-on-content-click="false"
                      activator="parent"
                      location="bottom"
                    >
                      <v-card>
                        <v-time-picker
                          v-if="menuFim"
                          v-model="horaFim"
                          format="24hr"
                          :allowed-minutes="allowedMinutes"
                        ></v-time-picker>
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn
                            color="primary"
                            variant="text"
                            @click="menuFim = false"
                          >
                            OK
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-menu>
                  </v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-form>

          <v-card-actions class="pa-6 pt-1">
            <v-row justify="end">
              <v-btn
                color="primary"
                type="button"
                variant="flat"
                class="font-weight-bold"
                @click="irParaInfosEvento"
              >
                Próximo
              </v-btn>
            </v-row>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </div>
  </v-container>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref } from 'vue'

const horaInicio = ref(null)
const horaFim = ref(null)
const menuInicio = ref(false)
const menuFim = ref(false)

const router = useRouter();

// Função para permitir apenas minutos de 0 a 59 (ou pode customizar)
const allowedMinutes = (m) => m % 5 === 0 // Permite de 5 em 5 minutos

function abrirMenuInicio() {
  menuInicio.value = true
}

function abrirMenuFim() {
  menuFim.value = true
}

function irParaInfosEvento() {
  console.log('Hora Início:', horaInicio.value)
  console.log('Hora Fim:', horaFim.value)
  router.push({ name: "infosEvento" });
}
</script>

<style scoped>
.cabecalho-form {
  padding-bottom: 10px;
  background-color: #005197;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  font-family: Calibri;
}

.titulo-form {
  padding-top: 10px;
  margin-left: 20px;
  color: white;
  font-size: 25px;
}

.subtitulo {
  margin-left: 20px;
  margin-right: 20px;
  color: white;
}

.card {
  border-radius: 5px;
}

.label-horario {
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  color: #666;
  font-weight: 500;
}
</style>