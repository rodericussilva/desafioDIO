name = input("Digite o nemo do héreoi: ")
experience = input("Digite a experiência: ")
xp = float(experience)
if xp <= 1.000:
    nivel = "Ferro"
    print(f"O herói de nome {name} está no nível de {nivel}")
elif xp >= 1.001 and xp <= 2.000:
    nivel = "Bronze"
    print(f"O herói de nome {name} está no nível de {nivel}")
elif xp >= 2.001 and xp <= 6.000:
    nivel = "Prata"
    print(f"O herói de nome {name} está no nível de {nivel}")
elif xp >= 6.001 and xp <= 7.000:
    nivel = "Ouro"
    print(f"O herói de nome {name} está no nível de {nivel}")
elif xp >= 7.001 and xp <= 8.000:
    nivel = "Platina"
    print(f"O herói de nome {name} está no nível de {nivel}")
elif xp >= 8.001 and xp <= 9.000:
    nivel = "Ascendente"
    print(f"O herói de nome {name} está no nível de {nivel}")
elif xp >= 9.001 and xp <= 10.000:
    nivel = "Imortal"
    print(f"O herói de nome {name} está no nível de {nivel}")
elif xp >= 10.001:
    nivel = "Radiante"
    print(f"O herói de nome {name} está no nível de {nivel}")
else:
    print("Valores inválidos")