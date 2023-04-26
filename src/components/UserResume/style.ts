import styled from "styled-components";

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  border-bottom: 1px solid #bebebe;
  img {
    border-radius: 50%;
  }
  padding: 0.5rem 2rem;
`;

export const Name = styled.p`
  width: fit-content;
  font-weight: bold;
  color: black;
  cursor: pointer;
`;

export const DivContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;
