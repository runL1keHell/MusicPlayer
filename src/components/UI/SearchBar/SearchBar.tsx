import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


type SearchBarProps = {
    className?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({className}) => {
    return (
        <div className={`w-[60%] h-[37px]  relative ${className}`}>
            <input className='w-[100%] h-[100%] pl-[10px] bg-white rounded-[19px] shadow-inner md:shadow-lg' type="text" />
            <FontAwesomeIcon icon={faMagnifyingGlass} color='#76CCFB' className='w-[24px] h-[24px] absolute left-[15px] top-[8px] bg-white cursor-pointer' />
        </div>
    )
}