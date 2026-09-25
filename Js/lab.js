const ptBtn = document.getElementById("ptBtn");
const enBtn = document.getElementById("enBtn");

const translations = {
    pt: {
        title: "Emy | Workshop",

        nav: [
            "Início",
            "Sobre",
            "Habilidades",
            "Projetos",
            "Workshop"
        ],

        heroTitle: "Meu <span>Workshop.</span>",
        heroDescription:
            "Um espaço para registrar o que estou aprendendo, experimentando e construindo durante minha jornada no desenvolvimento de sistemas.",

        sections: {
            studying: "Atualmente estudando",
            experiments: "Experimentos",
            goals: "Próximos passos"
        },

        learningTitles: [
            "JavaScript",
            "Python",
            "Banco de Dados",
            "Desenvolvimento Web"
        ],

        learning: [
            {
                description:
                    "Aprofundando meus conhecimentos em lógica, manipulação do DOM, eventos e criação de funcionalidades interativas.",
                status: "Em desenvolvimento"
            },
            {
                description:
                    "Praticando lógica de programação, estruturas de dados e desenvolvimento de aplicações.",
                status: "Em desenvolvimento"
            },
            {
                description:
                    "Estudando organização, armazenamento e relacionamento entre informações.",
                status: "Em desenvolvimento"
            },
            {
                description:
                    "Aprimorando a criação de interfaces, responsividade e integração entre diferentes partes de uma aplicação.",
                status: "Em desenvolvimento"
            }
        ],

        experimentsDescription:
            "Pequenos projetos e testes que utilizo para transformar conceitos estudados em prática.",

        experiments: [
            {
                title: "Medidor de CPU e RAM",
                description:
                    "Experimento voltado para monitoramento de recursos do computador utilizando JavaScript, Node.js e Express."
            },
            {
                title: "Sistema de Almoxarifado",
                description:
                    "Projeto acadêmico desenvolvido para colocar em prática conceitos de desenvolvimento de sistemas e gerenciamento de informações."
            },
            {
                title: "Próximo experimento",
                description:
                    "Um novo projeto ainda está sendo planejado. Em breve este espaço receberá uma nova ideia."
            }
        ],

        goals: [
            {
                title: "Criar projetos maiores",
                description:
                    "Continuar desenvolvendo aplicações que permitam colocar diferentes conhecimentos em prática."
            },
            {
                title: "Aprimorar minhas habilidades",
                description:
                    "Evoluir constantemente em programação, desenvolvimento web e organização de projetos."
            },
            {
                title: "Construir experiência",
                description:
                    "Transformar cada projeto e estudo em experiência prática para minha futura carreira."
            }
        ],

        endingText: "Sempre aprendendo.",
        endingTitle: "Um projeto de cada vez.",

        footer: "Desenvolvendo, aprendendo e experimentando."
    },

    en: {
        title: "Emy | Workshop",

        nav: [
            "Home",
            "About",
            "Skills",
            "Projects",
            "Workshop"
        ],

        heroTitle: "My <span>Workshop.</span>",
        heroDescription:
            "A space to document what I'm learning, experimenting with, and building throughout my journey in systems development.",

        sections: {
            studying: "Currently studying",
            experiments: "Experiments",
            goals: "Next steps"
        },

        learningTitles: [
            "JavaScript",
            "Python",
            "Database",
            "Web Development"
        ],

        learning: [
            {
                description:
                    "Deepening my knowledge of programming logic, DOM manipulation, events, and interactive functionality.",
                status: "In progress"
            },
            {
                description:
                    "Practicing programming logic, data structures, and application development.",
                status: "In progress"
            },
            {
                description:
                    "Studying the organization, storage, and relationships between information.",
                status: "In progress"
            },
            {
                description:
                    "Improving interface development, responsiveness, and integration between different parts of an application.",
                status: "In progress"
            }
        ],

        experimentsDescription:
            "Small projects and tests I use to turn concepts I've studied into practice.",

        experiments: [
            {
                title: "CPU & RAM Monitor",
                description:
                    "An experiment focused on monitoring computer resources using JavaScript, Node.js, and Express."
            },
            {
                title: "Inventory Management System",
                description:
                    "An academic project developed to put systems development and information management concepts into practice."
            },
            {
                title: "Next experiment",
                description:
                    "A new project is currently being planned. Soon, this space will receive a new idea."
            }
        ],

        goals: [
            {
                title: "Create larger projects",
                description:
                    "Continue developing applications that allow me to put different skills and concepts into practice."
            },
            {
                title: "Improve my skills",
                description:
                    "Continuously grow in programming, web development, and project organization."
            },
            {
                title: "Build experience",
                description:
                    "Turn every project and study session into practical experience for my future career."
            }
        ],

        endingText: "Always learning.",
        endingTitle: "One project at a time.",

        footer: "Developing, learning, and experimenting."
    }
};


