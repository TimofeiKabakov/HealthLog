from django.contrib import admin
from.models import Meal, Food

class FoodAdmin(admin.ModelAdmin):
    list_display = ("name", "calories")

class MealAdmin(admin.ModelAdmin):
    list_display = ("name", "updated_at")

# Register your models here.

admin.site.register(Food, FoodAdmin)
admin.site.register(Meal, MealAdmin)