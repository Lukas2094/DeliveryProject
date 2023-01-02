import { ContainerMain } from "../styles/theme";
import { ContentHeader , 
  TextsContent , 
  Welcome , 
  Texts , 
  ContentMenuBurguer , 
  Containerinput , 
  ContentSearch , 
  BannerHomeContent , 
  BannerHome , 
  ContainerCards , 
  ContainDeskp , 
  Searchtext ,} from "../styles/home";
import {BiMenu} from 'react-icons/bi';
import {AiOutlineSearch} from 'react-icons/ai'
import { Select } from '@chakra-ui/react'
import Inputs from "../src/components/Inputs";
import Cards from "../src/components/Cards";
import Header from "../src/components/Header";

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


           <Header logo="https://cdn-icons-png.flaticon.com/512/732/732217.png"/>


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
               <BannerHome src="https://www.mcdonalds.com.br/uploads/592_3_1_banner_home_1440x650_cb1d3e6863.png"/>
           </BannerHomeContent>

           <ContainDeskp>
              <Searchtext>Pesquise o seu Hamburguer favorito!</Searchtext>

                <ContentSearch >
                  <AiOutlineSearch size={'25px'} color={'orange'}/>
                </ContentSearch>
                <Inputs
                    placeholderDescription={'Digite o nome do Burger'}
                    name={''}
                    iColor={'orange'}
                    password={'text'}
                />
               
                <Select size={'lg'} placeholder='Todos os hamburgueres' background={'white'}>
                  <option value='option1'>Option 1</option>
                  <option value='option2'>Option 2</option>
                  <option value='option3'>Option 3</option>
                </Select>

           </ContainDeskp>
           

           <ContainerCards>
               <Cards 
                count={1}
                format="Tradicional"
                image={'https://classic.exame.com/wp-content/uploads/2020/05/Vinil-Burger.jpg?quality=70&strip=info&w=1024'}
                description={'Texas Burger'}
                price={'R$ 25,50'}
               />
               
               <Cards 
                count={2}
                format="Tradicional"
                image={'https://classic.exame.com/wp-content/uploads/2020/05/Vinil-Burger.jpg?quality=70&strip=info&w=1024'}
                description={'Texas Burger'}
                price={'R$ 25,50'}
               />

              <Cards 
                count={2}
                format="Tradicional"
                image={'https://classic.exame.com/wp-content/uploads/2020/05/Vinil-Burger.jpg?quality=70&strip=info&w=1024'}
                description={'Texas Burger'}
                price={'R$ 25,50'}
               />

              <Cards 
                count={2}
                format="Tradicional"
                image={'https://classic.exame.com/wp-content/uploads/2020/05/Vinil-Burger.jpg?quality=70&strip=info&w=1024'}
                description={'Texas Burger'}
                price={'R$ 25,50'}
               />

              <Cards 
                count={2}
                format="Tradicional"
                image={'https://classic.exame.com/wp-content/uploads/2020/05/Vinil-Burger.jpg?quality=70&strip=info&w=1024'}
                description={'Texas Burger'}
                price={'R$ 25,50'}
               />

              <Cards 
                count={2}
                format="Tradicional"
                image={'https://classic.exame.com/wp-content/uploads/2020/05/Vinil-Burger.jpg?quality=70&strip=info&w=1024'}
                description={'Texas Burger'}
                price={'R$ 25,50'}
               />
               
           </ContainerCards>
      </ContainerMain>

  )
}
