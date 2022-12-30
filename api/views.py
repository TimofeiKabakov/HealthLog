from django.shortcuts import render
from rest_framework import generics
from .serializers import ExerciseSerializer, WorkOutSerializer
from .models import Exercise, WorkOut

# Create your views here.

class ExerciseView(generics.ListAPIView):
    queryset = Exercise.objects.all()
    serializer_class = ExerciseSerializer

class WorkOutView(generics.ListAPIView):
    queryset = WorkOut.objects.all()
    serializer_class = WorkOutSerializer
