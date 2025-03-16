# Life Bar Chart 生命时间轴可视化

一个优雅的生命时间轴可视化工具，用于展示和比较不同人物的生命时间段。

## 项目简介

本项目是一个基于TypeScript和React开发的可视化应用，通过条形图的方式直观展示人物的生命时间段。每个条形代表一个人物，横轴表示时间跨度，可以清晰地看到不同人物的生命时期重叠情况。

## 功能特点

- 🎯 时间轴映射：将人物的出生年份和结束年份映射到画布上，自动计算比例
- 🎨 多彩展示：支持自定义颜色列表，为不同人物的时间轴赋予不同颜色
- 📏 灵活布局：可自定义条形高度、间距和画布宽度
- 📝 信息展示：支持显示人物姓名、年龄、起止年份等信息
- 🎲 模拟数据：内置随机数据生成功能，支持快速预览效果

## 技术栈

- TypeScript
- React
- Canvas绘图

## 数据结构

每个人物的数据结构如下：

```typescript
interface BarDataModel {
  name: string;    // 人物姓名
  start: number;   // 开始年份
  end: number;     // 结束年份
}
```

## 使用方法

1. 初始化配置

```typescript
const lifeBar = new LifeBar({
  arr: data,              // 数据数组
  rowHeight: 16,          // 条形高度
  gutter: 4,              // 条形间距
  canvasWidth: 800,       // 画布宽度
  isMock: false           // 是否使用模拟数据
});
```

2. 自定义显示配置

```typescript
interface IBarConfig {
  showName: boolean;           // 是否显示姓名
  showAge: boolean;            // 是否显示年龄
  showStartAndEnd: boolean;    // 是否显示起止年份
}
```

## 开发说明

1. 安装依赖
```bash
pnpm install
```

2. 启动开发服务器
```bash
pnpm start
```

3. 构建项目
```bash
pnpm build
```

## 注意事项

- 时间轴支持负数年份（公元前）
- 模拟数据默认生成100条记录
- 建议根据实际需求调整条形高度和间距