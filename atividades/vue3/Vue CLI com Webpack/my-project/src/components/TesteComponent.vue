<template>
    <div>
        <p>Teste de Component</p>
        <span>{{ msg }}</span>
    </div>
</template>

<script>
export default {
    data () {
        return {
            msg: 'Curso de Vue js' 
        }
    }
    
}
</script>

<style scope>
p{color: red;}
</style>
