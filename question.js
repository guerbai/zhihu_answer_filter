$.prototype.replaceChildText = function (text) {
    let textNodes = this.contents().filter(function() {
        return this.nodeType === 3
    })

    textNodes.each(function() {
        if (this.nodeValue.trim() !== '') {
            this.nodeValue = text
        }
    })
}

class Button {
    constructor (text, no) {
        this.text = text
        this.no = no
    }

    embed () {
        let buttonHtml = '<button class="Select-option" tabindex="-1" role="option">'+this.text+'</button>'
        $('.Select-list').append(buttonHtml)
        $('.Select-list > button:eq('+this.no+')').click(this.click_func)
    }

    addClickFunc (func) {
        this.click_func = func
    }

    static getCustomizeButtons () {
        let voteUpSortButton = new Button('按赞数排序', 2)
        let authorFilterButton = new Button('按作者筛选', 3)
        voteUpSortButton.addClickFunc(Button.romanceAnswer.bind(voteUpSortButton, Question.sortByVoteUpCount))
        authorFilterButton.addClickFunc(Button.romanceAnswer.bind(authorFilterButton, Question.filterByAuthor))
        let buttons = [voteUpSortButton, authorFilterButton]
        return buttons
    }

    static romanceAnswer (sortFunc) {
        if (!Question.totalAnswerGot()) {
            console.log('not end')
            setTimeout(Button.romanceAnswer.bind(this, sortFunc), 1000)
            return
        }
        Question.hideOriginAnswerCards()
        let answerList = sortFunc()
        let answerHtml = '<div class>' + _.reduce(answerList,
            (memo, answer)=>memo+answer.constructCustomizeAnswerCards(), '') + '</div>'
        $('.Card > .List > div:eq(1)').append(answerHtml)
        _.map(answerList, (answer)=>answer.recover())
        console.log($('.Select-plainButton'))
        $('.Select-plainButton').replaceChildText(this.text)
    }
}


class Question {
    constructor () {
        if (questionInstance) {
            return questionInstance
        } 
        this.answerCount = parseInt($('.List-headerText > span').text().split(' ')[0])
        this.questionNo = window.location.href.split('/').pop()
        this.totalAnswerGot = false
        this.answerList = []
        this.customButtonExist = false
        questionInstance = this
    }

    static getInstance () {
        return questionInstance
    }

    init () {
        this._getTotalAnswer()
        this._customizeButtonController()
    }

    static sortListShow () {
        return $('.Select-list').length !== 0
    }

    static hideOriginAnswerCards () {
        return $('.Card > .List > div:eq(1) > div').css('display', 'none')
    }

    static getAnswerList () {
        return Question.getInstance().answerList
    }

    static totalAnswerGot() {
        return Question.getInstance()._totalAnswerGot
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
        if (Question.sortListShow() && !this.customButtonExist) {
            for (let button of Button.getCustomizeButtons()) {
                button.embed()
            }
            this.customButtonExist = true
        }
        if (!Question.sortListShow()) {
            this.customButtonExist = false
        }
        setTimeout(this._customizeButtonController.bind(this), 500)
    }

    static sortByVoteUpCount () {
        let answerList = Question.getInstance().answerList
        let mostVoteUpAnswer = _.sortBy(answerList, function (answer) {
            return -answer.getVoteUpCount()
        }).slice(0, 50)
        return mostVoteUpAnswer
    }

    static filterByAuthor () {
        let answerList = Question.getInstance().answerList
        let author = prompt('请输入作者名')
        let authorAnswer = _.filter(answerList, function (answer) {
            return answer.authorNameContainSearchStr(author)
        })
        console.log(authorAnswer)
        return authorAnswer
    }

}

// poor singleton.
let questionInstance = null;
