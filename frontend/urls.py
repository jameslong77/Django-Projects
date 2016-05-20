# -*- coding: utf-8 -*-
from __future__ import absolute_import

from django.conf.urls import url

from .views import index

urlpatterns = [
    url(
        regex=r'^$',
        view=index,
        name='index'
    ),
