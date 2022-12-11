import React from 'react';
import {
Container,
ContainerLogo,
Content,
ContentText,
Logo,
Redirect,
Texts
} from '../../styles/login';

import {AiOutlineArrowLeft} from 'react-icons/ai'
import DivisionSection from '../../src/components/Divider';
import Inputs from '../../src/components/Inputs';
import Button from '../../src/components/Buttons';
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
              <Texts as={'span'}>
                Use suas credenciais para realizar o login.
              </Texts>
          </ContentText>
          

          <DivisionSection />

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
              redirect=""
              description='Entrar'
              action=''
              color='white'
              bg={'orange'}
          />

          <Content>
              <p>
                  Esqueceu sua senha? <a href="/Login/senha">Clique aqui</a>   
              </p>
          </Content>


          <DivisionSection />


          <Button
              redirect="/Login/profile/cadastrar"
              description='Quero me Cadastrar'
              action=''
              color='orange'
              bg='f5f5f5'
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
