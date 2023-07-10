
function soma(num1, num2) {
    return num1 + num2;
  }
  
  function multiplicacao(num1, num2) {
    return num1 * num2;
  }
  
  function divisao(num1, num2) {
    if (num2 === 0) {
      return "Erro: divisão por zero!";
    }
    return num1 / num2;
  }
  

  function subtracao(num1, num2) {
    return num1 - num2;
  }
  

  var operacao = prompt("Digite a operação desejada: soma, multiplicacao, divisao ou subtracao");
  

  var numero1 = parseFloat(prompt("Digite o primeiro número:"));
  var numero2 = parseFloat(prompt("Digite o segundo número:"));

  if (operacao === "soma") {
    var resultado = soma(numero1, numero2);
    console.log("Resultado da soma: " + resultado);
  } else if (operacao === "multiplicacao") {
    var resultado = multiplicacao(numero1, numero2);
    console.log("Resultado da multiplicação: " + resultado);
  } else if (operacao === "divisao") {
    var resultado = divisao(numero1, numero2);
    console.log("Resultado da divisão: " + resultado);
  } else if (operacao === "subtracao") {
    var resultado = subtracao(numero1, numero2);
    console.log("Resultado da subtração: " + resultado);
  } else {
    console.log("Operação inválida!");
  }
  