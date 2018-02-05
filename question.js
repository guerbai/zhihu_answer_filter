class Button {
    constructor (text, no, click_func) {
        this.text = text
        this.no = no
        this.click_func = click_func
    }

    getHtml () {
        return '<button class="Select-option" tabindex="-1" role="option">'+buttonText+'</button>'
    }
}

class Question {
    constructor () {
        this.answerCount = parseInt($('.List-headerText > span').text().split(' ')[0])
        this.questionNo = window.location.href.split('/').pop()
        this.totalAnswerGot = false
        this.answerList = []
        this.customButtonExist = false
    }

    sortListShow () {
        return $('.Select-list').length !== 0
    }

    customizeSortButton () {
        voteUpSortButton = new Button('按赞数排序', 2, sortByVoteUpCount)
        authorFilterButton = new Button('按作者筛选', 3, filterByAuthor)

        buttons = [voteUpSortButton, authorFilterButton]

        let buttonController = () => {
            if (sortListShow() && !customButtonExist) {
                for (let button of buttons) {
                    $('.Select-list').append(button.getHtml())
                    $('.Select-list > button:eq('+button.no+')').click(button.click_func)
                }
                customButtonExist = true
            }
            if (!sortListShow()) {
                customButtonExist = false
            }
        }
    }

    _hideOriginAnswerCards = () => {
        $('.Card > .List > div:eq(1) > div').css('display', 'none')
    }

    getTotalAnswer () {
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
                    this.answerList = answerList.concat(response.data)
                    if (doneCount === requestCount) {
                        totalAnswerGot = true
                    }
                }
            })(answerNo))
            answerNo += 20
        }
    }

    sortByVoteUpCount () {
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

    filterByAuthor () {
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

    romanceAnswer () {
        answerHtml = '<div class>'
        for (let answer of answerList) {
            answerHtml += constructCustomizeAnswerCards(answer)
        }
        answerHtml += '</div>'
        $('.Card > .List > div:eq(1)').append(answerHtml)
        addVoteMethod('310953416')
    }
}
