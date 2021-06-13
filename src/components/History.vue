<template>
  <div>
    <h1>History</h1>
    <div class="historyGrid">
      <h4 v-for="(number, index) in history" :key="index">
        <!-- <template> -->
        <span v-if="activeIndexes(parseInt(searchVal)).includes(index)"
         class="bold" ><span class="spgr">[{{ index }}]</span>{{ number }}</span
        >
        <span v-else 
          ><span class="spgr">[{{ index }}]</span>{{ number }}</span
        >
        <!-- <span >{{number}}</span> -->
        <!-- </template> -->
      </h4>
    </div>
    <input
      type="number"
      name=""
      id=""
      placeholder="enter number to search"
      v-model="searchVal"
    />
    <div>{{ activeIndexes(parseInt(searchVal)) }}</div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "History",
  data: () => {
    return {
      searchVal: 0,
    };
  },
  computed: {
    ...mapState(["history"]),
    ...mapGetters(["activeIndexes"]),
    // indexes:this.activeIndexes(this.searchVal)
  },
};
</script>

<style scoped>
.historyGrid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  max-width: 600px;
  margin: 20px auto;
}
input {
  border: hsl(180, 100%, 50%) 3px solid;
  background-color: darkorange;
  width: 400px;
  height: 50px;
  text-align: center;
  font-size: 1.4rem;
}
.bold {
  color: red;
  font-size: 1.5rem;
}
.spgr {
  color: green;
}
</style>