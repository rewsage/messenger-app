function getChatId(firstUid: string, secondUid: string) {
	return firstUid < secondUid ? firstUid + secondUid : secondUid + firstUid;
}

export { getChatId };
