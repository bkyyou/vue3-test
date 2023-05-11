#!/bin/bash

# -ne 条件 不等于 $# 传递给脚本的参数个数  $0 取得的脚本文件名
# chmod +x /etc/init.d/cc_rsync
# chmod +x /shell_program/test_scripts/rsync_cc

params1="start"
params2="stop"
params3="restart"
allArgvs="{$params1|$params2|$params3}"
tip="Usage: $0 $allArgvs"

if [ "$#" -ne 1 ] ;then
  echo $tip
  exit 1
fi

# 当用户选择启动 rsync

if [ "$1" =  "$params1" ] ;then
  /usr/bin/rsync --daemon
  sleep 2
  # 验证端口是否启动了
  if [ `netstat -tunlp|grep rsync|wc -l` -ge "1" ] ;then 
    echo "Rsyc is started!!!"
    exit 0
  fi
elif [ "$1" =  "$params2" ] ;then
  killall rsync &>/dev/null
  sleep 2
  if [ `netstat -tunlp|grep rsync|wc -l` -eq "0" ] ;then 
    echo "Rsyc is stopped!!!"
    exit 0
  fi
elif [ "$1" = "$params3" ] ;then
  killall rsync &>/dev/null
  sleep 1
  killpro=`netstat -tunlp|grep rsync|wc -l`
  /usr/bin/rsync --daemon
  sleep 1
  startpro=`netstat -tunlp|grep rsync|wc -l`
  if [ "$killpro" -eq "0" -a "$startpro" -ge "1" ] ;then 
    echo "Rsyc is restart!!!"
    exit 0
  fi
else 
  echo $tip
  exit 1
fi

