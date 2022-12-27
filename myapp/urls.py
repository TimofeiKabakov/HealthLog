from django.urls import path
from django.contrib.auth import views as auth_views
from . import views

urlpatterns = [
    # direct user to login page when accessing the site
    path('', auth_views.LoginView.as_view()),
    path('home', views.home, name='home'),
    path('sign-up', views.sign_up, name='sign_up'),
    path('password-reset', views.password_reset, name='password_reset'),
]
