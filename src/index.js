// Pegando os valores de email e senha
let email = document.getElementById('email');
let password = document.getElementById('password');
let form =  document.querySelector('form');
let textEmail = document.getElementById('textEmail');

form.addEventListener("submit", (e) => {
  // criando uma condição para não enviar valores vazios.
  if(email.value == '' && password.value == '') {
    alert('Você precisa preencher todos os campos!')
  }else if(
    validarEmail(email.value) === true && 
    validarPassword(password.value) === true){
    console.log(email.value);
    console.log(password.value);
    email.innerHTML = "";
    password.innerHTML= "";
  }else{
    console.log("Requisição não atendida");
  }
  e.preventDefault();
})

// Aqui verefica se o email foi escrito corretamente.
// O comando "blur" significa perda de foco.
email.addEventListener("blur", () => {
  if(validarEmail(email.value) !== true){
    alert("O formato do email deve ser Ex: abcd@gmail.com")
  }else{
    email.innerHTML ='';
  }
})

//Aqui vamos verificar se a senha foi escrita corretamente.
password.addEventListener("blur", () => {
  if(validarPassword(password.value) !== true){
    alert("O formato da senha deve ser no minímo 6 caracteres.")
  }else{
    password.innerHTML = '';
  }
})

//criando a função para validar o email.
function validarEmail(email) {
  // Aqui vai está as expressões regulares para validar o emali.
  let emailParametros = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
  return emailParametros.test(email);
}

// Validando senha com expressões regulares.
function validarPassword(password) {
  let passwordParametros = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  return passwordParametros.test(password)
}
