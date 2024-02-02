"use client";

import React, { use, useEffect, useState } from "react";
import {
    startOfMonth,
    endOfMonth,
    eachDayOfInterval,
    addMonths,
    format,
    getDay,
} from "date-fns";
import LocationSelector from "./Locationselector";
import MonthSelector from "./MonthSelector";
import DayGrid from "./DaySelector";
import HourSelector from "./HourSelector";
import GuestsSelector from "./GuestsSelector";
import ScrollToContainer from "./ScrollToContainer";
import Footer from "./Footer";

export const color = "#991133";
export const transition = "0.5s";

const Calendar = () => {
    const [step, setStep] = useState(0);
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [date, setDate] = useState(null);
    const [hour, setHour] = useState(null);
    const [guests, setGuests] = useState(null);
    const [location, setLocation] = useState(null);

    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [name, setName] = useState("");

    const handleNameChange = (e) => setName(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePhoneChange = (e) => setPhone(e.target.value);

    const handleClosePopup = () => {
        setStep(3); // Go back to step 4 upon closing the popup
    };

    const handleSubmitPopup = (e) => {
        e.preventDefault();
        // Handle the form submission logic here
        console.log("Form submitted");
        setStep(6);
        // Potentially move to a new step or close the popup
    };

    const handleRequestCall = () => {
        // Logic to handle phone call request
        console.log("Phone call requested");
        // Potentially close the popup or show a confirmation message
    };

    useEffect(() => {
        const element = document.getElementById(step);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }, [step]);

    const availableDates = [
        "2024-02-10",
        "2024-02-12",
        "2024-02-13",
        "2024-02-15",
        "2024-02-18",
        "2024-02-19",
        "2024-02-23",
        "2024-02-25",
        "2024-02-27",
        "2024-03-01",
        "2024-03-05",
        "2024-03-06",
        "2024-03-05",
        "2024-03-20",
        "2024-03-25",
        "2024-04-10",
        "2024-04-15",
    ];

    const startDay = startOfMonth(currentMonth);
    const endDay = endOfMonth(currentMonth);
    const days = eachDayOfInterval({ start: startDay, end: endDay });
    const firstDayOfWeek = getDay(startDay);

    const isDateAvailable = (date) =>
        availableDates.includes(format(date, "yyyy-MM-dd"));

    const selectDate = (day) => {
        if (step > 0) {
            setStep(0);
            return;
        }
        if (!isDateAvailable(day)) return;
        setDate(format(day, "yyyy-MM-dd"));
        setStep(1);
    };
    const selectHour = (hour) => {
        if (step != 1) {
            setStep(1);
            return;
        }
        setHour(hour);
        setStep(2);
    };

    const selectGuests = (guests) => {
        if (step != 3) {
            setStep(3);
            return;
        }
        setGuests(guests);
        setStep(4);
    };

    useEffect(() => {
        console.log("step:", step);
    }, [step]);

    return (
        <div
            style={{
                color: color,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
            }}
        >
            <ScrollToContainer step={0}>
                <MonthSelector
                    currentMonth={currentMonth}
                    setCurrentMonth={setCurrentMonth}
                    step={step}
                />
            </ScrollToContainer>
            <DayGrid
                days={days}
                firstDayOfWeek={firstDayOfWeek}
                selectDate={selectDate}
                date={date}
                isDateAvailable={isDateAvailable}
                step={step}
            />
            <ScrollToContainer step={1}>
                <HourSelector hour={hour} selectHour={selectHour} step={step} />
            </ScrollToContainer>

            <ScrollToContainer step={2}>
                <LocationSelector
                    location={location}
                    setLocation={setLocation}
                    step={step}
                    setStep={setStep}
                />
            </ScrollToContainer>

            <ScrollToContainer step={3}>
                <GuestsSelector
                    guests={guests}
                    selectGuests={selectGuests}
                    step={step}
                />
            </ScrollToContainer>
            <ScrollToContainer step={4}>
                <button
                    style={{
                        marginTop: "3rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginInline: "1.6rem",
                        paddingInline: "4rem",
                        paddingBlock: "0.5rem",
                        gap: "0.8rem",
                        borderRadius: "5px",
                        background: color,
                        color: "white",
                        border: "none",
                        fontSize: "1rem",
                        opacity: step === 4 ? 1 : 0.5,
                        transition: transition,
                    }}
                    onClick={() => setStep(5)}
                >
                    Submit request
                </button>
            </ScrollToContainer>
            <div
                style={{
                    height: "100rem",
                }}
            />
            {step === 5 && (
                <div
                    onClick={handleClosePopup}
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0, 0, 0, 0.1)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 100,
                    }}
                >
                    <div
                        onClick={(e) => e.stopPropagation()} // Prevent click from bubbling to the background
                        style={{
                            backgroundColor: "#fff",
                            paddingInline: "1.6rem",
                            paddingBlock: "2rem",
                            marginInline: "1rem",

                            display: "flex",
                            flexDirection: "column",
                            boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)",
                        }}
                    >
                        <form
                            onSubmit={handleSubmitPopup}
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "1rem",
                            }}
                        >
                            <h2
                                style={{
                                    fontSize: "1.2rem",
                                    fontWeight: 600,
                                    marginBottom: "1.6rem",
                                }}
                            >
                                You're almost there! Just need a bit more info.
                            </h2>
                            <input
                                className="input"
                                type="text"
                                placeholder="Name"
                                required
                                value={name} // Bind state to input
                                onChange={handleNameChange} // Update state on change
                            />
                            <input
                                className="input"
                                type="email"
                                placeholder="Email"
                                required
                                value={email} // Bind state to input
                                onChange={handleEmailChange} // Update state on change
                            />
                            <input
                                className="input"
                                type="tel"
                                placeholder="Phone Number"
                                required
                                value={phone} // Bind state to input
                                onChange={handlePhoneChange} // Update state on change
                            />
                            <div
                                style={{
                                    display: "flex",
                                    gap: "1rem",
                                    width: "100%",
                                    marginTop: "0.4rem",
                                }}
                            >
                                <button
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        paddingInline: "1rem",
                                        paddingBlock: "0.3rem",
                                        gap: "0.8rem",
                                        borderRadius: "5px",
                                        border: `1px solid ${color}`,
                                        background: "transparent",
                                        color: color,
                                        fontSize: "1rem",
                                    }}
                                    onClick={handleClosePopup}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                        style={{
                                            width: "1.3rem",
                                            marginInline: "-0.6rem",
                                        }}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15.75 19.5 8.25 12l7.5-7.5"
                                        />
                                    </svg>
                                    back
                                </button>
                                <button
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        width: "100%",
                                        paddingBlock: "0.3rem",
                                        gap: "0.8rem",
                                        borderRadius: "5px",
                                        background: color,
                                        color: "white",
                                        border: "none",
                                        fontSize: "1rem",
                                    }}
                                    type="submit"
                                >
                                    Submit Request
                                    {/* <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                        style={{ width: "1.3rem",}}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                                        />
                                    </svg> */}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            {step === 6 && (
                <div
                    onClick={handleClosePopup}
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0, 0, 0, 0.1)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 100,
                    }}
                >
                    <div
                        onClick={(e) => e.stopPropagation()} // Prevent click from bubbling to the background
                        style={{
                            backgroundColor: "#fff",
                            paddingInline: "1.6rem",
                            paddingBlock: "2rem",
                            marginInline: "1rem",

                            display: "flex",
                            flexDirection: "column",
                            boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)",
                        }}
                    >
                        <h2
                            style={{
                                fontSize: "1.2rem",
                                fontWeight: 600,
                                marginBottom: "1.6rem",
                            }}
                        >
                            Submission Confirmed!
                        </h2>
                        <p>Your request has been submitted successfully.</p>

                        <p>{`A confirmation email has been sent to ${email} and you will hear from Rico Valenti within 24 hours.`}</p>
                        <div
                            style={{
                                display: "flex",
                                gap: "1rem",
                                width: "100%",
                                marginTop: "0.4rem",
                            }}
                        >
                            <button
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    paddingInline: "1rem",
                                    paddingBlock: "0.3rem",
                                    gap: "0.8rem",
                                    borderRadius: "5px",
                                    border: `1px solid ${color}`,
                                    background: "transparent",
                                    color: color,
                                    fontSize: "1rem",
                                }}
                                onClick={handleClosePopup}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                    style={{
                                        width: "1.3rem",
                                        marginInline: "-0.6rem",
                                    }}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15.75 19.5 8.25 12l7.5-7.5"
                                    />
                                </svg>
                                done
                            </button>
                            <button
                                onClick={handleRequestCall}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: "100%",
                                    paddingBlock: "0.3rem",
                                    gap: "0.8rem",
                                    borderRadius: "5px",
                                    background: color,
                                    color: "white",
                                    border: "none",
                                    fontSize: "1rem",
                                }}
                            >
                                Request a Phone Call
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <Footer step={step} />
        </div>
    );
};

export default Calendar;
