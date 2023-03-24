import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, SearchOutlined } from '@material-ui/icons';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MiIcon from '@material-ui/icons/Mic';
import MoreVert from "@material-ui/icons/MoreVert"
import React, { useEffect, useState } from 'react'
import "./Chat.css"

function Chat() {
    const [seed, setSeed] = useState("");
    const [input, setInput] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    const sendMessage = (e) => {
        e.preventDefault()
    }
    return (
        <div className="chat">

            <div className="chat_header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

                <div className="chat_headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen at...</p>
                </div>

                <div className="chat_headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className="chat_body">
                <p className={`chat_message ${true &&
                    "chat_receiver"}`}>
                    <span className='chat_name'>
                        Nabil Hayet
                    </span>
                    Hey Guys
                    <span className='chat_timestamp'>
                        3:52pm
                    </span>
                </p>


            </div>
            <div className="chat_footer">
                <InsertEmoticonIcon />
                <form>
                    <input value={input} onChange={(e) => setInput(e.target.value)} placeholder='Type a message' type="text" />
                    <button onClick={sendMessage} type="submit">Send a message</button>
                </form>
                <MiIcon />
            </div>
        </div>
    )
}

export default Chat