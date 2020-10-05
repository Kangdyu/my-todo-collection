import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { changeFilter } from "./todoSlice";

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 15px;
`;

const FilterButton = styled.button`
  outline: none;
  border: none;
  color: inherit;
  font: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6rem;
  height: 2rem;
  border-radius: 1rem;
  font-size: 0.8rem;
  cursor: pointer;

  background-color: ${({ selected, theme }) =>
    selected ? theme.palette.highlight : theme.palette.mainStrong};
`;

function TodoFilter() {
  const filter = useSelector((state) => state.todo.filter);
  const dispatch = useDispatch();

  const onFilterBtnClick = (event) => {
    const targetFilter = event.target.dataset.filter;
    dispatch(changeFilter(targetFilter));
  };

  return (
    <Container>
      <FilterButton
        onClick={onFilterBtnClick}
        data-filter="all"
        selected={filter === "all" ? true : false}
      >
        All
      </FilterButton>
      <FilterButton
        onClick={onFilterBtnClick}
        data-filter="ongoing"
        selected={filter === "ongoing" ? true : false}
      >
        Ongoing
      </FilterButton>
      <FilterButton
        onClick={onFilterBtnClick}
        data-filter="finished"
        selected={filter === "finished" ? true : false}
      >
        Finished
      </FilterButton>
    </Container>
  );
}

export default TodoFilter;
