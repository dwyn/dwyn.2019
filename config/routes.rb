Rails.application.routes.draw do
  devise_for :users

  namespace :api do
    get 'user', to: 'users#show', as: 'user_show'
    post 'signup', to: 'users#create', as: 'user_signup'
    post 'login', to: 'users#login', as: 'user_login'

    resources :posts
    resource :sessions, only: [:create, :destroy ]
  end
end
