//login logout

$(document).on('submit', '#loginForm', function (e) {
    e.preventDefault()

    let form = $(this)

    updateFormStatus.notify(form, 'Logging in...')

    $.ajax({
        type: "POST",
        url: '/src/php/cms/login.php',
        data: form.serialize(),
        success: function (response) {
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

$(document).on('submit', '#logout', function (e) {
    e.preventDefault()

    $.ajax({
        type: "POST",
        url: '/src/php/cms/logout.php',
        success: function (response) {
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
    var currentMainSection = location.pathname.split('/')[2];

    if (currentMainSection == "/") {
        $('nav .pages a').first().addClass('current');
    } else {
        $('nav .pages a').each(function () {
            var $this = $(this);
            // if the current path is like this link, make it active
            if ($this.attr('href').indexOf(currentMainSection) !== -1) {
                $this.addClass('current');
            }
        })
    }
});

//button actions

$(document).on('click', 'label.button', function () {
    let action = $(this).data('action')

    if (action === "open-dialog") {
        let dialogName = $(this).data('action-context')

        $('.dialog').each(function () {
            let name = $(this).attr('id')

            if (name === dialogName) {
                $(this).removeClass('hidden')
            }
        })
    } else if (action === "close-dialog") {
        let dialogName = $(this).data('action-context')

        $('.dialog').each(function () {
            let name = $(this).attr('id')

            if (name === dialogName) {
                $(this).addClass('hidden')
            }
        })
    } else if (action === "select-all") {
        let itemList = $(this).data('action-context')
        let itemListId = `#${itemList}`
        let actionGroupId = `#${$(itemList).data('action-group')}`

        $(itemListId).find('.item').each(function () {
            $(this).find('.actions input[type="checkbox"]').prop('checked', true)
        })

        actionGroup.show(actionGroupId)

        $(this).data('action', 'deselect-all')
        $(this).removeClass('grey')
        $(this).addClass('blue')
    } else if (action === "deselect-all") {
        let itemList = $(this).data('action-context')
        let itemListId = `#${itemList}`
        let actionGroupId = `#${$(itemListId).data('action-group')}`

        $(itemListId).find('.item').each(function () {
            $(this).find('.actions input[type="checkbox"]').prop('checked', false)
        })

        actionGroup.hide(actionGroupId)

        $(this).data('action', 'select-all')
        $(this).addClass('grey')
        $(this).removeClass('blue')
    }
})

//select possible new option

$(document).on('change', '.possible-new-select', function () {
    let value = $(this).val()
    let name = $(this).attr('id')

    if (value === "new-option") {
        let valueLabel = $(this).attr('name')

        $('.possible-new-input').each(function () {
            let inputName = $(this).attr('id')

            if (name === inputName) {
                if ($(this).hasClass('hidden')) {
                    $(this).attr('name', valueLabel)
                    $(this).removeClass('hidden')
                }
            }
        })

        $(this).attr('name', '')
    } else {
        let valueLabel

        $('.possible-new-input').each(function () {
            let inputName = $(this).attr('id')

            if (name === inputName) {
                if (!$(this).hasClass('hidden')) {
                    $(this).addClass('hidden')
                    valueLabel = $(this).attr('name')
                    $(this).attr('name', '')
                }
            }
        })

        $(this).attr('name', valueLabel)
    }
})

//select highlight

$(document).ready(function () {
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

$(document).on('click', '.item-list .item', function () {
    let checkbox = $(this).find('.actions input[type="checkbox"]')
    let checkboxId = $(checkbox).attr('id')
    let actionGroupId = `#${$(this).closest('.item-list').data('action-group')}`
    let otherItemSelected = false

    $(this).closest('.item-list').find('.item .actions input[type="checkbox"]:checked').each(function() {
        if (checkboxId !== $(this).attr('id')) {
            otherItemSelected = true
        }
    })

    if (checkbox.is(':checked')) {
        if (!otherItemSelected) {
            actionGroup.hide(actionGroupId)
        }

        $(checkbox).prop("checked", false)
    } else {
        actionGroup.show(actionGroupId)
        $(checkbox).prop("checked", true)
    }
})

//open item in list

$(document).on('dblclick', '.item-list .item', function() {
    let itemId = $(this).attr('id')
    let itemAction = $(this).data('url')
    let websiteOrigin = window.location.origin

    let url = websiteOrigin + '/cms/' + itemAction + `/?id=${itemId}`

    window.location.href = url
})

//action group

const actionGroup = {
    toggle: (actionGroupId) => {
        $(actionGroupId).toggleClass('hidden')
    },
    hide: (actionGroupId) => {
        $(actionGroupId).addClass('hidden')
    },
    show: (actionGroupId) => {
        $(actionGroupId).removeClass('hidden')
    }
}

//switch

$(document).on('click', '.switch .button', function() {
    $(this).closest('.switch').find('.button').each(function() {
        $(this).removeClass('selected')
    })

    $(this).addClass('selected')
})

//notification

const notification = {
    notify: (notificationContainer, message, duration) => {
        let container = $('#' + notificationContainer)
        let notificationDuration = duration * 1000

        $(container).removeClass('succes')
        $(container).removeClass('fail')
        $(container).text(message)
        $(container).removeClass('hidden')

        window.setTimeout(function() {
            $(container).addClass('hidden')
        }, notificationDuration)
    },
    fail: (notificationContainer, message, duration) => {
        let container = $('#' + notificationContainer)
        let notificationDuration = duration * 1000

        $(container).removeClass('succes')
        $(container).addClass('fail')
        $(container).text(message)
        $(container).removeClass('hidden')

        window.setTimeout(function() {
            $(container).addClass('hidden')
        }, notificationDuration)
    },
    succes: (notificationContainer, message, duration) => {
        let container = $('#' + notificationContainer)
        let notificationDuration = duration * 1000

        $(container).addClass('succes')
        $(container).removeClass('fail')
        $(container).text(message)
        $(container).removeClass('hidden')

        window.setTimeout(function() {
            $(container).addClass('hidden')
        }, notificationDuration)
    }
}

//set dynamic viewheight

$(document).ready(function () {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});


