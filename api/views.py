from django.shortcuts import render
from rest_framework import generics
from .serializers import ExerciseSerializer, WorkOutSerializer, MealSeralizer, FoodSerializer
from .models import Exercise, WorkOut, Meal, Food

# Create your views here.

class ExerciseView(generics.ListAPIView):
    queryset = Exercise.objects.all()
    serializer_class = ExerciseSerializer

class WorkOutView(generics.ListAPIView):
    queryset = WorkOut.objects.all()
    serializer_class = WorkOutSerializer

class MealView(generics.CreateAPIView):
    queryset = Meal.objects.all()
    serializer_class = MealSeralizer

class FoodView(generics.CreateAPIView):
    queryset = Food.objects.all()
    serializer_class = FoodSerializer