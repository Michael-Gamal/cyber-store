'use client'

import { useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import logoB from '../../public/Image/logo-black.png'

import { CiHeart, CiSearch } from "react-icons/ci"
import { IoCartOutline } from "react-icons/io5"
import { FiUser } from "react-icons/fi"

import { NavLink } from '../types/types'
import { log } from 'console'

const NAV_LINKS: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/blog', label: 'Blog' },
]

const logo: StaticImageData = logoB

const Header = (): JSX.Element => {

  const [open, setOpen] = useState<boolean>(false)
  const [search, setSearch] = useState<string>('')

  const closeMenu = (): void => setOpen(false)


  const handleSearch = (e:React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    if (!search.trim()) return
    console.log('Search for:', search);
    
  }

  return (
    <header className="border-b">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo */}
        <Image src={logo} alt="Logo" width={logo.width} height={logo.height} priority />

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-10">
          <form 
            onSubmit={handleSearch}
            className="w-96 h-12 px-3 rounded-lg flex items-center bg-[#F5F5F5]"
          >
            <CiSearch className="text-xl text-[#989898]" />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-full outline-none px-3 bg-transparent"
              placeholder="Search"
              aria-label="Search"
            />
          </form>

          <nav className="flex gap-6">
            {NAV_LINKS.map((link: NavLink) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex gap-4 text-2xl">
            <button aria-label="Wishlist" onClick={() => {/* handle wishlist */}}>
              <CiHeart />
            </button>
            <button aria-label="Shopping cart" onClick={() => {/* Shopping cart */}}>
              <IoCartOutline />
            </button>
            <button aria-label="User account" onClick={() => {/* handle account */}}>
              <FiUser />
            </button>       
          </div>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden flex flex-col gap-1"
          aria-label="Toggle menu"
          aria-expanded={open}
          
        >
          <span className="w-8 h-1 bg-black"></span>
          <span className="w-8 h-1 bg-black"></span>
          <span className="w-8 h-1 bg-black"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          open ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className="px-4 pb-6 flex flex-col gap-6">
          <div className="w-full h-12 px-3 rounded-lg flex items-center bg-[#F5F5F5]">
            <CiSearch className="text-xl text-[#989898]" />
            <input
              type="search"
              className="w-full h-full outline-none px-3 bg-transparent"
              placeholder="Search"
              aria-label="Search"
            />       
          </div>

          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link: NavLink) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex gap-4 text-2xl">
            <CiHeart />
            <IoCartOutline />
            <FiUser />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
