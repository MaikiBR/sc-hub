import { Card, CardActionArea, CardContent, CardMedia, Chip, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import videotecaImg from "../../assets/images/videoteca.png"
import manProductoImg from "../../assets/images/manualproducto.png"
import manOperativoImg from "../../assets/images/manualoperativo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";

const Conocimiento = () => {
    const navigate = useNavigate();

    return (
        <div className="conocimiento-container">
            <Chip style={{ backgroundColor: '#001935', color: '#e9d8b3' }} label="Evaluaciones" icon={<FontAwesomeIcon icon={faFile} color="#e9d8b3" />} onClick={() => navigate("/banco-de-talento/conocimiento/evaluaciones")}/>
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
                            maxWidth: 400, 
                            maxHeight: 400,
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
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>

                <Grid item>
                <Card
                        sx={{ 
                            maxWidth: 400, 
                            maxHeight: 400,
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
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                
                <Grid item>
                <Card
                        sx={{ 
                            maxWidth: 400, 
                            maxHeight: 400,
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
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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