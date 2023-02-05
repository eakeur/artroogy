import styled from "styled-components";

export const Main = styled.main`
    display: flex;

    background: rgb(0,97,140);
    background: linear-gradient(90deg, rgba(0,97,140,1) 48%, rgba(0,53,140,1) 100%);
    box-sizing: border-box;

    img {
        transition: 500ms ease;
    }

    > section {
        display: flex;
        flex-direction: column;
        background-color: black;
        padding: 50px;
        gap:50px;

        box-sizing: border-box;

        width: 40%;
        height: 100%;
        
        box-sizing: border-box;
    }


    

    @media(min-width: 861px) {
        

        display:flex;
        flex-direction: row;
        align-items: left;

        height: 100%;

        img {
            position: fixed;
            right: 0;
            bottom: -1%;
            width: 80%;
        }

        > section {
            overflow: hidden;
            overflow-y: auto;
            overflow-x: hidden;
        }
    }

    @media(max-width: 1400px) and (min-width: 861px) {
        img {
            right: -10%;
        }
    }

    @media(max-width: 860px) {
        flex-direction: column;
        padding: 5%;

        > section {
            width: 100%;
            height: 100%;
            z-index: 10;
        }

        img {
            align-self: flex-start;

            object-fit: scale-down;
            object-position: bottom;

            position: sticky;
            top: 0%;
            z-index: 0;
            height: 50vh;
            width: 100%;
        }
    }












    ul {
        list-style: none;
        padding-left: 15px;
    }

    nav {
        margin-top: 16px;
        display: flex;
        gap: 20px;
        width: 100%;
        flex-wrap: wrap;
    }

    a {
        text-decoration: none;
        color: white;
    }

    .contact, .telitem {
        z-index: 10;
        margin-bottom: 20px;

        a {
            font-size: 14pt;
        }

        span {
            display: block;
            margin-top: 10px;
            font-size: 8pt;
            text-transform: uppercase;
        }
    }

    .agent {
        z-index: 10;
        font-size: 14pt;
        margin-block-end: 20px;

        a {
            display: block;
            margin-top: 5px;
            font-size: 10pt;
        }
    }
`