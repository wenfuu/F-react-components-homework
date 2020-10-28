import React, { Component } from 'react';
import './ChatInput.scss';

class ChatInput extends Component {
    constructor(props) {
        super(props);
        this.state = { inputMessage: {} };
    }

    handleChange = (event) => {
        this.setState({ inputMessage: { text: event.target.value, role: 'CUSTOMER' } });
    };

    render() {
        return (
            <footer className="ChatInput">
                <input type="text" onChange={this.handleChange} />
                <button type="button" onClick={this.props.onClick.bind(this, this.state.inputMessage)}>
                    Send
                </button>
            </footer>
        );
    }
}

export default ChatInput;
