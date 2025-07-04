from PIL import Image

import os
for file in os.listdir(r"C:\Users\xodn1\Desktop\정사각형_clip"):
    
    # 변환할 이미지 파일 경로 설정
    input_image_path = os.path.join(r"C:\Users\xodn1\Desktop\정사각형_clip", file) # JPG일 경우 확장자를 .jpg로 변경
    output_image_path = os.path.join(r"C:\Users\xodn1\Desktop\청첩장용_conv", file.split(".")[0]+".webp")

    # 이미지 열기
    image = Image.open(input_image_path)

    image.thumbnail((640, 640))

    # WebP 포맷으로 저장 (quality는 0~100 사이, 100에 가까울수록 원본에 가깝습니다)
    image.save(output_image_path, "WEBP", quality=100)

    print(f"{output_image_path}로 변환 완료!")