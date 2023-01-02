import React from 'react'
import Button from '../Buttons';
import { HeaderDeskt , 
    ContainerImage , 
    ImageLogo , 
    ContainerListMenu , 
    ListMenu , 
    ContainButton} from './style'

interface Logo {
    logo: string;
}

export default function Header({logo} : Logo) {
  return (
    <HeaderDeskt>
        <ContainerImage href='/'>
           <ImageLogo src={logo}/>
        </ContainerImage>


        <ContainerListMenu>
            <ListMenu>Início</ListMenu>
            <ListMenu>Burgers</ListMenu>
            <ListMenu>Serviços</ListMenu>
            <ListMenu>Contato</ListMenu>
        </ContainerListMenu>

        <ContainButton>
                <Button
                    redirect="/Login"
                    description='Login'
                    action=''
                    color='white'
                    bg={'orange'}
                />
        </ContainButton>

    </HeaderDeskt>
  )
}
