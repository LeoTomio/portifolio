export interface DictionaryType {
    workingPosition: string
    sistemTexts: Array<string>
    section: Array<Sections>
    about: About
    skills: Array<Skills>
    contact: Contact
    projects: Array<Project>
}
interface Sections {
    title: string
    href: string
}
interface About {
    firstP: string
    secondP: string
    itens: Array<string>
}
interface Skills {
    icon: string
    title: string
    description: string
    knowledgeLevel: string
    link: string
}
interface Contact {
    description: string
    links: Array<Links>
    curriculumText: string
    curriculumButton: string

}
interface Links {
    icon: string
    title: string
    text: string
    link: string
}
export interface Project {
    id: number
    title: string;
    image: string;
    technologies: Array<TechnologyInterface>
    shortDescription: string;
    detailed?: DetailedProject

}
interface TechnologyInterface {
    name: string
    icon: string
}

export interface DetailedProject {
    mainDescription: string
    description: Array<DetailedProjectDescription>
    github: Array<GithubProject>;
}

interface DetailedProjectDescription {
    paragraph: string
    image: string
}

interface GithubProject {
    link: string;
    isPrivate: boolean;
    buttonName: string;
    main?: boolean
}
