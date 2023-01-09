// #region Video Media
// import videoValores from '../assets/videos/Procesos/Administracion de valores.mp4'
// import videoCobro from '../assets/videos/Procesos/Cobro.mp4'
// import videoPasteleria from '../assets/videos/Procesos/Pasteleria.mp4'
// import videoPedidoEsp from '../assets/videos/Procesos/PEDIDO ESPECIAL.mp4'
// import videoReservacion from '../assets/videos/Procesos/RESERVACION.mp4'
// import videoServCliente from '../assets/videos/Procesos/Servicio al cliente.mp4'

// import videoInduccion from '../assets/videos/Institucionales/VideoInducción.mp4'
// import videoSegPrimero from '../assets/videos/Institucionales/1 LA SEGUR1 IDAD LA HACEMOS TODOS g.mp4'

// import videoSec1 from '../assets/videos/Seguridad/2 PREVENCION DE QUEMADURAS GSC.mp4'
// import videoSec2 from '../assets/videos/Seguridad/3 LEVANTAMIENTO MANUAL DE CARGAS G.mp4'
// import videoSec3 from '../assets/videos/Seguridad/5 PREVENCION DE CORTADURAS G.mp4'
// import videoSec4 from '../assets/videos/Seguridad/4 PREVENCION DE CAIDAS G.mp4'

// #endregion

// #region Thumbnail Media
// INSTITUCIONAL
import thumbInduccion from "../assets/images/thumbnails/Material Video RH Titulos 1600x900px_Mesa de trabajo 1.jpg"
import thumbSegInstitucional from "../assets/images/thumbnails/Material Video RH Titulos 1600x900px-02.jpg"
// PROCESOS
import thumbValores from "../assets/images/thumbnails/ADMINISTRACIÓN DE VALORES.jpg"
import thumbCobro from "../assets/images/thumbnails/Cobro.jpg"
import thumbServC from "../assets/images/thumbnails/SERVICIO AL CLIENTE.jpg"
import thumbReserv from "../assets/images/thumbnails/RESERVACIÓN.jpg"
import thumbPedEsp from "../assets/images/thumbnails/PEDIDO PEDIDO ESPECIAL.jpg"
import thumbPasteleria from "../assets/images/thumbnails/PASTELERIA.jpg"
// SEGURIDAD
import thumbSegQuemaduras from "../assets/images/thumbnails/Material Video RH Titulos 1600x900px-03.jpg"
import thumbSegCargas from "../assets/images/thumbnails/Material Video RH Titulos 1600x900px-04.jpg"
import thumbSegCaidas from "../assets/images/thumbnails/Material Video RH Titulos 1600x900px-05.jpg"
import thumbSegCortaduras from "../assets/images/thumbnails/Material Video RH Titulos 1600x900px-06.jpg"



// #endregion

export const videoPData = [
    {
        id: 1,
        thumbnail: thumbValores,
        // video: videoValores
    },
    {
        id: 2,
        thumbnail: thumbCobro,
        // video: videoCobro
    },
    {
        id: 3,
        thumbnail: thumbPasteleria,
        // video: videoPasteleria
    },
    {
        id: 4,
        thumbnail: thumbPedEsp,
        // video: videoPedidoEsp,
    },
    {
        id: 5,
        thumbnail: thumbReserv,
        // video: videoReservacion,
    },
    {
        id: 6,
        thumbnail: thumbServC,
        // video: videoServCliente,
    },
];

export const videoSData = [
    {
        id: 1,
        thumbnail: thumbSegQuemaduras,
        // video: videoSec1
    },
    {
        id: 2,
        thumbnail: thumbSegCargas,
        //video: videoSec2
    },
    {
        id: 3,
        thumbnail: thumbSegCortaduras,
        //video: videoSec4
    },
    {
        id: 4,
        thumbnail: thumbSegCaidas,
        //video: videoSec3
    },
    
];

export const videoIData = [
    {
        id: 1,
        thumbnail: thumbInduccion,
        //video: videoInduccion
    },
    {
        id: 2,
        thumbnail: thumbSegInstitucional,
        //video: videoSegPrimero
    },
];
