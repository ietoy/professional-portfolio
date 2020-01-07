// looks at the buttons on the navbar
const home = $('#home');
const portfolio = $('#portfolio');
const reviews = $('#reviews');
const contact = $('#contact');

// looks at divs of the display
const homePage = $('#home-page');
const portfolioPage = $('#portfolio-page');
const reviewsPage = $('#reviews-page');
const contactPage = $('#contact-page');

$(document).ready(function() {

    portfolioPage.hide();
    reviewsPage.hide();
    contactPage.hide();

    home.on("click", function() {
        // console.log("home nav button works!");
        homePage.show();
        portfolioPage.hide();
        reviewsPage.hide();
        contactPage.hide();
    });
    portfolio.on("click", function() {
        // console.log("portfolio nav button works!");
        homePage.hide();
        portfolioPage.show();
        reviewsPage.hide();
        contactPage.hide();
    });
    reviews.on("click", function() {
        // console.log("reviews nav button works!");
        homePage.hide();
        portfolioPage.hide();
        reviewsPage.show();
        contactPage.hide();
    });
    contact.on("click", function() {
        // console.log("contact nav button works!");
        homePage.hide();
        portfolioPage.hide();
        reviewsPage.hide();
        contactPage.show();
    });

// END DOC READY
})
