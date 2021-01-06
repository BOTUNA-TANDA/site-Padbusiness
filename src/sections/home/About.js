import React, {useEffect} from "react"
import {motion, useAnimation} from 'framer-motion';
import styled, {withTheme} from "styled-components";
import {useInView} from "react-intersection-observer";
import aboutImage from "../../images/pexels-christina-morillo-2.png"
import aboutBg from "../../images/about-decorationabout-bg.svg"
import Text from "../../components/Text";
import {breakPoints} from "../../app-config";
import ButtonLink from "../../components/ButtonLink";
import {containerAboutAnim, fadeInUp, stagger} from "../../animation";


const About = (props) => {
  const animation = useAnimation();
  const [contentRef, inView] = useInView({
    rootMargin: "0px",
  })

  useEffect(() => {
    if (inView) {
      animation.start("animate")
    }
  }, [animation, inView])

  return (
      <Container
          ref={contentRef}
          animate={animation}
          initial='initial'
          variants={containerAboutAnim}
          className={'about'}>
        <motion.div
            variants={stagger}
            className={'about-animated-wrapper'}>
          <motion.img
              animation={fadeInUp}
              src={aboutBg}
              alt="decoration backgrond about"
              className="about-decoration-bg"/>
          <AboutContent className="about-content">
            <ImageFigure
                variants={fadeInUp}
                className={'about-wrapper-image'}>
              <motion.img
                  src={aboutImage}
                  className={'about-image'}
                  alt="about us image"/>
            </ImageFigure>
            <motion.div className="about-description">
              <Title
                  variants={fadeInUp}
                  className={'about-description-title'}>
                <Text
                    color={props.theme.blue3}
                    size={'65px'}
                    sizeLg={6}
                    lineHeight={'110%'}
                    fontWeight={800}
                    
                >
                  <span className={'about-description-title-item'}>Notre</span>
                  <span className={'about-description-title-item'}>Vision.</span>
                </Text>
              </Title>
              <Description variants={fadeInUp}>
                <Text
                    as={'span'}
                    color={"bleu3"}
                    maxWidthLg={'500px'}
                    fontWeight={400}
                    
                    size={'18px'}
                    className={'about-description-excerpt'}>La vision de<span className={'bold'}> PAD Business Network </span> 
                    se veut avant tout 
                    humaniste dans un cadre entrepreneurial  
                    empreint de diversité et respectueux des 
                    normes environnementales. <br/>
                    <br/>
                    Elle s'aligne en partie à celle de<span className={'bold'}> l'ONU </span> <br/>
                    dans le cadre de la résolution A/RES/68/237 <br/>
                    définissant 2015 - 2024, comme la décennie <br/>
                    internationale des personnes <span className={'bold'}> d'ascendance </span> <br/>
                    <span className={'bold'}>africaine </span> et citant la nécessité de <br/>
                    renforcer les mesures et activités de <br/>
                    coopération nationales, régionales et <br/>
                    internationales pour garantir le plein <br/>
                    exercice des droits économiques, sociaux, <br/>
                    culturels, civils et politiques des <br/>
                    personnes d'ascendance africaine ainsi que <br/>
                    leur pleine et égale participation à la <br/>
                    société sous tous les aspects.

                  
                </Text>
              </Description>
             
            </motion.div>
          </AboutContent>
        </motion.div>
      </Container>
  )
}

export default withTheme(About)

const Container = styled(motion.div)`
    margin-top: 200px;
    background: ${props => props.theme.grey};
    position:relative;
    .about-decoration-bg{
      position:absolute;
      right:0;
    }
    .bold{
      font-weight: 600;
    }
    @media (min-width: 768px) {
      padding-bottom: 50px;
    }

    @media (min-width: 992px) {
      margin-top: 400px;
    }
`
const AboutContent = styled(motion.div)`
  max-width: 1669px;
  margin: 0 auto;
  padding-bottom: 100px;
  .about-description{
    padding: 24px;
  }
  @media (min-width: ${breakPoints.md}) {  
    padding-bottom: 0;
  }
  @media (min-width: ${breakPoints.lg}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    position:relative;
    z-index: 6;
  }  
`
// --------------------------------------------

const ImageFigure = styled(motion.figure)`
    width: 100%;
    max-width: 768px;
    overflow: hidden;
   .about-image{
     width: 100%;
     z-index: 10;
    }
@media (min-width: ${breakPoints.lg}){
    max-width: 768px;
    margin-top: -80px;
    margin-bottom: 100px  
}  
`
// --------------------------------------------
const Title = styled(motion.h1)`
    margin-top: 40px;
    .about-description-title-item{
      display: block;
      &:nth-child(2){
        margin-left: 20px;
      }
    }
  @media (min-width: ${breakPoints.lg}){
    margin-top: 100px;
  }
`
// --------------------------------------------
const Description = styled(motion.h1)`
  margin-top: 20px;
  @media (min-width: ${breakPoints.md}){
    margin-left: 20px;
    margin-bottom: 32px;;
  }
`
// --------------------------------------------
const ButtonWrapper = styled(motion.div)`
  margin-top: 24px;
  @media (min-width: ${breakPoints.md}){
    margin-left: 20px;
  }
`



