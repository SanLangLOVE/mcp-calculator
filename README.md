# 简单计算器MCP工具

这是一个简单的计算器MCP（Model Context Protocol）工具，提供基本的数学运算功能。

## 功能特性

- 加法运算
- 减法运算
- 乘法运算
- 除法运算
- 幂运算

## 安装和设置

### 1. 安装依赖

```bash
npm install
```

### 2. 构建项目

```bash
npm run build
```

### 3. 配置MCP客户端

在你的MCP客户端配置文件中添加以下配置：

#### 对于Claude Desktop (macOS)

编辑 `~/Library/Application Support/Claude/claude_desktop_config.json`：

```json
{
  "mcpServers": {
    "simple-calculator": {
      "command": "node",
      "args": ["/Users/sanrosang/Documents/mcp/dist/index.js"],
      "env": {}
    }
  }
}
```

#### 对于其他MCP客户端

根据你的MCP客户端文档，添加相应的服务器配置。

## 使用方法

启动MCP客户端后，你可以使用以下工具：

### 1. 加法 (add)
- 参数：`a` (数字), `b` (数字)
- 示例：计算 5 + 3

### 2. 减法 (subtract)
- 参数：`a` (被减数), `b` (减数)
- 示例：计算 10 - 4

### 3. 乘法 (multiply)
- 参数：`a` (数字), `b` (数字)
- 示例：计算 6 × 7

### 4. 除法 (divide)
- 参数：`a` (被除数), `b` (除数)
- 示例：计算 15 ÷ 3
- 注意：除数不能为零

### 5. 幂运算 (power)
- 参数：`base` (底数), `exponent` (指数)
- 示例：计算 2^8

## 开发

### 运行开发版本

```bash
npm run dev
```

### 项目结构

```
├── src/
│   └── index.ts          # 主程序文件
├── dist/                 # 编译输出目录
├── package.json          # 项目配置
├── tsconfig.json         # TypeScript配置
└── README.md            # 说明文档
```

## 扩展功能

你可以通过修改 `src/index.ts` 文件来添加更多功能：

1. 在 `tools` 数组中添加新的工具定义
2. 在 `CallToolRequestSchema` 处理函数中添加对应的处理逻辑

## 许可证

MIT License# mcp-calculator
