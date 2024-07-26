<div align="center" id="top"> 
  <img src="./.github/app.gif" alt="Validacao" />

  &#xa0;

  <!-- <a href="https://validacao.netlify.app">Demo</a> -->
</div>

<h1 align="center">Validacao</h1>

<p align="center">
  <img align="" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
<img align="" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img align="" src="https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white">
<img align="" src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white">
<img align="" src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white ">

</p>

<p align="center">
  <a href="#descrição">descrição</a> &#xa0; | &#xa0; 
  <a href="#imagem">imagem</a> &#xa0; | &#xa0;
  <a href="#explicação">explicação</a> &#xa0; | &#xa0;
  <a href="#tecnologias">Tecnologias</a> &#xa0; | &#xa0;
  <a href="https://github.com/{{YOUR_GITHUB_USERNAME}}" target="_blank">autor</a>
</p>

<br>

## descrição ##

 Projeto cria com intuito de validação de cpf e email, pode ser usado em telas de cadestros de bancos, empresas.

 ## imagem ##


## explicação ##
 Utilizando *JavaScript* para fazer a validação do email com uma **function** para chegar se o que foi digitado e realmente um email valido, se for valido aparecera uma mensagem falando que o email e valido, caso for invalido aparecera outra mensagem dizendo que não é valido.
 ~~~
 function checarEmail() {
  if (
    document.forms[0].email.value == "" ||
    document.forms[0].email.value.indexOf("@") == -1 ||
    document.forms[0].email.value.indexOf(".") == -1
  ) {
    alert("Por favor, informe o um Email válido");
    return false;
  } else {
    alert("email informado com sucesso!");
    document.getElementById("email").innerHTML = document.forms[0].email.value;
  }
}
// -------------------------------

// CODIGO DE VERIFICAÇÃO DE EMAIL DIGITADO
// -------------------------------
function verifica() {
  if (document.forms[0].email.value == 0) {
    alert("Pro favor, informe um email.");
    document.frmEnvia.email.focus();
    return false;
  }
  return true;
}
~~~
 Ja para a verificação do cpf uma **function** contendo um **if** que faz um conculo para saber os dois ultimos digitos varificadores de um cpf para ver se realmente e valdido ou não.  
~~~
 function validarCPF(cpf) {
  cpf = cpf.replace(/[^\d]+/g, ""); // remove caracteres não numéricos

  // verificar se o valor informado contem 11 digitos e se todos são digitos iguais
  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
    return false;
  }

  let soma = 0;
  let resto;

  // validação do primeiro digito verificador

  for (let i = 1; i <= 9; i++) {
    soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
  }

  resto = (soma * 10) % 11;

  if (resto === 10 || resto === 11) {
    resto = 0;
  }
  if (resto !== parseInt(cpf.substring(9, 10))) {
    return false;
  }
  soma = 0;

  // validar 11 elementos do CPF - 2º digito verificador

  for (let i = 1; i <= 10; i++) {
    soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
  }

  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) {
    resto = 0;
  }
  if (resto !== parseInt(cpf.substring(10, 11))) {
    return false;
  }
  return true;
}
~~~
<a href="#top">voltar ao começo</a>
