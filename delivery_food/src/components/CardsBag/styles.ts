import { Flex, Image ,Text , Link , Button} from '@chakra-ui/react';
import styled from '@emotion/styled';

export const Container = styled(Flex)`
    width: 100%;
    height: 85px;

    margin: 5px 0px;

    align-items:center;
    justify-content: flex-start;

    padding: 10px;

    border-bottom: 1px solid #cecece;

    @media(min-width: 1024px) {
        justify-content: space-between;
    }
`;

export const ContentImage = styled.div`
    width: 75px;
    height: 75px;
    margin-right: 10px;
`;

export const Img = styled(Image)`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const ContentTypes = styled.div`
    width: 35%;
    height: auto;
    margin-right: 10px;
`;

export const Types = styled(Text)`
    font-family: 'Arial';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 15px;
    /* identical to box height */
    color: rgba(27, 27, 27, 0.5);
`;

export const Description = styled(Text)`
    font-family: 'Arial';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 19px;

    white-space: nowrap;                  
    overflow: hidden; 
    text-overflow: ellipsis;

    color: #1B1B1B;
`;

export const Prices = styled(Text)`
    font-family: 'Arial';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;

    color: #FB9400;

`;

export const ContentCount = styled.div`
    width: 50%;
    height: auto;

    display: inline-flex;

    @media(min-width: 1024px) {
        width: auto;
    }
`;

export const Buttonremove = styled(Button)`
    width: 43px;
    height: 42px;

    display: flex;
    align-items:center;
    justify-content: center;

    background: #F2F4F5;
    border-radius: 0px 4px 4px 0px;
    transform: rotate(180deg);

    font-family: 'Arial';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    text-align: center;

    color: #96A3AB;
`;

export const ContainContador = styled(Flex)`
    width: 40px;
    height: 42px;

    align-items: center;
    justify-content: center;

    border: 1px solid #F2F4F5;
`;

export const Contador = styled(Text)`
    font-family: 'Arial';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-align: center;

    color: #FB9400;

`;

export const ButtoAdd = styled(Button)`
        width: 43px;
    height: 42px;

    display: flex;
    align-items:center;
    justify-content: center;

    background: #FB9400;
    border-radius: 0px 4px 4px 0px;
    transform: rotate(180deg);

    font-family: 'Arial';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    text-align: center;

    color: #FFFFFF;

`;