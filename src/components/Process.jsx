import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MagnifyingGlass, Lightbulb, Code, Rocket } from '@phosphor-icons/react'
import { useTheme } from '../context/ThemeContext'

const Process = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })
    const { isDark } = useTheme()

    const steps = [
        {
            icon: MagnifyingGlass,
            step: '01',
            title: 'Discovery',
            description: 'Understanding your business needs, challenges, and goals through comprehensive analysis.',
        },
        {
            icon: Lightbulb,
            step: '02',
            title: 'Strategy',
            description: 'Developing a customized strategy aligned with your business objectives and technical requirements.',
        },
        {
            icon: Code,
            step: '03',
            title: 'Development',
            description: 'Implementing solutions using best practices, agile methodologies, and continuous QA.',
        },
        {
            icon: Rocket,
            step: '04',
            title: 'Launch',
            description: 'Ensuring smooth deployment and providing ongoing support to maximize your IT investment.',
        },
    ]

    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.2 } },
    }

    const stepVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    }

    return (
        <section
            ref={ref}
            id="process"
            className={`py-24 sm:py-32 transition-colors duration-300 ${isDark ? 'bg-[#141414]' : 'bg-dark'} text-white`}
        >
            <div className="section-container">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mb-20 sm:mb-24"
                >
                    <span className="text-sm font-medium text-primary uppercase tracking-widest block mb-4">Process</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-[1.05] mb-6">
                        How we
                        <br />
                        <span className="text-gray-500">work</span>
                    </h2>
                    <p className="text-base sm:text-lg max-w-xl text-gray-400 leading-relaxed">
                        A structured, agile approach ensures we deliver high-quality solutions on time and within budget.
                    </p>
                </motion.div>

                {/* Steps — Staggered */}
                <motion.div
                    className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12"
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    variants={containerVariants}
                >
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            variants={stepVariants}
                            className="relative group block"
                        >
                            {/* Connector line */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-[28px] left-[calc(100%-20px)] w-[40px] h-px bg-gray-700 z-0 animate-line-pulse" />
                            )}

                            <div className="flex items-center gap-4 mb-6">
                                <motion.div
                                    className="text-4xl sm:text-5xl font-heading font-bold text-gray-700 group-hover:text-primary transition-colors duration-300"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    {step.step}
                                </motion.div>
                                <div className="w-px h-12 bg-gray-800" />
                                <motion.div
                                    className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300"
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <step.icon size={20} weight="duotone" />
                                </motion.div>
                            </div>

                            <h3 className="text-xl font-heading font-bold mb-3 text-white group-hover:text-primary transition-colors duration-300">
                                {step.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-300 transition-colors duration-300">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Process
