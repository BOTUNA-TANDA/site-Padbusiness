import React, {useEffect} from "react";
import styled, {withTheme} from "styled-components";
import {Link} from "gatsby"
import {breakPoints} from "../../app-config";
import {motion, useAnimation} from "framer-motion";
import {default as LinkText} from "../../components/Text";
import {containerAnim, fadeInUp2} from "../../animation";
import {useInView} from "react-intersection-observer";
import scrollTo from 'gatsby-plugin-smoothscroll';
import { useI18next } from 'gatsby-plugin-react-i18next';

const MenuMobile = (props) => {
    const animation = useAnimation();
    const { languages, changeLanguage, originalPath, t } = useI18next();
    const [contentRef, inView] = useInView({
        rootMargin: "0px",
    })

    const toggleMenuInternal = (id) => {
        props.toggleMenu()
        scrollTo(id)
    }

    useEffect(() => {
        if (inView) {
            animation.start("animate")
        }
    }, [animation, inView])

    return (
        <Container>
            <HomeLink to={"/"}>
                <Title
                    color={props.theme.white}
                >
                    {t('header.t.sylab')}<br/>
                    {t('header.t.sylab-second')} <br/>
                    {t('headr.t.sylab-third')} <br/>
                </Title>
            </HomeLink>
            <ContentWrapper
                ref={contentRef}
                animate={animation}
                initial='initial'
                variants={containerAnim}
            >
                <LinkWrapper variants={fadeInUp2}>
                    <LinkItemWrapper onClick={() => toggleMenuInternal('#vision')}>
                            <LinkText className={'menu-link'}
                                      size={0.9} fontWeight={700} sizeMd={0.4} color={'white'} noLink
                        >{t('Vision')}</LinkText>
                    </LinkItemWrapper>
                    <LinkItemWrapper variants={fadeInUp2} onClick={() => toggleMenuInternal('#objectif')}>
                            <LinkText className={'menu-link'}
                                      size={0.9} fontWeight={700} sizeMd={0.4} color={'white'} noLink
                        >{t('Objectif')}</LinkText>
                    </LinkItemWrapper>
                    <LinkItemWrapper variants={fadeInUp2} onClick={() => toggleMenuInternal('#NosActivites')}>
                            <LinkText className={'menu-link'}
                                      size={0.9} fontWeight={700} sizeMd={0.4} color={'white'} noLink
                            >{t('Activites')}</LinkText>
                    </LinkItemWrapper>
                    <LinkItemWrapper variants={fadeInUp2} onClick={() => toggleMenuInternal('#contact')}>

                            <LinkText className={'menu-link'}
                                      size={0.9} fontWeight={700} sizeMd={0.4} color={'white'} noLink
                        >{t('Contact')}</LinkText>
                    </LinkItemWrapper>
                    <LinkItemWrapper>
                    <LinkLang>
            
            {languages.map((lang) => {
              return (
                <li
                  className={lang === props.languages ? "active" : "lang"}
                  key={lang}
                  to={originalPath}
                  language={lang}
                  onClick={(e) => {
                    e.preventDefault();
                    changeLanguage(lang);
                  }}
                 
                >
                      {lang}
                  </li>
              );
            }
            )}
          </LinkLang>
                    </LinkItemWrapper>
                </LinkWrapper>
            </ContentWrapper>
        </Container>
    )
}

export default withTheme(MenuMobile)

const Container = styled(motion.div)`
  position: fixed;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.bleu2};
  z-index: 10;
  align-content: center;
  padding: 50px;
`;

const LinkLang = styled(motion.ul)`
    display: inherit;
    flex-direction: column;
    margin-left: 20px;
`;

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
  flex-direction: column;
  align-self: center;
  justify-self: flex-start;
  justify-content: space-between;
  min-width: 400px;
  height: 30vh;
`

const LinkItemWrapper = styled(motion.div)``

const Title = styled(motion.h2)`
  position: relative;
  margin-top: 00px;
  margin-bottom: 101px;
  /* margin-left: 200px; */
  @media (max-width: ${breakPoints.sm}) {
    margin-left: 0;
  }
  z-index: 4;
  color: ${props => props.theme.white};
`

const HomeLink = styled(Link)``