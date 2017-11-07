<template>
  <div>

  <h1 class="centralizado">{{ titulo }}</h1>

	<input type="search" class="filtro" @input="filtro = $event.target.value" placeholder="filtre pelo título da foto">

  <ul class="lista-fotos">
    <li v-for="foto in fotosComFiltro" class="lista-fotos-item">
      <my-panel :title="foto.titulo">
				<image-responsive v-my-transform:scale.animate="1.2" :url="foto.url" :titulo="foto.titulo"/>
        <my-button 
          type="button" 
          label="Remover" 
          @buttonActivate="remove(foto)"
          :confirmation="true"
          styleButton="alert"
          />
      </my-panel>
    </li>
  </ul>

  </div>
</template>

<script>

// importações 
import Panel from '../shared/panel/Panel.vue';
import ImageResponsive from '../shared/image-responsive/ImageResponsive.vue';
import Button from '../shared/button/Button.vue';


export default {
   components: {

    'my-panel': Panel,
    'image-responsive': ImageResponsive,
    'my-button': Button,
  },
  data(){
    return {
      titulo: 'Test',
      fotos: [],
      filtro: ''
    }
  },
  created(){
    this.$http.get('http://localhost:3000/v1/fotos')
      .then(res => res.json())
      .then(fotos => this.fotos = fotos, err => console.log(err));
  },
  computed: {
	  fotosComFiltro(){
		  if(this.filtro){
			  let exp = new RegExp(this.filtro.trim(), 'i');
			  return this.fotos.filter(foto => exp.test(foto.titulo));
		  }else {
			  return this.fotos
		  }
	  }
  },
  methods: {
    remove(foto){
      alert('removendo a foto ' + foto.titulo);

    }
  }
}

</script>

<style lang="scss">
	.centralizado {
		text-align: center;
	}

	.lista-fotos {
		list-style: none;
	}

	.lista-fotos .lista-fotos-item {
		display: inline-block;
	}	
	.filtro {
		display: block;
		width: 100%;
	}
</style>
