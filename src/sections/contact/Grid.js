// import React, { useEffect, useState } from "react"
// import styled, { withTheme } from "styled-components"
// import circleLogo from "../../images/circleLogo.svg"
// import circleBg from "../../images/circlebg.png"
// import { motion, useAnimation } from "framer-motion"
// import { containerAnim, fadeInUp } from "../../animation"
// import Text, { default as Title } from "../../components/Text"
// import { breakPoints } from "../../app-config"
// import Menu from "../common/Menu"
// import parse from "html-react-parser"


// const servicesLeft = [
//   {
//     title: " Adresse",
//     text: "Square de Meeûs,35 "+'<br\>'+
//     " 1000 Bruxelles - Belgique ",
//   },
//   {
//     title: "Nous soutenir /Donate  ",
//     text: "pad.business.network@gmail.com"+'<br\>'
//           +"BE82 0689 3456 0368 - BIC:GKCCBEBB",
//   },
//   {
//     title: "Mobile",
//     text: " +32 484 52 32 63 "+'<br\>'+" +243 822 77 07 04",
//   },
//   {
//     title: "EMAIL ",
//     text: "info@padbiz.org",
//   },
//   {
//     title: "Nous suivre ",
//     text: " ",
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
//           fontWeight={800}
//         >
//           <span className={"space-title-item"}>{props.service.title}</span>
//         </Text>
//       </Title>
//       <Text as={"span"} color={"bleu3"} maxWidthLg={"500px"} fontWeight={400}>
//         {parse(props.service.text)}
//       </Text>
//     </div>
//   )
// }

// const Grid = props => {
//   return (
//     <Container animate="animate" initial="initial" variants={containerAnim}>
     
//       <Wrapper>
//         <Left>
//           <LeftTextWrapper>
//             <TitleWrapper>
//               <Title
//               className={"main-title"}
//                 variants={fadeInUp}
//                 stacked
//                 color={props.theme.orange2}
//                 marginTop={"16"}
//                 marginTopSm={4}
//                 fontWeight={800}
//                 size={"2"}
//                 zIndex={5}
//                 sizeMd={3.5}
//                 lineHeight={0.9}
//                 textTransform={"capitalize"}
//               >
//                 <span>Contactez-</span>
//                 <span>Nous.</span>
//               </Title>
//             </TitleWrapper>
//             <Text
            
//               variants={fadeInUp}
//               marginTop={"16"}
//               marginTopSm={4}
//               size={"0.7"}
//               sizeMd={0.5}
//               fontWeight={400}
//               maxWidthSm={"500px"}
//               color={props.theme.blue2}
//             >
//               Avec la collaboration de
//             </Text>
//             <Text
//               variants={fadeInUp}
//               marginTop={"16"}
//               marginTopSm={4}
//               size={"0.7"}
//               sizeMd={0.5}
//               fontWeight={400}
//               maxWidthSm={"500px"}
//               color={props.theme.blue2}
//             >
//               Cité des Métiers / UNIDO
//             </Text>
//             <Text
//               variants={fadeInUp}
//               marginTop={10}
//               marginTopSm={4}
//               marginBottom={50}
//               size={0.7}
//               sizeMd={0.5}
//               fontWeight={400}
//               maxWidthSm={"500px"}
//               color={props.theme.blue2}
//             >
//               ENPAD / CHANGE asbl
//             </Text>
//           </LeftTextWrapper>
//         </Left>
//         <Right>
          
//           <ServiceListItem>
//             {servicesLeft.map(object => {
//               console.log("===>", object)
//               return (
//                 <ServiceItem service={object} theme={props.theme}></ServiceItem>
//               )
//             })}
//           </ServiceListItem>
//         </Right>
//       </Wrapper>
//     </Container>
//   )
// }

// export default withTheme(Grid)

// const Container = styled(motion.div)`
//    min-height: 100vh;
//   display: flex;
//   background: ${props => props.theme.white};
//  /* @media (min-width: ${breakPoints.md}) {
//     height: 100%;
   
//   } */
// `


// const TitleWrapper = styled(motion.div)`
//   /* margin-top: 32px; */
// `

// const CircleLogo = styled(motion.img)`
//   /* position: absolute;
//   width: 200px;
//   height: 200px;
//   z-index: 1;
//   top: 30%;
//   transform: translateX(-50%); */
// `

// const CircleBg = styled(motion.img)`
//   /* position: absolute;
//   width: 800px;
//   height: 800px;
//   z-index: -4;
//   top: 30%;
//   right: -600px;
//   transform: translateX(-50%); */
// `

// const Wrapper = styled(motion.div)`
//    display: grid;
//   width: 100%;
//  /* @media (min-width: ${breakPoints.md}) {
//     grid-template-columns: 1fr 1fr;
//   } */
// `

// const Left = styled(motion.div)`
//   /* position: relative;
//   padding: 20px;
//   background: #f6f6f6;
//    */
// `
// const Right = styled(motion.div)`
//   overflow: hidden;
//   position: relative;
//   z-index: 0;
//   padding-left: 20px;
 
//    /* @media (min-width: ${breakPoints.md}) {
//     padding-left: 40px;
//   } */
// `

