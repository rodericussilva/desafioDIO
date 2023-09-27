class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;
    switch (this.tipo) {
      case "mago":
        ataque = "magia";
        break;
      case "monge":
        ataque = "artes marciais";
        break;
      case "guerreiro":
        ataque = "espada";
        break;
      case "ninja":
        ataque = "espada";
        break;
      default:
        ataque = "ataque desconhecido";
    }
    console.log(`O ${this.nome} atacou usando ${ataque}`);
  }
}

let personagem1 = new Heroi("Kabuloso", 58, "mago");
let personagem2 = new Heroi("Kalango", 118, "monge");
let personagem3 = new Heroi("Pytherson", 18, "guerreiro");
let personagem4 = new Heroi("Javuloso", 33, "ninja");

personagem1.atacar();
personagem2.atacar();
personagem3.atacar();
personagem4.atacar();