<template>
  <div>
    <h2>Vue Counter</h2>
    <p v-text="zeno"></p>
    <!-- <h1 class="counter" v-text="$store.state.storeCounter"></h1> -->
    <h1 class="counter" >{{storeCounter}}</h1>
    <button  class="btn" @click="handleDecClick">-</button>
    <input type="number" name="" id="" v-model="value" />
    <!-- <button @click="addToCounter(value)">+</button> -->
    <button  class="btn" @click="handleIncClick">+</button>
    <div><button class="btnr" @click="addRandomNumber">Add Random Number</button></div>
  </div>
</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex'
export default {
  name: "Counter",
  props: {
    zeno: String,
    incCC: Function,
    decCC: Function
  },
  data:()=>{
      return {
          value:1,
          counter:0,
        //   componentCounter:$store.state.storeCounter
      }
  },
  methods:{
      ...mapMutations(["addToCounter","subtractToCounter"]),
      ...mapActions(["addRandomNumber"]),
      handleIncClick(){
          this.incCC()
          this.logg()
        this.addToCounter(this.stringToNumber)

      },
      logg(){console.log("Hello")},
      handleDecClick(){
          this.decCC()
          this.logg()
          this.subtractToCounter(this.stringToNumber)
      }
  },
  computed:{
  ...mapState(["storeCounter"]),
  doubleValue(){
      return this.value*2
  },
  stringToNumber(){
      return Number.parseInt(this.value)
  }
  }
};
</script>

<style scoped>
.counter {
  font-size: 5.5rem;
  padding: 0;
  margin: 0;
}
.btn{
    border-radius: 50px;
    /* padding: 1em; */
    width: 2rem;
    height: 2rem;
    font-size: 1.5rem;
    padding: auto;
    cursor:pointer;
    /* display: flex; */
    /* justify-content: center;
    align-items: center; */
}
.btnr{
    margin: 20px auto;
    background: rgb(48, 112, 48);
    color:darkred;
    border-radius: 10px;
    padding: 1em 3em;
    font-size:1.2rem;
}
input[type=number]{
    background: rgb(145, 211, 145);
    margin: 1px 20px;
    border-radius: 20px;
    height: 3rem;
    font-size: 1.8rem;
    text-align: center;
    color: darkgreen;
}
</style>