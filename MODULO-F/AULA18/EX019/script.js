let numero = document.getElementById("txtn");
let lista = document.getElementById("sellist");
let res = document.getElementById("res");
let valores = [];

function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}

function inLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

function adicionar() {
  if (isNumero(numero.value) && !inLista(numero.value, valores)) {
    valores.push(Number(numero.value));
    let item = document.createElement("option");
    item.text = `Número ${numero.value} adicionado`;
    lista.appendChild(item);
    res.innerHTML = "";
  } else {
    alert("Valor invalido ou ja encontrado na lista.");
  }
  numero.value = "";
  numero.focus();
}

function finalizar() {
  if (valores.length == 0) {
    alert("Adicione alguns valores para finalizar.");
  } else {
    let tot = valores.length;
    let maior = valores[0];
    let menor = valores[0];
    let soma = 0;
    let media = 0;
    for (let pos in valores) {
      soma += valores[pos];
      if (valores[pos] > maior) maior = valores[pos];
      if (valores[pos] < menor) menor = valores[pos];
    }
    media = soma / tot;
    res.innerHTML = ``;
    res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.`;
    res.innerHTML += `<p>O maior valor informado foi ${maior}.`;
    res.innerHTML += `<p>O menor valor informado foi ${menor}.`;
    res.innerHTML += `<p>A soma dos valores é ${soma}.`;
    res.innerHTML += `<p>A media dos valores é ${media}.`;
  }
}
