from pydub import AudioSegment
from concurrent.futures import ProcessPoolExecutor
import numpy as np

def adjust_segment_speed(segment, original_frame_rate, speed):
    """
    Ajusta la velocidad de un segmento de audio cambiando su tasa de muestreo.
    """
    new_frame_rate = int(original_frame_rate * speed)
    return segment.set_frame_rate(new_frame_rate)

def adjust_speed_parallel(audio, start_speed, end_speed, segment_duration=1000, num_processes=8):
    """
    Ajusta la velocidad de un objeto AudioSegment de forma gradual
    desde start_speed hasta end_speed utilizando procesos paralelos.
    """
    length = len(audio)
    segments = [audio[i:i + segment_duration] for i in range(0, length, segment_duration)]
    num_segments = len(segments)
    progress_interval = num_segments // 20  # 5% de los segmentos

    with ProcessPoolExecutor(max_workers=num_processes) as executor:
        futures = []
        for i, segment in enumerate(segments):
            # Calcular la velocidad en este punto
            speed = start_speed + (end_speed - start_speed) * (i / num_segments)
            # Programar la tarea de ajuste de velocidad
            futures.append(executor.submit(adjust_segment_speed, segment, segment.frame_rate, speed))

        # Recopilar los resultados y mostrar el progreso
        adjusted_audio = AudioSegment.empty()
        for i, future in enumerate(futures):
            adjusted_audio += future.result()
            if (i + 1) % progress_interval == 0 or i == num_segments - 1:
                progress_percentage = 100 * (i + 1) / num_segments
                print(f"Progreso: {progress_percentage:.2f}% completado")

    return adjusted_audio

# Ejemplo de uso
if __name__ == "__main__":
    # Cargar el archivo original
    original_audio = AudioSegment.from_file("11-1.mp3")

    # Ajustar la velocidad de forma gradual y paralela
    adjusted_audio = adjust_speed_parallel(original_audio, start_speed=0.3, end_speed=3.0, segment_duration=1000, num_processes=10)

    # Guardar el audio ajustado
    adjusted_audio.export("ajustado-2.mp3", format="mp3")
