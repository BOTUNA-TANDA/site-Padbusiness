import React from "react"
import styled, {withTheme} from "styled-components";
import Text from "../../components/Text";
import {breakPoints} from "../../app-config";
import aboutBg from  "../../images/helping.jpg"
import {motion} from "framer-motion";
import {fadeInUp} from "../../animation";
import {useI18next} from 'gatsby-plugin-react-i18next'

const Activities = props => {

  const {t} = useI18next();
    return (
        <Container id="NosActivites">
            <Text
                variants={fadeInUp}
                as={'span'}
                color={props.theme.white}
                lineHeight={'170%'}
                fontWeight={100}
                size={0.7}
                sizeLg={0.4}
                sizeXl={0.6}
                className={'textRotation1'}>
                {t('activites-rotation')}
            </Text>
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
                            <span className={"events-title-item"}>{t('activites.t.sylab')}</span>
                            <span className={"events-title-item"}>{t('activites.t.sylab-second')}</span>
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
                        {t('activites.t.1')}
                    </Text>
                    <Text
                        color={props.theme.white}
                        marginTop={"16"}
                        marginTopXl={'48'}
                        marginBottom={"24"}
                        fontWeight={400}
                        className={" text-image"}
                    >
                        {t('activites.p.sylab')} <br/>
                        {t('activites.p.sylab-second')} <br/>
                        {t('activites.p.sylab-third')}<br/>
                        {t('activites.p.sylab-forth')}
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

export default withTheme(Activities)

const Container = styled.div`
  position: relative;
  background: ${props => props.theme.bleu2};
  padding-top: 50px;


  @media (min-width: ${breakPoints.xl}) {
    padding-bottom: 440px;
    .text-image {
      max-width: 1300px;
      margin: auto 100px;
      display: flex;
      flex-direction: column;
      padding: auto;
    }

    .space-content {
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
  .space-title-item {
    display: block;
  }

  position: relative;
  margin-top: -30px;
  margin-left: -30px;
  z-index: 4;
  @media (min-width: ${breakPoints.md}) {

    .events-title-item {
      &:nth-child(2) {
        margin-left: 0px;
      }
    }
  }
`

const ImageWrapper = styled.div`

  @media (min-width: ${breakPoints.xl}) {
    position: absolute;
    margin-left: 32px;
    margin-top: 50px;
  }
`

const SubContainer = styled.div`
  .img-wrapper {
    overflow: hidden;
    width: 200px;
  }

  @media (min-width: ${breakPoints.md}) {
  }
`
const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  height: 100%;
`
