import React, { useState } from "react";
import styles from "./Tabs.module.css";

interface TabItem {
  key: string;
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  items: TabItem[];
  defaultActiveKey?: string;
  onChange?: (activeKey: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ items, defaultActiveKey, onChange }) => {
  const [activeKey, setActiveKey] = useState(defaultActiveKey || items[0]?.key);

  const handleTabClick = (key: string) => {
    setActiveKey(key);
    onChange?.(key);
  };

  return (
    <div className={styles.tabs}>
      <div className={styles["tabs-nav"]}>
        {items.map((item) => (
          <div
            key={item.key}
            className={`${styles["tab-nav-item"]} ${activeKey === item.key ? styles.active : ""}`}
            onClick={() => handleTabClick(item.key)}
          >
            {item.label}
          </div>
        ))}
      </div>
      <div className={styles["tabs-content"]}>
        {items.find((item) => item.key === activeKey)?.content}
      </div>
    </div>
  );
};

export default Tabs;
