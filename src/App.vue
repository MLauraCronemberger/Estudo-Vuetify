<template>
  <v-app>
    <HelloWorld></HelloWorld>
    <HorarioPicker></HorarioPicker>
    <QuillComponent/>
  </v-app>
</template>

<script>

import HelloWorld from "./components/HelloWorld.vue";
import HorarioPicker from "./components/HorarioPicker.vue";
import QuillComponent from "./components/QuillComponent.vue";

export default{
  components:{
    HelloWorld,
    HorarioPicker,
    QuillComponent
  }


}
  //
</script>
