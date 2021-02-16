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
import parse from "html-react-parser"
import { containerAnim, fadeInUp } from "../../animation";

const logofooter = [
   {
      images:[
        {
        url:  "https://www.facebook.com/pages/category/Community-Organization/PAD-Business-Network-Foundation-342843433036526",
        path:'/static/facebook.png'
      },
      {
        url:  "https://twitter.com/padbusiness",
        path:'/static/twitter.png'
      },
      {
        url:  "https://www.instagram.com/padbiz_2020/",
        path:'/static/instagram.png'
      }]}
  ]

  function ServiceItem(props) {
    console.log("XXXX=========>",props.service)
   let service = props.service;
    let images = service?.images ? service?.images : null
   
    let getImage = (service) => {
       return service.images.map((item) => {
         return (
           <a href={item.url}>
             <img src={item.path} alt=""/>
           </a>
         )
       })
    }
    console.log(images)
  return (
    <div className="div-col">
      <Title className={"space-title main-title"}>
        <Text
          marginBottom={16}
          variants={fadeInUp}
          color={props.theme.orange2}
          size={"68px"}
          sizeLg={1}
          mawLg={"50px"}
          lineHeight={"150%"}
          lineHeightLg={"50px"}
          fontWeight={800}
        >
          <span className={"space-title-item"}>{props.service.title}</span>
        </Text>
      </Title>
      <Text
        marginBottom={40}
        as={"span"}
        color={"bleu3"}
        maxWidthLg={"229px"}
        fontWeight={400}
      >
        {parse(props.service.text)}
        {images != null ?
              getImage(service) :
              null
        
        }
      </Text>
      
    </div>
  )
}
  
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
            <div className="space-content-right">
                <Logofooter>
                  {logofooter.map(object => {
                    console.log("===>", object);
                    return (
                      <ServiceItem service={object} theme={props.theme}></ServiceItem>
                    )
                  })}
                </Logofooter>
              </div>
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