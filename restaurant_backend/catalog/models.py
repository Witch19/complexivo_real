from django.db import models

class mesas(models.Model):
    name = models.CharField(max_length=120, unique=True)
    capacity = models.CharField(max_length=50)
    is_available = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.name
###class Reservation(models.Model):

   ### STATUS_CHOICES = [
   ###     ("RESERVED", "RESERVED"),
   ###     ("CONFIRMED", "CONFIRMED"),
    ###    ("CANCELLED", "CANCELLED"),
    ###]

  ###  show = models.ForeignKey(mesas, on_delete=models.CASCADE, related_name="reservations")
  ###  customer_name = models.CharField(max_length=120)
  ###  seats = models.IntegerField()
  ###  status = models.CharField(max_length=20, choices=STATUS_CHOICES)
  ###  created_at = models.DateTimeField(auto_now_add=True)

   ### def __str__(self):
  ###      return f"{self.customer_name} - {self.show.movie_title}"
    
class pedidos(models.Model):
    
    STATUS_CHOICES = [
        ("PENDING", "PENDING"),
        ("IN_PROGRESS", "IN_PROGRESS"),
        ("SERVED", "SERVED"),
        ("PAID", "PAID"),
    ]
     
    table_id = models.ForeignKey(mesas, on_delete=models.PROTECT, related_name="pedidos")
    items_summary = models.CharField(max_length=120)
    total = models.IntegerField()
    status = models.CharField(max_length=20, choices=STATUS_CHOICES)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.items_summary} - {self.mesas.name}"
    
