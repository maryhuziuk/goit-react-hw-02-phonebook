import styled from "@emotion/styled";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none`;
   

  export const ItemContacts = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
  height: 40px;
  padding: 5px;
  font-size: 16px;
  background-color: white`;


export const ButtonContacts = styled.button`
     width: 70px;
  height: 40px;
  transform: scale(1);
  background-color: pink
  border-radius:5%
  border: black

  font-size: 14px;
  transition: transform 250ms ease-out, background-color 250ms ease-out;
  &:hover,
  &:focus-visible {
    transform: scale(1.1);
  }
`;