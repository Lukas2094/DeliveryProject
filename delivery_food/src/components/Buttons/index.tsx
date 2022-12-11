import React from 'react'
import { ContainerButton, Buttons } from './styles'

interface Button {
  action: string;
  description: string;
  color: string;
  bg: string;
  redirect: string;
}

export default function Button({
  action,
  description,
  color,
  bg,
  redirect,
} : Button) {
  return (
    <ContainerButton action={action} name={action}>
    
      <Buttons backgroundColor={bg}
        color={color}
        _focus={{outline: 'none' ,  border: 'none'}}
          type={'submit'} >
        <a href={redirect} style={{width: '100%'}}>  
          {description}
        </a>
        </Buttons>

    </ContainerButton>
  )
}
