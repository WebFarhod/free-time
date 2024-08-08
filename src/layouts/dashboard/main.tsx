import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}
export default function Main({ children }: IProps) {
  return <div>{children}</div>;
}
