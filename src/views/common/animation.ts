import { Variants } from "framer-motion";

export function hiddenVisibleAnim(vr: Variants){
    return {
        initial: 'hidden',
        animate: 'visible',
        variants: vr
    };
}

export const ScreenTransition = hiddenVisibleAnim({
    hidden: { x: -50, opacity: 0 },
    visible: { 
        x: 0,
        opacity: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        },
    }
})

export const ElementTransition = hiddenVisibleAnim({
    hidden: { y: -50, opacity: 0 },
    visible: { 
        y: 0,
        opacity: 1,
        transition: {
        },
    }
})