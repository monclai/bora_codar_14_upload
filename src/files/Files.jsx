import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { File, X, ArrowCounterClockwise } from "@phosphor-icons/react";

const StylesFiles = styled.section`
    padding: .8rem;

    background: #fff;
    box-shadow: .0rem .4rem 1.6rem #EAE2FD;
    border-radius: .8rem;

    display: flex;
    gap: 12px;

    position: relative;

    --icon-bg: #eee;
    --icon-color: blue;
    --progress-color: #000;
    --progress-text: #999;

    .icon{
        /* background: var(--icon-bg); */
        background: ${({ iconBg }) => iconBg};
        border-radius: .4rem;

        padding: 1.6rem 1.2rem;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .icon .svg:fill{
        font-size: 2.4rem;
        fill: var(--icon-color);
    }

    .info{
        flex: 1;
    }

    .filename{
        font-weight: 700;
        font-size: 1.4rem;
        color: #575361;
    }

    .filesize{
        font-weight: 500;
        font-size: 12px;
        color: #857E95;
    }

    .bar{
        display: flex;
        align-items: center;
        gap: .8rem;

        line-height: 0;
        margin-top: 4px;
    }

    progress{
        flex: 1;
        -webkit-appearance: none;
        appearance: none;
        height: .8rem;
        border-radius: 99.9rem;
        overflow: hidden;
    }

    progress::-webkit-progress-bar{
        background: #E3E3ED;
    }

    progress::-webkit-progress-value{
        /* background: var(--progress-color); */
        background: ${({progress}) => progress};
    }

    .bar span{
        font-weight: 500;
        font-size: 1.2rem;
        color: var(--progress-text);
    }

    .action{
        position: absolute;
        top: .8rem;
        right: .8rem;

        cursor: pointer;
    }

`;


export default function Files({ name, size, parcial_size, finishing, mode }) {

    const [cor, setCor] = useState("red");
    const [bgCor, setBgCor] = useState("red");
    const [iconAction, setIconAction] = useState("");
    const [progressBar, setProgressBar] = useState("#000");

    useEffect(() => {
        setIconAction(mode)
        if (mode === "uploading") {
            setCor("#AC96E4");
            setBgCor("#E9E3F8");
            setProgressBar("linear-gradient(90deg, rgba(58, 97, 237, 0.52) 0%, #7C3AED 100%)");
        }
        else if (mode == "done") {
            setCor("#73B172");
            setBgCor("#DAF2D9");
            setProgressBar("#73B172");
        }
        else if (mode == "error") {
            setCor("#E36363");
            setBgCor("#F2D9D9");
            setProgressBar("#E3E3ED");
        }
    }, [mode, parcial_size])


    return (
        <StylesFiles iconBg={bgCor} progress={progressBar}>

            <div className="icon">
                <File size={32} weight="fill" color={cor} />
            </div>
            <div className="info">
                <div className="filename">
                    {name}
                </div>
                <div className="filesize">
                    {mode === 'uploading' ? (
                        <div>
                            <span> {parcial_size} </span>
                            <span> / {size} </span>
                        </div>
                    ) : (
                        <span>{size}</span>
                    )}
                </div>
                <div className="bar">
                    <progress value={finishing} max="100"></progress>
                    {mode != 'error' ? (<span>{finishing}%</span>) : (<span style={{ color: "#E36363" }}>error</span>)}
                </div>
            </div>
            <div className="action">
                {
                    iconAction == "uploading" ? (
                        <X size={24} color='#794FED' />
                    ) : iconAction == "error" ? (
                        <ArrowCounterClockwise size={24} />
                    ) : null
                }
            </div>


        </StylesFiles>
    )
}
