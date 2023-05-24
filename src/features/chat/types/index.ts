export interface Members {
	[uid: string]: string;
}

export interface Chat {
	title: string;
	members: Members;
}

export interface Conversation {
	smth: string;
	members: Members;
}

export interface Conversations {
	[chatId: string]: Conversation;
}

export interface Chats {
	[chatId: string]: Chat;
}
