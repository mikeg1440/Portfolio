import styled from 'styled-components';
import Menubar from './Menubar';
import { Divider } from '@material-ui/core';
import LandingHeader from './LandingHeader';
import ProjectSection from './ProjectSection';
import SocialWidget from './SocialWidget';

function App() {
  return (
    <StyledContainer>
      <Menubar/>

      <LandingHeader />

      <Divider />

      <SectionContainer>
        <ProjectSection />
      </SectionContainer>


      <SectionContainer>
        <AboutSection>
          <AboutHeader>
            About Me
          </AboutHeader>

          <AboutTextContainer>
            <AboutText>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </AboutText>

            <AboutText>
              The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by
            </AboutText>
          </AboutTextContainer>
        </AboutSection>

      </SectionContainer>

      <SocialWidget/>

    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  background: url('/binary-background.jpg') no-repeat center center scroll;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  // background-attachment: scroll;
  height: 100%;
  overflow: hidden;
`

const SectionContainer = styled.section`
  // background: #0000007d;
  color: white;
  display: flex;
  justify-content: center;
  margin: 1rem;
`

const AboutSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const AboutHeader = styled.div`
  font-size: 24pt;
  background: #0000007d;   
  padding: 1rem 2rem;
  font-weight: bold;
  width: fit-content;
`

const AboutTextContainer = styled.div` 
  padding: 2rem; 
`

const AboutText = styled.p` 
  font-size: 16pt;
  padding: 1rem;
  margin: .5rem;
  background: #0000007d;
  `

export default App;
