let sortListShow = () => $('.Select-list').length !== 0
let customButtonExist = false

let buttonFactory = (buttonText) =>
    '<button class="Select-option" tabindex="-1" role="option">{}</button>'.format(buttonText)

class Button {
    constructor (text, no, click_func) {
        this.text = text
        this.no = no
        this.click_func = click_func
    }
}

voteUpSortButton = new Button('按赞数排序', 2, sortByVoteUpCount)
authorFilterButton = new Button('按作者筛选', 3, filterByAuthor)

buttons = [voteUpSortButton, authorFilterButton]

let buttonController = () => {
    if (sortListShow() && !customButtonExist) {
        for (let button of buttons) {
            $('.Select-list').append(buttonFactory(button.text))
			$('.Select-list > button:eq({})'.format(button.no)).click(button.click_func)
        }
        customButtonExist = true
    }
    if (!sortListShow()) {
        customButtonExist = false
    }
}


setInterval(buttonController, 500)
