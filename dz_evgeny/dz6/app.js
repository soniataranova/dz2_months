document.addEventListener('DOMContentLoaded', () => {
    const calendarContainer = document.getElementById('calendar-container');
    const monthYearElement = document.getElementById('month-year');
    const daysContainer = document.getElementById('days');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    const monthNames = [
        "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
        "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
    ];
    const seasons = ["winter", "winter", "spring", "spring", "spring", "summer", "summer", "summer", "fall", "fall", "fall", "winter"];

    let currentMonth = new Date().getMonth();
    let currentYear = new Date().getFullYear();

    const updateCalendar = () => {
        const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

        monthYearElement.textContent = `${monthNames[currentMonth]} ${currentYear}`;

        daysContainer.innerHTML = '';
        for (let i = 0; i < (firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1); i++) {
            daysContainer.innerHTML += '<div></div>';
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const dayElement = document.createElement('div');
            dayElement.textContent = day;
            const dayOfWeek = new Date(currentYear, currentMonth, day).getDay();
            if (dayOfWeek === 6 || dayOfWeek === 0) {
                dayElement.classList.add('weekend');
            }
            daysContainer.appendChild(dayElement);
        }

        const season = seasons[currentMonth];
        calendarContainer.className = `calendar-container season-${season}`;
    };

    prevButton.addEventListener('click', () => {
        if (currentMonth === 0) {
            currentMonth = 11;
            currentYear--;
        } else {
            currentMonth--;
        }
        updateCalendar();
    });

    nextButton.addEventListener('click', () => {
        if (currentMonth === 11) {
            currentMonth = 0;
            currentYear++;
        } else {
            currentMonth++;
        }
        updateCalendar();
    });

    updateCalendar();
});
