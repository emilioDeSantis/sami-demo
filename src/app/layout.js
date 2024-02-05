import "./globals.css";

export const metadata = {
    title: "Rico Valenti - Private Chef",
    description: "This is a demo.",
    openGraph: {
        title: "Rico Valenti - Private Chef",
        description:
            "This is a demo.",
        url: "https://sami-demo.vercel.app/",
        siteName: "ricovalenti.com",
        images: [
            {
                url: "https://sami-demo.vercel.app/og.png",
                width: 1125,
                height: 1683,
            },
        ],
        locale: "en_US",
        type: "website",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
