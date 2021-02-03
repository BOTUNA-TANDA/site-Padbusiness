import React from "react"
import styled, {withTheme} from "styled-components";
import Text, {
    default as LinkText,
    default as Title,
    default as BodyText,
} from "../../components/Text";
import {Link} from "gatsby";
import {breakPoints, Links} from "../../app-config";


const Footer = (props) => {
    return (
        <Container className={'footer'}>
            <FooterWrapper>
                <TopContainer> <BoxTextContentFooter>
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
                    <StyledLink to={"/"}>
                        <LinkText size={0.7} fontWeight={400} sizeMd={0.4} color={'white'} fontWeight={400}
                        >Accueil</LinkText>
                    </StyledLink>
                    {/* <StyledLink to={"/a-propos"}>
                        <LinkText size={0.7} fontWeight={400} sizeMd={0.4} color={'white'} fontWeight={400}
                        >Vision</LinkText>
                    </StyledLink>
                    <StyledLink to={"/space"}>
                        <LinkText size={0.7} fontWeight={400} sizeMd={0.4} color={'white'} fontWeight={400}
                        >Objectifs</LinkText>
                    </StyledLink>
                    <StyledLink to={"/event"}>
                        <LinkText size={0.7} fontWeight={400} sizeMd={0.4} color={'white'} fontWeight={400}
                        >Activités</LinkText>
                    </StyledLink>
                    <StyledLink to={"/grid"}>
                        <LinkText size={0.7} fontWeight={400} sizeMd={0.4} color={'white'} fontWeight={400}
                        >Contact</LinkText>
                    </StyledLink> */}
                </Nav>
                </TopContainer>

               
                <div>

                </div>
            </FooterWrapper>
        </Container>
    )
}

export default withTheme(Footer)

const Container = styled.div`
        background: ${props => props.theme.footer};
    padding: 50px 20px;

`

const TopContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

const FooterWrapper = styled.div`
    display: flex;
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