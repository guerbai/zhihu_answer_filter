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
        return [voteUpSortButton, authorFilterButton]
    }

    static romanceAnswer (sortFunc) {
        if (!Question.totalAnswerGot()) {
            Question.getInstance().getTotalAnswer()
            console.log('not end')
            setTimeout(Button.romanceAnswer.bind(this, sortFunc), 1000)
            return
        }
        Question.hideOriginAnswerCards()
        let answerList = sortFunc()
        $('.Card > .List > div:eq(1) > div').css('display', 'none')
        for (let answer in answerList) {
            $('.Card > .List > div:eq(1)').prepend(answer)
        }
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
        // this.getTotalAnswer()
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
    
    getTotalAnswer () {
        let self = this
        let y = 100000
        let numTrail = 0
        let startAt = new Date()
        let myInterval = setInterval(()=>{
            let height1 = window.pageYOffset
            window.scrollTo(0, y)
            let height2 = window.pageYOffset
            if (height1 !== height2) {
                numTrail = 0
            }
            y += 100000
            if (numTrail === 25 || new Date() - startAt> 60000) {
                console.log(new Date() - startAt)
                clearInterval(myInterval)
                self.totalAnswerGot = true
                $('.Card > .List > div:eq(1) > div > .List-item').each(function () {
                    self.answerList.concat($(this).detach())
                })
            }
            numTrail += 1
        }, 200)
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
