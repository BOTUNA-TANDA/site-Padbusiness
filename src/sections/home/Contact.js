import React from "react"
import styled, {withTheme} from "styled-components";
import {motion} from "framer-motion";
import {containerAnim, fadeInUp} from "../../animation";
import Text, {default as Title} from "../../components/Text";
import {breakPoints} from "../../app-config";
import ContactListItem from "../../components/ContactListItem";
import {contactInfos} from "../../data/contactInfo";


const Contact = (props) => {
    return (
        <Container id="contact"
                   animate='animate'
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
                Contact Us.
            </Text>
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
                    <RightTextWrapper>
                        <ContentContainer className="space-content-column">
                            <div className="space-content-right">
                                <ContactList>
                                    {contactInfos.map((contactInfo,index) => {
                                        return (
                                            <ContactListItem key={index} info={contactInfo} theme={props.theme}/>
                                        )
                                    })}
                                </ContactList>
                            </div>
                        </ContentContainer>
                    </RightTextWrapper>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default withTheme(Contact)

const Container = styled(motion.div)`
  position: relative;
  min-height: 100vh;
  display: flex;
  padding-top: 50px;
  padding-bottom: 50px;
  margin: 0 auto;
  @media (min-width: ${breakPoints.md}) {
    height: 100%;
    min-height: calc(100vh - 200px);
  }

  .textRotation1 {
  }
`

const TitleWrapper = styled(motion.div)`
  margin-top: 32px;
`

const Wrapper = styled(motion.div)`
  display: grid;
  margin: 0 auto;
  width: 72%;
  @media (min-width: ${breakPoints.md}) {
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
  overflow: hidden;
  position: relative;
  z-index: 0;
  padding-left: 20px;
  display: grid;
  @media (min-width: ${breakPoints.md}) {
    padding-left: 40px;
    margin-top: 50px;
  }
`

const LeftTextWrapper = styled(motion.div)`
  align-self: center;
  @media (min-width: ${breakPoints.md}) {
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
  @media (min-width: ${breakPoints.lg}) {
    /* flex-direction: row; */
  }
`
//-------------------------------------------

const ContactList = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 40px;
  column-gap: 53px;

  .space-service-list {
    max-width: 300px;
    line-height: 130%;
  }

  @media (min-width: ${breakPoints.md}) {
    grid-template-columns: 1fr ;
    .right {
      margin-left: 20px;
      margin-top: 80px;
    }
  }

  @media (min-width: ${breakPoints.lg}) {
    transform: translateY(-80px);
  }

`




