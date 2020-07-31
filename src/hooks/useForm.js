import {useState} from 'react'

export default function useForm(valoresIniciais){
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

    const clearForm = () => {
        setValues(valoresIniciais)
    }

    return{
        values,
        handleChange,
        clearForm,
    }
}