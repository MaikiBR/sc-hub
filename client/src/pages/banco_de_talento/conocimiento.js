import { Card, CardActionArea, CardContent, CardMedia, Chip, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import videotecaImg from "../../assets/images/videoteca.png"
import manProductoImg from "../../assets/images/manualproducto.png"
import manOperativoImg from "../../assets/images/manualoperativo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/images/logos/Logo RH HR Hub by Super Cream-03.png"


const Conocimiento = () => {
    const navigate = useNavigate();

    return (
        <div className="conocimiento-container">
            
            <div className="logo-container-conoc">
                <img 
                    src={logo}
                    alt="HR Hub Logo"
                />
                <Chip className="evaluations-btn" style={{ backgroundColor: '#001935', color: '#e9d8b3' }} label="Evaluaciones" icon={<FontAwesomeIcon icon={faFile} color="#e9d8b3" />} onClick={() => navigate("/banco-de-talento/conocimiento/evaluaciones")}/>
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
                            weight: 400,
                            backgroundColor: "#001935",
                            color: "#e9d8b3",
                            boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
                            borderRadius: "15px"
                        }}
                    >
                        <CardActionArea onClick={() => navigate("/banco-de-talento/conocimiento/videoteca")}>
                            <CardMedia
                                component="img"
                                height="150"
                                alt="videoteca"
                                image={videotecaImg}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Videoteca
                                </Typography>
                                <Typography variant="body2" color="whitesmoke">
                                    Te invitamos a ingresar a los videos institucionales, de procesos o de seguridad que
                                    apliquen a tu puesto y aplicar las evaluaciones para acreditar que tienes pleno conocimiento
                                    de ellos.
                                    ¡El trabajo en equipo es la habilidad para trabajar juntos hacia una visión común!
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>

                <Grid item>
                <Card
                        sx={{ 
                            width: 400, 
                            weight: 400,
                            backgroundColor: "#001935",
                            color: "#e9d8b3",
                            boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
                            borderRadius: "15px"
                        }}
                    >
                        <CardActionArea onClick={() => navigate("/banco-de-talento/desempeño/manuales-operativos")}>
                            <CardMedia
                                component="img"
                                height="150"
                                alt="Manuales operativos"
                                image={manOperativoImg}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Manuales Operativos
                                </Typography>
                                <Typography variant="body2" color="whitesmoke">
                                    Entiende la operación óptima mediante nuestros “Manuela de Procedimientos”, diseñados
                                    para apoyarte en la integración a a tu puesto.
                                    ¡Aprenderlos es el primer paso a tu productividad!
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                
                <Grid item>
                <Card
                        sx={{ 
                            width: 400, 
                            weight: 400,
                            backgroundColor: "#001935",
                            color: "#e9d8b3",
                            boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
                            borderRadius: "15px"
                        }}
                    >
                        <CardActionArea onClick={() => navigate("/banco-de-talento/manuales-de-producto")}>
                            <CardMedia
                                component="img"
                                height="150"
                                alt="Manuales de producto"
                                image={manProductoImg}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Manuales de Producto
                                </Typography>
                                <Typography variant="body2" color="whitesmoke">
                                    Conoce los estándares de calidad de nuestros productos para tener más éxito en la venta y
                                    mayor control en su manejo.
                                    ¡Nuestro producto es nuestra ventaja competitiva!
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>           
        </div>
    );
}

export default Conocimiento;