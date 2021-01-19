import React, {useState, useEffect} from 'react';
import './chatitem.css';


function Lista ({click, active, data}) {


    const [time, setTime] = useState('');


    useEffect(() =>{

        if(data.lastMessageDate > 0){

            let d = new Date (data.lastMessageDate.seconds * 1000);

            let hours = d.getHours();

            let minutes = d.getMinutes();

            hours = hours < 10 ? '0'+ hours: hours;

            minutes = minutes < 10 ? '0'+ minutes: minutes;


            setTime(`${hours}:${minutes}`);

        }



    }, [data]);
    

    return( 

        <div 
        className={`lista ${active? 'active':''}`}
        onClick={click}
        
        >

            <img className="lista-avatar" src={data.image}/>

            <div className="item">

                <div className="item-line">

                    <div className="name">{data.title}</div>
                    <div className="date">
                        {time} 
                    </div>

                </div>

                <div className="item-line">
                    <div className="lastsms">
                        <p>{data.lastMessage}</p>
                    </div>

                </div>

            </div>

        </div> 
     );

}
export default Lista;