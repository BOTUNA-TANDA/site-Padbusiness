// import React, {useEffect} from "react"
// import styled, {withTheme} from "styled-components";
// import heroImg from "../../images/pexels-christina-morillo.png"
// import heroImgMin from "../../images/hero-lg.webp"
// import heroBg from "../../images/header-bg.svg"
// import Text, {
//     default as Title,
// } from "../../components/Text";
// import {breakPoints} from "../../app-config";
// import {AnimatePresence, motion, useAnimation} from "framer-motion";
// import ButtonLink from "../../components/ButtonLink";
// import Menu from "../common/Menu";
// import {containerAnim, fadeInUp, fadeInUpScale} from "../../animation";
// import {useInView} from "react-intersection-observer";




// const Header = (props) => {
//     const animation = useAnimation();
//     const [contentRef, inView] = useInView({
//         rootMargin: "0px",
//     })

//     useEffect(() => {
//         if (inView) {
//             animation.start("animate")
//         }
//     }, [animation, inView])

//     return (
//         <Container
//             className={'hero'}>
//             <Menu/>
            
//             <Wrapper
//                 ref={contentRef}
//                 animate={animation}
//                 initial='initial'
//                 variants={containerAnim}>
//                 <HeroLeft className="hero-left">
//                     <HeroLeftContent className="hero-left-content">
//                         <div className="hero-left-content-title-wrapper">
//                             <Title1
//                                 variants={fadeInUp}
//                                 stacked
//                                 color={props.theme.white}
//                                 size={3.2}
//                                 sizeMd={2}
//                                 sizeLg={7}
//                                 sizeXl={9}
//                                 fontWeight={800}
//                                 lineHeight={'1'}
//                                 className={'hero-left-content-title'}>
//                                 <span>PAD</span><br />
//                                 <span>Business</span><br />
//                                 <span>Network</span>
//                             </Title1>
//                         </div>
//                         <Text
//                             variants={fadeInUp}
//                             as={'span'}
//                             color={props.theme.white}
//                             maxWidthLg={'550px'}
//                             lineHeight={'170%'}
//                             fontWeight={400}
//                             marginTop={16}
//                             marginTopMd={-550}
//                             marginBottom={32}
//                             marginLeft={'8'}
//                             size={0.7}
//                             sizeLg={0.9}
//                             sizeXl={0.6}
//                             className={'hero-left-content-excerpt'}>PAD Business Network est une<br />
//                              plateforme pour le renforcement des<br /> 
//                              capacités des africains et ses <br />
//                              descendants partout dans le monde.
//                         </Text>
                      
//                     </HeroLeftContent>
//                 </HeroLeft>
//                 <HeroRight>
//                     <HeroFigure
//                         className={'hero-right-figure'}>

//                         <HeroImage
//                             variants={fadeInUp}
//                             className={'hero-right-image'}
//                             src={heroImg}
//                             srcset={heroImgMin + " 415w"}
//                             alt=""/>
//                     </HeroFigure>
                    
//                 </HeroRight>
//             </Wrapper>
//         </Container>
//     )
// }

// const Container = styled.div`
//     background: #1E2D44;
//     position:relative;
   
//     @media  (min-width:  ${breakPoints.md}) {
//         min-height: 70vh;
//     }
// `
// const Title1 = styled.div`
    
//     color:#fff;
//     width: 110px;
//     height: 140px;
//     left: 40px;
//     top: 167px;

//     font-family: 'Open Sans';
//     font-style: normal;
//     font-weight: bold;
//     font-size: 30px;
//     line-height: 30px;

//     @media  (min-width:  ${breakPoints.md}) {
//     min-height: 70vh;
//     color:#fff;
//     width: 510px;
//     height: 240px;
//     left: 140px;
//     top: 167px;
//         margin-top:80px;

//     font-family: 'Open Sans';
//     font-style: normal;
//     font-weight: bold;
//     font-size: 132px;
//     line-height: 124px;
//     }

//     @media  (min-width:  ${breakPoints.lg}) {
//         min-height: 70vh;
//     }
//     /* color:#fff;
//     width: 510px;
//     height: 240px;
//     left: 140px;
//     top: 167px;
//     margin-top:80px;

