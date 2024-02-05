// Footer.js or directly within your Calendar.js file

import { color, transition } from "./page";

const Footer = ({ step }) => {
    let instructions = "";
    switch (step) {
        case 0:
            instructions = "Select a date for your booking.";
            break;
        case 1:
            instructions =
                "Select the time you would like the meal to be served.";
            break;
        case 2:
            instructions = "Select the location of the event.";
            break;
        case 3:
            instructions = "Select the number of guests attending.";
            break;
            case 4:
            instructions = "Review your details and confirm booking.";
    }

    return (
        <div
            style={{
                color: color,
                marginTop: "20px",
                padding: "10px",
                textAlign: "center",
                width: "100%",
                transition: transition,
                position: "fixed", // Makes the footer fixed at the bottom
                bottom: "0", // Anchors the footer to the bottom of the viewport
                left: "0", // Ensures the footer spans the entire width of the viewport
                backgroundColor: "#fff", // Optional: adds a background color for visibility against page content
                boxShadow: "0 -2px 5px rgba(0,0,0,0.1)", // Optional: adds a slight shadow for depth
                zIndex: 100, // Ensures the footer is above other content
            }}
        >
            {instructions}
        </div>
    );
};

export default Footer;
