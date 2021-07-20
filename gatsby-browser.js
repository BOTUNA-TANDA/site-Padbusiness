import React from 'react'
import Layout from './src/components/layout'
import {ThemeProvider} from "styled-components";
import { theme} from "./src/app-config";
import {globalHistory} from "@reach/router";

export const onInitialClientRender = () => {
    globalHistory._onTransitionComplete();
}


const wrapPageElement = ({element, props}) => (
    <Layout {...props}>
        {element}
    </Layout>
)

//OLD WRAPPER
const wrapRootElement = ({element}) => (
    <ThemeProvider theme={theme}>
        {element}
    </ThemeProvider>
)


export {wrapPageElement, wrapRootElement}