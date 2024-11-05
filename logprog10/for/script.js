
function vogall(){
  let texto = document.getElementById('texto').value;
  let soma = 0;

  for(i=0; i <= texto.length ; i++){
    if (texto[i] == 'a' ||texto[i] == 'e' ||texto[i] == '' || texto[i] == 'o' || texto[i] == 'u' ||texto[i] == "A" ||texto[i] == "E" ||texto[i] == "I" ||texto[i] == "O" ||texto[i] == "U")
  {
    soma++;
  } else {
  console.log (texto[i] + `Não é vogal`);
}
  document.getElementById('resultado').innerHTML = "O resultado é:" + soma;  
  }
}