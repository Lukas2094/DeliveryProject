import React from 'react';
import Button from '../Buttons';
import { ContainSubTotal , 
    ContainValue , 
    SubTotal , FormButtom , } from './styles';

interface Subtotal {
    subtotal: string;
    frete: string;
}

export default function SubTotalCards({
    subtotal,
    frete,
} : Subtotal) {
  return (
    <ContainSubTotal>
        <ContainValue>
            <SubTotal>SubTotal <span>R$ 102,00{subtotal}</span></SubTotal>
            <SubTotal>Frete    <span> -- {frete}</span></SubTotal>
        </ContainValue>
            <SubTotal>Total <span>R$ 102,00{subtotal}</span></SubTotal>

        <FormButtom action='' name=''>
            <Button
                redirect=""
                description='Confirmar'
                action=''
                color='white'
                bg={'orange'}
            />
        </FormButtom>

</ContainSubTotal>
  );
}

