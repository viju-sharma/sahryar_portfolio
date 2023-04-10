import React, { useEffect, useState } from "react";
import classes from "../HomePage.module.css";

const item1 = (
  <>
    <h1>SAHRYAR</h1>
    <span>INTERIOR DESIGNER</span>{" "}
  </>
);

const item2 = (
  <>
    <h1> ARCHITECTURAL DESIGN BUREAU</h1>
    <span>Interior design and architecture services worldwide.</span>
    <span>Authors supervision.</span>
  </>
);

const Intro = () => {
  const [sliderContent, setSliderContent] = useState(item1);
  const [slideAnimate, setSlideAnimate] = useState<
    "animate__fadeInLeft" | "animate__fadeOutRight"
  >("animate__fadeInLeft");

  useEffect(() => {
    new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        setSlideAnimate("animate__fadeOutRight");
        resolve();
      }, 1500);
    }).then(() => {
      setTimeout(() => {
        setSlideAnimate("animate__fadeInLeft");
        setSliderContent(item2);
      }, 1000);
    });
  }, []);

  const sliderClasses = [
    classes.container,
    "animate__animated",
    slideAnimate,
  ].join(" ");

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
