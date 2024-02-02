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

const MonthSelector = ({ currentMonth, setCurrentMonth, step }) => {
    const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
    const prevMonth = () => setCurrentMonth(addMonths(currentMonth, -1));

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "3rem",
                height: "3rem",
                opacity: step == 0 ? 1 : 0.5,
                transition: transition,
            }}
        >
            <button
                onClick={prevMonth}
                style={{
                    backgroundColor: "transparent",
                    border: "none",
                    cursor: "pointer",
                    paddingInline: "1rem",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: color,
                }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                    style={{ width: "1.3rem" }}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5 8.25 12l7.5-7.5"
                    />
                </svg>
            </button>
            <span
                style={{
                    fontSize: "1.8rem",
                    fontWeight: 300,
                    width: "10rem",
                    textAlign: "center",
                }}
            >
                {format(currentMonth, "MMMM")}
            </span>
            <button
                onClick={nextMonth}
                style={{
                    backgroundColor: "transparent",
                    border: "none",
                    cursor: "pointer",
                    paddingInline: "1rem",
                    paddingBlock: "1rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: color,
                }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                    style={{ width: "1.3rem" }}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                </svg>
            </button>
        </div>
    );
};

export default MonthSelector;
