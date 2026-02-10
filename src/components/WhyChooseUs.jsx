import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { ShieldCheck, Clock, Trophy, UsersThree, Star, Lightning } from '@phosphor-icons/react'
import { useTheme } from '../context/ThemeContext'

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

const WhyChooseUs = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })
    const { isDark } = useTheme()

    const stats = [
        { number: '100%', label: 'Client Satisfaction', icon: Star },
        { number: '24/7', label: 'Support Available', icon: Clock },
        { number: '99.9%', label: 'Uptime Guarantee', icon: ShieldCheck },
        { number: '<24h', label: 'Response Time', icon: Lightning },
    ]

    const advantages = [
        {
            icon: ShieldCheck,
            title: 'Expert Team',
            description: 'Certified professionals with years of industry experience and cutting-edge technical expertise.',
        },
        {
            icon: Clock,
            title: 'Fast Delivery',
            description: 'Our agile approach ensures rapid delivery without compromising quality.',
        },
        {
            icon: Trophy,
            title: 'Quality Assurance',
            description: 'Highest standards through rigorous testing, code reviews, and industry best practices.',
        },
        {
            icon: UsersThree,
            title: '24/7 Support',
            description: 'Dedicated support team available around the clock for smooth operations.',
        },
    ]

    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.12 } },
    }

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    }

    return (
        <section
            ref={ref}
            id="why-us"
            className={`py-24 sm:py-32 transition-colors duration-300 ${isDark ? 'bg-[#111111]' : 'bg-gray-50'}`}
        >
            <div className="section-container">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mb-16 sm:mb-24"
                >
                    <span className="text-sm font-medium text-primary uppercase tracking-widest block mb-4">Why Choose Us</span>
                    <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-[1.05] mb-6 ${isDark ? 'text-white' : 'text-dark'}`}>
                        The softmatrices
                        <br />
                        <span className={isDark ? 'text-gray-600' : 'text-gray-400'}>difference</span>
                    </h2>
                    <p className={`text-base sm:text-lg max-w-xl leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        We're committed to delivering exceptional IT solutions that drive your business forward with measurable results.
                    </p>
                </motion.div>

                {/* Stats Bar */}
                <motion.div
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    variants={containerVariants}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16"
                >
                    {stats.map((stat) => (
                        <motion.div
                            key={stat.label}
                            variants={cardVariants}
                            whileHover={{ y: -6, transition: { type: 'spring', stiffness: 300 } }}
                            className={`rounded-2xl p-6 sm:p-8 border shadow-sm text-center transition-all duration-300 ${isDark ? 'bg-[#1A1A1A] border-gray-800 hover:border-primary/30' : 'bg-white border-gray-200 hover:border-primary/30'
                                }`}
                        >
                            <stat.icon size={24} weight="duotone" className="mx-auto mb-4 text-primary" />
                            <div className={`text-2xl sm:text-3xl font-heading font-bold mb-2 ${isDark ? 'text-white' : 'text-dark'}`}>
                                <AnimatedCounter value={stat.number} isDark={isDark} />
                            </div>
                            <div className={`text-xs sm:text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Advantages — Staggered */}
                <motion.div
                    className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    variants={containerVariants}
                >
                    {advantages.map((adv) => (
                        <motion.div
                            key={adv.title}
                            variants={cardVariants}
                            whileHover={{ y: -6, transition: { type: 'spring', stiffness: 300 } }}
                            className={`rounded-2xl p-8 border shadow-sm transition-all duration-300 group h-full ${isDark
                                ? 'bg-[#1A1A1A] border-gray-800 hover:border-primary/40'
                                : 'bg-white border-gray-200 hover:border-primary/40 hover:shadow-md'
                                }`}
                        >
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                                <adv.icon size={24} weight="duotone" className="text-primary group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className={`text-lg font-heading font-bold mb-3 ${isDark ? 'text-white' : 'text-dark'}`}>
                                {adv.title}
                            </h3>
                            <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                {adv.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default WhyChooseUs
