# Loop through all the images in the designated folder and resize them to 1280x720

import os
from PIL import Image

# Get the current working directory
cwd = os.getcwd()

# Get the list of files in the working directory
files = os.listdir(cwd)

# Loop through all the files in the current working directory
for file in files:

    # Open the image
    if(file.endswith(".jpg")):
        img = Image.open(file)

        # Get the width and height of the image
        width, height = img.size

        # Check if the image is larger than 1280x720
        if width > 1280 or height > 720:
            # Crop the image to the greatest 16:9 ratio at the center
            if width > height:
                img = img.crop((0, 0, height * 16 / 9, height))
            else:
                img = img.crop((0, 0, width, width * 9 / 16))
        # Resize the image
        img = img.resize((1280, 720), resample=Image.LANCZOS)
        # Save the image
        img.save(file)
        # Close the image
        img.close()

# Close the program
exit()