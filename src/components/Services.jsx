import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Cloud, Code, ShieldCheck, Brain } from '@phosphor-icons/react'
import { useTheme } from '../context/ThemeContext'

const Services = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })
    const { isDark } = useTheme()

    const services = [
        {
            icon: Cloud,
            title: 'Cloud Solutions',
            description: 'Scalable and secure cloud infrastructure management to optimize your business operations and reduce costs.',
            features: ['AWS / Azure / GCP', 'Auto-scaling', 'Disaster Recovery', 'Cost Optimization'],
        },
        {
            icon: Code,
            title: 'App Development',
            description: 'Custom application development for web and mobile platforms using cutting-edge technologies.',
            features: ['Web Applications', 'Mobile Apps', 'API Development', 'UI/UX Design'],
        },
        {
            icon: ShieldCheck,
            title: 'Security Consulting',
            description: 'Comprehensive security assessments and solutions to protect your business from cyber threats.',
            features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Incident Response'],
        },
        {
            icon: Brain,
            title: 'AI/ML Integration',
            description: 'Advanced AI and machine learning integration to automate processes and gain valuable insights.',
            features: ['Machine Learning', 'Data Analytics', 'Process Automation', 'Predictive Modeling'],
        },
    ]

    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.15 } },
    }

    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    }

    return (
        <section
            ref={ref}
            id="services"
            className={`py-24 sm:py-32 transition-colors duration-300 ${isDark ? 'bg-[#0A0A0A]' : 'bg-white'}`}
        >
            <div className="section-container">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mb-16 sm:mb-24"
                >
                    <span className="text-sm font-medium text-primary uppercase tracking-widest block mb-4">Services</span>
                    <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-[1.05] mb-6 ${isDark ? 'text-white' : 'text-dark'}`}>
                        What we
                        <br />
                        <span className={isDark ? 'text-gray-600' : 'text-gray-400'}>do best</span>
                    </h2>
                    <p className={`text-base sm:text-lg max-w-xl leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        Comprehensive IT services designed to empower your business and drive digital transformation with precision and expertise.
                    </p>
                </motion.div>

                {/* Services Grid — Staggered */}
                <motion.div
                    className="grid sm:grid-cols-2 gap-8 lg:gap-8"
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    variants={containerVariants}
                >
                    {services.map((service) => (
                        <motion.div
                            key={service.title}
                            variants={cardVariants}
                            whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300 } }}
                            className={`group rounded-3xl p-8 sm:p-10 border shadow-sm transition-all duration-300 h-full flex flex-col items-start cursor-default ${isDark
                                ? 'bg-[#141414] border-gray-800 hover:border-primary/40 hover:bg-[#1A1A2E]'
                                : 'bg-gray-50 border-gray-200 hover:bg-white hover:border-primary/20 hover:shadow-lg'
                                }`}
                        >
                            <motion.div
                                className="w-14 h-14 bg-primary/10 group-hover:bg-primary rounded-2xl flex items-center justify-center mb-8 transition-colors duration-300"
                                whileHover={{ rotate: [0, -10, 10, 0] }}
                                transition={{ duration: 0.5 }}
                            >
                                <service.icon size={26} weight="duotone" className="text-primary group-hover:text-white transition-colors duration-300" />
                            </motion.div>

                            <h3 className={`text-2xl font-heading font-bold mb-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-dark'
                                }`}>
                                {service.title}
                            </h3>

                            <p className={`mb-8 leading-relaxed text-sm sm:text-base flex-grow transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'
                                }`}>
                                {service.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {service.features.map((feature) => (
                                    <span
                                        key={feature}
                                        className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-colors duration-300 ${isDark
                                            ? 'border-gray-700 text-gray-400 group-hover:border-primary/30 group-hover:text-gray-300'
                                            : 'border-gray-300 text-gray-600 group-hover:border-primary/20 group-hover:text-dark'
                                            }`}
                                    >
                                        {feature}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Services
