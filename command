rm -rf .cache/ && gatsby build && rm -rf docs/ && mv public/ docs/ && echo "callingtools.net" > docs/CNAME && git add . && git commit -m "update styles" && git push origin main
