import styled from "styled-components";

export const FilterBarWrapper = styled.div`
  flex: 1;
  height: 100vh;
  padding: "0px 0 0 30px";
`;

export const FilterBar = styled.div`
  background-color: #fff;
  height: 100%;
`;

export const FilterSectionTitleSection = styled.h6`
  padding: 10px 15px;
  border-bottom: 1px solid #dedede;
`;

export const FilterBarTitle = styled.h6`
  margin: 0;
`;

export const FilterSection = styled.div`
  border-bottom: 1px solid #f4f4f4;
  padding: 10px 15px;
  font-family: "Roboto";
`;

export const FilterSectionTitle = styled.div`
  font-size: 13px;
  color: #000;
  font-weight: bold;
`;

export const FilterBarBrandList = styled.ul`
  padding-left: 10px;
  margin-top: 5px;
  li {
    font-size: 12px;
    color: #000;
  }
  li:not(:last-of-type) {
    margin-bottom: 5px;
  }
`;

export const FilterSearchBar = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid #b7b7b7;
  padding: 5px;
  margin: 5px 0;
  font-size: 12px;
`;

export const FilterBarCheckboxList = styled.ul`
  padding-left: 10px;
  margin-top: 5px;
  li {
    span {
      font-size: 12px;
      color: #000;
      position: relative;
      top: -2px;
      display: inline-block;
      margin-left: 3px;
    }
    input {
    }
  }
  li:not(:last-of-type) {
    margin-bottom: 5px;
  }
`;

export const SortMenu = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  margin-bottom: 10px;
  border-bottom: 1px solid #f4f4f4;
  background-color: #fff;
  padding: 15px 15px 0 15px;
  .active {
    border-top: 2px solid #019e7f;
    padding: 7px 10px 7px 10px;
    border-radius: 0
  }
`;

export const SortOption = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  display: inline-block;
  margin: 0 5px 15px 10px;
  padding: 5px 10px 7px 10px;
  border-radius: 6px;
  transition: all 0.15s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: #019e7f;
    color: #fff;
    border: none;
    border-radius: 6px !important;
  }
`;
