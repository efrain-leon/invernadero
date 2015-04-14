class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  
  #COMENTADO PARA USAR SOLO EL API
  #protect_from_forgery with: :exception
  
  #AGREGADO PARA USAR SOLO EL API
  protect_from_forgery with: :null_session
end
