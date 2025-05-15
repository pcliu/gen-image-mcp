import { ValidationError } from './errors';

// 验证必需字段
export function validateRequired<T extends object>(
  obj: T,
  requiredFields: (keyof T)[]
): void {
  const missingFields = requiredFields.filter(field => !obj[field]);
  if (missingFields.length > 0) {
    throw new ValidationError(`Missing required fields: ${missingFields.join(', ')}`);
  }
}

// 深度合并对象
export function deepMerge<T>(target: T, source: Partial<T>): T {
  const merged = { ...target };

  for (const key in source) {
    if (source[key] instanceof Object && !Array.isArray(source[key])) {
      merged[key] = deepMerge(merged[key], source[key]);
    } else {
      if (source[key] !== undefined) {
        merged[key] = source[key];
      }
    }
  }

  return merged;
}

// 生成唯一ID
export function generateId(prefix: string = ''): string {
  return `${prefix}${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

// 格式化文件名
export function formatFileName(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// 验证图片尺寸
export function validateImageSize(width: number, height: number): void {
  const validSizes = [
    { width: 1024, height: 1024 },
    { width: 1792, height: 1024 },
    { width: 1024, height: 1792 },
  ];

  const isValidSize = validSizes.some(
    size => size.width === width && size.height === height
  );

  if (!isValidSize) {
    throw new ValidationError(
      'Invalid image size. Supported sizes are: 1024x1024, 1792x1024, 1024x1792'
    );
  }
}

// 验证质量选项
export function validateQuality(quality: string): void {
  const validQualities = ['standard', 'hd'];
  if (!validQualities.includes(quality)) {
    throw new ValidationError(
      'Invalid quality option. Supported values are: standard, hd'
    );
  }
}

// 验证风格选项
export function validateStyle(style: string): void {
  const validStyles = ['natural', 'vivid'];
  if (!validStyles.includes(style)) {
    throw new ValidationError(
      'Invalid style option. Supported values are: natural, vivid'
    );
  }
} 