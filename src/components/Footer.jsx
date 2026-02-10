import { Envelope, ArrowUp } from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const Footer = () => {
    const currentYear = new Date().getFullYear()
    const { isDark } = useTheme()

    const links = {
        company: [
            { name: 'About', href: '#about' },
            { name: 'Services', href: '#services' },
            { name: 'Process', href: '#process' },
            { name: 'Why Choose Us', href: '#why-us' },
        ],
        services: [
            { name: 'Cloud Solutions', href: '#services' },
            { name: 'App Development', href: '#services' },
            { name: 'Security Consulting', href: '#services' },
            { name: 'AI/ML Integration', href: '#services' },
        ],
    }

    const scrollTo = (href) => {
        const el = document.querySelector(href)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <footer className={`transition-colors duration-300 text-white ${isDark ? 'bg-[#0A0A0A] border-t border-gray-800' : 'bg-dark'}`}>
            <div className="section-container">
                {/* Main Footer */}
                <div className="py-16 sm:py-20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12">
                        {/* Brand */}
                        <div className="sm:col-span-2 lg:col-span-1">
                            <div className="flex items-center gap-3 mb-5">
                                <img src="/images/logo.png" alt="Softmatrices" className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl object-contain bg-white" />
                                <span className="text-lg sm:text-xl font-heading font-bold">softmatrices</span>
                            </div>
                            <p className="text-gray-400 leading-relaxed mb-5 text-sm">
                                Empowering businesses with innovative IT solutions. Cutting-edge technology and expert consulting to drive your business forward.
                            </p>
                            <div className="flex items-center gap-3">
                                <Envelope size={16} weight="duotone" className="text-primary flex-shrink-0" />
                                <a href="mailto:info@softmatrices.com" className="text-gray-400 hover:text-white text-sm transition-colors">
                                    info@softmatrices.com
                                </a>
                            </div>
                        </div>

                        {/* Company Links */}
                        <div>
                            <h4 className="font-heading font-semibold text-xs sm:text-sm uppercase tracking-wider mb-5">Company</h4>
                            <ul className="space-y-2.5">
                                {links.company.map((link) => (
                                    <li key={link.name}>
                                        <button
                                            onClick={() => scrollTo(link.href)}
                                            className="text-gray-400 hover:text-white text-sm transition-colors hover:translate-x-1 inline-block transform duration-200"
                                        >
                                            {link.name}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services Links */}
                        <div>
                            <h4 className="font-heading font-semibold text-xs sm:text-sm uppercase tracking-wider mb-5">Services</h4>
                            <ul className="space-y-2.5">
                                {links.services.map((link) => (
                                    <li key={link.name}>
                                        <button
                                            onClick={() => scrollTo(link.href)}
                                            className="text-gray-400 hover:text-white text-sm transition-colors hover:translate-x-1 inline-block transform duration-200"
                                        >
                                            {link.name}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* CTA */}
                        <div>
                            <h4 className="font-heading font-semibold text-xs sm:text-sm uppercase tracking-wider mb-5">Get in Touch</h4>
                            <p className="text-gray-400 text-sm leading-relaxed mb-5">
                                Ready to start your next project? Contact us today.
                            </p>
                            <motion.button
                                onClick={() => scrollTo('#contact')}
                                className="relative overflow-hidden bg-primary text-white px-6 py-3 rounded-full text-sm font-heading font-semibold hover:bg-primary-light transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="absolute inset-0 shimmer-effect" />
                                <span className="relative z-10">Contact Us</span>
                            </motion.button>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-gray-800 py-6 sm:py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-xs sm:text-sm">
                        © {currentYear} Softmatrices. All rights reserved.
                    </p>
                    <motion.button
                        onClick={() => scrollTo('#home')}
                        className="w-10 h-10 rounded-full flex items-center justify-center transition-colors bg-gray-800 hover:bg-primary"
                        aria-label="Scroll to top"
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <ArrowUp size={18} weight="bold" className="text-gray-400" />
                    </motion.button>
                </div>
            </div>
        </footer>
    )
}

export default Footer
