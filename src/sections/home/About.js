// import React, { useEffect } from "react"
// import { motion, useAnimation } from "framer-motion"
// import styled, { withTheme } from "styled-components"
// import { useInView } from "react-intersection-observer"
// import aboutImage from "../../images/pexels-christina-morillo-2.png"
// import aboutBg from "../../images/about-decorationabout-bg.svg"
// import Text from "../../components/Text"
// import { breakPoints } from "../../app-config"
// import ButtonLink from "../../components/ButtonLink"
// import { containerAboutAnim, fadeInUp, stagger } from "../../animation"

// const About = props => {
//   const animation = useAnimation()
//   const [contentRef, inView] = useInView({
//     rootMargin: "0px",
//   })

//   useEffect(() => {
//     if (inView) {
//       animation.start("animate")
//     }
//   }, [animation, inView])

//   return (
//     <Container
//       ref={contentRef}
//       animate={animation}
//       initial="initial"
//       variants={containerAboutAnim}
//       className={"about"}
//     >
//       <motion.div variants={stagger} className={"about-animated-wrapper"}>
//         {/* <motion.img
//           animation={fadeInUp}
//           src={aboutBg}
//           alt="decoration backgrond about"
//           className="about-decoration-bg"
//         /> */}
//         <AboutContent className="about-content">
//           <ImageFigure variants={fadeInUp} className={"about-wrapper-image"}>
//             <motion.img
//               src={aboutImage}
//               className={"about-image"}
//               alt="about us image"
//             />
//           </ImageFigure>
//           <motion.div className="about-description">
//             <Title variants={fadeInUp} className={"about-description-title"}>
//               <Text 
//                 marginTop={32}
//                 color={props.theme.blue3}
//                 size={"2"}
//                 sizeLg={props.theme.fontSizeTablet}
//                 lineHeight={"71,5px"}
//                 lineHeight={0.6}
//                 fontWeight={800}
//                 Width ={"381px"}
               
//               >
//                 <span className={"about-description-title-item main-title"}>Notre </span><br />
//                 <span className={"about-description-title-item main-title"}>Vision.</span>
//               </Text>
//             </Title>
//             <Description variants={fadeInUp}>
//               <Text className={"margin-left"}
//                 /* marginLeft={'8'} */
//                 marginTop={32}
//                 as={"p"}
//                 color={"bleu3"}
//                 maxWidthLg={"850px"}
//                 fontWeight={400}
//                 fontWeightMg={500}
//                 size={"0.7"}
//                 sizeLg={1.2}
//                 className={"about-description-excerpt"}
//               >
//                 La vision de
//                 <span className={"bold"}> PAD Business Network </span>
//                 se veut avant tout humaniste dans un cadre entrepreneurial
//                 empreint de diversité et respectueux des normes 
//                 environnementales. <br />
//                 <br />
//                 Elle s'aligne en partie à celle de
//                 <span className={"bold"}> l'ONU </span> 
//                 dans le cadre de la résolution A/RES/68/237 
//                 définissant 2015 - 2024, comme la décennie 
//                 internationale des personnes{" "}
//                 <span className={"bold"}> d'ascendance </span> 
//                 <span className={"bold"}>africaine </span> et citant la
//                 nécessité de 
//                 renforcer les mesures et activités de 
//                 coopération nationales, régionales et 
//                 internationales pour garantir le plein 
//                 exercice des droits économiques, sociaux,
//                 culturels, civils et politiques des 
//                 personnes d'ascendance africaine ainsi que 
//                 leur pleine et égale participation à la 
//                 société sous tous les aspects.
//               </Text>
//             </Description>
//           </motion.div>
//         </AboutContent>
//       </motion.div>
//     </Container>
//   )
// }

// export default withTheme(About)

// const Container = styled(motion.div)`
 
//   /* background: ${props => props.theme.grey};
//   position: relative;
//   .about-decoration-bg {
//     position: absolute;
//     right: 0;
//   } */
//   /* .bold {
//     font-weight: 600;
//   }
//   @media (min-width: 768px) {
//     padding-bottom: 50px;
//   }

//   @media (min-width: 992px) {
   
//   } */
// `
// const AboutContent = styled(motion.div)`
//   /* max-width: 1669px;
//   margin: 0 auto;
//   padding-bottom: 100px;
//   .about-description {
//     padding: 24px;
//   }
//   @media (min-width: ${breakPoints.md}) {
//     padding-bottom: 0;
//   }
//   @media (min-width: ${breakPoints.lg}) {
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//     position: relative;
//     z-index: 6;
//   } */
// `
// // --------------------------------------------

