import withFlowbiteReact from "flowbite-react/plugin/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
   // ...existing code...
images: {
    remotePatterns: [
        {
            protocol: "https",
            hostname: "flowbite.com",
            pathname: "/docs/images/products/*"
        }
    ]
}
// ...existing code...
};

export default withFlowbiteReact(nextConfig);