import React from 'react';

import { Container , 
    ContentImage , 
    Img , 
    ContentTypes , 
    Types , 
    Description , Prices , ContentCount, Buttonremove, ContainContador, Contador, ButtoAdd} from './styles';

interface CardBag {
    image:string;
    type: string;
    title: string;
    price: string;
    count: number;
}

export default function CardsBag({
    image,
    type,
    title,
    price,
    count,  
} : CardBag) {
  return (
      <Container>
         <ContentImage>
            <Img src={image}/>
         </ContentImage>

         <ContentTypes>
            <Types as={'p'}>{type}</Types>

            <Description as={'span'}>{title}</Description>

            <Prices as={'span'}>{price}</Prices>
         </ContentTypes>

         <ContentCount>
            <Buttonremove> - </Buttonremove>

            <ContainContador>
                <Contador>{count}</Contador>
            </ContainContador>

            <ButtoAdd _focus={{outline: 'none !important' , background: '#FB9400 !important'}} _hover={{background: '#FB9400!important'}}> + </ButtoAdd>
         </ContentCount>




      </Container>
  );
}
