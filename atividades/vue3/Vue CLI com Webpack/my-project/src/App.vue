<template>
  <div id="app" class="comp">
    <!-- <img src="./assets/logo.png"> -->
    <h1>{{ msg }}</h1>
    <teste-component></teste-component>
    <form-component></form-component>

    <tasks-component></tasks-component>  
  </div>
</template>

<script>
import TesteComponent from './components/TesteComponent'
import FormComponent from './components/FormComponent'
import TasksComponent from './components/TasksComponent'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Aprendendo VUE.js'
    }
  },
  components: {
    TesteComponent,
    FormComponent,
    TasksComponent
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.comp{border: 1px solid blue; margin: 5px; padding: 5px; }

</style>
