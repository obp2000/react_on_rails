class Api::ProductsController < ApplicationController
  def index
    @products = Product
      .autocomplete(params[:term] || '')
      .page(params[:page] || 1)
      .per(Product::PER_PAGE)
    @total_pages = @products.total_pages
  end

  def show
    @product = Product.find(params[:id])
  end

  def create
    @product = Product.new(product_params)
    if @product.save
      render :show
    else
      # TODO: fixme
      render json: { error_messages: ["something wrong"] }, status: 500
    end
  end

  def update
    @product = Product.find(params[:id])
    if @product.update(product_params)
#       puts @test.inspect
      render :show
    else
      # TODO: fixme
      render json: { error_messages: ["something wrong"] }, status: 500
    end
  end
  
  def destroy
    @product = Product.find(params[:id])
    @product.destroy
    render :show
  end
  
  def autocomplete
    @products = Product.autocomplete(params[:term])
#    render json: @communities.map{ |community| { label: community.name, id: community.id } }
  end

  private

  def product_params
#     @test = ActionController::Parameters
#       .new(JSON.parse(request.body.read))
    params.require(:product).permit(Product::PERMITTED_ATTRIBUTES)
  end
end
