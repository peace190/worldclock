function updateClock() {

    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    function setTime(idTime, idDate, timeZone) {

        const now = new Date();

        const time = now.toLocaleTimeString("en-US", {
            timeZone: timeZone,
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true
        });

        const date = now.toLocaleDateString("en-US", {
            timeZone: timeZone,
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        });

        const timeEl = document.getElementById(idTime);
        const dateEl = document.getElementById(idDate);

        if (timeEl && dateEl) {
            timeEl.textContent = time;
            dateEl.textContent = date;

            // ⭐ highlight your country
            if (timeZone === userTimeZone) {
                timeEl.style.color = "#00ffcc";
                timeEl.style.fontWeight = "bold";
            }
        }
    }

    // 🌍 AFRICA
    setTime("nigeria-time", "nigeria-date", "Africa/Lagos");
    setTime("ghana-time", "ghana-date", "Africa/Accra");
    setTime("south-africa-time", "south-africa-date", "Africa/Johannesburg");
    setTime("kenya-time", "kenya-date", "Africa/Nairobi");
    setTime("egypt-time", "egypt-date", "Africa/Cairo");

    // 🌎 AMERICA
    setTime("usa-time", "usa-date", "America/New_York");
    setTime("canada-time", "canada-date", "America/Toronto");
    setTime("brazil-time", "brazil-date", "America/Sao_Paulo");
    setTime("mexico-time", "mexico-date", "America/Mexico_City");
    setTime("argentina-time", "argentina-date", "America/Argentina/Buenos_Aires");

    // 🌍 EUROPE
    setTime("uk-time", "uk-date", "Europe/London");
    setTime("germany-time", "germany-date", "Europe/Berlin");
    setTime("france-time", "france-date", "Europe/Paris");
    setTime("italy-time", "italy-date", "Europe/Rome");
    setTime("spain-time", "spain-date", "Europe/Madrid");

    // 🌏 ASIA
    setTime("dubai-time", "dubai-date", "Asia/Dubai");
    setTime("india-time", "india-date", "Asia/Kolkata");
    setTime("china-time", "china-date", "Asia/Shanghai");
    setTime("japan-time", "japan-date", "Asia/Tokyo");
    setTime("saudi-arabia-time", "saudi-arabia-date", "Asia/Riyadh");

    // 🌏 OCEANIA
    setTime("australia-time", "australia-date", "Australia/Sydney");
    setTime("new-zealand-time", "new-zealand-date", "Pacific/Auckland");
}

setInterval(updateClock, 1000);
updateClock();