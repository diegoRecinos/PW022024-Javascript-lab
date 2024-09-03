//crear funcion que devolvera    otra funcion que
// incrementa  y retorna el valor de un contador interno

const createCounter = () => {
    

    
    //Code
}

const showCounter = (/*recibe*/) => {
    //Code
}

const requestNumber=()=>{
    let input = prompt("Ingrese un numero entero positivo hasta el cual desee contar");
    let number = `Numero: ${input}`;


//existe isNaN que valida cuando es un string un ejemplo seria así:

    document.getElementById('btn').addEventListener('click', function(){
  	while(true){
  	let num = prompt('porfavor ingrese un numero');


/*
!isNaN(num) = si es diferente de un string osea true
hasta que sea insertado un numero terminará el ciclo o hasta que se escriba fin
*/
  	if(!isNaN(num) && num != null && num != "" && num >= 0){
  		alert('numero valido');
    	break;
  	}else if(num == 'fin'){
  		break;
  	}else{
  		alert('no es numero');
    	continue;
  	}
  }
 
  });
}

const main = () => {
   requestNumber();
}

main();
