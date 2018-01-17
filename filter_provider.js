// let answerApi = `https://www.zhihu.com/api/v4/questions/265318350/answers?sort_by=default&include=data%5B%2A%5D.is_normal%2Cadmin_closed_comment%2Creward_info%2Cis_collapsed%2Cannotation_action%2Cannotation_detail%2Ccollapse_reason%2Cis_sticky%2Ccollapsed_by%2Csuggest_edit%2Ccomment_count%2Ccan_comment%2Ccontent%2Ceditable_content%2Cvoteup_count%2Creshipment_settings%2Ccomment_permission%2Ccreated_time%2Cupdated_time%2Creview_info%2Crelevant_info%2Cquestion%2Cexcerpt%2Crelationship.is_authorized%2Cis_author%2Cvoting%2Cis_thanked%2Cis_nothelp%2Cupvoted_followees%3Bdata%5B%2A%5D.mark_infos%5B%2A%5D.url%3Bdata%5B%2A%5D.author.follower_count%2Cbadge%5B%3F%28type%3Dbest_answerer%29%5D.topics&limit=${limit}&offset=${offset}`
let customButtonExist = false
let buttonFactory = (buttonText) =>
    '<button class="Select-option" tabindex="-1" role="option">' + buttonText + '</button>'
let sortListShow = () => $('.Select-list').length !== 0
let totalAnswerNum = parseInt($('.List-headerText > span').text().split(' ')[0])

// function getTotalAnswer() {
//     // let xhr = new XMLHttpRequest()
//     // xhr.open('GET', answerApi, false)
//     // xhr.send
//     // console.log(xhr.status)
//     var request = new XMLHttpRequest(); // 新建XMLHttpRequest对象
//
//     request.onreadystatechange = function () { // 状态发生变化时，函数被回调
//         if (request.readyState === 4) { // 成功完成
//             // 判断响应结果:
//             if (request.status === 200) {
//                 // 成功，通过responseText拿到响应的文本:
//                 console.log(request.responseText)
//                 // return success(request.responseText);
//             } else {
//                 // 失败，根据响应码判断失败原因:
//                 // return fail(request.status);
//                 console.log('fail')
//             }
//         } else {
//             // HTTP请求还在继续...
//         }
//     }

// // 发送请求:
//     request.open('GET', answerApi);
//     request.send();

let addSortButton = () => {
    if (sortListShow() && !customButtonExist) {
        buttonTextList = ['按赞数排序', '按作者筛选']
        for (let buttonText of buttonTextList) {
            $('.Select-list').append(buttonFactory(buttonText))
        }
        customButtonExist = true
    }
    if (!sortListShow()) {
        customButtonExist = false
    }
}


setInterval(addSortButton, 500)
