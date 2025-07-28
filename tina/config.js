import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || "master";

export default defineConfig({
	branch,
	clientId: process.env.TINACLIENTID || '823e813a-e2fc-4530-9448-4dbdc241ad88', // Get this from tina.io
	token: process.env.TINATOKEN || '4c4ee7bc3471f8c45cf21437c13c2caa14ca163e', // Get this from tina.io

	build: {
		outputFolder: "admin",
		publicFolder: "public",
	},
	media: {
		tina: {
			mediaRoot: "assets",
			publicFolder: "public",
		},
	},
	schema: {
		collections: [
			{
				name: "post",
				label: "Posts",
				path: "posts",
				defaultItem: () => ({
					title: "New Post",
					added: new Date(),
					tags: [],
				}),
				ui: {
					dateFormat: "MMM DD YYYY",
					filename: {
						readonly: false,
						slugify: (values) => {
							return values?.slug?.toLowerCase().replace(/ /g, "-");
						},
					},
				},
				fields: [
					{
						name: "title",
						label: "Title",
						type: "string",
						isTitle: true,
						required: true,
					},
					{
						label: "Slug",
						name: "slug",
						type: "string",
						required: true,
					},
					{
						label: "Description",
						name: "description",
						type: "string",
						required: true,
					},
					{
						label: "Tags",
						name: "tags",
						type: "string",
						list: true,
						options: [
							{
								value: "technical",
								label: "Technical",
							},
							{
								value: "advice",
								label: "Advice",
							},
							{
								value: "events",
								label: "Events",
							},
							{
								value: "learning",
								label: "Learning",
							},
							{
								value: "meta",
								label: "Meta",
							},
							{
								value: "work",
								label: "Work",
							},
							{
								value: "personal",
								label: "Personal",
							},
							{
								value: "musings",
								label: "Musings",
							},
						],
					},
					{
						label: "Added",
						name: "added",
						type: "datetime",
						dateFormat: "MMM DD YYYY",
						required: true,
					},
					{
						label: "Updated",
						name: "updated",
						type: "datetime",
						dateFormat: "MMM DD YYYY",
					},
					{
						type: "rich-text",
						name: "body",
						label: "Body",
						isBody: true,
					},
				],
			},
		],
	},
	search: {
		tina: {
			indexerToken: process.env.TINASEARCH || '3ae4126b80fae252cec0a4a0ddc081f90efca757',
			stopwordLanguages: ["eng"],
		},
		indexBatchSize: 50,
		maxSearchIndexFieldLength: 100,
	},
});
