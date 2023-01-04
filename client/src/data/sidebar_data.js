import { faBorderAll, faFileLines, faFileVideo } from '@fortawesome/free-solid-svg-icons'

export const routes = [
    {
        path: '/dashboard',
        name: 'Inicio',
        icon: faBorderAll,
    },
    {
        path: '/videos',
        name: 'Videos',
        icon: faFileVideo,
    },
    {
        path: '/exams',
        name: 'Exámenes',
        icon: faFileLines,
    },
];
