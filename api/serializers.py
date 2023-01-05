from rest_framework import serializers
from .models import Exercise, WorkOut

class ExerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exercise
        fields = ('id','equipment','gifUrl','name','target',)

class WorkOutSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkOut
        fields = ('id','name','exercises')
