import Gallery from "react-photo-gallery"
import styled from "styled-components"

export const GalleryRoute = 'fotos'

export function PhotoGallery(){
    return (
        <Gallery photos={photos}/>
    )
}

const photos = [
    {
        src: "/assets/eilish.jpeg",
        width: 0,
        height: 0,
    }
]


const StyledSection = styled.section(() => ({

}))