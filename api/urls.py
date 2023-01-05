from django.urls import path
from .views import ExerciseView, WorkOutView, CreateExercise

urlpatterns = [
    path("exercise/<str:group>", ExerciseView.as_view()),
    path("work-out", WorkOutView.as_view()),
    path("create", CreateExercise.as_view()),
]