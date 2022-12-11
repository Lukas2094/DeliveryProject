import React from 'react';
import {
Container,
ContainerLogo,
Content,
ContentText,
Logo,
Redirect,
Texts,
TextPass,
TextPassDescription
} from '../../../styles/login';

import {AiOutlineArrowLeft} from 'react-icons/ai'
import DivisionSection from '../../../src/components/Divider';
import Inputs from '../../../src/components/Inputs';
import Button from '../../../src/components/Buttons';
import { GetServerSideProps } from 'next';


export default function Login() {


  return (
    <Container>
          
        <Redirect href='./'>
            <AiOutlineArrowLeft color='orange'/>  
        </Redirect>

        <ContainerLogo>
           <Logo src='https://assets.turbologo.com/blog/pt/2019/07/19133832/mcdonalds-history-958x575.jpg'/>   
        </ContainerLogo>
          
          <ContentText>
              <TextPass as={'span'} margin={"10px 0px"}>
                Esqueceu sua senha?
              </TextPass>
          </ContentText>

          <ContentText>
              <TextPassDescription as={'p'}>
                Preencha o campo com seu e-mail e receba as instruções necessárias para redefinir  a sua senha.
              </TextPassDescription>
          </ContentText>
          

          <DivisionSection />

          <Inputs
              placeholderDescription={'Digite seu e-mail'}
              name={''}
              iColor={'orange'}
              password={'text'}
          />

          <Button
              redirect=""
              description='Enviar'
              action=''
              color='white'
              bg={'orange'}
          />

    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {

    return {
      props: {
         
      },
    };
  };
