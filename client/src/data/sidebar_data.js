import { faBorderAll, faCirclePlay, faFileCirclePlus, faFileLines, faMedal, faUserPlus } from '@fortawesome/free-solid-svg-icons'

export const routes = [
    {
        path: '/dashboard',
        name: 'Inicio',
        icon: faBorderAll,
    },
    {
        path: '/videoteca',
        name: 'Videoteca',
        icon: faCirclePlay,
    },
    {
        path: '/evaluations',
        name: 'Evaluaciones',
        icon: faFileLines,
    },
    /* SOLO ADMIN */
    {
        path: '/results',
        name: 'Resultados',
        icon: faMedal,
    },
    {
        path: '/addUsers',
        name: 'Alta de Usuarios',
        icon: faUserPlus,
    },
    {
        path: '/addEvaluations',
        name: 'Alta de Evaluaciones',
        icon: faFileCirclePlus,
    },

];

/*
VIDEOS:
Institucionales
Procesos
Seguridad

*/
