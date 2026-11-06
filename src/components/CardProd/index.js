export default function CardProd({produto}) {
    return (
        <div>
            <h2>id {produto.id} nome{produto.nome}</h2>
            <p>descrição {produto.descricao}</p>
            <p>Estoque</p>
            <p>Preço</p>
        </div>
    )
}