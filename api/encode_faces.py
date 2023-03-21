import os
import face_recognition
import cv2
import pickle
import io
from flask import Flask, request, send_file, jsonify
import numpy as np

app = Flask(__name__)


@app.route('/api/generate_encoding', methods=['POST'])
def generate_encoding():
    try:
        # get parameters from POST request
        encodingName = request.form['name']
        files = request.files.getlist('files[]')

        defined_encodings = []
        defined_names = []

        for file in files:
            # read the image from the uploaded file
            img = cv2.imdecode(np.fromstring(
                file.read(), np.uint8), cv2.IMREAD_UNCHANGED)
            rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
            # detect face in image and create a box around it
            face_boxes = face_recognition.face_locations(rgb, model="hog")
            # get facial encodings
            encodings = face_recognition.face_encodings(rgb, face_boxes)
            for encoding in encodings:
                # add encodings and names of faces to list
                defined_encodings.append(encoding)
                defined_names.append(encodingName)

        data = {"encodings": defined_encodings, "names": defined_names}
        output = io.BytesIO()
        pickle.dump(data, output)
        output.seek(0)
        return jsonify({"message": "Encoding generated successfully!"})
    except Exception as e:
        print(e)
        return jsonify({"message": "Failed to generate encoding. Please try again later."})


if __name__ == "__main__":
    app.run(debug=True)
