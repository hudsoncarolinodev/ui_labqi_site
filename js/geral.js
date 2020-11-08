
	
	function sacar(valor){
	
		let notas =     [100,50,20,10,5,2];
		let somaNotas = [0,  0,  0,0, 0,0]
		for(let  i = 0; i < notas.length; i++){
			if( valor >= notas[i] ){

			
				
				somaNotas[i] = somaNotas[i]+1
				valor = valor - notas[i]
				

			}
			
		}
		console.log(somaNotas);
		
	}
	
sacar(25)

