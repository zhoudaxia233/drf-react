from rest_framework import serializers
from promotion_campaign import models


class PromotionCampaignSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.PromotionCampaign
        fields = ('id', 'title', 'status', 'creation_date', 'creator')
