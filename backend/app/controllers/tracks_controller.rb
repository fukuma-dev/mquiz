class TracksController < ApplicationController
  before_action :set_post, only: [:show, :update, :destroy]
  skip_before_action :verify_authenticity_token

  def index
    @tracks = Track.all
    render json: @tracks
  end

  def create
    hash = {track_id: params[:trackId], track_name: params[:trackName], preview_url: params[:previewUrl], artist_name: params[:artistName], artist_id: params[:artistId]}

    @track = Track.new(hash)

    if @track.save
      render plain: "「#{hash[:track_name]}」を追加しました"
    else
      render plain: "「#{hash[:track_name]}」の登録に失敗しました"
    end
  end
end
