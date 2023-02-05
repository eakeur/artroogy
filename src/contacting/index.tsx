import { Main } from "./style"


type ContactingProps = {
    contacts: {
        type: string
        description: string,
        value: string
    }[],

    agency: {
        name: string,
        agents: {
            name: string,
            email: string,
            phone: string
        }[]
    }

    social: {
        link: string,
        className: string,
        path: string,
        text: string
    }[]
}



export function Contacting({ contacts, agency, social }: ContactingProps) {
    return (
        <Main>
            <img src="/assets/011-removebg.png" alt=""></img>
            <section>
                <section>
                    <h4>Contatos</h4>
                    <ul>
                        {
                            contacts.map(({ description, value, type }, i) => (
                                <li key={i} className="contact">
                                    <a href={`${type}:${value}`}>{value}</a>
                                    <span>{description}</span>
                                </li>
                            ))
                        }
                    </ul>
                </section>

                <section>
                    <h4>Agência</h4>
                    <ul>
                        <h5>{agency.name}</h5>
                        {
                            agency.agents.map(({ name, phone, email }, i) => (
                                <li key={i} className="agent">
                                    <span>{name}</span>
                                    <a href={`tel:${phone}`} className="tel">{phone}</a>
                                    <a href={`mailto:${email}`} className="mail">{email}</a>
                                </li>
                            ))
                        }
                    </ul>
                </section>

                <section>
                    <h4>Redes sociais</h4>
                    <nav>
                        {
                            social.map(({ className, link, path, text }, i) => (
                                <a key={i} rel="noreferrer" target="_blank" href={link} title={text}>
                                    {
                                        path === "elenco"
                                        ? 
                                        <ElencoDigitalIcon/>
                                        :
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" className={className} viewBox="0 0 16 16">
                                            <path d={path} />
                                        </svg>
                                    }
                                </a>
                            ))
                        }
                    </nav>
                </section>
            </section>

        </Main>
    )
}

export function ElencoDigitalIcon() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" viewBox="0 0 33 33">

        <path d="M15.2705213,0.0201220781 C8.43016718,0.398477721 3,6.06509711 3,13 C3,20.1797017 8.82029825,26 16,26 C22.9349029,26 28.6015223,20.5698328 28.9798779,13.7294787 C28.9932369,13.984628 29,14.2415242 29,14.5 C29,22.5081289 22.5081289,29 14.5,29 C6.49187113,29 0,22.5081289 0,14.5 C0,6.49187113 6.49187113,0 14.5,0 C14.7584758,0 15.015372,0.00676312824 15.2705213,0.0201220781 Z" id="Combined-Shape" />
                <path d="M18,24 C12.4771525,24 8,19.5228475 8,14 C8,8.4771525 12.4771525,4 18,4 C23.5228475,4 28,8.4771525 28,14 C28,19.5228475 23.5228475,24 18,24 Z M20.5,14 C22.9852814,14 25,11.9852814 25,9.5 C25,7.01471863 22.9852814,5 20.5,5 C18.0147186,5 16,7.01471863 16,9.5 C16,11.9852814 18.0147186,14 20.5,14 Z" id="Combined-Shape" />
    </svg>
}