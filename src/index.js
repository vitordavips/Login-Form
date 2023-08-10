// Pegando os valores de email e senha
let email = document.getElementById('email');
let password = document.getElementById('password');
let form =  document.querySelector('form');
let textForm = document.getElementById('textForm');

form.addEventListener("submit", (e) => {
  // criando uma condição para não enviar valores vazios.
  if(email.value == '' && password.value == '') {
    alert('Você precisa preencher todos os campos!')
  }
  else{
    console.log(email.value)
    console.log(password.value)
  }
  e.preventDefault()
})

email.addEventListener("keyup", () => {
  if(validarEmail(email.value) !== true){
    alert("O formato do email deve ser Ex: abcd@gmail.com")
  }
})

//criando a função para validar o email.
function validarEmail(){
  // Aqui vai está os parâmetros para validar o emali.
  let emailParametros = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
  return emailParametros.test(email)
}