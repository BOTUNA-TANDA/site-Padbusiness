import React from "react";
import styled, {withTheme} from "styled-components";
import {breakPoints} from "../../app-config";
import {motion} from "framer-motion";
import scrollTo from 'gatsby-plugin-smoothscroll';


const Menu = (props) => {
    return (
        <Container>
            <ContentWrapper>
                <Title color={props.theme.white}>
                    PAD Business Network.
                </Title>
                <LinkWrapper>
                    <button className={"menuScrollTo "} onClick={() => scrollTo('#vision')}>Vision</button>
                    <button className={"menuScrollTo "} onClick={() => scrollTo('#objectif')}>Objectifs</button>
                    <button className={"menuScrollTo"} onClick={() => scrollTo('#NosActivites')}>Activités</button>
                    <button className={"menuScrollTo"} onClick={() => scrollTo('#contact')}>Contact</button>
                </LinkWrapper>
            </ContentWrapper>
        </Container>
    )
}

export default withTheme(Menu)

const Container = styled(motion.div)`
  position: relative;
  z-index: 5;
  padding-top: 24px;
  padding-bottom: 32px;
  width: 100vw;
  @media (min-width: ${breakPoints.sm}) {
    width: 400px;
  }
`

const ContentWrapper = styled(motion.div)`
  display: grid;
  max-width: 700px;
  grid-template-columns: 1fr 1fr;
  @media (min-width: ${breakPoints.md}) {
    padding-left: 70px;
  }
`

const LinkWrapper = styled(motion.div)`
  display: flex;
  align-self: center;
  justify-self: flex-start;
  min-width: 200px;
  margin-left: 160px;

  justify-content: space-between;
  @media (max-width: ${breakPoints.sm}) {
    display: none;
  }
`

const Title = styled(motion.h2)`
  position: relative;
  margin-top: 00px;
  @media (max-width: ${breakPoints.sm}) {
    margin-left: 24px;
  }

  z-index: 4;
  color: ${props => props.theme.white};
`

