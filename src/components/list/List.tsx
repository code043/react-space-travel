import style from "./List.module.css";
const items = [
  {
    icon: "./image/Insights.png",
    title: "Planets",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: "./image/Insights.png",
    title: "Interstellar",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: "./image/Insights.png",
    title: "Wormhole",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: "./image/Insights.png",
    title: "Time",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];
export const List = ({ styleList }: { styleList: string }) => {
  return (
    <ul className={style[styleList]}>
      {items.map((item, i) => {
        return (
          <li key={i}>
            <img src={item.icon} alt="" />
            <h4>{item.title}</h4>
            <p>{item.content}</p>
          </li>
        );
      })}
    </ul>
  );
};
