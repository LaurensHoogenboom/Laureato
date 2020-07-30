//login logout

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

//form status

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

//highlight the current nav item

$(document).ready(function () {
    var current = location.pathname;
    if (current == "/") {
        $('nav .pages a').first().addClass('current');
    } else {
        $('nav .pages a').each(function () {
            var $this = $(this);
            // if the current path is like this link, make it active
            if ($this.attr('href').indexOf(current) !== -1) {
                $this.addClass('current');
            }
        })
    }
});

//button actions

$(document).on('click', 'label.button', function() {
    let action = $(this).data('action')

    if (action === "open-dialog") {
        let dialogName = $(this).data('action-context')

        $('.dialog').each(function() {
            let name = $(this).attr('id')

            if (name === dialogName) {
                $(this).removeClass('hidden')
            }
        })
    } else if (action === "close-dialog") {
        let dialogName = $(this).data('action-context')

        $('.dialog').each(function() {
            let name = $(this).attr('id')

            if (name === dialogName) {
                $(this).addClass('hidden')
            }
        })
    }
})

//select possible new option

$(document).on('change', '.possible-new-select', function() {
    let value = $(this).val()
    let name = $(this).attr('id')

    if (value === "new-option") {
        let valueLabel = $(this).attr('name')

        $('.possible-new-input').each(function() {
            let inputName = $(this).attr('id')
            
            if (name === inputName) {
                $(this).attr('name', valueLabel)
                $(this).removeClass('hidden')
            }
        })

        $(this).attr('name', '')
    } else {
        let valueLabel

        $('.possible-new-input').each(function() {
            let inputName = $(this).attr('id')

            if (name === inputName) {
                $(this).addClass('hidden')
                valueLabel = $(this).attr('name')
                $(this).attr('name', '')
            }
        })

        $(this).attr('name', valueLabel)
    }
})

//select highlight

$(document).ready(function() {
    $("select").change(function () {
        if ($(this).val() == "default") {
            $(this).addClass("placeHolder");
        } else {
            $(this).removeClass("placeHolder")
        }
    });
    
    $("select").change();
})

//select item in list

$(document).on('click', '.item-list .item', function() {
    let checkbox = $(this).find('.actions input[type="checkbox"]')

    if (checkbox.is(':checked')) {
        $(checkbox).prop( "checked", false )
    } else {
        $(checkbox).prop( "checked", true )
    }
})

