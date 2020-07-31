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
            </Label>
        </FormFieldWrapper>
    )
}