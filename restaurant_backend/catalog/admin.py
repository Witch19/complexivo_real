from django.contrib import admin
from .models import mesas, pedidos


@admin.register(mesas)
class mesasAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "capacity", "is_available", "created_at")

@admin.register(pedidos)
class pedidosAdmin(admin.ModelAdmin):
    list_display = ("id", "table_id", "items_summary", "total", "status", "created_at")