function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano");
  var res = document.querySelector("div#res");

  if (fano.value.length == 0 || Number(fano.value) > ano) {
    alert("[ERRO] Verifique os dados e tente novamente.");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    var genero = " ";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (fsex[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade < 10) {
        //criança
        img.setAttribute("src", "img/bebemenino.jpg");
      } else if (idade < 35) {
        //jovem
        img.setAttribute("src", "img/jovemhomem.jpg");
      } else if (idade < 50) {
        // adulto
        img.setAttribute("src", "img/adultohomem.jpg");
      } else {
        // idoso
        img.setAttribute("src", "img/idosohomem.jpg");
      }
    } else if (fsex[1].checked) {
      genero = "Mulher";
      if (idade >= 0 && idade < 10) {
        //criança
        img.setAttribute("src", "img/bebemenina.jpg");
      } else if (idade < 35) {
        //jovem
        img.setAttribute("src", "img/jovemmulher.jpg");
      } else if (idade < 50) {
        // adulto
        img.setAttribute("src", "img/adultamulher.jpg");
      } else {
        // idoso
        img.setAttribute("src", "img/idosamulher.jpg");
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    res.appendChild(img);
  }
}
