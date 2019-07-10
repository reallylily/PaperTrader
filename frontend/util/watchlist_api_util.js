// export const fetchWatchlists = () => (
//     $.ajax({
//         method: "GET",
//         url: `api/watchlists`
//     })
// )

export const fetchWatchlists = symbols => (
    $.ajax({
        method: "GET",
        url: `https://sandbox.iexapis.com/stable/stock/market/batch?symbols=${symbols}&types=quote,chart&range=1m&last=5&token=Tpk_9ae29b1583b348919535a4d19affb8dc`
    })
)

export const fetchWatchlist = id => (
    $.ajax({
        method: "GET",
        url: `api/watchlists/${id}`
    })
)

export const deleteWatchlist = id => (
    $.ajax({
        method: "DELETE",
        url: `api/watchlists/${id}`
    })
)

export const createWatchlist = watchlist => (
    $.ajax({
        method: "POST",
        url: `api/watchlists`,
        data: {watchlist}
    })
)

export const updateWatchlist = watchlist => (
    $.ajax({
        method: "PATCH",
        url: `api/watchlists/${watchlist.id}`,
        data: {watchlist}
    })
)