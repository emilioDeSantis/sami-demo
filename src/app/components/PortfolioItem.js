// PortfolioItem.js
import Image from "next/image";
import Link from "next/link";

const PortfolioItem = ({
    color,
    index,
    title,
    imageSrc,
    origin,
    description,
}) => {
    const formatIndex = (index) => {
        return index < 10 ? `0${index}` : index;
    };

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                color: color,
                marginBottom: "3rem",
            }}
        >
            <p
                style={{
                    fontSize: "4rem",
                    fontWeight: 200,
                    paddingInline: "2rem",
                }}
            >
                {formatIndex(index)}
            </p>
            <h3
                style={{
                    fontSize: "2rem",
                    fontWeight: 400,
                    paddingInline: "2rem",
                    marginTop: "0.5rem",
                }}
            >
                {title}
            </h3>
            <div
                style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "1 / 1",
                    marginTop: "1.6rem",
                }}
            >
                <Image
                    src={imageSrc}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    sizes="100vw"
                />
            </div>
            <div
                style={{
                    fontSize: "0.8rem",
                    color: color,
                    marginTop: "3rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    paddingInline: "2rem",
                }}
            >
                Origin
            </div>
            <div
                style={{
                    fontSize: "0.8rem",
                    color: color,
                    marginTop: "0.4rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    paddingInline: "2rem",
                }}
            >
                {origin}
            </div>
            <div
                style={{
                    width: "4rem",
                    height: "2px",
                    paddingInline: "2rem",
                    marginTop: "3.6rem",
                    background: color,
                    marginInline: "2rem",
                }}
            />
            <p
                style={{
                    fontSize: "1.4rem",
                    marginTop: "1.6rem",
                    fontWeight: 300,
                    paddingInline: "2rem",
                }}
            >
                {description}
            </p>
            {/* <div
                style={{
                    display: "flex",
                    paddingInline: "2rem",
                    marginTop: "4rem",
                    justifyContent: "space-between",
                    width: "100%",
                }}
            >
                <button
                    style={{
                        display: "flex",
                        alignItems: "center",
                        border: "none",
                        background: "none",
                        cursor: "pointer",
                        color: color,
                        textTransform: "uppercase",
                        fontWeight: 600,
                        fontSize: "0.8rem",
                        paddingBlock: "1rem",
                        gap: "0.4rem",
                    }}
                >
                    Show Details
                    <svg
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ width: "1.5rem" }}
                    >
                        <path
                            d="M5 7.5L10 12.5L15 7.5"
                            stroke="currentColor"
                            strokeWidth={1.6}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
                <button
                    style={{
                        display: "flex",
                        alignItems: "center",
                        border: "none",
                        background: "none",
                        cursor: "pointer",
                        color: color,
                        textTransform: "uppercase",
                        fontWeight: 600,
                        fontSize: "0.8rem",
                        paddingBlock: "1rem",
                        gap: "0.4rem",
                    }}
                >
                    View Ingredients
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-6 h-6"
                        style={{ width: "1.2rem" }}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                        />
                    </svg>
                </button>
            </div> */}
            <div style={{
                width: "100%",
                paddingInline: "2rem",
                marginTop: "3rem",
            }}>
            <div style={{
                background: color,
                height: "0.5px",
                width: '100%',
            }}/></div>
        </div>
    );
};

export default PortfolioItem;
