from django.contrib import admin

from django.contrib import admin
from .models import Exercise

class ExerciseAdmin(admin.ModelAdmin):
    pass
admin.site.register(Exercise, ExerciseAdmin)