//     font-family: 'Open Sans';
//     font-style: normal;
//     font-weight: bold;
//     font-size: 132px;
//     line-height: 124px; */
// `

// const TextHead = styled.div`
//     /* color:#fff;
//     font-size: 14px;
//     line-height: 22px;
//     margin-top: 32px; */
    
//   /*padding-left: 0px;
//     position: absolute;
//     width: 419px;
//     height: 240px;
//     left: 98px;
//     top: 320px;

//     font-size: 18px;
//     line-height: 32px; */

// `

// const Blob = styled(motion.img)`
//   position: absolute;
//   z-index: -1;
//   top: 0;
//   right: 0;
//   width: 40%;
// `

// const Wrapper = styled(motion.div)`
//  /*  position:relative;
//   padding: 20px;
//   display:flex;
//   flex-direction:column;
//   @media  (min-width:  ${breakPoints.lg}){
//     display: flex;
//     flex-direction: row;
//     margin: 0 auto;
//     max-width: 1600px;
//     padding: 100px 100px 100px;
//   } */
// `

// const HeroLeft = styled(motion.div)`
//   /* position:relative;
  
//    @media  (min-width:  ${breakPoints.md}){
//        width: 100%;
       
//   }  */
// `

// const HeroLeftContent = styled(motion.div)`
// /* @media (min-width:${breakPoints.lg}){
//   position:absolute;
//   left: 30px;
//   top: 80px;
//   z-index: 1;
//   width: 100%; 
// }*/
// /* @media (min-width: ${breakPoints.md}){
//         margin: 0 auto;
//         max-width: 1000px;
//         grid-template-columns: 1fr 1fr;
//     }
//     @media (min-width: ${breakPoints.lg}){
//         max-width: 1200px;
//         grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
//     } */
// `

// const HeroRight = styled(motion.div)`
// /*   position:relative;
//   margin-top: 32px;
 
//   @media (min-width:  ${breakPoints.lg}) {
//       width: 120%;
//       min-width: 500px;
      
//   }  
//   @media (min-width:  ${breakPoints.xl}) {

//   } */
// `
// const HeroFigure = styled(motion.figure)`

//   overflow: inherit;
//   max-width: 780px;
//   position:relative;
//   width: 100%;
//   margin-top: 32px;
//   /* overflow: inherit;
//   max-width: 780px;
//   position:relative;
//   */
//   @media (min-width:  ${breakPoints.md}) {
//       width: 30%;

//   }
  
//    @media (min-width:  ${breakPoints.lg}) {
//        margin-top: 50px;
//        width: 150%;
//   } 
// `
// const HeroImage = styled(motion.img)`
//   width: 100% ; 

//   @media (min-width:  ${breakPoints.lg}) {
//        width: 100%;
//   } 
 

// `
// const Testimonial = styled(motion.div)`
//  /*  position:absolute;
//   background: ${props => props.theme.blue};
//   width: 250px;
//   padding: 20px;
//   opacity: 0.98;
  
//    @media (max-width:${breakPoints.lg}){
//       bottom: -20px;
//       left: 0;
//   }

//     @media (min-width:${breakPoints.lg}){
//       padding: 20px;
//       bottom: -50px;
//       right: -100px;
//       width: 300px;
//   } */
// `

// const ButtonWrapper = styled(motion.div)`
// `

// export default withTheme(Header)

import React, {useEffect} from "react"
import styled, {withTheme} from "styled-components";
import heroImg from "../../images/pexels-christina-morillo.png"
import heroImgMin from "../../images/hero-lg.webp"
import heroBg from "../../images/header-bg.svg"
import Text, {
    default as Title,
} from "../../components/Text";
import {breakPoints} from "../../app-config";
import {AnimatePresence, motion, useAnimation} from "framer-motion";
import ButtonLink from "../../components/ButtonLink";
import Menu from "../common/Menu";
import {containerAnim, fadeInUp, fadeInUpScale} from "../../animation";
import {useInView} from "react-intersection-observer";


