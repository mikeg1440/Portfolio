import React from 'react'
import styled from 'styled-components';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default function SocialWidget() {
    return (
        <SocialContainer>
            <IconContainer>
                <TwitterIcon color="primary" />
            </IconContainer>

            <IconContainer>
                <FacebookIcon color="primary" />
            </IconContainer>
            
            <IconContainer>
                <InstagramIcon color="primary" />
            </IconContainer>
            
            <IconContainer>
                <LinkedInIcon color="primary" />
            </IconContainer>
            
        </SocialContainer>
    )
}

const SocialContainer = styled.div` 
    position: fixed;
    right: 10px;
    bottom: 10px;
    width: 70px;
    height: 300px;
    display: flex:
    flex-direction: column;
`

const IconContainer = styled.div` 
    background: #000000ba;  
    padding: 1rem;
    display: flex;
    justify-content: center;
    margin-top: 1rem;
`