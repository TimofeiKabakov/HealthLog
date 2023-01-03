from django.http import HttpResponseRedirect
from django.views.generic import CreateView
from django.contrib.auth import logout
from rest_framework.decorators import api_view
from rest_framework.response import Response
from diet.models import Meal
from diet.serializers import MealSeralizer
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

@api_view(["GET"])
def current_meals(request):
    user = request.user
    if user.is_authenticated:
        queryset = Meal.objects.filter(user=user)
        serializer = MealSeralizer(queryset, many=True)
        return Response(serializer.data)