class Renderer {
    renderElement(elem, parent, classes, dataAttr, attr, innerText, innerHTML) {
        var child = document.createElement(elem);
        var parent = document.querySelector(parent);

        if (typeof classes !== 'undefined') {
            child.classList.add(...classes);
        }

        if (typeof dataAttr !== 'undefined') {
            for (var key in dataAttr) {
                child.dataset[key] = dataAttr[key];
            }
        }

        if (typeof attr !== 'undefined') {
            for (var key in attr) {
                child[key] = attr[key];
            }
        }

        if (typeof innerText !== 'undefined') {
            child.innerText = innerText;
        }

        if (typeof innerHTML !== 'undefined') {
            child.innerHTML = innerHTML;
        }

        if (typeof parent !== 'undefined') {
            parent.appendChild(child);
        }
    }
}

class CustomCalendar extends Renderer {
    constructor(selectedDate = new Date(), container) {
        super();
        this.selectedDate = selectedDate;
        this.selectedYear = selectedDate.getFullYear();
        this.selectedMonth = selectedDate.getMonth() - 1;
        this.selectedDay = selectedDate.getDate();
        this.displayingMonth = this.selectedMonth;
        this.displayingYear = this.selectedYear;
        this.container = container;
    }

    static getFormattedDate(year, month, day) {
        var formattedDate = new Date(year, month, day).toLocaleString('en-GB', {
            day: 'numeric',
            year: 'numeric',
            month: 'numeric',
        });

        return formattedDate;
    }

    buildCalendar() {
        super.renderElement('custom-calendar', this.container, ['custom-calendar']);
        super.renderElement(
            'div',
            '.custom-calendar',
            ['custom-calendar__content'],
            undefined,
            undefined,
            undefined,
            DatepickerTemplates.calendarStructureTemplate
        );

        document.querySelector('.custom-calendar__content').style.display = 'none';

        super.renderElement(
            'button',
            '.custom-calendar',
            ['custom-calendar__btn'],
            undefined,
            {"id": "run-btn"},
            undefined,
            'calendar <i class="far fa-calendar-alt"></i>'
        );

        super.renderElement(
            'input',
            '.custom-calendar__datepicker-container',
            ['custom-calendar__input'],
            {"mask": "__/__/____"},
            {
                "type": "text",
                "id": "datepicker",
                "value": CustomCalendar.getFormattedDate(this.selectedYear, this.selectedMonth, this.selectedDay)
            }
        );

        super.renderElement(
            'button',
            '.custom-calendar__datepicker-container',
            ['custom-calendar__btn', 'custom-calendar__btn--today'],
            undefined,
            {"id": "today-btn"},
            'today'
        );

        var prevMonth = document.querySelector('#preMonth');
        var nextMonth = document.querySelector('#nextMonth');
        var close = document.querySelector('#close');
        var weekdays = document.querySelectorAll('.custom-calendar__weekday');
        var weekdaysArr = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

        prevMonth.innerHTML = '<i class="fas fa-angle-double-left"></i>';
        nextMonth.innerHTML = '<i class="fas fa-angle-double-right"></i>';
        close.innerHTML = '<i class="far fa-times-circle"></i>';

        weekdays.forEach((elem, index) => {
            elem.innerText = weekdaysArr[index];
        } );
    }

    applyStyles() {
        super.renderElement(
            'style',
            '.custom-calendar',
            undefined,
            undefined,
            {"type": "text/css"},
            undefined,
            DatepickerTemplates.styles
        );
    }

