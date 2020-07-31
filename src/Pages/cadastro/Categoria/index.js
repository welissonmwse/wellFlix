import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import PageDefault from '../../../components/PageDefault'
import FormField from '../../../components/FormField'

function Categoria(){
    
    const valoresIniciais = {
        categoria: '',
        descricao: '',
        cor: '',
    }

    const [categorias, setCategorias] = useState([])
    const [values, setValues] = useState(valoresIniciais)

    const setValue = (chave, valor) => {
        setValues({
            ...values,
            [chave]: valor,
        })
    }

    const handleChange = (item) => {
        setValue(
            item.target.getAttribute('name'), 
            item.target.value
        )
    }

    useEffect(() => {
        if(window.location.href.includes('localhost')) {
            const URL = 'https://wellflix.herokuapp.com/categorias'; 
            fetch(URL)
                .then(async (respostaDoServer) =>{
                    if(respostaDoServer.ok) {
                    const resposta = await respostaDoServer.json();
                    setCategorias(resposta);
                    return; 
                }
                throw new Error('Não foi possível pegar os dados');
            })
        }
    }, []);

    return(
        <PageDefault>
            <h1>Cadastro de Categoria: {values.categoria}</h1>

            <form onSubmit={(infoDoEvento) => {
                infoDoEvento.preventDefault()
                setCategorias([...categorias, values])
                setValues(valoresIniciais)
            }}>
                <FormField
                    label="Nome da Categoria"
                    type="text"
                    name="categoria"
                    value={values.categoria}
                    onChange={handleChange}
                 />
                <FormField
                    label="Descrição"
                    type="textarea"
                    name="descricao"
                    value={values.descricao}
                    onChange={handleChange}
                 />
                <FormField
                    label="Cor"
                    type="color"
                    name="cor"
                    value={values.cor}
                    onChange={handleChange}
                 />
                <button>
                    Cadastrar
                </button>
            </form>

            <ul>
                {categorias.map((categoria, indice) => {
                    return (
                        <li key={`${categoria}${indice}`}>
                            {categoria.categoria}
                        </li>
                    )
                })}
            </ul>

            <Link to="/" >
                Ir para home
            </Link>
        </PageDefault>
    )
}
export default Categoria;