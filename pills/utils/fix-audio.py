# Ajustar la velocidad de un archivo de audio de forma gradual
# con Python usando la librería pydub.
#
# Pasos para ejecutar este script en Ubuntu:
# 1. Instalar Python si aún no está instalado:
#    sudo apt update
#    sudo apt install python3
#
# 2. Instalar pip (gestor de paquetes de Python) si aún no está instalado:
#    sudo apt install python3-pip
#
# 3. Instalar las librerías necesarias:
#    sudo apt install ffmpeg
#    pip3 install pydub
#
# 4. Ejecutar este script con el comando:
#    python3 ajustar_audio.py
#
# Este script generará un nuevo archivo llamado 'ajustado.mp3'
# con la velocidad ajustada de forma gradual.

from pydub import AudioSegment

def load_audio(file_path):
    """
    Carga un archivo de audio y devuelve un objeto AudioSegment.
    """
    return AudioSegment.from_file(file_path)

def adjust_speed(audio, start_speed, end_speed):
    """
    Ajusta la velocidad de un objeto AudioSegment de forma gradual
    desde start_speed hasta end_speed y devuelve el audio ajustado.
    """
    length = len(audio)
    adjusted_audio = AudioSegment.empty()
    for i in range(length):
        speed = start_speed + (end_speed - start_speed) * (i / length)
        segment = audio[i:i + 1].speedup(playback_speed=speed)
        adjusted_audio += segment
    return adjusted_audio

def split_audio(audio, split_point):
    """
    Divide un objeto AudioSegment en dos en el punto especificado
    (en milisegundos) y devuelve una tupla con los dos segmentos.
    """
    part1 = audio[:split_point]
    part2 = audio[split_point:]
    return part1, part2

def save_audio(audio, file_path):
    """
    Guarda un objeto AudioSegment en un archivo en la ruta especificada.
    """
    audio.export(file_path, format="mp3")

# Ejemplo de uso
if __name__ == "__main__":
    # Cargar el archivo original
    original_audio = load_audio("tu_archivo.mp3")

    # Ajustar la velocidad de forma gradual
    adjusted_audio = adjust_speed(original_audio, start_speed=0.6, end_speed=2.0)

    # Guardar el audio ajustado
    save_audio(adjusted_audio, "ajustado.mp3")

    # Cortar el audio original en dos desde el segundo 30 (30000 milisegundos)
    # part1, part2 = split_audio(original_audio, 30000)

    # Guardar las dos partes
    #save_audio(part1, "parte1.mp3")
    #save_audio(part2, "parte2.mp3")

