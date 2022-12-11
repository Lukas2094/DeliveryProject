import React from 'react'
import { InputLog, ContainerLoginForm } from './styles'

interface Inputs {
  name: string;
  iColor?: string;
  placeholderDescription?: string;
  password: string;
}

export default function Inputs({
  name,
  iColor,
  placeholderDescription,
  password
} : Inputs ) {
  return (
    <ContainerLoginForm name={name} action={name}>
      <InputLog
        _focus={{ outline: 'none', border: 'none' }}
        placeholder={placeholderDescription}
        color={iColor}
        type={password}
      />
    </ContainerLoginForm>
  )
}
