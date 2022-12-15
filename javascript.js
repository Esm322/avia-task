const model = [
    {type: 'title'},
    {type: 'form'},
  ]
  
  const $site = document.querySelector('#site')
  
  model.forEach (block =>{
    let html = '';
    if (block.type === 'title'){
        html = title(block)
    }else if (block.type === 'form'){
        html = form(block)
    }
    $site.insertAdjacentHTML("beforeend", html)
  })
  
  function title (block){
    return `
    <div id="site" class="content">
        <div class="filter">
            <form action="">
                <h1>КОЛИЧЕСТВО ПЕРЕСАДОК</h1>
            </form>
        </div>
    </div>`
  }
  function form (block){
    return `<div id="site" class="content">
        <div class="filter">
            <form action="">
                <label>
                    <input class="original-check" type="checkbox">
                    <span class="custom-check"></span>
                    Все
                </label>
                <label>
                    <input class="original-check" type="checkbox">
                    <span class="custom-check"></span>
                    Без пересадок
                </label>
                <label>
                    <input class="original-check" type="checkbox">
                    <span class="custom-check"></span>
                    1 пересадка
                </label>
                <label>
                    <input class="original-check" type="checkbox">
                    <span class="custom-check"></span>
                    2 пересадки
                </label>
                <label>
                    <input class="original-check" type="checkbox">
                    <span class="custom-check"></span>
                    3 пересадки
                </label>
            </form>
        </div>
    </div>`
  }