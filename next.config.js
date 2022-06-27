/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_CONTACT_API_URL: `https://codehustler.herokuapp.com/ContactData`,
    NEXT_PUBLIC_BLOG_API_URL: `https://codehustle.herokuapp.com/BlogData`,
    NEXT_PUBLIC_BLOG_READ_API_URL: `https://codehustler.herokuapp.com/BlogRead/`,
    NEXT_PUBLIC_BLOG_SINGLE_API_URL: 'https://codehustler.herokuapp.com/BlogReadOne',
    
  },
}

module.exports = nextConfig

