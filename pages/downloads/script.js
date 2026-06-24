console.log("Script Carregado!")

function baixar() {
    console.log(window.location.search)
    const params = new URLSearchParams(window.location.search)
    const arquivo = params.get("arquivo")

    const caminho = "../../assets/download/" + arquivo;

    const b_novamente = document.getElementById("baixar-novamente")
    b_novamente.href = caminho
    b_novamente.download = arquivo

    const link = document.createElement("a")
    link.href = caminho
    link.download = arquivo
    link.click()
}

window.addEventListener("load", baixar)
