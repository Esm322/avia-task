import { container, filter, tabsButtons,  takeTickets } from "./utilities"

function form(block) {
    const styles = block.options.styles
    return filter(`
    <h1>КОЛИЧЕСТВО ПЕРЕСАДОК</h1>  
        <div class="hover">
            <label>
                <input class="original-check" type="checkbox">
                <span class="custom-check"></span>
                Все
            </label>
        </div>
        <div class="hover">
            <label>
                <input class="original-check" type="checkbox">
                <span class="custom-check"></span>
                Без пересадок
            </label>
        </div>
        <div class="hover">
            <label>
                <input class="original-check" type="checkbox">
                <span class="custom-check"></span>
                1 пересадка
            </label>
        </div>
        <div class="hover">
            <label>
                <input class="original-check" type="checkbox">
                <span class="custom-check"></span>
                2 пересадки
            </label>
        </div>
        <div class="hover">
            <label>
                <input class="original-check" type="checkbox">
                <span class="custom-check"></span>
                3 пересадки
            </label>
        </div>
        `
       , styles)
}

function tabs(block) {
    const html = block.value.map(tabsButtons).join('')
    return html
}
function tickets() {
    return takeTickets(`

    `)
}

export const templates = {
    form,
    tabs,
    tickets,
}