import type { NextComponentType } from "next";
import { useEffect, useState } from "react";

const TypeWriter: NextComponentType = () => {
  const title: Array<String> = "Sahil Deshmukh".split("");
  const [word, setWord] = useState<Array<String>>([]);
  const [repeatCount, setRepeatCount] = useState(false);

  useEffect(() => {
    title.forEach((value, index) => {
      setTimeout(() => {
        setWord((prev) => [...prev, value]);

        if (index === title.length - 1) {
          console.log(word);

          erase();
          // setRepeatCount(repeatCount + 1);
        }
      }, index * 250);
    });
  }, []);

  const erase = () => {
    title.forEach((_, index) => {
      setTimeout(() => {
        // const less = word;
        // less.pop();
        console.log(word);

        // setWord(less);

        if (index === title.length - 1) {
          // setRepeatCount(repeatCount + 1);
        }
      }, index * 250);
    });
  };

  return (
    <div>
      {word?.map((value, index) => (
        <span key={index}>{value}</span>
      ))}
    </div>
  );
};

export default TypeWriter;
