import {motion, AnimatePresence} from 'framer-motion';

const TextFade = ({children, current }: {children: React.ReactNode, current: string}) => {

    const variants = {
        fade: {opacity: [0, 1]},
        show: {opacity: 1}
    }

    return (
        <motion.div
            variants={variants}
            animate={{opacity: [0 , 1]}}
        >
            {children}
        </motion.div>
    )
};

export default TextFade;