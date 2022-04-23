import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle` 
    * {
        margin: 0;
        padding: 0 ;
        box-sizing: border-box
    }

    body {
        font: 400 16px 'Roboto', sans-serif;
    }

    html, border-style, #root {
        max-height: 100vh;
        max-width: 100vw;

        width: 100%;
        height: 100%;
    }

    :root {
        --primary: #FF8C32;
        --dark: #353333;
        --white: #EEEEEE;
        --gray: #DDDDDD;
        --purple: #A63EC5; 
        --green: #5EB77C;
    }
`;
