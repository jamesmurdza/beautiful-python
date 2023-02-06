export const SITE = {
	title: 'Beautiful Python',
	description: 'Your website description.',
	defaultLanguage: 'en-us',
} as const;

export const OPEN_GRAPH = {
	image: {
		src: 'https://emoji.aranja.com/static/emoji-data/img-apple-160/1f40d.png',
		alt:
			'snek',
	},
	twitter: 'jamesmurdza',
};

export const KNOWN_LANGUAGES = {
	English: 'en',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/jamesmurdza/beautiful-python/tree/main`;

//export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: 'XXXXXXXXXX',
	appId: 'XXXXXXXXXX',
	apiKey: 'XXXXXXXXXX',
};

export type Sidebar = Record<
	(typeof KNOWN_LANGUAGE_CODES)[number],
	Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
	en: {
		'Chapters': [
			{ text: '1. Introduction', link: 'introduction' },
			{ text: '2. Basics', link: 'basics' },
			{ text: '3. Lists', link: 'lists' },
			{ text: '4. Visualization', link: 'visualization' },
			{ text: '5. Serialization', link: 'serialization' },
			/*{ text: '5. HTTP', link: 'requests' },
			{ text: '6. REST APIs', link: 'rest' },
			{ text: '7. Email', link: 'email' },
			{ text: '8. Scraping', link: 'scraping' },
			{ text: '9. Crawling', link: 'scraping' },*/
		],
	},
};
