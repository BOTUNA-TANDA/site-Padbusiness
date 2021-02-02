import React, { useEffect } from "react"
import styled, { withTheme } from "styled-components"
import Text, {
  default as Title,
} from "./Text";
import parse from "html-react-parser"
import { fadeInUp } from "../animation"
import { motion, useAnimation } from "framer-motion"


function ServiceItemTest(props) {
  return (
    <ServiceItemWrapper className='service-item'>
      <Text as={"span"} color={"bleu3"} maxWidthLg={"500px"} fontWeight={400}>
        {parse(props.service.text)}
      </Text>
    </ServiceItemWrapper>
  )
}

export default withTheme(ServiceItemTest)

const ServiceItemWrapper = styled.div`
  margin-bottom:60px;
  
`