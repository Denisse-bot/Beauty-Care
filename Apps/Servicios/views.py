from django.shortcuts import render

# Create your views here.
#este es la prueba del primer cambio de alex
def mostrarReservas(request):
    return render(request,'Reserva.html',{})