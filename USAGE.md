# MCP工具使用指南

## 快速开始

### 1. 安装依赖
```bash
npm install
```

### 2. 构建项目
```bash
npm run build
```

### 3. 配置Claude Desktop

将以下配置添加到你的Claude Desktop配置文件中：

**macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
**Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

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

**注意**: 请将路径 `/Users/sanrosang/Documents/mcp/dist/index.js` 替换为你实际的项目路径。

### 4. 重启Claude Desktop

配置完成后，重启Claude Desktop应用程序。

## 可用工具

### 1. 加法 (add)
- **功能**: 计算两个数字的和
- **参数**: 
  - `a`: 第一个数字
  - `b`: 第二个数字
- **示例**: 计算 5 + 3

### 2. 减法 (subtract)
- **功能**: 计算两个数字的差
- **参数**: 
  - `a`: 被减数
  - `b`: 减数
- **示例**: 计算 10 - 4

### 3. 乘法 (multiply)
- **功能**: 计算两个数字的乘积
- **参数**: 
  - `a`: 第一个数字
  - `b`: 第二个数字
- **示例**: 计算 6 × 7

### 4. 除法 (divide)
- **功能**: 计算两个数字的商
- **参数**: 
  - `a`: 被除数
  - `b`: 除数
- **示例**: 计算 15 ÷ 3
- **注意**: 除数不能为零

### 5. 幂运算 (power)
- **功能**: 计算一个数字的幂
- **参数**: 
  - `base`: 底数
  - `exponent`: 指数
- **示例**: 计算 2^8

## 使用方法

在Claude Desktop中，你可以直接使用自然语言来调用这些工具：

- "请帮我计算 5 + 3"
- "计算 10 的平方"
- "15 除以 3 等于多少？"

## 开发模式

如果你想在开发模式下运行服务器（支持热重载）：

```bash
npm run dev
```

## 测试工具

你可以使用MCP Inspector来测试工具：

```bash
npx @modelcontextprotocol/inspector ./dist/index.js
```

## 故障排除

### 1. 工具未显示
- 确保Claude Desktop已重启
- 检查配置文件路径是否正确
- 查看Claude Desktop的日志文件

### 2. 工具调用失败
- 确保项目已正确构建
- 检查Node.js版本（需要v18或更高版本）
- 查看控制台错误信息

### 3. 路径问题
- 确保使用绝对路径
- 在Windows上使用正斜杠或双反斜杠
- 检查文件权限

## 扩展功能

你可以通过修改 `src/index.ts` 文件来添加更多功能：

1. 在 `tools` 数组中添加新的工具定义
2. 在 `CallToolRequestSchema` 处理函数中添加对应的处理逻辑

例如，添加一个平方根工具：

```typescript
{
  name: "sqrt",
  description: "计算数字的平方根",
  inputSchema: {
    type: "object",
    properties: {
      number: {
        type: "number",
        description: "要计算平方根的数字",
      },
    },
    required: ["number"],
  },
},
```

然后在处理函数中添加：

```typescript
case "sqrt": {
  const { number } = args as { number: number };
  if (number < 0) {
    return {
      content: [
        {
          type: "text",
          text: "错误：负数没有实数平方根",
        },
      ],
      isError: true,
    };
  }
  const result = Math.sqrt(number);
  return {
    content: [
      {
        type: "text",
        text: `√${number} = ${result}`,
      },
    ],
  };
}
```