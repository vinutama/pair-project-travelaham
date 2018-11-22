
function toCurrency(amount) {
    return amount.toLocaleString('ja-JP', { style: 'currency', currency: 'USD' })
};

module.exports = toCurrency