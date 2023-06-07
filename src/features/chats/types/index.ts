export interface Members {
	[uid: string]: string;
}

export interface Message {
	content: string;
	senderId: string;
	createdAt: number;
}

export interface Chat {
	title: string;
	companionId: string;
	messages: Message[];
}

export interface Conversations {
	[chatId: string]: Members;
}

export interface Chats {
	[chatId: string]: Chat;
}
