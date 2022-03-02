import { motion } from "framer-motion"
import Gallery from "react-photo-gallery"
import styled from "styled-components"

export const GalleryRoute = '/fotos'

export function PhotoGallery(){
    return (
        <Gallery photos={photos} columns={columns}/>
        // <StyledPhotoGallery {...ScreenTransition}>
        //     <div>
        //         {
        //             photos.filter((pic, idx) => idx % 2 == 0).map((pic, idx) => (
        //                 <motion.img {...ElementTransition} src={pic.src} key={pic.src} tabIndex={0} className={'odd'}></motion.img>
        //             ))
        //         }
        //     </div>
        //     <div>
        //         {
        //             photos.filter((pic, idx) => idx % 2 != 0).map((pic, idx) => (
        //                 <motion.img {...ElementTransition} src={pic.src} key={pic.src} tabIndex={0}></motion.img>
        //             ))
        //         }
        //     </div>
        // </StyledPhotoGallery>
    )
}

// const StyledPhotoGallery = styled(motion.section)(props => ({
//     display: 'grid',
//     gridTemplateColumns: '1fr 1fr',

//     div: {
//         display: 'grid',
//         gridTemplateColumns: '1fr 1fr'
//     },

//     img: {
//         width: '100%',
//     },
// }))

const photos = [
    {
        src: "/assets/gallery/pic005.jpeg",
        width: 2.5,
        height: 4,
    },
    {
        src: "/assets/gallery/pic014.jpeg",
        width: 2.5,
        height: 4,
    },
    {
        src: "/assets/gallery/pic015.jpeg",
        width: 4,
        height: 5,
    },
    
    {
        src: "/assets/gallery/pic003.jpeg",
        width: 2.5,
        height: 4,
    },
    {
        src: "/assets/gallery/pic004.jpeg",
        width: 2.5,
        height: 4,
    },
    {
        src: "/assets/gallery/pic001.jpeg",
        width: 2.5,
        height: 4,
    },
    {
        src: "/assets/gallery/pic006.jpeg",
        width: 2.5,
        height: 4,
    },
    {
        src: "/assets/gallery/pic007.jpeg",
        width: 2.5,
        height: 4,
    },
    {
        src: "/assets/gallery/pic008.jpeg",
        width: 2.5,
        height: 4,
    },
    {
        src: "/assets/gallery/pic009.jpeg",
        width: 2.5,
        height: 4,
    },
    {
        src: "/assets/gallery/pic010.jpeg",
        width: 2.5,
        height: 4,
    },
    {
        src: "/assets/gallery/pic011.jpeg",
        width: 2.5,
        height: 4,
    },
    {
        src: "/assets/gallery/pic012.jpeg",
        width: 2.5,
        height: 4,
    },
    {
        src: "/assets/gallery/pic002.jpeg",
        width: 2.5,
        height: 4,
    },
    {
        src: "/assets/gallery/pic013.jpeg",
        width: 2.5,
        height: 4,
    },
    

]


function columns(containerWidth: number) {
    let columns = 1;
    if (containerWidth >= 720) columns = 2;
    if (containerWidth >= 1080) columns = 3;
    if (containerWidth >= 1360) columns = 4;
    return columns;
  }