# 原版镜像发布时间 2025年2月2日 Feb 2, 2025

FROM ekzhang/rustpad:latest

COPY dist dist

#CMD [ "./rustpad-server" ]

# chmod -R 777 dist
# docker build -t firfe/rustpad:2025.08.28 .