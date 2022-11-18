function calcular() {
  const valor1 = 100,
    valor2 = 10;
  alert(`
  Soma: ${parseInt(valor1 + valor2)} 
  Subtração: ${parseInt(valor1 - valor2)} 
  Divisão: ${parseInt(valor1 / valor2)} 
  Multiplicação: ${parseInt(valor1 * valor2)} 
  `);
}

function loop() {
  //let s = "";
  for (let i = 10; i <= 100; i++) {
    console.log("Número: " + i);
  }
  //alert(s);
}

function tab() {
  const number = 5;
  var txt = "";

  for (let i = 1; i <= 10; i++) {
    txt += `Tabuada: 5 x ${i} = ${5 * i}` + "\n";
  }
  alert(txt);
}

function calcTab() {
  let num = document.getElementById("num");
  let resp = document.getElementById("resp");
  let s = num.value;

  for (let i = 1; i <= 10; i++) {
    let mult = s * i;

    resp.innerHTML += `${s} x ${i} = ${mult} </br>`;
  }
}

function calculadora(calc) {
  var valor1 = document.calcform.valor1.value;
  var valor2 = document.calcform.valor2.value;

  if (calc == "somar") {
    var resp = parseInt(valor1) + parseInt(valor2);
  } else {
    if (calc == "subtrair") {
      var resp = valor1 - valor2;
    } else {
      if (calc == "multiplicar") {
        var resp = valor1 * valor2;
      } else {
        var resp = valor1 / valor2;
      }
    }
  }
  document.calcform.resp.value = resp;
}

/* Percorra o array [1,2,3,4,5,6,7,8,9,10] e exiba apenas os valores pares.*/

function list() {
  var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  alert(list.filter((get) => get % 2 == 0));
}

/* O custo de um carro novo ao consumidor é obtido com a seguinte fórmula:
custo final = custo de fábrica + (custo de fábrica * percentual do distribuidor) + (custo de fábrica * percentual de impostos)

O usuário terá uma tela para entrar com os valores:

custo de fábrica => nome do input custoFabrica
% distribuidor => nome do input percDistribuidor
% impostos => nome do input percImpostos
Valor final => nome do input valorfinal
Deverá executar o cálculo e demonstrar o resultado no “valorfinal” quando clicar no botão “btncalcular”.*/

function btncalcular() {
  let custoFabrica = parseFloat(document.getElementById("custoFabrica").value);
  let custofinal =
    custoFabrica +
    custoFabrica *
      parseFloat(document.getElementById("percDistribuidor").value / 100) +
    custoFabrica *
      parseFloat(document.getElementById("percImpostos").value / 100);

  return (document.getElementById("valorfinal").value = custofinal);
}

function limpar() {
  var f = document.getElementById("lim");
  var num = f.num;
  //var n2 = f.n2;
  num.value = "";
  //n2.value = "";
}
