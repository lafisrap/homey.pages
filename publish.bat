if %1.==. (
    echo You need a commit message: \"message\".
) else (
	lessc static/less/vitality.less static/css/vitality-red.css
	hugo
	git add --all .
	git commit -m "$1"
	git push -u origin master
)
