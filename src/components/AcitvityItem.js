import {default as Title, default as Text} from "./Text";
import {fadeInUp} from "../animation";
import parse from "html-react-parser";
import React from "react";

const ActivityItem = (props) => {
    return (
        <div className="div-col">
            <Title className={"space-title main-title"}>
                <Text
                    marginBottom={16}
                    variants={fadeInUp}
                    color={props.theme.orange}
                    size={"68px"}
                    sizeLg={1}
                    mawLg={"50px"}
                    lineHeight={"150%"}
                    lineHeightLg={"50px"}
                    fontWeight={800}
                >
                    <span className={"space-title-item"}>{props.activity.title}</span>
                </Text>
            </Title>
            <Text
                marginBottom={40}
                as={"span"}
                color={"bleu3"}
                maxWidthLg={300}
                fontWeight={400}
            >
                {parse(props.activity.text)}
            </Text>
        </div>
    )
}

export default ActivityItem;