import Link  from "next/link"

export function DeskNav() {
    return (
        <header className="header">
            <nav className="header-links">
                <Link href="/features"><a className="link" aria-label="features">features</a></Link>
                <Link href="/prices"><a className="link" aria-label="price">Pricing</a></Link>
                <Link href="/contact"><a className="link" aria-label="contacts">Contact</a></Link>
                <Link href="/login"><a className="link link--special" aria-label="login">Login</a></Link>
            </nav>
        </header>
    )
}
