import styled from "styled-components";

type ContainerProps = {
    showBackground: boolean;
}
export const Container = styled.div<ContainerProps>`
    /* background-color: ${props => props.showBackground ? '#1570ff' : '#e2e3e3'}; */
    height: 100px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

type IconProps = {
    opacity?: number;
}
export const Icon = styled.img<IconProps>`
    width: 130px;
    height: 130px;
    opacity: ${props => props.opacity ? props.opacity : 1};

    @media (max-width: 750px) {
        width: 100px;
        height: 100px; 
    }
`;