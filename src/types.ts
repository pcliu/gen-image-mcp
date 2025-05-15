// 图片尺寸类型
export interface ImageSize {
  width: number;
  height: number;
}

// 图片质量类型
export type ImageQuality = 'standard' | 'hd';

// 图片风格类型
export type ImageStyle = 'natural' | 'vivid';

// 响应格式类型
export type ResponseFormat = 'url' | 'b64_json';

// 颜色主题类型
export interface ColorTheme {
  primary: string[];
  secondary?: string[];
  background?: string[];
  emphasis?: string[];
}

// 构图类型
export interface Composition {
  layout: 'centered' | 'flow' | 'balanced';
  perspective: '2d' | 'front_facing' | 'isometric';
  depth: 'flat' | 'simple' | 'complex';
}

// 主要元素类型
export interface MainElement {
  style: 'cartoon' | 'realistic' | 'minimal' | 'technical';
  complexity: 'low' | 'medium' | 'high';
  emphasis_level: 'subtle' | 'medium' | 'strong';
}

// 支持元素类型
export interface SupportingElements {
  annotations: boolean;
  labels: boolean;
  arrows: boolean;
  icons: boolean;
}

// 文本元素类型
export interface TextElements {
  font_style: 'sans_serif' | 'serif' | 'monospace';
  size_scale: 'small' | 'medium' | 'large';
  weight: 'light' | 'regular' | 'medium' | 'bold';
}

// 模板样式类型
export interface TemplateStyle {
  art_style: 'cartoon' | 'realistic' | 'minimal' | 'technical';
  color_theme: ColorTheme;
  composition: Composition;
}

// 模板元素类型
export interface TemplateElements {
  main: MainElement;
  supporting: SupportingElements;
  text: TextElements;
}

// 完整模板类型
export interface Template {
  template_id: string;
  name: string;
  description: string;
  version: string;
  type: 'illustration' | 'concept' | 'diagram';
  style: TemplateStyle;
  elements: TemplateElements;
}

// 生成图片选项类型
export interface GenerateImageOptions {
  size: ImageSize;
  quality?: ImageQuality;
  style?: ImageStyle;
  response_format?: ResponseFormat;
}

// 元数据类型
export interface Metadata {
  category: 'illustration' | 'concept' | 'diagram';
  name: string;
  tags: string[];
  user: string;
} 