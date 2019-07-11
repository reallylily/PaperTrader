

export const fetchAllStocks = () => (
    $.ajax({
        method: 'GET',
        url: 'https://cloud.iexapis.com/stable/ref-data/symbols/?token=pk_fb8f7b4b957c4ca2acee83cb23cd44ac'
    })
);



export const fetchStock = symbol => (
    $.ajax({
        method: "GET",
        url: `https://sandbox.iexapis.com/stable/stock/${symbol}/chart/dynamic/?token=Tpk_9ae29b1583b348919535a4d19affb8dc`
    })
)

export const fetchStock5y = symbol => (
    $.ajax({
        method: "GET",
        url: `https://sandbox.iexapis.com/stable/stock/${symbol}/chart/5y/?token=Tpk_9ae29b1583b348919535a4d19affb8dc`
    })
)

export const fetchStock1y = symbol => (
    $.ajax({
        method: "GET",
        url: `https://sandbox.iexapis.com/stable/stock/${symbol}/chart/1y/?token=Tpk_9ae29b1583b348919535a4d19affb8dc`
    })
)

export const fetchStock3m = symbol => (
    $.ajax({
        method: "GET",
        url: `https://sandbox.iexapis.com/stable/stock/${symbol}/chart/3m/?token=Tpk_9ae29b1583b348919535a4d19affb8dc`
    })
)

export const fetchStock1m = symbol => (
    $.ajax({
        method: "GET",
        url: `https://sandbox.iexapis.com/stable/stock/${symbol}/chart/1mm/?token=Tpk_9ae29b1583b348919535a4d19affb8dc`
    })
)

export const fetchStock5d = symbol => (
    $.ajax({
        method: "GET",
        url: `https://sandbox.iexapis.com/stable/stock/${symbol}/chart/5dm/?token=Tpk_9ae29b1583b348919535a4d19affb8dc`
    })
)

export const fetchStock1d = symbol => (
    $.ajax({
        method: "GET",
        url: `https://sandbox.iexapis.com/stable/stock/${symbol}/chart/1d/?token=Tpk_9ae29b1583b348919535a4d19affb8dc`
    })
)

// RANGES	DESCRIPTION	SOURCE
// max	All available data up to 15 years	Historically adjusted market-wide data
// 5y	Five years	Historically adjusted market-wide data
// 2y	Two years	Historically adjusted market-wide data
// 1y	One year	Historically adjusted market-wide data
// ytd	Year-to-date	Historically adjusted market-wide data
// 6m	Six months	Historically adjusted market-wide data
// 3m	Three months	Historically adjusted market-wide data
// 1m	One month (default)	Historically adjusted market-wide data
// 1mm	One month	Historically adjusted market-wide data in 30 minute intervals
// 5d	Five Days	Historically adjusted market-wide data by day.
// 5dm	Five Days	Historically adjusted market-wide data in 10 minute intervals
// date	Specific date	If used with the query parameter chartByDay, then this returns historical OHLCV data for that date. Otherwise, IEX-only data by minute for a specified date if available. Date format YYYYMMDD. Currently supporting trailing 30 calendar days of minute bar data.
// dynamic	One day	Will return 1d or 1m data depending on the day or week and time of day. Intraday per minute data is only returned during market hours.