import style from "./Title.module.css";

type HeadingProp = {
  tag?: keyof JSX.IntrinsicElements;
  styleHeading: string;
  children: React.ReactNode;
};

export const Title = ({
  tag: Tag = "h1",
  styleHeading,
  children,
}: HeadingProp) => {
  return <Tag className={style[styleHeading]}>{children}</Tag>;
};
