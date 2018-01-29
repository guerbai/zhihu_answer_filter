let hideOriginAnswerCards = () => {
    $('.Card > .List > div:eq(1) > div').css('display', 'none')
}


let constructCustomizeAnswerCards = (answer) => {
    return answerTemplate({
        authorName: answer.author.name,
        authorAvatarUrl: answer.author.avatar_url,
        authorHeadline: answer.author.headline,
        voteUpCount: answer.voteup_count,
        richTextAnswer: answer.content,
        commentCount: answer.comment_count,
    })
}

let romanceAnswer = (answerList) => {
    answerHtml = '<div class>'
    for (let answer of answerList) {
        answerHtml += constructCustomizeAnswerCards(answer)
    }
    answerHtml += '</div>'
    $('.Card > .List > div:eq(1)').append(answerHtml)
}
