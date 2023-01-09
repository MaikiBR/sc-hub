import background from "../assets/images/Background/FondoRHLogos.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faRightToBracket, faUser } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom"

const Login = () => {
    const navigate = useNavigate();

    return (
        <div className="login-container" style={{ backgroundImage: `url(${background})` }}>
            <div className="box">
                <h2>HR Hub | by SuperCream</h2>
                <form>
                    <div className="inputBox">
                        <input type="text" name="" required />
                        <label><FontAwesomeIcon icon={faUser}/> Usuario </label>
                    </div>
                    <div className="inputBox">
                        <input type="password" name="" required />
                        <label><FontAwesomeIcon icon={faLock}/> Contraseña </label>
                    </div>
                    <button className="login-btn" type="submit" onClick={() => navigate("/dashboard")}>INICIAR SESIÓN <FontAwesomeIcon icon={faRightToBracket} /> </button>
                </form>
            </div>
        </div>
    );
}

export default Login;