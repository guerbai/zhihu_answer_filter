// get all answer.
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
        let url = answerApi({
           questionId: questionNo,
           offset: answerNo
        })
        $.ajax({
            method: 'GET',
            url: url,
        }).done((function (nowAnswerNo) {
            return function (response) {
                doneCount += 1
                answerList = answerList.concat(response.data)
                if (doneCount === requestCount) {
                    totalAnswerGot = true
                }
            }
        })(answerNo))
        answerNo += 20
    }
}

// customize func.
let sortByVoteUpCount = () => {
    hideOriginAnswerCards()
    if (!totalAnswerGot) {
        console.log('not end')
        setTimeout(sortByVoteUpCount, 1000)
        return
    }
    let mostVoteUpAnswer = _.sortBy(answerList, function (answer) {
        return -answer.voteup_count
    }).slice(0, 50)
    romanceAnswer(mostVoteUpAnswer)
    console.log(mostVoteUpAnswer)
}

let filterByAuthor = () => {
    hideOriginAnswerCards()
    if (!totalAnswerGot) {
        setTimeout(filterByAuthor, 1000)
        return
    }
    let author = prompt('请输入作者名')
    let authorAnswer = _.filter(answerList, function (answer) {
        return answer.author.name.indexOf(author) > -1
    })
    romanceAnswer(authorAnswer)
    console.log(authorAnswer)
    for (let answer of authorAnswer) {
        console.log(answer.author.name)
    }
}
