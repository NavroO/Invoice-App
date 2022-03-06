import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 20px 30px;
  background-color: #1F213A;
  border-radius: 10px;
  width: 100%;
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    
    div {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;
    }
  }
`;
