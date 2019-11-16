<template>
  <div id="app">
    
    <router-link to="/">Home</router-link>
    <router-link to="/produtos">produtos</router-link>
    <router-link to="/tarefas">tarefas</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
</style>
