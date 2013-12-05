class PostsController < ApplicationController

  def create
    @post = Post.new(params[:post])
    puts "----------------------------------------------"
    puts "ADDING A POST!"
    puts "----------------------------------------------"
    if @post.save
      respond_to do |format|
        console.log(format);
        format.json { render json: @post }
        format.html { render :index }
      end
    else
      render json: @post.errors, status: 422
    end
  end

  def destroy
    puts "----------------------------------------------"
    puts "DELETING A POST!"
    puts "----------------------------------------------"

    @post = Post.destroy(params[:id])

    if @post.persisted?
      render json: @post.errors, status: 422
    else
      head :ok
    end

  end

  def index

  end

  def show
    @post = Post.find(params[:id]);

  end

end
