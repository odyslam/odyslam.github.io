export DEV_UUID=b6811f2
balena tunnel $DEV_UUID -p 2222:7459
# sleep 10
# CONTAINER_ID=$(ssh -Tp 7459 root@127.0.0.1 <<< 'balena-engine ps' | grep 'nginx' | awk '{print $1}')
# ssh -Tp 22222 root@b6811f2.local "balena-engine exec $CONTAINER_ID /bin/sh /update-blog.sh"