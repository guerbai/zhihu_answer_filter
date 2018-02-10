class AnswerCard {

    constructor (answer) {
        this.data = answer
        this.html = ''
    }

    recover () {
        this.addVoteMethod()
        this.addThanksMethod()

    }

    addThanksMethod () {
        let $card = $('div[answer_id|="'+this.data.id+'"]')
        let thanksButton = $card.find('button:has(svg.Zi--Heart)')
        let isThanked = () => this.data.relationship.is_thanked
        let method = () => isThanked() ? 'DELETE': 'POST'
        let toText = () => isThanked() ? ['取消感谢', '感谢']: ['感谢', '取消感谢']

        thanksButton.click(()=>{
            $.ajax({
                method: method(),
                url: 'https://www.zhihu.com/api/v4/answers/'+this.data.id+'/thankers'
            }).done((response) => {
                this.data.relationship.is_thanked = response.is_thanked
                let [nextText, replacedText] = toText()
                thanksButton.replaceChildText(nextText)
            })
        })
    }

    getVoteUpCount () {
        return this.data.voteup_count
    }

    authorNameContainSearchStr (searchStr) {
         return this.data.author.name.indexOf(searchStr) > -1
    }

    _getVoteType (buttonType) {
        let voteType
        if (buttonType === '1') {
            voteType = this.data.voting === '1' ? 'neutral': 'up'
        } else if (buttonType === '-1') {
            voteType = this.data.voting === '-1' ? 'neutral': 'down'
        }
        return voteType
    }
    
    vote (buttonType) {
        let voteType = this._getVoteType(buttonType)
        $.ajax({
            method: 'POST',
            url: 'https://www.zhihu.com/api/v4/answers/' + this.data.id + '/voters',
            contentType: 'application/json',
            data: JSON.stringify({type: voteType}),
            dataType: 'json'
        }).done((response) => {
            this.data.voting = response.voting
            console.log(response)

            // voteButtonShow(answerId, response.voteup_count, voteType)
        })
    }

    constructCustomizeAnswerCards () {
        this.html = answerTemplate({
            answerId: this.data.id,
            authorName: this.data.author.name,
            authorAvatarUrl: this.data.author.avatar_url,
            authorHeadline: this.data.author.headline,
            voteUpCount: this.data.voteup_count,
            richTextAnswer: this.data.content,
            commentCount: this.data.comment_count,
            timestamp: this.data.updated_time,
            isThanked: this.data.relationship.is_thanked,
        })
        this.cardPictureHandler()
        return this.html
    }

    addVoteMethod () {
        let $card = $('div[answer_id|="'+this.data.id+'"]')
        let voting = this.data.relationship.voting
        $card.find('.VoteButton--up').click(this.vote.bind(this, '1'))
        $card.find('.VoteButton--down').click(this.vote.bind(this, '-1'))
    }

    static zhihuPublishTimeFormat (timestamp) {
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

    static zhihuVoteupButtonNumberFormat (num) {
        if (num < 1000) {
            return num
        } else if (num > 10000) {
            return (num/1000).toFixed(0) + 'K'
        } else {
            return (num/1000).toFixed(1) + 'K'
        }
    }

    cardPictureHandler () {
        let $card = $(this.html)
        $card.find('figure img').attr('src', function () {
            return $(this).attr('data-actualsrc').replace('/50/', '/80/')
        })
        this.html = $card.prop('outerHTML')
    }

    static zhihuThankText (isThanked) {
        return isThanked ? '取消感谢': '感谢'
    }
}
