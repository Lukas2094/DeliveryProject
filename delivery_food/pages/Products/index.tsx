import React from 'react';
import { AiOutlineArrowLeft, AiOutlineHeart } from 'react-icons/ai';
import Button from '../../src/components/Buttons';
import Header from '../../src/components/Header';
import { Container, ContentMain ,
    Redirects , 
    Return,
    Title ,
    ContainerProductImage,
    ContentImage,
    DescriptionsContent , 
    DescriptionMini , 
    Description, 
    ContentConteudo, 
    Conteudo, 
    ContentPrices, 
    Buttonremove, 
    CountAdd, 
    Buttonadd , 
    ContentCount , 
    Price , 
    ContentAdd} from '../../styles/products';


interface TitlesProduct {
    title: string;
    image: string;
    description: string;
    post: string;
    price: string;
    count: string;
}    

export default function Products({
    title,
    image,
    description,
    post,
    price,
    count,
} : TitlesProduct) {
  return (

    <ContentMain>
    <Header logo="https://cdn-icons-png.flaticon.com/512/732/732217.png"/>

      <Container>
        <Redirects>

            <Return href='./'>
               <AiOutlineArrowLeft color='white' size={'25'}/>
            </Return>

            <Title>{title}Produto</Title>


            <Return>
               <AiOutlineHeart color='white' size={'25'}/>
            </Return>

        </Redirects>

        <ContainerProductImage>
             <ContentImage src={image}/>
        </ContainerProductImage>

        <DescriptionsContent>
            <DescriptionMini as={'span'}>
                Tradicional{post}
            </DescriptionMini>

            <Description as={'h2'}>
                Golden Burger{title}
            </Description>
        </DescriptionsContent>

        <ContentConteudo>
            <Conteudo>
                2 Blends de carne de 150g, Queijo Cheddar, Bacon Caramelizado, Salada, Molho da casa, Pão brioche artesanal,{description}
            </Conteudo>
        </ContentConteudo>

        <ContentConteudo style={{height: 'auto'}}>
            <DescriptionMini as={'p'}>
                Quantidade
            </DescriptionMini>
        </ContentConteudo>

        <ContentPrices>

            <ContentCount>
                <Buttonremove> - </Buttonremove>

                <CountAdd>1{count}</CountAdd>

                <Buttonadd _focus={{outline: 'none !important' , background: '#FB9400 !important'}} _hover={{background: '#FB9400!important'}}> + </Buttonadd>
            </ContentCount>

            <Price>R$ 25,50{price}</Price>

        </ContentPrices>

        <ContentAdd>
            <Button
                redirect="/Bag"
                description='Adicionar à sacola'
                action=''
                color='white'
                bg={'orange'}
            />
        </ContentAdd>

      </Container>
    </ContentMain> 
  );
}
