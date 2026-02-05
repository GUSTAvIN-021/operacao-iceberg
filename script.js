const botao = document.getElementById("botao");
const texto = document.getElementById("texto");

botao.addEventListener("click", () => {
  texto.innerHTML = `
    Atualização do sistema ❄️⚙️<br><br>
    ❌ Coração totalmente congelado<br>
    ✅ Senso de humor confirmado<br><br>
    Brincadeiras à parte…<br>
    parabéns pela Medicina 👩‍⚕️📚<br>
    Deus honra quem se dedica.
  `;

  botao.innerText = "Degelo parcial detectado 👀❄️";
});
