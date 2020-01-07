# Professional Portfolio

![alt text](images/screencap.png)

## Description
This website showcases my recent work, customer reviews, and contact information for developing professional connections and advertising my services.

## Tools Used
* HTML
* CSS
* JavaScript
* Bootstrap
* TailorBrands logo generator


## Under the Hood
Below are a few examples of the code used and how it displays in the browser.

Using event listeners, the web page dynamicaly hides and shows different "pages" to the user based on which part of the portfolio they wish to view.

Take the main landing for example:

    <!-- HOME PAGE -->
    <div id="home-page">
        <!-- MAIN PAGE JUMBO -->
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <img src="images/tbdesign-logo.png" class="w-100">
            <p class="lead">Hello! My name is Ian Toy, and I am an SF Bay Area-based Full Stack Web Developer with a diverse work history that spans mutliple disciplines. From music composition to insurance underwriting and all of the odd-jobs in between, I am passionate about applying the lessons I've learned to designing sleek, elegant, and efficient applications.</p>
            <p class="lead">Take a look at some of my recent projects below!</p>
          </div>
        </div>

        <!-- PROJECTS CAROUSEL -->

        ...

      <!-- END HOME PAGE -->
      </div>

This is the first thing that the user sees upon arriving to my site. In the upper right hand corners are navigation buttons that will show such information as my portfolio, customer reviews, and contact information.

![alt text](images/screencap1.png)

Once the user clicks on one of these buttons, the following JavaScript is run:

    // These are the variables that look at their corresponding dom elements
    // These look at the nav buttons...
    const home = $('#home');
    const portfolio = $('#portfolio');
    const reviews = $('#reviews');
    const contact = $('#contact');

    // ...while these look at the different display elements
    const homePage = $('#home-page');
    const portfolioPage = $('#portfolio-page');
    const reviewsPage = $('#reviews-page');
    const contactPage = $('#contact-page');

    // This doc.ready function waits until the HTML has loaded before running any JavaScript
    $(document).ready(function() {

    // When the page first initializes, we hide all displays except for the home page so it displays first
    portfolioPage.hide();
    reviewsPage.hide();
    contactPage.hide();

    ...

    // Once one of the NavBar buttons is clicked, we hide all other displays and show the selected dislpay.
    portfolio.on("click", function() {
        // console.log("portfolio nav button works!");
        homePage.hide();
        portfolioPage.show();
        reviewsPage.hide();
        contactPage.hide();
    });

    ...

    // END DOC READY
    })

Once the work is done, the user is shown their selected portion of the site.

![alt text](images/screencap2.png)

This allows the webpage to display multiple "pages" without ever having to navigate away from the site.


## Deployed Link
* [See Live Site](https://ietoy.github.io/professional-portfolio/) 

## Authors
Ian Toy

## Acknowledgements
Special thanks to our instructor, Jerome, our teaching assistants, Kerwin and Mahisha, and to my classmates for their assistance and input.