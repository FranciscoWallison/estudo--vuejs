<template>
    <div class="comp">
        <p>Teste de Component</p>
        <span>{{ msg }}</span>
        <form-component></form-component>
    </div>
</template>

<script>
import FormComponent from './FormComponent'


export default {
    data () {
        return {
            msg: 'Curso de Vue js' 
        }
    },
  components: {   
    FormComponent
  }
    
}
</script>

<style scoped>
p{color: red;}
.comp{ border: 1px solid green; margin: 5px; padding: 5px; }
</style>
