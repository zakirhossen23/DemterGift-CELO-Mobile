
import { Logo } from '@/components/layout/Logo'
import { Nav } from '@/components/layout/Nav'

// import './index.scss'


export  function Header() {
    return (
        <header className="header">
            <Logo />
            <Nav />
        </header>
    )
}
