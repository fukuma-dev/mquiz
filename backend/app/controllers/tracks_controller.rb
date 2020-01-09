class TracksController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @tracks = Track.all
    render json: @tracks
  end

  def show
    @tracks = Track.where(playlist_id:params[:id])
    render json: @tracks
  end

  def create
    hash = { track_id: params[:trackId], track_name: params[:trackName], playlist_id: params[:playlistId], artist_name: params[:artistName], artist_id: params[:artistId], preview_url: params[:previewUrl] }

    @track = Track.create(hash)
  end
end
