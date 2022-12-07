# sort the json file by game name

import json

def sortJson():
    with open('games.json', 'r') as f:
        games = json.load(f)
        games = sorted(games, key=lambda k: k['game_name'])
        with open('games.json', 'w') as f:
            json.dump(games, f, indent=4)

if __name__ == '__main__':
    sortJson()
