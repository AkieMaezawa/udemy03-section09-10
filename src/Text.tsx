import { VFC } from "react";

type Props = {
  color: string;
  fontSize: string;
};
// FCは暗黙的にchildrenが含まれてしまうので良くない。
export const Text: VFC<Props> = (props) => {
  const { color, fontSize } = props;
  return <p style={{ color, fontSize }}>テキストです</p>;
};
