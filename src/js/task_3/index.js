(function () {
    CustomCalendar = function CustomCalendar(selectedDate, containerID) {

        var selectedDate = selectedDate || new Date();
        var selectedYear = selectedDate.getFullYear();
        var selectedMonth = selectedDate.getMonth() - 1;
        var selectedDay = selectedDate.getDate();
        var displayingMonth = selectedMonth;
        var displayingYear = selectedYear;

        var datepickerContainer = createDatepickerContainer();
        var tableContainer = createTableContainer();
        var runbtn = createRunBtn();
        var todayBtn = createTodayBtn();
        var dateInput = createDateInput();

        applyStyles();
        registerComponent();
        initEvents();
        applyDataMask(dateInput);

        function createDatepickerContainer() {
            var datepickerContainer = document.createElement('custom-calendar');

            datepickerContainer.className = 'custom-calendar';

            document.getElementById(containerID).appendChild(datepickerContainer);

            return datepickerContainer;
        }

        function applyStyles() {
            var style = document.createElement('style');

            style.type = 'text/css';
            style.innerHTML = DatepickerTemplates.styles;

            var prevMonth = document.querySelector('#preMonth');
            var nextMonth = document.querySelector('#nextMonth');
            var close = document.querySelector('#close');

            prevMonth.innerHTML = '<i class="fas fa-angle-double-left"></i>';
            nextMonth.innerHTML = '<i class="fas fa-angle-double-right"></i>';
            close.innerHTML = '<i class="far fa-times-circle"></i>';

            datepickerContainer.insertBefore(style, tableContainer);
        }

        function createTableContainer() {

            var tableContainer = document.createElement('div');

            datepickerContainer.appendChild(tableContainer);
            tableContainer.style.display = 'none';
            tableContainer.className = 'custom-calendar__content';
            tableContainer.innerHTML = DatepickerTemplates.calendarStructureTemplate;

            return tableContainer;
        }

        function createRunBtn() {

            var runbtn = document.createElement('button');

            runbtn.innerHTML = 'calendar <i class="far fa-calendar-alt"></i>';
            runbtn.id = 'run-btn';
            runbtn.className = 'custom-calendar__btn';

            datepickerContainer.appendChild(runbtn);

            return runbtn;
        }

        function createTodayBtn() {

            var todayBtn = document.createElement('button');

            todayBtn.innerText = 'today';
            todayBtn.id = 'today-btn';
            todayBtn.classList.add('custom-calendar__btn', 'custom-calendar__btn--today');

            document.querySelector('table thead tr:nth-of-type(2) td:first-child').appendChild(todayBtn);

            return todayBtn;
        }

        function getFormattedDate(year, month, day) {

            var formattedDate = new Date(year, month, day).toLocaleString('en-GB', {
                day: 'numeric',
                year: 'numeric',
                month: 'numeric',
            });

            return formattedDate;
        }

        function initEvents() {

            var prevMonth = document.querySelector('#preMonth');
            var nextMonth = document.querySelector('#nextMonth');
            var close = document.querySelector('#close');
            var tbody = document.querySelector('.custom-calendar__days');

            prevMonth.addEventListener('click', function (e) {
                e = e || event;
                displayingMonth = displayingMonth - 1;
                dateInput.value = getFormattedDate(displayingYear, displayingMonth, 1);
                drawCalendar();
                e.stopImmediatePropagation();
            });

            nextMonth.addEventListener('click', function (e) {
                e = e || event;
                displayingMonth = displayingMonth + 1;
                dateInput.value = getFormattedDate(displayingYear, displayingMonth, 1);
                drawCalendar();
                e.stopImmediatePropagation();
            });

            close.addEventListener('click', function (e) {
                e = e || event;
                tableContainer.style.display = 'none';
                runbtn.style.display = '';
                e.stopImmediatePropagation();
            });

            runbtn.addEventListener('click', function (e) {
                this.style.display = 'none';
                drawCalendar();
                tableContainer.style.display = '';
            });

            tbody.addEventListener('mouseover', function (e) {
                e.target.style.backgroundColor = '#fff';
            });

            tbody.addEventListener('mouseout', function (e) {
                e.target.style.backgroundColor = '';
            });

            tbody.addEventListener('click', function (e) {
                var day = e.target.innerText;
                var isPreviousMonth = e.target.getAttribute('data-is-previous');
                var isNextMonth = e.target.getAttribute('data-is-next');
                var increment = isPreviousMonth ? -1 : isNextMonth ? 1 : 0;

                displayingMonth = displayingMonth + increment;
                selectedYear = displayingYear;
                selectedDay = day;
                selectedMonth = displayingMonth;
                dateInput.value = getFormattedDate(selectedYear, selectedMonth, selectedDay);

                drawCalendar();
            });

            todayBtn.onclick = function (e) {
                selectedYear = new Date().getFullYear();
                selectedMonth = new Date().getMonth();
                selectedDay = new Date().getDate();
                displayingYear = selectedYear;
                displayingMonth = selectedMonth;
                dateInput.value = getFormattedDate(selectedYear, selectedMonth, selectedDay);

                drawCalendar();
            }
        }

        function createDateInput() {

            var dateInput = document.querySelector('.custom-calendar__input');
            var innerInput = getFormattedDate(selectedYear, selectedMonth, selectedDay);

            dateInput.type = 'text';
            dateInput.id = 'datepicker';
            dateInput.dataset.mask = "__/__/____";
            dateInput.value = innerInput;

            return dateInput;
        }

        function registerComponent() {

            var CustomCalendarProto = Object.create(HTMLElement.prototype);

            document.registerElement('custom-calendar', {
                prototype: CustomCalendarProto
            });
        }

        function drawCalendar() {

            var lastDayOfMonth = new Date(displayingYear, displayingMonth + 1, 0).getDate();
            var firstDayOfWeekOfCurMonth = new Date(displayingYear, displayingMonth, 1).getDay();
            var lastDayOfWeekOfCurMonth = new Date(displayingYear, displayingMonth + 1, 0).getDay();

            document.querySelector('.custom-calendar__days').innerHTML = '';

            if (firstDayOfWeekOfCurMonth !== 0) {
                for (var dayOfWeek = 1; dayOfWeek < firstDayOfWeekOfCurMonth; dayOfWeek++) {
                    var dayOfPreMonth = new Date(displayingYear, displayingMonth, (-(firstDayOfWeekOfCurMonth - 1) + dayOfWeek)).getDate();
                    var classes = [
                        'custom-calendar__day',
                        'custom-calendar__day--other-month'
                    ];

                    renderElem('td', classes, '.custom-calendar__days', 'isPrevious');
                }
            } else {
                for (var dayOfWeek = 5; dayOfWeek >= 0; dayOfWeek--) {
                    var preDate = new Date(displayingYear, displayingMonth, (firstDayOfWeekOfCurMonth - dayOfWeek));
                    var dayOfPreMonth = preDate.getDate();
                    var dayOfWeekOfPreMonth = preDate.getDay();

                    if (dayOfWeekOfPreMonth > 5 || dayOfWeekOfPreMonth === 0) {
                        var classes = [
                            'custom-calendar__day',
                            'custom-calendar__day--other-month',
                            'custom-calendar__day--day-off'
                        ];

                        renderElem('td', classes, '.custom-calendar__days', 'isPrevious');
                    } else {
                        var classes = [
                            'custom-calendar__day',
                            'custom-calendar__day--other-month'
                        ];

                        renderElem('td', classes, '.custom-calendar__days', 'isPrevious');
                    }
                }
            }

            for (var day = 1; day <= lastDayOfMonth; day++) {
                var dayOfWeek = new Date(displayingYear, displayingMonth, day).getDay();

                if (displayingYear == selectedYear &&
                    displayingMonth == selectedMonth &&
                    day == selectedDay) {

                    if (dayOfWeek > 0 && dayOfWeek < 6) {
                        var classes = [
                            'custom-calendar__day',
                            'custom-calendar__day--selected'
                        ];

                        renderElem('td', classes, '.custom-calendar__days');
                    } else {
                        var classes = [
                            'custom-calendar__day',
                            'custom-calendar__day--selected',
                            'custom-calendar__day--day-off'
                        ];

                        renderElem('td', classes, '.custom-calendar__days');
                    }

                    if (dayOfWeek === 0) {
                        var tr = document.createElement('tr');
                        var parent = document.querySelector('.custom-calendar__days');
                        parent.insertBefore(tr, parent.nextElementSibling);
                    }
                    continue;
                }

                if (dayOfWeek > 0 && dayOfWeek < 6) {
                    var classes = [
                        'custom-calendar__day'
                    ];

                    renderElem('td', classes, '.custom-calendar__days');
                } else {
                    var classes = [
                        'custom-calendar__day',
                        'custom-calendar__day--day-off'
                    ];

                    renderElem('td', classes, '.custom-calendar__days');
                }

                if (dayOfWeek === 0) {
                    var tr = document.createElement('tr');
                    var parent = document.querySelector('.custom-calendar__days');
                    parent.insertBefore(tr, parent.nextElementSibling);
                }
            }

            if (lastDayOfWeekOfCurMonth !== 0) {
                for (var dayOfWeek = lastDayOfWeekOfCurMonth + 1, day = 1; dayOfWeek <= 7; dayOfWeek++, day++) {
                    var nextDate = new Date(displayingYear, displayingMonth, lastDayOfMonth + day);
                    var dayOfNextMonth = nextDate.getDate();
                    var dayOfWeekOfNextMonth = nextDate.getDay();

                    if (dayOfWeekOfNextMonth > 5 || dayOfWeekOfNextMonth === 0) {
                        var classes = [
                            'custom-calendar__day',
                            'custom-calendar__day--other-month',
                            'custom-calendar__day--day-off'
                        ];

                        renderElem('td', classes, '.custom-calendar__days', 'isNext');

                    } else {
                        var classes = [
                            'custom-calendar__day',
                            'custom-calendar__day--other-month'
                        ];
                        
                        renderElem('td', classes, '.custom-calendar__days', 'isNext');
                    }
                }
            }

            var tHeader = document.querySelector('table thead td:nth-of-type(2)');
            var displayingDate = new Date(displayingYear, displayingMonth);
            tHeader.innerHTML = displayingDate.toLocaleString('en', {
                month: 'long',
                year: 'numeric'
            });

            function renderElem(elem, classes, parent, dataAttr) {
                
                var child = document.createElement(elem);
                var parent = document.querySelector(parent);

                if(dataAttr) {
                    if(dataAttr === 'isPrevious') {
                        child.innerText = dayOfPreMonth;
                        child.dataset[dataAttr] = "true";

                    } else if(dataAttr === 'isNext') {
                        child.innerText = dayOfNextMonth;
                        child.dataset[dataAttr] = "true";
                    }
                } else {
                    child.innerText = day;
                }

                child.classList.add(...classes);

                parent.insertBefore(child, parent.nextElementSibling);
            }
        }

        function applyDataMask(field) {
            var mask = field.dataset.mask.split('');

            function stripMask(maskedData) {
                function isDigit(char) {
                    return /\d/.test(char);
                }
                return maskedData.split('').filter(isDigit);
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

            function changed(e) {
                e = e || event;
                var oldStart = field.selectionStart;
                var oldEnd = field.selectionEnd;

                field.value = reapplyMask(field.value);
                field.selectionStart = oldStart;
                field.selectionEnd = oldEnd;

                if (e.keyCode === 13) {
                    var exportDate = String(field.value).split('/').map(function (elem) {
                        return Number(elem);
                    });

                    selectedYear = exportDate[2];
                    selectedMonth = exportDate[1] - 1;
                    selectedDay = exportDate[0];
                    displayingYear = selectedYear;
                    displayingMonth = selectedMonth;
                    drawCalendar();
                }

                e.stopImmediatePropagation();
            }

            field.addEventListener('keyup', changed);
        }
    }
})();