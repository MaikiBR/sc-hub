import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import conocimientoImg from "../../assets/images/conocimiento.png"
import performanceImg from "../../assets/images/performance.png"
import productividadImg from "../../assets/images/productividd.png"
import logo from "../../assets/images/logos/Logo RH HR Hub by Super Cream-03.png"


const BancoTalento = () => {
    const navigate = useNavigate();

    return (
        <div className="bancotalento-container">
            {/* <div className="title">Banco de Talento</div>    */}
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
                            height: 300,
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
                                Estandarizar los procesos y productos requiere estandarizar los conocimientos de nuestro
                                equipo de trabajo.
                                ??T?? eres parte esencial!
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>

                <Grid item>
                <Card
                        sx={{ 
                            width: 400, 
                            height: 300,
                            backgroundColor: "#001935",
                            color: "#e9d8b3",
                            boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
                            borderRadius: "15px"
                        }}
                    >
                        <CardActionArea onClick={() => navigate("/banco-de-talento/desempe??o")}>
                            <CardMedia
                                component="img"
                                height="150"
                                alt="desempe??o"
                                image={performanceImg}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Desempe??o
                                </Typography>
                                <Typography variant="body2" color="whitesmoke">
                                La retroalimentaci??n es pieza clave para entender si nuestro desempe??o cumple con las
                                expectativas del puesto.
                                ??Una evaluaci??n te orienta a mejorar tu desempe??o!
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                
                <Grid item>
                <Card
                        sx={{ 
                            width: 400, 
                            height: 300,
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
                                Contar con metas y objetivos es esencial para el ??xito de una empresa. T?? debes conocer las
                                metas y objetivos de tu ??rea y puesto.
                                ??Enfocar tu conocimiento y desempe??o al logro de resultados te hace PRODUCTIVO!
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