import type { NextComponentType } from "next";
import { useEffect, useRef, useState } from "react";

const TypeWriter: NextComponentType = () => {
  const title: Array<String> = "Sahil Deshmukh".split("");
  const [word, setWord] = useState<Array<String>>([]);
  const wordRef = useRef<Array<String>>([]);
  wordRef.current = word;
  const [reverse, setReverse] = useState(false);
  const index = useRef(0);

  const delay = (time: number) => {
    return new Promise<void>((resolve, _) => {
      setTimeout(() => {
        resolve();
      }, time);
    });
  };

  const runAnimation = async (str: String) => {
    for (let i = 0; i < title.length; i++) {
      await delay(250);
      setWord((prev) => [...prev, title.at(i) || ""]);
    }

    await erase();
  };

  const erase = async () => {
    await delay(1000);

    for (let i = title.length - 1; i >= 0; i--) {
      await delay(100);
      setWord((prev) => [...prev.slice(0, i)]);
    }

    await runAnimation("");
  };

  useEffect(() => {
    runAnimation("123");
    return () => {};
  }, []);

  return (
    <div>
      {word.map((value, index) => (
        <span key={index}>{value}</span>
      ))}
    </div>
  );
};

export default TypeWriter;
