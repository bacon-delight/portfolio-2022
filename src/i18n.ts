/* eslint-disable */

// Load locale
const getNavigatorLanguage = () =>
	(navigator as any).languages && (navigator as any).languages.length
		? (navigator as any).languages[0]
		: (navigator as any).userLanguage ||
		  (navigator as any).language ||
		  (navigator as any).browserLanguage ||
		  "en";

// Load messages from /locale directory
function loadMessages() {
	const locales = require.context(
		"./assets/translations",
		true,
		/[A-Za-z0-9-_,\s]+\.json$/i
	);
	const messages: any = {};
	locales.keys().forEach((key) => {
		const matched = key.match(/([A-Za-z0-9-_]+)\./i);
		if (matched && matched.length > 1) {
			const locale = matched[1];
			messages[locale] = locales(key);
		}
	});
	return messages;
}

export default {
	legacy: false,
	locale: getNavigatorLanguage() || "en",
	fallbackLocale: "en",
	messages: loadMessages(),
	globalInjection: true,
};
