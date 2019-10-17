from django.contrib import admin
from django.urls import path
from .views import mostrarReservas

app_name='Servicios'
urlpatterns = [
    path('reservas/',mostrarReservas,name='reservar'),
] 