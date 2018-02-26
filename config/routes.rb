Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "workout#show"

  resource :workout, only: :show

  namespace :api do
    namespace :v1 do
      resource :workout, only: :show
    end
  end
end
