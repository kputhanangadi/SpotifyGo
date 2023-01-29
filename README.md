# SpotifyGo

## Inspiration
The inspiration for this project came from the realization that our commutes to UBC have been a tedious and unenjoyable part of their day.  Listening to music to pass the time during our commute was a saving grace; however, we found it tedious to have to constantly switch between songs or playlists because they don't fit the exact duration of their drive and songs were getting repetitive. We wanted to create a solution that would make the commute more enjoyable by providing a custom playlist tailored to the exact length of any commute to deliver a fresh stream of music. Introducing - **Spotify Go**.

## What it does
We have created a website that creates a personalized Spotify playlist depending on the origin and destination of the user's commute and adds it to their Spotify account. Initially, the website prompts a user to log in with their Spotify account. The next step would to be indicate the origin and destination of the commute on the new page which has appeared. Lastly, the user would indicate some music preferences, through the selection of their own playlists. The generated playlist will now appear in the user's Spotify account which can be accessed on any Spotify platform.

## How we built it
We simultaneously developed the frontend and the backend for this project.  The frontend was fully constructed with the application of **HTML/CSS**. We used a material UI theme, where we implemented, a grid, buttons, text fields, and various other elements to make a minimalistic website. The backend was developed in **JavaScript**, with the assistance of **node.js** as well as **react**. We installed a **react-router-dom** package and implemented routing. **ExpressJS** was used to handle all of the communication between the frontend and backend within our project. We then reviewed the documentation for the Spotify and Google Distance Matrix APIs' respectively and wrote requests to endpoints to integrate them into our code. We then had to set up all of the variables required to create an algorithm to calculate the number of songs needed to create a playlist within the given time interval that it takes for the user to reach their destination. After satisfying all of the prerequisites for the algorithm, we were able to generate a playlist for the user and add it to their Spotify account titled "**SpotifyGo**".


## Challenges we ran into
With Hackrithmitic 2 being our first hackathon it was definitely a challenging experience for all of us. With minimal coding experience, encountering an endless amount of challenges was inevitable. Our first struggle was understanding how to use **react**, as we had to learn it for the first time during this hackathon. Initially, we wanted to develop our backend in **python**; however, we ran into problems trying to implement **Google's Distance Matrix API** halfway through the hack. We then pivoted our backend development into **javascript** as it was suitable to interact with **Spotify and Google API** comfortably. Furthermore, we had to develop an algorithm that was capable of creating a playlist that matched the length of a given commute. We found out that setting up all of the elements for the first time when short of staff was difficult with our beginner-level programming skills. Yet the most difficult task was linking the frontend to the backend, since it was our first time using a lot of these languages and frameworks, there was a lot of trial and error involved.

## Accomplishments that we're proud of
- This is our first hackathon!
- Learning and implementing react and javascript.
- Creating a friendly and interactive UI.
- Successfully generate a playlist depending on the origin and destination of a given commute.

## What we learned
- How to develop and host a website.
- Using node.js to construct a real-time application.
- Working with APIs from Google and Spotify.
- Creating an algorithm that adapts playlist length depending on a varying time.

## What's next for SpotifyGo
- Allow users to add multiple trips to generate multiple playlists at a single instance.
- Building features within the website to allow users to view/download/share their created playlist.
- Integration of other music service providers such as Apple Music.
