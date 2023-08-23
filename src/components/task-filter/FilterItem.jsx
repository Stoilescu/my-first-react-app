import React from "react";
import Badge from "../Badge/Badge";
import clsx from "clsx";
import "./TaskFilter.css";

const FilterItem = (props) => {
  return (
    <div
      onClick={props.onStatusClick}
      className={clsx("filter-item-container", props.active && "active")}
    >
      <p className={clsx("filter-option", props.active && "active")}>
        {props.label}
      </p>
      <Badge
        label={props.count}
        color={clsx({
          blue: props.active,
          black: !props.active,
        })}
      />
    </div>
  );
};

export default FilterItem;