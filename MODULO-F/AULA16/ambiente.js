let num = [8, 5, 6, 3, 7];
num.push(4);
console.log(`nosso vetor é ${num}`);

console.log(`O vetor tem ${num.length} posições`);

for (let pos = 0; pos < num.length; pos++) {
  console.log(`A posicao ${pos} tem o valor ${num[pos]}`);
}

for (let pos in num) {
  console.log(`A posicao ${pos} tem o valor ${num[pos]}`);
}

let posicao = num.indexOf(3);
if (posicao == -1) {
  console.log("Não encontrado");
} else {
  console.log(`O valor está na posição ${posicao}`);
}
