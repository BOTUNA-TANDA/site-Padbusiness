import React, { useEffect } from "react"
import styled, { withTheme } from "styled-components"
import Text from "../../components/Text"
import { motion, useAnimation } from "framer-motion"
import { breakPoints } from "../../app-config"
import aboutBg from "../../images/spaces-decoration.png"
import parse from "html-react-parser"
import { useInView } from "react-intersection-observer"
import { containerAnim, fadeInUp } from "../../animation"

const servicesLeft = [
  {
    title: " ",
    text:
      '<p>2.1.<span class="bold"> PAD business met </span> en réseau ses membres avec des investisseurs et sponsors potentiels.</p>',
  },
  {
    title: " ",
    text:
      "2.2. <span class='bold'> La sensibilisation et la formation </span> à l'entreprenariat via tous les canaux de communication traditionnelles et digitales",
  },
  {
    title: " ",
    text:
      "2.3. La dispense des ateliers juridiques, sociales,  culturelles (langues, art, écriture, etc).",
  },
  {
    title: " ",
    text:
      "2.4. école de devoirs pour les jeunes et adultes.",
  },
  {
    title: " ",
    text:
      "2.5. <span class='bold'>Le financement des projets </span> de nos membres grâce à nos sponsors et bailleurs des fonds.",
  },
  {
    title: " ",
    text:
      "2.6. La création d'une plateform <span class='bold'> “each one, teach one” </span> pour le mentoring, afin d'aider les jeunes à s'identifier aux personnes ayant réussies dans leurs affaires.",
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
         2. La sensisibilisation et 
          <br />
          La formation.
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
  background: ${props => props.theme.grey};
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
    font-weight: 700;
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
  grid-row-gap:50px;
  grid-column-gap:50px;
`
