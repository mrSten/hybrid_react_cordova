import React, { Component } from 'react';
import { Page, Input, ListItem, LazyList } from 'react-onsenui';
import { platform } from 'onsenui';

class ChatbotPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userText: '',
            messages: ["hej", "hej igen", "hej en tredje gång"],
            author: '',
            user: ''
        };
        this.handleTextChange = this.handleTextChange.bind(this);
    
    }

    handleTextChange(event) {
        this.setState({ userText: event.target.value });
    }



    render() {
        return (
            <Page >
                <div className='chatbot-container'>
                    <div className='messages-container'>
                        <div className='left-message'>Hej och välkommen till chatbotten</div>
                        <div className='right-message'>Hej chatbott</div>
                        <div className='right-message'>Jag vill ha hjälp</div>
                        <div className='left-message'>Jag kan inte hjälpa dig, jag är bara i beta</div>
                        <div className='right-message'>Hur kan du då svara på mina meddelanden</div>
                        <div className='left-message'>Denna text är hårdkodad</div>
                        <div className='right-message'>Jaha...</div>
                    </div>
                    <div className='messageBar'>
                        <Input
                            value={this.state.userText}
                            onChange={this.handleTextChange}
                            float
                            placeholder='Type message' /> </div>
                </div>
            </Page>
        )
    }
}
export const CHATBOT_ROUTE = {
    key: 'CHATBOT_PAGE',
    component: ChatbotPage
}
export default ChatbotPage;