# Life Bar Chart 生命时间轴可视化

一个基于React和Canvas的生命时间轴可视化工具，帮助你更直观地感受时间的流逝和生命的珍贵。

## 功能特点

- 可视化展示生命时间轴
- 基于Canvas的高性能绘图
- 支持自定义时间区间和标记
- 响应式设计，适配多种设备

## 技术栈

- TypeScript
- React 17.x
- Canvas绘图
- Prettier（代码格式化）

## 快速开始

### 环境要求

- Node.js >= 12.x
- pnpm >= 6.x

### 安装依赖

```bash
pnpm install
```

### 开发调试

启动开发服务器：

```bash
pnpm start
```

访问 http://localhost:3000 查看应用。

### 构建部署

构建生产环境版本：

```bash
pnpm build
```

构建完成后，build目录中包含了可部署的文件。

## 项目结构

```
├── public/          # 静态资源
├── src/             # 源代码
│   ├── common/      # 公共组件和工具
│   ├── pages/       # 页面组件
│   └── App.tsx      # 应用入口
└── package.json     # 项目配置
```

## 开发指南

### 代码规范

项目使用Prettier进行代码格式化，运行以下命令格式化代码：

```bash
pnpm format
```

### 测试

运行单元测试：

```bash
pnpm test
```

## 贡献指南

欢迎提交Issue和Pull Request。在提交PR之前，请确保：

1. 代码经过格式化
2. 所有测试通过
3. 遵循现有的代码风格

## 许可证

MIT License
