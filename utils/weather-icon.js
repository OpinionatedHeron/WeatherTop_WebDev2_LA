const getWeatherIcon = (code) => {
    let weather;
    if (code === 0) {
        weather = "{{>icons/clear}}";
    } else if (code >= 200 && code <= 235) {
        weather = "{{>icons/thunderstorm}}";
    } else if (code >= 300 && code <= 321) {
        weather = "{{>icons/drizze}}";
    } else if (code >= 500 && code <= 531) {
        weather = "{{>icons/rain}}";
    } else if (code >= 600 && code <= 622) {
        weather = "{{>icons/snow}}";
    } else if (code >= 701 && code <= 781) {
        weather = "{{>icons/atmosphere}}";
    } else if (code >= 801 && code <= 805) {
        weather = "{{>icons/clouds}}";
    } else if (code === 800) {
        weather = "{{>icons/clear}}";
    }
    return weather;
};

export default getWeatherIcon;