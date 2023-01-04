import { Button, Flex, Image, Link, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const Container = styled(Flex)`
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: 1024px) {
        max-width: 600px;
        margin: 0 auto;
    };
`;

export const Redirects = styled.div`
    width: 100%;
    height: 65px;


    display: flex;
    align-items: center;
    justify-content: space-between;

    background: #FB9400;

    @media(min-width: 1024px){
        display: none;
    }
`;

export const Return = styled(Link)`
    width: 48px;
    height: 48px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 5px;
`;

export const Title = styled(Text)`
    font-family: 'Arial';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    color: #FFFFFF;
`;

export const ContainerProductImage = styled.div`
    width: 100%;
    height: 282px;
    
    background: #f5f5f5;


    border: 1px solid red;
`;

export const ContentImage = styled(Image)`
    width: 100%;
    height: 100%;

    object-fit: cover;
`;

export const DescriptionsContent = styled.div`
    width: 100%;
    height: auto;
    padding: 0 15px;
    border-bottom: 2px solid orange;
`;

export const DescriptionMini = styled(Text)`
    font-family: 'Arial';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
`;

export const Description = styled(Text)`
    font-family: 'Arial';
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 48px;
    
    margin: 0px 0px 10px 0;
`;


export const ContentConteudo = styled(Flex)`
    width: 100%;
    height: 72px;
    padding: 0 15px;
    margin: 15px 0px;

    @media(min-width: 1024px){
        margin: 0px;
    }

`;

export const Conteudo = styled(Text)`
    width: 100%;
    height: 100%;

    text-overflow: ellipsis;
    overflow: hidden;


    font-family: 'Arial';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: rgba(27, 27, 27, 0.5);
`;

export const ContentPrices = styled(Flex)`
    width: 100%;
    height: 75px;

    align-items: center;
    justify-content: space-between;
    
    padding: 0 15px;
`;

export const ContentCount = styled.div`
    width: auto;
    height: auto;

    display: inline-flex;
    align-items: center;
`;

export const Buttonremove = styled(Button)`
    width: 20px;

    background: #F2F4F5;
    border-radius: 0px 4px 4px 0px;
    transform: rotate(180deg);

    font-family: 'Arial';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 58px;
    text-align: center;
    color: #96A3AB;
`;

export const Buttonadd = styled(Button)`
    width: 20px;
    background: #FB9400 !important;
    border-radius: 0px 4px 4px 0px;
    transform: rotate(180deg);
    font-family: 'Arial';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 58px;
    text-align: center;
    outline: none !important;
    color: #FFF;

`;

export const CountAdd = styled(Text)`
    width: 40px;

    font-family: 'Arial';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 58px;
    text-align: center;
`;

export const Price = styled(Text)`
    font-family: 'Arial';
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 48px;
    text-align: right;

    color: #FB9400;
`;

export const ContentAdd = styled.div`
    width: 100%;
    height: auto;

    margin: 15px 0px;

    padding: 0px 15px;

`;