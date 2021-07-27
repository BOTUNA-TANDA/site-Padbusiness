import React, {useEffect} from "react"
import styled, {withTheme} from "styled-components";
import heroImg from "../../images/header.png"
import heroImgMin from "../../images/header.png"
import Text, {
    default as Title,
} from "../../components/Text";
import {breakPoints} from "../../app-config";
import {motion, useAnimation} from "framer-motion";
import Menu from "../common/Menu";
import {containerAnim, fadeInUp} from "../../animation";
import {useInView} from "react-intersection-observer";
import {  useI18next } from 'gatsby-plugin-react-i18next';

const Header = (props) => {
    const animation = useAnimation();
    const [contentRef, inView] = useInView({
        rootMargin: "0px",
    })

    const {t} = useI18next();
  
  
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
                {t('header.title-rotation')}
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
                                sizeMd={5}
                                sizeLg={6}
                                marginTopLg={80}
                                sizeXl={7}
                                marginLeftXl={80}
                                marginTopXl={64}
                                fontWeight={800}
                                lineHeight={"50%"}
                                className={'hero-left-content-title'}>
                                <span>{t('header.t.sylab') }</span><br/>
                                <span>{ t('header.t.sylab-second')}</span><br/>
                                <span>{ t('header.t.sylab-third')}</span>
                            </Title>
                        </div>
                        <Text
                            variants={fadeInUp}
                            as={'span'}
                            color={props.theme.white}
                            maxWidthLg={'430px'}
                            lineHeight={'170%'}
                            fontWeight={400}
                            marginTop={50}
                            marginTopMd={40}
                            marginBottom={32}
                            size={0.7}
                            sizeLg={0.4}
                            marginTopLg={56}
                            marginLeftLg={56}
                            sizeXl={0.6}
                            marginTopXl={126}
                            marginLeftXl={100}
                            className={'hero-left-content-excerpt'}>
                              {t('header.p1.sylab')}<br/>
                              {t('header.p1.sylab-second')}<br/>
                              {t('header.p1.sylab-third')}<br/>
                              {t('header.p1.sylab-forth')}
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
  position: relative;
  background: #1E2D44;
  padding-bottom: 50px;
  @media (min-width: ${breakPoints.md}) {
    height: 100vh;
  }
`

const Wrapper = styled(motion.div)`
  position: relative;
  padding: 20px;
  @media (min-width: ${breakPoints.lg}) {
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    max-width: 1600px;
    padding: 0 100px;
  }
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    max-width: 1600px;
    margin: 64px auto 0;
    padding: 0 10px;
  }
}
` ;

const HeroLeft = styled(motion.div)`
  position: relative;
  @media (min-width: ${breakPoints.md}) {
    width: 100%;
  }
`

const HeroLeftContent = styled(motion.div)`
  @media (min-width: ${breakPoints.lg}) {
    position: absolute;
    left: 0;
    z-index: 1;
    width: 100%;
  }
`

const HeroRight = styled(motion.div)`
  position: relative;
  margin-top: 32px;
  @media (min-width: ${breakPoints.lg}) {
    width: 120%;
    min-width: 500px;
  }
  @media (min-width: ${breakPoints.xl}) {

  }
`
const HeroFigure = styled(motion.figure)`
  overflow: hidden;
  max-width: 780px;
  position: relative;
  @media (min-width: ${breakPoints.md}) {
    width: 100%;

  }

  @media (min-width: ${breakPoints.lg}) {
    margin-top: 80px;
  }
`
const HeroImage = styled(motion.img)`
  width: 100%;
`

export default withTheme(Header)
