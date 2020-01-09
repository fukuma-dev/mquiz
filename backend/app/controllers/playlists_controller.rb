class PlaylistsController < ApplicationController
  before_action :set_post, only: [:show, :update, :destroy]
  skip_before_action :verify_authenticity_token

  def index
    @playlists = Playlist.where(user_id:params[:userId])
    render json: @playlists
  end

  def create
    hash = {name: params[:name], user_id: params[:userId]}
    @playlist = Playlist.create(hash)
    render json: @playlist
  end
end
