import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import institutionalImage from "../../assets/images/ins2.jpg";
import processImage from "../../assets/images/process1.jpg";
import securityImage from "../../assets/images/sec1.jpg";

const Videoteca = () => {
    const navigate = useNavigate();

    return (
        <div className="videoteca-container">
            
            <div className="videoteca-text-container">

                <p>
                    ¡Bienvenidos!
                </p>
                <br/>
                <p>
                    GRUPO SUPERCREAM es una empresa enfocada en la mejora continua de nuestra
                    operación, para incrementar la calidad de nuestros productos, servicios, lograr la
                    satisfacción de nuestros clientes y la rápida integración de nuestros colaboradores en un
                    ambiente laboral agradable y seguro. Por lo anterior, tenemos definidos nuestros procesos
                    de trabajo para claridad de los responsables en los diversos puestos y los protocolos de
                    seguridad que debemos cumplir para cuidar nuestra integridad durante el desarrollo de
                    nuestras actividades.
                </p>
                <br/>
                <p>
                    Tú eres pieza importante en ésta gran labor, y es vital conozcas, entiendas y cumplas cada
                    uno de los procesos de trabajo y protocolos de seguridad en los cuales intervienes.
                </p>
                <br/>
                <p>
                    Te invitamos a ingresar a los videos institucionales, de procesos o de seguridad que
                    apliquen a tu puesto y aplicar las evaluaciones correspondientes para acreditar que tienes
                    pleno conocimiento de ellos.
                </p>
                <br/>
                <p>
                    ¡El trabajo en equipo es la habilidad para trabajar juntos hacia una visión común!
                </p>
                <br/>

            </div>

            <div className="videoteca-cards-container">
                
                    <Card className="videoteca-card" sx={{ maxWidth: 345, backgroundColor: '#001935', color: 'white'}}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="190"
                            image={institutionalImage}
                            alt="institucional"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Institucional
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ color: 'white'}}>
                                    Conoce nuestra Filosofía Organizacional y de Seguridad de una manera ágil y clara en los videos 
                                    institucionales de Inducción y Seguridad.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" onClick={() => navigate("/videoteca/institution")}>
                            Ver videos
                            </Button>
                        </CardActions>
                    </Card>

                    <Card className="videoteca-card" sx={{ maxWidth: 345, backgroundColor: '#001935', color: 'white'}}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="190"
                            image={processImage}
                            alt="procesos"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Procesos
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ color: 'white'}}>
                                    Aprende nuestros procesos de trabajo de una manera visual y fácil.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" onClick={() => navigate("/videoteca/process")}>
                            Ver videos
                            </Button>
                        </CardActions>
                    </Card>

                    <Card className="videoteca-card" sx={{ maxWidth: 345, backgroundColor: '#001935', color: 'white'}}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="190"
                            image={securityImage}
                            alt="seguridad"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Seguridad
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ color: 'white'}}>
                                    Conoce nuestra Cultura de Seguridad y respeta los lineamientos de prevención para el 
                                    cuidado de tu integración física y la de tus compañeros. ¡Valorarte es Cuidarte! 
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" onClick={() => navigate("/videoteca/security")}>
                            Ver videos
                            </Button>
                        </CardActions>
                    </Card>

            </div>
        </div>
                 
    );
}

export default Videoteca;