import React from 'react';
import styled from 'styled-components';
import { Button, Slide } from '@material-ui/core';

export default function LandingHeader() {
    return (
        <Slide direction='down' in={true}>

            <LandingContainer>

                <SectionContainer>
                    <p>Hello, I'm <Highlight>Michael Gaudreau</Highlight></p>
                    
                    <p>And I'm A Full Stack Developer</p>

                    <ButtonContainer>
                    <Button variant='outlined' color='secondary'>Check Out My Work</Button>
                    </ButtonContainer>
                </SectionContainer>

            </LandingContainer>

        </Slide>
    )
}


const SectionContainer = styled.div`
    font-size: 32pt;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 15rem;
`  

const Highlight = styled.span`
    color: #00b8f4;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`

const LandingContainer = styled.header`
  margin: 1rem;
  padding: 2rem;
  background: #0000007d;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`

