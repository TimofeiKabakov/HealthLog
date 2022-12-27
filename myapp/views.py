from django.shortcuts import render, redirect
from .forms import RegisterForm
from django.contrib.auth.forms import PasswordResetForm
from django.contrib.auth import login, logout, authenticate
from django.contrib.auth.decorators import login_required

# make sure that we can only view the home page when logged in
# if not, redirect to '/login' with the help of decorator
@login_required(login_url="/login")
def home(request):
    return render(request, 'myapp/home.html')

def sign_up(request):
    # create an empty form or fill it with data provided by the user and render it
    if request.method == "POST":
        form = RegisterForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            # if all fields were filled correctly, redirect the registered user the home page
            return redirect('/home')
    else:
        form = RegisterForm()
    return render(request, 'registration/sign_up.html', {"form": form})

def password_reset(request):
    if request.method == 'POST':
        password_reset_form = PasswordResetForm(request.POST)
        if password_reset_form.is_valid():
            return redirect('/login')
    else:
        password_reset_form = PasswordResetForm()
    return render(request, 'registration/password_reset.html', {"password_reset_form": password_reset_form})