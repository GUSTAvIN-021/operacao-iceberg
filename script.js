const botao = document.getElementById("botao");
const texto = document.getElementById("texto");
const iceberg = document.getElementById("iceberg");

let etapa = 0;

botao.addEventListener("click", () => {
  etapa++;

  if (etapa === 1) {
    texto.innerHTML = `
      🔬 Iniciando análise clínica...<br><br>
      ✔️ Inteligência acima da média<br>
      ✔️ Passou em Medicina (mérito total) 👩‍⚕️📚<br>
      ❄️ Coração em modo econômico<br><br>
      Observação: ela não é fria,<br>
      é apenas criteriosa mesmo 😌
    `;
    iceberg.innerText = "🧊💧";
    botao.innerText = "Continuar investigação";
  }

  else if (etapa === 2) {
    texto.innerHTML = `
      📊 Resultados parciais:<br><br>
      • Senso de humor confirmado ✅<br>
      • Paciência seletiva detectada<br>
      • Emoções bem administradas<br><br>
      Conclusão provisória:<br>
      ninguém chega perto à toa 👀
    `;
    iceberg.innerText = "💧";
    botao.innerText = "Gerar laudo final";
  }

  else if (etapa === 3) {
    document.querySelector(".container").style.display = "none";

    const telaFinal = document.getElementById("final");
    const musica = document.getElementById("musica");

    telaFinal.classList.remove("hidden");

    musica.volume = 0.6;
    musica.play().catch(() => {
    console.log("Autoplay bloqueado, mas o clique foi registrado.");
    });

    botao.disabled = true;

    }

});
