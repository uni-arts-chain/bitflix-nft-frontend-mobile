docker build -t bitflix-mobile .
docker tag bitflix-mobile registry.cn-hongkong.aliyuncs.com/uniarts/bitflix-mobile
docker login --username=jieliantech registry.cn-hongkong.aliyuncs.com
docker push registry.cn-hongkong.aliyuncs.com/uniarts/bitflix-mobile
