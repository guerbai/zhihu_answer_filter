// TODO: 增加按赞数排序，选择赞数范围；
// TODO: 增加按author姓名搜索.
customButtonExist = false

function getAnswerNum() {
    return parseInt(document.getElementsByClassName('List-headerText')[0].textContent.split(' ')[0])
}

function getSelectList() {
    return document.getElementsByClassName('Select-list')[0]
}

function getButtonTemplate(selectList) {
    return selectList.getElementsByTagName('button')[1]
}

function generateButtonId() {
    return '1'
}

function createButton(buttonTemplate, text, onclickFunc) {
    let button = buttonTemplate.cloneNode(true)
    button.textContent = text
    button.onclick = onclickFunc
    return button
}

setInterval(function () {
    selectList = getSelectList()
    if (selectList && !customButtonExist) {
        buttonTemplate = getButtonTemplate(selectList)
        let button = createButton(buttonTemplate, '按赞数排序', function () {
            console.log(111)
        })
        selectList.appendChild(button)
        customButtonExist = true
    }
    if (!selectList) {
        customButtonExist = false
    }
}, 500)
