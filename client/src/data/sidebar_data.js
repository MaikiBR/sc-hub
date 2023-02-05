import { faFaceLaughBeam, faHandshake } from '@fortawesome/free-regular-svg-icons';
import { faBank, faBorderAll, faCirclePlay, faDiagramProject, faFileCirclePlus, faFileLines, faGauge, faHelmetSafety, faMagnifyingGlass, faMedal, faScaleBalanced, faSignature, faUserGear, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons'

export const routes = [
    {
        path: '/dashboard',
        name: 'Inicio',
        icon: faBorderAll,
    },
    {
        path: '/estructura-organizacional',
        name: 'Estructura Organizacional',
        icon: faDiagramProject,
    },
    {
        path: '/atraccion-de-talento',
        name: 'Atracción de Talento',
        icon: faMagnifyingGlass,
    },
    {
        path: '/contratacion',
        name: 'Contratación',
        icon: faSignature,
    },
    {
        path: '/integracion-de-personal',
        name: 'Integración de personal',
        icon: faHandshake,
    },
    {
        path: '/banco-de-talento',
        name: 'Banco de Talento',
        icon: faBank,
    },
    {
        path: '/retencion-de-talento',
        name: 'Retención de Talento',
        icon: faUsers,
    },
    {
        path: '/prevencion-laboral',
        name: 'Prevención Laboral',
        icon: faScaleBalanced,
    },
    {
        path: '/clima-organizacional',
        name: 'Clima Organizacional',
        icon: faFaceLaughBeam,
    },
    {
        path: '/seguridad-laboral',
        name: 'Seguridad Laboral',
        icon: faHelmetSafety,
    },
    {
        path: '/panel-de-control-rh',
        name: 'Panel de Control RH',
        icon: faGauge,
    },
    
    /* SOLO ADMIN */
    {
        path: '/admin-manager',
        name: 'Admin Manager ',
        icon: faUserGear,
    },
];

/*
VIDEOS:
Institucionales
Procesos
Seguridad

*/
