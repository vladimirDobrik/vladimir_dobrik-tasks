(function () {
    window.addEventListener('load', function () {

        var btn = document.createElement('input');
        var today = new Date().toLocaleString('en', {
            day: 'numeric',
            weekday: 'long'
        });
        btn.setAttribute('type', 'button');
        btn.setAttribute('value', today);
        btn.setAttribute('id', 'run-btn');
        btn.style.cssText = "\
            text-transform: uppercase;\
            display: inline-block;\
            padding: 6px 10px;\
            text-align: center;\
            text-decoration: none;\
            border: 2px solid #96deda;\
            font-weight: 800;\
            font-size: 16px;\
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
                this.innerHTML = '<style>.current-day{border-radius: 50%; background: #fff;}</style><table><thead><tr><td></td><td colspan="4"></td><td></td><td></td></tr>\
                <tr><td>M</td><td>T</td><td>W</td><td>T</td><td>F</td><td>S</td><td>S</td></tr>\
                </thead><tbody></tbody></table>';
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

            (function CustomCalendar(year, month, day) {

                var curYear = year || new Date().getFullYear();
                var curMonth = month || new Date().getMonth();
                var curDay = day || new Date().getDate();
                var lastDayOfMonth = new Date(curYear, curMonth + 1, 0).getDate();
                var curDate = new Date(curYear, curMonth, curDay);
                var firstDayOfWeekOfCurMonth = new Date(curDate.getFullYear(), curDate.getMonth(), 1).getDay();
                var innerTBody = '';

                console.log(curYear);
                console.log(curMonth);
                console.log(curDay);

                if (firstDayOfWeekOfCurMonth !== 0) {
                    for (var dayOfWeek = 1; dayOfWeek < firstDayOfWeekOfCurMonth; dayOfWeek++) {
                        var dayOfPreMonth = new Date(curYear, curMonth, (-(firstDayOfWeekOfCurMonth - 1) + dayOfWeek)).getDate();
                        innerTBody += '<td style="color:rgba(0, 0, 0, .3); padding: 10px;">' + dayOfPreMonth + '</td>';
                    }
                } else {
                    for (var i = 5; i >= 0; i--) {
                        var preDate = new Date(curYear, curMonth, (firstDayOfWeekOfCurMonth - i));
                        var dayOfPreMonth = preDate.getDate();
                        var dayOfWeekOfPreMonth = preDate.getDay();

                        if (dayOfWeekOfPreMonth > 5 || dayOfWeekOfPreMonth === 0) {
                            innerTBody += '<td style="color:rgba(255, 0, 0, .3); padding: 10px;">' + dayOfPreMonth + '</td>';
                        } else {
                            innerTBody += '<td style="color:rgba(0, 0, 0, .3); padding: 10px;">' + dayOfPreMonth + '</td>';
                        }
                    }
                }

                for (var day = 1; day <= lastDayOfMonth; day++) {
                    var dayOfWeek = new Date(curDate.getFullYear(), curDate.getMonth(), day).getDay();

                    if (lastDayOfMonth) {
                        if (curYear === new Date().getFullYear() &&
                            curMonth === new Date().getMonth() &&
                            day === new Date().getDate()) {

                            if (dayOfWeek > 0 && dayOfWeek < 6) {
                                innerTBody += '<td class="current-day">' + day + '</td>';
                            } else {
                                innerTBody += '<td class="current-day" style="color:rgb(255, 0, 0); padding: 10px;">' + day + '</td>';
                            }

                            if (dayOfWeek === 0) {
                                innerTBody += '<tr>';
                            }
                            continue;
                        }

                        if (dayOfWeek > 0 && dayOfWeek < 6) {
                            innerTBody += '<td style="padding: 10px;">' + day + '</td>';
                        } else {
                            innerTBody += '<td style="color:rgb(255, 0, 0); padding: 10px;">' + day + '</td>';
                        }

                        if (dayOfWeek === 0) {
                            innerTBody += '<tr>';
                        }
                    }
                }

                var tHeader = document.querySelector('table thead td:nth-of-type(2)');
                var tBody = document.querySelector('tbody');

                tBody.innerHTML = innerTBody;
                tHeader.innerHTML = curDate.toLocaleString('en', {
                    month: 'long',
                    year: 'numeric'
                });
                tHeader.year = curYear;
                tHeader.months = curMonth;

                var prevMonth = document.querySelector('thead tr:nth-of-type(1) td:nth-of-type(1)');
                var nextMonth = document.querySelector('thead tr:nth-of-type(1) td:nth-of-type(3)');
                var close = document.querySelector('thead tr:nth-of-type(1) td:nth-of-type(4)');

                prevMonth.innerHTML = '<i class="fas fa-angle-double-left"></i>';
                nextMonth.innerHTML = '<i class="fas fa-angle-double-right"></i>';
                close.innerHTML = '<i class="far fa-times-circle"></i>';

                tHeader.style.cssText = "\
                color: #fff;";

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
                    btn.setAttribute('value', today);
                    btn.style.cssText = "\
                        text-transform: uppercase;\
                        display: inline-block;\
                        padding: 6px 10px;\
                        text-align: center;\
                        text-decoration: none;\
                        border: 2px solid #96deda;\
                        font-weight: 800;\
                        font-size: 16px;\
                        color: #000;\
                        border-radius: 20px;\
                        width: 150px;\
                        outline: none;\
                        background-color: transparent;\
                        cursor: pointer;";

                    document.body.appendChild(btn);

                    btn.addEventListener('click', function (e) {
                        e = e || event;
                        CustomCalendar();
                        document.querySelector('custom-calendar').style.display = '';
                        btn.remove();
                        e.stopImmediatePropagation();
                    })

                    e.stopImmediatePropagation();
                })
            })();

            document.querySelector('#run-btn').style.display = 'none';
        })
    })
})();