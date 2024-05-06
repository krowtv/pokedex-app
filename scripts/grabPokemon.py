import requests
import json

def fetch_pokemon_data():
    pokemon_data = {}
    for i in range(1, 152):  # Fetching data for the first 151 Pokémon
        url = f"https://pokeapi.co/api/v2/pokemon/{i}/"
        response = requests.get(url)
        if response.status_code == 200:
            pokemon = response.json()
            for i in range(1, 11):
                color_url = f"https://pokeapi.co/api/v2/pokemon-color/{i}/"
                color_response = requests.get(color_url)
                if color_response.status_code == 200:
                    color_data = color_response.json()
                    for species in color_data['pokemon_species']:
                        if species['name'] == pokemon['name']:
                            pokemon_color = color_data['name']
                else:
                    pokemon_color = 'unknown'
            pokemon_data[pokemon['name']] = {
                'id': pokemon['id'],
                'name': pokemon['name'],
                'types': [t['type']['name'] for t in pokemon['types']],
                'sprite': pokemon['sprites']['other']['official-artwork']['front_default'],
                'pixel-sprite':pokemon['sprites']['front_default'],
                'color': pokemon_color
            }
            print(f"Fetched data for {pokemon['name']} {pokemon_color}")
        else:
            print(f"Failed to fetch data for Pokémon with ID {i}")

    return pokemon_data


def write_to_js_file(pokemon_data):
    js_content = "const pokemonData = " + json.dumps(pokemon_data, indent=4)
    with open('pokemon_data.js', 'w') as file:
        file.write(js_content)

if __name__ == "__main__":
    pokemon_data = fetch_pokemon_data()
    write_to_js_file(pokemon_data)
