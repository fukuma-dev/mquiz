Rails.application.routes.draw do
  match '*path' => 'options_request#preflight', via: :options
  resources :tracks
  resources :playlists
end
