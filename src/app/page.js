import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Link from "next/link";
import PortfolioItem from "./components/PortfolioItem";

export default function Home() {
    const portfolioItems = [
        {
            color: "#9D5039",
            title: "Classic Caramel Flan with Velvety Dulce de Leche",
            imageSrc: "/flan.png",
            origin: "Inspired by Spanish cuisine",
            description:
                "My Caramel Flan is a homage to tradition - a velvety custard beneath a perfectly caramelized top, each serving enriched with a swirl of dulce de leche and a touch of whipped cream.",
        },
        {
            color: "#547389",
            title: "Pan-Seared Dumplings with Aromatic Accents",
            imageSrc: "/dump.png",
            origin: "A fusion twist on an Asian classic",
            description:
                "Savor the rich heritage and delicate craft with each bite of these Pan-Seared Dumplings. Hand-wrapped with precision, they are a celebration of both tradition and innovation.",
        },
    ];

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <div
                style={{
                    position: "relative",
                    width: "100vw",
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                }}
            >
                <Image
                    src="/hero2.png" // Replace with your image path
                    alt="Chef Rico Valenti"
                    layout="fill"
                    objectFit="cover"
                    priority
                />
                <div
                    style={{
                        position: "absolute",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-end",
                        paddingBlock: "7rem",
                        paddingInline: "2rem",
                        height: "100%",
                        width: "100%",
                        color: "white", // Change this as needed
                    }}
                >
                    <h2
                        style={{
                            fontSize: "1rem",
                            textTransform: "uppercase",
                            fontWeight: 300,
                        }}
                    >
                        Chef
                    </h2>
                    <h1
                        style={{
                            fontSize: "3.2rem",
                            fontWeight: 600,
                        }}
                    >
                        Rico Valenti
                    </h1>
                    <Link href="/request" style={{ marginTop: "1rem" }}>
                        <div
                            style={{
                                border: "1px solid white",
                                padding: "0.6rem 1.6rem",
                                fontSize: "1rem",
                                cursor: "pointer",
                                marginTop: "1rem",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: "0.8rem",
                            }}
                        >
                            Schedule an Event
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-6 h-6"
                                style={{ width: "1rem" }}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                                />
                            </svg>
                        </div>
                    </Link>
                </div>
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    padding: "4rem 2rem", // Adjust the padding as needed
                    width: "100%",
                    margin: "auto",
                }}
            >
                <h2
                    style={{
                        marginBottom: "1rem",
                        fontSize: "1.6rem", // Adjust the font size as needed
                        fontWeight: "600", // Adjust the font weight as needed
                        opacity: 0.9,
                    }}
                >
                    Private Chef Services
                </h2>
                <p
                    style={{
                        marginBottom: "2rem",
                        fontWeight: 400, // Adjust the font weight as needed
                        color: "#000", // Adjust the color as needed
                        opacity: 0.7,
                    }}
                >
                    {`Rico Valenti is a renowned culinary artisan specializing in
                    avant-garde fusion cuisine, offering exclusive private chef
                    services for connoisseurs of exquisite dining experiences.`}
                </p>
                <Link
                    href="/request"
                    style={{
                        display: "flex",
                        border: "1px solid #000",
                        padding: "0.6rem 1.6rem",
                        fontSize: "1rem",
                        cursor: "pointer",
                        backgroundColor: "transparent",
                        color: "#000",
                        transition: "background-color 0.3s ease",
                        marginTop: "1rem", // Adjust the margin as needed
                        opacity: 0.8,
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "0.8rem",
                    }}
                >
                    See availability
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-6 h-6"
                        style={{ width: "1rem" }}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        />
                    </svg>
                </Link>
                <div
                    style={{
                        height: "0.5px",
                        background: "black",
                        opacity: 0.8,
                        width: "100%",
                        marginTop: "2.4rem",
                    }}
                />
                <h2
                    style={{
                        marginTop: "3rem",
                        fontSize: "1.6rem", // Adjust the font size as needed
                        fontWeight: "600", // Adjust the font weight as needed
                        opacity: 0.9,
                    }}
                >
                    Portfolio
                </h2>
                <p
                    style={{
                        marginTop: "1rem",
                        fontWeight: 400, // Adjust the font weight as needed
                        color: "#000", // Adjust the color as needed
                        opacity: 0.7,
                    }}
                >
                    {`Explore the culinary journey of Chef Rico Valenti, where each dish is a masterpiece blending innovation with tradition.`}
                </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
                {portfolioItems.map((item, i) => (
                    <PortfolioItem
                        key={i}
                        color={item.color}
                        index={i + 1}
                        title={item.title}
                        imageSrc={item.imageSrc}
                        origin={item.origin}
                        description={item.description}
                    />
                ))}
            </div>
            <div
                style={{
                    display: "flex",
                    paddingInline: "2rem",
                    width: "100%",
                    // marginTop: "1rem",
                }}
            >
                <Link
                    href="/request"
                    style={{
                        width: "100%",
                        color: "#fff",
                    }}
                >
                    <div
                        style={{
                            border: "1px solid black",
                            padding: "0.6rem",
                            width: "100%",
                            fontSize: "1rem",
                            cursor: "pointer",
                            marginTop: "1rem",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "0.8rem",
                            background: "#222b42",
                        }}
                    >
                        Book Chef Valenti
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-6 h-6"
                            style={{ width: "1rem" }}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                            />
                        </svg>
                    </div>
                </Link>
            </div>
            <div style={{
              height: "4rem",
            }}/>
        </div>
    );
}
