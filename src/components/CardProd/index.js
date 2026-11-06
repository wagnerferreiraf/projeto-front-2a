<<<<<<< HEAD
export default function CardProd({produto}) {
    return (
        <div>
            <h2>id {produto.id} nome{produto.nome}</h2>
            <p>descrição {produto.descricao}</p>
=======
export default function CardProd({nome, id}) {
    return (
        <div>
            <h2>id {id} nome{nome}</h2>
            <p>descrição</p>
>>>>>>> 61102fd9c9eed59304caec1e081cd5f6cc0933dd
            <p>Estoque</p>
            <p>Preço</p>
        </div>
    )
}