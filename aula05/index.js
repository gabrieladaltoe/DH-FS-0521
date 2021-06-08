//Projeto simplificado com algumas funçoes:
//Animais, cadastrar animais, vacinar animais, etc
//validar dados
//contar quantos pets foram vacinados quais não foram 

let pets = [

    {
        nome: 'Yoshi',
        nomeDono: 'Victor',
        idade: 7,
        tipo: 'cachorro',
        raca: 'Akita Inu',
        peso: 40,
        genero: 'Macho',
        cor: 'ruivo',
        vacinado: true
    },

    {
        nome: 'Cookie',
        nomeDono: 'Priscilla',
        idade: 4,
        tipo: 'Poodle',
        raca: 'SRD',
        peso: 10,
        genero: 'Fêmea',
        cor: 'cinza',
        vacinado: true
    },
    {
        nome: 'Dulce',
        nomeDono: 'Flavia',
        idade: 11,
        tipo: 'gato',
        raca: 'Persa',
        peso: 12,
        genero: 'Femea',
        cor: 'Ruivo',
        vacinado: true
    },
    {
        nome: 'Doris',
        nomeDono: 'Bruno',
        idade: 7,
        tipo: 'cachorro',
        raca: 'SRD',
        peso: 20,
        genero: 'Fema',
        cor: 'Preta',
        vacinado: true
    }

]; //array de objetos

// Criar funçao para listar o nome de todos os objetos do array acima

/*let listarPets= () =>{

}*/

function listarPets(){
    let nomesAnimais = []
    for(let i=0 ; i< pets.length ; i++){
        nomesAnimais.push(pets[i].nome)
        console.log(nomesAnimais)
    }
    return nomesAnimais
}
listarPets()

/*
let novoPetDados = {
        nome: objectoPets.nome,
        nomeDono: objectoPets.nomeDono,
        idade:  objectoPets.idade,
        tipo:  objectoPets.tipo,
        raca:  objectoPets.raca,
        peso:  objectoPets.peso,
        genero:  objectoPets.genero,
        cor:  objectoPets.cor,
        vacinado:  objectoPets.vacinado
    }
    */

function cadastrarPets(arrayPets, objectoPets){
    
    arrayPets.push(objectoPets);
}

let novoPet = {
    nome:'olivia',
    nomeDono: 'Julia',
    idade:  1,
    tipo:  'gato',
    raca:  'persa',
    peso:  7,
    genero: 'fêmea',
    cor:  'preto',
    vacinado:  true
}
//cadastrarPets(pets,novoPet)
//console.log(pets[4])
function validaDados(objetoPets){

    if(typeof objetoPets == 'object') {
        return (objetoPets.nome && 
       objetoPets.nomeDono && 
       objetoPets.idade && 
       objetoPets.tipo && 
       objetoPets.raca && 
       objetoPets.peso  && 
       objetoPets.genero && 
       objetoPets.cor && 
       objetoPets.vacinado)
         } else {
        return console.log('insira um objeto válido');
    }
}


function cadastrarPets(arrayPets, objetoPets){
    if(validaDados()){
        arrayPets.push(objetoPets);
        console.log(pets)
    } else {
        console.log('O objeto não tem todas as propriedades necessárias informadas')
    }
}

cadastrarPets(pets,novoPet)

const cadastrarPet = (arrayPets, objetoPet) =>{
    if(typeof objetoPet == "object"){
      if(validaDados(objetoPet)){
        arrayPets.push(objetoPet)
        console.log(pets)
      } else {
        console.log('O objeto não tem todas as propriedades necessárias informadas')
      }
    } else {
      console.log('Insira um objeto válido')
    }
  }
  
//arrow function

