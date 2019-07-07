

export const fetchAllStocks = () => (
    $.ajax({
        method: 'GET',
        url: 'https://cloud.iexapis.com/stable/ref-data/symbols/?token=pk_fb8f7b4b957c4ca2acee83cb23cd44ac'
    })
);


export const fetchStock = symbol => (
    $.ajax({
        method: "GET",
        url: `https://cloud.iexapis.com/stable/stock/${symbol}/chart/1m/?token=pk_fb8f7b4b957c4ca2acee83cb23cd44ac`
    })
)

export const createStock = stock => (
    $.ajax({
        method: "POST",
        url: `api/stocks`,
        data: {stock}
    })
)