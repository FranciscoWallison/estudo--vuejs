var app = new Vue({
	el: "#app",
	data: {
		title: "Contas a pagar",
		menus: [
			{id:0, name:"Listar contas"},
			{id:1, name:"Criar contas"}
		],
		bills: [
			{date_due: '20/08/2017', name: 'Conta de luz', value: 25.99, done:1},
			{date_due: '21/08/2017', name: 'Conta de água', value: 30.99, done:0},
			{date_due: '22/08/2017', name: 'Conta de telefone', value: 60.99, done:0},
			{date_due: '23/08/2017', name: 'Supermecado', value: 110.50, done:1},
			{date_due: '20/08/2017', name: 'Cartão de crédito', value: 1500, done:0},
			{date_due: '25/08/2017', name: 'Empréstimo', value: 120.00, done:0},
			{date_due: '26/08/2017', name: 'Gasolina', value: 120, done:1}
		]
	},
	computed: {
		//Valida se a conta foi para
		status: function(){
			var caunt = 0;
			for(var i in this.bills){
				
				if(!this.bills[i].done){
					caunt++;
				}
			}
			return !caunt ? "Nenhuma conta a pagar" : "Existem "+ caunt +" contas a serem  pagas!";
		}//end contas a serem pagas
	},
	methods: {
		showView: function($number){
			console.log( $number);
		}
	}
	
})