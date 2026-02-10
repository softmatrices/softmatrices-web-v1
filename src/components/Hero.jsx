import { motion, useScroll, useTransform, useInView, useMotionValue, useSpring, AnimatePresence } from 'framer-motion'
import { ShieldCheck, Lightning, UsersThree, Sparkle, ArrowRight } from '@phosphor-icons/react'
import { useTheme } from '../context/ThemeContext'
import { useRef, useState, useEffect } from 'react'

/* ─── Animated Counter ─── */
const AnimatedCounter = ({ value, isDark }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const [display, setDisplay] = useState('0')

    useEffect(() => {
        if (!isInView) return
        const num = parseFloat(value)
        if (isNaN(num)) { setDisplay(value); return }

        const match = value.match(/^([\d.]+)(.*)$/)
        const suffix = match ? match[2] : value.replace(/[\d.]/g, '')
        const duration = 1500
        const start = performance.now()

        const animate = (now) => {
            const progress = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setDisplay(`${(num * eased).toFixed(value.includes('.') ? 1 : 0)}${suffix}`)
            if (progress < 1) requestAnimationFrame(animate)
        }
        requestAnimationFrame(animate)
    }, [isInView, value])

    return <span ref={ref}>{display}</span>
}

/* ─── Typing Effect ─── */
const words = ['businesses', 'startups', 'enterprises', 'innovation']

const TypingWord = () => {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => setIndex((i) => (i + 1) % words.length), 3000)
        return () => clearInterval(interval)
    }, [])

    return (
        <AnimatePresence mode="wait">
            <motion.span
                key={words[index]}
                initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -20, filter: 'blur(4px)' }}
                transition={{ duration: 0.5 }}
                className="text-primary inline-block"
            >
                {words[index]}
            </motion.span>
        </AnimatePresence>
    )
}

const Hero = () => {
    const { isDark } = useTheme()
    const sectionRef = useRef(null)
    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
    const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 150])
    const parallaxOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
    const springY = useSpring(parallaxY, { stiffness: 100, damping: 30 })

    const stats = [
        { icon: ShieldCheck, value: '99.9%', label: 'Uptime' },
        { icon: Lightning, value: '24/7', label: 'Support' },
        { icon: UsersThree, value: '10+', label: 'Technologies' },
        { icon: Sparkle, value: '100%', label: 'Commitment' },
    ]

    const scrollTo = (href) => {
        const el = document.querySelector(href)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section
            ref={sectionRef}
            id="home"
            className={`min-h-screen flex items-center relative overflow-hidden transition-colors duration-300 ${isDark ? 'bg-[#0A0A0A]' : 'bg-white'}`}
        >
            {/* Animated gradient background */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] hero-gradient"
                    style={{ y: springY }}
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                />
                <div className={`absolute inset-0 ${isDark ? 'bg-[#0A0A0A]/80' : 'bg-white/80'}`} />
            </div>

            {/* Dot pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, ${isDark ? '#fff' : '#000'} 1px, transparent 0)`,
                backgroundSize: '40px 40px',
            }} />

            {/* Parallax floating orbs */}
            <motion.div
                className="absolute top-20 right-20 w-72 h-72 rounded-full blur-3xl"
                style={{
                    y: springY,
                    opacity: parallaxOpacity,
                    background: isDark
                        ? 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)'
                        : 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)',
                }}
            />
            <motion.div
                className="absolute bottom-40 left-10 w-56 h-56 rounded-full blur-3xl"
                style={{
                    y: useTransform(scrollYProgress, [0, 1], [0, -80]),
                    opacity: parallaxOpacity,
                    background: isDark
                        ? 'radial-gradient(circle, rgba(129,140,248,0.1) 0%, transparent 70%)'
                        : 'radial-gradient(circle, rgba(129,140,248,0.06) 0%, transparent 70%)',
                }}
            />

            <div className="relative section-container pt-28 sm:pt-36 pb-16 sm:pb-20 w-full">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left — Text */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className={`inline-flex items-center gap-2 border rounded-full px-4 py-2 mb-8 ${isDark ? 'border-gray-700' : 'border-gray-200'}`}
                        >
                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            <span className={`text-xs sm:text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                                Innovative IT Solutions
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className={`text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-heading font-bold leading-[1] mb-8 ${isDark ? 'text-white' : 'text-dark'}`}
                        >
                            Empowering
                            <br />
                            <TypingWord />
                            <br />
                            with tech
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className={`text-base sm:text-lg max-w-lg mb-10 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-500'}`}
                        >
                            Softmatrices delivers cutting-edge technology and expert consulting to drive your business forward.
                            Tailored solutions for efficiency, security, and growth.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex flex-wrap gap-4"
                        >
                            <motion.button
                                onClick={() => scrollTo('#contact')}
                                className={`group relative px-8 py-3.5 rounded-full font-heading font-semibold text-sm tracking-wide flex items-center gap-2 overflow-hidden transition-colors ${isDark ? 'bg-white text-dark hover:bg-gray-200' : 'bg-dark text-white hover:bg-gray-800'}`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="absolute inset-0 shimmer-effect" />
                                <span className="relative z-10 flex items-center gap-2">
                                    Get Started
                                    <ArrowRight size={16} weight="bold" className="group-hover:translate-x-0.5 transition-transform" />
                                </span>
                            </motion.button>
                            <motion.button
                                onClick={() => scrollTo('#about')}
                                className={`px-8 py-3.5 rounded-full font-heading font-semibold text-sm tracking-wide border transition-colors ${isDark ? 'border-gray-700 text-gray-300 hover:border-gray-400' : 'border-gray-300 text-dark hover:border-dark'}`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Learn More
                            </motion.button>
                        </motion.div>
                    </div>

                    {/* Right — Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="hidden lg:flex items-center justify-center"
                    >
                        <div className="relative w-full max-w-lg">
                            <img
                                src="/images/hero.png"
                                alt="Softmatrices — innovative IT solutions"
                                className="w-full h-auto"
                            />
                            <motion.div
                                className="absolute top-4 right-12 w-3 h-3 rounded-full bg-primary/30"
                                animate={{ y: [-5, 5, -5], opacity: [0.3, 1, 0.3] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            />
                            <motion.div
                                className="absolute bottom-12 left-4 w-4 h-4 rounded-full bg-primary/20"
                                animate={{ y: [5, -5, 5], opacity: [0.2, 0.8, 0.2] }}
                                transition={{ duration: 4, repeat: Infinity }}
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Stats Row */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className={`mt-20 sm:mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t pt-12 ${isDark ? 'border-gray-800' : 'border-gray-200'}`}
                >
                    {stats.map((stat) => (
                        <motion.div
                            key={stat.label}
                            className="text-center group"
                            whileHover={{ y: -4 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <stat.icon size={22} weight="duotone" className="mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
                            <div className={`text-2xl sm:text-3xl font-heading font-bold mb-1 ${isDark ? 'text-white' : 'text-dark'}`}>
                                <AnimatedCounter value={stat.value} isDark={isDark} />
                            </div>
                            <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Hero
