import React , {useState} from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import Button from '../../src/components/Buttons';
import CardsBag from '../../src/components/CardsBag';
import Header from '../../src/components/Header';
import SubTotalCards from '../../src/components/SubTotal';

 import { Container , 
    Content , 
    Redirects , 
    Return , 
    Title , 
    ContainItems , 
    CountItems,
    ContentTotal , 
    DescriptionFrete, 
    ContainFrete, 
    InputFrete, 
    Confirm, 
    ContentAddress, 
    Address, 
    ContentSend, 
    SendFrete, 
    ValueFrete,} from '../../styles/bag';
import Fade from 'react-reveal/Fade';    

interface Bags {
    count: string;
    addCart: string;
    frete: string;
    time: string;
    address: string;
    subtotal: string;
}

export default function Bag({
    count,
    addCart,
    frete,
    time,
    address,
    subtotal,
} : Bags)  {


  const [state , setState] = useState(false)

  function revert() {
    setState(!state)
  }

  return (
     <Container>
        <Header logo="https://cdn-icons-png.flaticon.com/512/732/732217.png"/>

        <Redirects>

            <Return href='./'>
            <AiOutlineArrowLeft color='white' size={'25'}/>
            </Return>

            <Title>Sacola</Title>

        </Redirects>

        <Fade top>
        <Content>
           <ContainItems>
               <CountItems>{count}4 itens</CountItems>
           </ContainItems>


           <CardsBag 
             image={'https://thumbs.dreamstime.com/b/hamburguer-fresco-isolado-no-fundo-branco-75723586.jpg'}
             type={'Tradicional'}
             title={'Golden Burger'}
             price={'R$ 25,50'}
             count={2}
           />

            <CardsBag 
             image={'https://thumbs.dreamstime.com/b/hamburguer-fresco-isolado-no-fundo-branco-75723586.jpg'}
             type={'Tradicional'}
             title={'Golden Burger'}
             price={'R$ 25,50'}
             count={2}
           />

            <CardsBag 
             image={'https://thumbs.dreamstime.com/b/hamburguer-fresco-isolado-no-fundo-branco-75723586.jpg'}
             type={'Tradicional'}
             title={'Golden Burger'}
             price={'R$ 25,50'}
             count={2}
           />

            <CardsBag 
             image={'https://thumbs.dreamstime.com/b/hamburguer-fresco-isolado-no-fundo-branco-75723586.jpg'}
             type={'Tradicional'}
             title={'Golden Burger'}
             price={'R$ 25,50'}
             count={2}
           />
        </Content>
    </Fade>

        <ContentTotal>
            <DescriptionFrete>
                Calcular frete e prazo
            </DescriptionFrete>

            <ContainFrete as={'form'}>
                <InputFrete placeholder='Digite seu CEP' name='' value={''}/>

                <Confirm onClick={revert}>OK</Confirm>

            </ContainFrete>
            
            {state == false ? null : (
                <ContentAddress>
                    <Address>
                        {address}  Rua das Flores - Jardins da Serra - Campina Pequena
                    </Address>
                    <ContentSend>
                        <SendFrete>Receba em até 20{time} minutos</SendFrete>
                        <ValueFrete>R$ 12,50{frete}</ValueFrete>
                    </ContentSend>
                </ContentAddress> 
            )}
           
           <SubTotalCards 
            subtotal=''
            frete=''
           />
 
        </ContentTotal>
     </Container>
  );
}

