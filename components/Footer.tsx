import Image from 'next/image';
import Link  from "next/link"

import logoWhite from './../assets/logo-bookmark-white.png'
import fb from './../assets/icon-facebook.svg'
import twitter from './../assets/icon-twitter.svg'

export default function Footer() {
    return (
        <div className="footer-container container">
            <div className="image-wrapper">
                <Image 
                    className="footer-logo"
                    src={logoWhite} 
                    alt='logo' 
                    width={148}
                    height={24}
                />
            </div>
                <Link href="features">
                    <a className='footer-link'>Features</a>
                </Link>
                <Link href="pricing">
                    <a className='footer-link'>Pricing</a>
                </Link>
                <Link href="contact">
                    <a className='footer-link'>Contact</a>
                </Link>
            <div className="socials">
                <div className="image-wrapper">
                    <Image src={fb} alt='facebook' />
                </div>
                <div className="image-wrapper">
                    <Image src={twitter} alt='twitter' />
                </div>
            </div>
        </div>
    );
  }