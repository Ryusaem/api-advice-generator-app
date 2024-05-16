# Frontend Mentor - FAQ accordion solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Your challenge is to build out this advice generator app using the [Advice Slip API](https://api.adviceslip.com) and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![Screenshot Project](/design/screenshot.png)

### Links

- Solution URL: [GitHub](https://github.com/Ryusaem/api-advice-generator-app)
- Live Site URL: [Github Live Demo](https://ryusaem.github.io/api-advice-generator-app/)

## My process

Later

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- API

### What I learned

What to write

--

1.  The issue you're encountering with fetching the same advice repeatedly might be due to caching behavior of the Advice Slip API. By default, some APIs cache requests to minimize load on their servers. This means that when you request the same URL repeatedly within a short period, the API might return the same response.
    Explanation:

        Cache Busting: The URL now includes ?t=${new Date().getTime()}, which appends the current timestamp as a query parameter. Since the timestamp changes every millisecond, this effectively makes each URL unique, thus bypassing the cache.
        Function Call: The function getQuote() is called once to initialize the advice display. If you need to refresh the quote at regular intervals or through a user action (like clicking a button), you can set up an event listener or a timer.

By implementing this change, each call to getQuote() should now fetch a new advice slip from the API. If you want to ensure that the API is not limiting or caching responses in another unexpected way, you might also consider checking any API documentation or settings provided by the service.

2.  position: relative;
    top: 15%;

        3. with and without
        main {

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    }

### Continued development

- Training more on animation (e.g: transform, transition).

### Useful resources

- [Frontend Mentor](https://www.frontendmentor.io/challenges/) - Formidable resources to make you learn by "doing" awesome project. Highly recommend it. This is the link to the project HUB concernint that project.
- [Advice Slip API](https://api.adviceslip.com) - The API resources

## Author

- Github - [@Ryusaem](https://github.com/Ryusaem)
- Linkedin - [@sambath-meas](https://www.linkedin.com/in/sambath-meas)
- Coursera - [@sambath-meas](https://www.coursera.org/learner/sambath-meas)
- Twitter - [@RyuBraveheart](https://twitter.com/RyuBraveheart)
- Frontend Mentor - [@Ryusaem](https://www.frontendmentor.io/profile/Ryusaem)
- CodeWars - [@Ryusaem](https://www.codewars.com/users/Ryusaem)
