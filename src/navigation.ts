/* eslint-disable-next-line */
export default function (): any {
	return [
		{
			type: "link",
			// hide: "xs",
			attributes: {
				label: "Showcase",
				action: (): void => {
					this.$router.push("/showcase");
				},
			},
		},
		{
			type: "link",
			attributes: {
				label: "Projects",
				action: (): void => {
					this.$router.push("/projects");
				},
			},
		},
		{
			type: "select",
			attributes: {
				label: ":ri-translate:",
				config: {
					flow: "left",
					hue: false,
					indicator: false,
					outline: false,
					center: true,
				},
				options: [
					{
						label: "English",
						value: "en",
						action: (): void => {
							this.$i18n.locale = "en";
							localStorage.setItem("locale", "en");
						},
					},
					{
						label: "中文",
						value: "zh",
						action: (): void => {
							this.$i18n.locale = "zh";
							localStorage.setItem("locale", "zh");
						},
					},
				],
			},
		},
		{ type: "theme" },
	];
}
