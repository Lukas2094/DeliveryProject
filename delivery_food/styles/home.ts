import { Flex, Image ,Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const ContentHeader = styled.header`
    width: 100%;
    height: 62px;

    display: inline-flex;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 1024px) {
        display: none;
    }

`;

export const TextsContent = styled(Flex)`
    width: 60%;

    flex-direction: column;
    align-items: center;
    margin: 0px 10px;
`;

export const Welcome = styled.span`
    font-family: 'Arial';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    color: #1B1B1B;
`;

export const Texts = styled.a`
    font-family: 'Arial';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: rgba(151, 151, 151, 0.8);
`;

export const ContentMenuBurguer = styled.button`
    width: auto;
    margin: 0px 20px;

`;

export const ContentSearch = styled.div`
    position: absolute;
    right: 20px;
    z-index: 50;
    margin-top: 20px;

    @media (min-width: 1024px) {
        margin-top: 70px;
    }
`;

export const Containerinput = styled.div`
    width: 100%;

    @media (min-width: 1024px) {
        display: none;
    }
`;

export const BannerHomeContent = styled.div`
    width: 100%;
    height: 190px;
 

    @media (min-width: 1024px) {
        height: 725px;  
        margin-top: 20px; 
    }
`;
export const BannerHome = styled(Image)`
    width: 100%;
    height: 100%;

    border-radius: 4px;
`;


export const ContainerCards = styled(Flex)`
    width: 100%;
    height: auto;

    margin: 20px 0px;
    padding: 0 10px;
    overflow-x: scroll;

    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 1024px) {
        width: 60%;
        margin: 0 auto;
        margin-bottom: 90px;
        overflow-x: auto;
    }
`;

export const ContainDeskp = styled.div`
    width: 100%;
    height: auto;

    margin: 20px 0px;

    display: flex;
    flex-direction: column;

    @media (max-width: 1024px) {
        display: none;
    }

`;

export const Searchtext = styled(Text)`
    font-family: 'Arial';
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 39px;

    color: #000000;

`;