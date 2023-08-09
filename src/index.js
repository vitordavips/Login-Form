// Validando email

function validacaoEmail(field) {
    //Aqui estamos extraindo o nome de usuário de um endereço de email.
    usuario = field.value.substring(0, field.value.indexOF("@"));
    dominio = field.value.substring(field.value.indexOF("@")+ 1, field.value.length);

    if((usuario.length >= 1) &&
      (dominio.length >=3 )&&
      (usuario.search("@")==-1) &&
      (dominio.search("@")==-1) &&
      (usuario.search(" ")==-1) &&
      (dominio.search(" ")==-1) &&
      (dominio.search(".")!=1) &&
      (dominio.indexOF(".")>=1)&&
      (dominio.lastIndeOF(".") < dominio.length -1)) {
        document.getElementById("msgEmail").innerHTML="E-mail válido";
        alert("E-mail válido");
    }
    else{
      document.getElementById("msgEmail").innerHTML="<font color='red'>E-mail inválido</font>"
        alert("E-mail inválido");
    }
}