import React from 'react';
import {ErrorMessage, Formik, Form, Field} from 'formik';
import *as yup from 'yup';


const Login = () => 
{
 
    const valor_submetidos = values => console.log(values);
    const validar = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(8).required()
    })

    return( 
        
            <>
            <h1>Efectuar Login</h1>
            
            <Formik initialValues={{}}   onSubmit={valor_submetidos} validationSchema={validar}>;
            

                <Form className="login">
                    <div className="login_grupo">
                        <Field name="email" className="login_Field" />
                        
                        <ErrorMessage component="span" name="email" className="login_Erro"/>
 
                    </div>
                    <div className="login_grupo">
                        <Field name="password" className="login_Field" />
                        
                        <ErrorMessage component="span" name="password" className="login_Erro"/>

                        
                    </div>
                    <button className="btn" type="submit">Entrar</button>
                </Form>


            </Formik>
            
            </>
           
    
    )
}


export default Login;

