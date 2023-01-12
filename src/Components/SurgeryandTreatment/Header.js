import React from "react";
import styled from "styled-components";
import puppy from '../../Assets/puppy.jpg'

function Header(){
    return(
        <div>
            <TitleText>Surgery and Treatment</TitleText>
            <ProfileWrapper>
                <ProfileImageWrapper>
                    <ProfileImage src={puppy}/>
                </ProfileImageWrapper>
                <ProfileTextWrapper>
                    <ProfileName>
                        MACIE TOFEL
                    </ProfileName>
                    <ProfileDetails>
                        <p>age 5, lives in United States</p>
                    </ProfileDetails>
                </ProfileTextWrapper>
            </ProfileWrapper>
        </div>
    )
}

export default Header;






const TitleText=styled.h1`
   
    font-weight: 500;
    line-height: 23px;
    color: #FFFFFF;
    font-family: 'Poppins',sans-serif;
    font-size: 22px;
    font-weight: 500;

    position: absolute;
    width: 405px;
    height: 68px;
    left: 100px;
    top: 85px;
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);

`

const ProfileWrapper=styled.div`
    position: absolute;
    width: 254px;
    height: 138px;
    right: 87px;
    top: 28px;
    display: grid;
    grid-template-columns: 1fr 3fr;
 

`
const ProfileImageWrapper=styled.div`
    
`
const ProfileImage=styled.img`
    width:68px;
    height: 68px;
    border-radius: 300px;
`
const ProfileTextWrapper=styled.div`
    margin-left: 20px;
    width:200px;
`
const ProfileName=styled.h2`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    color:#ffffff;
`
const ProfileDetails=styled.h3`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
    color: #ffffff;
    
`