import { Flex, Image, Text, Link, Input, Button } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const Container = styled(Flex)`
      width: 100%;
      height: 100%;
      flex-direction: column;
`;

export const Content = styled(Flex)`
      width: 100%;
      height: auto;
      
      flex-direction:column;

      padding: 0 15px;
      margin: 0 auto;
      margin-top: 15px;

      @media(min-width: 1024px){
        max-width: 600px;
      }
`;

export const Redirects = styled.div`
    width: 100%;
    height: 65px;


    display: flex;
    align-items: center;
    justify-content: flex-start;

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

    margin-left: 100px;
`;

export const ContainItems = styled.div`
    width: 100%;
    height: 42px;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    border-bottom: 2px solid #cecece;
`;

export const CountItems = styled(Text)`
    font-family: 'Arial';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: #1B1B1B;
`;

export const ContentTotal = styled(Flex)`
    width: 100%;
    height: auto;

    flex-direction: column;

    margin: 20px 0px;
    padding: 0 15px;

    /* border: 1px solid red; */

    @media(min-width: 1024px) {
        max-width: 600px;
        margin: 0 auto;
    }
`;

export const DescriptionFrete = styled(Text)`
    font-family: 'Arial';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #6A7D8B;

    margin: 15px 0px;
`;

export const ContainFrete = styled(Flex)`
    width: 100%;
    height: auto;

    flex-direction: row;
    align-items: center;

    justify-content: space-between;
`;

export const InputFrete = styled(Input)`
    width: 260px;
    height: 56px;

    border: 2px solid #FB9400;
    border-radius: 8px;


    @media(min-width: 1024px){
        width: 70%;
    }

`;

export const Confirm = styled(Button)`
    width: 56px;
    height: 56px;

    text-align: center;

    border: 2px solid #FB9400;
    border-radius: 8px;
`;

export const ContentAddress = styled(Flex)`
    width: 100%;
    height: 94px;

    padding: 10px 15px;
    margin: 10px 0px;

    flex-direction: column;
    justify-content: space-around;

    background: #f5f5f5;
    border-radius: 8px;
`;

export const Address = styled(Text)`
    font-family: 'Arial';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;

    color: #6A7D8B;

`;

export const ContentSend = styled(Flex)`
    width: 100%;
    
    justify-content: space-between;
    align-items: center;
`;

export const SendFrete = styled(Text)`
    font-family: 'Arial';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: #000000;
`;

export const ValueFrete = styled(Text)`
    font-family: 'Arial';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;

    color: #FB9400;

`;

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