function setLanguage(language) {

    const t = translations[language];

    document.documentElement.lang =
        language === "pt" ? "pt-BR" : "en";

    document.title = t.title;

    // NAVBAR

    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach((link, index) => {
        link.textContent = t.nav[index];
    });


    // HERO

    document.querySelector(".lab-hero h1").innerHTML =
        t.heroTitle;

    document.querySelector(".lab-hero .hero-content > p:last-child")
        .textContent = t.heroDescription;


    // SECTION TITLES

    const sectionTitles =
        document.querySelectorAll(".section-title h2");

    sectionTitles[0].textContent =
        t.sections.studying;

    sectionTitles[1].textContent =
        t.sections.experiments;

    sectionTitles[2].textContent =
        t.sections.goals;


    // LEARNING CARDS

    const learningCards =
        document.querySelectorAll(".learning-card");

    learningCards.forEach((card, index) => {

        card.querySelector("h3").textContent =
            t.learningTitles[index];

        card.querySelector("p").textContent =
            t.learning[index].description;

        card.querySelector("small").textContent =
            t.learning[index].status;

    });


    // EXPERIMENTS

    document.querySelector(".section-description")
        .textContent = t.experimentsDescription;

    const experiments =
        document.querySelectorAll(".experiment");

    experiments.forEach((experiment, index) => {

        experiment.querySelector("h3").textContent =
            t.experiments[index].title;

        experiment.querySelector("p").textContent =
            t.experiments[index].description;

    });


    // GOALS

    const goals =
        document.querySelectorAll(".goal");

    goals.forEach((goal, index) => {

        goal.querySelector("h3").textContent =
            t.goals[index].title;

        goal.querySelector("p").textContent =
            t.goals[index].description;

    });


    // ENDING

    document.querySelector(".lab-ending p").textContent =
        t.endingText;

    document.querySelector(".lab-ending h2").textContent =
        t.endingTitle;


    // FOOTER

    document.querySelector("footer p:last-child")
        .textContent = t.footer;


    // BUTTONS

    ptBtn.classList.toggle(
        "active",
        language === "pt"
    );

    enBtn.classList.toggle(
        "active",
        language === "en"
    );


    // SAVE LANGUAGE

    localStorage.setItem(
        "portfolioLanguage",
        language
    );
}


// BUTTON EVENTS

ptBtn.addEventListener("click", () => {
    setLanguage("pt");
});

enBtn.addEventListener("click", () => {
    setLanguage("en");
});


// LOAD SAVED LANGUAGE

const savedLanguage =
    localStorage.getItem("portfolioLanguage") || "pt";

setLanguage(savedLanguage);


// YEAR

document.getElementById("year").textContent =
    new Date().getFullYear();

// =========================
// REVEAL AO ROLAR
// =========================

const revealElements = document.querySelectorAll(
    ".lab-hero, .lab-section, .learning-card, .experiment, .goal, .lab-ending"
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
