import styled from '@emotion/styled';

export const ContainerMain = styled.main`
    width: 100%;
    height: auto;
    max-width: 1050px;

    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;

    background-color: #f5f5f5;

    @media (max-width: 768px) {
        padding: 0 10px;
        max-width: 100%;
    }
`;