from django.db import models
from django.utils import timezone

# Create your models here.
class Servicios(models.Model):
    nombre_servicio = models.CharField(max_length=100)
    descripcion_servicio = models.TextField()
    imagen_servicio = models.ImageField(upload_to='servicios/',default='servicios/tidusHahaha.jpg')