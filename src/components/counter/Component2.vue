<template>
    <Component3 :zeno="zeno"/>
</template>

<script>
import Component3 from './Component3'
export default {
    name:'Component2',
    components: { Component3 },
    props:{zeno:String}
}</script>

<style>

</style>