import React, {useEffect, useState} from "react"
import styled, {withTheme} from "styled-components";
import PartnersList from "../../data/partenaires.json"
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {containerAnim, fadeInUp} from "../../animation";
import _ from "lodash"
import Text from "../../components/Text";
import {breakPoints} from "../../app-config";


const Logos = (props) => {
    const animation = useAnimation();
    const [partners, setPartner] = useState(null);
    const [contentRef, inView] = useInView({
        rootMargin: "-100px",
    })

    useEffect(() => {
        setPartner(PartnersList);
        if (inView) {
            animation.start("animate")
        }
    }, [animation, inView])


    return (
        <Container
            ref={contentRef}
            animate={animation}
            initial='initial'
            variants={containerAnim}
        >
            <Wrapper>
                {_.map(partners, (partner, index) => (
                    <PartnerItem variants={fadeInUp} key={partner.text + index}>
                        <WrapperImage>
                            <Image size={partner.size} src={require("../../images/logos/" + partner.image + ".png")}
                                   alt={partners.image + "logo"}/>
                        </WrapperImage>
                        <Text
                            marginTop={16}
                            fontWeight={300}
                            size={0.4}
                            color={props.theme.blue}
                        >{partner.text}</Text>
                    </PartnerItem>
                ))}
            </Wrapper>
        </Container>
    )
}

export default withTheme(Logos)

const Container = styled(motion.div)`
  overflow: hidden;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 50px;
  @media (min-width: ${breakPoints.lg}) {
    min-height: 0vh;
  }
`

const Wrapper = styled(motion.div)`
  display: grid;
  position: relative;

  @media (max-width: ${breakPoints.sm}) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 420px;
  }

  @media (min-width: ${breakPoints.sm}) and (max-width: ${breakPoints.md}) {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: ${breakPoints.md}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 0 auto;
    max-width: 1500px;
  }
  @media (min-width: ${breakPoints.lg}) {
    max-width: 1500px;
    height: 200px;
  }

`

const PartnerItem = styled(motion.div)`
  max-width: 160px;

`
const WrapperImage = styled(motion.div)`
  height: 100px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-content: center;
  overflow: hidden;
`
const Image = styled(motion.img)`
  width: ${props => props.size ? props.size : '50%'};
  align-self: center;
`


