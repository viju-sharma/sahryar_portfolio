import React, { useEffect, useState } from "react";
import classes from "./Intro.module.css";

const item1 = <h4 className={classes.title}>SAHRYAR INTERIOR DESIGNER</h4>;

const item2 = (
  <div className={classes.item2}>
    <div className="w-fit m-auto">
      <p className={classes.title2}>ARCHITECTURAL DESIGN BUREAU</p>
    </div>
    <div>
      <span>Interior design and architecture services worldwide.</span>
      <span>Authors supervision.</span>
    </div>
  </div>
);

const Intro = () => {
  const [sliderContent, setSliderContent] = useState(item1);

  useEffect(() => {
    setTimeout(() => {
      setSliderContent(item2);
    }, 2000);
  }, []);

  const sliderClasses = [classes.container].join(" ");

  return (
    <div className={classes.mainContainer}>
      <SliderDiv className={sliderClasses}>{sliderContent}</SliderDiv>
    </div>
  );
};

export default Intro;

interface SliderProps {
  children: React.ReactNode;
  className: string;
}

const SliderDiv = ({ children, className }: SliderProps) => {
  return <div className={className}>{children}</div>;
};
