//Ejercicios 7,8,4
//const countVotes = (/*recibe*/) => {
    //Code
//}

//const showResults = (/*recibe*/) => {
    //Code
//}



//hecho
const countVotes = (votos) => {

    let resultado = [];

    votos.array.forEach(voto => {
        resultado[voto.candidate]=(resultado[voto.candidate]||0) + 1;
    });

    return resultado;
}

const showResults = (resultado) => {
    alert("Resultados de la votacion ");
    for(let candidate in resultado){
        alert(`${candidate}:${resultado[candidate]} votos`);
    }
}

const main = () => {
    
    let votos = [
        { candidate: 'Alice' },
        { candidate: 'Bob' },
        { candidate: 'Alice' },
        { candidate: 'Alice' },
        { candidate: 'Bob' }
    ];
    
    const resultado = countVotes(votos);
    showResults(resultado);


}

main();


