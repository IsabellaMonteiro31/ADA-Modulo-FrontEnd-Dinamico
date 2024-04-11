


// document.getElementById("form").addEventListener("submit", (event) => {                 // COM ARROW FUNCTION

document.getElementById("form").addEventListener("submit", function (event) {           // COM FUNÇÃO ANÔNIMA
    const valorCampo = document.getElementById("texto").value;

    if (valorCampo.trim() === "") {
        alert("Você precisa preencher o campo.");

    } else {
        alert("Dados enviados com sucesso!")
    }
})

