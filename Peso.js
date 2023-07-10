function calcularPeso(peso, altura, sexo) {
  if(sexo === 'f'){
    pesoIdeal = 62.1 * altura -44.7;
  } else if (sexo === 'm'){
    pesoIdeal = 72.7 * altura -58;
  } else {
    console.log("Sexo invalido. Execute o programa novamente e informe 'm' para masculiuno ou 'f' para feminino");
  }
  return peso;
}

function imprimePesoIdeal(peso) {
  console.log("O seu peso ideal é:", pesoIdeal.toFixed(2), "kg.");
}

  function main() {
    var peso = parseFloat(prompt("Informe o seu peso (em kg):"));
    var altura = parseFloat(prompt("Infome a sua altura (em metros):"));
    var sexo = prompt("Infome o seu sexo (m para masculino e f para feminino):");
  

peso = calcularPeso(peso, altura, sexo.toUpperCAse())
imprimePesoIdeal(peso);
}
main();