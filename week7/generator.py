import random

# Parametre olarak verilen l rakamdan (basamak sayısı) oluşan, yine parametre olarak verilen n adet rastgele sayı üreten bir generator yazalım. Daha önce üretilen bir sayının tekrar üretilmemesini bekliyoruz. Fonksiyonun signature'ı: random_number_generator(n, l=6)

def random_number_generator(n,l=6) :
    numbers = []
    i=0
    while i<n:
        number =random.randrange(10**(l-1),10**l)
        if number not in numbers:
            numbers.append(number)
        else:
            i-=1
        i+=1    
    return numbers
print(random_number_generator(9,6))