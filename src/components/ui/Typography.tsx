import React from 'react';

// 타이포그래피 변형 타입 정의
type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'caption' | 'small';
type TypographyWeight = 'regular' | 'medium' | 'semibold' | 'bold';
type TypographyColor = 'primary' | 'secondary' | 'muted' | 'accent';

interface TypographyProps {
  variant?: TypographyVariant;
  weight?: TypographyWeight;
  color?: TypographyColor;
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

// 타이포그래피 스타일 매핑
const typographyVariants = {
  h1: 'heading-1',
  h2: 'heading-2', 
  h3: 'heading-3',
  h4: 'heading-4',
  h5: 'heading-5',
  h6: 'heading-6',
  body: 'text-base',
  caption: 'text-sm',
  small: 'text-xs'
};

const typographyWeights = {
  regular: 'font-regular',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold'
};

const typographyColors = {
  primary: 'text-white',
  secondary: 'text-gray-300',
  muted: 'text-gray-400',
  accent: 'text-lime-400'
};

// 기본 태그 매핑
const defaultTags = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3', 
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  body: 'p',
  caption: 'span',
  small: 'small'
};

export default function Typography({ 
  variant = 'body',
  weight = 'regular',
  color = 'primary',
  children,
  className = '',
  as
}: TypographyProps) {
  const variantClass = typographyVariants[variant];
  const weightClass = typographyWeights[weight];
  const colorClass = typographyColors[color];
  const Tag = (as || defaultTags[variant]) as keyof JSX.IntrinsicElements;
  
  return (
    <Tag className={`${variantClass} ${weightClass} ${colorClass} ${className}`}>
      {children}
    </Tag>
  );
}
