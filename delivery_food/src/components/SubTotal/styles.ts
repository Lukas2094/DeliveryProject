import { Flex, Image ,Text , Link , Button} from '@chakra-ui/react';
import styled from '@emotion/styled';

export const ContainSubTotal = styled(Flex)`
    width: 100%;
    height: auto;

    flex-direction: column;

    background: #F9F9FB;
    border-radius: 8px;

    padding: 20px;

`;

export const ContainValue = styled.div`
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;

`;

export const SubTotal = styled(Text)`
    width: 100%;
    height: 52px;

    margin: 10px 0px;

    display: inline-flex;
    justify-content: space-between;

    font-family: 'Arial';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;

    color: #000000;

    border-bottom: 1px solid #cecece;

    span {
        font-family: 'Arial';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;

        color: #000000;
    }
`;

export const FormButtom = styled.form`
        width: 100%;
        height: auto;

        margin: 10px 0px;
`;