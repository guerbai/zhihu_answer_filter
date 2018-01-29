String.prototype.format = function () {
    var i = 0, args = arguments;
    return this.replace(/{}/g, function () {
        return typeof args[i] != 'undefined' ? args[i++] : ''
    })
}

let answerCount = parseInt($('.List-headerText > span').text().split(' ')[0])
let questionNo = window.location.href.split('/').pop()

let totalAnswerGot = false
let answerList = []

let getTotalAnswer = () => {
    let answerNo = 0
    requestCount = 0
    doneCount = 0
    while (answerNo <= answerCount) {
        requestCount += 1
        let url = answerApi.format(questionNo, answerNo)
        $.ajax({
            method: 'GET',
            url: url,
        }).done((function (nowAnswerNo) {
            return function (response) {
                doneCount += 1
                answerList = answerList.concat(response.data)
                if (doneCount === requestCount) {
                    console.log('nani')
                    totalAnswerGot = true
                }
            }
        })(answerNo))
        answerNo += 20
    }
}

getTotalAnswer()
