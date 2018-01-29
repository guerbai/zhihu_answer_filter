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
