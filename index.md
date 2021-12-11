<!DOCTYPE html>
<html>
	<head>
		<title>Fancify Shamcify</title>

		<!-- link to your script file here -->
		<meta charset="utf-8">
		<script type="text/javascript" src="fancifymytext.js" defer></script>	
		
	</head>

	<body>
		<h1>Fancify my Text</h1>
		
		<!-- Your UI controls go here -->
		
		  <fieldset>
		     <legend>Text</legend>
		     <textarea id="text" name="text"
				rows="4" cols="33">
		     </textarea>
		  </fieldset>
		  <fieldset>
		     <legend>Fancify</legend>

		     <button name="Bigger" onclick="biggerCall()">Bigger!</button><br/>
			
		     <label>
			<input id="fancy" type="radio" name="choice" onchange="fancifyCall()">
			FancifySchmancy
		     </label>
		     <label>
			<input id="boring" type="radio" name="choice" onchange="fancifyCall()">
			BoringBetty
		     </label>
		     <br/>
		     <button name="Moo" onclick="mooCall()">Moo</button><br/>

		  </fieldset>
	</body>
</html>
