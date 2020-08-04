from django.db import models
from django.utils.translation import gettext_lazy as _


class PromotionCampaign(models.Model):
    class Status(models.TextChoices):
        PLANNED = 'PL', _('planned')
        IN_PROCESSING = 'IP', _('in processing')
        RUNNING = 'RN', _('running')
        FINISHED = 'FIN', _('finished')

    title = models.CharField(max_length=20)
    status = models.CharField(max_length=20, choices=Status.choices)
    creation_date = models.CharField(max_length=20)
    creator = models.CharField(max_length=20)
    objects = models.Manager()

    def __str__(self):
        return self.title
