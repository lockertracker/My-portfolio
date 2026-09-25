// =========================
// MENU MOBILE
// =========================

const menuButton = document.getElementById("menuButton");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");
    menuButton.setAttribute("aria-expanded", isOpen);
});


// =========================
// FECHAR MENU AO CLICAR
// =========================

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuButton.setAttribute("aria-expanded", "false");
    });

});


// =========================
// ANO AUTOMÁTICO
// =========================

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();


// =========================
// IDIOMA PT / EN
// =========================

const ptBtn = document.getElementById("ptBtn");
const enBtn = document.getElementById("enBtn");


const translations = {

    // =================================
    // PORTUGUÊS
    // =================================

    pt: {

        title: "Emy | Desenvolvedora",

        nav: [
            "Sobre",
            "Habilidades",
            "Projetos",
            "Workshop",
            "Contato"
        ],


        hero: {

            subtitle: "DESENVOLVIMENTO DE SISTEMAS",

            title: "Olá, eu sou a Emy.",

            heading: "Desenvolvedora em formação.",

            description:
                "Estudante de Desenvolvimento de Sistemas apaixonada por tecnologia, programação e criação de soluções.",

            projectButton:
                "Ver projetos →",

            contactButton:
                "Entre em contato"
        },


        about: {

            title:
                "Sobre mim",

            paragraphs: [

                "Olá! Eu sou a Emily, estudante de Desenvolvimento de Sistemas e apaixonada por tecnologia, programação e criação de soluções. Atualmente, estou construindo minha trajetória na área de desenvolvimento através de estudos, projetos acadêmicos e projetos pessoais.",

                "Gosto de transformar ideias em aplicações funcionais e, principalmente, de entender como as coisas funcionam por trás daquilo que estou construindo. Tenho interesse especial pelo desenvolvimento web e venho aprimorando meus conhecimentos em HTML, CSS, JavaScript, Python, Git e bancos de dados.",

                "Um dos projetos que estou desenvolvendo é um sistema web de gerenciamento de almoxarifado, criado como parte do meu TCC. Através dele, tenho colocado em prática conceitos de desenvolvimento de sistemas, organização de dados e criação de interfaces.",

                "Ainda estou no início da minha jornada profissional, mas estou constantemente aprendendo, experimentando novas tecnologias e desenvolvendo projetos para transformar conhecimento em experiência prática."

            ]

        },


        skills: {

            title:
                "Habilidades",

            descriptions: [

                "Criação de estruturas semânticas, organização de conteúdo e desenvolvimento de páginas bem estruturadas e acessíveis.",

                "Desenvolvimento de interfaces responsivas, estilização de componentes, layouts e criação de experiências visuais.",

                "Desenvolvimento de funcionalidades interativas, manipulação do DOM, eventos e implementação de lógica para aplicações web.",

                "Desenvolvimento de aplicações utilizando lógica de programação, manipulação de dados e criação de soluções para diferentes problemas.",

                "Controle de versões, organização de projetos, gerenciamento de repositórios e acompanhamento do desenvolvimento através do Git.",

                "Organização, armazenamento e gerenciamento de informações, trabalhando com conceitos fundamentais de bancos de dados.",

                "Criação de aplicações web combinando estrutura, estilo e programação para transformar ideias em sistemas funcionais.",

                "Desenvolvimento de interfaces adaptáveis para diferentes tamanhos de tela, incluindo computadores, tablets e celulares.",

                "Atualmente ampliando meus conhecimentos em desenvolvimento de sistemas, boas práticas de programação e novas tecnologias."

            ]

        },


        projects: {

            title:
                "Projetos",

            firstType:
                "TCC • SISTEMA WEB",

            firstTitle:
                "Sistema de Almoxarifado",

            firstDescription:
                "Sistema web desenvolvido para gerenciamento de produtos, estoque e movimentações de um almoxarifado.",

            secondType:
                "PROJETO PESSOAL",

            secondTitle:
                "Medidor de CPU e RAM",

            secondDescription:
                "Aplicação web desenvolvida para monitorar e visualizar informações de utilização de CPU e memória RAM em tempo real.",

            view:
                "Ver projeto →"

        },


        contact: {

            title:
                "Vamos criar algo?",

            description:
                "Estou sempre buscando aprender, desenvolver projetos e conhecer novas oportunidades.",

            button:
                "Entrar em contato"

        },


        footer: {

            developed:
                "Desenvolvido por Emy.",

            rights:
                "© 2026 Emy. Todos os direitos reservados."

        }

    },


    // =================================
    // ENGLISH
    // =================================

    en: {

        title:
            "Emy | Developer",


        nav: [

            "About",
            "Skills",
            "Projects",
            "Workshop",
            "Contact"

        ],


        hero: {

            subtitle:
                "SYSTEMS DEVELOPMENT",

            title:
                "Hello, I'm Emy.",

            heading:
                "Developer in training.",

            description:
                "Systems Development student passionate about technology, programming and creating solutions.",

            projectButton:
                "View projects →",

            contactButton:
                "Get in touch"

        },


        about: {

            title:
                "About me",

            paragraphs: [

                "Hello! I'm Emily, a Systems Development student passionate about technology, programming and creating solutions. I'm currently building my path in development through studies, academic projects and personal projects.",

                "I enjoy turning ideas into functional applications and, above all, understanding how things work behind what I'm building. I'm especially interested in web development and have been improving my knowledge of HTML, CSS, JavaScript, Python, Git and databases.",

                "One of the projects I'm developing is a web-based inventory management system created as part of my final project. Through it, I've been putting systems development, data organization and interface design concepts into practice.",

                "I'm still at the beginning of my professional journey, but I'm constantly learning, experimenting with new technologies and developing projects to turn knowledge into practical experience."

            ]

        },


        skills: {

            title:
                "Skills",

            descriptions: [

                "Creating semantic structures, organizing content and developing well-structured and accessible pages.",

                "Developing responsive interfaces, styling components and layouts, and creating visual experiences.",

                "Developing interactive features, DOM manipulation, events and logic for web applications.",

                "Developing applications using programming logic, data manipulation and solutions for different problems.",

                "Version control, project organization, repository management and development tracking using Git.",

                "Organizing, storing and managing information while working with fundamental database concepts.",

                "Creating web applications by combining structure, styling and programming to turn ideas into functional systems.",

                "Developing adaptable interfaces for different screen sizes, including computers, tablets and mobile devices.",

                "Currently expanding my knowledge of systems development, programming best practices and new technologies."

            ]

        },


        projects: {

            title:
                "Projects",

            firstType:
                "FINAL PROJECT • WEB SYSTEM",

            firstTitle:
                "Inventory Management System",

            firstDescription:
                "Web system developed to manage products, inventory and stock movements.",

            secondType:
                "PERSONAL PROJECT",

            secondTitle:
                "CPU & RAM Monitor",

            secondDescription:
                "Web application developed to monitor and visualize CPU and RAM usage information in real time.",

            view:
                "View project →"

        },


        contact: {

            title:
                "Let's create something?",

            description:
                "I'm always looking to learn, develop projects and discover new opportunities.",

            button:
                "Get in touch"

        },


        footer: {

            developed:
                "Developed by Emy.",

            rights:
                "© 2026 Emy. All rights reserved."

        }

    }

};


