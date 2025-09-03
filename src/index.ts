#!/usr/bin/env node

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";

// 创建MCP服务器实例
const server = new Server({
  name: "simple-calculator-mcp",
  version: "1.0.0",
});

// 定义工具列表
const tools = [
  {
    name: "add",
    description: "计算两个数字的和",
    inputSchema: {
      type: "object",
      properties: {
        a: {
          type: "number",
          description: "第一个数字",
        },
        b: {
          type: "number",
          description: "第二个数字",
        },
      },
      required: ["a", "b"],
    },
  },
  {
    name: "subtract",
    description: "计算两个数字的差",
    inputSchema: {
      type: "object",
      properties: {
        a: {
          type: "number",
          description: "被减数",
        },
        b: {
          type: "number",
          description: "减数",
        },
      },
      required: ["a", "b"],
    },
  },
  {
    name: "multiply",
    description: "计算两个数字的乘积",
    inputSchema: {
      type: "object",
      properties: {
        a: {
          type: "number",
          description: "第一个数字",
        },
        b: {
          type: "number",
          description: "第二个数字",
        },
      },
      required: ["a", "b"],
    },
  },
  {
    name: "divide",
    description: "计算两个数字的商",
    inputSchema: {
      type: "object",
      properties: {
        a: {
          type: "number",
          description: "被除数",
        },
        b: {
          type: "number",
          description: "除数",
        },
      },
      required: ["a", "b"],
    },
  },
  {
    name: "power",
    description: "计算一个数字的幂",
    inputSchema: {
      type: "object",
      properties: {
        base: {
          type: "number",
          description: "底数",
        },
        exponent: {
          type: "number",
          description: "指数",
        },
      },
      required: ["base", "exponent"],
    },
  },
];

// 处理工具列表请求
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools,
  };
});

// 处理工具调用请求
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  try {
    switch (name) {
      case "add": {
        const { a, b } = args as { a: number; b: number };
        const result = a + b;
        return {
          content: [
            {
              type: "text",
              text: `${a} + ${b} = ${result}`,
            },
          ],
        };
      }

      case "subtract": {
        const { a, b } = args as { a: number; b: number };
        const result = a - b;
        return {
          content: [
            {
              type: "text",
              text: `${a} - ${b} = ${result}`,
            },
          ],
        };
      }

      case "multiply": {
        const { a, b } = args as { a: number; b: number };
        const result = a * b;
        return {
          content: [
            {
              type: "text",
              text: `${a} × ${b} = ${result}`,
            },
          ],
        };
      }

      case "divide": {
        const { a, b } = args as { a: number; b: number };
        if (b === 0) {
          return {
            content: [
              {
                type: "text",
                text: "错误：除数不能为零",
              },
            ],
            isError: true,
          };
        }
        const result = a / b;
        return {
          content: [
            {
              type: "text",
              text: `${a} ÷ ${b} = ${result}`,
            },
          ],
        };
      }

      case "power": {
        const { base, exponent } = args as { base: number; exponent: number };
        const result = Math.pow(base, exponent);
        return {
          content: [
            {
              type: "text",
              text: `${base}^${exponent} = ${result}`,
            },
          ],
        };
      }

      default:
        return {
          content: [
            {
              type: "text",
              text: `未知的工具: ${name}`,
            },
          ],
          isError: true,
        };
    }
  } catch (error) {
    return {
      content: [
        {
          type: "text",
          text: `执行工具时出错: ${error instanceof Error ? error.message : String(error)}`,
        },
      ],
      isError: true,
    };
  }
});

// 启动服务器
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("简单计算器MCP工具已启动");
}

main().catch((error) => {
  console.error("启动MCP服务器时出错:", error);
  process.exit(1);
});