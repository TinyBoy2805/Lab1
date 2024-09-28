const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const tabs = $$('.nav-tab')

const tabline = $('#tabline')

const tabActive = $('.nav-tab.active')
const tabActive2 = $('.nav2-tab.active')

const tabs2 = $$('.nav2-tab')

const nav2 = $('#nav2')
let hoverCheck = false
const nav2_value = ["Requirement", "Design", "Implement"]
const content_items = $$('.content-item')
const nav2_content = $('.nav2-content')
const nav2_tab_content = $$('.nav2-tab-content')

const inputs = $$('input')

const addBtn = $('#addBtn');


// addBtn.addEventListener("click", ()=>
// {
//     console.log([inputs]);
    
// })




function reloadPage()
{
    window.location.reload();
}


tabline.style.left = tabActive.getBoundingClientRect().left + 'px'
tabline.style.width = tabActive.getBoundingClientRect().width + 'px'


tabs.forEach((tab, index)=>
{
    const content = content_items[index]
    tab.onclick = function()
    {
        $('.nav-tab.active').classList.remove("active")
        $('.content-item.active').classList.remove("active")

        tabline.style.left = this.getBoundingClientRect().left + 'px'
        tabline.style.width = this.getBoundingClientRect().width + 'px'    
        content.classList.add("active")
        this.classList.add("active")
    }
})


tabs2.forEach((tab, index)=>
{
    const value = nav2_value[index]
    const nav2TabContent = nav2_tab_content[index]
    tab.onclick = function()
    {
        $('.nav2-tab.active').classList.remove("active")
        $('.nav2-tab-content.active').classList.remove("active")

        nav2TabContent.classList.add("active")
        this.classList.add("active")
    }

    tab.addEventListener('mouseover', function()
    {

        if(hoverCheck===false)
        {
            hoverCheck = true
            const tab_inf = document.createElement("div")
            tab_inf.classList.add("div-info")
            tab_inf.innerHTML = `<div>${value}</div>`
            tab_inf.style.top = this.getBoundingClientRect().top - this.getBoundingClientRect().height + 'px'
            tab_inf.style.left = this.getBoundingClientRect().width + 10 + 'px'
            
            nav2.appendChild(tab_inf)
        }
    })

    tab.addEventListener('mouseleave', function()
    {
        if(hoverCheck)
        {
            hoverCheck = false
            nav2.removeChild($('.div-info'))
        }
    })



})