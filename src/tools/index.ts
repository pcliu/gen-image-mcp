import { MCPServer, Context, Next } from '@modelcontextprotocol/sdk';
import { log } from '../utils/logger';
import { handleError } from '../utils/errors';

// 创建 MCP 服务器实例
export const server = new MCPServer();

// 错误处理中间件
server.use(async (ctx: Context, next: Next) => {
  try {
    await next();
  } catch (error) {
    handleError(error as Error);
    throw error;
  }
});

// 日志中间件
server.use(async (ctx: Context, next: Next) => {
  const startTime = Date.now();
  
  log.info('Request received', {
    tool: ctx.tool,
    params: ctx.params,
  });

  try {
    await next();

    log.info('Request completed', {
      tool: ctx.tool,
      duration: Date.now() - startTime,
    });
  } catch (error) {
    log.error('Request failed', error as Error, {
      tool: ctx.tool,
      duration: Date.now() - startTime,
    });
    throw error;
  }
});

// 导出服务器实例
export default server; 