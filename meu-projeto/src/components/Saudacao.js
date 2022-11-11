function Saudacao({nome}) {

    function gerarSaudadao(algumNome) {
        return `Olá, ${algumNome}, tudo bem?`
    }

    return (
        <>
            {nome && <p>{gerarSaudadao(nome)}</p>}
        </>
    )
}

export default Saudacao