import React from 'react'
import { FormFieldWrapper, Label, Input } from './styles'


export default function FormField ({label, type, value, name, onChange}){
    const idTypeTextArea = type === 'textarea'
    const tag = idTypeTextArea ? 'textarea' : 'input'
    return(
        <FormFieldWrapper>
            <Label>
                <Input 
                    as={tag}
                    type={type} 
                    value={value}
                    name={name}
                    onChange={onChange}
                    />
                    
                    <Label.Text>
                        {label}
                    </Label.Text>
                    {/* <datalist>
                        <option value="Front End" />
                        <option value="Back End" />
                        <option value="Data Science e Inteligência Artificial" />
                        <option value="Filmes" />
                        <option value="Games" />
                    </datalist> */}
            </Label>
        </FormFieldWrapper>
    )
}