const Header = (props) => {
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
            className={'hero'}>
            <Menu/>
            <Text 
                            variants={fadeInUp}
                            as={'span'}
                            color={props.theme.white}
                            lineHeight={'170%'}
                            fontWeight={100}
                            size={0.7}
                            sizeLg={0.4}
                            sizeXl={0.6}
                            className={'textRotation2'}>
                            pad business network foundation.
                        </Text>
            <Wrapper
                ref={contentRef}
                animate={animation}
                initial='initial'
                variants={containerAnim}>
                <HeroLeft className="hero-left">
                    <HeroLeftContent className="hero-left-content">
                        <div className="hero-left-content-title-wrapper main-title">
                            <Title
                                variants={fadeInUp}
                                stacked
                                color={props.theme.white}
                                size={3.2}
                                sizeMd={7}
                                sizeLg={7}
                                marginTopLg={80}
                                sizeXl={9}
                                marginLeftXl={20}
                                marginTopXl={64}
                                fontWeight={800}
                                lineHeight={"50%"}
                                className={'hero-left-content-title'}>
                                <span>PAD</span><br />
                                <span>Business</span><br />
                                <span>Network</span>
                            </Title>
                        </div>
                        <Text
                            variants={fadeInUp}
                            as={'span'}
                            color={props.theme.white}
                            maxWidthLg={'430px'}
                            lineHeight={'170%'}
                            fontWeight={400}
                            marginTop={16}
                            marginTopMd={40}
                            marginBottom={32}
                            size={0.7}
                            sizeLg={0.4}
                            marginTopLg={56}
                            marginLeftLg={56}
                            sizeXl={0.6}
                            marginTopXl={126}
                            marginLeftXl={150}
                            className={'hero-left-content-excerpt'}>
                            PAD Business Network est une<br />
                            plateforme pour le renforcement des<br /> 
                            capacités des africains et ses <br />
                            descendants partout dans le monde.
                        </Text>

                       
                    </HeroLeftContent>
                </HeroLeft>
                <HeroRight>
                    <HeroFigure
                        className={'hero-right-figure'}>
                        <HeroImage
                            variants={fadeInUp}
                            className={'hero-right-image'}
                            src={heroImg}
                            srcset={heroImgMin + " 415w"}
                            alt=""/>
                    </HeroFigure>
                    
                </HeroRight>
            </Wrapper>
        </Container>
    )
}

const Container = styled.div`
    position:relative;
    background:#1E2D44;
    padding-bottom:50px;
    @media  (min-width:  ${breakPoints.md}) {
        min-height: 70vh;
    }
`
const Blob = styled(motion.img)`
  position: absolute;
  z-index: -1;
  top: 0;
  right: 0;
  width: 40%;
`

const Wrapper = styled(motion.div)`
  position:relative;
  padding: 20px;
  @media  (min-width:  ${breakPoints.lg}){
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    max-width: 1600px;
    padding: 0 100px;
  }
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    max-width: 1600px;
    margin-top:64px;
    padding: 0px 10px;
      }
      
    }
`

const HeroLeft = styled(motion.div)`
  position:relative;
  @media  (min-width:  ${breakPoints.md}){
      width: 100%;
  }
`

const HeroLeftContent = styled(motion.div)`
@media (min-width:${breakPoints.lg}){
  position:absolute;
  left: 0;
  z-index: 1;
  width: 100%;
}
`

const HeroRight = styled(motion.div)`
  position:relative;
  margin-top: 32px;
  @media (min-width:  ${breakPoints.lg}) {
      width: 120%;
      min-width: 500px;
  }  
  @media (min-width:  ${breakPoints.xl}) {

  }
`
const HeroFigure = styled(motion.figure)`
  overflow: hidden;
  max-width: 780px;
  position:relative;
  @media (min-width:  ${breakPoints.md}) {
      width: 100%;

  }
  
   @media (min-width:  ${breakPoints.lg}) {
       margin-top: 80px;
  }
`
const HeroImage = styled(motion.img)`
 width: 100% ;
`
const Testimonial = styled(motion.div)`
  position:absolute;
  background: ${props => props.theme.blue};
  width: 250px;
  padding: 20px;
  opacity: 0.98;
   @media (max-width:${breakPoints.lg}){
      bottom: -20px;
      left: 0;
  }

    @media (min-width:${breakPoints.lg}){
      padding: 20px;
      bottom: -50px;
      right: -100px;
      width: 300px;
  }
`

const ButtonWrapper = styled(motion.div)`
`

export default withTheme(Header)
