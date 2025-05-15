# Gen Image MCP

基于 Model Context Protocol 的图像生成工具。

## 功能特性

- 支持多种图像生成模型
- 模板系统支持
- 灵活的参数配置
- 错误处理和重试机制

## 安装

```bash
npm install @modelcontextprotocol/sdk
```

## 项目结构

```
src/
  ├── services/        # 核心服务
  │   ├── ai/         # AI 服务适配器
  │   └── template/   # 模板管理服务
  ├── tools/          # MCP 工具实现
  ├── utils/          # 工具函数
  └── config/         # 配置文件
```

## 开发

```bash
# 安装依赖
npm install

# 构建项目
npm run build

# 运行测试
npm test
```

## 许可证

MIT 