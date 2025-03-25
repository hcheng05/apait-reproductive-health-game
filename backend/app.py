from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allows React to communicate with Flask

@app.route('/api/character', methods=['GET'])
def get_character():
    return jsonify({"name": "Hero", "level": 1, "hp": 100, "xp": 0})

if __name__ == '__main__':
    app.run(debug=True)
