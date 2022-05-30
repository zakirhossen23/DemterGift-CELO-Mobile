
import { Logo } from '@/components/layout/Logo'
import { Nav } from '@/components/layout/Nav'
import * as React from 'react'
import './index.scss'


export  function Header() {
    return (
        <header className="header">
            <Logo />
            <Nav />
        </header>
    )
}
