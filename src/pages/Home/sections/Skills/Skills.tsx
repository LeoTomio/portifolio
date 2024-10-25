import { Col, Container, Row } from "react-bootstrap"
import CardComponent from "../../../../components/Card"
import { knowledgeEnum, TechnologyEnum } from "../../../../utils/enum"
import getIconByTechnology from "../../../../utils/IconExporter"

// Não usadas
// MYSQL
// Putty
// VSCode
// ReactBootstrap
const Skills = () => {

    return (
        <section id="habilidades" className="min-vh-100 ">
            <h2 className="title">Habilidades</h2>
            <Container>
                <Row className="m-0 mt-5">
                    <Col lg={4} xs={12} sm={12} md={6} className="d-flex justify-content-center skils-card">
                        <CardComponent
                            icon={getIconByTechnology(TechnologyEnum.Axios)}
                            title="Axio"
                            description="Cliente HTTP simples baseado em promessas para o navegador e para o node.js."
                            knowledgeLevel={knowledgeEnum.intermediario}
                            link="https://axios-http.com/"
                        />
                    </Col>
                    <Col lg={4} xs={12} sm={12} md={6} className="d-flex justify-content-center skils-card">
                        <CardComponent
                            icon={getIconByTechnology(TechnologyEnum.Bootstrap)}
                            title="Bootstrap"
                            description="Framework para desenvolvimento de componentes front-end usando HTML, CSS e JS."
                            knowledgeLevel={knowledgeEnum.avançado}
                            link="https://getbootstrap.com.br/"
                        />
                    </Col>
                    <Col lg={4} xs={12} sm={12} md={6} className="d-flex justify-content-center skils-card">
                        <CardComponent
                            icon={getIconByTechnology(TechnologyEnum.CSS)}
                            title="CSS"
                            description="Ferramenta de estilização para páginas web, é aplicado diretamente nas tags HTML."
                            knowledgeLevel={knowledgeEnum.avançado}
                            link="https://www.w3schools.com/cssref/index.php"
                        />
                    </Col>
                    <Col lg={4} xs={12} sm={12} md={6} className="d-flex justify-content-center skils-card">
                        <CardComponent
                            icon={getIconByTechnology(TechnologyEnum.Docker)}
                            title="Docker"
                            description="Plataforma para criar e distribuir aplicações encapsuladas em contêineres."
                            knowledgeLevel={knowledgeEnum.iniciante}
                            link="https://www.docker.com/"
                        />
                    </Col>
                    <Col lg={4} xs={12} sm={12} md={6} className="d-flex justify-content-center skils-card">
                        <CardComponent
                            icon={getIconByTechnology(TechnologyEnum.Express)}
                            title="Express"
                            description="Framework para Node.js que fornece recursos mínimos para construção de servidores web."
                            knowledgeLevel={knowledgeEnum.avançado}
                            link="https://expressjs.com/"
                        />
                    </Col>
                    <Col lg={4} xs={12} sm={12} md={6} className="d-flex justify-content-center skils-card">
                        <CardComponent
                            icon={getIconByTechnology(TechnologyEnum.GitHub)}
                            title="Github"
                            description="Plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git."
                            knowledgeLevel={knowledgeEnum.intermediario}
                            link="https://expressjs.com/"
                        />
                    </Col>
                    <Col lg={4} xs={12} sm={12} md={6} className="d-flex justify-content-center skils-card">
                        <CardComponent
                            icon={getIconByTechnology(TechnologyEnum.GitLab)}
                            title="Github"
                            description="Plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git."
                            knowledgeLevel={knowledgeEnum.iniciante}
                            link="https://about.gitlab.com/"
                        />
                    </Col>
                    <Col lg={4} xs={12} sm={12} md={6} className="d-flex justify-content-center skils-card">
                        <CardComponent
                            icon={getIconByTechnology(TechnologyEnum.HTML5)}
                            title="HTML5"
                            description="Linguagem de marcação utilizada na construção de páginas na Web."
                            knowledgeLevel={knowledgeEnum.avançado}
                            link="https://www.w3schools.com/html/"
                        />
                    </Col>
                    <Col lg={4} xs={12} sm={12} md={6} className="d-flex justify-content-center skils-card">
                        <CardComponent
                            icon={getIconByTechnology(TechnologyEnum.Insomnia)}
                            title="Insomnia"
                            description="Plataforma colaborativa que facilita a criação de APIs de alta qualidade."
                            knowledgeLevel={knowledgeEnum.avançado}
                            link="https://insomnia.rest/"
                        />
                    </Col>
                    <Col lg={4} xs={12} sm={12} md={6} className="d-flex justify-content-center skils-card">
                        <CardComponent
                            icon={getIconByTechnology(TechnologyEnum.JavaScript)}
                            title="Javascript"
                            description="Linguagem de programação de alto nível, interpretada e baseada em eventos."
                            knowledgeLevel={knowledgeEnum.avançado}
                            link="https://www.w3schools.com/js/"
                        />
                    </Col>
                    <Col lg={4} xs={12} sm={12} md={6} className="d-flex justify-content-center skils-card">
                        <CardComponent
                            icon={getIconByTechnology(TechnologyEnum.Knex)}
                            title="Knex.js"
                            description="Biblioteca para Node.js que facilita a criação de consultas e migrações."
                            knowledgeLevel={knowledgeEnum.avançado}
                            link="https://knexjs.org/"
                        />
                    </Col>
                    <Col lg={4} xs={12} sm={12} md={6} className="d-flex justify-content-center skils-card">
                        <CardComponent
                            icon={getIconByTechnology(TechnologyEnum.NestJS)}
                            title="Nest.js"
                            description="Framework Node.js para a construção de aplicações escaláveis e eficientes."
                            knowledgeLevel={knowledgeEnum.intermediario}
                            link="https://nestjs.com/"
                        />
                    </Col>
                    <Col lg={4} xs={12} sm={12} md={6} className="d-flex justify-content-center skils-card">
                        <CardComponent
                            icon={getIconByTechnology(TechnologyEnum.NextJS)}
                            title="Next.js"
                            description="Framework de renderização híbrida,roteamento automático e otimização de performance."
                            knowledgeLevel={knowledgeEnum.iniciante}
                            link="https://nextjs.org/"
                        />
                    </Col>
                    <Col lg={4} xs={12} sm={12} md={6} className="d-flex justify-content-center skils-card">
                        <CardComponent
                            icon={getIconByTechnology(TechnologyEnum.NodeJS)}
                            title="Node.js"
                            description="Ambiente de execução de códigos que permite executar JavaScript fora do navegador."
                            knowledgeLevel={knowledgeEnum.avançado}
                            link="https://nodejs.org/pt"
                        />
                    </Col>
                    <Col lg={4} xs={12} sm={12} md={6} className="d-flex justify-content-center skils-card">
                        <CardComponent
                            icon={getIconByTechnology(TechnologyEnum.PostgreSQL)}
                            title="PostgreSQL"
                            description="Sistema gerenciador de banco de dados objeto relacional."
                            knowledgeLevel={knowledgeEnum.intermediario}
                            link="https://www.postgresql.org/"
                        />
                    </Col>
                    <Col lg={4} xs={12} sm={12} md={6} className="d-flex justify-content-center skils-card">
                        <CardComponent
                            icon={getIconByTechnology(TechnologyEnum.Postman)}
                            title="Postman"
                            description="Plataforma de API para projetar, construir, testar e colaborar em APIs."
                            knowledgeLevel={knowledgeEnum.intermediario}
                            link="https://www.postman.com/"
                        />
                    </Col>
                    <Col lg={4} xs={12} sm={12} md={6} className="d-flex justify-content-center skils-card">
                        <CardComponent
                            icon={getIconByTechnology(TechnologyEnum.Prisma)}
                            title="Prisma.js"
                            description="ORM para Node.js e TypeScript que simplifica o acesso a bancos de dados."
                            knowledgeLevel={knowledgeEnum.avançado}
                            link="https://www.prisma.io/"
                        />
                    </Col>
                    <Col lg={4} xs={12} sm={12} md={6} className="d-flex justify-content-center skils-card">
                        <CardComponent
                            icon={getIconByTechnology(TechnologyEnum.Python)}
                            title="Python"
                            description="Linguagem de programação, orientada a objetos, funcional, com tipagem dinâmica e forte."
                            knowledgeLevel={knowledgeEnum.iniciante}
                            link="https://www.python.org/"
                        />
                    </Col>
                    <Col lg={4} xs={12} sm={12} md={6} className="d-flex justify-content-center skils-card">
                        <CardComponent
                            icon={getIconByTechnology(TechnologyEnum.React)}
                            title="React"
                            description="Biblioteca front-end JavaScript com foco em criar interfaces de usuário em páginas web."
                            knowledgeLevel={knowledgeEnum.avançado}
                            link="https://reactnative.dev/"
                        />
                    </Col>
                    <Col lg={4} xs={12} sm={12} md={6} className="d-flex justify-content-center skils-card">
                        <CardComponent
                            icon={getIconByTechnology(TechnologyEnum.React)}
                            title="React Native.js"
                            description="Framework usado para desenvolvimento mobile utilizando Javascript e React."
                            knowledgeLevel={knowledgeEnum.avançado}
                            link="https://react.dev/"
                        />
                    </Col>
                    <Col lg={4} xs={12} sm={12} md={6} className="d-flex justify-content-center skils-card">
                        <CardComponent
                            icon={getIconByTechnology(TechnologyEnum.Redis)}
                            title="Reddis"
                            description="Banco de dados em memória, distribuídor de chave-valor, cache e agente de mensagens."
                            knowledgeLevel={knowledgeEnum.iniciante}
                            link="https://redis.io/"
                        />
                    </Col>
                    <Col lg={4} xs={12} sm={12} md={6} className="d-flex justify-content-center skils-card">
                        <CardComponent
                            icon={getIconByTechnology(TechnologyEnum.Sass)}
                            title="Sass"
                            description="Linguagem de extensão CSS de nível profissional mais madura, estável e poderosa do mundo."
                            knowledgeLevel={knowledgeEnum.intermediario}
                            link="https://sass-lang.com/"
                        />
                    </Col>
                    <Col lg={4} xs={12} sm={12} md={6} className="d-flex justify-content-center skils-card">
                        <CardComponent
                            icon={getIconByTechnology(TechnologyEnum.SocketIO)}
                            title="Socket.io"
                            description="Biblioteca orientada a eventos para aplicações web em tempo real."
                            knowledgeLevel={knowledgeEnum.intermediario}
                            link="https://socket.io/"
                        />
                    </Col>
                    <Col lg={4} xs={12} sm={12} md={6} className="d-flex justify-content-center skils-card">
                        <CardComponent
                            icon={getIconByTechnology(TechnologyEnum.Swagger)}
                            title="Swagger"
                            description="Ferramentas que auxilia na criação e documentação de APIs de forma eficiente."
                            knowledgeLevel={knowledgeEnum.iniciante}
                            link="https://swagger.io/"
                        />
                    </Col>
                    <Col lg={4} xs={12} sm={12} md={6} className="d-flex justify-content-center skils-card">
                        <CardComponent
                            icon={getIconByTechnology(TechnologyEnum.Tailwind)}
                            title="Tailwind CSS"
                            description="Framework CSS voltado para utilidades."
                            knowledgeLevel={knowledgeEnum.iniciante}
                            link="https://tailwindcss.com/"
                        />
                    </Col>
                    <Col lg={4} xs={12} sm={12} md={6} className="d-flex justify-content-center skils-card">
                        <CardComponent
                            icon={getIconByTechnology(TechnologyEnum.TypeORM)}
                            title="TypeORM"
                            description="ORM para TypeScript/JavaScript utilizando modelos de objetos."
                            knowledgeLevel={knowledgeEnum.intermediario}
                            link="https://typeorm.io/"
                        />
                    </Col>
                    <Col lg={4} xs={12} sm={12} md={6} className="d-flex justify-content-center skils-card">
                        <CardComponent
                            icon={getIconByTechnology(TechnologyEnum.TypeScript)}
                            title="TypesSript"
                            description="Superconjunto JavaScript que adiciona tipagem estática."
                            knowledgeLevel={knowledgeEnum.intermediario}
                            link="https://www.typescriptlang.org/"
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default Skills
