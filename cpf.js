// VALIDAÇÃO DE CPF

// Adiciona escutador à página
document.getElementById("cpfForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const cpf = document.getElementById("cpf").value;
  const msg = document.getElementById("message");

  if (validarCPF(cpf)) {
    msg.textContent = "Cpf é valido!";
    msg.style.color = "green";
  } else {
    msg.textContent = "Cpf é inválido!";
    msg.style.color = "red";
  }
});

// função de cálculo de velidação do CPF

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
