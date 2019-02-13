<h2>Proxy</h2>
check the server readme about this.

The following should be done to make this work
<ul>
<li>add "proxy": "http://localhost:5000" to the client package.json</li>
<li>later the client access /api which is production ready. when /api is not found as in developemnt the proxy is used</li>
</ul>