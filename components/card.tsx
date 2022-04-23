import { NextPage } from "next";

const Card: NextPage = () => {
  return (
    <div className="mt-10 flex w-72 flex-col rounded-lg bg-gray-200 text-black">
      <section className="w-full rounded-t-lg bg-slate-500">
        Image Placeholder
      </section>
      <section className="p-3">
        <h2 className="text-2xl">Project Title</h2>
        <button type="button">Primary</button>
        <button type="button">Secondary</button>
      </section>
    </div>
  );
};

export default Card;
