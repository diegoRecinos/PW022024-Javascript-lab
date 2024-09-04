
const requestValue = (input) => {
    let value;

    value = prompt(`Introduce el valor de ${input}:`);  //requesting a value from the user by prompt
        
        if (value !== null && value.trim() !== "") {        //checks if the value isnt null or whitespaces
            return value;
        } else {
            alert('Por favor, ingrese un valor valido');
        }

};


const main = () => {
    // Requesting values and saving their value in a variable that can change
    let a = requestValue('a');
    let b = requestValue('b');

    [a, b] = [b, a];  // Swapping the values using array destructuring

    alert(`Despues del intercambio: a = ${a}, b = ${b}`);
};

main();
