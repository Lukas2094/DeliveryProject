import { Flex, Image } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const ContentHeader = styled.header`
    width: 100%;
    height: 62px;

    display: inline-flex;
    align-items: center;
    justify-content: space-between;

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
    z-index: 1;
    margin-top: 20px;
`;

export const Containerinput = styled.div`
    width: 100%;
`;

export const BannerHomeContent = styled.div`
    width: 100%;
    height: 190px;

`;
export const BannerHome = styled(Image)`
    width: 100%;
    height: 100%;
`;