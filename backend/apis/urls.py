from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import PromotionCampaignViewSet

router = DefaultRouter()
router.register('', PromotionCampaignViewSet, basename='promotion_campaign')
urlpatterns = router.urls
