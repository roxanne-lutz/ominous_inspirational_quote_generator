const OminousPositivityGenerator = {
    ominousQuotes: ["Be soft and kind, but take no shit.", "Good things aren't coming; they're already here.", "Drink some water you beautiful and capable but dehydrated bitch.", "Get your fucking ass up and give 'em the old razzle dazzle.", "I'm not back on my bullshit because I never got off it to begin with.", "I'm not a manic pixie dream girl; I'm a raving harpy nightmare witch."],

    // function to randomly pick a quote
    quotePicker() {
        let randomIndex = Math.floor(Math.random() * this.ominousQuotes.length);
        document.getElementById("ominousPositivityQuotes").innerHTML = this.ominousQuotes[randomIndex];
    },
}