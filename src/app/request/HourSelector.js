import ScrollToContainer from "./ScrollToContainer";
import { color, transition } from "./page";
import {
    startOfMonth,
    endOfMonth,
    eachDayOfInterval,
    addMonths,
    format,
    getDay,
} from "date-fns";

const HourSelector = ({ hour, selectHour, step }) => {
    const hourOptions = [11, 12, 13, 14, 15, 18, 19, 20, 21, 22];

    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(5, 1fr)",
                gap: "3px",
                paddingInline: "1.6rem",
                marginTop: "3rem",
                transition: transition,
                opacity: step === 1 ? 1 : 0.5,
                width: step === 1 ? "100%" : "70%",
            }}
        >
            {hourOptions.map((hourOption) => (
                <div
                    key={hourOption}
                    onClick={() => selectHour(hourOption)}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                        color: hour === hourOption ? "white" : color,
                        backgroundColor:
                            hour === hourOption ? color : "transparent",
                        // borderRadius: "1000px",
                        cursor: "pointer",
                        fontWeight: 600,
                        paddingBlock: "0.7rem",
                        width: "100%",
                        fontSize: "0.9rem",
                    }}
                >
                    {format(new Date().setHours(hourOption), "ha")}
                </div>
            ))}
        </div>
    );
};

export default HourSelector;
