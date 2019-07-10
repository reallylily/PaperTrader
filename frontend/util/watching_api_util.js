export const fetchWatching5y = symbols => (
    $.ajax({
        method: "GET",
        url: `https://sandbox.iexapis.com/stable/stock/market/batch?symbols=${symbols}&types=quote,chart&range=5y&last=5&token=Tpk_9ae29b1583b348919535a4d19affb8dc`
    })
)

export const fetchWatching1y = symbols => (
    $.ajax({
        method: "GET",
        url: `https://sandbox.iexapis.com/stable/stock/market/batch?symbols=${symbols}&types=quote,chart&range=1y&last=5&token=Tpk_9ae29b1583b348919535a4d19affb8dc`
    })
)

export const fetchWatching3m = symbols => (
    $.ajax({
        method: "GET",
        url: `https://sandbox.iexapis.com/stable/stock/market/batch?symbols=${symbols}&types=quote,chart&range=3m&last=5&token=Tpk_9ae29b1583b348919535a4d19affb8dc`
    })
)

export const fetchWatching1m = symbols => (
    $.ajax({
        method: "GET",
        url: `https://sandbox.iexapis.com/stable/stock/market/batch?symbols=${symbols}&types=quote,chart&range=1m&last=5&token=Tpk_9ae29b1583b348919535a4d19affb8dc`
    })
)

export const fetchWatching5d = symbols => (
    $.ajax({
        method: "GET",
        url: `https://sandbox.iexapis.com/stable/stock/market/batch?symbols=${symbols}&types=quote,chart&range=5d&last=5&token=Tpk_9ae29b1583b348919535a4d19affb8dc`
    })
)

export const fetchWatching1d = symbols => (
    $.ajax({
        method: "GET",
        url: `https://sandbox.iexapis.com/stable/stock/market/batch?symbols=${symbols}&types=quote,chart&range=1d&last=5&token=Tpk_9ae29b1583b348919535a4d19affb8dc`
    })
)