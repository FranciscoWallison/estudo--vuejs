var app = new Vue({
	el: "#app",
	data: {
		title: "Contas a pagar",
		bills: [
			{date_due: '20/08/2017', name: 'Conta de luz', value: 25.99},
			{date_due: '21/08/2017', name: 'Conta de água', value: 30.99},
			{date_due: '22/08/2017', name: 'Conta de telefone', value: 60.99},
			{date_due: '23/08/2017', name: 'Supermecado', value: 110.50},
			{date_due: '20/08/2017', name: 'Cartão de crédito', value: 1500},
			{date_due: '25/08/2017', name: 'Empréstimo', value: 120.00},
			{date_due: '26/08/2017', name: 'Gasolina', value: 120}
		]
		
	}
})