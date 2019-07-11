@trades.each do |trade|
    json.set! trade.id do
      json.partial! 'trade', trade: trade
    end
  end