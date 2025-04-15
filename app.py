from flask import Flask, render_template, jsonify, request
import json

app = Flask(__name__)

# Homepage
@app.route("/")
def index():
    return render_template("index.html")


# Mock API for live scores
@app.route("/api/scores")
def live_scores():
    mock_scores = {
        "matches": [
            {
                "player1": "Carlos Alcaraz",
                "player2": "Daniil Medvedev",
                "score": "6-4, 3-6, 7-5"
            },
            {
                "player1": "Iga Swiatek",
                "player2": "Aryna Sabalenka",
                "score": "6-3, 6-2"
            }
        ]
    }
    return jsonify(mock_scores)


# Static favorite player data
@app.route("/api/players")
def player_tracker():
    with open("data/players.json") as f:
        players = json.load(f)
    return jsonify(players)


# Store match reaction (for now just print it)
@app.route("/api/react", methods=["POST"])
def react():
    data = request.get_json()
    print(f"Received reaction: {data.get('reaction')}")
    return jsonify({"status": "success"})


if __name__ == "__main__":
    app.run(debug=True)
