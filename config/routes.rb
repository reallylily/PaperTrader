Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resources :users, only: [:show]
    resource :session, only: [:create, :destroy]
    resources :stocks, only: [:index]
    get '/stocks/:ticker', to: 'stocks#show'
    resources :watchlists
  end

  root "static_pages#root"
end
