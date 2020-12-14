import React from 'react';
import './estilo.css';
import Header from './componentes/header';

function Home() {
 return (
     <div>
         <Header></Header>
         <maim className="main">
             <div className="navbar">Navbar</div>
             <div className="feed">Feed</div>
 
         </maim>
     </div>
 );
}
export default Home;