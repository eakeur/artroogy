import styled from "styled-components";

export function History(){
    return (
        <section title="Mais sobre mim">
            <section>
                <h4>Formação</h4>
                <StyledHistory>
                    <li>
                        Técnico em arte dramática 
                        <span>Senac | Val Bellei</span>
                    </li>
                    <li>
                        Dublagem 
                        <span>Senac | Figueira Junior</span>
                    </li>
                    <li>
                        Produção cultural 
                        <span>Desenvolvimento Artístico</span>
                    </li>
                    <li>
                        O ator e o método
                        <span>Estúdio Straus | Mell Mariah</span>
                    </li>
                </StyledHistory>
            </section>
            <section>
                <h4>Teatro</h4>
                <StyledHistory>
                    <li>
                        A Comédia do Trabalho 
                        <span>TT40 | 2019 - Wallie Ruy</span>
                        <span className="detail">Personagem - Leonid</span>
                    </li>
                    <li>
                        A Falecida  
                        <span>TT40 | 2018 - Val Bellei</span>
                        <span className="detail">Personagem - Tunico</span>
                    </li>
                </StyledHistory>
            </section>
            <section>
                <h4>Filmes</h4>
                <StyledHistory>
                    <li>
                        Fôlego 
                        <span>Produtora Art Mind | 2019</span>
                        <span className="detail">Protagonista: Ygor Rodrigues</span>
                        <span className="detail">Direção: Walnei Oliveira</span>
                        <span className="detail">Assista <a href="https://youtu.be/cjso_RSFl60">aqui</a></span>
                    </li>
                    <li>
                        Fardo 
                        <span>Produtora Advenus | 2019</span>
                        <span className="detail">Protagonista: Ygor Rodrigues</span>
                        <span className="detail">Direção: Caique Pereira</span>
                        <span className="detail">Assista <a href="https://youtu.be/KZnFdU-Ky-c">aqui</a></span>
                    </li>
                </StyledHistory>
            </section>
        </section>
    )
}


const StyledHistory = styled.ul(props => ({
    color: 'var(--golden)',
    paddingLeft: 0,
    listStyleType: 'none',
    marginBlockEnd: 40,

    'li': {
        marginBlockEnd: 10,
    },

    'span': {
        display: 'block',
        color: 'white'
    },

    'small': {
        fontSize: 12.5,
    },
}))