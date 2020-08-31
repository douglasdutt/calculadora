onst binaria = document.getElementById("binaria");
const octal = document.getElementById("octal");
const decimal = document.getElementById("decimal");
const hexadecimal = document.getElementById("hexadecimal");

// tratamento de erro
function error(mensagem) {
  const p = document.getElementsByTagName("p");
  p[0].innerHTML = mensagem;
  setTimeout(function Esperando() {
    p[0].innerHTML = "";
    limpar();
  }, 4000);
}


function validandoBinaria() {
  const aux = event.which;
  if (aux === 48 || aux === 49) {
    return true;
  }
  error("No campo de base Decimal aceita somente Binário");
  return false;
};


function fromBinaria(){
  decimal.value = parseInt(binaria.value, 2);
  hexadecimal.value = (+parseInt(binaria.value, 2)).toString(16).toUpperCase();
  octal.value = (+parseInt(binaria.value, 2)).toString(8);
}
function fromOctal(){
  decimal.value = parseInt(octal.value, 8);
  binaria.value = (+parseInt(octal.value, 8)).toString(2);
  hexadecimal.value = (+parseInt(octal.value, 8)).toString(16).toUpperCase();
}
function fromDecimal(){
  binaria.value = (+parseInt(decimal.value,10)).toString(2);
  hexadecimal.value = (+parseInt(decimal.value, 10)).toString(16).toUpperCase();
  octal.value = (+parseInt(decimal.value,10)).toString(8);
}
function fromHexadecimal(){
  decimal.value = parseInt(hexadecimal.value, 16);
  binaria.value = (+parseInt(hexadecimal.value, 16)).toString(2);
  octal.value = (+parseInt(hexadecimal.value, 16)).toString(8);

}

function limpar(){
    binaria.value = "";
    octal.value = "";
    decimal.value = "";
    hexadecimal.value = "";

}
