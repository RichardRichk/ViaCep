import styled from "styled-components";

export const HeaderContainer = styled.View`
    background-color: #fecc2b;
    height: 20%;

    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 0px 0px 15px 15px;
    /* shadow-color: rgba(0,0,0, 0.15); */
    shadow-opacity: 0.15;
    shadow-offset: 0px 4px;
    shadow-radius: 10px;
    elevation: 25;
`

export const HeaderContent = styled.SafeAreaView`

    margin-top: 45px;

`

export const TextHeader = styled.Text`
    font-family: 'Roboto_500Medium';
    color: #fecc2b;
    font-size: 45px;
    text-align: center;
    padding: 0px 8px;
    background-color: #0D214F;
    transform: rotate(1.5deg);
`

