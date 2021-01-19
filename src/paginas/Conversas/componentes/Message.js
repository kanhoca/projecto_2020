import React, {useState, useEffect} from 'react';
import './Message.css';


function Message ({data, user}){


    const [time, setTime] = useState('');


    useEffect(() =>{

        if(data.date > 0){

            let d = new Date (data.date.seconds * 1000);

            let hours = d.getHours();

            let minutes = d.getMinutes();

            hours = hours < 10 ? '0'+ hours: hours;

            minutes = minutes < 10 ? '0'+ minutes: minutes;


            setTime(`${hours}:${minutes}`);

        }



    }, [data])

    return(


        <div
           className="line"
           style={{
               justifyContent: user.id === data.author ? 'flex-end' : 'flex-start'

           }}
           
        >

            <div

              className="message"

              style={{

                backgroundColor: user.id === data.author ? '#CCC' : 'white'
              }}
              
              
              >

                <div className="texto">
                {data.body}
                   
                </div>

                <div
                 
                 className="smsdata"
                 style={{

                    color: user.id === data.author ? '#ffffff' : '#999'
                 }}
                 
                 >
                 {time}


                </div>
            </div>
        </div>


    );


}

export default Message;