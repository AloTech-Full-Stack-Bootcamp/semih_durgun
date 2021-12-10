# Aşağıda tanımlı fonksiyonla birlikte kullanıldığında,
# a) aldığı tüm sayı parametrelerinin değerini 1 arttıracak,
# b) boolean dönüş değerinin tersine çevirecek (True dönüyor ise False, False dönüyor ise True yapacak şekilde) bir decorator yazalım.
# (Not: Belki de mod_batch fonksiyonu yanlış implemente edilmiştir... Bu durumda öncelikle onun beklenen çıktıyı verecek şekilde düzenlenmesi gerekir.)

def my_awesome_decorator(fun):
    def wrapped(*args):
        return not fun(*[i+1 for i in args])
    return wrapped

@my_awesome_decorator
def mod_batch(*numbers):
    for i in numbers:
        return True if (i % 3 == 0) else False

print(mod_batch(2, 8, 11))
print(mod_batch(6, 5, 5))