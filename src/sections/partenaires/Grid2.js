import React, {useEffect, useState} from "react"
import styled, {withTheme} from "styled-components";
// import MissionTitle from "../../components/MissionTitle";
// import valuesBg from "../../images/ourValuesDecoration.png"
// import {breakPoints} from "../../app-config";
import PartnersList from "../../data/partenaires.json"
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {containerAnim, fadeInUp} from "../../animation";
import _ from "lodash"
import Text from "../../components/Text";
import {breakPoints} from "../../app-config";


const Grid2 = (props) => {
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
                {_.map(partners, (partner,index) => (
                    <PartnerItem variants={fadeInUp} key={partner.text}>
                        <WrapperImage>
                            <Image size={partner.size} src={require("../..//images/logos/" + partner.image + ".png")}
                                   alt= {partners.image + "logo"}/>
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

export default withTheme(Grid2)

const Container = styled(motion.div)`
  overflow: hidden;
  justify-content:center;
  padding-top:50px;
  padding-bottom:50px;
  @media (min-width: ${breakPoints.lg}){
    min-height: 0vh; 
  }
`

const Wrapper = styled(motion.div)`
    display:grid;
    position:relative;

    @media (max-width: ${breakPoints.sm}){    
        grid-template-columns: 1fr 1fr;
        
        max-width: 420px;
    }

    @media (min-width: ${breakPoints.sm}) and (max-width: ${breakPoints.md}){
        position: relative;
        display:grid;
        grid-template-columns: 1fr 1fr 1fr;
    }
   
    @media (min-width: ${breakPoints.md}){
        display: flex;
    justify-content:space-between;
    align-items:center;
    flex-wrap:wrap;
        margin: 0 auto;
        max-width: 1500px;
    }
    @media (min-width: ${breakPoints.lg}){
        max-width: 1500px;
        height:200px;
    }

`

const PartnerItem = styled(motion.div)`
    max-width: 160px;
    
`
const WrapperImage = styled(motion.div)`
  height: 100px;
  width: 205px;
  display: grid;
  overflow: hidden;
`
const Image = styled(motion.img)`
  width: ${props => props.size ? props.size : '50%'};
  align-self: flex-end;
`

const LinkWrapper = styled(motion.div)`
   position: relative;
   height: 30px;
   padding-top: 8px;
   margin-top: 16px;
`

const Link = styled(motion.a)`
   position: relative;
  display: inline-block;
  font-size: 1em;
  margin-left: 12px;
  color: ${props => props.theme.orange};
  font-weight: 800;
  text-decoration: underline;
  // text-decoration: none;
  overflow: hidden;
  &::before {
    position: absolute;
    content: attr(data-content);
    top: 0;
    left: 0;
    width: 0;
    color: #00286e;
    text-decoration: underline;
    white-space: nowrap;
    overflow: hidden;
    transition: width 275ms ease;
  }
  &:hover::before {
    width: 100%;
  }
`

const BgLink = styled(motion.div)`
   position:absolute;
   height: 28px;
   width: 28px;
   border-radius: 100px;
   top: 2px;
   background: #FDD9C6;
   z-index: -1;
`

