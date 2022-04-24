const switchViewBtn = document.querySelector('.btn-switch-view')
const tableView = document.querySelector('.table-view')
const cardView = document.querySelector('.card-view')
cardView.style.display = 'none'

switchViewBtn.onclick = (e) => {
    tableView.style.display = tableView.style.display === 'none' ? 'block' : 'none'
    cardView.style.display = cardView.style.display === 'none' ? 'block' : 'none'
}