import { SvgProps } from "../../@types/SvgProps"

export const Player = ({className, width, height}: SvgProps) => {
    return (
        <svg className={`${className}`} width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M4 7V5H19V7H4ZM4 9V11H19V9H4ZM4 15V13H16V15H4ZM4 19V17H16V19H4ZM22 16L18 13V19L22 16Z" fill="#76CCFB"/>
        </svg>
    )
}