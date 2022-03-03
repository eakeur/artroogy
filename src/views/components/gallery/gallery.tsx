import { motion } from "framer-motion"
import Gallery, { PhotoProps } from "react-photo-gallery"
import styled from "styled-components"
import { GetResponsiveColsNumber } from "../../common/rendering"
import { ScreenTransition } from "../../common/animation"

export const GalleryRoute = '/galeria'

export function PhotoGallery(){
    return (
        <StyledGallery id="gallery" {...ScreenTransition}>
            <Gallery photos={photos} columns={GetResponsiveColsNumber} direction="column" />
        </StyledGallery>
        

    )
}

const StyledGallery = styled(motion.section)(props => ({
    paddingBlockStart: 60,
    paddingInline: 60,

    'img': {
        objectPosition: '40% 50%',
        objectFit: 'none',
        transition: '1s'
    },

    '@media (max-width: 720px)': {
        'img': {
            objectPosition: '50% 50%',
            objectFit: 'fill',
        }
    },

    'img:hover': {
        objectPosition: '50% 50%',
        objectFit: 'fill',
    }

}))
const photos: PhotoProps[] = [
    {
        src: "/assets/gallery/blue_kiss.jpeg",
        width: 2.5,
        height: 4,
    },
    {
        src: "/assets/gallery/flipflop_hand.jpeg",
        width: 12.5,
        height: 18,
    },
    {
        src: "/assets/gallery/marvelous_close.jpeg",
        width: 2.5,
        height: 4,
    },
    
    {
        src: "/assets/gallery/marvelous_scream.jpeg",
        width: 2.5,
        height: 4,
    },
    {
        src: "/assets/gallery/coloured_posing.jpeg",
        width: 2.5,
        height: 4,
    },
    {
        src: "/assets/gallery/coloured_serious.jpeg",
        width: 2.5,
        height: 4,
    },
    {
        src: "/assets/gallery/coloured_smiling.jpeg",
        width: 2.5,
        height: 4,
    },
    {
        src: "/assets/gallery/coloured_back.jpeg",
        width: 2.5,
        height: 4,
    },
    {
        src: "/assets/gallery/flipflop_tongue.jpeg",
        width: 2.5,
        height: 4,
    },
    {
        src: "/assets/gallery/flipflop_ear.jpeg",
        width: 2.5,
        height: 4,
    },
    {
        src: "/assets/gallery/flipflop_neck.jpeg",
        width: 2.5,
        height: 4,
    },
    {
        src: "/assets/gallery/flipflop_plain.jpeg",
        width: 2.5,
        height: 4,
    },
    {
        src: "/assets/gallery/blue_close.jpeg",
        width: 2.5,
        height: 4,
    },
    {
        src: "/assets/gallery/blue_arms.jpeg",
        width: 2.5,
        height: 4,
    },
    {
        src: "/assets/gallery/blue_hihi.jpeg",
        width: 2.5,
        height: 4,
    },
    {
        src: "/assets/gallery/blue_feet.jpeg",
        width: 2.5,
        height: 4,
    },
    {
        src: "/assets/gallery/marvelous_cross.jpeg",
        width: 2.5,
        height: 4,
    },
    {
        src: "/assets/gallery/marvelous_profile.jpeg",
        width: 2.5,
        height: 4,
    },
    {
        src: "/assets/gallery/coloured_thinking.jpeg",
        width: 2.5,
        height: 4,
    },
    {
        src: "/assets/gallery/marvelous_collar.jpeg",
        width: 2.5,
        height: 4,
    },
    {
        src: "/assets/gallery/tiger_sat.jpeg",
        width: 2.5,
        height: 4,
    },
    
    {
        src: "/assets/gallery/flipflop_smiling.jpeg",
        width: 2.5,
        height: 4,
    },
    {
        src: "/assets/gallery/marvelous_sat.jpeg",
        width: 2.5,
        height: 4,
    },
    
    {
        src: "/assets/gallery/tiger_run.jpeg",
        width: 2.5,
        height: 4,
    },
    {
        src: "/assets/gallery/tiger_smile.jpeg",
        width: 2.5,
        height: 4,
    },
    {
        src: "/assets/gallery/tiger_scare.jpeg",
        width: 2.5,
        height: 4,
    },
    {
        src: "/assets/gallery/blue_smile.jpeg",
        width: 2.5,
        height: 4,
    },
    {
        src: "/assets/gallery/marvelous_pose.jpeg",
        width: 2.5,
        height: 4,
    },
    

]