import React, { useState } from 'react'
import styled from 'styled-components'
import { CloudArrowUp } from "@phosphor-icons/react";

const StyledUpload = styled.section`

    background: #F3F0FF;
    border: 1px dashed #C1B2FA;
    border-radius: .8rem;


    text-align: center;
    padding: 2.8rem 0 3.2rem;
    position: relative;

    h3{
        font-weight: 700;
        color: #7A5FEC;
        font-size: 1.6rem;

        margin-top: 1.2rem;
    }

    p{
        font-weight: 400;
        color: #746E82;
        font-size: 1.4rem;
    }

    input{
        all: unset;
        opacity: 0;
        inset: 0;
        position: absolute;
    }

    .dragover{
        background: #EBE6FF;
    }
`;

export default function Upload() {

    return (
        <StyledUpload >
            <CloudArrowUp size={"4.8rem"} color='#7C3AED'/>
            <h3>Importe seus arquivos</h3>
            <p>Arraste ou clique para fazer upload</p>
            <input type="file" />

        </StyledUpload>
    )
}
