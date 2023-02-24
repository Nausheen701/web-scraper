const puppeteer = require('puppeteer');
// const xlsx = require('xlsx');
// const GoogleSpreadsheet = require('google-spread')


(async function () {
        // new browser instance
    const browser = await puppeteer.launch( { headless : false } )
    const page = await browser.newPage()
    await page.goto('https://techcrunch.com/')
    
    const data = await page.evaluate(function() {
        
            // empty array
        // const events = document.querySelectorAll('.river__title river__title--home')
        // const events = document.querySelectorAll('#tc-main content')
        // const events = document.querySelectorAll('.content content--feature-island')
        // const events = document.querySelectorAll('.feature-island-main-block fi-main-block--unread')  
        // const events = document.querySelectorAll('.river river--homepage')   
            // timed out
        // const events = document.querySelectorAll('#root')
        // const events = document.querySelectorAll('.content')
       
        // const events = document.querySelectorAll('.content content--feature-island')

     
           // WORKS but only pulls the 2 titles within it
           const events = document.querySelectorAll('.content-wrap')
            
        //    timed out
        // const events = document.querySelectorAll('.post-block post-block--image post-block--unread')
        // <article class="post-block post-block--image post-block--unread">
           // error
        // const events = document.querySelectorAll('.content')

        const array = []
        for (i=0; i<events.length; i++) {
        // for (i=0; i<5; i++) {
            array.push({
                    // not extracting data
                // title: events[i].querySelector('.post-block__title__link').innerText,
                    // not extracting data
                // title: events[i].querySelector('.post-block post-block--image post-block--unread').innerText,
                    // invalid -> timing out
                // title: events[i].querySelector('.content-wrap').innerText,
                    // returns empty hashes
                // title: events[i].querySelectorAll('.post-block__title__link').innerText
                 // title: events[i].querySelector('.fi-main-block__title').innerText
               
                    // THIS WORKS for the Latest section and main feature article titles
                title: events[i].querySelector('.post-block__title__link').innerText,
               

                // innerText throwing error
                // datetime: events[i].querySelector('.river-byline__full-date-time').innerText
                // datetime: events[i].getElementById('datetime').value
            })
        }

        return array
    })
    console.log(data)

    // const aoaData = data.map(d => [d])

    // const wb = xlsx.utils.book_new()
    // const ws = xlsx.utils.aoa_to_sheet(aoaData)
    // xlsx.utils.book_append_sheet(wb,ws)
    // xlsx.writeFile(wb, "fundraising_announcements.xlsx")


})()

// const page = await browser.newPage()
//     await page.goto('https://techcrunch.com/')

//    const data = await page.evaluate(function() {
//         const events = document.querySelectorAll('.content-wrap')
//         const array = []

//         for (i=0; i<events.length; i++) {
//             array.push({
//                 // title: events[i].querySelector('.post-block__title__link').innerText,
//                 title1: events[i].querySelector('.mini-view__item__title').innerText
//                 // date: events[i].querySelector('date').innerText,
                
//             })
//         }

//         return array
//     })

//     console.log(data)