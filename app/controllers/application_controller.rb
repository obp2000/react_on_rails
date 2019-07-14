class ApplicationController < ActionController::Base
  include DeviseTokenAuth::Concerns::SetUserByToken
  # protect_from_forgery with: :exception
  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:name, :nickname])
    devise_parameter_sanitizer.permit(:sign_in, keys: [:session])
    # devise_parameter_sanitizer.permit(:sign_in) do |user_params|
    #   user_params.permit(:session)
    # end
  end
end
