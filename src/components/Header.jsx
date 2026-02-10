import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { List, X, Moon, Sun } from '@phosphor-icons/react'
import { useTheme } from '../context/ThemeContext'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const { isDark, toggleTheme } = useTheme()

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Process', href: '#process' },
        { name: 'Why Us', href: '#why-us' },
        { name: 'Contact', href: '#contact' },
    ]

    const scrollToSection = (href) => {
        if (isMenuOpen) setIsMenuOpen(false)
        setTimeout(() => {
            const el = document.querySelector(href)
            if (el) el.scrollIntoView({ behavior: 'smooth' })
        }, isMenuOpen ? 300 : 0)
    }

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                ? isDark
                    ? 'bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-gray-800/50 shadow-lg shadow-black/10'
                    : 'bg-white/90 backdrop-blur-xl border-b border-gray-200/50 shadow-lg shadow-black/5'
                : 'bg-transparent'
                }`}
        >
            <div className="section-container">
                <div className="flex items-center justify-between h-16 sm:h-20">
                    {/* Logo */}
                    <motion.a
                        href="#home"
                        onClick={(e) => { e.preventDefault(); scrollToSection('#home') }}
                        className="flex items-center gap-2 sm:gap-3 flex-shrink-0"
                        whileHover={{ scale: 1.02 }}
                    >
                        <img
                            src="/images/logo.png"
                            alt="Softmatrices"
                            className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl object-contain ${isDark ? 'bg-white' : ''}`}
                        />
                        <span className={`text-lg sm:text-xl font-heading font-bold tracking-tight ${isDark ? 'text-white' : 'text-dark'}`}>
                            softmatrices
                        </span>
                    </motion.a>

                    {/* Desktop Nav — centered */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navItems.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => scrollToSection(item.href)}
                                className={`font-medium text-sm tracking-wide uppercase transition-colors duration-200 relative group ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-dark'
                                    }`}
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                            </button>
                        ))}
                    </nav>

                    {/* Desktop Right */}
                    <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
                        <motion.button
                            onClick={toggleTheme}
                            className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 ${isDark ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                            aria-label="Toggle theme"
                            whileHover={{ rotate: 180 }}
                            transition={{ duration: 0.4 }}
                        >
                            {isDark ? <Sun size={18} weight="duotone" /> : <Moon size={18} weight="duotone" />}
                        </motion.button>
                        <motion.button
                            onClick={() => scrollToSection('#contact')}
                            className={`relative overflow-hidden px-6 py-2.5 rounded-full text-sm font-heading font-semibold tracking-wide transition-colors duration-200 ${isDark ? 'bg-white text-dark hover:bg-gray-200' : 'bg-dark text-white hover:bg-gray-800'
                                }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="absolute inset-0 shimmer-effect" />
                            <span className="relative z-10">Get Started</span>
                        </motion.button>
                    </div>

                    {/* Mobile Right */}
                    <div className="flex items-center gap-2 lg:hidden">
                        <motion.button
                            onClick={toggleTheme}
                            className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${isDark ? 'bg-gray-800 text-yellow-400' : 'bg-gray-100 text-gray-600'
                                }`}
                            aria-label="Toggle theme"
                            whileHover={{ rotate: 180 }}
                            transition={{ duration: 0.4 }}
                        >
                            {isDark ? <Sun size={16} weight="duotone" /> : <Moon size={16} weight="duotone" />}
                        </motion.button>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className={`p-2 ${isDark ? 'text-white' : 'text-dark'}`}
                        >
                            {isMenuOpen ? <X size={24} weight="bold" /> : <List size={24} weight="bold" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`lg:hidden border-t ${isDark ? 'bg-[#0A0A0A] border-gray-800' : 'bg-white border-gray-100'}`}
                    >
                        <div className="section-container py-4 sm:py-6 space-y-1">
                            {navItems.map((item, i) => (
                                <motion.button
                                    key={item.name}
                                    onClick={() => scrollToSection(item.href)}
                                    className={`block w-full text-left py-3 text-base font-heading font-semibold transition-colors ${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-dark'
                                        }`}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    {item.name}
                                </motion.button>
                            ))}
                            <motion.button
                                onClick={() => scrollToSection('#contact')}
                                className={`w-full mt-4 py-3.5 rounded-full text-sm font-heading font-semibold tracking-wide ${isDark ? 'bg-white text-dark' : 'bg-dark text-white'
                                    }`}
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                Get Started
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    )
}

export default Header
