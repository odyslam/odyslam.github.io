
echo "Reading balena token from file.."
token=$(cat balena_token)
balena login -t $token
balena tunnel b6811f2 -p 22222:1234 &
echo "Sleeping for 6s to allow the tunnel to be established"
sleep 6
CONTAINER_ID=$(ssh -Tp 1234 root@127.0.0.1 <<< 'balena-engine ps' | grep 'nginx' | awk '{print $1}')
ssh -Tp 1234 root@127.0.0.1 "balena-engine exec $CONTAINER_ID /bin/sh /update-blog.sh"