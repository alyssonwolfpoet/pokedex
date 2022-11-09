/* anotaçoes de versoes do fetch*/

console.log("Sucesso!!");

const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;

/*==================================*/

fetch(url)
    .then(function (response) {
        console.log(response)
    })
    .catch(function (erro) {
        console.error(erro);
    })
    .finally(function () {
        console.log('Requisição concluida!')
    })

/*==================================*/
fetch(url)
    .then(function (response) {
        response
            .json()
            .then(function (responseBody) {
                console.log(responseBody)

            })
        return response.json()
    })
    .catch(function (erro) {
        console.error(erro);
    })
    .finally(function () {
        console.log('Requisição concluida!')
    })

/*==================================*/
fetch(url)
    .then(function (response) { 
        return response.json()
    })
    .then(function (jsonBody) {
        console.log(jsonBody)
    })
    .catch(function (erro) {
        console.error(erro);
    })
    .finally(function () {
        console.log('Requisição concluida!')
    })

/*==================================*/
fetch(url)
    .then((response) => { 
        return response.json()
    })
    .then(function (jsonBody) {
        console.log(jsonBody)
    })
    .catch(function (erro) {
        console.error(erro);
    })
    .finally(function () {
        console.log('Requisição concluida!')
    })

/*==================================*/
fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => console.log(jsonBody))
    .catch( (erro) => console.error(erro))
/*arrow function js*/    

/*
try {
    
} catch (error) {
    
} finally{

}
*/