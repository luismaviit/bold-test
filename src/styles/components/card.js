import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 250px;
  justify-content: space-between;
  background-color: white;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;

  .card-header {
    background-image: linear-gradient(270deg, #b06477 0%, #62325e 100%);
    border-radius: 1rem 1rem 0px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: space-between;
    span {
      margin: 15px;
      font-size: 200%;
      color: white;
    }
  }
  .card-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin: 30px;

    .total-sales {
      background: linear-gradient(270deg, #b06477 0%, #62325e 100%);
      font-weight: bold;
      font-size: 400%;
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
      background-clip: text;
    }

    .current-date {
      font-size: 150%;
      color: #111e6c;
    }
  }
`;
