function baixar() {
    const params = new URLSearchParams(window.location.search)
    const arquivo = params.get("arquivo")

    const caminho = "../../assets/download/" + arquivo

    const botao = document.getElementById("baixar-novamente")
    botao.href = caminho
    botao.download = arquivo

    const link = document.createElement("a")
    link.href = caminho
    link.download = arquivo
    link.click()
}

window.addEventListener("load", baixar)
