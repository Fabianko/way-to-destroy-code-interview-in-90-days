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
from pydub.playback import play
from concurrent.futures import ProcessPoolExecutor

def load_audio(file_path):
    """
    Carga un archivo de audio y devuelve un objeto AudioSegment.
    """
    return AudioSegment.from_file(file_path)

def adjust_segment_speed(segment, original_frame_rate, speed):
    """
    Ajusta la velocidad de un segmento de audio cambiando su tasa de muestreo.
    """
    new_frame_rate = int(original_frame_rate * speed)
    return segment.set_frame_rate(new_frame_rate)

def adjust_speed_parallel(audio, start_speed, end_speed, num_processes=8):
    """
    Ajusta la velocidad de un objeto AudioSegment de forma gradual
    desde start_speed hasta end_speed utilizando procesos paralelos.
    """
    length = len(audio)
    segment_duration = max(1, length // (num_processes * 10))  # Ajusta esto según tus necesidades
    segments = [audio[i:i + segment_duration] for i in range(0, length, segment_duration)]
    num_segments = len(segments)
    progress_interval = num_segments // 20  # 5% de los segmentos

    with ProcessPoolExecutor(max_workers=num_processes) as executor:
        futures = []
        for i, segment in enumerate(segments):
            # Calcular la velocidad promedio para este segmento
            start_index = i * segment_duration
            end_index = start_index + segment_duration
            start_speed_segment = start_speed + (end_speed - start_speed) * (start_index / length)
            end_speed_segment = start_speed + (end_speed - start_speed) * (end_index / length)
            avg_speed = (start_speed_segment + end_speed_segment) / 2
            # Programar la tarea de ajuste de velocidad
            futures.append(executor.submit(adjust_segment_speed, segment, segment.frame_rate, avg_speed))

        # Recopilar los resultados y mostrar el progreso
        adjusted_audio = AudioSegment.empty()
        for i, future in enumerate(futures):
            adjusted_audio += future.result()
            if (i + 1) % progress_interval == 0 or i == num_segments - 1:
                progress_percentage = 100 * (i + 1) / num_segments
                print(f"Progreso: {progress_percentage:.2f}% completado")

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
    original_audio = load_audio("11-1.mp3")

    # Ajustar la velocidad de forma gradual
    adjusted_audio = adjust_speed_parallel(original_audio, start_speed=0.1, end_speed=1.8, num_processes=8)
    # Guardar el audio ajustado
    save_audio(adjusted_audio, "11-1-ajustado.mp3")

    # Cortar el audio original en dos desde el segundo 30 (30000 milisegundos)
    tiempo_corte = 1000*60*20
    #part1, part2 = split_audio(original_audio, tiempo_corte)

    # Guardar las dos partes
    #save_audio(part1, "parte1.mp3")
    #save_audio(part2, "parte2.mp3")

