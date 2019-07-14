Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  get 'hello_world', to: 'hello_world#index'

  root 'dashboard#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :products, only: [:index, :show, :create, :update, :destroy] do
    collection do
        get "autocomplete/:term", action: "autocomplete"
    end
    end
    resources :customers, only: [:index, :show, :create, :update, :destroy] do
     collection do
        get "autocomplete/:term", action: "autocomplete"
      end
    end
    resources :orders, only: [:index, :show, :create, :update, :destroy]
    resources :cities, only: [:index, :show, :create, :update, :destroy] do
      collection do
         get "autocomplete/:term", action: "autocomplete"
       end
     end
  end

end
