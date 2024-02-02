import { color, transition } from "./page";
import {
    startOfMonth,
    endOfMonth,
    eachDayOfInterval,
    addMonths,
    format,
    getDay,
} from "date-fns";

const DayLabels = () => {
    const dayLabels = ["S", "M", "T", "W", "T", "F", "S"];
    return (
        <div
            style={{
                display: "flex",
                paddingInline: "1.6rem",
                width: "100%",
                justifyContent: "center",
                gap: "3px",
            }}
        >
            {dayLabels.map((label, index) => (
                <div
                    key={index}
                    style={{
                        textAlign: "center",
                        fontWeight: 600,
                        fontSize: "0.75rem",
                        marginBottom: "1.6rem",
                        width: "100%",
                    }}
                >
                    {label}
                </div>
            ))}
        </div>
    );
};

const DayGrid = ({
    days,
    firstDayOfWeek,
    selectDate,
    date,
    isDateAvailable,
    step,
}) => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                marginTop: "4rem",
                transition: transition,
                opacity: step > 0 ? 0.5 : 1,
                width: step > 0 ? "70%" : "100%",
            }}
        >
            <DayLabels />
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(7, 1fr)",
                    paddingInline: "1.6rem",
                    width: "100%",
                    justifyContent: "center",
                    gap: "3px",
                }}
            >
                {[...Array(firstDayOfWeek).keys()].map((_, index) => (
                    <div key={index} style={{ width: "100%" }}></div>
                ))}
                {days.map((day, index) => (
                    <DayCell
                        key={index}
                        day={day}
                        selectDate={selectDate}
                        date={date}
                        isDateAvailable={isDateAvailable}
                    />
                ))}
            </div>
        </div>
    );
};

const DayCell = ({ day, selectDate, date, isDateAvailable }) => (
    <div
        onClick={() => selectDate(day)}
        style={{
            width: "100%",
            textAlign: "center",
            aspectRatio: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color:
                date === format(day, "yyyy-MM-dd")
                    ? "white"
                    : isDateAvailable(day)
                    ? color
                    : "#aaaaaa",
            backgroundColor:
                date === format(day, "yyyy-MM-dd") ? color : "transparent",
            border: isDateAvailable(day) ? `1px solid ${color}` : "none",
            fontWeight: isDateAvailable(day) ? 600 : 400,
            // borderRadius: "50%",
        }}
    >
        {format(day, "d")}
    </div>
);

export default DayGrid;