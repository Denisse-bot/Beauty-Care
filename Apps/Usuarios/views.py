from django.shortcuts import render

# Create your views here.
def mostrarIndex(request):
    return render(request,'Esquema.html',{})

def mostrarReserva(request):
    return render(request, 'Reserva.html',{})

def mostrarServicios(request):
    return render(request, 'Servicios.html',{})

def mostrarRegistro(request):
    return render(request, 'Registro.html',{})
