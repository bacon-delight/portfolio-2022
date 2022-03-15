module.exports = {
	pwa: {
		name: process.env.APP_NAME || "Dipanjan De",
		themeColor: "#5ba5ef",
		msTileColor: "#000000",
		appleMobileWebAppCapable: "yes",
		appleMobileWebAppStatusBarStyle: "black",
		manifestOptions: {
			name: process.env.APP_NAME || "Dipanjan De",
			short_name: "Ecosphere",
			start_url: ".",
			theme_color: "#5ba5ef",
		},
	},
	css: {
		loaderOptions: {
			scss: {
				prependData: `@import "@/assets/scss/main.scss";`,
			},
		},
		extract: false,
	},
};
