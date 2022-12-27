from django.shortcuts import render, redirect
from django.http import HttpResponse
from .forms import RegisterForm
from django.contrib.auth.forms import PasswordResetForm
from django.contrib.auth import login
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.core.exceptions import MultipleObjectsReturned, ObjectDoesNotExist
from django.core.mail import send_mail
from smtplib import SMTPException

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

# def password_reset(request):
#     if request.method == 'POST':
#         password_reset_form = PasswordResetForm(request.POST)
#         if password_reset_form.is_valid():
#             # find a user in DB with the email provided and check for thrown exceptions
#             try:
#                 user_email = password_reset_form.cleaned_data['email']
#                 user_retrieved = User.objects.get(email=user_email)

#                 # TODO send mail here to request password reset
#                 subject = "Password reset"
#                 send_mail(subject, 'Please reset your password', 'lamename24@gmail.com', [user_email], fail_silently=False)
                
#             except ObjectDoesNotExist:
#                 return HttpResponse("no user with such an email was found")
#             except MultipleObjectsReturned:
#                 return HttpResponse("more than 1 user with such an email was found")
#             except SMTPException:
#                 return HttpResponse('failed to send an email')

#             return redirect('/login')
#     else:
#         password_reset_form = PasswordResetForm()
#     return render(request, 'registration/password_reset.html', {"password_reset_form": password_reset_form})