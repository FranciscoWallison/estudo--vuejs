var app = new Vue({
	el: "#app",
	data: {
		test: '',
		title: "Contas a pagar",
		menus: [
			{id:0, name:"Listar contas"},
			{id:1, name:"Criar contas"}
		],
		activedView: 1,
		formType: 'insert',
		bill: {
			date_due: '',
			name: '',
			value: '',
			done:0
		},
		names: [
			'Conta de luz',
			'Conta de água',
			'Conta de telefone',
			'Supermecado',
			'Cartão de crédito',
			'Empréstimo',
			'Gasolina',
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
		showView: function(id){
			this.activedView = id;
			if(id == 1){
				this.formType = 'insert';
			}
		},
		//add nova conta
		submit: function(){
			if(this.formType == 'insert'){
				this.bills.push(this.bill);
			};
			//limpando dados do form e criando um nobo objeto
			this.bill = {
				date_due: '',
				name: '',
				value: '',
				done: 0
			};
			this.activedView = 0;
		},
		loadBill: function(bill){
			this.bill = bill;
			this.activedView = 1;
			this.formType = 'update';
		}
	},
	// Filtros
  	filters: {
  		doneLabel: function (value) {
	    	if(value == 0){
				return "Não Paga";
			}else{
				return "Paga";
			}
    	},
    	currency: function (value, currency, decimals) {
		  var digitsRE = /(\d{3})(?=\d)/g
		  value = parseFloat(value)
		  if (!isFinite(value) || (!value && value !== 0)) return ''
		  currency = currency != null ? currency : '$'
		  decimals = decimals != null ? decimals : 2
		  var stringified = Math.abs(value).toFixed(decimals)
		  var _int = decimals
		    ? stringified.slice(0, -1 - decimals)
		    : stringified
		  var i = _int.length % 3
		  var head = i > 0
		    ? (_int.slice(0, i) + (_int.length > 3 ? ',' : ''))
		    : ''
		  var _float = decimals
		    ? stringified.slice(-1 - decimals)
		    : ''
		  var sign = value < 0 ? '-' : ''
		  return sign + currency + head +
		    _int.slice(i).replace(digitsRE, '$1,') +
		    _float
		}
  	}
});

/*
app.$watch('test', function(novoValor, velhoValor){
	console.log('Velho valor: '+ velhoValor + ' novo valor: '+ novoValor);
});*/
