import React, {useState, useEffect} from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link, useHistory } from 'react-router-dom'
import useForm from '../../../hooks/useForm'
import FormField from '../../../components/FormField'
import Buton from '../../../components/Button'
import videosRepository from '../../../repositories/videos'
import categoriasRepositiry from '../../../repositories/categorias'

function CadatroVideo(){
    const history = useHistory()
    const [categorias, setCategorias] = useState([])
    const {handleChange, values} = useForm({
        titulo: 'Video padão',
        url: 'https://www.youtube.com/watch?v=G4hcT6fUoBw',
        categoria: 'Front End',
    })

    useEffect(() => {
        categoriasRepositiry
            .getAll()
            .then((categorias) => {
                setCategorias(categorias)
            })
    }, [])
    return(
        <PageDefault>
            <h1>Cadastro de video</h1>
            <form onSubmit={(event) =>{
                event.preventDefault()
                const categoriaEscolhida = categorias.find((categoria) => {
                    return categoria.titulo === values.categoria
                })

                videosRepository.create({
                    titulo: values.titulo,
                    url: values.url,
                    categoriaId: categoriaEscolhida.id,
                })
                .then(() => {
                    console.log('Cadastrou com sucesso')
                    history.push('/')
                })
            }}>
                <FormField
                    label="Titulo do Vídeo"
                    name="titulo"
                    value={values.titulo}
                    onChange={handleChange}
                />
                <FormField
                    label="URL"
                    name="url"
                    value={values.url}
                    onChange={handleChange}
                />
                <FormField
                    label="Categoria"
                    name="categoria"
                    value={values.categoria}
                    onChange={handleChange}
                />

                <Buton type="submit">
                    Cadastrar
                </Buton>
            </form>
            <Link to="/cadastro/categoria" >
                Cadastrar Categoria
            </Link>
        </PageDefault>
    )
}

export default CadatroVideo;