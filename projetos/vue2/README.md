# Estudos Vue.js


## Build Setup

# install dependencies

npm install vue-cli@2.7.0 -g

# new project
vue init webpack-simple blog

# O módulo VueResource
npm install vue-resource@1.0.3 --save
```
    O vue-resource é um plugin do Vue.js para 
    fazer requisições web e 
    gerenciar respostas usando 
    XMLHttpRequest ou JSONP
```

# O módulo VueRouter
npm install vue-router@2.1.1 --save
```
    Um componente essencial de uma SPA é o 
    Router que é responsável por mostrar/esconder um ou 
    mais elementos dependendo da URL que se acessa no browser.
```

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# Anotações 
```
    Babel é um tranpiler
    Webpack é um module bundler

    Imterpolação é um associação unidirecional
        {{ msg }} 
```
# Diretivas
```
   Diretivas permitem isolar um código que pode ser aplicado em mais de um componente.

É através de binding.value que temos acesso ao valor passado para a diretiva no componente que a utiliza.
É através de binding.modifiers que temos acesso aos modificadores utilizadas pela diretiva. Exemplo, binding.modifiers.NomeDoModificador.
O parâmetro el aponta para o elemento do DOM no qual a diretiva foi associada.

Uma diretiva pode suportar zero ou mais argumentos e eles servem para ditar a lógica principal da diretiva que deve ser executada. Já os modificadores podem ser usados pelos argumentos para que ativem ou não determinada lógica.
```

> ### 	[Lifecycle Hooks](https://br.vuejs.org/v2/api/index.html#Opcoes-Ciclo-de-Vida)
``` 
 Um exemplo de hook é a função created
```
