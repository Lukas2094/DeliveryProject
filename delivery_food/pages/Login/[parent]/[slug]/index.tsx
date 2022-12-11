import React from 'react';
import {
Container,
ContainerLogo,
Content,
ContentText,
Logo,
Redirect,
Texts
} from '../../../../styles/login';

import {AiOutlineArrowLeft} from 'react-icons/ai'
import DivisionSection from '../../../../src/components/Divider';
import Inputs from '../../../../src/components/Inputs';
import Button from '../../../../src/components/Buttons';
import { Link } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';


export default function Login() {


  return (
    <Container>
          
        <Redirect href='/Login'>
            <AiOutlineArrowLeft color='orange'/>  
        </Redirect>

        <ContainerLogo>
           <Logo src='https://assets.turbologo.com/blog/pt/2019/07/19133832/mcdonalds-history-958x575.jpg'/>   
        </ContainerLogo>
          
          <ContentText>
              <Texts as={'span'}>
                Use suas credenciais para realizar o login.
              </Texts>
          </ContentText>
          

          <DivisionSection />


          <Inputs
              placeholderDescription={'Digite seu nome'}
              name={''}
              iColor={'orange'}
              password={'text'}
          />

          <Inputs
              placeholderDescription={'Digite seu e-mail'}
              name={''}
              iColor={'orange'}
              password={'text'}
          />

          <Inputs
              placeholderDescription={'Digite sua Senha'}
              name={''}
              iColor={'orange'}
              password={'password'}
          />

          <Button
              redirect="/Login"
              description='Cadastrar'
              action=''
              color='white'
              bg={'orange'}
          />

          <Content>
              <p>
                        Já tem cadastro? <Link href="/Login/"> Fazer Login</Link>   
              </p>
          </Content>

    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {

    return {
      props: {
         
      },
    };
  };
