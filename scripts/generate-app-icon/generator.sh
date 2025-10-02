#!/bin/bash

project_path=$(pwd)
project_name=AppBossDoor
logo_path="$1/logo.png"
logo_round_path="$1/logo-round.png"
output_ios_path="$project_path/ios/$project_name/Images.xcassets/AppIcon.appiconset"
output_android_path="$project_path/android/app/src/main/res"

# mkdir "$project_path/output"
# mkdir "$project_path/output/Assets.xcassets"
# mkdir "$project_path/output/Assets.xcassets/AppIcon.appiconset"


# echo $output_ios_path
# echo $logo_path

sips -Z 20 $logo_path --out "$output_ios_path/20.png"
sips -Z 29 $logo_path --out "$output_ios_path/29.png"
sips -Z 40 $logo_path --out "$output_ios_path/40.png"
sips -Z 50 $logo_path --out "$output_ios_path/50.png"
sips -Z 57 $logo_path --out "$output_ios_path/57.png"
sips -Z 58 $logo_path --out "$output_ios_path/58.png"
sips -Z 60 $logo_path --out "$output_ios_path/60.png"
sips -Z 72 $logo_path --out "$output_ios_path/72.png"
sips -Z 76 $logo_path --out "$output_ios_path/76.png"
sips -Z 80 $logo_path --out "$output_ios_path/80.png"
sips -Z 87 $logo_path --out "$output_ios_path/87.png"
sips -Z 100 $logo_path --out "$output_ios_path/100.png"
sips -Z 114 $logo_path --out "$output_ios_path/114.png"
sips -Z 120 $logo_path --out "$output_ios_path/120.png"
sips -Z 144 $logo_path --out "$output_ios_path/144.png"
sips -Z 152 $logo_path --out "$output_ios_path/152.png"
sips -Z 167 $logo_path --out "$output_ios_path/167.png"
sips -Z 180 $logo_path --out "$output_ios_path/180.png"
sips -Z 1024 $logo_path --out "$output_ios_path/1024.png"
cat "$project_path/scripts/generate-app-icon/contents.json" > "$output_ios_path/Contents.json"

echo "App icon for ios generate finished 💥💥💥💥"

sips -Z 36 $logo_path --out "$output_android_path/mipmap-ldpi/ic_launcher.png"
sips -Z 72 $logo_path --out "$output_android_path/mipmap-hdpi/ic_launcher.png"
sips -Z 48 $logo_path --out "$output_android_path/mipmap-mdpi/ic_launcher.png"
sips -Z 96 $logo_path --out "$output_android_path/mipmap-xhdpi/ic_launcher.png"
sips -Z 144 $logo_path --out "$output_android_path/mipmap-xxhdpi/ic_launcher.png"
sips -Z 192 $logo_path --out "$output_android_path/mipmap-xxxhdpi/ic_launcher.png"

sips -Z 36 $logo_round_path --out "$output_android_path/mipmap-ldpi/ic_launcher_round.png"
sips -Z 72 $logo_round_path --out "$output_android_path/mipmap-hdpi/ic_launcher_round.png"
sips -Z 48 $logo_round_path --out "$output_android_path/mipmap-mdpi/ic_launcher_round.png"
sips -Z 96 $logo_round_path --out "$output_android_path/mipmap-xhdpi/ic_launcher_round.png"
sips -Z 144 $logo_round_path --out "$output_android_path/mipmap-xxhdpi/ic_launcher_round.png"
sips -Z 192 $logo_round_path --out "$output_android_path/mipmap-xxxhdpi/ic_launcher_round.png"

echo "App icon for android generate finished 💥💥💥💥"
