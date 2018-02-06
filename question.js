class Button {
    constructor (text, no, click_func) {
        this.text = text
        this.no = no
        this.click_func = click_func
    }

    embed () {
        let buttonHtml = '<button class="Select-option" tabindex="-1" role="option">'+this.text+'</button>'
        $('.Select-list').append(buttonHtml)
        $('.Select-list > button:eq('+this.no+')').click(this.click_func)
    }

    static getCustomizeButtons () {
        let voteUpSortButton = new Button('按赞数排序', 2, this.sortByVoteUpCount)
        let authorFilterButton = new Button('按作者筛选', 3, this.filterByAuthor)
        let buttons = [voteUpSortButton, authorFilterButton]
        return buttons
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

    init () {
        this._getTotalAnswer()
        this._customizeButtonController()
    }

    _sortListShow () {
        return $('.Select-list').length !== 0
    }

    _hideOriginAnswerCards () {
        return $('.Card > .List > div:eq(1) > div').css('display', 'none')
    }
    
    _getTotalAnswer () {
        let self = this
        let answerNo = 0
        let requestCount = 0
        let doneCount = 0
        while (answerNo <= this.answerCount) {
            requestCount += 1
            let url = answerApi({
                questionId: this.questionNo,
                offset: answerNo
            })
            $.ajax({
                method: 'GET',
                url: url,
            }).done(((nowAnswerNo) => {
                return function (response) {
                    doneCount += 1
                    self.answerList = self.answerList.concat(_.map(response.data, (answer)=>new AnswerCard(answer)))
                    if (doneCount === requestCount) {
                        console.log('got total answer!')
                        self._totalAnswerGot = true
                    }
                }
            })(answerNo))
            answerNo += 20
        }
    }

    _customizeButtonController () {
        if (this._sortListShow() && !this.customButtonExist) {
            for (let button of Button.getCustomizeButtons()) {
                button.embed()
            }
            this.customButtonExist = true
        }
        if (!this._sortListShow()) {
            this.customButtonExist = false
        }
        setTimeout(this._customizeButtonController.bind(this), 500)
    }

    sortByVoteUpCount () {
        this._hideOriginAnswerCards()
        if (!this.totalAnswerGot) {
            console.log('not end')
            setTimeout(this.sortByVoteUpCount, 1000)
            return
        }
        let mostVoteUpAnswer = _.sortBy(this.answerList, function (answer) {
            return -answer.voteup_count
        }).slice(0, 50)
        this.romanceAnswer(mostVoteUpAnswer)
        console.log(mostVoteUpAnswer)
    }

    filterByAuthor () {
        this._hideOriginAnswerCards()
        if (!this.totalAnswerGot) {
            setTimeout(filterByAuthor, 1000)
            return
        }
        let author = prompt('请输入作者名')
        let authorAnswer = _.filter(this.answerList, function (answer) {
            return answer.author.name.indexOf(author) > -1
        })
        this.romanceAnswer(authorAnswer)
        console.log(authorAnswer)
        for (let answer of authorAnswer) {
            console.log(answer.author.name)
        }
    }

    romanceAnswer (answerList) {
        answerHtml = '<div class>' + _.reduce(answerList,
            (memo, answer)=>memo+answer.constructCustomizeAnswerCards(), '') + '</div>'
        $('.Card > .List > div:eq(1)').append(answerHtml)
        addVoteMethod('310953416')
    }
}
