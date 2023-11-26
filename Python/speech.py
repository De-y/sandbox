from speech_recognition import *
from os import system

r = Recognizer()
m_data = Microphone()

with m_data as source:
    system('cls')
    print("JARVIS BY DE-Y\n\n[*] Listener Activated. Speak!")
    audio = r.listen(source)
    system('cls')
    print("JARVIS BY DE-Y\n\n[*] Comprehending what you said.")
    print(r.recognize_google(audio))