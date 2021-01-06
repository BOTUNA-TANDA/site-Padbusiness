import React, { useEffect } from "react"
import styled, { withTheme } from "styled-components"
import Text from "../../components/Text"
import { motion, useAnimation } from "framer-motion"
import { breakPoints } from "../../app-config"
import aboutBg from "../../images/spaces-decoration.png"

import { useInView } from "react-intersection-observer"
import { containerAnim, fadeInUp } from "../../animation"

const servicesLeft = [
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
        {props.service.text}
      </Text>
    </div>
  )
}

const Space = props => {
  const animation = useAnimation()
  const [contentRef, inView] = useInView({
    rootMargin: "-100px",
  })

  useEffect(() => {
    if (inView) {
      animation.start("animate")
    }
  }, [animation, inView])

  return (
    <Container
      className={"space"}
      ref={contentRef}
      animate={animation}
      initial="initial"
      variants={containerAnim}
    >
      <div className="imgWrapper">
        <motion.img
          src={aboutBg}
          alt="space background decoration"
          className="about-decoration-bg"
        />
      </div>
      <div className="space-content">
        <Title className={"space-title"}>
          <Text
            variants={fadeInUp}
            color={props.theme.orange2}
            size={"65px"}
            sizeLg={6}
            mawLg={"50px"}
            lineHeight={"110%"}
            fontWeight={900}
            textTransform={"uppercase"}
          >
            <span className={"space-title-item"}>Nos</span>
            <span className={"space-title-item"}>Objectifs.</span>
          </Text>
        </Title>

        <Text
          variants={fadeInUp}
          as={"p"}
          color={props.theme.blue3}
          fontWeight={700}
          size={1.5}
        
          
        >
          Principalement Le Renforcement Des Capacités
          <br />
          Économiques Des Personnes Afro-Descendantes.
        </Text>

        <Text
          marginBottom = {50}
        >
          Nous atteignons nos objectifs par le biais du Coaching,
          <br />
          Le networking et Le financement.
        </Text>

        <ServiceListItem>
          {servicesLeft.map(object => {
            console.log("===>",object);
            return (
              <ServiceItem service={object} theme={props.theme}></ServiceItem>
            )
          })}
        </ServiceListItem>
      </div>
    </Container>
  )
}

export default withTheme(Space)

//-------------------------------------------
const Container = styled(motion.div)`
  overflow-x: hidden;
  padding-top: 100px;
  position: relative;
  padding-bottom: 100px;
  .imgWrapper {
    overflow: hidden;
  }
  .about-decoration-bg {
    width: 1500px;
    position: absolute;
    z-index: -1;
    right: 0;
  }
  .space-content {
    max-width: 1300px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 32px;
  }
  .bold {
    font-weight: 500;
  }
`
//-------------------------------------------
const Title = styled(motion.h2)`
  .space-title-item {
    display: block;
  }
  @media (min-width: ${breakPoints.md}) {
    .space-title-item {
      &:nth-child(1) {
        margin-left: 0;
      }
      &:nth-child(2) {
        margin-left: -20px;
      }
      &:nth-child(3) {
        margin-left: 10px;
      }
    }
  }
`
//-------------------------------------------
const ContentContainer = styled(motion.div)`
  display: grid;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: ${breakPoints.lg}) {
    flex-direction: row;
  }
`
//-------------------------------------------

//-------------------------------------------

//-------------------------------------------
const ServiceListItem = styled(motion.div)`
  margin-bottom: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`
