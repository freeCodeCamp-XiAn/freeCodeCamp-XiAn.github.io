import * as React from 'react'

interface IProps {
    type?: string,
    size?: string
    onClick?: () => void,
    className?: string,
    style?: object,
    children?: React.ReactNode
}
   
const Button1 = (props: IProps) => (
    <button className={props.className} type={props.type} style={props.style} onClick={props.onClick} >
    {props.children}
    </button>
  )

export default Button1
