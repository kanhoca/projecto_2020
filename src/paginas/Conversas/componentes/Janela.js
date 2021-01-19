import React, {useState, useEffect, useRef} from 'react';
import './janela.css';
import EmojiPicker from 'emoji-picker-react';
import '../estilo.css';
import Api from '../../../Api';
import Message from './Message';
import MoreVert from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import InsertEmoticonIcon from'@material-ui/icons/InsertEmoticon';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';

function Janela ({user, data}) {

    const corpo = useRef();


    let recognition = null;
    let SpeechRecognition = window.SpeechRecognition || window.webkitSpeeachRecognition;

    if(SpeechRecognition !== undefined){

        recognition = new SpeechRecognition ();


    }

    const  [emojiOpen, setEmojiOpen] = useState(false);

    const[text, setText] = useState('');


    const handleEmojiClick = (e, emojiObject) =>{

        setText(text + emojiObject.emoji);

    }

    const [listening, setListening] = useState(false);

    const [list, setList] = useState([ ]);

    const [users, setUsers] = useState([]);


    useEffect(() =>{



        setList([]);

        let unsub = Api.onChatContent(data.chatId, setList, setUsers);
        return unsub;





    },[data.chatId])

    useEffect(()=> {

        if(corpo.current.scrollHeight > corpo.current.offsetHeight) {

            corpo.current.scrollTop = corpo.current.scrollHeight + corpo.offsetHeight;
        }

    }, [list])

   
    const hendleMicClick = () =>{

        if(recognition !== null){

            recognition.onstart = () => {

                setListening(true);

            }

            recognition.end = () => {

                setListening(false);
            }

            recognition.onresult = (e) =>{

                setText(e.results[0][0].transcript);


            }

            recognition.start();

        }


    }


    const handleInputKeyUp = (e) =>{

        if(e.keyCode == 13){

            hendleSendClick();
        }

    }

    const hendleSendClick = () => {


        if(text !== ''){

            Api.sendMessage(data, user.id, 'text', text, users);
            setText('');
            setEmojiOpen(false);
        }


    }

    const hendleOpenEmoji = () =>{

        setEmojiOpen(true);
    }

    const hendleCloseEmoji = () => {

        setEmojiOpen(false);
    }


    

    return(
        <div className="principal">
                
                
                <div className="header-principal">
                    <div className="info">
                        <img className="janela-avatar" src={data.image} alt=""/>
                        <div className="janela-nome">{data.title}</div>
                      
                       

                    </div>
                    <div className="janela-btn">
                            <div className="janela-bt">

                            <SearchIcon  fontSize="small" style={{color:'#233152'}} />
                   
                            </div>

                            <div className="janela-bt">

                                <AttachFileIcon fontSize="small" style={{color:'#233152'}} />
                            </div>

                            <div className="janela-bt">

                                <MoreVert fontSize="small" style={{color:'#233152'}} />
                            </div>

                        </div>

                </div>

                <div ref={corpo} className="body-principal">

                    {
                     list.map((item, key) =>

                     <Message 


                     key={key}
                     data={item}
                     user={user}
                     
                     
                     />
                     
                    
                    
                    )}

                </div>

                <div 
                    className="emoji-area" 


                    style={{height:emojiOpen ? '200px' : '0px'}}
                    
                 >

                    <EmojiPicker

                    onEmojiClick={handleEmojiClick}
                    disableSearchBar
                    disableSkinTonePicker


                    />
                </div>

                <div className="footer-principal">

                    <div className="janela-pre">


                    <div 
                        className="janela-bt"
                        onClick={hendleCloseEmoji}

                        style={{width: emojiOpen ? 40: 0}}


                        >


                        <CloseIcon  fontSize="small" style={{color:'#233152'}} />
                    </div>

                       <div 
                           className="janela-bt"

                           onClick={hendleOpenEmoji}
                           
                           
                           >
                          


                            <InsertEmoticonIcon  fontSize="small" style={{color:emojiOpen?'blue':'#233152'}} />
                      </div>


                    </div>

                    <div className="janela-input">

                        <input 

                        className="caixa" type="text"
                        placeholder="Digite aqui" 
                        value = {text}
                        onChange = {e => setText(e.target.value)}
                        onKeyUp={handleInputKeyUp}
                        
                        />

                    </div>

                    <div className="janela-pos">

                        {
                            text ==='' &&

                            <div className="janela-bt" onClick={hendleMicClick}>

                                {/**LIBERAR OU PERMITER QUE O PC CAPTE O AUDIO GRAVADO, ECESSAR AS CONFIGURAÇÕES */}
                              <MicIcon fontSize="small" style={{color: listening ? '#4a4a4a':'#233152'}} />
                            </div>




                        }

                        {
                            text !==''  &&

                            <div 
                             
                              className="janela-bt"
                              onClick={hendleSendClick}
                              
                              >

                              <SendIcon fontSize="small" style={{color:'#233152'}} />
                            </div>



                        }

                    
                    
                    </div>

                </div>



            </div>

    );


    




}

export default Janela;