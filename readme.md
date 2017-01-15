# To→Do

Thanks for checking out To→Do! I made this as a project for my schooling at [Prime Academy](http://primeacademy.io).

I used this project as a way to explore iOS web apps, inspired by the late [forecast.io](http://forecast.io). iOS (and Android) allows for downloading a web page onto the device, and running it as if it were an app. There are even ways to cache the data locally so it continues to function even without a network connection. I didn't explore the caching part for this project, but it's something I plan to play with more later.

## Notes on the app

This app runs in a web browser like normal, but after loading it, you can 'install' it onto your device. On iOS, tap the 'share' button at the bottom of the screen, and select 'Add to Home Screen'. A new icon will be added to your home screen that loads a web view with the app inside it. This is nice because it removes all the Safari parts — back and forward buttons, reload button, url bar, etc. — so it appears almost like a regular old app!

I also used this project to explore Heroku more. I managed to get a Postgres database set up in Heroku, and use that as the app's database. This was difficult at first, as the database was empty and I had to find a way to populate it with initial data to make it work. Here is the app hosted on Heroku: [ta-do.herokuapp.com/](https://ta-do.herokuapp.com/)

## Known issues

There are a couple issues that I didn't have the time or knowledge to solve:

- I designed this specifically for iPhone sized screens. It looks pretty strange on a computer or tablet, but is still usable.
- Toggling a check box doesn't refresh the DOM. The user must refresh the page to see updated item.
- Sometimes editing a todo's title does not reload the page.
- When editing a todo's title, it is supposed to save an edit when the input box loses focus. Currently, it only works when you hit the 'submit' button on the iOS keyboard.
