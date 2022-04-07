import { useRef, useState, forwardRef } from 'react';
import Image from 'next/image';

import { DeskNav } from '../components/DeskNav'
import { MobileNav } from '../components/MobileNav'

import logo from './../assets/logo-bookmark.svg'
import menu from './../assets/icon-hamburger.svg'

import useWindowSize from '../components/lib/Resizer'

// eslint-disable-next-line react/display-name
const Header = forwardRef<HTMLElement>(() => {
        const [active, isActive] = useState(false);
    
        const mobileNavPanel = useRef(null)
    
        const size:any = useWindowSize();
        const tabletSize = 768
    
        const onClickMenuHandler = (_e:any) => {
            const currentState:boolean = active;
            isActive(!currentState)
        }
    
        return (
            <>
                <header className='header'>
                    <div className="image-wrapper">
                        <Image width={148} height={24} src={logo} alt='logo' />
                    </div>
                    { size.width < tabletSize && <a href='#' arial-abel="open mobile menu" onClick={onClickMenuHandler} ref={mobileNavPanel} >
                            <Image className='menu' src={menu} alt='menu' />
                        </a>
                    }
                    { size.width > tabletSize && <DeskNav /> }
                </header>
                { size.width < tabletSize && <MobileNav active={active} isActive={isActive} />}
            </>
        )
    }
) 

export default Header