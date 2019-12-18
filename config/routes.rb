Rails.application.routes.draw do
  devise_for :users
  root to: 'tweets#index'
  resources :tweets, only:[:new,:create,:show] do
    resources :comments, only: :create
  end
end
