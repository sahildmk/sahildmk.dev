import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Delay from "../utils/delay";

const TypeWriter: NextPage<{ text: string }> = (props) => {
  const { text } = props;
  const title: Array<String> = text.split("");
  const [word, setWord] = useState<Array<String>>([]);

  const runAnimation = async (str: String) => {
    await Delay(1000);

    for (let i = 0; i < title.length; i++) {
      await Delay(250);
      setWord((prev) => [...prev, title.at(i) || ""]);
    }

    await erase();
  };

  const erase = async () => {
    await Delay(1000);

    for (let i = title.length - 1; i >= 0; i--) {
      await Delay(100);
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
