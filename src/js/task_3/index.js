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
        var btn = createRunBtn();
        var todayBtn = createTodayBtn();
        var dateInput = createDateInput();

        registerComponent();
        initComponentsStyles();
        initEvents();
        applyDataMask(dateInput);

        function createDatepickerContainer() {

            var datepickerContainer = document.createElement('custom-calendar');
            document.getElementById(containerID).appendChild(datepickerContainer);

            return datepickerContainer;
        }

        function createTableContainer() {

            var tableContainer = document.createElement('div');
            datepickerContainer.appendChild(tableContainer);
            tableContainer.style.display = 'none';
            tableContainer.innerHTML = DatepickerTemplates.calendarStructureTemplate;

            return tableContainer;
        }

        function createRunBtn() {

            var btn = document.createElement('button');
            
            btn.innerHTML = 'calendar <i class="far fa-calendar-alt"></i>';
            btn.setAttribute('id', 'run-btn');
            btn.style.cssText = DatepickerTemplates.runButtonStyle;

            datepickerContainer.appendChild(btn);

            return btn;
        }

        function createTodayBtn() {

            var todayBtn = document.createElement('button');
            todayBtn.innerText = 'today';
            todayBtn.setAttribute('id', 'today-btn');
            todayBtn.style.cssText = DatepickerTemplates.todayButtontyle;

            document.querySelector('table thead tr:nth-of-type(2) td:first-child').appendChild(todayBtn);

            return todayBtn;
        }

        function initComponentsStyles() {

            document.querySelector('table').style.cssText = DatepickerTemplates.tableStyle;
            document.querySelector('thead').style.cssText = DatepickerTemplates.tableHeadStyle;
            document.querySelector('tbody').style.cssText = DatepickerTemplates.tableBodyStyle;
            document.querySelector('table thead tr:last-child td:last-child')
                .style.cssText = DatepickerTemplates.tableHeadWeekendStyle;
            document.querySelector('table thead tr:last-child td:nth-of-type(6)')
                .style.cssText = DatepickerTemplates.tableHeadWeekendStyle;

            var prevMonth = document.querySelector('thead tr:nth-of-type(1) td:nth-of-type(1)');
            var nextMonth = document.querySelector('thead tr:nth-of-type(1) td:nth-of-type(3)');
            var close = document.querySelector('thead tr:nth-of-type(1) td:nth-of-type(4)');
            var tHeader = document.querySelector('table thead td:nth-of-type(2)');

            tHeader.style.cssText = DatepickerTemplates.tableHeaderStyle;
            close.style.cssText = DatepickerTemplates.closeButtonStyle;
            prevMonth.style.cssText = DatepickerTemplates.previousButtonStyle;
            nextMonth.style.cssText = DatepickerTemplates.nextButtonStyle;
            prevMonth.innerHTML = '<i class="fas fa-angle-double-left"></i>';
            nextMonth.innerHTML = '<i class="fas fa-angle-double-right"></i>';
            close.innerHTML = '<i class="far fa-times-circle"></i>';
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

            var prevMonth = document.querySelector('thead tr:nth-of-type(1) td:nth-of-type(1)');
            var nextMonth = document.querySelector('thead tr:nth-of-type(1) td:nth-of-type(3)');
            var close = document.querySelector('thead tr:nth-of-type(1) td:nth-of-type(4)');
            var tbody = document.querySelector('tbody');

            close.onmouseover = function (e) {
                e = e || event;
                event.target.style.color = '#fff';
            }

            close.onmouseout = function (e) {
                e = e || event;
                event.target.style.color = '#000';
            }

            prevMonth.onmouseover = function (e) {
                e.target.style.color = '#fff';
            }

            prevMonth.onmouseout = function (e) {
                e.target.style.color = '#000';
            }

            nextMonth.onmouseover = function (e) {
                e.target.style.color = '#fff';
            }

            nextMonth.onmouseout = function (e) {
                e.target.style.color = '#000';
            }

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
                btn.style.display = '';
                e.stopImmediatePropagation();
            });

            btn.addEventListener('click', function (e) {
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
                var isPreviousMonth = e.target.getAttribute('data-isPrevious');
                var isNextMonth = e.target.getAttribute('data-isNext');
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

            var dateInput = document.querySelector('table thead tr:nth-of-type(2) td:first-child input');
            var innerInput = getFormattedDate(selectedYear, selectedMonth, selectedDay);

            dateInput.setAttribute('type', 'text');
            dateInput.setAttribute('id', 'search-date');
            dateInput.setAttribute('data-mask', "__/__/____");
            dateInput.setAttribute('value', innerInput);
            dateInput.style.cssText = DatepickerTemplates.dateInputStyle;

            return dateInput;
        }

        function registerComponent() {

            var CustomCalendarProto = Object.create(HTMLElement.prototype);

            var CustomCalendar = document.registerElement('custom-calendar', {
                prototype: CustomCalendarProto
            });
        }

        function drawCalendar() {

            var lastDayOfMonth = new Date(displayingYear, displayingMonth + 1, 0).getDate();
            var firstDayOfWeekOfCurMonth = new Date(displayingYear, displayingMonth, 1).getDay();
            var lastDayOfWeekOfCurMonth = new Date(displayingYear, displayingMonth + 1, 0).getDay();
            var innerTBody = '';

            if (firstDayOfWeekOfCurMonth !== 0) {
                for (var dayOfWeek = 1; dayOfWeek < firstDayOfWeekOfCurMonth; dayOfWeek++) {
                    var dayOfPreMonth = new Date(displayingYear, displayingMonth, (-(firstDayOfWeekOfCurMonth - 1) + dayOfWeek)).getDate();
                    innerTBody += '<td data-isPrevious="true" style="color:rgba(0, 0, 0, .3); padding: 10px;">' +
                        dayOfPreMonth + '</td>';
                }
            } else {
                for (var dayOfWeek = 5; dayOfWeek >= 0; dayOfWeek--) {
                    var preDate = new Date(displayingYear, displayingMonth, (firstDayOfWeekOfCurMonth - dayOfWeek));
                    var dayOfPreMonth = preDate.getDate();
                    var dayOfWeekOfPreMonth = preDate.getDay();

                    if (dayOfWeekOfPreMonth > 5 || dayOfWeekOfPreMonth === 0) {
                        innerTBody += '<td data-isPrevious="true" style="color:rgba(255, 0, 0, .3); padding: 10px;">' +
                            dayOfPreMonth + '</td>';
                    } else {
                        innerTBody += '<td data-isPrevious="true" style="color:rgba(0, 0, 0, .3); padding: 10px;">' +
                            dayOfPreMonth + '</td>';
                    }
                }
            }

            for (var day = 1; day <= lastDayOfMonth; day++) {
                var dayOfWeek = new Date(displayingYear, displayingMonth, day).getDay();

                if (displayingYear == selectedYear &&
                    displayingMonth == selectedMonth &&
                    day == selectedDay) {

                    if (dayOfWeek > 0 && dayOfWeek < 6) {
                        innerTBody += '<td style="border-radius: 50%;">' +
                            day + '</td>';
                    } else {
                        innerTBody += '<td style="color:rgb(255, 0, 0); padding: 10px; border-radius: 50%;">' +
                            day + '</td>';
                    }

                    if (dayOfWeek === 0) {
                        innerTBody += '<tr>';
                    }
                    continue;
                }

                if (dayOfWeek > 0 && dayOfWeek < 6) {
                    innerTBody += '<td style="padding: 10px;">' +
                        day + '</td>';
                } else {
                    innerTBody += '<td style="color:rgb(255, 0, 0); padding: 10px;">' +
                        day + '</td>';
                }

                if (dayOfWeek === 0) {
                    innerTBody += '<tr>';
                }
            }

            if (lastDayOfWeekOfCurMonth !== 0) {
                for (var dayOfWeek = lastDayOfWeekOfCurMonth + 1, day = 1; dayOfWeek <= 7; dayOfWeek++, day++) {
                    var nextDate = new Date(displayingYear, displayingMonth, lastDayOfMonth + day);
                    var dayOfNextMonth = nextDate.getDate();
                    var dayOfWeekOfNextMonth = nextDate.getDay();

                    if (dayOfWeekOfNextMonth > 5 || dayOfWeekOfNextMonth === 0) {
                        innerTBody += '<td data-isNext="true" style="color:rgba(255, 0, 0, .3); padding: 10px;">' +
                            dayOfNextMonth + '</td>';
                    } else {
                        innerTBody += '<td data-isNext="true" style="color:rgba(0, 0, 0, .3); padding: 10px;">' +
                            dayOfNextMonth + '</td>';
                    }
                }
            }

            var tHeader = document.querySelector('table thead td:nth-of-type(2)');
            var displayingDate = new Date(displayingYear, displayingMonth);
            tHeader.innerHTML = displayingDate.toLocaleString('en', {
                month: 'long',
                year: 'numeric'
            });

            document.querySelector('tbody').innerHTML = innerTBody;
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