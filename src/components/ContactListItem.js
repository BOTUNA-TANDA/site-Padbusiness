import Text, {default as Title} from "./Text";
import {fadeInUp} from "../animation";
import parse from "html-react-parser";
import React from "react";
import styled from "styled-components";
import {motion} from "framer-motion";
import { Trans } from 'gatsby-plugin-react-i18next';

export function ContactListItem(props) {
    let info = props.info;
    let images = info?.images ? info?.images : null

    let getImage = (info) => {
        return info.images.map((item, index) => {
            return (
                <a href={item.url} key={item.path + index}>
                    <ContactListItemSocialIcons src={item.path} alt=""/>
                </a>
            )
        })
    }

    return (
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
                    <span className={"space-title-item"}>
                        <Trans>{props.info.title}</Trans></span>
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
                    {parse(props.info.text)}
                    {images != null ?
                        <div className="social-networks-icons">
                            {getImage(info)}
                        </div>
                        : null
                    }
                </div>
            </Text>

        </div>
    )
}

export default ContactListItem;

const ContactListItemSocialIcons = styled(motion.img)`
  width: 24px;
  height: 24px;
`
