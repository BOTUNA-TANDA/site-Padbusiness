// import React, { useEffect } from "react"
// import styled, { withTheme } from "styled-components"
// import Text from "../../components/Text"
// import { motion, useAnimation } from "framer-motion"
// import { breakPoints } from "../../app-config"
// import aboutBg from "../../images/spaces-decoration.png"

// import { useInView } from "react-intersection-observer"
// import { containerAnim, fadeInUp } from "../../animation"

// const servicesLeft = [
  
//   {
//     title: "1. Le Coaching",
//     text:
//       "PAD Biz s'est fixé comme objectif de développer le capital humain afin d'accéder à l'éducation, qui est un droit fondamental et permet de renforcer le développement.",
//   },
//   {
//     title: "2. Le Networking",
//     text:
//       "PAD Biz se donne l'objectif de mettre en réseau ses membres, dans le but de créer des synergies et de renforcer les interactions et les opportunités de business avec des acteurs du monde économique.",
//   },
//   {
//     title: "3. Le Financement ",
//     text:
//       "Nous finançons, investissons dans les projets de nos membres grâce à nos sponsors et bailleurs des fonds.",
//   },
// ]

// function ServiceItem(props) {
//   return (
//     <div className="div-col">
//       <Title className={"space-title"}>
//         <Text
//           variants={fadeInUp}
//           color={props.theme.orange2}
//           size={"68px"}
//           sizeLg={1}
//           mawLg={"50px"}
//           lineHeight={"150%"}
//           lineHeightLg={"50px"}
//           fontWeight={800}
//         >
//           <span className={"space-title-item"}>{props.service.title}</span>
//         </Text>
//       </Title>
//       <Text as={"span"} color={"bleu3"} maxWidthLg={"229px"} fontWeight={400}>
//         {props.service.text}
//       </Text>
//     </div>
//   )
// }

// const Space = props => {
//   const animation = useAnimation()
//   const [contentRef, inView] = useInView({
//     rootMargin: "-100px",
//   })

//   useEffect(() => {
//     if (inView) {
//       animation.start("animate")
//     }
//   }, [animation, inView])

//   return (
//     <Container
//       className={"space "}
//       ref={contentRef}
//       animate={animation}
//       initial="initial"
//       variants={containerAnim}
//     >
//       <div className="imgWrapper">
//        {/*  <motion.img
//           src={aboutBg}
//           alt="space background decoration"
//           className="about-decoration-bg"
//         /> */}
//       </div>
//       <div className="space-content">
//         <Title className={"space-title main-title" }>
//           <Text
//             marginTop={32}
//             variants={fadeInUp}
//             color={props.theme.orange2}
//             size={"2"}
//             sizeLg={6}
//             mawLg={"50px"}
//             lineHeight={"55%"}
//             fontWeight={800}
//             marginBottom = {32}
            
//           >
//             <span className={"space-title-item "}>Nos</span><br />
//             <span className={"space-title-item "}>Objectifs.</span>
//           </Text>
//         </Title>

//         <Text className={"space-title main-title " }
//           variants={fadeInUp}
//           as={"p"}
//           color={props.theme.blue3}
//           fontWeight={700}
//           marginBottom = {5}
//           size={"1"}
          
        
          
//         >
//           Principalement Le Renforcement Des Capacités
//           <br />
//           Économiques Des Personnes Afro-Descendantes.
//         </Text>

//         <Text 
          
//           marginTop = {"8"}
//           marginBottom={"64"}
//           fontWeight={400}
//         >
//           Nous atteignons nos objectifs par le biais du Coaching,
//           <br />
//           Le networking et Le financement.
          
//         </Text>

//         <ServiceListItem>
//           {servicesLeft.map(object => {
//             console.log("===>",object);
//             return (
//               <ServiceItem service={object} theme={props.theme}></ServiceItem>
//             )
//           })}
//         </ServiceListItem>
//       </div>
//     </Container>
//   )
// }

// export default withTheme(Space)

// //-------------------------------------------
// const Container = styled(motion.div)`
//   overflow-x: hidden;
//   padding-top: 100px;
//   position: relative;
//   padding-bottom: 100px;
//   .imgWrapper {
//     overflow: hidden;
//   }
//   .about-decoration-bg {
//     width: 1500px;
//     position: absolute;
//     z-index: -1;
//     right: 0;
//   }
//   .space-content {
//     max-width: 1300px;
//     margin: 0 auto;
//     display: flex;
//     flex-direction: column;
//     padding: 0px;
//     padding-left: 0px;
//   }
//   .bold {
//     font-weight: 500;
//   }
// `
// //-------------------------------------------
// const Title = styled(motion.h2)`
//   .space-title-item {
//     display: block;
   
    
//   }
//   @media (min-width: ${breakPoints.md}) {
//     .space-title-item {
//       &:nth-child(1) {
//         margin-left: 0;
//       }
//       &:nth-child(2) {
//         margin-left: -20px;
//       }
//       &:nth-child(3) {
//         margin-left: 10px;
//       }
//     }
//   }
// `
// //-------------------------------------------
// const ContentContainer = styled(motion.div)`
//   display: grid;
//   flex-direction: column;
//   justify-content: space-between;
//   @media (min-width: ${breakPoints.lg}) {
//     flex-direction: row;
//   }
// `
// //-------------------------------------------

// //-------------------------------------------

// //-------------------------------------------
// const ServiceListItem = styled(motion.div)`
//   margin-bottom: 40px;
//   display: grid;
  
//   grid-template-columns: 1fr 1fr;
// `



