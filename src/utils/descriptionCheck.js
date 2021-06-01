
const descriptionLength = (text) => {
    if (window.innerWidth >= 1280 && text.length >= 100){
        return text.substring(0,99) + '...'
    } else if (window.innerWidth <= 1280 && window.innerWidth > 1000 && text.length >= 70){
        return text.substring(0,70) + '...'
    } else if (window.innerWidth <= 1000 && window.innerWidth > 768 && text.length >= 50){
        return text.substring(0,50) + '...'
    } else if (window.innerWidth <= 768 && text.length >= 35){
        return text.substring(0,35) + '...'
    } else {
        return text
    }
}

export default descriptionLength;