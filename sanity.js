import { createClient } from "@sanity/client"; // Importing named export createClient instead of default export
import imageUrlBuilder from "@sanity/image-url";

// Initialize Sanity client (Replace placeholders with your details)
export const client = createClient({
  projectId: "7lg99naw", // Replace with your actual project ID
  dataset: "production", // Replace with your actual dataset name
  apiVersion: "2022-03-10", // Specify the API version you want to use (consider using latest version)
  useCdn: true, // Use the Content Delivery Network for faster response times
});

// Initialize image URL builder
const builder = imageUrlBuilder(client);

// Function to generate image URLs
export const urlFor = (source) => builder.image(source);

export default client; // Export the Sanity client
