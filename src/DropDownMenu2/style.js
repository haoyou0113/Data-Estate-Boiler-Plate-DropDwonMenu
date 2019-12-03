import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  font-size: 1em;
  font-weight: bold;
  height: 800px;
  display: flex;
  justify-content: center;
`;

export const SearchWrapper = styled.div`
  margin-top: 50px;
  height: 100px;
  width: 250px;
`;

export const SelectDropdown = styled.div`
  padding: 0px 15px;
`;

export const DropdownMenu = styled.div`
  width: 100%;
  padding: 0px 0px 15px;
  margin-top: 0px;
  background: white;
  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.2);
  .de-dropdown-menu-list {
    height: 100px;
    max-height: 40vh;
    overflow-y: scroll;
    list-style-type: none;
    padding: 0px;
    margin: 0px;
  }
`;
