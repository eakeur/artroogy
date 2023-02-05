import { Main, ImageLink } from "./style"

type HomeProps = {
    pages:{
        description:string,
        image:string,
        href:string,
        color:string,
    }[]
}

export function Home({pages}:HomeProps) {
    return (
        <Main title="Nesta seção, selecione uma das páginas para navegar pelo mundo do Ygor">
            {
                pages.map((lnk, i) => (
                    <ImageLink key={i} to={lnk.href} color={lnk.color}>
                        <span>{lnk.description}</span>
                        <img src={lnk.image} alt=""/>
                    </ImageLink>
                ))
            }
        </Main>
    )
}