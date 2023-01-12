import React from "react";
import styled from 'styled-components'
import Header from "../Components/SurgeryandTreatment/Header";
import TableHead from "../Components/SurgeryandTreatment/TableHead";

function SurgeryPage(){
    return(
        <Wrapper>
            <Header/>
            <TableHead/>
        </Wrapper>
    )
}

export default SurgeryPage;

const Wrapper=styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,700;1,200;1,300;1,400;1,500;1,600;1,700;1,900&family=Raleway:ital,wght@0,200;0,500;0,600;0,700;0,900;1,300&display=swap');
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15), 0px 50px 100px rgba(0, 75, 117, 0.3);
    backdrop-filter: blur(20px);
    border-radius: 37px;
    margin: 16px;
`