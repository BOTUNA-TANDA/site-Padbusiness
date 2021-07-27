import {default as Title, default as Text} from "./Text";
//import {fadeInUp} from "../animation";
import parse from "html-react-parser";
import React from "react";
import { useI18next } from 'gatsby-plugin-react-i18next';

const ActivityItem = (props) => {

  const { t } = useI18next();

  return (
    <>
      <div className="div-col">
        <Title className={"space-title main-title"}>
          <Text
            marginBottom={40}
            as={"span"}
            color={"bleu3"}
            maxWidthLg={300}
            fontWeight={400}
          >
            <span className={"space-title-item"}>{parse(t('activites-section.2.1'))}</span>
          </Text>
        </Title>
        <Title className={"space-title main-title"}>
          <Text
            marginBottom={40}
            as={"span"}
            color={"bleu3"}
            maxWidthLg={300}
            fontWeight={400}
          >
            <span className={"space-title-item"}>{parse(t('activites-section.2.2'))}</span>
          </Text>
        </Title>
      </div>
        
      {/*  section two */}
      <div className="div-col" >
        <Title className={"space-title main-title"}>
          <Text
            marginBottom={40}
            as={"span"}
            color={"bleu3"}
            maxWidthLg={300}
            fontWeight={400}
          >
            <span className={"space-title-item"}>{parse(t('activites-section.2.3'))}</span>
          </Text>
        </Title>
        <Title className={"space-title main-title"}>
          <Text
            marginBottom={40}
            as={"span"}
            color={"bleu3"}
            maxWidthLg={300}
            fontWeight={400}
          >
            <span className={"space-title-item"} >{parse(t('activites-section.2.4'))}</span>
          </Text>
        </Title>
      </div>

         {/*  section three */}
         <div className="div-col">
        <Title className={"space-title main-title"}>
          <Text
            marginBottom={40}
            as={"span"}
            color={"bleu3"}
            maxWidthLg={300}
            fontWeight={400}
          >
            <span className={"space-title-item"}>{parse(t('activites-section.2.5'))}</span>
          </Text>
        </Title>
      </div>
      <div className="div-col">
      <Title className={"space-title main-title"}>
          <Text
            marginBottom={40}
            as={"span"}
            color={"bleu3"}
            maxWidthLg={300}
            fontWeight={400}
          >
            <span className={"space-title-item"}>{parse(t('activites-section.2.6'))}</span>
          </Text>
        </Title>
      </div>
    </>
  );
}

export default ActivityItem;