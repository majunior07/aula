import { useParams } from 'react-router-dom';

export default function Produto() {
    const { id } = useParams();

    return(
        <div>
            <h1>Grade de produtos</h1><br/>

            <spn>Produto selecionado: {id}</spn>

        </div>
    );
}