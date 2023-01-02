import { Container } from './../../../styles/login';
import { Image, Button, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';


export const InfoCard = styled.div`
    width: 150px;
    height: auto;

    padding: 10px;
    margin: 10px 0px;

    background: #FFFFFF;
    box-shadow: 0px 8px 40px rgba(0, 0, 0, 0.08);
    border-radius: 8px;

    display: flex;
    align-items: center;
    flex-direction: column;

    @media (min-width: 1024px) {
        width: 190px;
    }
`;

export const ContainerBurguer = styled.div`
    width: 106px;
    height: 120px;

    @media (min-width: 1024px) {
        width: 100%;
    }
`;

export const Imageburguer = styled(Image)`
    width: 100%;
    height: 100%;
    /* object-fit: contain; */

`;

export const FormatburguerContent = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    margin: 10px 0px;
`

export const Formatburguer = styled.span`
    font-family: 'Arial';
    text-overflow: ellipsis;
    font-style: normal;
    font-weight: 500;
    font-size: 8px;
    line-height: 10px;
    color: #1B1B1B;
`

export const DescriptionBurguer = styled.span`
    font-family: 'Arial';
    text-overflow: ellipsis;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #1B1B1B;
`

export const ContentPrice = styled.div`
    width: 100%;
    height: auto;
    
`;

export const PriceBurguer = styled.span`
    font-family: 'Arial';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    color: #FB9400;
`;

export const ContainerContador = styled.div`
    width: 100%;
    height: 70px;

    display: flex;
    align-items: center;

    @media (min-width: 1024px) {
        justify-content: center;
    }
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
