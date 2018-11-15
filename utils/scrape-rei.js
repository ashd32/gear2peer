const cheerio = require('cheerio');
const puppeteer = require("puppeteer");

module.exports = async (url) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const html = await page.content();

    const $ = cheerio.load(html);
    var title = $('h1.product-information-title').text().trim().replace(/\s{2,}/, " ");
    console.log(title);
    $('#rei').text(title);

    const imageUrls = [];
    $('div.no-select > img').each(function (i, image) {
        imageUrls.push(`https://www.rei.com${$(image).attr('src').split('?')[0]}`);
    });

    await browser.close();

    return {
        title: title,
        images: imageUrls
    }

};