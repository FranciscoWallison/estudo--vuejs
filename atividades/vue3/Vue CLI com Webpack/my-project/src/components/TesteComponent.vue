<template>
    <div>
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

<style scope>
p{color: red;}
</style>
