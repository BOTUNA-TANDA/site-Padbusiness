import React from "react"
import styled, {withTheme} from "styled-components";
import Header from "../sections/home/Header";
import Vision from "../sections/home/Vision";
import Objectives from "../sections/home/Objectives";
import Activities from "../sections/home/Activities";
import ActivitySecondSection from "../sections/home/ActivitiesSecondSection";
import SEO from "../components/seo";
import Contact from "../sections/home/Contact";
import Logos from "../sections/home/Logos"


const IndexPage = () => {
    return (
        <Container>
            <SEO title="PAD Business Network" />
            <Header/>
            <Logos/>
            <Vision/>
            <Objectives/>
            <Activities/>
            <ActivitySecondSection/>
            <Contact/>
        </Container>
    )
}
const Container = styled.div`
  overflow: hidden;
`
export default withTheme(IndexPage)



