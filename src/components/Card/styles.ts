import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    height: 88px;
    background-color: #ffffff;
    border-radius: 5px;
    padding: 10px;
    flex-direction: row;
    align-items: center;
    border-width: 0.5px;
    border-color: #d6d6d6;
    margin-top: 10px;
`;

export const Delete = styled.View`
    height: 100%;
    padding-right: 40px;
    padding-left: 40px;
    justify-content: center;
    background-color: #f568b7;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    margin-top: 10px;
`;

export const Success = styled.View`
    height: 100%;
    padding-right: 40px;
    padding-left: 40px;
    justify-content: center;
    background-color: #5dd2d3;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    margin-top: 10px;
`;

export const Details = styled.View`
    width: 30px;
    height: 30px;
    padding: 5px;
    border-radius: 3px;
    background-color: #3775fd;
    opacity: 0.5px;
`;