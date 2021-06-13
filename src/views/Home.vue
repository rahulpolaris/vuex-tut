<template>
  <div class="home">
    <!-- <h1>hello world and welcome {{this.someStringData}}</h1> -->
    <Component1/>
  </div>
</template>

<script>
import Component1 from '../components/counter/Component1.vue'
export default {
  name: 'Home',
  components: { Component1 },
  data: () => {
    return {
      someStringData: 'Rahul'
    }
  }
}
</script>
