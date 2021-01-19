import React, {useState, useEffect} from 'react';
import './NewChat.css';
import ArrowBackIcon  from '@material-ui/icons/ArrowBack';

import Api from '../../../Api';


function NewChat({user, chatlist, show, setShow}) {

    const [list, setList] = useState([]);


    useEffect(() =>{

        const getlist = async ()=>{


            if(user !== null){

                let results = await Api.getContactList(user.id);
                setList(results);
            }
    
        }

        getlist();

        
    }, [user])


    const addchat = async (user2) =>{


        await Api.addchat(user, user2);

        hendleClose();

    }

    const hendleClose = () =>{


        setShow(false);
    }

  




    return(

        <div className="newchat" style={{left: show? 0 :-415}}>
            <div className="chat-header">

                <div onClick={hendleClose} className="back">
                    <ArrowBackIcon style={{color:'#ffffff'}}/>

                </div>
                <div className="chat-title"> Começar Conversa</div>

            </div>
            <div className="chat-list">

                {list.map((item, key) =>(

                    <div onClick={()=>addchat(item)} className="chat-item" key={key}>
                        <img src={item.avatar} alt="" className="chat-avatar"/>
                        <div className="chat-name">{item.name}</div>
                    </div>
                ))}
                
            </div>

            

        </div>



    );
    
}

export default NewChat;