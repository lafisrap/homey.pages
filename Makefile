
vpath %.html docs/
vpath %.css static/css
vpath %.less static/less

all:  	vitality-red.css\
				index.html
	hugo

vitality-red.css: $(shell ls static/less)
	lessc static/less/vitality.less static/css/vitality-red.css
