//data formatting

const getDate = {
    json: (date) => {
        const dateJSON = new Date(date).toJSON()
        
        return dateJSON
    },

    js: (date) => {
        const dateJS = new Date(date)

        return dateJS
    },

    dmy: (date, seperator) => {
        const dateJSON = new Date(date)
        const dateDay = dateJSON.getDate() < 10 ? '0' + dateJSON.getDate() : dateJSON.getDate()
        const dateMonth = (dateJSON.getMonth() + 1) < 10 ? '0' + (dateJSON.getMonth() + 1) : (dateJSON.getMonth() + 1)
        const dateYear = dateJSON.getFullYear()
        const formatedDate = `${dateDay}${seperator}${dateMonth}${seperator}${dateYear}`
    
        return formatedDate
    },

    ymd: (date, seperator) => {
        const dateJSON = new Date(date)
        const dateDay = dateJSON.getDate() < 10 ? '0' + dateJSON.getDate() : dateJSON.getDate()
        const dateMonth = (dateJSON.getMonth() + 1) < 10 ? '0' + (dateJSON.getMonth() + 1) : (dateJSON.getMonth() + 1)
        const dateYear = dateJSON.getFullYear()
        const formatedDate = `${dateYear}${seperator}${dateMonth}${seperator}${dateDay}`

        return formatedDate
    },

    datePicker: (date, seperator) => {
        const dateArray = date.split('/')
        const newDateString = `${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`

        return newDateString
    }
}