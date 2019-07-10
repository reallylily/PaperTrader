
export const fetchCompany = symbol => (
    $.ajax({
        method: "GET",
        url: `https://sandbox.iexapis.com/stable/stock/${symbol}/company/?token=Tpk_9ae29b1583b348919535a4d19affb8dc`
    })
)
