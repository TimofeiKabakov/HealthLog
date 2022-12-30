from django.urls import path
from .views import ExerciseView, WorkOutView, MealView, FoodView

urlpatterns = [
    path("exercise", ExerciseView.as_view()),
    path("work-out", WorkOutView.as_view()),
    path("make-meal", MealView.as_view()),
    path("make-food", FoodView.as_view())
]