FROM ekzhang/rustpad:2025.05.06
COPY dist dist
USER 0:0
EXPOSE 3030

#CMD [ "./rustpad-server" ]

# docker build -t firfe/rustpad:2025.05.06 .