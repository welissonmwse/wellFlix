import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import PageDefault from '../../../components/PageDefault'
import FormField from '../../../components/FormField'
import useForm from '../../../hooks/useForm'
import Button from '../../../components/Button'

function Categoria(){
    
    const valoresIniciais = {
        categoria: '',
        descricao: '',
        cor: '',
    }

    const { handleChange, values, clearForm} = useForm(valoresIniciais)
    const [categorias, setCategorias] = useState([])

    useEffect(() => {
        const URL = window.location.hostname.includes('localhost')
          ? 'http://localhost:8080/categorias'
          : 'https://wellflix.herokuapp.com/categorias'
        fetch(URL)
          .then(async (respostaDoServidor) => {
            const resposta = await respostaDoServidor.json()
            setCategorias([
              ...resposta,
            ])
          })
      },[])
    // useEffect(() => {
    //     if(window.location.href.includes('localhost')) {
    //         const URL = 'https://wellflix.herokuapp.com/categorias'; 
    //         fetch(URL)
    //             .then(async (respostaDoServer) =>{
    //                 if(respostaDoServer.ok) {
    //                 const resposta = await respostaDoServer.json();
    //                 setCategorias(resposta);
    //                 return; 
    //             }
    //             throw new Error('Não foi possível pegar os dados');
    //         })
    //     }
    // }, []);

    return(
        <PageDefault>
            <h1>Cadastro de Categoria: {values.categoria}</h1>

            <form onSubmit={(infoDoEvento) => {
                infoDoEvento.preventDefault()
                setCategorias([...categorias, values])
                clearForm()
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
                <Button>
                    Cadastrar
                </Button>
            </form>

            <ul>
                {categorias.map((categoria) => {
                    return (
                        <li key={`${categoria.titulo}`}>
                            {categoria.titulo}
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