    initEvents() {
        var prevMonth = document.querySelector('#preMonth');
        var nextMonth = document.querySelector('#nextMonth');
        var close = document.querySelector('#close');
        var tbody = document.querySelector('.custom-calendar__days');
        var runbtn = document.querySelector('#run-btn');
        var todayBtn = document.querySelector('#today-btn');
        var dateInput = document.querySelector('.custom-calendar__input');
        var tableContainer = document.querySelector('.custom-calendar__content');

        var showPreMonth = e => {
            this.displayingMonth = this.displayingMonth - 1;
            dateInput.value = CustomCalendar.getFormattedDate(this.displayingYear, this.displayingMonth, 1);
            this.initLogic();
        }

        var showNextMonth = e => {
            this.displayingMonth = this.displayingMonth + 1;
            dateInput.value = CustomCalendar.getFormattedDate(this.displayingYear, this.displayingMonth, 1);
            this.initLogic();
        }

        var hideCalendar = e => {
            tableContainer.style.display = 'none';
            runbtn.style.display = '';
        }

        var showCalendar = e => {
            e.target.style.display = 'none';
            tableContainer.style.display = '';
        }

        var selectDay = e => {
            var day = e.target.innerText;
            var isPreviousMonth = e.target.getAttribute('data-is-previous');
            var isNextMonth = e.target.getAttribute('data-is-next');
            var increment = isPreviousMonth ? -1 : isNextMonth ? 1 : 0;

            this.displayingMonth = this.displayingMonth + increment;
            this.selectedYear = this.displayingYear;
            this.selectedDay = day;
            this.selectedMonth = this.displayingMonth;
            dateInput.value = CustomCalendar.getFormattedDate(this.selectedYear, this.selectedMonth, this.selectedDay);
            this.initLogic();

            e.target.removeEventListener('click', selectDay);
        }

        var showCurDate = e => {
            this.selectedYear = new Date().getFullYear();
            this.selectedMonth = new Date().getMonth();
            this.selectedDay = new Date().getDate();
            this.displayingYear = this.selectedYear;
            this.displayingMonth = this.selectedMonth;
            dateInput.value = CustomCalendar.getFormattedDate(this.selectedYear, this.selectedMonth, this.selectedDay);
            this.initLogic();
        }

        prevMonth.onclick = showPreMonth;
        nextMonth.onclick = showNextMonth;
        close.onclick = hideCalendar;
        runbtn.onclick = showCalendar;
        todayBtn.onclick = showCurDate;
        tbody.addEventListener('click', selectDay);

        tbody.onmouseover = e => {
            e.target.style.backgroundColor = '#fff';
        };

        tbody.onmouseout = e => {
            e.target.style.backgroundColor = '';
        };
    }

