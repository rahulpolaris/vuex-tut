<template>
    <Component2 :zeno="zeno"/>
</template>

<script>
import Component2 from './Component2'
export default {
    name:'Component1',
    components: { Component2 },
    data:()=>{
        return {
            zeno:"Zeno god"
        }
    }
}</script>

<style>

</style>