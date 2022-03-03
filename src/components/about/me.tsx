import { motion } from "framer-motion"
import { ElementTransition } from "../animations/general"

export function Me(){
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