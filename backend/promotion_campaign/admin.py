from django.contrib import admin
from .models import PromotionCampaign


class PromotionCampaignAdmin(admin.ModelAdmin):
    list_display = ('title', 'status', 'creation_date', 'creator')


admin.site.register(PromotionCampaign, PromotionCampaignAdmin)
