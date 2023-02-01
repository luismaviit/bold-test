import styled from "styled-components";

export const Actions = styled.nav`
  display: flex;

  .container-button {
    width: 100%;
    height: 60px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    button {
      width: 90%;
      height: 70%;
      background-color: transparent;
      border: none;
      font-family: Monserrat, sans-serif;
      text-decoration: none;
      font-size: 22px;
      color: #111e6c;
      font-weight: 700;
      transition: all .1s ease;
      &:hover {
        cursor: pointer;
        border-radius: 3rem;
        width: 90%;
        height:70% ;
        background-color:rgba(50, 50, 50, 0.3);
      }
      
    }
  }
`;
