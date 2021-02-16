import React from "react"
import styled, {withTheme} from "styled-components";
import Text, {
    default as LinkText,
    default as Title,
    default as BodyText,
} from "../../components/Text";
import {Link} from "gatsby";
import {breakPoints, Links} from "../../app-config";
import scrollTo from 'gatsby-plugin-smoothscroll';


const Footer = (props) => {
    return (
        <Container className={'footer'}>
            <FooterWrapper>
                <TopContainer> 
                    <BoxTextContentFooter>
                    <Title
                        color={props.theme.white}
                        fontWeight={900}
                    >
                        PAD 
                    </Title>
                    <Title
                        color={props.theme.white}
                        fontWeight={900}
                    >
                       
                        Busines
                      
                    </Title>
                    <Title
                        color={props.theme.white}
                        fontWeight={900}
                    >
                        Network.
                    </Title>
                    
                </BoxTextContentFooter>
                <Nav>
                    
                <button className={"menuScrollTo "} onClick={() => scrollTo('#vision')}>Vision</button>
                <button className={"menuScrollTo "} onClick={() => scrollTo('#objectif')}>Objectifs</button>
                <button className={"menuScrollTo"} onClick={() => scrollTo('#NosActivites')}>Activités</button>
                <button className={"menuScrollTo"} onClick={() => scrollTo('#contact')}>Contact</button>
                    
                </Nav>
                </TopContainer>

                
               
            </FooterWrapper>
            <BottomContainer>
                    
                </BottomContainer>
        </Container>
    )
}

export default withTheme(Footer)

const Container = styled.div`
        background: ${props => props.theme.footer};
    padding: 50px 0px;

`

const TopContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

const FooterWrapper = styled.div`
    display: flex;
    background:green;
    align-items:center;
   flex-direction: column;
   justify-content: space-between;
   @media (min-width: ${breakPoints.md}){
      flex-direction: row;
      margin: 0 auto;
      max-width: 1000px;
      width: 90%;
   } 
`

const BoxTextContentFooter = styled.div`
   display: flex;
   flex-direction: column;
`

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: self-end;
  @media (min-width: ${breakPoints.md}){
      margin-top: 38px;
      flex-direction: row;
  } 
`

const StyledLink = styled(Link)`
  margin-bottom: 16px;
  text-decoration: none;
  &:visited{
    text-decoration: none;
  }
  @media (min-width: ${breakPoints.md}){
     margin-left: 24px;
  } 
`

const BottomContainer = styled.div`
border-top:1px solid grey;
height : 80px;
background-color: ${props => props.theme.blue3} ;

`