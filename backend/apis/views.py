from rest_framework import viewsets
from promotion_campaign import models
from .serializers import PromotionCampaignSerializer


class PromotionCampaignViewSet(viewsets.ModelViewSet):
    queryset = models.PromotionCampaign.objects.all()
    serializer_class = PromotionCampaignSerializer
