let etapa = 0;

function descongelar() {
  const texto = document.getElementById("texto");
  const iceberg = document.getElementById("iceberg");
  const botao = document.querySelector("button");

  if (etapa === 0) {
    texto.innerText =
      "Iniciando avaliação clínica… afinal, futura médica entende do assunto 🩺";
    iceberg.innerText = "🧊🩺";
    botao.innerText = "Prosseguir com cautela";
  } 
  else if (etapa === 1) {
    texto.innerText =
      "Coração de gelo confirmado. Frio, estável e altamente seletivo.";
    iceberg.innerText = "🧊❄️";
    botao.innerText = "Aplicar método alternativo";
  } 
  else if (etapa === 2) {
    texto.innerText =
      "Observação inesperada: reage positivamente a café e boas risadas.";
    iceberg.innerText = "🧊☕";
    botao.innerText = "Finalizar laudo";
  } 
  else {
    texto.innerText =
      "Conclusão: Carolzinha não é fria. Só não perde tempo com qualquer um...";
    iceberg.innerText = "❤️";
    botao.innerText = "Encerrar expediente";

    document.body.style.background =
      "linear-gradient(180deg, #ff6b81, #ff4757)";

    botao.disabled = true;
    botao.style.opacity = "0.6";
    botao.style.cursor = "default";
  }

  etapa++;
}
