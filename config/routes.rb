Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :stocks, only: [:index]
    get '/stocks/:ticker', to: 'stocks#show'
    resources :watchlists
  end

  root "static_pages#root"
end
