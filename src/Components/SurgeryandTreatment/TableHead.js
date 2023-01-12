import React from "react";
import styled from "styled-components";


function TableHead(){

    return(
        <MainWrapper>
        <Wrapper>
            <Title></Title>
            <Title>Pet Name</Title>
            <Title>Surgery Date</Title>
            <Title>Vet Name</Title>
            <Title>Surgery Type</Title>
            
        </Wrapper>
        <Plus>
            <Text>
                +
            </Text>
        </Plus>
        </MainWrapper>
    )
}

export default TableHead;

const MainWrapper=styled.div`
    display: grid;
    grid-template-columns: 10fr 1fr;
`
const Wrapper=styled.div`
    display: grid;
    grid-template-columns:1fr 1fr 1fr 1fr 1fr;
    position: absolute;
    top:135px;
    left:100px;
    width:75%;
    background: rgba(255, 255, 255, 0.3);
    height: 81px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
    

`

const Title=styled.h1`
    color: #ffffff;
    font-family: 'Poppins',sans-serif;
    text-align: center;
    justify-content: center;
    margin: auto;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    margin-right: 40px;
`
const Plus=styled.div`
    background: rgba(255, 255, 255, 0.3);
    height: 81px;
    position: absolute;
    top:135px;
    right:90px;
    width:91px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
    :hover{
        cursor: pointer;
    }

`
const Text=styled.p`
    text-align: center;
    align-items: center;
    justify-content: center;
    position: absolute;
    top:20px;
    left:34px;
    font-size: 42px;
    font-weight: bolder;
    color: #ffffff;
    
`