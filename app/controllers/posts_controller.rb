class PostsController < ApplicationController

  def create
    @post = Post.new(params[:post])
    puts "----------------------------------------------"
    puts "ADDING A POST!"
    puts "----------------------------------------------"
    if @post.save
      respond_to do |format|
        format.json { render json: @post }
        format.html { render :index }
      end
    else
      puts "ERROR"
      render json: @post, status: 422
    end
    #

    # respond_to do |format|
    #   format.json {render json: @post.save}
    # end
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

  def update
    puts "----------------------------------------------"
    puts "UPDATING A POST!"
    puts "----------------------------------------------"
    @post = Post.find(params[:id])
    @post.update_attributes(params[:post])
    if @post.save
      respond_to do |format|
        puts "------------------------------"
        format.json { render json: @post }
        format.html { render :index }
      end
    else
      puts "ERROR - "
      render json: @post.errors, status: 422
    end
  end

  def show
    @post = Post.find(params[:id])

  end

end
