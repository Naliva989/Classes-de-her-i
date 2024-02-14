const readline = require('readline');

// Classe Heroi
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    // Método atacar
    atacar() {
        let ataque;
        switch (this.tipo) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'não tem ataque definido';
        }
        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
}

// Interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Perguntar ao usuário pelo nome, idade e tipo do herói
rl.question('Digite o nome do herói: ', (nomeHeroi) => {
    rl.question('Digite a idade do herói: ', (idadeHeroi) => {
        rl.question('Digite o tipo do herói: ', (tipoHeroi) => {
            // Criar um herói com as entradas fornecidas
            const meuHeroi = new Heroi(nomeHeroi, idadeHeroi, tipoHeroi);

            // Exibir informações do herói
            console.log(`Herói criado: ${meuHeroi.nome}, idade: ${meuHeroi.idade}, tipo: ${meuHeroi.tipo}`);
            meuHeroi.atacar(); // Exemplo de ataque do herói

            rl.close();
        });
    });
});
