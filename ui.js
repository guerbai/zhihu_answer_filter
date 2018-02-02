// util.
function zhihuPublishTimeFormat(timestamp) {
    let now = moment()
    let publishMoment = moment(timestamp*1000)
    if (now.dayOfYear() === publishMoment.dayOfYear() && now.year() === publishMoment.year()) {
        return publishMoment.format('HH:mm')
    } else if (moment(now.format('YYYY-MM-DD')).to(moment(publishMoment.format('YYYY-MM-DD'))) === 'a day ago') {
        return '昨天 ' + publishMoment.format('HH:mm')
    } else {
        return publishMoment.format('YYYY-MM-DD')
    }
}

function zhihuVoteupButtonNumberFormat(num) {
    if (num < 1000) {
        return num
    } else if (num > 10000) {
        return (num/1000).toFixed(0) + 'K'
    } else {
        return (num/1000).toFixed(1) + 'K'
    }
}

function cardPictureHandler(answerCardHtml) {
    let $card = $(answerCardHtml)
    $card.find('figure img').attr('src', function () {
        return $(this).attr('data-actualsrc').replace('/50/', '/80/')
    })
    return $card.prop('outerHTML')
}

// button.
let customButtonExist = false

function sortListShow () {
    return $('.Select-list').length !== 0
}

function buttonFactory (buttonText) {
    return buttonTemplate({buttonText: buttonText})
}

class Button {
    constructor (text, no, click_func) {
        this.text = text
        this.no = no
        this.click_func = click_func
    }
}

voteUpSortButton = new Button('按赞数排序', 2, sortByVoteUpCount)
authorFilterButton = new Button('按作者筛选', 3, filterByAuthor)

buttons = [voteUpSortButton, authorFilterButton]

let buttonController = () => {
    if (sortListShow() && !customButtonExist) {
        for (let button of buttons) {
            $('.Select-list').append(buttonFactory(button.text))
            $('.Select-list > button:eq('+button.no+')').click(button.click_func)
        }
        customButtonExist = true
    }
    if (!sortListShow()) {
        customButtonExist = false
    }
}

// answer card.
let hideOriginAnswerCards = () => {
    $('.Card > .List > div:eq(1) > div').css('display', 'none')
}


let constructCustomizeAnswerCards = (answer) => {
    let answerCardHtml = answerTemplate({
        authorName: answer.author.name,
        authorAvatarUrl: answer.author.avatar_url,
        authorHeadline: answer.author.headline,
        voteUpCount: answer.voteup_count,
        richTextAnswer: answer.content,
        commentCount: answer.comment_count,
        timestamp: answer.updated_time,
    })
    answerCardHtmlWithPicture = cardPictureHandler(answerCardHtml)
    return answerCardHtmlWithPicture
}

let romanceAnswer = (answerList) => {
    answerHtml = '<div class>'
    for (let answer of answerList) {
        answerHtml += constructCustomizeAnswerCards(answer)
    }
    answerHtml += '</div>'
    $('.Card > .List > div:eq(1)').append(answerHtml)
}
