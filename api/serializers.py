from rest_framework import serializers
from .models import Exercise, WorkOut

class ExerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exercise
        fields = ('id','name','equipment','PR','reps','sets')

class WorkOutSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkOut
        fields = ('id','name','exercises')