import { SvgProps } from "../../@types/SvgProps"

export const BiggerLogo = ({className, width, height}: SvgProps) => {
    return (
        <svg className={`${className}`} width={width} height={height} viewBox="0 0 153 202" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="Ellipse 6" d="M152.01 201.671C74.9527 158.171 103.01 39.1711 93.5978 1.17115C81.8768 -13.379 65.9795 112.452 49.4035 112.452C32.8274 112.452 16.9303 31.3686 5.20933 45.9188C-6.51167 60.4689 5.20934 139.594 5.20934 160.171H19.8541C19.8541 146.413 12.0172 83.2286 19.8541 73.5C27.6911 63.7714 38.3203 160.171 49.4035 160.171C60.4866 160.171 88.0007 36.1902 95.8377 45.9188C78.9528 45.9188 78.9528 112.452 78.9528 160.171L152.01 201.671Z" fill="#76CCFB"/>
        </svg>
    )
}