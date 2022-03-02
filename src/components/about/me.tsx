import { motion } from "framer-motion"
import { ElementTransition } from "../animations/general"

export function Me(){
    return (
        <section title="A pessoa Ygor">
            <motion.h1 {...ElementTransition} >Quem soul <motion.span {...ElementTransition} className="animal-print">eu</motion.span></motion.h1>
            <p>
                Natural de Santo André e atualmente com 23 anos, Ygor é uma pessoa curiosa, alto astral, carismática e gosta de fazer arte. Ygor é uma pessoa curiosa, alto astral, carismática e gosta de fazer arte, Ygor é uma pessoa curiosa, alto astral, carismática e gosta de fazer arte. Ygor é uma pessoa curiosa, alto astral, carismática e gosta de fazer arte.
            </p>
            <p>
                Natural de Santo André e atualmente com 23 anos, Ygor é uma pessoa curiosa, alto astral, carismática e gosta de fazer arte. Ygor é uma pessoa curiosa, alto astral, carismática e gosta de fazer arte, Ygor é uma pessoa curiosa, alto astral, carismática e gosta de fazer arte. Ygor é uma pessoa curiosa, alto astral, carismática e gosta de fazer arte.
            </p>
        </section>
    )
}