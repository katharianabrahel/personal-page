function iniciarTrocaImagens(elemento, imagens) {
if (elemento.dataset.intervalId === undefined) {
    elemento.dataset.indice = 0;
    elemento.dataset.primeiraImagem = elemento.src;
    elemento.dataset.intervalId = setInterval(function() {
    elemento.src = imagens[elemento.dataset.indice];
    elemento.dataset.indice = (parseInt(elemento.dataset.indice) + 1) % imagens.length;
    }, 1000); // Altere o intervalo de tempo conforme necessário (em milissegundos)
}
}

function pararTrocaImagens(elemento) {
if (elemento.dataset.intervalId !== undefined) {
    clearInterval(elemento.dataset.intervalId);
    delete elemento.dataset.indice;
    delete elemento.dataset.intervalId;
    elemento.src = elemento.dataset.primeiraImagem;
}
}

document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Validação dos campos
    var nome = document.getElementById('nome').value.trim();
    var email = document.getElementById('email').value.trim();
    var mensagem = document.getElementById('mensagem').value.trim();

    if (nome === "" || email === "" || mensagem === "") {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    // Envio do formulário (simulação)
    alert('Mensagem enviada com sucesso!');
    document.getElementById('form-contato').reset();
});