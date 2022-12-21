from django.shortcuts import render
from rest_framework import viewsets
from .serializers import FoodSerializer
from .models import Food

# Create your views here.

class FoodView(viewsets.ModelViewSet):
    serializer_class = FoodSerializer
    queryset = Food.objects.all()