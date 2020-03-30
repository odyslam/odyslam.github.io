# This script is used to build the jekyll blog part of the website and update the git repository
# It then logs me into balena (the webserver) in order to run manually another script which downloads the updated website to the server.
jekyll build -d /Users/odys/Github/odyslam.github.io/blog/
cd /Users/odys/Github/odyslam.github.io
git add -A
cat token 
git commit --signoff -m "$1"
git push

echo "new post pushed to github!"
balena login --token $2
balena ssh b6811f2.local nginx

# ssh -p 22222 root@192.168.1.110 <<'ENDSSH'
# CONTAINER_ID="$(balena-engine ps | grep 'nginx' | awk '{print $1;}')"
# balena-engine exec -it $a /bin/sh 
# cd /tmp/

# /update_blog.sh script
# cd /tmp/
# wget https://github.com/OdysLam/odyslam.github.io/archive/master.zip
# unzip -q master.zip 
# rm master.zip
# cp /tmp/odyslam.github.io-master/blog/* /usr/share/nginx/html/blog/
# rm -rf /tmp/odyslam.github.io-master
# echo "blog updated & removed any leftover files"
