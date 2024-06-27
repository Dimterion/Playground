import { useEffect, useRef } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./clock.css";

function Clock() {
  const secondsRef = useRef(null);
  const minutesRef = useRef(null);
  const hoursRef = useRef(null);

  useEffect(() => {
    function setTime() {
      const now = new Date();

      const seconds = now.getSeconds();
      const secondsDegrees = (seconds / 60) * 360 + 90;

      if (seconds === 0) {
        secondsRef.current.style.transition = `none`;
      } else {
        secondsRef.current.style.transition = `all 0.05s`;
      }

      secondsRef.current.style.transform = `rotate(${secondsDegrees}deg)`;
      secondsRef.current.style.transitionTimingFunction = `cubic-bezier(0.1, 2.5, 0.55, 1)`;

      const minutes = now.getMinutes();
      const minutesDegrees = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;

      if (minutes === 0) {
        minutesRef.current.style.transition = `none`;
      } else {
        minutesRef.current.style.transition = `all 0.05s`;
      }

      minutesRef.current.style.transform = `rotate(${minutesDegrees}deg)`;
      minutesRef.current.style.transitionTimingFunction = `cubic-bezier(0.1, 2.5, 0.55, 1)`;

      const hours = now.getHours();
      const hoursDegrees = (hours / 12) * 360 + (minutes / 60) * 30 + 90;

      if (hours === 0) {
        hoursRef.current.style.transition = `none`;
      } else {
        hoursRef.current.style.transition = `all 0.05s`;
      }

      hoursRef.current.style.transform = `rotate(${hoursDegrees}deg)`;
      hoursRef.current.style.transitionTimingFunction = `cubic-bezier(0.1, 2.5, 0.55, 1)`;
    }

    const intervalId = setInterval(setTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <main>
      <Header />
      <h1 className="clock-heading">Clock</h1>
      <section className="clock-section">
        <div className="clock-spanContainer">
          <span className="clock-span" ref={secondsRef}></span>
          <span className="clock-span" ref={minutesRef}></span>
          <span className="clock-span" ref={hoursRef}></span>
        </div>
        <div className="clock-dot"></div>
        <div className="clock-topLine"></div>
        <div className="clock-rightLine"></div>
        <div className="clock-bottomLine"></div>
        <div className="clock-leftLine"></div>
      </section>
      <Footer
        descriptionLink="https://medium.com/@dimterion/clock-with-reactjs-css-c2b56fbabd2c"
        repoLink="https://github.com/Dimterion/Playground/tree/main/src/pages/Clock"
      />
    </main>
  );
}

export default Clock;
