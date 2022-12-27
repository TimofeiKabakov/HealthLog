from django.urls import path
from .views import ExerciseView, WorkOutView

urlpatterns = [
    path("exercise", ExerciseView.as_view()),
    path("work-out", WorkOutView.as_view()),
]