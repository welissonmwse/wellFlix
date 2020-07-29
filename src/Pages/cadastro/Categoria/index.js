import React, {useState} from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom'
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
                    type="text"
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
                {/* <div>
                    <label>
                        Descrição:
                        <textarea type="text" 
                            value={values.descricao}
                            name="descricao"
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Cor:
                        <input type="color" 
                            value={values.cor}
                            name="cor"
                            onChange={handleChange}
                        />
                    </label>
                </div> */}

                <button>
                    Cadastrar
                </button>
            </form>

            <ul>
                {categorias.map((categoria) => {
                    return(
                        <li key={categoria}>
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