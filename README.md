Socket.io simple Chat
===========

This is a simple socket.io chat application, building during the socket.io example course. 

### Install

Open a terminal and type the next commands
```
git clone https://github.com/AlejoMedina98/chat.git
cd chat
```

Install the dependencies using npm or yarn, in the project root directory
```
npm install
```

Then run the project by typing
```
npm start
```

Open your browser at http://localhost:3000

### Configure

- In the _server/index.js file, line 6 you can set the default port for the application.  
- In the _client/main.js file, line 1, you can set the URL to the socket, if you want to try it in your local network, set to you local IP addres  

### Extra info

The app run with nodemon, you can change the code while runnig the app, it will be restarted for you.