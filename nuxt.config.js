export default {
	modules: ['@nuxt/content'],

	head: {
		title: "CROSSNGTHBRDG",
		meta: [
			{ charset: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{
				hid: "description",
				name: "Crossing the Bridge ",
				content:
					"A web-based home for the Interface Cultures exhibition at the Ars Electronica Festival 2022",
			},
		],
		link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
		script: [{src: "/script.js"}]
	},

	components: true,
	target: "static",
};


