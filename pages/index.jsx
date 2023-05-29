import React, { useEffect } from 'react'
import styled from 'styled-components'
import Upload from '../src/upload/Upload';
import Files from '../src/files/Files';

const StyledMain = styled.section`



    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;

    max-width: 44rem;
    width: 90%;
    margin: auto;

    .files{
        margin-top: 20px;
        display: grid;
        gap: 12px;
    }


`;

export default function index() {


    return (
        <StyledMain>
            <Upload />
            <div className="files">
                <Files name="Scann_158.pdf" size="74MB" parcial_size="30MB" finishing="46" mode="uploading"/>
                <Files name="README.rm" size="12KB" parcial_size="" finishing="100" mode="done"/>
                <Files name="picture1.jpeg" size="6.3MB" parcial_size="" finishing="0" mode="error"/>
                {/* <Files/> */}
            </div>
        </StyledMain>
    )
}
