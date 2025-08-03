const wmDomainNamesPattern =
	/^https:\/\/.*.(toolforge.org|wikidata.org|wikimedia.org|wikipedia.org)\//;

const handleLoad = () => {
	if (document.referrer.match(wmDomainNamesPattern)) {
		return;
	}

	const englishLink = document.querySelector(
		"a.interlanguage-link-target[href^='https://en.wikipedia.org/']",
	) as HTMLAnchorElement;

	if (englishLink) {
		window.location.href = englishLink.href;
	} else {
		console.log("No English Wikipedia link found.");
	}
};

window.addEventListener("load", handleLoad);
