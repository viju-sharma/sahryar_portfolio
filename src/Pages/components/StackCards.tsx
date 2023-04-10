import { useState } from "react";
import classes from "./StackCard.module.css";
const StackCards = () => {
  const [animateClass, setAnimateClass] = useState("stack");

  return (
    <div className={classes.stack}>
      <div className={classes.stack__card}></div>
      <div className={classes.stack__card}></div>
    </div>
  );
};

export default StackCards;
