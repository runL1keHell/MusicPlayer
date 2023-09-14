import { SvgProps } from "../../@types/SvgProps"

export const Star = ({className}: SvgProps) => {
    return (
        <svg className={`${className}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.17022 14.8942L4.794 22.9182L12 19.1298L19.206 22.9182L17.8297 14.8942L23.6595 9.21159L15.603 8.04091L12 0.740448L8.39699 8.04091L0.340454 9.21159L6.17022 14.8942ZM15.6808 14.196L16.5497 19.2622L12 16.8702L7.45026 19.2622L8.31918 14.196L4.63838 10.6081L9.72512 9.86892L12 5.25955L14.2748 9.86892L19.3616 10.6081L15.6808 14.196Z" fill="#76CCFB"/>
        </svg>
    )
}