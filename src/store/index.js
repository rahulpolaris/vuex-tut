import { createStore } from 'vuex'

export default createStore({
  state: ()=> {
    return {
      storeCounter:0,
      history:[0]
    }
  },
  mutations: {
    addToCounter(state,payload){
      state.history.push(state.storeCounter+payload)
      state.storeCounter= state.storeCounter+payload
      console.log("store add counter",typeof(state.storeCounter),typeof(payload))
      

    },
    subtractToCounter(state,payload){
      state.history.push(state.storeCounter+payload)
      state.storeCounter= state.storeCounter-payload
      console.log("store add counter",typeof(state.storeCounter),typeof(payload))


    }
  },
  actions: {
    async addRandomNumber(context){
      let data = await fetch('https://www.random.org/integers/?num=1&min=-1000&max=1000&col=1&base=10&format=plain&rnd=new')
     let d =  await data.text()
     const integere = parseInt(d.substr(0,d.search("\\n")))
      console.log(data,d,d.split('\\'),d.search("\\n"),d.substr(0,d.search("\\n")),parseInt(d.substr(0,d.search("\\n"))))
      context.commit("addToCounter",integere)
    }
  },
  getters:{
    activeIndexes: state => payload => {
      let indexes =[]
      state.history.forEach((number,index)=>{
        if(number===payload)
        {
          indexes.push(index)
        }
      }
      )
      console.log(indexes)
      return indexes
    }
  },
  modules: {
  }
})
