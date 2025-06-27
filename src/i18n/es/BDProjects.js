export const projects = [
    {
        id: "kanban-board",
        name: "Kanban Board App",
        image: "/images/kanban.png", // ruta de tu imagen local
        technologies: [
            "React",
            "TypeScript",
            "Tailwind",
            "Context API",
            "Vite",
            "Pragmatic DnD",
            "JSONBin",
            "LocalStorage",
        ],
        description: `Kanban board interactivo construido con React, TypeScript y Tailwind. Permite crear, editar, eliminar y 
        organizar tareas mediante drag & drop, con filtros por nombre y prioridad. Usa JSONBin como backend para persistencia de datos y 
        LocalStorage para preferencias de apariencia.`,
        highlights: [
            "Drag & drop fluido con Pragmatic DnD",
            "Persistencia de tareas en JSONBin",
            "Filtros dinámicos de tareas",
            "Guardado de preferencias de tema con LocalStorage",
        ],
        route: "kanban",
        demoUrl: "https://kanban-nicolas.vercel.app/",
        codeUrl: "https://github.com/tuusuario/kanban-project",
    },
]