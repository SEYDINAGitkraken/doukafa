const format = (number,n, x, s, c) =>{
    var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\D' : '$') + ')',
        num = (number).toFixed(Math.max(0, ~~n));

    return (c ? num.replace('.', c) : num).replace(new RegExp(re, 'g'), '$&' + (s || ','));
}

const formatToMoney = (number) =>{
    return format(number, 0,3,' ', '')
}

const formatToPhone = (number) =>{
    return format(number, 0,2,' ', '')
}

export {
    formatToPhone,
    formatToMoney
}