from django.http import HttpResponseRedirect
from django.views.generic import CreateView
from django.contrib.auth import logout
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.views import LoginView

class SignUpView(CreateView):
    """ Class based signup view """
    form_class = UserCreationForm
    success_url = "/users/login"
    template_name = "registration/signup.html"

class LoginView(LoginView):
    """ Class based login view """

def log_out(request):
    """ function based logout view """
    logout(request)
    return HttpResponseRedirect("/users/login")
