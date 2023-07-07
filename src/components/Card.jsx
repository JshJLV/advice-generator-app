import { useEffect, useState } from "react";
import { getAdvice } from "../api/getAdvice";
import Button from "./Button";
import patternDividerMobile from "../assets/pattern-divider-mobile.svg";
import patternDividerDesktop from "../assets/pattern-divider-desktop.svg";

function Card() {
  const [idRandom, setIdRandom] = useState("");
  const [adviceRandom, setAdviceRandom] = useState("Loading. . .");
  useEffect(() => {
    getAdvice().then(({ id, advice }) => {
      setIdRandom(id);
      setAdviceRandom(advice);
    });
  }, []);

  const handleButton = async () => {
    const { id, advice } = await getAdvice();
    setIdRandom(id);
    setAdviceRandom(advice);
  };

  return (
    <section className="bg-dark-grayish-blue w-full md:w-[375px] h-[275px] md:h-[232px] rounded-lg">
      <div className="flex flex-col px-4 py-8 h-full items-center">
        <div className="text-center h-[70%]">
          <p className="text-bg-neon-green tracking-[0.2em] text-[10px]">
            Advice #<span>{idRandom}</span>
          </p>
          <p className="text-bg-ligth-cyan text-lg pt-2">{adviceRandom}</p>
        </div>
        <div className="h-[30%] flex flex-col items-center">
          <div className="md:mt-4">
            <img
              srcSet={`${patternDividerMobile} 295w, 
                      ${patternDividerDesktop} 444w`}
              sizes="(min-width: 320px) 100%,
                      (min-width: 768px) 100%"
              alt="pattern divider"
            />
          </div>
          <div className="z-10 mt-8 md:mt-5">
            <Button handleButton={handleButton} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Card;
