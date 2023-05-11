#!/bin/bash

CheckUrl() {
  timeout=5
  fails=0
  success=0

  # 循环检测， 循环执行一些命令
  while true
    do
      wget --timeout=${timeout} --tries=1 http://pythonav.cn/ -q -o /dev/null

      # echo $?
      # if 的条件参数 -ne 是不等于的意思
      if [ $? -ne 0 ]
        then let fails=fails+1 # 失败次数加 1
      else 
        let success+=1
      fi

      # -ge 大于等于的意思
      if [ $success -ge 1 ]
        then echo "网站还在运行"
        # 返回一个状态码 0
        exit 0
      fi

      # 当错误次数大于等于2的时候，就警告，发邮件等等
      if [ ${fails} -ge 2 ]
        then echo "该网站挂了"
        # 返回一个状态码 0
        exit 2
      fi

    done
}

CheckUrl