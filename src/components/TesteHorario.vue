<template>

  <v-container fluid max-width="900px" class="mt-6">
    <div>
      <v-card elevation="4" outlined class="card">
        <div class="cabecalho-form">
          <h1 class="titulo-form">Selecione a Data do Evento</h1>
          <p class="subtitulo">
            Selecione abaixo a data do evento.
          </p>
        </div>

        <v-card-text class="pa-4">
          <!-- Toolbar de navegação -->
          <v-sheet class="mb-4">
            <v-toolbar flat>
              <v-btn
                class="me-4"
                color="primary"
                variant="outlined"
                @click="setToday"
              >
                Hoje
              </v-btn>
              <v-btn
                color="grey-darken-2"
                size="small"
                variant="text"
                icon
                @click="prev"
              >
                <v-icon size="small">mdi-chevron-left</v-icon>
              </v-btn>
              <v-btn
                color="grey-darken-2"
                size="small"
                variant="text"
                icon
                @click="next"
              >
                <v-icon size="small">mdi-chevron-right</v-icon>
              </v-btn>
              <v-toolbar-title v-if="calendar">
                {{ calendar.title }}
              </v-toolbar-title>
              <v-spacer></v-spacer>
              <v-menu location="bottom end">
                <template v-slot:activator="{ props }">
                  <v-btn
                    color="grey-darken-2"
                    variant="outlined"
                    v-bind="props"
                  >
                    <span>{{ typeToLabel[type] }}</span>
                    <v-icon end>mdi-menu-down</v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item @click="type = 'day'">
                    <v-list-item-title>Dia</v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="type = 'week'">
                    <v-list-item-title>Semana</v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="type = 'month'">
                    <v-list-item-title>Mês</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-toolbar>
          </v-sheet>

          <!-- Calendário -->
          <v-sheet height="600">
            <v-calendar
              ref="calendar"
              v-model="focus"
              :events="events"
              :type="type"
              color="primary"
              @click:date="selecionarData"
            ></v-calendar>
          </v-sheet>

          <!-- Botão de avançar -->
          <v-card-actions class="pa-0 pt-4">
            <v-row justify="end">
              <v-btn
                color="primary"
                variant="flat"
                class="font-weight-bold"
                :disabled="!dataSelecionada"
                @click="avancar"
              >
                Próximo
              </v-btn>
            </v-row>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </div>
  </v-container>

 



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
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'


const calendar = ref()

const typeToLabel = {
  month: 'Mês',
  week: 'Semana',
  day: 'Dia',
}

const focus = ref('')
const type = ref('month')
const events = ref([]) // Calendário em branco - sem eventos
const dataSelecionada = ref(null)

onMounted(() => {
  calendar.value?.checkChange()
})

function selecionarData({ date }) {
  dataSelecionada.value = date
  console.log('Data selecionada:', date)
}

function setToday() {
  focus.value = ''
}

function prev() {
  calendar.value.prev()
}

function next() {
  calendar.value.next()
}

function avancar() {
  console.log('Avançando com a data:', dataSelecionada.value)
  // router.push({ name: "proximaPagina" })
}








const time = ref(null)
const showMenu = ref(false)
const showDialog = ref(false)
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