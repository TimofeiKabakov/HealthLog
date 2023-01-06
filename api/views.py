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
    bodyWeight = ["assisted", "body weight","bosu ball", "roller", "rope", "stability ball", "tire","wheel roller","hammer"]
    band = ["band", "resistance band"]
    duration = ["elliptical machine","skierg machine","stationary bike","stepmill machine"]

    def get(self, request, group,type):
        if group == "all":
            muscle = Exercise.objects.all()
        else:
            muscle = Exercise.objects.filter(target=group)
        
        if type != "all":
            if type in self.bodyWeight:
                queryset = Exercise.objects.filter(target=group).filter(equipment__in=["assisted", "body weight","bosu ball", "roller", "rope", "stability ball", "tire","wheel roller"])
                bodyweight = ExerciseSerializer(queryset, many=True)
                return Response(bodyweight.data)
            elif type in self.band:
                queryset = Exercise.objects.filter(target=group).filter(equipment__in=["band", "resistance band"])
                band = ExerciseSerializer(queryset, many=True)
                return Response(band.data)
            elif type in self.duration:
                queryset = Exercise.objects.filter(target=group).filter(equipment__in=["elliptical machine","skierg machine","stationary bike","stepmill machine"])
                duration = ExerciseSerializer(queryset, many=True)
                return Response(duration.data)
            else:
                queryset = Exercise.objects.filter(target=group).filter(equipment__in=["barbell","cable","dumbbell","ez barbell","kettlebell","leverage machine","olympic barbell","sled machine","smith machine","trap bar","weighted"])
                weights = ExerciseSerializer(queryset, many=True)
                return Response(weights.data)
        else:
            serializer = ExerciseSerializer(muscle, many=True)
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


