class AnswerCard {

    constructor (answer) {
        this.data = answer
    }

    vote (voteType) {
        $.ajax({
            method: 'POST',
            url: 'https://www.zhihu.com/api/v4/answers/' + answerId + '/voters',
            contentType: 'application/json',
            data: JSON.stringify({type: voteType}),
            dataType: 'json'
        }).done(function (response) {
            voteButtonShow(answerId, response.voteup_count, voteType)
        })
    }

    constructCustomizeAnswerCards () {
        let answerCardHtml = answerTemplate({
            authorName: this.answer.author.name,
            authorAvatarUrl: this.answer.author.avatar_url,
            authorHeadline: this.answer.author.headline,
            voteUpCount: this.answer.voteup_count,
            richTextAnswer: this.answer.content,
            commentCount: this.answer.comment_count,
            timestamp: this.answer.updated_time,
        })
        answerCardHtmlWithPicture = cardPictureHandler(answerCardHtml)
        return answerCardHtmlWithPicture
    }

    addVoteMethod (answerId) {
        let $card = $('div[answer_id|="'+this.answer.id+'"]')
        let voting = $card.attr('voting')
        let id = $card.attr('answer_id')
        $card.find('.VoteButton--up').click(this.vote.bind(null, answerId, voting === '1' ? 'neutral': 'up'))
        $card.find('.VoteButton--down').click(this.vote.bind(null, answerId, voting === '-1' ? 'neutral': 'down'))
    }

    zhihuPublishTimeFormat (timestamp) {
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

    zhihuVoteupButtonNumberFormat (num) {
        if (num < 1000) {
            return num
        } else if (num > 10000) {
            return (num/1000).toFixed(0) + 'K'
        } else {
            return (num/1000).toFixed(1) + 'K'
        }
    }

    cardPictureHandler (answerCardHtml) {
        let $card = $(answerCardHtml)
        $card.find('figure img').attr('src', function () {
            return $(this).attr('data-actualsrc').replace('/50/', '/80/')
        })
        return $card.prop('outerHTML')
    }

}