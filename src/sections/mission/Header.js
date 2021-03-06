import React from "react"
import styled, {withTheme} from "styled-components";
import Text, {
    default as Title,
} from "../../components/Text";
import {breakPoints} from "../../app-config";
import circleLogo from "../../images/circleLogo.svg";
import {motion} from "framer-motion";
import {containerAnim, fadeIn, scale} from "../../animation";
import Menu from "../common/Menu";




const Header = (props) => {
    return (
        <Container
            animate='animate'
            initial='initial'
            variants={containerAnim}
        >
            <Bg
                variants={scale}
            />
            <Menu/>
            <ImgWrapper
                variants={fadeIn}>
                <Text
                    src={circleLogo}
                    alt={'circle logo'}/>
            </ImgWrapper>
            <Wrapper>
                <Title
                    stacked
                    color={props.theme.orange}
                    fontWeight={800}
                    size={2.6}
                    sizeMd={6}
                    lineHeight={1}
                    textTransform={'capitalize'}
                    zIndex={3}
                    className={'mission-main-title'}
                >
                    <span>À propos de</span>
                    <span>Création</span>
                    <span>& Co.</span>
                </Title>
            </Wrapper>
        </Container>
    )
}

export default withTheme(Header)

const Container = styled(motion.div)`
  position:relative;
`
const Wrapper = styled.div`
  padding-left: 20px;
  width: 1000px;
  margin: 0 auto;
`

const Bg = styled(motion.div)`
  position:absolute;
  width: 80%;
  height: 200px;
  background: #f1f1f1;
  opacity: 0.2;
   @media (min-width: ${breakPoints.md}){
      height: 400px;
  }
`
const ImgWrapper = styled(motion.div)`
  position: absolute;
  z-index: 2;
  height: 200px;
  width: 200px;
  right: 14%;
  display: none;
  @media (min-width: ${breakPoints.md}){
    display: block;
  }
`

const Img = styled.img`
  width: 100%;
`