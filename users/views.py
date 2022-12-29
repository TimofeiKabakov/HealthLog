from django.http import HttpResponseRedirect
from django.views.generic import CreateView
from django.contrib.auth import logout
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.views import LoginView
from diet.models import Meal

# user logic for identification
from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import MealSerializer
from rest_framework import permissions

# @api_view(['GET'])
# def current_user(request):
#     user = request.user
#     serializer_class = MealSerializer
#     if user.is_authenticated:
#         # get all the meals associated with that user
#         meals = Meal.objects.filter(user=user)
#         print("Hello")
#         return Response({'meals' : meals})

@api_view(['GET'])
def current_user(request):
    queryset = User.objects.all()
    serializer_class = MealSerializer
    permission_classes = [permissions.IsAuthenticated]

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
