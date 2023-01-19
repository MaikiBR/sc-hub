import {  useState } from "react";
import { dashboardImages } from "../data/dashboard_images_data"

const Dashboard = () => {
   const [currImage, setCurrImage] = useState(0);

//    setInterval(function(){
//     if (currImage >= dashboardImages.length){
//         setCurrImage(0);
//     }else{
//         setCurrImage(currImage + 1);
//     }
//    }, 1000);

    return (
        <div className="dashboard-container">
            <img 
                src={dashboardImages[currImage]}
                alt="Imagen de inicio de HR Hub by SuperCream"
            /> 
        </div>
    );
}

export default Dashboard;