// =========================
// TROCAR IDIOMA
// =========================

function setLanguage(language) {

    const t = translations[language];


    // =========================
    // NAVBAR
    // =========================

    const navItems =
        document.querySelectorAll(".nav-links a");

    navItems.forEach((item, index) => {

        item.textContent =
            t.nav[index];

    });


    // =========================
    // HERO
    // =========================

    document.querySelector(
        ".hero-subtitle"
    ).textContent =
        t.hero.subtitle;


    document.querySelector(
        ".hero h1"
    ).innerHTML =
        t.hero.title.replace(
            "Emy.",
            "<span>Emy.</span>"
        );


    document.querySelector(
        ".hero h2"
    ).textContent =
        t.hero.heading;


    document.querySelector(
        ".hero-description"
    ).textContent =
        t.hero.description;


    const heroButtons =
        document.querySelectorAll(
            ".hero-buttons a"
        );


    heroButtons[0].textContent =
        t.hero.projectButton;


    heroButtons[1].textContent =
        t.hero.contactButton;



    // =========================
    // SOBRE
    // =========================

    document.querySelector(
        "#sobre .section-title h2"
    ).textContent =
        t.about.title;


    const aboutParagraphs =
        document.querySelectorAll(
            "#sobre .about-content p"
        );


    t.about.paragraphs.forEach(
        (text, index) => {

            if (aboutParagraphs[index]) {

                aboutParagraphs[index].textContent =
                    text;

            }

        }
    );



    // =========================
    // HABILIDADES
    // =========================

    document.querySelector(
        "#habilidades .section-title h2"
    ).textContent =
        t.skills.title;


    const skillDescriptions =
        document.querySelectorAll(
            ".skill p"
        );


    t.skills.descriptions.forEach(
        (text, index) => {

            if (skillDescriptions[index]) {

                skillDescriptions[index].textContent =
                    text;

            }

        }
    );



    // =========================
    // PROJETOS
    // =========================

    document.querySelector(
        "#projetos .section-title h2"
    ).textContent =
        t.projects.title;


    const projectCards =
        document.querySelectorAll(
            ".project-card"
        );


    // PROJETO 01

    if (projectCards[0]) {

        projectCards[0]
            .querySelector(".project-type")
            .textContent =
            t.projects.firstType;


        projectCards[0]
            .querySelector("h3")
            .textContent =
            t.projects.firstTitle;


        projectCards[0]
            .querySelector(
                ".project-content > p:not(.project-type)"
            )
            .textContent =
            t.projects.firstDescription;


        projectCards[0]
            .querySelector(".project-link")
            .textContent =
            t.projects.view;

    }


    // PROJETO 02

    if (projectCards[1]) {

        projectCards[1]
            .querySelector(".project-type")
            .textContent =
            t.projects.secondType;


        projectCards[1]
            .querySelector("h3")
            .textContent =
            t.projects.secondTitle;


        projectCards[1]
            .querySelector(
                ".project-content > p:not(.project-type)"
            )
            .textContent =
            t.projects.secondDescription;


        projectCards[1]
            .querySelector(".project-link")
            .textContent =
            t.projects.view;

    }



    // =========================
    // CONTATO
    // =========================

    document.querySelector(
        "#contato h2"
    ).textContent =
        t.contact.title;


    document.querySelector(
        "#contato > p:not(.contact-number)"
    ).textContent =
        t.contact.description;


    document.querySelector(
        "#contato .button"
    ).textContent =
        t.contact.button;



    // =========================
    // FOOTER
    // =========================

    const footerParagraphs =
        document.querySelectorAll(
            "footer p"
        );


    if (footerParagraphs[1]) {

        footerParagraphs[1].textContent =
            t.footer.developed;

    }


    if (footerParagraphs[2]) {

        footerParagraphs[2].textContent =
            t.footer.rights;

    }



    // =========================
    // HTML / TITLE
    // =========================

    document.documentElement.lang =
        language === "pt"
            ? "pt-BR"
            : "en";


    document.title =
        t.title;



    // =========================
    // BOTÕES
    // =========================

    ptBtn.classList.toggle(
        "active",
        language === "pt"
    );


    enBtn.classList.toggle(
        "active",
        language === "en"
    );



    // =========================
    // SALVAR IDIOMA
    // =========================

    localStorage.setItem(
        "portfolioLanguage",
        language
    );

}


// =========================
// BOTÃO PT
// =========================

ptBtn.addEventListener(
    "click",
    () => {

        setLanguage("pt");

    }
);


// =========================
// BOTÃO EN
// =========================

enBtn.addEventListener(
    "click",
    () => {

        setLanguage("en");

    }
);


// =========================
// IDIOMA SALVO
// =========================

const savedLanguage =
    localStorage.getItem(
        "portfolioLanguage"
    ) || "pt";


setLanguage(savedLanguage);

// =========================
// REVEAL AO ROLAR
// =========================

const revealElements = document.querySelectorAll(
    ".section, .project-card, .contact, .skill"
);

revealElements.forEach((element) => {
    element.classList.add("reveal");
});

if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;

                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            });
        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -40px 0px"
        }
    );

    revealElements.forEach((element) => {
        revealObserver.observe(element);
    });
} else {
    revealElements.forEach((element) => {
        element.classList.add("is-visible");
    });
}
