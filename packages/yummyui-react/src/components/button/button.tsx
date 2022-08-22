import React, { FC, PropsWithChildren } from 'react'
import { ButtonProps } from './button.type'
import styles from './button.module.sass'

const Button: FC<PropsWithChildren<ButtonProps>> = (props) => {
  return (
    <button className={styles['button']}>Button</button>
  )
}

export default Button