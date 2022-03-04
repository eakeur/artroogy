import { motion } from "framer-motion";
import styled from "styled-components";
import { ElementTransition } from "../common/animation";
import { Habilities, HabilityListItem } from "../components/about/habilities";
import { History, HistoryListItem } from "../components/about/history";

export const MeRoute = '/eu'
export function Me(){
    return (
        <MeSection>
            <ArticleSection/>
            <FeaturingImage 
                {...ElementTransition} 
                src="/assets/handeye.jpeg" 
                alt="Eu, com um olhar profundo enquanto toco meu rosto com minhas mãos"
            />
            <HistorySection/>
            <HabilitiesSection/>
        </MeSection>
    )
}

function ArticleSection(){
    return (
        <section title="A pessoa Ygor">
            <motion.h1 {...ElementTransition} >Quem soul <motion.span {...ElementTransition} className="animal-print">eu</motion.span></motion.h1>
            <p>
                Natural de Santo André e atualmente com 23 anos, Ygor é uma pessoa curiosa, alto astral, carismática e gosta de fazer arte. Jogador de xadrez desde os 9 anos, ganhou campeonatos importantes nos jogos estudantis como estadual em grupos e foi vice na categoria individual. Já no vôlei, atuou em equipes importantes da federação paulista, se consagrando campeão em 2016 com o COTP.
            </p>
            <p>
                O teatro sempre foi a sua paixão. Atuou pela primeira vez em uma peça de cunho religioso a pedido de uma tia, depois disso a paixão só cresceu. Com a intensa rotina de atleta e estudante do ensino médio, não praticou aulas de teatro, então prestou-se a escrever. A sua inspiração foi a sua amiga, também atriz, chamada Lídia Oliveira. Após isso, deslanchou a escrever poesias e músicas. Os temas, em sua maioria, são causas sociais. Periférico e preto, dá pra se imaginar os horrores que se via na favela do 7, onde ficava o antigo lar do nosso ator.
            </p>
            <p>
                No ano de 2017, iniciou os estudos no curso de teatro, no Senac Lapa Scipião. Junto com a turma, produziu dois espetáculos e se aprofundou em dublagem. Em 2018 iniciou seus estudos em música, com a viola clássica. Escreveu dois livros teatrais no mesmo ano de sua formação, e em 2019, estreou em dois curta-metragens e se formou produtor cultural. A pandemia veio no ano seguinte, e ele priorizou a saúde e sua família. 
            </p>
            <p>
                Agonia, tristeza e sem perspectiva alguma de retorno das atividades culturais, a vacina veio e o tambor da alegria foi batido inúmeras vezes. Neste meio tempo, a imaginação e vontade de escrever não pararam. Tanto é, que neste ano de 2022, o gatinho continuou em seu terceiro livro teatral e o roteiro de um filme, não parando por aí. Está em produção com o grupo CPA, no espetáculo TOC-TOC de Laurent Baffie, com estreia prevista para 04 de junho de 2022. 
            </p>
        </section>
    )
}

function HistorySection(){
    return (
        <section title="Mais sobre mim">
            <History title="Formação">
                <HistoryListItem name="Técnico em arte dramática" description="Senac | Val Bellei"/>
                <HistoryListItem name="Dublagem" description="Senac | Figueira Junior"/>
                <HistoryListItem name="Produção cultural" description="Desenvolvimento Artístico"/>
                <HistoryListItem name="O ator e o método" description="Estúdio Straus | Mell Mariah"/>
            </History>
            <History title="Teatro">
                <HistoryListItem name="A Comédia do Trabalho" description="TT40 | 2019 | Wallie Ruy" detail={['Personagem - Leonid']}/>
                <HistoryListItem name="A Falecida" description="TT40 | 2018 | Val Bellei" detail={['Personagem - Tunico']}/>
            </History>
            <History title="Filmes">
                <HistoryListItem name="Fôlego" description="Produtora Art Mind | 2019" 
                    detail={[
                        'Protagonista: Ygor Rodrigues', 'Direção: Walnei Oliveira', 
                        //'Assista <a href="https://youtu.be/cjso_RSFl60">ao filme</a>',
                    ]}
                />
                <HistoryListItem name="Fardo" description="Produtora Advenus | 2019" 
                    detail={[
                        'Protagonista: Ygor Rodrigues', 'Direção: Caique Pereira', 
                        //'Assista <a href="https://youtu.be/KZnFdU-Ky-c">ao filme</a>',
                    ]}
                />
            </History>
        </section>
    )
}

function HabilitiesSection(){
    return (
        <Habilities title="Habilidades">
            <HabilityListItem>Cantar</HabilityListItem>
            <HabilityListItem>Dublar</HabilityListItem>
            <HabilityListItem>Escritor</HabilityListItem>
            <HabilityListItem>Poeta</HabilityListItem>
            <HabilityListItem>Roteirista</HabilityListItem>
            <HabilityListItem>Voleibol | Avançado</HabilityListItem>
            <HabilityListItem>Instrumentista | Viola de arco</HabilityListItem>
            <HabilityListItem>Muay Thai | Aprendiz</HabilityListItem>
        </Habilities>
    )
}

const FeaturingImage = styled(motion.img)((props) => ({
    display: 'block',
    objectFit: 'cover',
    width: '100%',
    maxHeight: 775,
    transition: '1s',
    objectPosition: '50% 50%', 
    '@media (max-width: 1080px)': {
        order: 1,
        objectFit: 'cover',
        height: 350,
    },
    '@media (max-width: 580px)': {
        height: 200,
    },
}))


const MeSection = styled(motion.section)((props) => ({
    marginInline: '5vw', 
    display: 'grid',
    minHeight: '95vh',
    marginBlockStart: 100,
    gridTemplateColumns: '1.3fr 1.7fr 1fr',
    gridTemplateRows: 'fit-content',
    textAlign: 'justify',
    columnGap: '3%',

    '@media (min-width: 1080px)': {
        'section:nth-child(4)': {
            gridColumnStart: '1',
            gridColumnEnd: '4',
            gridRowStart: '2',
        }
    },

    '@media (max-width: 1080px)': {
        gridTemplateColumns: '100%',
        'section': {
            order: 2,
        }
    },

    '@media (max-width: 580px)': {
        img: {
            height: 200,
        },
    },
}));