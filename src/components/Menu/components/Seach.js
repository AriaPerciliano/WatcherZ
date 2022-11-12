import React from "react";
import styled from "styled-components"

const StyledSearch = styled.div`
  display: flex;
  flex-direction: row;
  object-position: center;
  border: 1px solid ${({ theme }) => theme.borderBase || "#E3D2F2"};
  max-width: 425px;
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  
  input {
    width: 80%;
    padding: 4px 16px;
    font-size: 1.2em;
    border: none;
    outline: none;
    color: ${({ theme }) => theme.textColorBase};
    background-color: ${({ theme }) => theme.backgroundBase};
  }
  button {
    flex: 1;
    cursor: pointer;
    border: none;
    background-color: ${({ theme }) => theme.backgroundLevel2};
    box-shadow: 0 1px 0 rgb(0 0 0 / 10%);
    border-left: 1px solid ${({ theme }) => theme.borderBase};
    width: 40px;
    height: 40px;
    @media (min-width: 600px) {
      width: 64px;
      height: 40px;
    }
  }
`;

export default function Search({ filterValue, setfilterValue }) {

  const searchValue = filterValue;
  const setSearchValue = setfilterValue;

  return (
      <StyledSearch>
          <input type="text" onChange={(eventInfo) => setSearchValue(eventInfo.target.value)} value={searchValue}/>
          <button>
              🔎
          </button>
      </StyledSearch>
  )
}