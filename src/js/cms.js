$(document).on('submit', '#loginForm', function(e) {
    e.preventDefault()

    let form = $(this)

    updateFormStatus.notify(form, 'Logging in...')

    $.ajax({
        type: "POST",
        url: '/src/php/cms/login.php',
        data: form.serialize(),
        success: function(response) {
            if (response === "OK") {
                window.location.href = "/cms/home";
            } else if (response === "WRONG_PASSWORD") {
                updateFormStatus.fail(form, 'You entered a wrong password!')
            } else if (response === "USER_UNKNOWN") {
                updateFormStatus.fail(form, 'This username or email is unkown.')
            }
        }
    });
})

$(document).on('submit', '#logout', function(e) {
    e.preventDefault()

    $.ajax({
        type: "POST",
        url: '/src/php/cms/logout.php',
        success: function(response) {
            console.log(response)

            if (response === "OK") {
                window.location.href = "/";
            }
        }
    });
})

const updateFormStatus = {
    notify: (form, message) => {
        let formStatusLabel = $(form).find('.formStatus')

        $(formStatusLabel).removeClass('succes')
        $(formStatusLabel).removeClass('fail')
        $(formStatusLabel).removeClass('hidden')
        $(formStatusLabel).text(message)
    },
    fail: (form, message) => {
        let formStatusLabel = $(form).find('.formStatus')

        $(formStatusLabel).removeClass('succes')
        $(formStatusLabel).addClass('fail')
        $(formStatusLabel).removeClass('hidden')
        $(formStatusLabel).text(message)
    },
    succes: (form, message) => {
        let formStatusLabel = $(form).find('.formStatus')

        $(formStatusLabel).addClass('succes')
        $(formStatusLabel).removeClass('fail')
        $(formStatusLabel).removeClass('hidden')
        $(formStatusLabel).text(message)
    }
}