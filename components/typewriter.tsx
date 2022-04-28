import type { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import Delay from "../utils/delay";

const TypeWriter: NextPage<{ words: Array<String> }> = (props) => {
  const { words } = props;
  let splitWord = useRef<Array<String>>(words[0].split(""));
  let currWordIndex = useRef<number>(0);
  const [word, setWord] = useState<Array<String>>([]);

  const runAnimation = async () => {
    await Delay(1000);

    for (let i = 0; i < splitWord.current.length; i++) {
      await Delay(250);
      setWord((prev) => [...prev, splitWord.current.at(i) || ""]);
    }

    await erase();
  };

  const erase = async () => {
    await Delay(1000);

    for (let i = splitWord.current.length - 1; i >= 0; i--) {
      await Delay(100);
      setWord((prev) => [...prev.slice(0, i)]);
    }

    if (currWordIndex.current === words.length - 1) {
      currWordIndex.current = 0;
    } else {
      currWordIndex.current += 1;
    }

    splitWord.current = words[currWordIndex.current].split("");

    await runAnimation();
  };

  useEffect(() => {
    runAnimation();
    return () => {};
  }, []);

  return (
    <div className="typewriter h-20">
      {word.map((value, index) => (
        <span key={index}>{value}</span>
      ))}
    </div>
  );
};

export default TypeWriter;
