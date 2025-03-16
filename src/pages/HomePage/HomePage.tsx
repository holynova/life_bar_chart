import React from "react";
import LifeBarChart from "./components/LifeBarChart";
import { chinaList3 } from "./components/data";
import Tabs from "../../common/components/Tabs";
import { poetList } from "../../data/poet";

interface Props {}

const HomePage: React.FC<Props> = (props) => {
  const tabItems = [
    {
      key: "folded",
      label: "中国朝代-折叠",
      content: <LifeBarChart folded={true} dataList={chinaList3} />,
    },
    {
      key: "expanded",
      label: "中国朝代",
      content: <LifeBarChart folded={false} dataList={chinaList3} />,
    },
    {
      key: "p1",
      label: "唐宋诗词人",
      content: <LifeBarChart folded={false} dataList={poetList} />,
    },
    {
      key: "p2",
      label: "唐宋诗词人",
      content: <LifeBarChart folded={true} dataList={poetList} />,
    },
  ];

  return (
    <div className="HomePage">
      <Tabs items={tabItems} />
    </div>
  );
};

export default HomePage;
