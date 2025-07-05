window.addEventListener("load", () => {
	if (
		document.referrer.match(
			/^https:\/\/.*.(toolforge.org|wikidata.org|wikimedia.org|wikipedia.org)\//,
		)
	) {
		return;
	}

	const englishLink = document.querySelector(
		"a.interlanguage-link-target[href^='https://en.wikipedia.org/']",
	);

	if (englishLink) {
		window.location.href = englishLink.href;
	} else {
		console.log("No English Wikipedia link found.");
	}
});
