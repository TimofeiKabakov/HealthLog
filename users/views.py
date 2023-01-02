from django.shortcuts import render, redirect
from diet.models import Meal
from .forms import RegisterForm
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.contrib.auth import login
from .serializers import MealSerializer

@api_view(['GET'])
def current_user(request):
    user = request.user
    if user.is_authenticated:
        # get all the meals associated with that user
        queryset = Meal.objects.filter(user = user)
        serializer = MealSerializer(queryset, many = True)
        return Response(serializer.data)

def sign_up(request):
    # create an empty form or fill it with data provided by the user and render it
    if request.method == "POST":
        form = RegisterForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            # if all fields were filled correctly, redirect the registered user the home page
            return redirect('/app')
    else:
        form = RegisterForm()
    return render(request, 'registration/signup.html', {"form": form})
