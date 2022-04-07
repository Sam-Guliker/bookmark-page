import Image from 'next/image';
import logo from './../assets/logo-bookmark-white.png'
import closing from './../assets/icon-close.svg'

type mobileProp = {
    active: boolean,
    isActive: Function
};

export const MobileNav = ({active, isActive}: mobileProp) => {
    const onClickMenuHandler = (e:any) => {
        const currentState:boolean = active;
        isActive(!currentState)
    }
    return (
        <div className={`nav-container ${active ? 'js-isActive' : ''}`}>
            <div className="standard-options">
                <div className="image-wrapper">
                    <Image width={142} height={24} className="closing" src={logo} alt='closing' />
                </div>
                <a onClick={onClickMenuHandler}>
                    <div className="image-wrapper">
                        <Image className="closing" src={closing} alt='closing' />
                    </div>
                </a>
            </div>
            
            <nav className="mobile-navigation">
                <a className="mobile-navigation__item navigation-01" href="https://github.com/Sam-Guliker/sunny-agency">Features</a>
                <a className="mobile-navigation__item navigation-01" href="https://github.com/Sam-Guliker/sunny-agency">Pricing</a>
                <a className="mobile-navigation__item navigation-01" href="https://github.com/Sam-Guliker/sunny-agency">Contact</a>
                <a className="mobile-navigation__item navigation-01 btn--call-to-action-mobile" href="#">Login</a>
            </nav>

            <div className="background"></div>
        </div>
    )
}