import React , {useState, useEffect} from 'react';
import './estilo.css';
import './janela.css';
import Api from '../../Api';
import Login from './componentes/Login'
import NewChat from './componentes/NewChat';
import Janela from './componentes/Janela'
import Lista from './componentes/Lista';
import Intro from './componentes/Intro';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVert from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';


function Conversas () {
    
    const[chatlist, setChatlist] = useState([]);
    const [activeChat, setActiveChat] = useState({});
    const [showNewChat, setShowNewChat] = useState (false);
    const hendleNewChat = () => {

        setShowNewChat(true);
    }



    
    const [user, setUser] = useState(null);



    
    useEffect(() =>{

        let unsub;

        if(user !== null){

            unsub = Api.onChatList(user.id, setChatlist);

            return unsub;

        }

    }, [user]);


    const hendleloginData = async (u) =>{


        let newUser = {


            id: u.uid,
            name: u.displayName,
            avatar: u.photoURL
        } ;


        await Api.addUser(newUser);

        setUser(newUser);

    }



    if(user === null ){


        return (<Login onReceive={hendleloginData} />);
    }
    

    

    return(
        
        <div className="app-window">
        <div className="sidebar">

            <NewChat

            chatlist={chatlist}
            user={user}
            show={showNewChat}
            setShow={setShowNewChat}

            
            />
            

            <header>
                <img className="header--avatar" src={user.avatar} alt=""/>
                 <div className="header--buttons">
                    <div onClick={hendleNewChat} className="header--btn">
                        <ChatIcon style={{color:'#233152'}}/>
                   
                    </div>
                    <div className="header--btn">
                        <MoreVert style={{color:'#233152'}}/>
                       
                    </div>



                </div>
            
            </header>

           
            <div className="search">
                <div className="search-input">
                   <SearchIcon  fontSize="small" style={{color:'#233152'}} />
                   
           

                    <input type="search" placeholder="Pesquisar conversa" />

                </div>
                

            </div >

            <div className="Chatlist">

                {
                chatlist.map((item, key) =>(
                    <Lista 

                    key={key}
                    data={item}
                    active={activeChat.chatId===chatlist[key].chatId}
                    click={() => setActiveChat(chatlist[key])}
                    
                    />

                    
                ))}
                

            </div>

        </div>

        <div  className="area">

           
            
            {
            activeChat.chatId !== undefined &&

               <Janela 

                  user={user}
                  data={activeChat}

                />
           
            }

            {
            activeChat.chatId === undefined && 

                 <Intro />
            }  
            
           
           

        </div>
      

    </div>



    );


}

export default Conversas;

