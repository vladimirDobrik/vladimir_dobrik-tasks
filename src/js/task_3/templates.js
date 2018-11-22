var DatepickerTemplates = {};

DatepickerTemplates.styles = "\
    .custom-calendar__content {\
        display: inline-block;\
    }\
    .custom-calendar__btn {\
        text-transform: uppercase;\
        display: inline-block;\
        padding: 6px 10px;\
        text-align: center;\
        text-decoration: none;\
        border: 2px solid #96deda;\
        font-weight: 800;\
        font-size: 14px;\
        color: #000;\
        border-radius: 20px;\
        width: 150px;\
        outline: none;\
        background-color: transparent;\
        cursor: pointer;\
    }\
    .custom-calendar__btn--today {\
        font-weight: 600;\
        width: 100px;\
        background-color: #fff;\
    }\
    .custom-calendar__container {\
        font-size: 15px;\
        background-color: #96deda;\
        padding: 10px;\
        text-align: center;\
        cursor: default;\
        border-radius: 10px;\
        font-family: sans-serif;\
        user-select: none;\
    }\
    .custom-calendar__header {\
        background-color: #96deda;\
    }\
    .custom-calendar__control-panel {\
        font-size: 20px;\
    }\
    .control-panel__switch {\
        cursor: pointer;\
        color: #000;\
    }\
    .control-panel__switch:hover {\
        color: #fff;\
        transform: scale(1.5);\
    }\
    .control-panel__status {\
        color: #fff;\
    }\
    .custom-calendar__input {\
        padding: 6px 15px;\
        border: 0;\
        font-weight: 600;\
        font-size: 14px;\
        color: #000;\
        border-radius: 20px;\
        width: 100px;\
        outline: none;\
        letter-spacing: 1.5px;\
        text-align: center;\
        margin-right: 50px;\
    }\
    .custom-calendar__weekdays {\
        font-size: 11px;\
        letter-spacing: 2px;\
    }\
    .custom-calendar__weekday:first-letter {\
        font-size: 14px;\
        font-weight: 600;\
    }\
    .custom-calendar__weekday--dayOff {\
        color: red;\
    }\
    .custom-calendar__days {\
        font-size: 18px;\
        background-color: #D7FFFE;\
        letter-spacing: 1px;\
    }\
    .custom-calendar__day {\
        padding: 10px;\
        font-size: 20px;\
    }\
    .custom-calendar__day--other-month {\
        opacity: 0.3;\
    }\
    .custom-calendar__day--day-off {\
        color: red;\
    }\
    .custom-calendar__day--selected {\
        border-radius: 50%;\
        background-color: #fff;\
    }";

DatepickerTemplates.calendarStructureTemplate =
    '<table class="custom-calendar__container">\
        <thead class="custom-calendar__header">\
            <tr class="custom-calendar__control-panel control-panel">\
                <td class="control-panel__switch" id="preMonth"></td>\
                <td class="control-panel__status" colspan="4"></td>\
                <td class="control-panel__switch" id="nextMonth"></td>\
                <td class="control-panel__switch" id="close"></td>\
            </tr>\
            <tr class="custom-calendar__datepicker">\
                <td class="custom-calendar__datepicker-container" colspan="7">\
                    <input class="custom-calendar__input">\
                </td>\
            </tr>\
            <tr class="custom-calendar__weekdays">\
                <td class="custom-calendar__weekday">Mon</td>\
                <td class="custom-calendar__weekday">Tue</td>\
                <td class="custom-calendar__weekday">Wed</td>\
                <td class="custom-calendar__weekday">Thu</td>\
                <td class="custom-calendar__weekday">Fri</td>\
                <td class="custom-calendar__weekday custom-calendar__weekday--dayOff">Sat</td>\
                <td class="custom-calendar__weekday custom-calendar__weekday--dayOff">Sun</td>\
            </tr>\
        </thead>\
        <tbody class="custom-calendar__days"></tbody>\
    </table>';