import React, {useEffect} from "react"
import styled, {withTheme} from "styled-components";
import Text from "../../components/Text";
import {motion, useAnimation} from "framer-motion";
import {breakPoints} from "../../app-config";
import aboutBg from "../../images/spaces-decoration.png";
import ButtonLink from "../../components/ButtonLink";
import {useInView} from "react-intersection-observer";
import {containerAnim, fadeInUp} from "../../animation";

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
        maxWidthLg={300} 
        fontWeight={400}
        >
          {props.service.text}
        </Text>
      </div>
    )
  }
function SpaceServiceItem(props) {
    return (
        <ServiceListItem className={"space-service-item"}>
            <Text
                size={0.8}
                sizeMd={0.6}
                
                fontWeight={800}
                color={'#F78240'}
                className={"space-service-item-plus"}>+</Text>
            <Text
                marginLeft={16}
                font-weight={600}
                color={'#010253'}
                textTransform={'capitalize'}
                size={0.8}
                sizeMd={0.1}
                
                fontWeight={600}
                className={"space-service-item-text"}>{props.service}</Text>
        </ServiceListItem>
    )
}


const Space = (props) => {
    const animation = useAnimation();
    const [contentRef, inView] = useInView({
        rootMargin: "-100px",
    })

    useEffect(() => {
        if (inView) {
            animation.start("animate")
        }
    }, [animation, inView])


  

   /*  const listLeft = () => {
        return servicesLeft.map((service, index) => (
            <SpaceServiceItem key={index} service={service}/>
        ))
    }

    const listRight = () => {
        return servicesRight.map((service, index) => (
            <SpaceServiceItem key={index} service={service}/>
        ))
    } */

    return (
        <Container className={'space'}
                   ref={contentRef}
                   animate={animation}
                   initial='initial'
                   variants={containerAnim}
        >
            <div className="imgWrapper">
                <motion.img
                    src={aboutBg}
                    alt="space background decoration"
                    className="about-decoration-bg"/>
            </div>
            <div className="space-content">
                <Title className={'space-title main-title'}>
                    <Text
                        
                        marginBottom = {32}
                        variants={fadeInUp}
                        color={props.theme.orange2}
                        size={2}
                        sizeLg={6}
                        mawLg={"50px"}
                        lineHeight={0.5}
                        
                        fontWeight={900}
                        
                        >
                         <span className={"space-title-item "}>Nos</span><br />
                         <span className={"space-title-item "}>Objectifs.</span>
                    </Text>
                </Title>

                <ContentContainer className="space-content-column">
                   
                        <Text
                            variants={fadeInUp}
                            as={'p'}
                            color={props.theme.blue3}
                            fontWeight={700}
                            size={1}
                            marginTopXl={50}
                            className={'space-description main-title'}>

                            Principalement Le Renforcement Des Capacités
                            <br />
                            Économiques Des Personnes Afro-Descendantes.
                            
                        </Text>
                        <Text 
          
                            marginTop = {"8"}
                            marginBottom={"24"}
                            marginBottomLg={80}
                            fontWeight={400}
                  >
                    Nous atteignons nos objectifs par le biais du Coaching,
                    <br />
                    Le networking et Le financement.
                    
                  </Text>
                    
                    <div className="space-content-right">
                        <ServiceList>
                             {servicesLeft.map(object => {
                                          console.log("===>",object);
                                          return (
                                            <ServiceItem service={object} theme={props.theme}></ServiceItem>
                                          )
                                        })}
                        </ServiceList>
                    </div>
                </ContentContainer>
            </div>
        </Container>
    )
}

export default withTheme(Space)

//-------------------------------------------
const Container = styled(motion.div)`
  overflow-x: hidden;
  padding-top: 50px;
  position:relative;
  padding-bottom: 50px;
  .imgWrapper{
    overflow: hidden;
  }
  .about-decoration-bg{
    width: 1500px;
    position: absolute;
    z-index: -1;
    right: 0;
  }
  .space-content{
    max-width: 1300px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 32px;
  }
  .bold{
    font-weight: 500;
  }
`
//-------------------------------------------
const Title = styled(motion.h2)`
  .space-title-item{
    display: block;
  }
  @media (min-width: ${breakPoints.md}){
    .space-title-item{  
      &:nth-child(1){
        margin-left: 0;
      }
      &:nth-child(2){
        margin-left: -20px;
      }
      &:nth-child(3){
        margin-left: 10px;
      }    
    }
  }
`
//-------------------------------------------
const ContentContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: ${breakPoints.lg}){
    /* flex-direction: row; */ 
  }
`
//-------------------------------------------
const TextWithButton = styled(motion.div)`
  display: flex;
  flex-direction: column;
  .space-description{
    margin-top: 32px;
    margin-bottom: 24px;  
  }
  @media (min-width: ${breakPoints.lg}){
    max-width: 530px;
    margin-right: 20px; 
  }
`
//-------------------------------------------
const ServiceList = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 40px;
  column-gap: 53px;
  .space-service-list{
    max-width: 300px;
    line-height: 130%;
   }
   @media (min-width: ${breakPoints.md}){
    grid-template-columns: 1fr 1fr;
    .right{
      margin-left: 20px;
      margin-top: 80px;
      
    }
  }   
  
  @media (min-width: ${breakPoints.lg}){
     transform: translateY(-80px);
     grid-template-columns: 1fr 1fr 1fr;
     
  }

`
//-------------------------------------------
const ServiceListItem = styled(motion.div)`
  margin-bottom: 40px;
  display:grid;
  grid-template-columns: 1fr 1fr;

  
  
`