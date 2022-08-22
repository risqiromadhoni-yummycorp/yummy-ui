import React from 'react'

type BaseButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

interface ButtonDefaultProps {
  label: string;
  /**
   * @see [Documentation](https://tailwindcss.com/docs/font-weight)
   */
  labelWeight: 'thin' | 'extralight' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black';
  /**
   * @see [Documentation](https://tailwindcss.com/docs/font-weight)
   */
  labelColor: 'primary' | 'secondary' | 'danger' | 'warning' | 'info' | 'success' | 'dark' | 'inherit' | string;
  /**
   * @see [Documentation](https://tailwindcss.com/docs/border-radius)
   */
  rounded: 'none' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';
  variant: 'primary' | 'secondary' | 'danger' | 'warning' | 'info' | 'success' | 'dark' | 'inherit';
  outline: boolean;
}

export type ButtonProps = BaseButtonProps & Partial<ButtonDefaultProps>