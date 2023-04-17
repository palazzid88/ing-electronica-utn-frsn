import json


myImages = [
        {"img" : "./img/coca2.png", "description" : "16-04-23 21:57"},
        {"img" : "./img/coca2.png", "description" : "16-04-23 21:57"},
        {"img" : "./img/coca3.jpg", "description" : "16-04-23 21:57"},
        {"img" : "./img/coca3.jpg", "description" : "16-04-23 21:57"},

        ]

# Serializar el objeto en formato JSON
json_string = json.dumps(myImages)

# Guardar el JSON en un archivo
with open("myImages.json", "w") as f:
    f.write(json_string)

print(myImages)