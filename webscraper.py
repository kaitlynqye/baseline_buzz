import requests
import json

url = "https://www.atptour.com/-/ajax/ranking?page=1&rankType=singles"
response = requests.get(url)
data = response.json()

players = []
for player in data['playerRanks'][:50]:  # Top 50
    players.append({
        "name": player["player"]["fullName"],
        "ranking": player["rank"],
        "age": player["age"],
        "homeplace": player["countryCode"],
        "plays": player["plays"],  # might need more digging
        "turned_pro": player.get("turnedPro", "Unknown")
    })

with open("atp_players.json", "w") as f:
    json.dump(players, f, indent=2)

print("ATP players saved ✅")
