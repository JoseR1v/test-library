/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        IMAGE_URL:"https://covers.openlibrary.org/b/id",
        SEARCH_URL:"https://openlibrary.org/search.json?",
        SUBJECT_URL:"https://openlibrary.org/subjects",
        BOOK_URL:"https://archive.org/details/",
        AMAZON_URL:"https://www.amazon.com/dp",
    },
    images: {
        domains: ['covers.openlibrary.org'], 
      },
};

export default nextConfig;
