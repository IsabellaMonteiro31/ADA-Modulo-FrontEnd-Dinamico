const atualizarHora = () => {
  const data = new Date();
  let horas = data.getHours().toString().padStart(2, "0");
  let minutos = data.getMinutes().toString().padStart(2, "0");
  let segundos = data.getSeconds().toString().padStart(2, "0");

  const tempo = `${horas}:${minutos}:${segundos}`;
  document.getElementById("clock").innerText = tempo;
};

setInterval(atualizarHora, 1 * 1000);

atualizarHora();
