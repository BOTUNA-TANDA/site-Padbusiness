import Text, {default as Title} from "./Text";
import {fadeInUp} from "../animation";
import parse from "html-react-parser";
import React from "react";
import styled from "styled-components";
import {motion} from "framer-motion";
import { useI18next } from "gatsby-plugin-react-i18next";
import IConFb from '../images/logos/facebook.png';
import IConTw from '../images/logos/twitter.png';

export function ContactListItem(props) {
    /*let info = props.info;
    let images = info?.images ? info?.images : null
    
  let getImage = (info) => {
    return info.images.map((item, index) => {
      return (
        <a href={item.url} key={item.path + index}>
          <ContactListItemSocialIcons src={item.path} alt="" />
        </a>
      )
    })
  };*/
const { t } = useI18next();
  return (
    <>
      <div className="div-col">
        <Title className={"space-title main-title"}>
          <Text
            marginBottom={16}
            variants={fadeInUp}
            color={props.theme.orange2}
            size={"68px"}
            sizeLg={1}
            mawLg={"50px"}
            lineHeight={"150%"}
            lineHeightLg={"50px"}
            fontWeight={800}
          >
            <span className={"space-title-item"}>{t('contact.address.t')}</span>
          </Text>
        </Title>
        <Text
          marginBottom={40}
          as={"span"}
          color={"bleu3"}
          maxWidthLg={"229px"}
          fontWeight={400}
        >
          <div className='social-networks'>
            {parse(t('contact.address.info'))}
          </div>
        </Text>
      </div>
      {/* section two*/}
      <div className="div-col">
        <Title className={"space-title main-title"}>
          <Text
            marginBottom={16}
            variants={fadeInUp}
            color={props.theme.orange2}
            size={"68px"}
            sizeLg={1}
            mawLg={"50px"}
            lineHeight={"150%"}
            lineHeightLg={"50px"}
            fontWeight={800}
          >
            <span className={"space-title-item"}>{t('contact.donate.t')}</span>
          </Text>
        </Title>
        <Text
          marginBottom={40}
          as={"span"}
          color={"bleu3"}
          maxWidthLg={"229px"}
          fontWeight={400}
        >
          <div className='social-networks'>
            {parse(t('contact.donate.info'))}
                    
          </div>
        </Text>
      </div>
      {/* section three*/}
      <div className="div-col">
        <Title className={"space-title main-title"}>
          <Text
            marginBottom={16}
            variants={fadeInUp}
            color={props.theme.orange2}
            size={"68px"}
            sizeLg={1}
            mawLg={"50px"}
            lineHeight={"150%"}
            lineHeightLg={"50px"}
            fontWeight={800}
          >
            <span className={"space-title-item"}>{t('contact.mobile')}</span>
          </Text>
        </Title>
        <Text
          marginBottom={40}
          as={"span"}
          color={"bleu3"}
          maxWidthLg={"229px"}
          fontWeight={400}
        >
          <div className='social-networks'>
            {parse(t('contact.mobile.info'))}
          </div>
        </Text>
      </div>
      {/* section four*/}
      <div className="div-col">
        <Title className={"space-title main-title"}>
          <Text
            marginBottom={16}
            variants={fadeInUp}
            color={props.theme.orange2}
            size={"68px"}
            sizeLg={1}
            mawLg={"50px"}
            lineHeight={"150%"}
            lineHeightLg={"50px"}
            fontWeight={800}
          >
            <span className={"space-title-item"}>{t('contact.community')}</span>
          </Text>
        </Title>
        <Text
          marginBottom={40}
          as={"span"}
          color={"bleu3"}
          maxWidthLg={"229px"}
          fontWeight={400}
        >
          <div className='social-networks'>
            {parse(t('contact.community.info'))}
          </div>
        </Text>
      </div>
      {/* section five*/}
      <div className="div-col">
        <Title className={"space-title main-title"}>
          <Text
            marginBottom={16}
            variants={fadeInUp}
            color={props.theme.orange2}
            size={"68px"}
            sizeLg={1}
            mawLg={"50px"}
            lineHeight={"150%"}
            lineHeightLg={"50px"}
            fontWeight={800}
          >
            <span className={"space-title-item"}>{t('contact.email')}</span>
          </Text>
        </Title>
        <Text
          marginBottom={40}
          as={"span"}
          color={"bleu3"}
          maxWidthLg={"229px"}
          fontWeight={400}
        >
          <div className='social-networks'>
            {parse(t('contact.email.info'))}
          </div>
        </Text>
      </div>
      {/* section six*/}
      <div className="div-col">
        <Title className={"space-title main-title"}>
          <Text
            marginBottom={16}
            variants={fadeInUp}
            color={props.theme.orange2}
            size={"68px"}
            sizeLg={1}
            mawLg={"50px"}
            lineHeight={"150%"}
            lineHeightLg={"50px"}
            fontWeight={800}
          >
            <span className={"space-title-item"}>{t('contact.follow')}</span>
          </Text>
        </Title>
        <Text
          marginBottom={40}
          as={"span"}
          color={"bleu3"}
          maxWidthLg={"229px"}
          fontWeight={400}
        >
          <div className='social-networks'>
            <div className="social-networks-icons">
              <a href="https://www.facebook.com/pages/category/Community-Organization/PAD-Business-Network-Foundation-342843433036526">
                <ContactListItemSocialIcons src={IConFb} alt="icon-fb" />
              </a>
              <a href="https://twitter.com/padbusiness">
                <ContactListItemSocialIcons src={IConTw} alt="icon-twitter" />
              </a>
            </div>
          </div>
        </Text>
      </div>
    </>
  );
}

export default ContactListItem;

const ContactListItemSocialIcons = styled(motion.img)`
  width: 24px;
  height: 24px;
  color: blue;
`
