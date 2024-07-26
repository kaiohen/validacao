// BLOCO PARA VALIDAÇÃO DE EMAIL
// -------------------------------
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
