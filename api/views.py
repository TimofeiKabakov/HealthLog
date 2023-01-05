from django.shortcuts import render
from rest_framework import generics, status
from .serializers import ExerciseSerializer, WorkOutSerializer
from .models import Exercise, WorkOut
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.

class ExerciseView(generics.ListAPIView):
    queryset = Exercise.objects.all()
    serializer_class = ExerciseSerializer

    def get(self, request, group):
        queryset = Exercise.objects.filter(target=group)
        serializer = ExerciseSerializer(queryset, many=True)
        return Response(serializer.data)

class WorkOutView(generics.ListAPIView):
    queryset = WorkOut.objects.all()
    serializer_class = WorkOutSerializer

class CreateExercise(APIView):
    serializer_class = ExerciseSerializer

    def post (self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            equipment = serializer.data.get("equipment")
            gifUrl = serializer.data.get("gifUrl")
            name = serializer.data.get("name")
            target = serializer.data.get("target")
            exercise = Exercise(equipment=equipment,gifUrl=gifUrl,name=name,target=target)
            exercise.save()
            return Response(ExerciseSerializer(exercise).data,status=status.HTTP_201_CREATED)
        return Response({'Bad Request: Invalid Room Code'},status=status.HTTP_204_NO_CONTENT)


