import { createClient } from "next-sanity"
import createImageUrlBuilder from "@sanity/image-url"

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const aPiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;

export const config = {
    projectId,
    dataset,
    aPiVersion,
    useCdn: true,
};

export const sanityClient = createClient(config)
export const urlFor = (source) => createImageUrlBuilder(config).image(source);