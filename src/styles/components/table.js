import styled from "styled-components";

export const Div = styled.div`
  
  .container-header {
    background-color: #111e6c;
    border-radius: 15px 15px 0px 0px;
    padding: 10px;
    .header-tab {
      text-align:left;
      font-size: 2.5rem;
      color: #fff;
      padding: 50px;
    }
  }
  .contents-header {
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    
    padding: 5px;
    font-size: 1.6em;
    .contents-span {
      padding: 10px;
      max-width: 100%;
    }
  }
  .contents-table{
    display: flex;
    flex-direction: column;
    justify-content: space-between;

  }
`;
