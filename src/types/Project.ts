import type {ImageMetadata} from "astro"


export type Project = {
	title: string
	longDescription: string
	shortDescription: string
	image: ImageMetadata
	liveLink: string
	repoLink?: string
	technologies: string[]
	keywords: string[]
}