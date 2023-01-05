from django.urls import path
from django.contrib.auth import views as auth_views
from . import views

# app_name = "users"

urlpatterns = [
    path("signup", views.sign_up, name="signup"),
    path("login", auth_views.LoginView.as_view(), name="login"),
    path("logout", views.log_out, name="logout"),
    path("password-reset", auth_views.PasswordResetView.as_view(), name="password_reset"),
    path("password-reset-done", auth_views.PasswordResetDoneView.as_view(), name="password_reset_done"),
    path("password-reset/<uidb64>/<token>", auth_views.PasswordResetConfirmView.as_view(), name="password_reset_confirm"),
    path("password-reset-complete", auth_views.PasswordResetCompleteView.as_view(), name="password_reset_complete"),
    path("meals", views.current_meals, name="current_meals"),
]