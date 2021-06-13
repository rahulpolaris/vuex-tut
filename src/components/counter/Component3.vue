<template>
<div>
  <Counter :zeno="zeno" :incCC="incCC" :decCC="decCC"/>
 <button @click="incCC" @wheel="decCC">parent component to counter {{componentCounter}} {{doubleCCval}}</button>
 <History/>
</div>
</template>

<script>
import Counter from "./Counter.vue";
import History from "../History.vue"
export default {
  name: "Component3",
  components: { Counter,History },
  props: { zeno:String },
  data(){
    return {
      componentCounter :0
    }
    
  },
  methods:{
      incCC(){
        this.componentCounter++
      },
      decCC(){
        this.componentCounter--
      }
    },
    computed:{
      doubleCCval(){
        return Math.pow(this.componentCounter,2)
      }
    }
};
</script>

<style>
</style>