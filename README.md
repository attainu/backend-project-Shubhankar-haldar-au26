<h1>Mern-stack Chat Application</h1>

<h3>Introduction</h3>

The MERN stack which consists of Mongo DB, Express.js, Node.js, and React.js is a popular stack for building full-stack web-based applications because of its simplicity and ease of use. In recent years, with the explosive popularity and the growing maturity of the JavaScript ecosystem, the MERN stack has been the goto stack for a large number of web applications. This stack is also highly popular among newcomers to the JS field because of how easy it is to get started with this stack.

This repo consists of a Chat Application built with the MERN stack. I built this sometime back when I was trying to learn the stack and I have left it here for anyone new to the stack so that they can use this repo as a guide.

This is a full-stack chat application that can be up and running with just a few steps. Its frontend is built with React. The backend is built with Express.js and Node.js. Real-time message broadcasting is developed using Socket.IO.

<h2>Features</h2>

This application provides users with the following features

<li>Authentication using JWT Tokens</li>
<li>User can select an avatar</li>
<li>A Private Chat functionality where users can chat with other users privately.</li>
<li>Real-time updates to the user conversation messages</li>


<h3>Screenshots</h3>

Register

![register](https://user-images.githubusercontent.com/84980055/166416887-0f2c2a21-77ec-4f55-b743-b01a3a4450d0.png)


Select Avatar

![avatar (2)](https://user-images.githubusercontent.com/84980055/166417182-9bfadb03-7177-4509-b5bd-b319664c3e68.png)


Login

![login](https://user-images.githubusercontent.com/84980055/166417030-35703d9f-cfef-478f-a170-da9497723151.png)


Private Chat

![private](https://user-images.githubusercontent.com/84980055/166417311-5f89187e-eb58-4e2e-8822-f395e4a97d5f.png)


<h2>How to use</h2>

You can have this application up and running with just a few steps because it has both the frontend and the backend in a single repository. Follow the steps below to do so.

<ol> 
<li>Clone this repo</li>
  <li>Once you have the repo, you need to install its dependencies. So using a terminal, move into the root directory of the project and execute <code>npm install</code> to install the dependencies of the Node.js server and then run <code>npm run client-install</code> to install the dependencies of the frontend.</li>
  <li>This application uses MongoDB as its Database. So make sure you have it installed. otherwise you can use mongoAtlas a cloud version of mongodb</li>
  <li>Finally, all you have to do is simply <code>run npm run dev</code>. If this command fails, try installing the package concurrently globally by running <code>npm install -g concurrently</code> and then running the <code>dev</code> command.</li>
  <li>The frontend of the application will be automatically opened in your web browser and you can test it away.</li>
</ol>

<h3>Things to note</h3>

<li>The frontend is created using create-react-app</li>
<li>Database connections in the backend are handled using the Mongoose ORM</li>

<h3>Disclaimer</h3>

This repository contains beginner level code and might contain some things I wish to change or remove. I have not maintained this for quite some time, but now I am trying to slowly fix these issues. You are welcome to open issues if you find any and I will accept PR's as well.


Cheers 💻 🍺 🔥 🙌








