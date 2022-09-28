const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

const geraMaiusculo = () => String.fromCharCode(rand(65, 91));
const geraMinusculo = () => String.fromCharCode(rand(97, 123));
const geraNumero = () => String.fromCharCode(rand(48, 58));
const simbolos = ',.;~^[]{}!@#$%*()_+=-';
const geraSimbolo = () => simbolos[rand(0, simbolos.length)]

export default function geraSenha(qtd, maiusculas, minusculas, numeros, simbolos) {
    const senhaArrya = [];
    qtd = Number(qtd);

    for (let i = 0; i <= qtd; i++) {
        maiusculas && senhaArrya.push(geraMaiusculo());
        minusculas && senhaArrya.push(geraMinusculo());
        numeros && senhaArrya.push(geraNumero());
        simbolos && senhaArrya.push(geraSimbolo());
    }

   return senhaArrya.join('').slice(0,qtd)
}

