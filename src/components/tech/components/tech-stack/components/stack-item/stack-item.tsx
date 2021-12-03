import { StackItem as StackItemType } from "src/types/tech";
import classes from "./stack-item.module.css";

type StackItemProps = {
  stackItem: StackItemType;
  onMouseEnter: () => void;
  onMouseOut: () => void;
};

export const StackItem = (props: StackItemProps) => {
  const { stackItem, onMouseEnter, onMouseOut } = props;
  return (
    <div className={classes.stackItem}>
      <div className={classes.stackItemTitle}>{stackItem.itemName}</div>
      <img
        onMouseEnter={onMouseEnter}
        onMouseOut={onMouseOut}
        src={stackItem.iconUrl}
        alt="stack-icon"
      />
    </div>
  );
};
