import React, {useEffect} from "react"
import styled, {withTheme} from "styled-components";
import Text from "../../components/Text";
import {motion, useAnimation} from "framer-motion";
import {breakPoints} from "../../app-config";
import {useInView} from "react-intersection-observer";
import {containerAnim, fadeInUp} from "../../animation";
import { useI18next } from 'gatsby-plugin-react-i18next';



const objectivesList = [
  
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

function ObjectivesItem(props) {
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

const Objectives = (props) => {
    const animation = useAnimation();
    const [contentRef, inView] = useInView({
        rootMargin: "-100px",
    })

    const { t } = useI18next();
  
    useEffect(() => {
        if (inView) {
            animation.start("animate")
        }
    }, [animation, inView])


    return (
        <Container id="objectif" className={'space'}
                   ref={contentRef}
                   animate={animation}
                   initial='initial'
                   variants={containerAnim}
        >
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
               {t('objectif-rotation')}
            </Text>
            <div className="imgWrapper">
                {/*<motion.img*/}
                {/*    src={aboutBg}*/}
                {/*    alt="space background decoration"*/}
                {/*    className="about-decoration-bg"/>*/}
            </div>
            <div className="space-content">
                <Title className={'space-title main-title'}>
                    <Text

                        marginBottom={32}
                        variants={fadeInUp}
                        color={props.theme.orange2}
                        size={2}
                        sizeLg={6}
                        mawLg={"50px"}
                        lineHeight={0.5}

                        fontWeight={900}

                    >
                        <span className={"space-title-item "}>{t('objectif-title.sylab')}</span><br/>
                        <span className={"space-title-item "}>{t('objectif-title')}</span>
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

                        {t('objectif.t2.sylab')}
                        <br/>
                        {t('objectif.t2.sylab-second')}

                    </Text>
                    <Text

                        marginTop={"8"}
                        marginBottom={"24"}
                        marginBottomLg={80}
                        fontWeight={400}
                    >
                        {t('objectif.t3.sylab')}
                        <br/>
                        {t('objectif.t3.sylab-second')}

                    </Text>

                    <div className="space-content-right">
                        <ObjectivesList>
                            {objectivesList.map((object,index) => {
                                return (
                                    <ObjectivesItem key={object.title + index} service={object} theme={props.theme}/>
                                )
                            })}
                        </ObjectivesList>
                    </div>
                </ContentContainer>
            </div>
        </Container>
    )
}

export default withTheme(Objectives)

//-------------------------------------------
const Container = styled(motion.div)`
  overflow-x: hidden;
  padding-top: 50px;
  position: relative;
  padding-bottom: 50px;

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
  
  .textRotation1{
    @media (max-width: ${breakPoints.xl}){
     display: none ;
    }
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: ${breakPoints.lg}) {
    /* flex-direction: row; */
  }
`
//-------------------------------------------
const ObjectivesList = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 40px;
  column-gap: 53px;

  .space-service-list {
    max-width: 300px;
    line-height: 130%;
  }

  @media (min-width: ${breakPoints.md}) {
    grid-template-columns: 1fr 1fr;
    .right {
      margin-left: 20px;
      margin-top: 80px;
    }
  }

  @media (min-width: ${breakPoints.lg}) {
    transform: translateY(-80px);
    grid-template-columns: 1fr 1fr 1fr;

  }
`