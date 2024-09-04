
const requestQuantity = () => {
    let quantity;

        quantity = prompt('Cuantos numeros de la secuencia de Fibonacci deseas generar?');  
        
        if (!isNaN(quantity) && quantity !== null && quantity.trim() !== "" && Number(quantity) >= 0) { //checks if the quantity introduced by the user is
            return Number(quantity);                                                                    //a positive integer and not a a string or an input equal to nothing
        } else {
            alert('Por favor ingrese un nnmero entero positivo');
        }
    
};


const fibonacciCalculate = (n) => {
    if (n === 0) return [];     // n numbers of fibonacci = 0 returns nothing
    if (n === 1) return [0];    // 1 number of fibonacci sequence returns 0 as an array
    let sequence = [0, 1];      //declaring array variable for fibonacci sequence

    for (let i = 2; i < n; i++) {                              //iterates over the sequence 
        sequence.push(sequence[i - 1] + sequence[i - 2]);      //n times specified by the user
    }
    return sequence;
};


const main = () => {
    const quantity = requestQuantity(); 
    if (quantity == 0) {
        alert('No se generaron numeros de Fibonacci.');
    } else {
        const fibonacciSequence = fibonacciCalculate(quantity);                                         //in the main function you used both functions, one to generate a prompt 
        alert(`Los primeros ${quantity} numeros de Fibonacci son: ${ fibonacciSequence.join(', ')}`);   //and another for fibonacci, itll go trough the for loop of n inputs
    }                                                                                                   //and it will display an alert using the syntax ${variable} for the sequence of n numbers
};


main();
