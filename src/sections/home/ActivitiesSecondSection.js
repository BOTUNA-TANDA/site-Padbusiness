import React, {useEffect} from "react"
import styled, {withTheme} from "styled-components";
import Text from "../../components/Text";
import {motion, useAnimation} from "framer-motion";
import {breakPoints} from "../../app-config";
import {useInView} from "react-intersection-observer";
import {containerAnim, fadeInUp} from "../../animation";
//import activitiesList from "../../data/activitiesList";
import ActivityItem from "../../components/AcitvityItem";
import { useI18next } from 'gatsby-plugin-react-i18next';

const ActivitiesSecondSection = (props) => {
    const animation = useAnimation();
    const [contentRef, inView] = useInView({
        rootMargin: "-100px",
    })

    const {t} = useI18next();
  
    useEffect(() => {
        if (inView) {
            animation.start("animate")
        }
    }, [animation, inView])


  return (
    <Container className={'space'}
      ref={contentRef}
      animate={animation}
      initial='initial'
      variants={containerAnim}>
      <div className="space-content">
        <ContentContainer className="space-content-column">
          <Text
            variants={fadeInUp}
            as={'p'}
            color={props.theme.blue}
            fontWeight={700}
            size={1}
            marginBottomLg={72}
            className={'space-description main-title'}>
            {t('activites-section.t')}<br />{t('activites-section.t.sylab')}
          </Text>
          <div className="space-content-right">
            <ServiceList>
                            
              <ActivityItem theme={props.theme} />
                           
            </ServiceList>
          </div>
        </ContentContainer>
      </div>
    </Container>
  );
}

export default withTheme(ActivitiesSecondSection)

//-------------------------------------------
const Container = styled(motion.div)`
  padding-top: 80px;
  position: relative;
  padding-bottom: 50px;
  background: ${props => props.theme.grey};

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

  @media (min-width: ${breakPoints.xl}) {
    padding-top: 160px;
  }
`
//-------------------------------------------
const ContentContainer = styled(motion.div)`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: ${breakPoints.lg}) {
    /* flex-direction: row; */
  }
`
//-------------------------------------------
const ServiceList = styled(motion.div)`
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
  }

`

