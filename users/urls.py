from django.urls import path
from django.contrib.auth import views as auth_views
from django.contrib.auth.decorators import login_required
from django.views.generic.base import TemplateView
from . import views

app_name = 'users'

urlpatterns = [
    # direct user to login page when accessing the site
    path('', auth_views.LoginView.as_view()),
    path('sign-up', views.sign_up, name='sign_up'),
    path('app', login_required(TemplateView.as_view(template_name="index.html"), login_url='/login'), name="app"),
    path("current", views.current_user, name="current_user"),

    # urls for password reset part of authentication
    # documentation: https://docs.djangoproject.com/en/3.2/topics/auth/default/
    path('password-reset', auth_views.PasswordResetView.as_view(template_name="registration/password_reset.html"), name="password_reset"),
    path('password-reset-done', auth_views.PasswordResetDoneView.as_view(template_name="registration/password_reset_done.html"), name="password_reset_done"),
    path('password-reset/<uidb64>/<token>', auth_views.PasswordResetConfirmView.as_view(template_name="registration/password_reset_confirm.html"), name="password_reset_confirm"),
    path('password-reset-complete', auth_views.PasswordResetCompleteView.as_view(template_name="registration/password_reset_complete.html"), name="password_reset_complete"),
]