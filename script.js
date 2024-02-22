const nome = document.getElementById('nome');
const altura = document.getElementById('altura');
const peso = document.getElementById('peso');
const btn1 = document.getElementById('btn1');
const resultado = document.getElementById('resultado');
const erroAltura = document.querySelector('.alturaEmBranco')
const erroPeso = document.querySelector('.pesoEmBranco')
const erroNome = document.querySelector('.nomeEmBranco')
const container = document.querySelector('.container')
const body = document.querySelector('.body')
const btn2 = document.getElementById('btn2');



const getIMC = (imc) => {
    if (imc >= 40) return 'você tem obesidade nivel III';
    if (imc >= 35) return 'você tem obesidade nivel II';
    if (imc >= 30) return 'você tem obesidade nivel I';
    if (imc >= 25) return 'você está levemente acima do peso';
    if (imc >= 18.5) return 'você tem peso ideal';
    return 'você esta abaixo do peso';
}

const calcIMC = () => {
    if(!altura.value) {
        erroAltura.style.display = 'block';
        
    }
    if(!peso.value) {
        erroPeso.style.display = 'block';

    }
    if(!nome.value) {
        erroNome.style.display = 'block';

    }
    
    const result = (+peso.value / (+altura.value * +altura.value)).toFixed(1);
    let showResult = resultado.textContent = `${nome.value} ${getIMC(result)} com um IMC de ${result}`;
    body.style.overflowY = 'scroll'
}
btn1.addEventListener('click', calcIMC);
btn2.addEventListener('click', () => {
    location.reload()
})