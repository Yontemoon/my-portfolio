import {motion, AnimatePresence} from 'framer-motion';

const TextFade = ({children, current }: {children: React.ReactNode, current: string}) => {

    // const variants = {
    //     hidden: { opacity: 0 },
    //     visible: { opacity: 1 },
    // }

    // return (
    //     <AnimatePresence >
    //         <motion.div
    //             // variants={variants}
    //             key={current} 
    //             animate={{opacity: 1}}
    //             exit={{opacity: 1}}
    //             initial={{opacity: 0}}
    //             transition={{duration: 1}}
    //         >
    //             {children}
    //         </motion.div>
    //     </AnimatePresence>
    // );


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