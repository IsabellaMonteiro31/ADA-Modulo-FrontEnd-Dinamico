function alterarTema() {
    const body = document.body;
    let isLight = body.classList.contains("light");

    if (isLight) {
        body.classList.remove("light");
        body.classList.add("dark");

    } else {
        body.classList.remove("dark");
        body.classList.add("light");

    }
}
