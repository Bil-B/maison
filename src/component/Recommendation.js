function Recommendation() {
    let currentMonth = new Date().getMonth()
    let isSpring = currentMonth > 2 &&  currentMonth < 5

    if (!isSpring) {
        return "C'est pas le printemps"
    }
    else {
        return "C'est le printemps"
    }
}

export default Recommendation
