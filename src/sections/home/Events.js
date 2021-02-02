// import React, {useEffect, useState} from "react"
// import styled, {withTheme} from "styled-components";
// import Carousel from "../../components/Carousel";
// import Text from "../../components/Text";
// import {breakPoints} from "../../app-config";
// import aboutBg from "../../images/pexels-christina-morillo-3.png";
// import {motion} from "framer-motion";
// import {useQuery} from "@apollo/client";
// import {GET_EVENTS} from "../../queries";
// import 'fontsource-roboto';

// import '../../../node_modules/npm-font-open-sans';


// const Events = (props) => {
//     const { loading, error, data } = useQuery(GET_EVENTS);
//     let [dataObject,setDataObject] = useState([])

//     useEffect(() => {
//         if(loading === false && data){
//             setDataObject(data)
//         }
//     }, [loading, data])

//     const ActiviteLeft = [
//         {
//           title: "1. Le Coaching",
//           text:
//             "PAD Biz s'est fixé comme objectif de développer le capital humain afin d'accéder à l'éducation, qui est un droit fondamental et permet de renforcer le développement.",
//         },
//         {
//           title: "2. Le Networking",
//           text:
//             "PAD Biz se donne l'objectif de mettre en réseau ses membres, dans le but de créer des synergies et de renforcer les interactions et les opportunités de business avec des acteurs du monde économique.",
//         },
//         {
//           title: "3. Le Financement ",
//           text:
//             "Nous finançons, investissons dans les projets de nos membres grâce à nos sponsors et bailleurs des fonds.",
//         },
//       ]
      
//       function ActiviteItem(props) {
//         return (
//           <div className="div-col">
//             <Title className={"space-title"}>
//               <Text
               
//                 color={props.theme.orange2}
//                 size={"68px"}
//                 sizeLg={1}
//                 mawLg={"50px"}
//                 lineHeight={"150%"}
//                 fontWeight={800}
//               >
//                 <span className={"space-title-item"}>{props.Activite.title}</span>
//               </Text>
//             </Title>
//             <Text as={"span"} color={"bleu3"} maxWidthLg={"500px"} fontWeight={400}>
//               {props.Activite.text}
//             </Text>
//           </div>
//         )
//       }

//     return (
//         <Container >
//             <EventTitleWrapper
//                 className={'events-title-wrapper'}>
//                 <Title>
//                     <Text
//                     marginTop={"32"}
//                         stacked
//                         color={props.theme.orange2}
//                         size={2.5}
//                         sizeLg={6}
//                         lineHeight={'110%'}
//                         fontWeight={800}
                       
//                         className={'events-title'}
//                         marginBottom = {"32"}>
//                         <span className={'events-title-item main-title'}>Nos</span>
//                         <span className={'events-title-item main-title'}>Activités</span>
//                     </Text>
//                 </Title>
//             <Text className={'main-title'}
//              marginBottom = {"8"}
//              as={"p"}
//              color={props.theme.white}
//              fontWeight={800}
//              size={"1"}>
//            1. L’accompagement

//             </Text>

//             <Text
//             marginBottom = {32}
            
//              as={"p"}
//              color={props.theme.white}
//              fontWeight={400}
//              size={"0.7"}>
//             Nous aidons nos membres à réaliser leurs projets de nature 
//             entreprenariale, à travers un accompagnement rapproché. Nos 
//             experts soutiennent la rédaction des projets, le plan financier et  donnent des conseils juridiques.
//             </Text>
//             </EventTitleWrapper>
//             <SubContainer className={'events'}>
//                 <ContentWrapper>
//                     <ImageWrapper>
//                         <ImageActivite
//                             src={aboutBg}
//                             alt="event background image"
//                             className="events-decoration-bg"/>
//                     </ImageWrapper>
                    
//                 </ContentWrapper>
//             </SubContainer>
//         </Container>
//     )
// }

// export default withTheme(Events)

// const Container = styled.div`
//   background: ${props => props.theme.blue2};
//   position: relative;
//   padding-bottom:248px;
// `

// const EventTitleWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
  
// `

// const Title = styled(motion.h2)`
//   /*  position:relative;
   
//    margin-top:60px;
//    margin-left: 20px;
//    z-index: 4;
   
//    @media (min-width: ${breakPoints.md}){
//       margin-left: -10px;
//      .events-title-item{
//         &:nth-child(2){
//           margin-left: 0px;
//        }
//    }
//   } */
// `

// const ImageWrapper = styled.div`
// position: relative;
// /*height : 200px;
// width : 500px;
// margin-left:200px; */



// `
// const ImageActivite = styled.img`
//  position: absolue;
// /*top:0px;
// right:0px; */
// `
// const CarouselWrapper = styled.div``

// const SubContainer = styled.div`
//      .img-wrapper{
//          overflow: hidden;
//         width: 200px;
//    }
//    /*
//   @media (min-width: ${breakPoints.md}){
//   } */
// `
// const ContentWrapper = styled.div`
//       position:relative;
//       z-index: 2;
//       height: 100%;
// `
// const TextUn=styled.div`
//    /*  margin-left: 200px;
//     color:white;
//     font-Weight:700;
//     font-size:35px;
//     font-family: 'Open Sans';
//     font-style: normal;
//     font-weight: 800;
//     font-size: 35px;
//     line-height: 132%;
   
//     width: 380px;
//     height: 48px;
//     left: 229px;
//     top: 3517px; */

// `

// const TextDeux=styled.div`
//     /* margin-left: 200px;
//     margin-top:50px;
//     color:white;
//     font-Weight:400;
//     font-size:24px;
//     font-family: 'Roboto Mono';
//     font-style: normal;
//     font-weight: normal;
   
//     width: 861px;
//     height: 132px;
//     left: 226px;
//     top: 3590px; */

// `

import React, {useEffect, useState} from "react"
import styled, {withTheme} from "styled-components";

import Text from "../../components/Text";
import {breakPoints} from "../../app-config";
import aboutBg from "../../images/pexels-christina-morillo-3.png";
import {motion} from "framer-motion";
import {useQuery} from "@apollo/client";
import {GET_EVENTS} from "../../queries";
import {containerAnim, fadeInUp} from "../../animation";

const Events = props => {
  const { loading, data } = useQuery(GET_EVENTS)
  let [, setDataObject] = useState([])

  useEffect(() => {
    if (loading === false && data) {
      setDataObject(data)
    }
  }, [loading, data])

  return (
    <Container>
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
