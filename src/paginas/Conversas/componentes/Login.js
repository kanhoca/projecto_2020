import React from 'react';
import './Login.css';
import Api from '../../../Api';

function Login({onReceive}) {

    const hendleFacebookLogin = async () =>{


        let result = await Api.fbPopup();

        if(result){

            onReceive(result.user);

        }
        else{
            alert("ERRO");
        }


    }
    return(

        <div className="login">


            <button onClick={hendleFacebookLogin}>Login utilizando facebook</button>



        </div>



    );
}

export default Login; 