function carregar() {
  var msg = window.document.getElementById("msg");
  var img = window.document.getElementById("img");
  var data = new Date();
  var hora = data.getHours();
  var minuto = data.getMinutes();
  msg.innerHTML = `Agora são ${hora}:${minuto} horas`;
  if (hora >= 0 && hora < 12) {
    img.src = "./images/DIA.webp";
  } else if (hora >= 12 && hora <= 18) {
    img.src = "./images/TARDE.webp";
  } else {
    img.src = "./images/NOITE.webp";
  }
}
