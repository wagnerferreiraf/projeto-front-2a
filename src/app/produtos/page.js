'use client';
import { useEffect, useState } from "react";
import styles from './page.module.css';
import CardProd from "@/components/CardProd";



export default function Produtos() {

    const [prods, setProds] = useState(null);
    const [cats, setCats] = useState(null);
    const [prodSelected, setProdSelected] = useState(null);
    const [busca, setBusca] = useState('');


    useEffect(() => {
        const fetchProds = async () => {
            try {
                const response = await fetch('https://stock.dev.vilhena.ifro.edu.br/api/produtos');
                if (!response.ok) {
                    throw new Error(`Erro ao buscar Produtos ${response.statusText}`);
                }
                const data = await response.json(); // converte os dados (json) para lista de objetos
                console.log(data);
                setProds(data);
            } catch (e) {
                console.log(`${e.message}`);
            }
        }
        fetchProds();
    }, []);

    useEffect(() => {
        const fetchCats = async () => {
            const response = await fetch('https://stock.dev.vilhena.ifro.edu.br/api/categorias');
            if (!response.ok) {
                throw new Error(`Erro ao buscar Categorias ${response.statusText}`);
            }
            const data = await response.json();
            console.log(data);
            setCats(data);
        }
        fetchCats();
    }, []);

    // crie um fetchCats para buscar as categorias...

    const getNomeCategoria = (id_categoria) => {
        const categoria = cats?.find(cat => cat.id === id_categoria);
        return categoria ? categoria.nome : 'Categoria Indefinida';
    }

    // crie a função buscar

    const filtro = prods?.filter(p => p.nome.toLowerCase().includes(busca.toLowerCase()));

 // CRIE A ROTA /produtos/new
    return (
        < div >
            <h1>Produtos</h1>
            {filtro &&
                filtro.map((f) => (
                    <p key={f.id}>{f.nome}</p>
                ))
            }
            {/* sempre que o usuário alterar o conteúdo do input, atualize o estado busca */}
            <input type="text" placeholder="Busque um produto" onChange={(e) => setBusca(e.target.value)} value={busca} />
            {prods === null ?
                <p>Carregando lista de produtos...</p> :
                <div>
                    <table className={styles.tbl}>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>NOME</th>
                                <th>DESCRIÇÃO</th>
                                <th>CATEGORIA</th>
                                <th>ESTOQUE</th>
                                <th>PREÇO</th>
                            </tr>
                        </thead>
                        <tbody>
                            {prods.map((prod) => (
                                <tr key={prod.id} onClick={() => setProdSelected(prod)}>
                                    <td>{prod.id}</td>
                                    <td>{prod.nome}</td>
                                    <td>{prod.descricao}</td>
                                    <td>{getNomeCategoria(prod.categoria_id)}</td>
                                    <td>{prod.quantidade_estoque}</td>
                                    <td>{prod.preco}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            }
            {/* { como criar uma renderização condicional com base no estado prod?} */}
<<<<<<< HEAD
            {prodSelected && <CardProd produto={prodSelected} />}
=======
            {prodSelected && <CardProd nome= {prodSelected.nome} id={prodSelected.id} />}
>>>>>>> 61102fd9c9eed59304caec1e081cd5f6cc0933dd
        </div >
    )
}