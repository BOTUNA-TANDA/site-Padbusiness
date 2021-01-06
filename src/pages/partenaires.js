import React from "react";
import Header from "../sections/partenaires/Header";
import Grid2 from "../sections/partenaires/Grid2";
import styled, {withTheme} from "styled-components";

const Partenaires = () => {
    return (
        <Container>
            <Header/>
            <Grid2/>
        </Container>
    )
}

const Container = styled.div`
  overflow: hidden;
`
export default withTheme(Partenaires)