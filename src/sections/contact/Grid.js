import React, { useEffect, useState } from "react"
import styled, { withTheme } from "styled-components"
import circleLogo from "../../images/circleLogo.svg"
import circleBg from "../../images/circlebg.png"
import { motion, useAnimation } from "framer-motion"
import { containerAnim, fadeInUp } from "../../animation"
import Text, { default as Title } from "../../components/Text"
import { breakPoints } from "../../app-config"
import Menu from "../common/Menu"
import parse from "html-react-parser"


const servicesLeft = [
  {
    title: " Adresse",
    text: "Square de Meeûs,35  1000 Bruxelles Belgique ",
  },
  {
    title: "Nous soutenir /Donate  ",
    text: "pad.business.network@gmail.com BE 82 0689 3456 0368 BIC:GKCCBEBB",
  },
  {
    title: "Mobile",
    text: " +32 484 52 32 63 +243 822 77 07 04",
  },
  {
    title: "EMAIL ",
    text: "info@padbiz.org",
  },
  {
    title: "Nous suivre ",
    text: " ",
  },
]

function ServiceItem(props) {
  return (
    <div className="div-col">
      <Title className={"space-title"}>
        <Text
          variants={fadeInUp}
          color={props.theme.orange2}
          size={"68px"}
          sizeLg={1}
          mawLg={"50px"}
          lineHeight={"150%"}
          fontWeight={800}
        >
          <span className={"space-title-item"}>{props.service.title}</span>
        </Text>
      </Title>
      <Text as={"span"} color={"bleu3"} maxWidthLg={"500px"} fontWeight={400}>
        {parse(props.service.text)}
      </Text>
    </div>
  )
}

const Grid = props => {
  return (
    <Container animate="animate" initial="initial" variants={containerAnim}>
     
      <Wrapper>
        <Left>
          <LeftTextWrapper>
            <TitleWrapper>
              <Title
                variants={fadeInUp}
                stacked
                color={props.theme.orange}
                marginTop={32}
                marginTopSm={4}
                fontWeight={800}
                size={2.5}
                zIndex={5}
                sizeMd={3.5}
                lineHeight={0.9}
                textTransform={"capitalize"}
              >
                <span>Contactez-</span>
                <span>Nous.</span>
              </Title>
            </TitleWrapper>
            <Text
              variants={fadeInUp}
              marginTop={32}
              marginTopSm={4}
              size={0.7}
              sizeMd={0.5}
              fontWeight={400}
              maxWidthSm={"500px"}
              color={props.theme.blue2}
            >
              Avec la collaboration de
            </Text>
            <Text
              variants={fadeInUp}
              marginTop={32}
              marginTopSm={4}
              size={0.7}
              sizeMd={0.5}
              fontWeight={400}
              maxWidthSm={"500px"}
              color={props.theme.blue2}
            >
              Cité des Métiers / UNIDO
            </Text>
            <Text
              variants={fadeInUp}
              marginTop={10}
              marginTopSm={4}
              size={0.7}
              sizeMd={0.5}
              fontWeight={400}
              maxWidthSm={"500px"}
              color={props.theme.blue2}
            >
              ENPAD / CHANGE asbl
            </Text>
          </LeftTextWrapper>
        </Left>
        <Right>
          <CircleBg src={circleBg} />
          <ServiceListItem>
            {servicesLeft.map(object => {
              console.log("===>", object)
              return (
                <ServiceItem service={object} theme={props.theme}></ServiceItem>
              )
            })}
          </ServiceListItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default withTheme(Grid)

const Container = styled(motion.div)`
  min-height: 100vh;
  display: flex;
  background: ${props => props.theme.white};
  @media (min-width: ${breakPoints.md}) {
    height: 100%;
    min-height: calc(100vh - 200px);
  }
`


const TitleWrapper = styled(motion.div)`
  margin-top: 32px;
`

const CircleLogo = styled(motion.img)`
  position: absolute;
  width: 200px;
  height: 200px;
  z-index: 1;
  top: 30%;
  transform: translateX(-50%);
`

const CircleBg = styled(motion.img)`
  position: absolute;
  width: 800px;
  height: 800px;
  z-index: -4;
  top: 30%;
  right: -600px;
  transform: translateX(-50%);
`

const Wrapper = styled(motion.div)`
  display: grid;
  width: 100%;
  @media (min-width: ${breakPoints.md}) {
    grid-template-columns: 1fr 1fr;
  }
`

const Left = styled(motion.div)`
  position: relative;
  padding: 20px;
  background: #f6f6f6;
  display: grid;
`
const Right = styled(motion.div)`
  overflow: hidden;
  position: relative;
  z-index: 0;
  padding-left: 20px;
  display: grid;
  @media (min-width: ${breakPoints.md}) {
    padding-left: 40px;
  }
`

const LeftTextWrapper = styled(motion.div)`
  align-self: center;
  @media (min-width: ${breakPoints.md}) {
    justify-self: center;
  }
`
const RightTextWrapper = styled(motion.div)`
  justify-self: flex-start;
  align-self: center;
`
const ServiceListItem = styled(motion.div)`
  margin-bottom: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 50px;
  grid-column-gap: 50px;
`
