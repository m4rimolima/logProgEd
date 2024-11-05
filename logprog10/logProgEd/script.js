function CalculeSoma(){
    const n = parseInt(document.getElementById('meuInput').value);
    if (isNaN(n) || n <= 0) { 
        document.getElementById('resultado').innerText = "número inválido, insira um positivo";
        return;
    }

    let soma = 0;
    for (let i = 1; i<= n; i++) {
        soma += i;
    }

    document.getElementById('resultado').innerText = `O resultado é: ${soma}`;
}