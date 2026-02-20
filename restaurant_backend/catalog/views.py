from rest_framework.generics import ListAPIView, ListCreateAPIView
from rest_framework.permissions import AllowAny
from django.conf import settings
from pymongo import MongoClient
from datetime import datetime

from .models import mesas, pedidos
from .serializers import mesasSerializer, pedidosSerializer

client = MongoClient(settings.MONGO_URI)
restaurant_logs = client[settings.MONGO_DB]
order_events = restaurant_logs["order_events"]

class mesasListView(ListAPIView):
    queryset = mesas.objects.all().order_by("id")
    serializer_class = mesasSerializer
    permission_classes = [AllowAny]


class pedidosListCreateView(ListCreateAPIView):
    queryset = pedidos.objects.select_related("show").all().order_by("-id")
    serializer_class = pedidosSerializer
    permission_classes = [AllowAny]

    def perform_create(self, serializer):
        order = serializer.save()

        order_events.insert_one({
            "order_id ": order.id,
            "event_type": "CREATED",
            "source": "WEB",
            "note": "Reservation created from Django API",
            "created_at": datetime.utcnow()
        })