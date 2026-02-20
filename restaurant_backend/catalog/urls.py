from django.urls import path
from .views import mesasListView, pedidosListCreateView

urlpatterns = [
    path("mesas/", mesasListView.as_view()),
    path("pedidos/", pedidosListCreateView.as_view()),
]