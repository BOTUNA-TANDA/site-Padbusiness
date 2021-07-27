import React from "react";
import styled, {withTheme} from "styled-components";
import {breakPoints} from "../../app-config";
import {motion} from "framer-motion";
import scrollTo from 'gatsby-plugin-smoothscroll';
import { useI18next } from 'gatsby-plugin-react-i18next';

const Menu = (props) => {

  const { languages, changeLanguage, originalPath, t } = useI18next();
  //const [thing, setThing] = useState('fr');


  

 /* function handleChange(e) {
    e.preventDefault();
    setThing(e.target.value);
    console.log(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();
    changeLanguage(thing);
  }
*/
    return (
        <Container>
            <ContentWrapper>
                <Title color={props.theme.white}>
                    {t("title")}
                </Title>
                <LinkWrapper>
                  <button className={"menuScrollTo "} onClick={() => scrollTo('#vision')}> {t('Vision')}</button>
                  <button className={"menuScrollTo "} onClick={() => scrollTo('#objectif')}>{t('Objectif')}</button>
                  <button className={"menuScrollTo"} onClick={() => scrollTo('#NosActivites')}>{t('Activites')}</button>
            <button className={"menuScrollTo"} onClick={() => scrollTo('#contact')}>{t('Contact')}</button>
            
          </LinkWrapper>
          <LinkLang>
           
           { /*  <label htmlFor='lang_choice'>

                <select
                  name='lang_choice'
                  id="lang_choice"
                  to={originalPath}
                  onChange={handleChange}
                  onClick={handleClick}
                  value={thing}
                >
                  {languages.map((lang) => {
                    return (
                      <option
                        key={lang}
                        value={lang}
                      >{lang}</option>
                    );
                  })}*/}
           {languages.map((lang) => {
              return (
                <a
                  className={lang === props.languages ? "active" : "lang"}
                  key={lang}
                  to={originalPath}
                  language={lang}
                  onClick={(e) => {
                    e.preventDefault();
                    changeLanguage(lang);
                  }}
                >
                  {`${
                    lang === 'fr' ? t('lang-fr') :
                    lang === 'en' ? t('lang-en') :
                    lang === 'nl' ? t('lang-nl'):null
                }|`}
                </a>
              );
            }
            )}
          
          </LinkLang>
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

const LinkLang = styled(motion.div)`
  position: absolute;
  top: 10;
  left: 280%;
  display: flex;
  flex-direction: row;
  align-self: center;
  @media (max-width: ${breakPoints.sm}) {
    display: none;
  }
  @media(max-width: '1300px') {
    left: 210%;
  }
  @media(max-width: '1250px') {
    left: 120%;
    position: absolute;
  top: 10;
  display: flex;
  flex-direction: row;
  align-self: center;
  }
  @media(max-width: ${breakPoints.lg}) {
    left: 180%;
  }
  
  
  
`;

const ContentWrapper = styled(motion.div)`
  display: grid;
  max-width: 800px;
  grid-template-columns: 1fr 1fr 1fr;
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

