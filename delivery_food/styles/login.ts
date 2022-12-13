import styled from '@emotion/styled';
import { Image , Text , Input } from '@chakra-ui/react';

export const Container = styled.div`
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 30px 30px;


    @media (min-width: 1024px) {
        max-width: 600px;
        margin: 0 auto;
    }

`;

export const Redirect = styled.a`
    width: 100%;
    height: auto;

    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export const ContainerLogo = styled.div`
    width: 100%;
    height: 47px;

    margin: 20px 0px;

    display: flex;
    align-items: center;
    justify-content: center;

`;

export const Logo = styled(Image)`
    width: auto;
    height: 100%;
    object-fit: cover;
`;

export const ContentText = styled.div`
   width: 100%;
   height: auto;

   display: flex;
   align-items: center;
   justify-content: center;
`;

export const Texts = styled(Text)`
   width: 60%;
   text-overflow: ellipsis;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 18px;
   line-height: 22px;
   text-align: center;   
   color: rgba(27, 27, 27, 0.8);

`;

export const Content = styled.div`
   width: 100%;
   height: auto;

   display: flex;
   align-items: center;
   justify-content: center;
   margin: 20px 0px;

   p {
    font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 19px;
   text-align: center;
   color: #1B1B1B;
   }

   a {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: orange;
    text-decoration: underline;
   }

`;
 
export const TextPass = styled(Text)`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;


    text-align: center;

`;

export const TextPassDescription = styled(Text)`
    width: 80%;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;

    color: rgba(27, 27, 27, 0.8);

`;