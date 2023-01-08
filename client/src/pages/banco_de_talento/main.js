import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import conocimientoImg from "../../assets/images/conocimiento.png"
import performanceImg from "../../assets/images/performance.png"
import productividadImg from "../../assets/images/productividad.png"

const BancoTalento = () => {
    const navigate = useNavigate();

    return (
        <div className="bancotalento-container">
            {/* <div className="title">Banco de Talento</div>    */}

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
                        <CardActionArea onClick={() => navigate("/banco-de-talento/conocimiento")}>
                            <CardMedia
                                component="img"
                                height="150"
                                alt="conocimiento"
                                image={conocimientoImg}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Conocimiento
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
                        <CardActionArea onClick={() => navigate("/banco-de-talento/desempeño")}>
                            <CardMedia
                                component="img"
                                height="150"
                                alt="desempeño"
                                image={performanceImg}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Desempeño
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
                        <CardActionArea onClick={() => navigate("/banco-de-talento/productividad")}>
                            <CardMedia
                                component="img"
                                height="150"
                                alt="productividad"
                                image={productividadImg}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Productividad
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

export default BancoTalento;