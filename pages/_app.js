import React from "react";
import Layout from "../components/layout/mainLayout"
import {ThemeProvider} from 'styled-components';
import theme from '../components/siteTheme'
import '../styles/globals.css'
import RootCssHeadTag from "../components/RootCssHeadTag";

export default function MyApp({ Component, pageProps }) {

    const getLayout = Component.getLayout || ((page) => page);

    return getLayout(
        <ThemeProvider theme={theme}>
            <RootCssHeadTag theme={(theme)()}/>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    );
}