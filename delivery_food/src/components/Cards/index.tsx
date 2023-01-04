import React from 'react'
import { InfoCard , 
    ContainerBurguer , 
    Imageburguer , 
    FormatburguerContent , 
    Formatburguer , 
    DescriptionBurguer , 
    ContentPrice , 
    PriceBurguer , ContainerContador, Buttonremove, CountAdd, Buttonadd } from './styles'

interface Card {
    image: string;
    format: string;
    description: string;
    price: string;
    count: number;
}

export default function Cards({
    image,
    format,
    description, 
    price,
    count,
} : Card) {
  return (
    <InfoCard>
         <ContainerBurguer>
            <a href="/Products">
              <Imageburguer src={image}/>
            </a>      
         </ContainerBurguer>

        <FormatburguerContent>
            <Formatburguer>{format}</Formatburguer>

            <DescriptionBurguer>{description}</DescriptionBurguer>
        </FormatburguerContent>

        <ContentPrice>
           <PriceBurguer>
               {price}
           </PriceBurguer>
        </ContentPrice>


        <ContainerContador>
            <Buttonremove > - </Buttonremove>

            <CountAdd>{count}</CountAdd>

            <Buttonadd _focus={{outline: 'none !important' , background: '#FB9400 !important'}} _hover={{background: '#FB9400!important'}}> + </Buttonadd>
        </ContainerContador>

    </InfoCard>
  )
}
