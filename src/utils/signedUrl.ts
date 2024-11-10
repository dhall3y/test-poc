import CryptoJS from 'crypto-js';

const base64UrlEncode = (str: string): string => {
	return str.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
};

export const generateSignedUrl = (
	videoId: string,
	expiration: number,
): string => {
	const pullZone = "vz-a8ae3f4a-01c";
	const baseUrl = `https://${pullZone}.b-cdn.net/${videoId}/playlist.m3u8`;

	const expires = Math.floor(new Date() / 1000) + expiration;
	const parsedUrl = new URL(baseUrl);

	const signaturePath = `/${videoId}/`;
	const signaturePathParam = `token_path=${signaturePath}`;
	const parameterDataUrl = "&token_path=" + encodeURIComponent(signaturePath);

	const hashableBase = process.env.BUNNY_API_KEY + signaturePath + expires + signaturePathParam
	const hash = CryptoJS.SHA256(hashableBase)
	const base64Hash = CryptoJS.enc.Base64.stringify(hash);
	const token = base64UrlEncode(base64Hash);

	return parsedUrl.protocol+ "//" + parsedUrl.host + "/bcdn_token=" + token + "&expires=" + expires + parameterDataUrl + parsedUrl.pathname;
};
