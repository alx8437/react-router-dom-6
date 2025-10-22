import styled from "styled-components";

const NavWrapper = styled.div`
    margin-left: 10px;
    font-size: 20px;

    & > a {
        text-decoration: none;
        color: blue;
    }

    & > a.active {
        text-decoration: underline;
        color: aquamarine;
    }

    & > a:hover {
        color: #0077ff;
    }
`

export const S = {
    NavWrapper
}
