import React from "react";
import './chat.css';

const Chatbot = (props) => {
	return (
		<div className="btn-chat" id="livechat-compact-container">
			<div className="btn-holder">
				<a onclick={() => props.showChat(true)} href="#" className="link">Need Help?</a>
			</div>
		</div>
	);
};

export default Chatbot;
