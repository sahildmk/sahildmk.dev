import { NextPage } from "next";
import { Button, ButtonType } from "./buttons";

const Card: NextPage<{ title: String }> = () => {
  return (
    <div className="card">
      <section className="h-4/5 w-full rounded-t-lg bg-slate-500"></section>
      <section className="p-5">
        <h2 className="mb-2 text-lg font-semibold md:text-xl">Project Title</h2>
        <Button
          type={ButtonType.primary}
          onClick={() => {
            console.log("Primary");
          }}
        >
          Primary
        </Button>
      </section>
    </div>
  );
};

export default Card;
