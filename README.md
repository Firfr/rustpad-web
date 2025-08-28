# rustpad 前端

汉化，取消远程引用，使用本地文件，左侧块减少宽度。

修改的不是源码，我在本地按照原项目的Dockerfile文件构建失败了，所以修改的是Docker镜像中复制出来的文件。

当前修改仅适用2025.08.28之前的镜像

首先感谢原作者的开源。[原项目地址](https://github.com/ekzhang/rustpad)

只做了汉化和简单修改，有问题，请到原作者仓库处反馈。  
具体修改了那些内容，请参考[翻译说明](./翻译说明.md)和[修改说明](./修改说明.md)。
- 修改内容
  - 所有远程引用改为本地引用。
  - 精简语言，只保留 
    - `纯文本` `markdown` `yaml`
    - `typescript` `python` `rust`
    - `sql` `scss` `shell` `powershell`
  - 修改右边栏宽度为14em。
  - 增加点击左下角文字`Rustpad`点击事件，点击后切换显示/隐藏左侧块。
  - 使用兼容写入剪切板方法，http可用
  - 添加汉化仓库链接。

欢迎关注我B站账号 [秦曱凧](https://space.bilibili.com/17547201)

有需要帮忙部署这个项目的朋友,一杯奶茶,即可程远程帮你部署，需要可联系。  
微信号 `E-0_0-`  
闲鱼搜索用户 `明月人间`  
或者邮箱 `firfe163@163.com`  
如果这个项目有帮到你。欢迎start。

有其他的项目的汉化需求，欢迎提issue。或其他方式联系通知。

### 镜像

从阿里云或华为云镜像仓库拉取镜像，注意填写镜像标签，镜像仓库中没有`latest`标签

容器内部端口 3030

```bash
docker pull swr.cn-north-4.myhuaweicloud.com/firfe/rustpad:2025.08.28
```
## 部署

直接下载本仓库，将`dist`目录挂载到原项目容器中的`/dist`中。  
注意文件权限，将所有者设置`1000:1000`或者直接修改权限为`777`.

或者使用下面我提供的镜像

### docker run 命令部署

```bash
docker run -d \
--name rustpad \
--network bridge \
--restart always \
--cpus 1 --memory 512m \
--log-opt max-size=1m \
--log-opt max-file=3 \
-p 3030:3030 \
swr.cn-north-4.myhuaweicloud.com/firfe/rustpad:2025.08.28
```
### compose 文件部署 👍推荐

```yaml
#version: '3.9'
name: rustpad
services:
  rustpad:
    container_name: rustpad
    image: swr.cn-north-4.myhuaweicloud.com/firfe/rustpad:2025.08.28
    network_mode: bridge
    restart: always
    cpus: 1
    mem_limit: 512m
    logging:
      options:
        max-size: 1m
        max-file: '3'
    ports:
      - 3030:3030
```

## 效果截图

![效果图](图片/效果图.png)


