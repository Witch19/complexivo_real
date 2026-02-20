from rest_framework import serializers
from .models import mesas, pedidos

class mesasSerializer(serializers.ModelSerializer):
    class Meta:
        model = mesas
        fields = "__all__"


class pedidosSerializer(serializers.ModelSerializer):
    class Meta:
        model = pedidos
        fields = "__all__"