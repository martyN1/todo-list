export function formatDate(datetime, language) {
    if (typeof datetime.getTime !== 'function') {
        datetime = new Date(datetime)
    }

    let options = {
        weekday: 'long',

        year: 'numeric',
        month: 'long',
        day: 'numeric',

        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    }

    return new Intl.DateTimeFormat(language, options).format(datetime)
}
