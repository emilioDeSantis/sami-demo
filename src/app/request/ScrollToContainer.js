const ScrollToContainer = ({ step, children }) => {
    return (
        <div
            style={{
                display: "flex",
                width: "100%",
                position: "relative",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <div
                id={step}
                style={{
                    position: "absolute",
                    top: "-15rem",
                    // height: "10px",
                    // width: "100%",
                    // background: "red",
                }}
            />
            {children}
        </div>
    );
};

export default ScrollToContainer;
