function FindProxyForURL(url, host) {
	if (shExpMatch(host, "youtube.com") || shExpMatch(host, "*.ytimg.com") || shExpMatch(host, "*.googlevideo.com") || shExpMatch(host, "*.youtube.com")) {
		return "PROXY 127.0.0.1:8282";
	}
	return "DIRECT";
}