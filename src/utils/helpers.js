const random = (max, min) => Math.floor(Math.random() * max + min);

export const randomColor = (prevColor, max = 5, min = 0) => {
    const colors = ["red", "green", "blue", "orange", "pink"];
    let newColor = prevColor;
    while (newColor === prevColor) {
        newColor = colors[random(max, min)];
    }

    return newColor;
};

export const formatDate = (date) => {
    if (!date) {
        return "";
    }
    const hours = `0${date.getHours()}`.slice(-2);
    const minutes = `0${date.getMinutes()}`.slice(-2);
    const seconds = `0${date.getSeconds()}`.slice(-2);

    return `${hours}:${minutes}:${seconds}`;
};
