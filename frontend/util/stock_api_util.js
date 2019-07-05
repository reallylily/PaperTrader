

export const fetchAllStocks = () => (
    $.ajax({
      method: 'GET',
      url: 'https://cloud.iexapis.com/stable/ref-data/symbols/?token=pk_fb8f7b4b957c4ca2acee83cb23cd44ac'
    })
  );