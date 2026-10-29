'use client';
import { useEffect, useState } from "react";
import styles from './page.module.css';

export default function Produtos() {

    const [prods, setProds] = useState(null);
    // const [cats, setCats] = useState(null);

    // const getNomeCategoria = (id) => cats?.find((cat) => cat.id === id)?.nome ?? id;

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

    // useEffect(() => {
    //     const fetchCats = async () => {
    //         try {
    //             const response = await fetch('https://stock.dev.vilhena.ifro.edu.br/api/categorias');
    //             if (!response.ok) {
    //                 throw new Error(`Erro ao buscar Categorias ${response.statusText}`);
    //             }
    //             const data = await response.json();
    //             setCats(data);
    //         } catch (e) {
    //             console.log(`${e.message}`);
    //         }
    //     }
    //     fetchCats();
    // }, []);

    return (
        < div >
            <h1>Produtos</h1>
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
                                <tr key={prod.id}>
                                    <td>{prod.id}</td>
                                    <td>{prod.nome}</td>
                                    <td>{prod.descricao}</td>
                                    {/* <td>{getNomeCategoria(prod.categoria_id)}</td> */}
                                    <td>{prod.categoria_id}</td>
                                    <td>{prod.quantidade_estoque}</td>
                                    <td>{prod.preco}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            }

        </div >
    )
}