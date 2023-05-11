#!/bin/bash

if [ -f /etc/hosts ]  ;then
  echo "[] it's ok"
fi

if [[ -f /etc/hosts ]]  ;then
  echo "[[]] it's ok"
fi

if test -f /etc/hosts ;then
  echo "test it's ok"
fi