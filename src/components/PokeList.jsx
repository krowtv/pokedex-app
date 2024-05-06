import '../styles/pokemon.css'
import {type_colors} from '../pokeDB/type_colors'

export default function Pokemon({ pokemon }) {

    const hexToRGBA = (hex, alpha = 1) => {
        hex = hex.replace('#', '');
    
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);
    
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    };

    return(
        <tr key={pokemon.id} className='pokemon' style={{
            backgroundColor: hexToRGBA(type_colors[pokemon.types[0]], .3)
        }}>
            <td className='pokemon-image'><img src={pokemon['pixel-sprite']} alt={`Image of ${pokemon.name}`} style={{width: '100px', height: '100px'}} /></td>
            <td className='pokemon-id'>#{pokemon.id}</td>
            <td className='pokemon-name'>{pokemon.name}</td>
            <td className='pokemon-types'>
            {pokemon.types.map(type => (
                <td key={type} style={{
                     color: `#${type_colors[type]}`
                    }}>
                        {type}
                    </td>
            ))}
            </td>
        </tr>
    )
}