export const fetchTrades = () => (
    $.ajax({
        method: "GET",
        url: `api/trades`
    })
)

export const fetchTrade = id => (
    $.ajax({
        method: "GET",
        url: `api/trades/${id}`
    })
)

export const createTrade = trade => (
    $.ajax({
        method: "POST",
        url: `api/trades`,
        data: {trade}
    })
)

// export const deleteTrade = id => (
//     $.ajax({
//         method: "DELETE",
//         url: `api/trades/${id}`
//     })
// )

// export const updateTrade = Trade => (
//     $.ajax({
//         method: "PATCH",
//         url: `api/trades/${Trade.id}`,
//         data: {Trade}
//     })
// )