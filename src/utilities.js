
export function container(content) {
    return `<div id="site" class="container">${content}</div>`
}

export function filter(content,styles = '') {
    return `<form class="form" style="${styles}">${content}</form>`
}

export function tabsButtons(content){
    return `<div class="tabs">
    ${content}
    </div>`
}

export function takeTickets(content) {
    return `<div class="tickets">${content}</div>`
}