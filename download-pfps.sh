files=$(curl -sSLk https://whelement.github.io | grep "src=" | grep pfps | sed 's/^.*src="//' | sed 's/".*//' | sed 's|^|src=|' | sed 's|src=||g')

for file in $files; do
	echo "Downloading $file"
	wget -O "public/$file" "https://whelement.github.io/$file" -q --show-progress --progress=bar:force
	# fuck webp, png better all the way!!!
	if [ $(echo "$file" | grep "webp") ]; then
		filename="${file%.*}"
		convert "$file" "$filename.png"
		rm -rf "$file"
	fi
done
echo "Done!"
