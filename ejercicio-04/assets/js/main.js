const createCounter = () => {
    let count = 0;              //initialize the counter
    return () => {
        return count++;         //returns a function that returns a counter +1 for the variable 
    };
};


const showCounter = (counterFunction, limit) => {   //Displays the counter value in alerts from 0 to limit
    
    for (let i = 0; i <= limit; i++) {
        alert(counterFunction()); // we iterate over the alert with its dynamic input to show a different number everytime
    }

};


const requestNumber = () => {
    let num;
    
     num = prompt('Ingrese un numero entero no negativo hasta el cual desee contar');
        
    if (!isNaN(num) && num !== null && num !== '' && Number(num) >= 0) {  //checks if the number is an positive integer and not a string 
        return Number(num);
    } else if (num == 'fin') {
        return null;
    } else {
        alert('Por favor, ingrese un numero valido.');
    }
    
};

const main = () => {

    const limit = requestNumber();  //saves the propmt input into a varible that will not change

    if (limit !== null) {                   //if the input isnt null we can start and create a counter
        const counter = createCounter();    //now the function showcounter has the dynamic alert for it to 
        showCounter(counter, limit);        //display the number the counter is currently on, and we need to 
                                            //pass the limit for it to stop
    } else {
        alert('Proceso terminado.');
    }
};


main();  //execute program
