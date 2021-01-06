import React, {useEffect, useState} from "react"
import styled, {withTheme} from "styled-components";
import Carousel from "../../components/Carousel";
import Text from "../../components/Text";
import {breakPoints} from "../../app-config";
import aboutBg from "../../images/pexels-christina-morillo-3.png";
import {motion} from "framer-motion";
import {useQuery} from "@apollo/client";
import {GET_EVENTS} from "../../queries";


const Events = (props) => {
    const { loading, error, data } = useQuery(GET_EVENTS);
    let [dataObject,setDataObject] = useState([])

    useEffect(() => {
        if(loading === false && data){
            setDataObject(data)
        }
    }, [loading, data])

    const ActiviteLeft = [
        {
          title: "1. Le Coaching",
          text:
            "PAD Biz s'est fixé comme objectif de développer le capital humain afin d'accéder à l'éducation, qui est un droit fondamental et permet de renforcer le développement.",
        },
        {
          title: "2. Le Networking",
          text:
            "PAD Biz se donne l'objectif de mettre en réseau ses membres, dans le but de créer des synergies et de renforcer les interactions et les opportunités de business avec des acteurs du monde économique.",
        },
        {
          title: "3. Le Financement ",
          text:
            "Nous finançons, investissons dans les projets de nos membres grâce à nos sponsors et bailleurs des fonds.",
        },
      ]
      
      function ActiviteItem(props) {
        return (
          <div className="div-col">
            <Title className={"space-title"}>
              <Text
               
                color={props.theme.orange2}
                size={"68px"}
                sizeLg={1}
                mawLg={"50px"}
                lineHeight={"150%"}
                fontWeight={800}
              >
                <span className={"space-title-item"}>{props.Activite.title}</span>
              </Text>
            </Title>
            <Text as={"span"} color={"bleu3"} maxWidthLg={"500px"} fontWeight={400}>
              {props.Activite.text}
            </Text>
          </div>
        )
      }

    return (
        <Container>
            <EventTitleWrapper
                className={'events-title-wrapper'}>
                <Title>
                    <Text
                        stacked
                        color={props.theme.orange}
                        size={2.5}
                        sizeLg={6}
                        lineHeight={'110%'}
                        fontWeight={900}
                        textTransform={'uppercase'}
                        className={'events-title'}
                        marginBottom = {50}>
                        <span className={'events-title-item'}>Nos</span>
                        <span className={'events-title-item'}>Activités</span>
                    </Text>
                </Title>
            <Text
             marginBottom = {30}
             as={"p"}
             color={props.theme.white}
             fontWeight={700}
             size={1.5}>
           1. L’accompagement

            </Text>
            <Text
            marginBottom = {90}
             as={"p"}
             color={props.theme.white}
             fontWeight={400}
             size={1.5}>
            Nous aidons nos membres à réaliser leurs projets de nature <br/>
            entreprenariale, à travers un accompagnement rapproché. Nos <br/>
            experts soutiennent la rédaction des projets, le plan financier et  donnent des conseils juridiques.
            </Text>
            </EventTitleWrapper>
            <SubContainer className={'events'}>
                <ContentWrapper>
                    <ImageWrapper>
                        <ImageActivite
                            src={aboutBg}
                            alt="event background image"
                            className="events-decoration-bg"/>
                    </ImageWrapper>
                    
                </ContentWrapper>
            </SubContainer>
        </Container>
    )
}

export default withTheme(Events)

const Container = styled.div`
  position: relative;
  background: ${props => props.theme.blue2};
`

const EventTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled(motion.h2)`
   position:relative;
   margin-top: -30px;
   margin-left: 20px;
   z-index: 4;
   @media (min-width: ${breakPoints.md}){
      margin-left: 60px;
     .events-title-item{
        &:nth-child(2){
          margin-left: 50px;
       }
   }
  }
`

const ImageWrapper = styled.div`
position: relative;
height : 200px;
width : 500px;
background-color: blue;


`
const ImageActivite = styled.img`
position: absolue;
top:0px;
right:0px;
`
const CarouselWrapper = styled.div``

const SubContainer = styled.div`
    .img-wrapper{
         overflow: hidden;
        width: 200px;
   }
  @media (min-width: ${breakPoints.md}){
  }
`
const ContentWrapper = styled.div`
      position:relative;
      z-index: 2;
      height: 100%;
`