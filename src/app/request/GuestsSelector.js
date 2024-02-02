import ScrollToContainer from "./ScrollToContainer";
import { color, transition } from "./page";

const GuestsSelector = ({ guests, selectGuests, step }) => {
    const guestsOptions = [
        "1",
        "2",
        "3",
        "4",
        "5-6",
        "7-9",
        "10-14",
        "15-19",
        "20-29",
        "30-39",
        "40-49",
        "50+",
    ];
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                transition: transition,
                marginTop: "4rem",
                opacity: step === 3 ? 1 : 0.5,
                width: step === 3 ? "100%" : "70%",
                paddingInline: "1.6rem",
                alignItems: "center",
            }}
        >
            <div
                style={{
                    fontSize: "1.2rem",
                    fontWeight: 600,
                    marginBottom: "1rem",
                }}
            >
                Number of Guests
            </div>
            <div
                style={{
                    display: "grid",
                    marginTop: "1rem",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: "3px",
                    width: "100%",
                }}
            >
                {guestsOptions.map((guestsOption) => (
                    <div
                        key={guestsOption}
                        onClick={() => selectGuests(guestsOption)}
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            color: guests === guestsOption ? "white" : color,
                            backgroundColor:
                                guests === guestsOption ? color : "transparent",
                            // borderRadius: "5px",
                            cursor: "pointer",
                            fontWeight: 600,
                            paddingBlock: "0.7rem",
                            width: "100%",
                            fontSize: "0.9rem",
                        }}
                    >
                        {guestsOption}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GuestsSelector;