    initLogic() {
        var lastDayOfMonth = new Date(this.displayingYear, this.displayingMonth + 1, 0).getDate();
        var firstDayOfWeekOfCurMonth = new Date(this.displayingYear, this.displayingMonth, 1).getDay();
        var lastDayOfWeekOfCurMonth = new Date(this.displayingYear, this.displayingMonth + 1, 0).getDay();
        var status = document.querySelector('.control-panel__status');
        var displayingDate = new Date(this.displayingYear, this.displayingMonth);
        var parent = '.custom-calendar__days';
        var _ = undefined;

        var classes = {
            weekday: ['custom-calendar__day'],
            weekend: ['custom-calendar__day', 'custom-calendar__day--weekend'],
            weekdayOfOtherMonth: ['custom-calendar__day', 'custom-calendar__day--other-month'],
            weekendOfOtherMonth: ['custom-calendar__day', 'custom-calendar__day--other-month', 'custom-calendar__day--weekend'],
            selectedWeekday: ['custom-calendar__day', 'custom-calendar__day--selected'],
            selectedWeekend: ['custom-calendar__day', 'custom-calendar__day--selected', 'custom-calendar__day--weekend'],
        };

        var dataAttr = {
            isPrevious: {
                "isPrevious": "true"
            },
            isNext: {
                "isNext": "true"
            }
        };

        status.innerHTML = displayingDate.toLocaleString('en', {
            month: 'long',
            year: 'numeric'
        });

        document.querySelector('.custom-calendar__days').innerHTML = '';

        if (firstDayOfWeekOfCurMonth !== 0) {
            for (var dayOfWeek = 1; dayOfWeek < firstDayOfWeekOfCurMonth; dayOfWeek++) {
                var displayingDayOfWeek = -(firstDayOfWeekOfCurMonth - 1) + dayOfWeek;
                var preDate = new Date(this.displayingYear, this.displayingMonth, displayingDayOfWeek);
                var dayOfPreMonth = preDate.getDate();

                super.renderElement('td', parent, classes.weekdayOfOtherMonth, dataAttr.isPrevious, _, dayOfPreMonth);
            }
        } else {
            for (var dayOfWeek = 5; dayOfWeek >= 0; dayOfWeek--) {
                var preDate = new Date(this.displayingYear, this.displayingMonth, (firstDayOfWeekOfCurMonth - dayOfWeek));
                var dayOfPreMonth = preDate.getDate();
                var dayOfWeekOfPreMonth = preDate.getDay();
                var isWeekend = dayOfWeekOfPreMonth > 5 || dayOfWeekOfPreMonth === 0;

                if (isWeekend) {
                    super.renderElement('td', parent, classes.weekendOfOtherMonth, dataAttr.isPrevious, _, dayOfPreMonth);
                } else {
                    super.renderElement('td', parent, classes.weekdayOfOtherMonth, dataAttr.isPrevious, _, dayOfPreMonth);
                }
            }
        }

        for (var day = 1; day <= lastDayOfMonth; day++) {

            var dayOfWeek = new Date(this.displayingYear, this.displayingMonth, day).getDay();
            var isSelected =
                this.displayingYear == this.selectedYear &&
                this.displayingMonth == this.selectedMonth &&
                day == this.selectedDay;

            var isWeekend = dayOfWeek === 6 || dayOfWeek === 0;

            if (isSelected) {
                if (isWeekend) {
                    super.renderElement('td', parent, classes.selectedWeekend, _, _, day);
                } else {
                    super.renderElement('td', parent, classes.selectedWeekday, _, _, day);
                }

                if (dayOfWeek === 0) {
                    super.renderElement('tr', parent);
                }
                continue;
            }

            if (isWeekend) {
                super.renderElement('td', parent, classes.weekend, _, _, day);
            } else {
                super.renderElement('td', parent, classes.weekday, _, _, day);
            }

            if (dayOfWeek === 0) {
                super.renderElement('tr', parent);
            }
        }

        if (lastDayOfWeekOfCurMonth !== 0) {
            for (var dayOfWeek = lastDayOfWeekOfCurMonth + 1, day = 1; dayOfWeek <= 7; dayOfWeek++, day++) {
                var nextDate = new Date(this.displayingYear, this.displayingMonth, lastDayOfMonth + day);
                var dayOfNextMonth = nextDate.getDate();
                var dayOfWeekOfNextMonth = nextDate.getDay();
                var isWeekend = dayOfWeekOfNextMonth === 6 || dayOfWeekOfNextMonth === 0;

                if (isWeekend) {
                    super.renderElement('td', parent, classes.weekendOfOtherMonth, dataAttr.isNext, _, dayOfNextMonth);
                } else {
                    super.renderElement('td', parent, classes.weekdayOfOtherMonth, dataAttr.isNext, _, dayOfNextMonth);
                }
            }
        }
    }

    dateInputValidator() {
        var field = document.querySelector('.custom-calendar__input');
        var mask = field.dataset.mask.split('');

        function stripMask(maskedData) {
            function isDigit(char) {
                return /\d/.test(char);
            }
            return maskedData
                .split('')
                .filter(isDigit);
        }

        function applyMask(data) {
            return mask.map(function (char) {
                if (char !== '_') {
                    return char;
                }
                if (data.length == 0) {
                    return char;
                }

                return data.shift();
            }).join('')
        }

        function reapplyMask(data) {
            return applyMask(stripMask(data));
        }

        var changed = e => {
            var oldStart = field.selectionStart;
            var oldEnd = field.selectionEnd;

            field.value = reapplyMask(field.value);
            field.selectionStart = oldStart;
            field.selectionEnd = oldEnd;

            if (e.keyCode === 13) {
                var exportDate = String(field.value)
                    .split('/')
                    .map(elem => {

                    return Number(elem);
                });

                this.selectedYear = exportDate[2];
                this.selectedMonth = exportDate[1] - 1;
                this.selectedDay = exportDate[0];
                this.displayingYear = this.selectedYear;
                this.displayingMonth = this.selectedMonth;
                this.initLogic();
            }
        }

        field.addEventListener('keyup', changed);
    }
}