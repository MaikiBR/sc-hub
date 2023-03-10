import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import institutionalImage from "../../assets/images/ins2.jpg";
import processImage from "../../assets/images/process1.jpg";
import securityImage from "../../assets/images/sec1.jpg";
import logo from "../../assets/images/logos/Logo RH HR Hub by Super Cream-03.png"


const Videoteca = () => {
    const navigate = useNavigate();

    return (
        <div className="videoteca-container">
            <div className="logo-container-bt">
                <img 
                    src={logo}
                    alt="HR Hub Logo"
                />
            </div>
            <Grid
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                width="100%"
                height="100%"
            >
                <Grid item>               
                    <Card 
                        sx={{ 
                            width: 400, 
                            height: 400,
                            backgroundColor: "#001935",
                            color: "#e9d8b3",
                            boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
                            borderRadius: "15px"
                        }}
                    >
                            <CardActionArea disabled>
                                <CardMedia
                                component="img"
                                sx={{ height: "200px" }}
                                image={institutionalImage}
                                alt="institucional"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Institucional
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ color: 'white'}}>
                                        Conoce nuestra Filosof??a Organizacional y de Seguridad de una manera ??gil y clara en los videos 
                                        institucionales de Inducci??n y Seguridad.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary" onClick={() => navigate("/banco-de-talento/conocimiento/videoteca/institution")}>
                                Ver videos
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item>  
                        <Card 
                            sx={{ 
                                width: 400, 
                                height: 400,
                                backgroundColor: "#001935",
                                color: "#e9d8b3",
                                boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
                                borderRadius: "15px"
                            }}
                        >
                            <CardActionArea disabled>
                                <CardMedia
                                component="img"
                                sx={{ height: "230px" }}
                                image={processImage}
                                alt="procesos"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Procesos
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ color: 'white'}}>
                                        Aprende nuestros procesos de trabajo de una manera visual y f??cil.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary" onClick={() => navigate("/banco-de-talento/conocimiento/videoteca/process")}>
                                Ver videos
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item>
                        <Card 
                            sx={{ 
                                width: 400, 
                                height: 400,
                                backgroundColor: "#001935",
                                color: "#e9d8b3",
                                boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
                                borderRadius: "15px"
                            }}
                        >
                            <CardActionArea disabled>
                                <CardMedia
                                sx={{ height: "200px" }}
                                component="img"
                                image={securityImage}
                                alt="seguridad"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Seguridad
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ color: 'white'}}>
                                        Conoce nuestra Cultura de Seguridad y respeta los lineamientos de prevenci??n para el 
                                        cuidado de tu integraci??n f??sica y la de tus compa??eros. ??Valorarte es Cuidarte! 
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary" onClick={() => navigate("/banco-de-talento/conocimiento/videoteca/security")}>
                                Ver videos
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
            </Grid>
        </div>                 
    );
}

export default Videoteca;