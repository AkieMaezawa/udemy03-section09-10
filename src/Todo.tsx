import { VFC } from "react";
import { TodoType } from "./types/todo";

// // ?は指定しなくてもよい任意になる
// type TodoType = {
//   userId: number;
//   title: string;
//   completed?: boolean;
// };

export const Todo: VFC<Omit<TodoType, "id">> = (
  // Pick = typeから使う要素を定義 Omit = typeから使わない要素を定義
  // props: Pick<TodoType, "userId" | "title" | "completed">
  // props: Omit<TodoType, "id">
  props
) => {
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[完]" : "[未]";
  return <p>{`${completeMark} ${title}(ユーザー：${userId})`}</p>;
};
