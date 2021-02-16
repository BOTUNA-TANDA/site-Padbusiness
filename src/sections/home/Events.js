
import React, {useEffect, useState} from "react"
import styled, {withTheme} from "styled-components";

import Text from "../../components/Text";
import {breakPoints} from "../../app-config";
import aboutBg from "../../images/pexels-christina-morillo-3.png";
import {motion} from "framer-motion";
import {useQuery} from "@apollo/client";
import {GET_EVENTS} from "../../queries";
import {fadeInUp} from "../../animation";

const Events = props => {
  const { loading, data } = useQuery(GET_EVENTS)
  let [, setDataObject] = useState([])

  useEffect(() => {
    if (loading === false && data) {
      setDataObject(data)
    }
  }, [loading, data])

  return (
    <Container id="NosActivites">
      <Text 
                            variants={fadeInUp}
                            as={'span'}
                            color={props.theme.white}
                            lineHeight={'170%'}
                            fontWeight={100}
                            size={0.7}
                            sizeLg={0.4}
                            sizeXl={0.6}
                            className={'textRotation1'}>
                            our activities.
                        </Text>
      <div className="space-content">
        <EventTitleWrapper className={"events-title-wrapper"}>
          <Title className={"events-title-item main-title "}>
            <Text
              marginTop={32}
              marginBottomXl={'48'}
              variants={fadeInUp}
              stacked
              color={props.theme.orange2}
              size={2.5}
              sizeLg={6}
              mawLg={"50px"}
              lineHeight={"110%"}
              fontWeight={900}
              className={"events-title"}
            >
              <span className={"events-title-item"}>Nos</span>
              <span className={"events-title-item"}>Activités</span>
            </Text>
          </Title>

          <Text
            as={"p"}
            marginTop={24}
            
            color={props.theme.white}
            fontWeight={700}
            size={1}
            className={"space-description main-title text-image"}
          >
            1. L’accompagement
          </Text>
          <Text
            color={props.theme.white}
            marginTop={"16"}
            marginTopXl={'48'}
            marginBottom={"24"}
            fontWeight={400}
            className={" text-image"}
          >
            Nous aidons nos membres à réaliser leurs projets de nature <br />
            entreprenariale, à travers un accompagnement rapproché. Nos <br />
            experts soutiennent la rédaction des projets, le plan <br />
            financier et donnent des conseils juridiques.
          </Text>
        </EventTitleWrapper>
        <SubContainer className={"events text-image"}>
          <ContentWrapper>
            <ImageWrapper>
              <motion.img
                src={aboutBg}
                alt="event background image"
                className="events-decoration-bg"
              />
            </ImageWrapper>
          </ContentWrapper>
        </SubContainer>
      </div>
    </Container>
  )
}

export default withTheme(Events)

const Container = styled.div`
  position: relative;
  background: ${props => props.theme.bleu2};
  padding-top:50px;
  

  @media(min-width:${breakPoints.xl}){
    padding-bottom:440px;
    .text-image{
    max-width: 1300px;
    margin: auto 100px;
    display: flex;
    flex-direction: column;
    padding: auto;
  }
  .space-content{
    max-width: 1300px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 32px;
  }

  }
  
 
`

//-------------------------------------------

//-------------------------------------------

const EventTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
`

const Title = styled(motion.h2)`
.space-title-item{
    display: block;
  }
   position:relative;
   margin-top: -30px;
   margin-left: 20px;
   z-index: 4;
   @media (min-width: ${breakPoints.md}){
      
     .events-title-item{
        &:nth-child(2){
          margin-left: 0px;
       }
   }
  }
`

const ImageWrapper = styled.div`

  @media (min-width: ${breakPoints.xl}) {
    position: absolute;
    margin-left: 32px;
  }
`



const SubContainer = styled.div`
    .img-wrapper{
         overflow: hidden;
        width: 200px;
        :500%;
   }
  @media (min-width: ${breakPoints.md}){
  }
`
const ContentWrapper = styled.div`
      position:relative;
      z-index: 2;
      height: 100%;

      
`
