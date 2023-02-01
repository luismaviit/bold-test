import styled from "styled-components";

export const Nav = styled.nav`
  background-color: #bc3a55;
  background-image: linear-gradient(
    270deg,
    #bc3a55 0%,
    #121e6c 51%,
    #121e6c 100%
  );
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;

  .container-content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 95%;
    justify-content: space-between;

    ul {
      list-style: none;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 80px;

      li {
        a {
          text-decoration: none;
          font-size: 22px;  
          color: #fff;
          padding: 0.5rem 0.5rem;   
          transition: all .1s ease;
          border-radius: 1.5rem;
          &:hover {
            background-color: rgba(255, 255,255, 0.7);
            border: 0 solid #e2e8f0;
            border-radius: 1.5rem;
            color:  #111e6c;           
            font-family: Monserrat, sans-serif;
            font-size: 22px;
            font-weight: 500;
            text-decoration: none;
            padding: 0.5rem 0.5rem;
          }
        }
      }
    }
  }
`;