// const ImageFigure = styled(motion.figure)`
//  /*   width: 100%;
//   max-width: 768px;
//   overflow: hidden;
//   .about-image {
//     width: 100%;
//     z-index: 10;
//     position: absolute;
//     width: 506px;
//     height: 660px;
//     left: 144px;
//     top: 199px; 
//   } */
//   @media (min-width: ${breakPoints.lg}) {
//      /* max-width: 768px; */
//      width:132%;
//     margin-top: 80px;
//     margin-bottom:100px;
//   } 
// `

// // --------------------------------------------
// const Title = styled(motion.h1)`
// margin-top: 40px;
//   .about-description-title-item {
//     display: block;
//     &:nth-child(2) {
//       margin-left: 0px;
//  /*  margin-top: 40px;
//   .about-description-title-item {
//     display: block;
//     &:nth-child(2) {
//       margin-left: 0px;
//     }
//   }
//   @media (min-width: ${breakPoints.lg}) {
//     margin-top: 100px;
//   } */
// `
// // --------------------------------------------
// const Description = styled(motion.h1)`
//   /* margin-top: 20px;
//   @media (min-width: ${breakPoints.md}) {
//     margin-left: 20px;
//     margin-bottom: 32px;
//   } */
// `
// // --------------------------------------------
// const ButtonWrapper = styled(motion.div)`
//  /*  margin-top: 24px;
//   @media (min-width: ${breakPoints.md}) {
//     margin-left: 20px; */
//   }
// `


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
      <Container id="vision"
          ref={contentRef}
          animate={animation}
          initial='initial'
          variants={containerAboutAnim}
          className={'about'}>
 <Text 
                            variants={fadeInUp}
                            as={'span'}
                            color={props.theme.bleu3}
                            lineHeight={'170%'}
                            fontWeight={100}
                            size={0.7}
                            sizeLg={0.4}
                            sizeXl={0.6}
                            className={'textRotation1'}>
                            our vison.
                        </Text>

        <motion.div
            variants={stagger}
            className={'about-animated-wrapper'}>
          
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
                  className={'about-description-title main-title'}>
                <Text
                    color={props.theme.bleu3}
                    size={2.5}
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
                    color={props.theme.bleu3}
                    maxWidthLg={'500px'}
                    fontWeight={100}
                    marginTopXl={50}
                    size={0.6}
                    className={'about-description-excerpt'}> La vision de
                    <span className={"bold"}> PAD Business Network </span>
                    se veut avant tout humaniste dans un cadre entrepreneurial
                    empreint de diversité et respectueux des normes 
                    environnementales. <br />
                    <br />
                    Elle s'aligne en partie à celle de
                    <span className={"bold"}> l'ONU </span> 
                    dans le cadre de la résolution A/RES/68/237 
                    définissant 2015 - 2024, comme la décennie 
                    internationale des personnes{" "}
                    <span className={"bold"}> d'ascendance </span> 
                    <span className={"bold"}>africaine </span> et citant la
                    nécessité de 
                    renforcer les mesures et activités de 
                    coopération nationales, régionales et 
                    internationales pour garantir le plein 
                    exercice des droits économiques, sociaux,
                    culturels, civils et politiques des 
                    personnes d'ascendance africaine ainsi que 
                    leur pleine et égale participation à la 
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
    margin-top: 50px;
    background: ${props => props.theme.grey};
    position:relative;
    .about-decoration-bg{
      position:absolute;
      right:0;
    }
    .bold{
      font-weight: 400;
    }
    @media (min-width: 768px) {
      padding-bottom: 50px;
    }

    @media (min-width: 992px) {
      margin-top: 0px;
    }
    @media (min-width: 1024px) {
      
      margin-top: 0px;
    }
    @media (min-width: ${breakPoints.xl}){
    margin-top: 0px;
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
    grid-template-columns: 1fr 1fr;
    position:relative;
  }
  @media (min-width: ${breakPoints.lg}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    position:relative;
    z-index: 6;
  }  
`
// --------------------------------------------
/*
    width: 85%;
    margin-top: 345px;
 */
const ImageFigure = styled(motion.figure)`
    width: 100%;
    max-width: 768px;
    overflow: hidden;
   .about-image{
     width: 100%;
     z-index: 10;
    }

    @media (max-width: ${breakPoints.md}){
    max-height: 500px;
    }  

    @media (min-width: ${breakPoints.md}){
    width: 100%;
    /* padding-top: 200px;
    margin-left: 0px; */
    
    }  

@media (min-width: ${breakPoints.lg}){
    max-width: 628px;
    margin-top: 264px;
    
      
    }  

    @media (min-width: ${breakPoints.xl}) {
      
      max-width: 628px;
      margin-top: 143px;
      margin-left: 132px;
      
      
    }

@media (min-width: ${breakPoints.xl}){
  .about-image{
    width: 85%;
    max-width: 768px;
    margin-top: 80px;
    
    
  }   
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



