import { styled } from "styled-components";

export const LogoContainer = styled.div`
    display:flex;
    flex-direction: row;
`;

export const PageContainer = styled.div`
    display:flex;
    flex-direction: column;
    margin-top: -50px;
    align-items:center;
`;

export const Card = styled.div`
    width: 80vw;
    border: 1px solid #ccc;
    height: 80vh;
    max-width: 425px;
    max-height: 255px;
    margin:15px;
    border-radius: 15px;
`;

export const CardImg = styled.img`
    height: 100px;
    align-items: center;
`;

export const CardContainer = styled.div`
    display:flex;
    max-width: 100vw;
    justify-content: center;
    flex-wrap:wrap;
`;
export const LinkA = styled.a`
    color: #ccc;
    :visited{
        color: #ccc;
    }
    :hover{
        color: #ccc;
    }
`;
