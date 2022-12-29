from django.urls import path
from django.contrib.auth import views as auth_views
from . import views

app_name = "users"

urlpatterns = [
    path("signup", views.SignUpView.as_view(), name="signup"),
    path("login", auth_views.LoginView.as_view(), name="login"),
    path("logout", views.log_out, name="logout"),
    path("current", views.current_user, name="current_user"),
]