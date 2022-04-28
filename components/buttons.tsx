import { NextPage } from "next";

export enum ButtonType {
  default = "default",
  primary = "primary",
  secondary = "secondary",
  success = "success",
  danger = "danger",
}

export const Button: NextPage<{ type: ButtonType; onClick: Function }> = (
  props
) => {
  const { type, onClick } = props;
  return (
    <button
      className={`btn btn-${type}`}
      onClick={() => {
        onClick();
      }}
      type="button"
    >
      {props.children}
    </button>
  );
};
