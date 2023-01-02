import { ContainerMain } from "../styles/theme";
import { ContentHeader , 
  TextsContent , 
  Welcome , Texts , ContentMenuBurguer , Containerinput , ContentSearch , BannerHomeContent , BannerHome} from "../styles/home";
import {BiMenu} from 'react-icons/bi';
import {AiOutlineSearch} from 'react-icons/ai'
import Inputs from "../src/components/Inputs";
export default function Home() {
  return (
      <ContainerMain>
           <ContentHeader>
              <TextsContent>
                 <Welcome>Seja Bem-Vindo</Welcome>
                 <Texts>O que deseja pra hoje?</Texts>
              </TextsContent>

              <ContentMenuBurguer>
                <BiMenu size={'25px'} color={'orange'}/>
              </ContentMenuBurguer>           
           </ContentHeader>


           <Containerinput>
                <ContentSearch >
                  <AiOutlineSearch size={'25px'} color={'orange'}/>
                </ContentSearch>
                <Inputs
                    placeholderDescription={'Digite o nome do Burger'}
                    name={''}
                    iColor={'orange'}
                    password={'text'}
                />
           </Containerinput>

           <BannerHomeContent>
               <BannerHome src="https://www.saboravida.com.br/wp-content/uploads/2022/01/mcdonalds-brinquedos-do-mclanche-feliz-1.webp"/>
           </BannerHomeContent>
      </ContainerMain>

  )
}
