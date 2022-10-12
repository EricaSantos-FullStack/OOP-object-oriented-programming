// criar uma chave privada no meu projeto
const _velocidade = Symbol('velocidade');

class Carro {
    constructor(nome){
        this.nome = nome;  
        this[_velocidade] = 0;
    }

    // setters para atribuir um valor ao objeto
    // nesse caso, estou setando algumas regras para o meu sistema
    set velocidade(valor){   
        if(typeof valor !== 'number') return;
        if(valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;
    }

    //getters para obter o valor de um atributo
    // nesse caso pego a velocidade que está no pai
    get velocidade() { 
        return this[_velocidade]; 
    }

    acelerar(){
        //se velocidade for maior ou igual a 100, peço para parar (dando um return)
        if(this[_velocidade] >= 100) return;        this[_velocidade]++;
    }

    desacelerar(){
        if(this[_velocidade] <= 100) return;        this[_velocidade]--;
    }
}

//criando o carro
const c1 = new Carro('Fusca');

//fazendo o carro funcionar
// com limite de 200 vezes acelerando
// for(let i = 0; i <= 200; i++){
//     c1.acelerar();
// }

// c1.velocidade = 55;  acessando o setter
// console.log(c1); acessando o getter