# 简单计算器MCP工具

这是一个简单的计算器MCP（Model Context Protocol）工具，提供基本的数学运算功能。

<!-- MCP_SERVER_CONFIG_START -->
```json
{
  "name": "simple-calculator-mcp",
  "version": "1.0.0",
  "description": "一个简单的计算器MCP工具，提供基本的数学运算功能",
  "author": "SanLangLOVE",
  "license": "MIT",
  "runtime": "node",
  "entry": "dist/index.js",
  "dependencies": {
    "@modelcontextprotocol/sdk": "^0.4.0"
  },
  "tools": [
    {
      "name": "add",
      "description": "计算两个数字的和",
      "parameters": {
        "type": "object",
        "properties": {
          "a": {
            "type": "number",
            "description": "第一个数字"
          },
          "b": {
            "type": "number",
            "description": "第二个数字"
          }
        },
        "required": ["a", "b"]
      }
    },
    {
      "name": "subtract",
      "description": "计算两个数字的差",
      "parameters": {
        "type": "object",
        "properties": {
          "a": {
            "type": "number",
            "description": "被减数"
          },
          "b": {
            "type": "number",
            "description": "减数"
          }
        },
        "required": ["a", "b"]
      }
    },
    {
      "name": "multiply",
      "description": "计算两个数字的乘积",
      "parameters": {
        "type": "object",
        "properties": {
          "a": {
            "type": "number",
            "description": "第一个数字"
          },
          "b": {
            "type": "number",
            "description": "第二个数字"
          }
        },
        "required": ["a", "b"]
      }
    },
    {
      "name": "divide",
      "description": "计算两个数字的商",
      "parameters": {
        "type": "object",
        "properties": {
          "a": {
            "type": "number",
            "description": "被除数"
          },
          "b": {
            "type": "number",
            "description": "除数"
          }
        },
        "required": ["a", "b"]
      }
    },
    {
      "name": "power",
      "description": "计算一个数字的幂",
      "parameters": {
        "type": "object",
        "properties": {
          "base": {
            "type": "number",
            "description": "底数"
          },
          "exponent": {
            "type": "number",
            "description": "指数"
          }
        },
        "required": ["base", "exponent"]
      }
    }
  ]
}
```
<!-- MCP_SERVER_CONFIG_END -->

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

MIT License

## ModelScope 部署

本项目已配置为支持ModelScope平台部署。主要配置信息：

- **运行时**: Node.js
- **入口文件**: `dist/index.js`
- **依赖管理**: npm
- **构建命令**: `npm run build`
- **启动命令**: `node dist/index.js`

### 部署要求

1. 确保项目已构建（`npm run build`）
2. 确保所有依赖已安装（`npm install`）
3. 确保`dist/index.js`文件存在且可执行

### ModelScope平台配置

在ModelScope平台的设置页面中，使用以下配置：

**服务名称**: `mcp-calculator`
**服务描述**: `一个简单的计算器MCP工具，提供基本的数学运算功能`
**运行环境**: `Node.js`
**启动命令**: `node dist/index.js`
**工作目录**: `/`

### 工具列表

本MCP服务器提供以下工具：

1. **add** - 加法运算
2. **subtract** - 减法运算  
3. **multiply** - 乘法运算
4. **divide** - 除法运算
5. **power** - 幂运算

所有工具都支持数字类型参数，并提供完整的错误处理机制。

### 环境变量

```json
{
  "NODE_ENV": "production"
}
```

### 健康检查

服务支持MCP协议标准健康检查，确保服务正常运行。
