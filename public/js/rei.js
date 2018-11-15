// DELETE ME!!!

console.log("rei");

const productID = "122304"

const cheerio = require('cheerio');
const puppeteer = require("puppeteer");
const url = `https://www.rei.com/product/${productID}`;

(async () => {
    console.log("asdf")
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const html = await page.content();
    await page.screenshot({
        path: 'rei.png',
        fullPage: true
    });
    const $ = cheerio.load(html);
    var title = $('h1.product-information-title').text().trim().replace(/\s{2,}/, " ");
    console.log(title);
    $('#rei').text(title);

    const imageUrls = [];
    $('div.no-select > img').each(function (i, image) {
        imageUrls.push(`https://www.rei.com${$(image).attr('src').split('?')[0]}`);
    });
    console.log(imageUrls);
    $('#results').append(`<img src="${imageUrls[0]}" class="img-fluid" alt="Responsive image">`
    )

    await browser.close();

})();