import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Crosshair, UsersThree, Trophy, CheckCircle, ArrowRight } from '@phosphor-icons/react'
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

const About = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })
    const { isDark } = useTheme()

    const values = [
        {
            icon: Crosshair,
            title: 'Innovation',
            description: 'We stay at the forefront of technology, constantly exploring new solutions to deliver cutting-edge results.',
        },
        {
            icon: UsersThree,
            title: 'Collaboration',
            description: 'We work closely with our clients as partners, ensuring every solution is tailored to their unique needs.',
        },
        {
            icon: Trophy,
            title: 'Excellence',
            description: 'We maintain the highest standards in everything — from initial consultation to final delivery and ongoing support.',
        },
    ]

    const checkpoints = [
        'Certified and experienced professionals',
        'Cutting-edge technology solutions',
        '24/7 support and maintenance',
        'Proven track record of success',
    ]

    const scrollTo = (href) => {
        const el = document.querySelector(href)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

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
            id="about"
            className={`py-24 sm:py-32 transition-colors duration-300 ${isDark ? 'bg-[#111111]' : 'bg-gray-50'}`}
        >
            <div className="section-container">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mb-16 sm:mb-24"
                >
                    <span className="text-sm font-medium text-primary uppercase tracking-widest block mb-4">About Us</span>
                    <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-[1.05] ${isDark ? 'text-white' : 'text-dark'}`}>
                        We build
                        <br />
                        <span className={isDark ? 'text-gray-600' : 'text-gray-400'}>what matters</span>
                    </h2>
                </motion.div>

                {/* Two Column Content */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-24 sm:mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <p className={`text-lg sm:text-xl leading-relaxed mb-6 font-medium ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                            Softmatrices is an innovative IT solutions and consulting company dedicated to helping businesses thrive in the digital age.
                        </p>
                        <p className={`leading-relaxed mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            We combine deep industry expertise with cutting-edge technology to deliver tailored solutions that drive growth, efficiency, and security. Since our founding, we've been committed to delivering exceptional IT solutions that help businesses navigate the complexities of the digital landscape.
                        </p>

                        <div className="space-y-4 mb-10">
                            {checkpoints.map((item, i) => (
                                <motion.div
                                    key={item}
                                    className="flex items-start gap-3"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                                >
                                    <CheckCircle size={20} weight="duotone" className="text-primary flex-shrink-0 mt-0.5" />
                                    <span className={`text-sm sm:text-base ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{item}</span>
                                </motion.div>
                            ))}
                        </div>

                        <motion.button
                            onClick={() => scrollTo('#contact')}
                            className={`flex items-center gap-2 font-heading font-semibold text-lg group ${isDark ? 'text-white' : 'text-dark'}`}
                            whileHover={{ x: 5 }}
                        >
                            Get in Touch
                            <ArrowRight size={20} weight="bold" className="group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.3 }}
                    >
                        <div className={`rounded-3xl p-8 sm:p-12 border shadow-sm ${isDark ? 'bg-[#1A1A1A] border-gray-800' : 'bg-white border-gray-200'}`}>
                            <div className="grid grid-cols-2 gap-y-10 gap-x-6 mb-10">
                                {[
                                    { number: '10+', label: 'Technologies' },
                                    { number: '100%', label: 'Commitment' },
                                    { number: '99.9%', label: 'Uptime Guarantee' },
                                    { number: '24/7', label: 'Support Available' },
                                ].map((stat) => (
                                    <div key={stat.label}>
                                        <div className={`text-3xl sm:text-4xl font-heading font-bold mb-2 ${isDark ? 'text-white' : 'text-dark'}`}>
                                            <AnimatedCounter value={stat.number} isDark={isDark} />
                                        </div>
                                        <div className={`text-sm font-medium ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                            <div className={`h-px mb-8 ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`} />
                            <p className={`text-xs sm:text-sm uppercase tracking-widest font-heading font-medium ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                                Empowering Digital Transformation
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Core Values — Staggered */}
                <motion.div
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    variants={containerVariants}
                >
                    <div className="max-w-2xl mb-12">
                        <h3 className={`text-2xl sm:text-3xl font-heading font-bold ${isDark ? 'text-white' : 'text-dark'}`}>
                            Our Core Values
                        </h3>
                    </div>

                    <motion.div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6" variants={containerVariants}>
                        {values.map((value) => (
                            <motion.div
                                key={value.title}
                                variants={cardVariants}
                                whileHover={{ y: -6, transition: { type: 'spring', stiffness: 300 } }}
                                className={`rounded-2xl p-8 border shadow-sm transition-all duration-300 group h-full ${isDark ? 'bg-[#1A1A1A] border-gray-800 hover:border-primary/40' : 'bg-white border-gray-200 hover:border-primary/40'
                                    }`}
                            >
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                                    <value.icon size={24} weight="duotone" className="text-primary group-hover:text-white transition-colors duration-300" />
                                </div>
                                <h4 className={`text-lg font-heading font-bold mb-3 ${isDark ? 'text-white' : 'text-dark'}`}>
                                    {value.title}
                                </h4>
                                <p className={`leading-relaxed text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default About
