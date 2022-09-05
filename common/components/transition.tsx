import { useRouter } from 'next/router'
import { AnimatePresence, motion } from 'framer-motion'

const variants = {
    inactive: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            ease: 'easeInOut',
        },
    },
    out: {
        opacity: 0,
        y: -40,
        transition: {
            duration: 0.5,
            ease: 'easeInOut',
        },
    },
    in: {
        y: 40,
        opacity: 0,
        transition: {
            duration: 0.5,
            ease: 'easeInOut',
        },
    },
}

const Transition = ({ children }: { children: React.ReactNode }) => {
    const { asPath } = useRouter()

    return (
        <div className="effect-2">
            <AnimatePresence initial={false} exitBeforeEnter>
                <motion.div
                    key={asPath}
                    variants={variants}
                    initial="in"
                    animate="inactive"
                    exit="out"
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

export default Transition
