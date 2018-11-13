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
                this.innerHTML = '<table><thead>\
                <tr><td></td><td colspan="4"></td><td></td><td></td></tr>\
                <tr><td colspan="7"></td></tr>\
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

            document.querySelector('table thead tr:nth-of-type(2) td:first-child').innerHTML = "\
            <input>";

            (function CustomCalendar(year, month, day) {

                var curYear = year || new Date().getFullYear();
                var curMonth = month || new Date().getMonth();
                var curDay = day || new Date().getDate();
                var curDate = new Date(curYear, curMonth, curDay);
                var lastDayOfMonth = new Date(curYear, curMonth + 1, 0).getDate();
                var firstDayOfWeekOfCurMonth = new Date(curYear, curMonth, 1).getDay();
                var lastDayOfWeekOfCurMonth = new Date(curYear, curMonth + 1, 0).getDay();
                var innerTBody = '';

                if (firstDayOfWeekOfCurMonth !== 0) {
                    for (var dayOfWeek = 1; dayOfWeek < firstDayOfWeekOfCurMonth; dayOfWeek++) {
                        var dayOfPreMonth = new Date(curYear, curMonth, (-(firstDayOfWeekOfCurMonth - 1) + dayOfWeek)).getDate();
                        innerTBody += '<td style="color:rgba(0, 0, 0, .3); padding: 10px;">'
                         + dayOfPreMonth + '</td>';
                    }
                } else {
                    for (var dayOfWeek = 5; dayOfWeek >= 0; dayOfWeek--) {
                        var preDate = new Date(curYear, curMonth, (firstDayOfWeekOfCurMonth - dayOfWeek));
                        var dayOfPreMonth = preDate.getDate();
                        var dayOfWeekOfPreMonth = preDate.getDay();

                        if (dayOfWeekOfPreMonth > 5 || dayOfWeekOfPreMonth === 0) {
                            innerTBody += '<td style="color:rgba(255, 0, 0, .3); padding: 10px;">'
                             + dayOfPreMonth + '</td>';
                        } else {
                            innerTBody += '<td style="color:rgba(0, 0, 0, .3); padding: 10px;">'
                             + dayOfPreMonth + '</td>';
                        }
                    }
                }

                for (var day = 1; day <= lastDayOfMonth; day++) {
                    var dayOfWeek = new Date(curYear, curMonth, day).getDay();

                    if (lastDayOfMonth) {
                        if (curYear === new Date().getFullYear() &&
                            curMonth === new Date().getMonth() &&
                            day === new Date().getDate()) {

                            if (dayOfWeek > 0 && dayOfWeek < 6) {
                                innerTBody += '<td style="border-radius: 50%; background: #fff;">'
                                 + day + '</td>';
                            } else {
                                innerTBody += 
                                '<td style="color:rgb(255, 0, 0); padding: 10px; border-radius: 50%; background: #fff;">'
                                 + day + '</td>';
                            }

                            if (dayOfWeek === 0) {
                                innerTBody += '<tr>';
                            }
                            continue;
                        }

                        if (dayOfWeek > 0 && dayOfWeek < 6) {
                            innerTBody += '<td style="padding: 10px;">'
                             + day + '</td>';
                        } else {
                            innerTBody += '<td style="color:rgb(255, 0, 0); padding: 10px;">'
                             + day + '</td>';
                        }

                        if (dayOfWeek === 0) {
                            innerTBody += '<tr>';
                        }
                    }
                }

                if (lastDayOfWeekOfCurMonth !== 0) {
                    for (var dayOfWeek = lastDayOfWeekOfCurMonth + 1, day = 1; dayOfWeek <= 7; dayOfWeek++, day++) {
                        var nextDate = new Date(curYear, curMonth, lastDayOfMonth + day);
                        var dayOfNextMonth = nextDate.getDate();
                        var dayOfWeekOfNextMonth = nextDate.getDay();

                        if (dayOfWeekOfNextMonth > 5 || dayOfWeekOfNextMonth === 0) {
                            innerTBody += '<td style="color:rgba(255, 0, 0, .3); padding: 10px;">'
                             + dayOfNextMonth + '</td>';
                        } else {
                            innerTBody += '<td style="color:rgba(0, 0, 0, .3); padding: 10px;">'
                             + dayOfNextMonth + '</td>';
                        }
                    }
                }

                var input = document.querySelector('table thead tr:nth-of-type(2) td:first-child input');
                var innerInput = new Date().toLocaleString('en', {
                    day: 'numeric',
                    year: 'numeric',
                    month: 'numeric',
                });
                input.setAttribute('type', 'text');
                input.setAttribute('id', 'search-date');
                input.setAttribute('data-mask', "__/__/____");
                input.setAttribute('placeholder', innerInput);
                input.style.cssText = "\
                    display: inline-block;\
                    padding: 6px 15px;\
                    text-decoration: none;\
                    border: 2px solid #96deda;\
                    font-weight: 800;\
                    font-size: 16px;\
                    color: #000;\
                    border-radius: 20px;\
                    width: 100px;\
                    outline: none;\
                    background-color: #fff;";

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

                applyDataMask(input);

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

                            CustomCalendar(exportDate[2], exportDate[1] - 1, exportDate[0]);
                        }

                        e.stopImmediatePropagation();
                    }

                    field.addEventListener('keyup', changed);
                }
            })();

            document.querySelector('#run-btn').style.display = 'none';
        })
    })
})();