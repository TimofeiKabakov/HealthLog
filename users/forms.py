from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User

# extends the UserCreationForm provided by Django and adds one additional field for email
class RegisterForm(UserCreationForm):
    email = forms.EmailField(required=True)
    class Meta:
        model = User
        fields = ["username", "email", "password1", "password2"]