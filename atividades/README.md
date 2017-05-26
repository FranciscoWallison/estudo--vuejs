####Soma
```
{{ 100 + 10}} 

print->  110

```

####Concatenar
```
{{ "vue" + ".js"}} 

print->  vue.js

```

####Ternario
```
{{  1 > 2 ? "1" ? "2"}}

print->2
```


####Entendendo data-binding da vue.js
Class
```
	el: "#app",
```

Atributos
```
	data: { ... }
```

Metodos
```
	computed: { ... }
	methods: { ... }
```
Verificando valores do objeto
```
console.log(app);
console.log(app.title);
console.log(app.bills);
console.log(app.showView(1));
console.log(app.status);

//errado
app.idade = 18;
```
Trabanhando com filtros 
```
https://github.com/freearhey/vue2-filters
```