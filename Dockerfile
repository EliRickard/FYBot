FROM node:12.19-slim

ENV USER=fybot

# install python and make
RUN apt-get update && \
	apt-get install -y python3 build-essential && \
	apt-get purge -y --auto-remove
	
# create fybot user
RUN groupadd -r ${USER} && \
	useradd --create-home --home /home/fybot -r -g ${USER} ${USER}
	
# set up volume and user
USER ${USER}
WORKDIR /home/fybot

COPY package*.json ./
RUN npm install
VOLUME [ "/home/fybot" ]

COPY . .

ENTRYPOINT [ "node", "index.js" ]
