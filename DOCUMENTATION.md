# Lilly Technical Challenge Documentation

## Approach

I started of by setting up the environment. I had installed dependencies and configured the virtual environment.

As I progressed, I encountered several errors, which I addressed proactively by debugging them as they appeared. This helped me ensure that the server was running correctly without any issues.

Once the backend was able to run, I moved on to building the frontend. My focus was on creating a user-friendly interface with a modern and clean design to enhance the user experience and decided to go with a simple theme which aligns with eli lilly's logo and colour. Throughout the development process, I continuously tested and debugged the application to ensure that all API endpoints were functioning correctly. I manually tested responses to verify that the data was being processed and displayed as expected. Instead of using postman to test the backend code, i used insomnia as I am more comfortable with that application.

I did end up using external resources whenever i came across certain errors that i couldnt figure out, i did use chat gpt as a tool to help me find out specifically what i was missing for the errors as i havent had much time. Additionally, I searched for specific videos on youtube explaining certain functions when it came to writing in the backend with python.

## Objectives - Innovative Solutions

I have used fetch() in JavaScript to update medicine data without requiring a full page reload.
To ensure the frontend remains stable even if the backend returns missing or invalid data, I included checks when rendering the medicines list. If a medicine name or price is missing, the UI will display "Unknown" or "N/A" instead of breaking the page. 

The frontend features a modern and visually appealing design using CSS animations, rounded cards, and soft shadows for a clean and professional look. The gradient background and interactive hover effects on medicine cards make the interface more engaging.

I included proactive debugging techniques such as catching errors in API calls and displaying appropriate messages to the user. If an error occurs while fetching or submitting data, the UI provides immediate feedback rather than failing.

I also completed the optional objective for averaging the price that calculates and returns the average price of all medicines. 

## Problems Faced

I had an error when setting up the environment for the challenge.
In the error it mentioned that a new upgrade of pip is available
I used this command : python.exe -m pip install --upgrade pip

After I tried running the environment again and a new error had popped up
The error told me that fastapi library for python was not installed
I then used this command: pip install fastapi

Once again, i tried setting the environment and it mentions in the error 
I would need to install uvicorn

Repeated setting up the environment and another error appeared
I would have to install install python-multipart
using this command : pip install python-multipart

After installing and updating everything, the environment was able to run.

I had issues when it came to pushing the cloned files and my changes to the repo for the first time. 
I tried using many commands to ensure it was pushing to origin however it still didnt work.
Soon after, I received an error mentioning about permissions but that was to do with my two github accounts.

I temporarily resolved this by having both accounts as collaborators for this repository .
At first, I used my University github account to push as it was the only account which had permissions but once I restarted my laptop, It allowed both accounts to push or do pull requests.


## Evaluation

The challenge wasn't too hard but I wish i could have had more time so i could improve on the functionalities and make the UI look much more pleasing however I am happy with what i have done in that short amount of time. I would have added more animations, better styling, and interactive elements for a more engaging experience. 

I did spend slightly over 60 minutes as I didnt want to rush through anything however it was mostly with adding the design styles and changing colours and effects around.

