<template>
  <div>
    <h1>{{ titulo }}</h1>
    <ul>
      <li v-for="foto of fotos">
        <img :src="foto.url" :alt="foto.titulo">
      </li>      
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      titulo: 'Test',
      fotos: [
        {
          url: 'https://meusanimais.com.br/wp-content/uploads/2015/03/4-gato-enfermo.jpg',
          titulo: 'gato-fofo'
        },
        {
          url: 'https://meusanimais.com.br/wp-content/uploads/2015/03/4-gato-enfermo.jpg',
          titulo: 'gato-fofo'
        }
      ]
    }
  }
}
</script>

<style lang="scss">

</style>
