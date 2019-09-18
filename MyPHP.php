<!--Try this instead maybe: https://www.codejava.net/java-ee/servlet/handling-html-form-data-with-java-servlet-->

<html lang="en">

<body>
<h1>Search</h1>
<p>You searched for: <i><?php echo $_GET["search"]; ?></i></p>
<p>I don't know what to do with that.</p>
<p>Notice that what you searched for is visible in the URL (thanks to the HTTP method <b>GET<b/>).</p>
</body>

</html>