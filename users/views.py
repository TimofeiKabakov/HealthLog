from django.http import HttpResponseRedirect
from django.shortcuts import render, redirect
from django.contrib.auth import logout, login
from rest_framework.decorators import api_view
from rest_framework.response import Response
from diet.models import Meal
from diet.serializers import MealSeralizer
from .forms import RegisterForm

def log_out(request):
    """ function based logout view """
    logout(request)
    return HttpResponseRedirect("/login")

@api_view(["GET"])
def current_meals(request):
    user = request.user
    if user.is_authenticated:
        queryset = Meal.objects.filter(user=user)
        serializer = MealSeralizer(queryset, many=True)
        return Response(serializer.data)

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
    return render(request, 'registration/signup.html', {"form": form})