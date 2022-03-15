function insert (num) 
{
	var numero = document.getElementById('display').innerHTML;	
	document.getElementById('display').innerHTML = numero + num;
} 

function clean()
{
	document.getElementById('display').innerHTML = "";
}

function calcular() {
	var resultado = document.getElementById('display').innerHTML;
	if (resultado){
		document.getElementById('display').innerHTML = eval(resultado);
	}

	else{
		document.getElementById('display').innerHTML = "";
	}
}
