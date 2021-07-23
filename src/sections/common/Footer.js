import React from "react"
import styled, {withTheme} from "styled-components";
import {default as Title,} from "../../components/Text";
import {breakPoints} from "../../app-config";
import scrollTo from 'gatsby-plugin-smoothscroll';
import { useI18next } from 'gatsby-plugin-react-i18next';

const Footer = (props) => {

  const { t } = useI18next();

  return (
    <Container className={'footer'}>
      <FooterWrapper>
        <TopContainer>
          <BoxTextContentFooter>
            <Title
              color={props.theme.white}
              fontWeight={900}
              stacked
            >
              <span>{t('header.t.sylab')}</span>
              <span>{t('header.t.sylab-second')}</span>
              <span>{t('header.t.sylab-third')}</span>
            </Title>
          </BoxTextContentFooter>
          <Nav>
            <button className={"menuScrollTo "} onClick={() => scrollTo('#vision')}>{t('Vision')}</button>
            <button className={"menuScrollTo "} onClick={() => scrollTo('#objectif')}>{t('objectif')}</button>
            <button className={"menuScrollTo"} onClick={() => scrollTo('#NosActivites')}>{t('Activites')}</button>
            <button className={"menuScrollTo"} onClick={() => scrollTo('#contact')}>{t('Contact')}</button>
          </Nav>
        </TopContainer>
      </FooterWrapper>
      <BottomContainer />
      <SousFooter />
    </Container>
  );
}

export default withTheme(Footer)

const Container = styled.div`
  background: ${props => props.theme.footer};
`

const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
  margin-bottom: 32px;
  width: 100%;
`

const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: ${breakPoints.md}) {
    flex-direction: row;
    margin: 0 auto;
    max-width: 1300px;
    width: 90%;
  }
`

const BoxTextContentFooter = styled.div`
  display: flex;
  flex-direction: column;
`

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: self-end;
  @media (min-width: ${breakPoints.md}) {
    margin-top: 38px;
    flex-direction: row;
  }
`

const BottomContainer = styled.div`
  border-top: 1px solid grey;
  background-color: ${props => props.theme.blue3};
`

const SousFooter = styled.div`
  height: 40px;
  display: flex;
  justify-content: space-between;
  @media (min-width: ${breakPoints.md}) {
    flex-direction: row;
    margin: 0 auto;
    max-width: 1000px;
    height: 80px;
  }
`