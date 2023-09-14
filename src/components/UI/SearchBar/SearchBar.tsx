import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


type SearchBarProps = {
    className?: string;
}

export const SearchBar = ({className}: SearchBarProps) => {
    return (
        <div className={`w-[60%] h-[37px]  relative ${className}`}>
            <input className='w-[100%] h-[100%] bg-white rounded-[19px] shadow-inner md:shadow-lg' type="text" />
            <FontAwesomeIcon icon={faMagnifyingGlass} color='#76CCFB' className='w-[24px] h-[24px] absolute left-[15px] top-[8px] bg-white cursor-pointer' />
        </div>
    )
}

// border-radius: 19px;
// border: 1px solid rgba(0, 0, 0, 0.20);
// background: #FFF;
// box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;

// Show 1 more color
