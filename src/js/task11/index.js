(function () {
    window.addEventListener('load', function () {
        var btn = document.createElement('input');
        btn.setAttribute('type', 'button');
        btn.setAttribute('value', 'Open Calendar');
        btn.setAttribute('id', 'run-btn');
        btn.style.cssText = "\
            text-transform: uppercase;\
            display: inline-block;\
            padding: 12px 10px;\
            text-align: center;\
            text-decoration: none;\
            border: 2px solid #96deda;\
            font-weight: 800;\
            color: #000;\
            border-radius: 20px;\
            width: 150px;\
            outline: none;\
            background-color: transparent;\
            cursor: pointer;";

        document.body.appendChild(btn);

        document.querySelector('#run-btn').addEventListener('click', function () {

            var CustomCalendarProto = Object.create(HTMLElement.prototype);
            CustomCalendarProto.createdCallback = function () {
                this.innerHTML = '<table><thead><tr><td></td><td colspan="4"></td><td></td><td></td></tr><tr><td>M</td><td>T</td><td>W</td><td>T</td><td>F</td><td>S</td><td>S</td></tr></thead><tbody></tbody></table>';
            };

            if (!CustomCalendar) {
                var CustomCalendar = document.registerElement('custom-calendar', {
                    prototype: CustomCalendarProto
                });
            };

            document.querySelector('tbody').style.cssText = "\
            font-size: 30px;\
            background-color: #D7FFFE;\
            text-align: center;";

            document.querySelector('thead').style.cssText = "\
            font-size: 30px;\
            background-color: #96deda;\
            text-align: center;";

            document.querySelector('table').style.cssText = "\
            font-size: 20px;\
            background-color: #96deda;\
            padding: 10px;\
            text-align: center;\
            cursor: default;\
            border-radius: 10px;\
            font-family: sans-serif;\
            user-select: none;";

            document.querySelector('table thead tr:last-child td:last-child').style.cssText = "\
            color: red;";

            document.querySelector('table thead tr:last-child td:nth-of-type(6)').style.cssText = "\
            color: red;";

            (function CustomCalendar(year, month) {

                var year = year || new Date().getFullYear();
                var month = month || new Date().getMonth();
                var lastDayOfMonth = new Date(year, month + 1, 0).getDate();
                var curDate = new Date(year, month, lastDayOfMonth);
                var firstDayOfWeekOfMonth = new Date(curDate.getFullYear(), curDate.getMonth(), 1).getDay();
                var innerTBody = ' ';

                if (firstDayOfWeekOfMonth !== 0) {
                    for (var i = 1; i < firstDayOfWeekOfMonth; i++) {
                        innerTBody += '<td></td>';
                    }
                } else {
                    for (var i = 0; i < 6; i++) {
                        innerTBody += '<td></td>';
                    }
                }

                for (var i = 1; i <= lastDayOfMonth; i++) {

                    new Date(curDate.getFullYear(), curDate.getMonth(), i).getDay() > 0 &&
                        new Date(curDate.getFullYear(), curDate.getMonth(), i).getDay() < 6 ?
                        innerTBody += '<td>' + i + '</td>' : innerTBody += '<td style="color:red;">' + i + '</td>';

                    if (new Date(curDate.getFullYear(), curDate.getMonth(), i).getDay() === 0) {
                        innerTBody += '<tr>';
                    }
                }

                var tHeader = document.querySelector('table thead td:nth-of-type(2)');
                var tBody = document.querySelector('tbody');

                tBody.innerHTML = innerTBody;
                tHeader.innerHTML = (curDate.getMonth() + 1) + ' - ' + curDate.getFullYear();
                tHeader.year = curDate.getFullYear();
                tHeader.months = curDate.getMonth();

                var prevMonth = document.querySelector('thead tr:nth-of-type(1) td:nth-of-type(1)');
                var nextMonth = document.querySelector('thead tr:nth-of-type(1) td:nth-of-type(3)');
                var close = document.querySelector('thead tr:nth-of-type(1) td:nth-of-type(4)');

                prevMonth.innerHTML = '<i class="fas fa-angle-double-left"></i>';
                nextMonth.innerHTML = '<i class="fas fa-angle-double-right"></i>';
                close.innerHTML = '<i class="far fa-times-circle"></i>';

                tHeader.style.color = '#fff';

                close.onmouseover = function (e) {
                    e = e || event;
                    event.target.style.color = '#fff';
                }

                close.onmouseout = function (e) {
                    e = e || event;
                    event.target.style.color = '#000';
                }

                close.style.cssText = "\
                cursor: pointer;"

                prevMonth.style.cssText = "\
                cursor: pointer;";

                nextMonth.style.cssText = "\
                cursor: pointer;";

                prevMonth.onmouseover = function (e) {
                    event.target.style.color = '#fff';
                }

                prevMonth.onmouseout = function (e) {
                    event.target.style.color = '#000';
                }

                nextMonth.onmouseover = function (e) {
                    event.target.style.color = '#fff';
                }

                nextMonth.onmouseout = function (e) {
                    event.target.style.color = '#000';
                }

                prevMonth.addEventListener('click', function (e) {
                    e = e || event;
                    CustomCalendar(tHeader.year, tHeader.months - 1);
                    e.stopImmediatePropagation();
                })

                nextMonth.addEventListener('click', function (e) {
                    e = e || event;
                    CustomCalendar(tHeader.year, tHeader.months + 1);
                    e.stopImmediatePropagation();
                })

                close.addEventListener('click', function (e) {
                    e = e || event;
                    document.querySelector('custom-calendar').style.display = 'none';
                    var btn = document.createElement('input');
                    btn.setAttribute('type', 'button');
                    btn.setAttribute('value', 'Open Calendar');
                    btn.style.cssText = "\
                        text-transform: uppercase;\
                        display: inline-block;\
                        padding: 12px 10px;\
                        text-align: center;\
                        text-decoration: none;\
                        border: 2px solid #96deda;\
                        font-weight: 800;\
                        color: #000;\
                        border-radius: 20px;\
                        width: 150px;\
                        outline: none;\
                        background-color: transparent;\
                        cursor: pointer;";

                    document.body.appendChild(btn);
                    e.stopImmediatePropagation();
                    btn.addEventListener('click', function (e) {
                        e = e || event;
                        CustomCalendar();
                        document.querySelector('custom-calendar').style.display = '';
                        btn.remove();
                        e.stopImmediatePropagation();
                    })
                })
            })();

            document.querySelector('#run-btn').style.display = 'none';
        })
    })
})();