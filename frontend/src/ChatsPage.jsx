import {MultiChatSocket,MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'


const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic('3697b3bd-20cf-48ff-88e1-389747109de2',
    props.user.username,
    props.user.secret
    );
    return <div style={{height:'100vh'}}>
        <MultiChatSocket {...chatProps} />  
        <MultiChatWindow {...chatProps} style={{height:'100%'}}/>  
        </div>
}

export default ChatsPage