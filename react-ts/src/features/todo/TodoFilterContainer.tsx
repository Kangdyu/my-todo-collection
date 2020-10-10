import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState, useAppDispatch } from "../../app/store";
import { changeFilter, TodoFilter } from "./todoSlice";

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 15px;
`;

const FilterButton = styled.button<{selected: boolean}>`
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

function TodoFilterContainer() {
  const filter = useSelector<RootState>((state) => state.todo.filter);
  const dispatch = useAppDispatch();

  const onFilterBtnClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const targetFilter = event.currentTarget.dataset.filter as TodoFilter;
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

export default TodoFilterContainer;
