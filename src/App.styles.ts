import styled from 'styled-components';

export const body = styled.body`
    background: linear-gradient(45deg, gold, white 20%);
    width: 100%;
    overflow-y: hidden;
    margin-top: -30px;
`

export const Container = styled.div`
    width: 100%;
    max-width: 750px;
    margin:auto;
    margin-left: 100px;
    display: flex;
    padding: 50px 0;

    @media (max-width: 750px) {
        flex-direction: column;
        margin: auto;
    }
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;
    margin-right: 100px;

    @media (max-width: 750px) {
        margin-bottom: 50px;
        align-items: center;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
`;

export const LogoLink = styled.a`
    display: block;
`;

export const InfoArea = styled.div`
    width: 100%;
    margin: 10px 0;

    @media (max-width: 750px) {
        display: flex;
        justify-content: space-around;
        text-align: center;
    }
`;

export const GridArea = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;

    @media (max-width: 750px) {
        justify-content: center;
        margin: 0 20px;
    }
`;

export const Grid = styled.div`
    width: 430px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 50px;
    margin-right: 30px;

    @media (max-width: 750px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 415px) {
        gap: 20px;
    }
`;

export const Footer = styled.footer`
    color: #8b735b;
    text-align: center;
    a {
        text-decoration: none;
        color: #8b735b;
    }
    a:hover {
        color: #000;
    }

`