// const LeftTextWrapper = styled(motion.div)`
//    align-self: center;
//   /* @media (min-width: ${breakPoints.md}) {
//     justify-self: center;
//   } */
// `
// const RightTextWrapper = styled(motion.div)`
//  /*  justify-self: flex-start;
//   align-self: center; */
// `
// const ServiceListItem = styled(motion.div)`
//   margin-bottom: 108px;
//   display: grid;
//   grid-template-columns: 1fr;
//   grid-row-gap: 50px;
//   grid-column-gap: 60px;
// `


import React, {useEffect, useState} from "react"
import styled, {withTheme} from "styled-components";
import circleLogo from "../../images/circleLogo.svg"
import circleBg from "../../images/circlebg.png"
import facebook from "../../images/logos/facebook.png";
import {motion, useAnimation} from "framer-motion";
import {containerAnim, fadeInUp} from "../../animation";
import Text, {default as Title} from "../../components/Text";
import {breakPoints} from "../../app-config";
import Menu from "../common/Menu";
import parse from "html-react-parser"


const servicesLeft = [
     {
       title: " Adresse",
       text: "Square de Meeûs,35 <br/> 1000 Bruxelles <br/> Belgique ",
     },
     {
       title: "Nous soutenir /Donate  ",
       text: "pad.business.network@gmail.com <br/> BE82 0689 3456 0368 - BIC:GKCCBEBB",
     },
     {
       title: "Mobile",
       text:  " +32 484 52 32 63 <br/> +243 822 77 07 04",
     },
     {
       title: "EMAIL ",
       text: "info@padbiz.org",
     },
     {
       title: "Nous suivre ",
       text:'  <a target="_blank" href="https://www.facebook.com/adresse_de_votre_page_facebook"> <img src="../../images/logos/facebook.png"></a>',
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
        maxWidthLg={"229px"} 
        fontWeight={400}
        >
         {parse(props.service.text)}
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
                sizeMd={0.6}
                fontWeight={600}
                className={"space-service-item-text"}>{props.service}</Text>
        </ServiceListItem>
    )
}

const Grid = (props) => {
    return (
        <Container
            animate='animate'
            initial='initial'
            variants={containerAnim}
        >
            <CircleLogo src={circleLogo}/>
            <MenuWrapper>
                <Menu/>
            </MenuWrapper>
            <Wrapper>
                <Left>
                    <LeftTextWrapper>
                        <TitleWrapper>
                            <Title
                                className={'space-description main-title'}
                                variants={fadeInUp}
                                stacked
                                marginTopMd={-350}
                                color={props.theme.orange2}
                                fontWeight={800}
                                size={2.5}
                                zIndex={5}
                                sizeMd={3.5}
                                lineHeight={0.9}
                                textTransform={'capitalize'}>
                                <span>Contactez</span>
                                <span>Nous</span>
                            </Title>
                        </TitleWrapper>
                        <Text
                            variants={fadeInUp}
                            marginTop={32}
                            marginTopSm={40}
                            size={0.7}
                            sizeMd={0.5}
                            fontWeight={400}
                            maxWidthSm={'500px'}
                            color={props.theme.blue3}>
                            Avec la collaboration de <br/>
                            Cité des Métiers / UNIDO <br/>
                            ENPAD / CHANGE asbl <br/>
                        </Text>
                    </LeftTextWrapper>
                </Left>
                <Right>
                    <CircleBg src={circleBg}/>
                    <RightTextWrapper>
                    <ContentContainer className="space-content-column">
                 
                  
               
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
                    </RightTextWrapper>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default withTheme(Grid)

const Container = styled(motion.div)`
    min-height: 100vh;
    display: flex;
    padding-top:50px;
    padding-bottom:50px;
  @media (min-width: ${breakPoints.md}){
    height: 100%;
    min-height: calc(100vh - 200px);
  }
`

const MenuWrapper = styled(motion.div)`
  position: absolute;
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
  width:800px;
  height: 800px;
  z-index: -4;
  top: 30%;
  right: -600px; 
  transform: translateX(-50%);
`

const Wrapper = styled(motion.div)`
   display: grid;
   width: 100%;
  @media (min-width: ${breakPoints.md}){
    grid-template-columns: 1fr 1fr;
  }
`

const Left = styled(motion.div)`
  position: relative;
  padding: 20px;   
  background: #FFF;
  display: grid;
  
  
`
const Right = styled(motion.div)`
  overflow:hidden;
  position:relative;
  z-index: 0;
  padding-left: 20px;
  display: grid;
  @media (min-width: ${breakPoints.md}){
      padding-left: 40px;
      margin-top:50px;
  }
`

const LeftTextWrapper = styled(motion.div)`
    align-self: center;
    @media (min-width: ${breakPoints.md}){
    justify-self: center;
  }
`
const RightTextWrapper = styled(motion.div)`
  justify-self: flex-start;
  align-self: center;
  
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
    grid-template-columns: 1fr ;
    .right{
      margin-left: 20px;
      margin-top: 80px;
    }
  }   
  
  @media (min-width: ${breakPoints.lg}){
     transform: translateY(-80px);
  }

`
//-------------------------------------------
const ServiceListItem = styled(motion.div)`
  margin-bottom: 40px;
  display:grid;
  grid-template-columns: 1fr 1fr
`


