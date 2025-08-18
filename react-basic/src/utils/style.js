export const customStyles = { color: "yellow", backgroundColor: "aqua", padding: 20 };

export const logoStyles = {
    width:100,
    height:100,
    objectFit: "contain"
}

export const btnStyles = (isMobile) => {
    return{
        backgroundColor: isMobile ? "blue" : "yellow",
        color: "#fff",
    };
};
