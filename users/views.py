from django.http import HttpResponseRedirect
from django.views.generic import CreateView
from django.contrib.auth import logout
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.views import LoginView
from .forms import SignupForm

class SignUpView(CreateView):
    """ Class based signup view """
    form_class = SignupForm
    success_url = "/users/login"
    template_name = "registration/signup.html"

def log_out(request):
    """ function based logout view """
    logout(request)
    return HttpResponseRedirect("/login")
