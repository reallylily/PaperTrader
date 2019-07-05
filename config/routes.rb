Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :stocks, only: [:create, :index]
    get '/stocks/:ticker', to: 'stocks#show'
  end

  resources :stocks, only: [:create]

  root "static_pages#root"
end
