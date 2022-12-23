const annoyer = {
  phrases: ["literally", "cray cray", "I can't even", "Totes!", "YOLO", "Can't Stop, Won't Stop"],
  //ADD METHOD TO RANDOMLY GENERATE INDICES OF PHRASES
  pickPhrase() {
    const {
      phrases
    } = this;
    const idx = Math.floor(Math.random() * phrases.length);
    return phrases[idx];
  },
  //ADD METHOD TO PICK PHRASES AT AN INTERVAL OF 3 seconds
  start() {
    //store timeId so that you can clear it later
    this.timerId = setInterval(() => {
      console.log(this.pickPhrase());
    }, 3000)
  },
  //clear interval
  stop() {
    clearInterval(this.timerId);
    console.log("PHEW THANK HEAVENS THAT IS OVER");
  }
}