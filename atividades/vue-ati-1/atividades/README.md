## Exemplos obtidos nos cursos 

#### Soma
```
{{ 100 + 10}} 

print->  110

```

#### Concatenar
```
{{ "vue" + ".js"}} 

print->  vue.js
```

#### Ternario
```
{{  1 > 2 ? "1" ? "2"}}

print->2
```


#### Entendendo data-binding da vue.js
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

#### Manipulando estruturas básicas - Atividade

_________________________________________________________________________
Manipulando estruturas básicas

Nesta primeira fase do módulo de Vue.js, você deverá implementar a listagem de contas a pagar, bem como
o cadastro e edição mostrados no módulo. Além disto, você deverá fazer uma exclusão de contas e permitir
que o usuário consiga dar baixa ou não em uma conta.
 

Requisitos:

A exclusão deverá mostrar uma caixa de diálogo javascript para permitir ao usuário a escolha ou não da remoção.
A baixa ou não de uma conta, poderá ser implementada com dois botões (um para dar baixa, outro para colocar no status de não paga) ou com um checkbox (lembrando que com checkbox, quando utilizamos um v-model temos que trabalhar com dados booleanos 0 ou 1, portanto você teria que mudar o campo done totalmente para booleano).
Você deverá criar um filtro para mostrar o status geral das contas com cores:

Texto verde com "Nenhuma conta a pagar".
Texto vermelho com "Existem X contas a serem pagas".
Texto cinza "Nenhuma conta cadastrada".
Dica:

 Para remover algo de um array você pode usar o método splice()
 Para o filtro na cor cinza, você pode receber um valor "false" para demonstrar que não existe nenhuma conta cadastrada.
Boa sorte

