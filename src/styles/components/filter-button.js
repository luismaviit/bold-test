import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  .hidden-container {
    max-height: 0px;
    display: none;
    
  }
  .visible-container {
    margin-top: 50px;
    position: fixed;
    transition: transform 5s;
    z-index: 2;
    width: 365px;
    background-color: #fff;
    border-radius: 0rem 0rem 1rem 1rem;
    font-size: 1.5rem;
    
    li {
    display: flex;
    justify-content: left;
    margin-top: 5px;
    margin-left: 0px;
    margin-bottom: 5px;
    gap: 10px;
    input {
      width: 20px;
      height: 20px;
      margin-right: 10px;
      border: red;
      cursor: pointer;
    }
    a {
      list-style: none;
      text-decoration: none;
      text-align: left;
      color: #111e6c;
      font-weight: bold;
    }
  }
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  background-color: #fff;
  height: 60px;
  width: 405px;
  border: none;
  border-radius: 1rem;
  font-size: 22px;
  color: #111e6c;
  font-weight: 500;
  &:hover {
    cursor: pointer;
    //background-color: rgba(50, 50, 50, 0.3);
  }
  span {
    transform: rotate(90deg);
  }
`;

export const Ul = styled.ul`
  .open-menu {
    max-height: 0px;
    overflow: hidden;
    transition: all 1s ease;
    z-index: 2;
    width: 365px;
    background-color: #fff;
    border-radius: 0rem 0rem 1rem 1rem;
    font-size: 1.5rem;
    margin-top: -12px;
  }
 
`;

export const SendButton = styled.button`
  border-radius: 35px;
  background-color: rgba(239, 67, 78, 0.5);
  padding: 10px;
  border: none;
  color: #fff;
  align-self: center;
  width: 250px;
  margin-top: 25px;
  margin-bottom: 25px;
  margin-left: 40px;
  font-size: 1em;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.1s ease;
  &:hover {
    border-radius: 35px;
    background-color: rgba(239, 67, 78, 0.9);
    padding: 10px;
    border: none;
    color: #fff;
    align-self: center;
    width: 250px;
    margin-top: 25px;
    margin-bottom: 25px;
    font-size: 1em;
    font-weight: 700;
    cursor: pointer;
  }
`;
