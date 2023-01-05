import styled from '@emotion/styled';
import { Flex, Image , Link } from '@chakra-ui/react';
export const HeaderDeskt = styled.nav`
    width: 100%;
    height: 100px;


    display: flex;
    align-items: center;

    border-bottom: 1px solid #c8c8c8;

    @media (max-width: 1024px) {
        display: none;
    }
`;


export const ContainerImage = styled(Link)`
    width: 208px;
    height: 70px;
`;

export const ImageLogo = styled(Image)`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

export const ContainerListMenu = styled.ul`
    width: 60%;

    margin: 0px 30px;

    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const ListMenu = styled(Link)`
    width: auto;
    list-style: none;

    font-family: 'Arial';
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 34px;
    color: #000000;
`;

export const ContainButton = styled.div`
    width: 150px;
    height:auto;
`;