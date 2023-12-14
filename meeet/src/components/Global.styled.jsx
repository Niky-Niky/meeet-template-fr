import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
// @media only screen and (max-width: 768px) {
//     background-color: red;
// }

:root {
    --main-color: #32F5C8;
    --bgc-color: #213f4d;
    --small-text-color: #ffffff;
    --common-margin: 150px;

}

body {
    background-color: var(--bgc-color);
    margin: 5px;
    // position: fixed;
}

.myHeader {
    font-family: Lato;
    color: var(--main-color);
    font-weight: bold;
    font-size: 180px;
    margin-left: var(--common-margin);
    margin-top: 50px;
    display: flex;
    align-items: center;
    z-index: 2;
}



.myImage {
    margin-top: 30px;
    margin-left: var(--common-margin);
}

.myDescription {
    position: relative;
    margin-left: var(--common-margin);
    margin-top: -150px;
    color: var(--small-text-color);
    opacity: 0.7;
    font-size: 30px;
    max-width: 550px;
}

.myButton {
    background-color: var(--main-color);
    color: var(--bgc-color);
    font-size: 30px;
    font-weight: bold;
    max-width: 20rem;
    height: 100px;
    border: none;
    padding: 20px;
    border-radius: 5px;
    margin-left: var(--common-margin);
    margin-top: 30px;
}

.myFollow {
    position: relative;
    margin-left: 220px;
    margin-top: 50px;
    color: var(--small-text-color);
    opacity: 0.7;
    font-size: 30px;
    width: 550px;
}

.myFollowLogo {
    margin-bottom: -140px;
    margin-left: -320px;
}

.Avatar {
    position: absolute;
    z-index: 1;
}

#Avatar-1 {
    margin-left: 1250px;
    margin-top: -480px;
}

#Avatar-2 {
    margin-left: 1150px;
    margin-top: -850px;
}

#Avatar-3 {
    margin-left: 40px;
    margin-top: -790px;
}

#Avatar-4 {
    margin-left: 1000px;
    margin-top: -300px;
}

#Avatar-5 {
    margin-left: 970px;
    margin-top: -800px;
}

#Avatar-6 {
    margin-left: 800px;
    margin-top: -460px;
    z-index: 3;
}

`

export const Container = styled.div`

@media screen and (max-width: 768px) {
    background-color: red;
}

@media screen and (min-width: 768px) {
    width: 768px;
    
    body{
        background-color: green;
    }
}

@media screen and (min-width: 1200px) {
    width: 1200px;
    
    background-color: blue;
}

`