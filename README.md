<h2>Introduction</h2>
Simple setup for express as backend and react as frontend


<h2>Project structure</h2>
<ul>
<li>server resides under server directory</li>
<li>react app reside under server directory inside client directory which created using create-react-app</li>
</li>
</ul>

<h2>Two servers for development</h2>
<ul>
<li>Express server listens locally on port 5000</li>
<li>React development server listens locally on port 3000</li>
<li>use npm run dev from server directory to run express and react</li>
<li>concurrently package is used to run both servers. install on server directory !</li>
</ul>


<h2>Scripts of package.json inside server directory</h2>
<table>
  <tr>
    <th>Name</th>
    <th>Description</th>
    <th>Invoke from server directory</th>
  </tr>
  <tr>
    <td>start</td>
    <td>start express server using node</td>
    <td>npm start</td>
  </tr>
  <tr>
    <td>server</td>
    <td>start express server using nodemon</td>
    <td>npm run server</td>
  </tr>
  <tr>
    <td>client</td>
    <td>start react server</td>
    <td>npm run client</td>
  </tr>
  <tr>
    <td>dev</td>
    <td>run server and client using the package concurrently</td>
    <td>npm run dev</td>
  </tr>
</table>
