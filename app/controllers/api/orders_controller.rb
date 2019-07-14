class Api::OrdersController < ApplicationController
  def index
    @orders = Order.with_customer_and_totals.page(params[:page]).per(3)
    @total_pages = @orders.total_pages
  end

  def show
    @order = Order.find(params[:id])
    @customer = @order.customer
    @order_items = @order
    			   .order_items
    			   .select("order_items.*")
    			   .select("products.density, products.width, products.price product_price")
    			   .joins(:product)
  end

  def create
    @order = Order.new(order_params)
    if @order.save
      @customer = @order.customer
      render :show
    else
      # TODO: fixme
      render json: { error_messages: ["something wrong"] }, status: 500
    end
  end

  def update
    @order = Order.find(params[:id])
    if @order.update(order_params)
#       puts @test.inspect
      @customer = @order.customer
      render :show
    else
      # TODO: fixme
      render json: { error_messages: ["something wrong"] }, status: 500
    end
  end
  
  def destroy
    @order = Order.find(params[:id])
    @order.destroy
    render :show
  end

  private

  def order_params
    params.require(:order)
      .permit(Order::PERMITTED_ATTRIBUTES)
  end
end
