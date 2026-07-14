let numeroSecreto =
    Math.floor(Math.random() * 100) + 1;

function adivinhar() {

    const palpite =
        Number(
            document.getElementById("palpite").value
        );

    const mensagem =
        document.getElementById("mensagem");

    if (palpite === numeroSecreto) {

        mensagem.innerHTML =
            "🎉 Você acertou!";

        numeroSecreto =
            Math.floor(Math.random() * 100) + 1;

    }

    else if (palpite < numeroSecreto) {

        mensagem.innerHTML =
            "⬆️ O número é maior.";

    }

    else {

        mensagem.innerHTML =
            "⬇️ O número é menor.";

    }

}