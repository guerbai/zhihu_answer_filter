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
    }
    numTrail += 1
}, 200)

let question1 = $('.Card > .List > div:eq(1) > div > .List-item:first-child').detach()
let question2 = $('.Card > .List > div:eq(1) > div > .List-item:nth-child(1)').detach()
let answerHtml = question2.prop('outerHTML') + question1.prop('outerHTML')
$('.Card > .List > div:eq(1) > div').css('display', 'none')
setTimeout(()=>{
    $('.Card > .List > div:eq(1)').prepend(question1)
    $('.Card > .List > div:eq(1)').prepend(question2)
}, 3000)
