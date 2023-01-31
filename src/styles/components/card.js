import styled from "styled-components";

export const Card = styled.div`
  margin: 30px;
  
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 200px;
  justify-content: space-between;
  background-color: white;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  

  .card-header {
    background-image: linear-gradient(270deg, #b06477 0%, #62325e 100%);
    border-radius: 10px 10px 0px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: space-between;
    span {
      margin: 15px;
      font-family: Monserrtar, sans-serif;
      font-size: 16px;
      color: white;
    }
  }
  .card-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap:10px;
    margin:30px;

    .total-sales{
      font-family: Monserrtar, sans-serif;
      background: linear-gradient(270deg, #b06477 0%, #62325e 100%);
      font-weight:bold;
      font-size: 50px;
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
    }
    
    .current-date{
      font-family: Monserrtar, sans-serif;
      font-weight:bold;
      color: #111e6c;
    }

  }
`;
