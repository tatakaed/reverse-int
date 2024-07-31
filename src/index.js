module.exports = function reverse(n) {
    if (n > 0) {
        const stringNum = Array.from(String(n), Number).reverse().join('')
        const reverseNum = Number(stringNum)
        return reverseNum
    }
    else {
        const nonNegativeNumber = n.toString().slice(1).split('')
        return nonNegativeNumber.reverse().join('')
    }

}


