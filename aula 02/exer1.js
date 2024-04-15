//Formatação CPF
document.addEventListener("DOMContentLoaded", function () {
  const cpfInput = document.getElementById("cpf");

  function formatarCPF() {
    let cpf = cpfInput.value;
    cpf = cpf.replace(/\D/g, ""); // Remove caracteres não numéricos
    cpf = cpf.replace(/^(\d{3})(\d)/, "$1.$2"); // Adiciona o primeiro ponto
    cpf = cpf.replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3"); // Adiciona o segundo ponto
    cpf = cpf.replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, "$1.$2.$3-$4"); // Adiciona o hífen
    cpfInput.value = cpf;
  }

  // Aplica a máscara ao digitar no campo de CPF
  cpfInput.addEventListener("input", formatarCPF);
});

// Formatação Telefone
document.addEventListener("DOMContentLoaded", function () {
  const telephoneInput = document.getElementById("telephone");

  function formatTelephone() {
    let telephone = telephoneInput.value;
    telephone = telephone.replace(/\D/g, ""); // Remove caracteres não numéricos
    telephone = telephone.replace(/^(\d{2})(\d)/, "($1) $2"); // Adiciona o código de área entre parênteses
    telephone = telephone.replace(/(\d{5})(\d)/, "$1-$2"); // Adiciona o hífen entre os números
    telephoneInput.value = telephone;
  }

  // Aplica a máscara ao digitar no campo de telefone com código de área
  telephoneInput.addEventListener("input", formatTelephone);
});

//Validação dos campos
const validation = () => {
  let forms = document.querySelectorAll(".needs-validation");
  forms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      if (form.checkValidity()) {
        const payload = {
          name: form.querySelector("#name").value,
          surname: form.querySelector("#surname").value,
          birthday: form.querySelector("#birthday").value,
          cpf: form.querySelector("#cpf").value,
          profession: form.querySelector("#profession").value,
          email: form.querySelector("#inputEmail").value,
          password: form.querySelector("#inputPassword").value,
          address: form.querySelector("#inputAddress").value,
          telephone: form.querySelector("#telephone").value,
        };

        //Mensagem de sucesso
        Swal.fire({
          title: "Bem-vindo!",
          text: "Cadastro realizado com sucesso!",
          icon: "success",
        });

        console.log(payload);
        form.reset();

      } else {
        event.stopPropagation();
      }
      form.classList.add("was-validated");
    });
  });
};

window.addEventListener("load", validation);